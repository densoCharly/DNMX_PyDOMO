#!/usr/bin/env python
# coding: utf-8

# In[2]:


import pandas as pd
# from csv import writer 
import pyodbc
from decouple import config

def get_servers(demo, client_id, client_secret):

    conn_str = f'DRIVER={{SQL Server}};SERVER={config('ODBCserver')};DATABASE={config('ODBCdatabase')};UID={config('ODBCusername')};PWD={config('ODBCpassword')}'
    connection = pyodbc.connect(conn_str)
    cursor = connection.cursor()
    consulta_select = """
     SELECT DISTINCT
        d.server_ip
    FROM 
        servers_table d
    INNER JOIN 
        databases_table dt ON d.server_id = dt.server_id
	INNER JOIN 
        datasets_table dst ON dt.database_id= dst.database_id
	INNER JOIN 
        domo_credentials_table dct ON dst.domo_credentials_id = dct.domo_credentials_id
    WHERE 
        dct.client_id = '{}'
        AND dct.client_secret = '{}';
    """.format(client_id, client_secret)
    cursor.execute(consulta_select)
    register_intable = cursor.fetchall()
    connection.close()
    
    return register_intable