sap.ui.define([
    "sap/ui/core/mvc/Controller"
 
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.HTML5Module.controller.View2", {
             onInit: function () {

              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              oRouter.getRoute("RouteView2").attachPatternMatched(this._onObjectMatched,this);

            },
            _onObjectMatched:function(oEvent){
                var mytext = oEvent.getParameter("arguments").myparams;

                var mybox = this.getView().byId("inpId");
                mybox.setValue(mytext);                   

            }

        });
    });