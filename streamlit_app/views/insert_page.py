import streamlit as st
import Functions.getSelects_modules as selects
from Functions.create_module import create_dataset


def getServers():
    return selects.get_servers( st.session_state['userID'], st.session_state['clientSecret'])
    # st.write(selects.get_servers(st.session_state['userID'], st.session_state['clientSecret']))

def getFrequency():
    return selects.get_frequency(st.session_state['userID'], st.session_state['clientSecret'])
    # st.write(selects.get_frequency(st.session_state['userID'], st.session_state['clientSecret']))


def insert():
    option = [] 
    freq = []
    for item in getServers():
        option.append(item.server_ip)

    for item in getFrequency():
        freq.append(item.update_ratio)

    col1, col2, col3, col4, col5 = st.columns(5)
    col1.caption('Register a new dashboard')
    agree = col2.checkbox("Is new")    
    
    col1, col2, col3 = st.columns(3)



    # col1.text_input('Server IP')
    if not agree:
        serverIP = col1.selectbox("ServerIP *", (option))
    else:
        serverIP = col1.text_input("ServerIP *", placeholder="0.0.0.0:port")
        # st.checkbox("Great", value = True)
    update = col1.selectbox("Update Frequency *", (freq))
    nameDB = col1.text_input('database name *')


    user = col2.text_input('SQL username *')
    pwd = col2.text_input('SQL password *', type='password')
    datasetName = col2.text_input('DataSet name *')


    description = col3.text_area('DataSet description')
    query = col3.text_area('SQL Query *')

    if st.button('Click to Insert'):
        with st.spinner('Saving, please wait...'):
            if(serverIP.rstrip() and update.rstrip() and nameDB.rstrip()
            and user.rstrip() and pwd.rstrip() and datasetName.rstrip 
            and query.rstrip()
            ):
                if create_dataset(st.session_state['conn'], serverIP, user, pwd, nameDB,
                                    datasetName, description, query, update,
                                    st.session_state['userID'], st.session_state['clientSecret']):
                
                    st.success('Exito!!!')
                else:
                    st.error("Error creating the dataset :face_with_raised_eyebrow:")
            else:
                col1.warning(":warning: Place fill all the options (*) ")


