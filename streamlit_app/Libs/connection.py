import pyodbc
from decouple import config

ODBCserver = 'localhost'
ODBCdatabase = 'PyDomoDB'
ODBCusername = 'sa'
ODBCpassword = '12345678'


try:
    conn_str = f'DRIVER={{SQL Server}};SERVER={ODBCserver};DATABASE={ODBCdatabase};UID={ODBCusername};PWD={ODBCpassword}'
    connection = pyodbc.connect(conn_str)
    cursor = connection.cursor()
except:
    pass


def fetchRow(consult):
    cursor.execute(consult)
    response = cursor.fetchone()
    return response


def fetchAssoc(consult):
    cursor.execute(consult)
    response = cursor.fetchall()
    return response



def commit(consult):
    try:
        cursor.execute(consult)
        connection.commit()
        return True
    except:
        connection.rollback()
        return False