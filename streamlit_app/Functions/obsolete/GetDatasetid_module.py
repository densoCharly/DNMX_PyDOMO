#!/usr/bin/env python
# coding: utf-8

# In[2]:


#!/usr/bin/env python
# coding: utf-8

# In[2]:


import pandas as pd
# from csv import writer 
import pyodbc
from decouple import config

def get_datasets_id(demo, client_id, client_secret, dataset_name):
    conn_str = f'DRIVER={{SQL Server}};SERVER={config('ODBCserver')};DATABASE={config('ODBCdatabase')};UID={config('ODBCusername')};PWD={config('ODBCpassword')}'
    connection = pyodbc.connect(conn_str)
    cursor = connection.cursor()
    consulta_select = """
    SELECT 
        d.dataset_id
    FROM 
        datasets_table d
    INNER JOIN 
        domo_credentials_table dc ON d.domo_credentials_id = dc.domo_credentials_id
    WHERE 
        d.dataset_name = '{}'
        AND dc.client_id = '{}'
        AND dc.client_secret = '{}'
        AND d.dataset_status = 1;
    """.format(dataset_name, client_id, client_secret)
    cursor.execute(consulta_select)
    dataset_id = cursor.fetchone()
    connection.close()
    
    return dataset_id

