import pandas as pd
import Libs.connection as conn


def get_datasets_id(client_id, client_secret, dataset_name):
    consult = """
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
    return (conn.fetchRow(consult))

def get_datasets(client_id, client_secret):
    consult = """
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
    
    return (conn.fetchAssoc(consult)) 

def get_servers(client_id, client_secret):
    consult = """
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
    return (conn.fetchAssoc(consult)) 

def get_frequency(client_id, client_secret):
    consult = """
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
    return (conn.fetchAssoc(consult))

def get_id_frequency(frequency):
    consult = """
            SELECT DISTINCT
                updater_id
            FROM 
                update_ratio_table
            WHERE 
                update_ratio = '{}';
            """.format(frequency)
    return (conn.fetchRow(consult))

def other_frequency(datasetId):
    consult = """
            SELECT DISTINCT urt.update_ratio 
            FROM update_ratio_table as urt, 
            datasets_table dt
            WHERE urt.updater_id != 
            (SELECT updater_id from datasets_table WHERE dataset_id = '{}');
            """.format(datasetId)
    return (conn.fetchAssoc(consult))

def update_frequency(frequencyId, datasetId):
    consult = "update datasets_table SET updater_id = "+ str(frequencyId)+" WHERE dataset_id = '"+datasetId+"'"
    return conn.commit(consult)

