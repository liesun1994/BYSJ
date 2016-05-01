Ext.define('BYSJ.controller.Log', {
    extend: 'Ext.app.Controller',
    models: [
    	"Log"
    ],
    stores: [
        "Log"
    ],
    views: [
        'Log.List'
    ],
    refs: [
        { ref: "WorkPanel", selector: "#workPanel" },
        { ref: "LogView", selector: "#loglistView" },
        { ref: "ButtonDelete", selector: "#btnDelete" }
    ],

    init: function () {
        var me = this,
        panel = me.getWorkPanel();
        view = Ext.widget("loglistview");
        panel.add(view);
        //addListener(refreshData,);
        /*me.getLogView().on("selectionchange", me.onLogSelect, me);
        me.getButtonDelete().on("click", me.onDelete, me);*/
        me.control({
        });
    },
    
    onLogSelect: function (model, rs) {
        var me = this,
        length = rs.length;
        me.getButtonDelete().setDisabled(length == 0);
    },
    
    onDelete: function () {
    	alert('123');
        /*var me = this,
            list = me.view.down("gridpanel"),
            rs = list.getSelectionModel().getSelection();
        if (rs.length > 0) {
            Ext.Msg.confirm("删除内容", "是否确定删除选中的内容？", function (btn) {
                if (btn == "yes") {
                    Ext.each(rs, function (item) {
                        Ext.Ajax.request({
                            url: "../Document/Delete",
                            params: {
                                documentid: item.data.log_id
                            },
                            method: "POST",
                            async: false,
                            failure: function (resp, opts) {
                                var respText = Ext.util.JSON.decode(resp.responseText);
                                Ext.Msg.alert('错误', respText.Msg);
                                return;
                            }
                        });
                        list.getStore().remove(item);
                    });
                }
            }, list)
        }*/
    }
    
});
