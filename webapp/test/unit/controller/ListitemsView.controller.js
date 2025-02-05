/*global QUnit*/

sap.ui.define([
	"app/splitappb12/controller/ListitemsView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListitemsView Controller");

	QUnit.test("I should test the ListitemsView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
