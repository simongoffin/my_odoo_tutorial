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
        tas = [
            '<li><a href="/tas/%d/">%s</a></li>' % (i, ta['name'])
            for i, ta in enumerate(teaching_assistants)
        ]

        return """<!doctype html>
<link href="/web/static/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<body class="container">
    <h1>Introduction to something</h1>
    <h2>Teaching Assistants</h2>
    <ul>
        %(tas)s
    </ul>
</body>
""" % {
        'tas': '\n'.join(tas)
    }

    @http.route('/tas/<int:id>/', auth='none')
    def ta(self, id):
        return """<!doctype html>
<html>
    <head>
        <title>AcademyAcademy TA %(name)s</title>
        <link href="/web/static/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="container">
        <h1>%(name)s</h1>
    </body>
</html>
""" % teaching_assistants[id]