Ext.define('BYSJ.controller.Police', {
    extend: 'Ext.app.Controller',
    models: [
    	"User"
    ],
    stores: [
        "Police"
    ],
    views: [
        'User.PList'
    ],
    refs: [
        { ref: "WorkPanel", selector: "#workPanel" },
    	 { ref: "ButtonUserAdd", selector: "#buttonUserAdd" },
        /*
        { ref: "ButtonUserEdit", selector: "#buttonUserEdit" },
        { ref: "ButtonUserDelete", selector: "#buttonDelete" }*/
    // { ref: "ChangepasswordView", selector: "#changepasswordView" }
    ],

    init: function () {
        var me = this,
        panel = me.getWorkPanel();
        me.view = Ext.widget("policelistview");
        panel.add(me.view);
       // me.getButtonUserAdd().on("click", me.onAddUser, me);
        /*me.getUserView().on("edit", me.onEditcomplete, me);
        me.getUserView().on("canceledit", me.onCancelEdit, me);
        me.getUserView().on("beforeedit", me.onBeforeEdit, me);
        me.getButtonUserDelete().on("click", me.onDeleteUser, me);
        me.getButtonUserResetPassword().on("click", me.onResetPassword, me);*/
        me.control({
        });
    },
    onAddUser:function () {
    	 var me = this;
            win = BYSJ.view.User.Edit;
            model = me.getUserModel();
        win.form.getForm().url = "../ProductDirectory/Save";
        win.setTitle("新增内容");
        var newdata = new model;
        win.form.getForm().reset();
        win.form.loadRecord(newdata);
        win.show();

    }

});
