sap.ui.jsview("demo.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo.demo
	*/ 
	getControllerName : function() {
		return "demo.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demo.demo
	*/ 
	createContent : function(oController) {
		var oTable = new sap.ui.table.Table({
			id:"BSTAB1",
			title: "Seven wonders of world",
		});
		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Wonders"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "name"),
			sortProperty: "name",
			filterProperty: "name",
			});
		oTable.addColumn(oColumn);	
		oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Locations"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "email"),
			sortProperty: "email",
			filterProperty: "email",
			});
		oTable.addColumn(oColumn);	
		return oTable;
	}

});
