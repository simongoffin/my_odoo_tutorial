# -*- coding: utf-8 -*-
from openerp.models import Model
from openerp.fields import Char, Html, Date

class TeachingAssistants(Model):
    _name = "academy.tas"

    name = Char()
    biography = Html()

class Lectures(Model):
    _name = 'academy.lectures'
    _order = 'date ASC'

    name = Char(required=True)
    date = Date(required=True)