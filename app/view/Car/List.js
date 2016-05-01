Ext.define('BYSJ.view.Car.List', {
	title: "用户管理",
    extend: 'Ext.grid.Panel',
    alias: 'widget.carlistview',
    layout: "fit",
    store: "Car",
	selType: "checkboxmodel",
    selModel: { checkOnly: false, mode: "MULTI" },


    initComponent: function () {
        var me = this;
        me.tbar = {
            xtype: "pagingtoolbar",
           displayInfo: true, store: me.store,
	        items: [
	           	{ iconCls: "add", scope: me, text: '增加车辆信息', id: "buttonUserAdd" },
	            { iconCls: "edit", scope: me, text: '修改车辆信息', id: "buttonUserEdit", disabled: true },
	            { iconCls: "delete", scope: me, text: '删除车辆信息', id: "buttonUserDelete", disabled: true },
	        ]
        }
        me.columns=[
            //	{header:'用户名',dataIndex:'username',hidden:true},
               { text: '编号', dataIndex: 'car_id' },
                { text: '车牌号', dataIndex: 'car_num',width: 140 },
                { text: '车主姓名', dataIndex: 'owner_name', width: 120 },
                { text: '车主联系方式', dataIndex: 'owner_tel', width: 150 }
        ]
        me.bbar = ["管理车辆管理信息"]
      	me.callParent(arguments);
    }
});