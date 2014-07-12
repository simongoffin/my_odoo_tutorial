# -*- coding: utf-8 -*-

from openerp import http
from openerp.addons.web.controllers import main

class academy(main.Home):
    @http.route('/', auth='public', website=True)
    def index(self):
        tas = http.request.env['academy.tas'].search([])
        return http.request.render('academy.index', {
            'tas': tas,
        })

    @http.route('/tas/<int:id>/', auth='public', website=True)
    def ta(self, id):
        return http.request.render('academy.ta', teaching_assistants[id])