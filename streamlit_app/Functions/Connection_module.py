#!/usr/bin/env python
# coding: utf-8

# In[4]:


from pydomo import Domo
import logging
from pydomo.datasets import DataSetRequest, Schema, Column, ColumnType, Policy
from pydomo.datasets import PolicyFilter, FilterOperator, PolicyType, Sorting
import os
import configparser
import pandas as pd
import sys
from decouple import config
import streamlit as st


class Demo:
    def __init__(self, client_id, client_secret):
        self.client_id = client_id
        self.client_secret = client_secret

        self.init_domo_client()

    def init_domo_client(self):
        try:             
            handler = logging.StreamHandler()
            handler.setLevel(logging.INFO)
            formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
            handler.setFormatter(formatter)
            logging.getLogger().addHandler(handler)

            connection = Domo(self.client_id, self.client_secret, logger_name='foo', log_level=logging.INFO, api_host=config('API_HOST'))
            st.session_state['conn'] = connection

            if connection:
                return True
            else:
                return False

        except:
            return False

