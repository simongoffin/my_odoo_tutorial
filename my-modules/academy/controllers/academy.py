# -*- coding: utf-8 -*-

from openerp import http
from openerp.addons.web.controllers import main

class academy(main.Home):
    @http.route('/', auth='public', website=True)
    def index(self):
        ta_group = http.request.env.ref('academy.tas')
        tas = http.request.env['res.users'].search(
            [('groups_id', '=', [ta_group.id])]
        )

        lecture_type = http.request.env.ref('academy.lecture_type')
        lectures = http.request.env['event.event'].search(
            [('type', '=', lecture_type.id)]
        )

        return http.request.render('academy.index', {
            'lectures': lectures,
            'tas': tas,
        })

    @http.route('/tas/<model("res.users"):ta>/', auth='public', website=True)
    def ta(self, ta):
        return http.request.render('academy.ta', {
            'ta': ta,
        })