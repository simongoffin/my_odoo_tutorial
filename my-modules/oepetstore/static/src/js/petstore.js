
openerp.oepetstore = function(instance) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    instance.oepetstore = {};
    
    instance.oepetstore.HomePage = instance.web.Widget.extend({
        start: function() {
            this.$el.append("<div>Hello dear OpenERP user!</div>");
            var greeting = new instance.oepetstore.GreetingsWidget(this);
            greeting.appendTo(this.$el);
        },
    });
    
    instance.oepetstore.GreetingsWidget = instance.web.Widget.extend({
        start: function() {
            console.log(this.getParent().$el );
            // will print "div.oe_petstore_homepage" in the console
        },
    });

    instance.oepetstore.MyClass = instance.web.Class.extend({
        init: function(name) {
            this.name = name;
        },
        say_hello: function() {
            console.log("hello", this.name);
        },
    });
    
    
    
    var my_object = new instance.oepetstore.MyClass("Simon");
    my_object.say_hello();
    // print "hello Nicolas" in the console
    
    instance.web.client_actions.add('petstore.homepage', 'instance.oepetstore.HomePage');
    
}

