
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
        this.$el.append("<div>We are so happy to see you again in this menu!</div>");
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
    
    instance.oepetstore.MySpanishClass = instance.oepetstore.MyClass.extend({
        say_hello: function() {
            this._super();
            console.log("translation in Spanish: hola", this.name);
        },
    });

    var my_object = new instance.oepetstore.MySpanishClass("Nicolas");
    my_object.say_hello();
    // print "hello Nicolas \n translation in Spanish: hola Nicolas" in the console

    var my_object = new instance.oepetstore.MyClass("Simon");
    my_object.say_hello();
    // print "hello Nicolas" in the console
    
    instance.web.client_actions.add('petstore.homepage', 'instance.oepetstore.HomePage');
    
}

