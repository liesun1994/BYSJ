Ext.define('BYSJ.controller.Changeinfo', {
    extend: 'Ext.app.Controller',
    models: [
    ],

    views: [
        'User.Changeinfo'
    ],

    refs: [
        { ref: "WorkPanel", selector: "#workPanel" },
    ],

    init: function () {
        var me = this,
            panel = me.getWorkPanel();
        me.view = Ext.widget("changeinfoview");
        panel.add(me.view);
        me.control({
        });
    }

});
