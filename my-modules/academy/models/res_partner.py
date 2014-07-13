from openerp.models import Model
from openerp.fields import Html

class Partner(Model):
    _inherit = 'res.partner'

    biography = Html()