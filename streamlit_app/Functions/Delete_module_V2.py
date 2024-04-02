#!/usr/bin/env python
# coding: utf-8

# In[5]:


import pandas as pd
# import pymssql
# import os
# import configparser
# import pprint
# from csv import writer 
# import schedule
import time
from pydomo import Domo
import logging
from pydomo.datasets import DataSetRequest, Schema, Column, ColumnType, Policy
from pydomo.datasets import PolicyFilter, FilterOperator, PolicyType, Sorting
import configparser
import sys
import pyodbc
from decouple import config
import Libs.connection as conn

def delete_dataset(demo, dataset_id, client_id, client_secret):
    consult = """
    SELECT 
        d.dataset_id,
        d.dataset_name
    FROM 
        datasets_table d
    INNER JOIN 
        domo_credentials_table dc ON d.domo_credentials_id = dc.domo_credentials_id
    WHERE 
        dc.client_id = '{}'
        AND dc.client_secret = '{}'
        AND d.dataset_id = '{}'
        AND d.dataset_status = 1;
    """.format(client_id, client_secret, dataset_id)
    response = conn.fetchRow(consult)
    
    
    if dataset_id == response.dataset_id:
        consult = """UPDATE datasets_table SET 
                    dataset_status = 0 
                    WHERE dataset_id = '{}'
                    """.format(dataset_id)
        
        datasets = demo.datasets
        datasets.delete(dataset_id)
        

        return conn.commit(consult)
    else:
        return False