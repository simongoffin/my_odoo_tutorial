
openerp.oepetstore = function(instance) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    instance.oepetstore = {};

    instance.oepetstore.HomePage = instance.web.Widget.extend({
        template: "HomePage",
        start: function() {
            var pettoys = new instance.oepetstore.PetToysList(this);
            pettoys.appendTo(this.$(".oe_petstore_homepage_left"));
            var motd = new instance.oepetstore.MessageOfTheDay(this);
            motd.appendTo(this.$(".oe_petstore_homepage_right"));
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
                self.$(".oe_mywidget_message_of_the_day").css("color", result.color);
                console.log("Coucou " + result.color);
                self.$(".oe_mywidget_message_of_the_day").click(function() {
                    self.message_clicked(result);
                });
            });
        },
        message_clicked: function(message) {
            this.do_action({
                type: 'ir.actions.act_window',
                res_model: "message_of_the_day",
                res_id: message.id,
                views: [[false, 'form']],
                target: 'current',
                context: {},
            });
        },
    });

    instance.oepetstore.PetToysList = instance.web.Widget.extend({
        template: "PetToysList",
        start: function() {
            var self = this;
            new instance.web.Model("product.product").query(["name", "image"])
                .filter([["categ_id.name", "=", "Pet Toys"]]).limit(5).all().then(function(result) {
                _.each(result, function(item) {
                    var $item = $(QWeb.render("PetToy", {item: item}));
                    self.$el.append($item);
                    $item.click(function() {
                        self.item_clicked(item);
                    });
                });
            });
        },
        item_clicked: function(item) {
            this.do_action({
                type: 'ir.actions.act_window',
                res_model: "product.product",
                res_id: item.id,
                views: [[false, 'form']],
                target: 'current',
                context: {},
            });
        },
    });
    
    instance.oepetstore.FieldColor = instance.web.form.AbstractField.extend({
        init: function() {
            this._super.apply(this, arguments);
            this.set("value", "");
        },
        start: function() {
            this.on("change:effective_readonly", this, function() {
                this.display_field();
                this.render_value();
            });
            this.display_field();
            return this._super();
        },
        display_field: function() {
            var self = this;
            this.$el.html(QWeb.render("FieldColor", {widget: this}));
            if (! this.get("effective_readonly")) {
                this.$("input").change(function() {
                    self.internal_set_value(self.$("input").val());
                });
            }
        },
        render_value: function() {
            if (this.get("effective_readonly")) {
                this.$(".oe_field_color_content").css("background-color", this.get("value") || "#FFFFFF");
            } else {
                this.$("input").val(this.get("value") || "#FFFFFF");
            }
        },
    });

    instance.web.form.widgets.add('color', 'instance.oepetstore.FieldColor');
}

