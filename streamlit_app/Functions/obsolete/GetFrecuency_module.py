#!/usr/bin/env python
# coding: utf-8

# In[2]:


import pandas as pd
# from csv import writer 
import pyodbc
from decouple import config

def get_frequency(demo, client_id, client_secret):

    conn_str = f'DRIVER={{SQL Server}};SERVER={config('ODBCserver')};DATABASE={config('ODBCdatabase')};UID={config('ODBCusername')};PWD={config('ODBCpassword')}'
    connection = pyodbc.connect(conn_str)
    cursor = connection.cursor()
    consulta_select = """
    SELECT DISTINCT
        urt.update_ratio
    FROM 
        update_ratio_table urt
	INNER JOIN 
        datasets_table dst ON urt.updater_id = dst.updater_id
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