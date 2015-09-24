# coding=utf-8
import os
from .base import BASE_DIR

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../db.sqlite3'),
    }
}

TEMPLATE_DIRS = (
    os.path.join(BASE_DIR, '../templates'),
)

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, '../../static')
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, '../static'),
)

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, '../../media')
