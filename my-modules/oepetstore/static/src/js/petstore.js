
openerp.oepetstore = function(instance) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    instance.oepetstore = {};

    instance.oepetstore.HomePage = instance.web.Widget.extend({
        template: "HomePage",
        start: function() {
            var motd = new instance.oepetstore.MessageOfTheDay(this);
            motd.appendTo(this.$el);
        },
    });

    instance.web.client_actions.add('petstore.homepage', 'instance.oepetstore.HomePage');

    instance.oepetstore.MessageOfTheDay = instance.web.Widget.extend({
        template: "MessageofTheDay",
        init: function() {
            this._super.apply(this, arguments);
        },
        start: function() {
            var self = this;
            new instance.web.Model("message_of_the_day").query(["message"]).first().then(function(result) {
                self.$(".oe_mywidget_message_of_the_day").text(result.message);
            });
        },
    });

}

