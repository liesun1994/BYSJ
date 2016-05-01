Ext.Loader.setConfig(
	{enabled:true}
);
Ext.application({
    name: "BYSJ",
    appFolder: 'app',
    controllers: ["MainPanel"],
    autoCreateViewport: true,
    launch: function () {
        // 页面加载完成之后执行
    }
});