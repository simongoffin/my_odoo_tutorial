# -*- coding: utf-8 -*-
from openerp.models import Model
from openerp.fields import Char

class TeachingAssistants(Model):
    _name = "academy.tas"

    name = Char()
