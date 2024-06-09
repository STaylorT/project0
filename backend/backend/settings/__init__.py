# __init__.py

import os

environment = os.getenv('DJANGO_ENVIRONMENT', 'development')
if environment == 'production':
    from .production import *
else:
    from .development import *