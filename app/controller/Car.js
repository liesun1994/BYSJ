Ext.define('BYSJ.controller.Car', {
    extend: 'Ext.app.Controller',
    models: [
    	"Car"
    ],
	stores: [
        "Car"
    ],
    views: [
        'Car.List'
    ],

    refs: [
        { ref: "WorkPanel", selector: "#workPanel" }
    ],

    init: function () {
        var me = this,
            panel = me.getWorkPanel();
        me.view = Ext.widget("carlistview");
        panel.add(me.view);
        me.control({
        });
    }

});
