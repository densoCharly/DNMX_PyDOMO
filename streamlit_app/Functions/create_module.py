#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import pandas as pd
import pymssql
from pydomo.datasets import DataSetRequest, Schema, Column, ColumnType
import pyodbc
from decouple import config
import Libs.connection as conn

def create_dataset(demo, server_ip, username, password, databases_name, 
                   dataset_name, dataset_description, query, update_ratio, 
                   client_id, client_secret):
    # Connection
    connn = pymssql.connect(server_ip, username, password, databases_name)
    cursor = connn.cursor(as_dict=True)
    cursor.execute(query)
    data = cursor.fetchall()
    dfdata = pd.DataFrame(data)
    
    # Create Schema 
    try:
        columns = dfdata.columns
        type_serie = []
    #Obtener tipos de datos
        for column in columns:  
            value_type = dfdata.dtypes["{}".format(column)]
            if "int64" == value_type:
                type_serie.append(Column(ColumnType.DECIMAL, '{}'.format(column)))
            elif "float64" == value_type:
                type_serie.append(Column(ColumnType.DECIMAL, '{}'.format(column)))
            elif "object" == value_type:
                type_serie.append(Column(ColumnType.STRING, '{}'.format(column)))
                
        datasets = demo.datasets
    except Exception as error: 
        print(error)
    
    dsr = DataSetRequest()
    dsr.name = dataset_name 
    dsr.description = dataset_description
    dsr.schema = Schema(type_serie)
    dataset = datasets.create(dsr)
    demo.logger.info("Create DataSet "+ dataset['id'])
                
    dataset_id = dataset['id'] #Id of the Created DataSet
                
    # Load data into DataSet
    demo.ds_update(dataset_id, dfdata)

    
    try:
        # INSERTS            
        consult = """SELECT server_ip  FROM servers_table 
                WHERE server_ip = '{}' """.format(server_ip)
        getServer = conn.fetchRow(consult)
        
        if getServer:
            pass
        else:    
            query = "INSERT INTO servers_table (server_ip) VALUES ('"+ server_ip +"')"
            conn.commit(query)



        consult = """SELECT server_id FROM servers_table 
                        WHERE server_ip = '{}' """.format(server_ip)
        getServer = conn.fetchRow(consult)
        server_id = getServer.server_id


            
        consult = """SELECT username FROM credentials_table 
                        WHERE username = '{}' AND password = '{}' AND server_id = '{}'
                    """.format(username, password, server_id)
        user = conn.fetchRow(consult)

        if user:
            pass
        else: 
            consult = "INSERT INTO credentials_table (username, password, server_id) VALUES ('"+ username +"', '"+password +"', "+str(server_id)+")"
            conn.commit(consult)
             


        # Find credentials_id
        consult = """SELECT credentials_id FROM credentials_table WHERE 
                        username = '{}' AND password = '{}' AND server_id = '{}'""".format(username, password, server_id)
        credential = conn.fetchRow(consult)
        credentialsId = credential.credentials_id
    
 

        # find server_id
        consult = """SELECT server_id FROM servers_table WHERE server_ip = '{}' """.format(server_ip)
        server = conn.fetchRow(consult)
        serverId = server.server_id
            

        consult = """SELECT databases_name FROM databases_table WHERE 
                    databases_name = '{}' AND server_id = '{}' AND credentials_id = '{}'
                    """.format(databases_name, serverId, credentialsId)
        dbName = conn.fetchRow(consult)

        if dbName:
            pass
        else: 
            consult = "INSERT INTO databases_table (databases_name, server_id, credentials_id) VALUES ('"+ databases_name +"', '"+serverId +"', "+str(credentialsId)+")"
            conn.commit(consult)

        
        consult = """SELECT client_id FROM domo_credentials_table WHERE client_id = '{}' AND client_secret = '{}'""".format(client_id, client_secret)
        client = conn.fetchRow(consult)
        clientId = client.client_id

        if clientId:
            pass
        else: 
            consult = "INSERT INTO domo_credentials_table(client_id, client_secret) VALUES ('"+ client_id +"', '"+client_secret +"')"
            conn.commit(consult)

        
        consult = """SELECT database_id FROM databases_table WHERE databases_name = '{}' AND server_id = '{}'""".format(databases_name, serverId)
        databases = conn.fetchRow(consult)
        databaseId = databases.database_id
        


        consult = """SELECT updater_id FROM update_ratio_table WHERE update_ratio = '{}'""".format(update_ratio)
        update = conn.fetchRow(consult)
        updaterId = update.updater_id



        consult = """SELECT domo_credentials_id FROM domo_credentials_table WHERE client_id = '{}' AND client_secret = '{}'""".format(client_id, client_secret)
        domo = conn.fetchRow(consult)
        domoId = domo.domo_credentials_id
        
        

        # get dataset_id
        consult = """SELECT dataset_id FROM datasets_table  WHERE dataset_id = '{}'""".format(dataset_id)
        dataset = conn.fetchRow(consult)
        print(dataset)

        if dataset:
            pass
        else:
            consult = "INSERT INTO datasets_table (dataset_id, dataset_name, dataset_description, query, database_id, updater_id, domo_credentials_id, dataset_status) VALUES ('"+ dataset_id +"', '"+dataset_name +"', '"+dataset_description +"', '"+query+"', "+str(databaseId)+", "+ str(updaterId)+", "+str(domoId) +", 1)"
            return conn.commit(consult)      
        # return True  
    except:
        return False



