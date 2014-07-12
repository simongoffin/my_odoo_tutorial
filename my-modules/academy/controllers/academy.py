# -*- coding: utf-8 -*-

from openerp import http
from openerp.addons.web.controllers import main

teaching_assistants = [
    {'name': "Diana Padilla"},
    {'name': "Jody Carroll"},
    {'name': "Lester Vaughn"},
    {'name': "Paul Jimenez"},
    {'name': "Tanya Harris"},
]

class academy(main.Home):
    @http.route('/', auth='none')
    def index(self):
        return http.request.render('academy.index', {
            'tas': teaching_assistants,
        })

    @http.route('/tas/<int:id>/', auth='none')
    def ta(self, id):
        return http.request.render('academy.ta', teaching_assistants[id])