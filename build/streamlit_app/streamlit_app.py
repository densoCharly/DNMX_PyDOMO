import streamlit as st
import Functions.Connection_module as conn
import views.menu_page as navbar

st.set_page_config(page_title='PyDomo System', page_icon=':chart:', layout="wide", 
                   initial_sidebar_state="auto", menu_items=None)

def panelLogin():
    st.title('Welcome to PyDomo System') 
    idC = st.text_input("Client ID")
    pwd = st.text_input('Password', type="password" )

    if st.button('LogIn'):
        creds_entered(idC.strip(), pwd.strip())
    


def creds_entered(idC, pwd):
    if idC and pwd:
        if (conn.Demo(idC, pwd).init_domo_client()):
            st.session_state['userID'] = idC
            st.session_state['clientSecret'] = pwd
            st.session_state['auth'] = True
            st.switch_page("streamlit_app.py")
        else:
            st.error("Invalid client ID/Client Secret :face_with_raised_eyebrow:")
    else:
        st.session_state['auth'] = False

        if not idC:
            st.warning('Please enter the Client ID')
        elif not pwd:
            st.warning('Please enter the Client Secret')
        else:
            st.error("Invalid client ID/Client Secret :face_with_raised_eyebrow:")


def login():  
    if "auth" not in st.session_state:
        panelLogin()
        return False
    else:
        if st.session_state['auth']:
            return True
        else:
            panelLogin()
            return False


if login():
    if not navbar.navbar():
        login()
        