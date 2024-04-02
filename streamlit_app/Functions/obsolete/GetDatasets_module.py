#!/usr/bin/env python
# coding: utf-8

# In[2]:


import pandas as pd
# from csv import writer 
import pyodbc
from decouple import config

def get_datasets(demo, client_id, client_secret):

    conn_str = f'DRIVER={{SQL Server}};SERVER={config('ODBCserver')};DATABASE={config('ODBCdatabase')};UID={config('ODBCusername')};PWD={config('ODBCpassword')}'
    connection = pyodbc.connect(conn_str)
    cursor = connection.cursor()
    consulta_select = """
    SELECT 
        d.dataset_name
    FROM 
        datasets_table d
    INNER JOIN 
        domo_credentials_table dc ON d.domo_credentials_id = dc.domo_credentials_id
    WHERE 
        dc.client_id = '{}'
        AND dc.client_secret = '{}'
        AND d.dataset_status = 1;
    """.format(client_id, client_secret)
    cursor.execute(consulta_select)
    register_intable = cursor.fetchall()
    connection.close()
    
    return register_intable