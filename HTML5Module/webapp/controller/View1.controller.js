sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("ns.HTML5Module.controller.View1", {
            onInit: function () {

            }
            , onOpenDialog: function (Chetan) {

                // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // var mytext = this.getView().byId("inpId").getValue();
                // oRouter.navTo("RouteView2",{
                //     myparams: mytext
                // });
                if (!this._runDialog){
                    Fragment.load({
                    name: "ns.HTML5Module.Fragments.MyDialogFragment",
                    controller:this
                }).then(function (oButton) {
                    this._runDialog = oButton;
                    this._runDialog.open();

                }.bind(this));

                }else{
                       this._runDialog.open();

                }
                
               

            },
            // _runDialog: function () {
            //     if (!this._oDialog) {
            //         this._oDialog = sap.ui.xmlfragment("ns.HTML5Module.Fragments.MyDialogFragment", this);
            //         this.getView().addDependent(this._oDialog);

            //     }

            //     return this._oDialog;




            // },
            onContinue: function (Event) {
                window.alert("Continue Pressed");
                this._runDialog.close();

            },
            onCancel: function (Event) {
                if (this._runDialog) {
                    this._runDialog.close();
                }
                window.alert("Cancel Pressed");
            },
            onHoverFunc:function(event){
                        sap.m.MessageToast.show("Hover is Triggered");
            }
        });
    });
