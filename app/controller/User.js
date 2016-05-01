Ext.define('BYSJ.controller.User', {
    extend: 'Ext.app.Controller',
    models: [
    	"User"
    ],
    stores: [
        "User"
    ],
    views: [
        'User.List','User.Edit','User.Test'
    ],
    requires:['BYSJ.view.User.Test'],
    refs: [
        { ref: "WorkPanel", selector: "#workPanel" },
        //{ ref: "UserView", selector: "#usersView" },
    	{ ref: "ButtonUserAdd", selector: "#buttonUserAdd" },
        { ref: "ButtonUserEdit", selector: "#buttonUserEdit" }
    ],

    init: function () {
        var me = this,
        panel = me.getWorkPanel();
        me.view = Ext.widget("userlistview");
        panel.add(me.view);
        me.getButtonUserAdd().on("click", me.onAddUser, me);
        me.getButtonUserEdit().on("click",me.onEditUser,me);
        me.control({
        });
    },
    onAddUser:function () {
    	 var me = this;
            win = BYSJ.view.User.Edit;
            model = me.getUserModel();
        win.form.getForm().url = "php/User/addUser.php";
        win.setTitle("添加用户");
        var newdata = new model;
        win.form.getForm().reset();
        win.form.loadRecord(newdata);
        win.show();
    },
	onEditUser: function () {
        /*var me = this,
            list = me.view.down("gridpanel"),
            rs = list.getSelectionModel().getLastSelected();
        if (rs) {
            var win = BYSJ.view.User.Edit;
            win.form.getForm().url = "php/User/addUser.php";
            win.setTitle("编辑用户");
            win.form.load({
                url: "php/User/getUser.php",
                params: { user_id: rs.data.user_id },
                success: function (form, action) {
                    this.show();
                },
                failure: BYSJ.FormSubmitFailure,
                scope: win
            });
        }*/
       alert('123');
    }

});
