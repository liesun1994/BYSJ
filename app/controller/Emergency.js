Ext.define('BYSJ.controller.Emergency', {
    extend: 'Ext.app.Controller',
    models: [
    	"Emergency"
    ],
    stores: [
        "Emergency"
    ],
    views: [
        'Emergency.List'
    ],
    refs: [
        { ref: "WorkPanel", selector: "#workPanel" },
       // { ref: "EmListView", selector: "#emlistView" },
       // { ref: "ButtonDelete", selector: "#btnDelete" }
    ],

    init: function () {
        var me = this,
        panel = me.getWorkPanel();
        view = Ext.widget("emlistview");
        panel.add(view);
        me.control({
        });
    },
    
});
