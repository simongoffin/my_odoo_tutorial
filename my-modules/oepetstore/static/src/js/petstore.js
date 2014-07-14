
openerp.oepetstore = function(instance) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    instance.oepetstore = {};
    
    instance.oepetstore.HomePage = instance.web.Widget.extend({
        template: "HomePageTemplate",
        init: function(parent) {
            this._super(parent);
            this.names=["Simon","Moi","Ok"];

        },
        start: function() {
        },
    });
    
    instance.web.client_actions.add('petstore.homepage', 'instance.oepetstore.HomePage');
    
}

