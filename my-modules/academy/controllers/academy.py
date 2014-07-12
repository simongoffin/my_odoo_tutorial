# -*- coding: utf-8 -*-

from openerp import http
from openerp.addons.web.controllers import main

class academy(main.Home):
    @http.route('/', auth='none')
    def index(self):
        return """<!doctype html>
<link href="/web/static/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<body class="container">
    Hello, world!
</body>
"""


