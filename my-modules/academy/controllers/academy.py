# -*- coding: utf-8 -*-
from openerp import http


class academy(http.Controller):
    @http.route('/academy/academy/', auth='public', website=True)
    def index(self, **kw):
        return "Hello, world!"



class academy(http.Controller):
    @http.route('/', auth='none')
    def index(self):
        return """<!doctype html>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
        <body class="container">
           Hello, world!
        </body>
    """



    @http.route('/academy/academy/<model("academy.academy"):academy>', type='http', auth='public', website=True)
    def academy(self, academy, **kw):
        return "Hello, %r!" % academy

