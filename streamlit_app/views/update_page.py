import streamlit as st
# import Functions.GetDatasets_module as select
# import Functions.GetDatasetid_module as selectId
import Functions.ManualUpdate_module as updateFunction
import Functions.getSelects_modules as selects
import time

datasetId = ''

def getServers():
    return selects.get_datasets( st.session_state['userID'], st.session_state['clientSecret'])

def getId(datasetName):
        datasetID = (selects.get_datasets_id(st.session_state['userID'], 
                                            st.session_state['clientSecret'], 
                                            datasetName)).dataset_id
        
        if datasetID:
            st.session_state['datasetId'] = datasetID
        else:
            st.warning(':error: No find some ID to datasetName selected')
        
def getFrequency():
    return selects.other_frequency(st.session_state['datasetId'])
    # st.write(selects.get_frequency(st.session_state['userID'], st.session_state['clientSecret']))

def getFrequencyId(frequency):
    return (selects.get_id_frequency(frequency)).updater_id
 

def update():
    option = []
    freq = []
    for item in getServers():
        option.append(item.dataset_name)




    col1, col2, col3 = st.columns(3)
    col1.caption('Update a dashboard')
    agree = col2.checkbox("Change Update Frequency?")    


    datasetName = col1.selectbox("DataSet Name", (option))
    getId(datasetName)

    for item in getFrequency():
        freq.append(item.update_ratio)

    if agree:
        update = col1.selectbox("Select Update Frequency *", (freq))
        idFreq = getFrequencyId(update)

    if 'datasetId' in st.session_state:
        if not agree:
            if st.button('Click to Update Data'):
                with st.spinner('Updating, please wait...'):
                    if updateFunction.manual_update_dataset(st.session_state['conn'], 
                                                        st.session_state['datasetId']):
                        st.success(':+1: Dashboard has been updated')
                    else:
                        st.error('Some error has been ocurred to try update the dashboard')
        else:
            if st.button('Click to Update Frequency'):
                if selects.update_frequency(idFreq, st.session_state['datasetId']):
                    st.success(':+1: Frequency has been updated')
                else:
                    st.error('Some error has been ocurred to try update the frequency')

                
        

            

