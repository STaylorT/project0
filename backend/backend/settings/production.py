# production.py

from .base import *

DEBUG = False

ALLOWED_HOSTS = ['your-production-domain.com']

CORS_ALLOWED_ORIGINS = [
    "https://your-production-domain.com",
]

# Additional production-specific settings