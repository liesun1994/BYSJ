Ext.define('BYSJ.controller.Car', {
    extend: 'Ext.app.Controller',
    models: [
    	"Car"
    ],
	stores: [
        "Car"
    ],
    views: [
        'Car.List','Car.Edit'
    ],

    refs: [
        { ref: "WorkPanel", selector: "#workPanel" },
        { ref: "ButtonCarAdd", selector: "#buttonCarAdd" },
        { ref: "ButtonCarEdit", selector: "#buttonCarEdit" }
    ],

    init: function () {
        var me = this,
        panel = me.getWorkPanel();
        me.view = Ext.widget("carlistview");
        panel.add(me.view);
        me.getButtonCarAdd().on("click", me.onAddCar, me);
        me.getButtonCarEdit().on("click",me.onEditCar,me);
        me.control({
        });
    },
	onAddCar:function(){
		var me = this;
        win = BYSJ.view.Car.Edit;
        model = me.getCarModel();
        win.form.getForm().url = "php/Car/addCar.php";
        win.setTitle("添加车辆信息");
        var newdata = new model;
        win.form.getForm().reset();
        win.form.loadRecord(newdata);
        win.show();
	},
	onEditCar:function(){
		
	}
});
