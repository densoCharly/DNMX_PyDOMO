import pyodbc
from decouple import config

try:
    conn_str = f'DRIVER={{SQL Server}};SERVER={config('ODBCserver')};DATABASE={config('ODBCdatabase')};UID={config('ODBCusername')};PWD={config('ODBCpassword')}'
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