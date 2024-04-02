import streamlit as st
# import Functions.GetDatasets_module as select
# import Functions.GetDatasetid_module as selectId
import Functions.Delete_module_V2 as deleteFunction
import Functions.getSelects_modules as selects
from streamlit_modal import Modal

modal = Modal(key="Demo Key",title="test")

def getServers():
    return selects.get_datasets(st.session_state['userID'], st.session_state['clientSecret'])


def getId(datasetName):
        datasetID = (selects.get_datasets_id(st.session_state['userID'], 
                                            st.session_state['clientSecret'], 
                                            datasetName)).dataset_id
        
        if datasetID:
            st.session_state['datasetId'] = datasetID
        else:
            st.warning(':error: No find some ID to datasetName selected')
        


def delete():
    option = []
    for item in getServers():
        option.append(item.dataset_name)

    st.caption('Delete a dashboard')
    col, col2, col3 = st.columns(3)

    datasetName = col.selectbox("DataSet Name to Delete", (option))
    getId(datasetName)

    if 'datasetId' in st.session_state:
            if st.checkbox("Are you sure you want to Delete "+ datasetName +"?"):    
                if st.button('Click to Delete'):
                    with st.spinner('Deleting, please wait...'):
                        if deleteFunction.delete_dataset(st.session_state['conn'], 
                                                            st.session_state['datasetId'],
                                                            st.session_state['userID'], 
                                                            st.session_state['clientSecret']
                                                            ):
                            st.success('Dashboard has been deleted')
                        else:
                            st.error('Some error has been ocurred to try delete the dashboard')
                    

