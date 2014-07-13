# -*- coding: utf-8 -*-

from openerp import http
from openerp.addons.web.controllers import main

class academy(main.Home):
    @http.route('/', auth='public', website=True)
    def index(self):
        lectures = http.request.env['academy.lectures'].search([])
        tas = http.request.env['academy.tas'].search([])
        return http.request.render('academy.index', {
            'lectures': lectures,
            'tas': tas,
        })

    @http.route('/tas/<model("academy.tas"):ta>/', auth='public', website=True)
    def ta(self, ta):
        return http.request.render('academy.ta', {
            'ta': ta,
        })