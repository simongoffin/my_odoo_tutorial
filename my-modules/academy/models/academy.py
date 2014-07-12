# -*- coding: utf-8 -*-
from openerp.models import Model
from openerp.fields import Char


class academy(Model):
    _name = "academy.academy"

    name = Char()
