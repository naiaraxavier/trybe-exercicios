from django.contrib import admin
from tasks.models import Task

# Register your models here.
admin.site.site_header = "Trybe Schedule"
admin.site.register(Task)
