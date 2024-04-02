#!/usr/bin/env python
# coding: utf-8

# In[1]:


# import Connection_module as connn
import pandas as pd
import pymssql
import os
import configparser
from csv import writer 
# import schedule
import pyodbc
from decouple import config
import Libs.connection as conn


def manual_update_dataset(demo, dataset_id):
    spinner = False
    try:
        consult = """
                    SELECT
                        d.dataset_id,
                        dc.client_id,
                        dc.client_secret,
                        ct.username,
                        ct.password,
                        st.server_ip,
                        dt.databases_name,
                        d.query
                    FROM
                        datasets_table d
                    INNER JOIN
                        databases_table dt ON d.database_id = dt.database_id
                    INNER JOIN
                        credentials_table ct ON dt.credentials_id = ct.credentials_id
                    INNER JOIN
                        domo_credentials_table dc ON d.domo_credentials_id = dc.domo_credentials_id
                    INNER JOIN
                        servers_table st ON dt.server_id = st.server_id
                    INNER JOIN
                        update_ratio_table urt ON d.updater_id = urt.updater_id
                    WHERE
                        d.dataset_id = '{}';
                """.format(dataset_id)
        

        response = conn.fetchRow(consult)
        # print(response)

        username = response[3]
        password = response[4]
        server = response[5]
        database = response[6]
        query = response[7]

        # return True
        

        try:
            connn = pymssql.connect(server, username, password, database)
            cursor = connn.cursor(as_dict=True)
            cursor.execute(query)
            data = cursor.fetchall()
            dfdata = pd.DataFrame(data)
            
        except pymssql.Error as e:
            print(f"Error de conexión: {e}")
                
        dataset_list = demo.ds_list(df_output=True)
        existance = dataset_list[dataset_list['id'] == dataset_id]

        
        if existance.empty:
            # return 'No se encontro el DataSet en Domo'
            return False
        else:
            demo.ds_update(dataset_id, dfdata)   
            return True       
    except Exception as e:
        # print(e)
        return False
