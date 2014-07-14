
openerp.oepetstore = function(instance) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    instance.oepetstore = {};

    instance.oepetstore.ColorInputWidget = instance.web.Widget.extend({
        template: "ColorInputWidget",
        start: function() {
            var self = this;
            this.$el.find("input").change(function() {
                self.input_changed();
            });
            self.input_changed();
        },
        input_changed: function() {
            var color = "#";
            color += this.$el.find(".oe_color_red").val();
            color += this.$el.find(".oe_color_green").val();
            color += this.$el.find(".oe_color_blue").val();
            this.set("color", color);
        },
    });

    instance.oepetstore.HomePage = instance.web.Widget.extend({
        template: "HomePage",
        start: function() {
            this.colorInput = new instance.oepetstore.ColorInputWidget(this);
            this.colorInput.on("change:color", this, this.color_changed);
            this.colorInput.appendTo(this.$el);
        },
        color_changed: function() {
            this.$el.find(".oe_color_div").css("background-color", this.colorInput.get("color"));
        },
    });

    instance.web.client_actions.add('petstore.homepage', 'instance.oepetstore.HomePage');
}

