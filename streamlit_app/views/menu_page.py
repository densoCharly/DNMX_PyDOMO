import streamlit as st
import hydralit_components as hc
import datetime
import views.insert_page as insert
import views.update_page as update
import views.delete_page as delete


def navbar():
    menu_data = [
        {'icon': "bi bi-cloud-plus-fill", 'label':"Insert"},
        {'icon': "bi bi-pen",'label':"Update"},
        {'icon': "bi bi-trash", 'label':"Delete"},
        
    ] 

    over_theme = {'txc_inactive': '#FFFFFF'}


    hc.nav_bar(
        menu_definition=menu_data,
        # override_theme=over_theme,
        login_name='Logout',
        key='optionMenu',
        hide_streamlit_markers=False, #will show the st hamburger as well as the navbar now!
        sticky_nav=False, #at the top or not
        # sticky_mode='pinned', #jumpy or not-jumpy, but sticky or pinned
    )

    # st.write(st.session_state)

    if not st.session_state['optionMenu'] :
        insert.insert() 
    elif st.session_state['optionMenu'] == 'Insert':
        insert.insert()
    elif st.session_state['optionMenu'] == 'Update':
        update.update()
    elif st.session_state['optionMenu'] == 'Delete':
        delete.delete()
    elif st.session_state['optionMenu'] == 'Logout': 
        st.text('Are you sure you want to log out?')
        if st.button('Log Out'):
            st.session_state['auth'] = False
            st.session_state['userID'] = ''
            st.session_state['clientSecret'] = ''
            st.session_state['conn'] = ''
            st.switch_page("streamlit_app.py")


    # insertD, updateD, deleteD, logout = st.tabs(["Insert", "Update", "Delete", "LogOut"])
    # with insertD:
    #     insert.insert() 

    # with updateD:
    #     update.update()

    # with deleteD:
    #     delete.delete()

    # with logout:
    #     st.text('Are you sure you want to log out?')
    #     if st.button('Log Out'):
    #         st.session_state['auth'] = False
    #         st.session_state['userID'] = ''
    #         st.session_state['clientSecret'] = ''
    #         st.session_state['conn'] = ''
    #         st.switch_page("streamlit_app.py")
    
     
    return True
#     # display a version version of the option bar
#     # op2 = hc.option_bar(option_definition=option_data,title='Feedback Response',key='PrimaryOption',override_theme=over_theme,font_styling=font_fmt,horizontal_orientation=False)
