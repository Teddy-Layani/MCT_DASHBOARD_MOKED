sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/viz/ui5/format/ChartFormatter',
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ChartFormatter, Filter) {
        "use strict";

        return Controller.extend("zcrmmokeddash.controller.Main", {
            onInit: async function () {
                let i = 0;
                let that = this;

                var oModel = this.getOwnerComponent().getModel();    
                // oModel.attachBatchRequestCompleted(function(oEvent) {         
                //   //debugger;
                //   that.updateGraphData(1,oEvent.getSource().getBindings());
                //   that.updateGraphData(2,oEvent.getSource().getBindings());
                //   that.updateGraphData(3,oEvent.getSource().getBindings());
                //   that.updateGraphData(4,oEvent.getSource().getBindings());
                //   that.updateGraphData(5,oEvent.getSource().getBindings());
                //   that.updateGraphData(6,oEvent.getSource().getBindings());
                //   that.updateGraphData(7,oEvent.getSource().getBindings());
                // }); 

                try {
                    this.crmUrl =  await this.loadCrmUrl(oModel);
                    
                } catch(error){
                    console.log(error.message);
                }

            
                do {
                    i++;
                    this["oVizFrame" + i]     = this.getView().byId("idChar0" + i );
                    
                    let oPopOver      = this.getView().byId("idPopOverChar0" + i);
                    oPopOver.connect(this["oVizFrame" + i].getVizUid());

                }
                while (i < 7);

            },
            loadCrmUrl: async function(oModel) {
                return new Promise((resolve, reject) => {
                    oModel.read("/UrlDiscoverySet",{
                        success:function(data){
                            if (data.results.length){
                                resolve(data.results[0].Url);    
                            }
                            
                        },
                        error: function(error){
                            reject(error);
                        }
                    });
                });
            },

            onChart1DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar01", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar01").getDataset().mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar01", sum);      

            }   ,              
            onChart2DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar02", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar02").getDataset().mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar02", sum);                      
            }   ,  
            onChart3DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar03", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar03").getDataset().mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar03", sum);                      
            }   ,          
            onChart4DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar04", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar04").getDataset().mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar04", sum);                      
            }   ,   
            onChart5DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar05", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar05").getDataset().mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar05", sum);                      
            }   ,    
            onChart6DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar06", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar06").getDataset().mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar06", sum);                      
            }   ,   

            onChart7DataRecieved: function(oEvent){
                // debugger;
                // alert('data is here');
                this.getOwnerComponent().getModel('mainView').setProperty("/busyChar07", false);
                var sum = 0;    
                var that = this;
                var oBinding = this.byId("idChar07").getDataset().mBindingInfos.data.binding;       
                if(    oBinding 
                    && oBinding.aKeys
                    && oBinding.aKeys.length > 0)
                    oBinding.aKeys.forEach(nameProperty => {
                    var entity = that.getView().getModel().getProperty("/"+nameProperty);
                    try{
                    sum += Number.parseInt(entity.CountTotal);
                    }catch(e){}
                });
                let oModelView = this.getOwnerComponent().getModel("mainView");
                oModelView.setProperty("/sumChar07", sum);                      
            }   ,   
            // updateGraphData(numGraph,modelBindings){
            //     let bindingObjects;
            //     switch (numGraph) {
            //         case 1:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZCOORDINATION_AMOUNTSSet"));
            //             break;
            //         case 2:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZLEADS_IN_CB_EXCPT_COUNTSet"));
            //             break;
            //         case 3:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZNEW_LEADS_BRANDS_LVLSet"));
            //             break;
            //         case 4:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZLEADS_TRANSFERRED_SALESPERSONSet"));
            //             break;
            //         case 5:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZHOT_TRANSFFERED_LEADSSet"));
            //             break;
            //         case 6:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZLEAD_MAINT_BY_SALESPERSONSSet"));
            //             break;
            //         case 7:
            //             bindingObjects = modelBindings.find((obj)=>( obj.sPath == "/ZSTATUS_LEADSSet"));
            //             break;
            //     }
            //     var that =this;
            //     var sum = 0;
            //     if(    bindingObjects 
            //         && bindingObjects.aKeys
            //         && bindingObjects.aKeys.length > 0)
            //     bindingObjects.aKeys.forEach(nameProperty => {
            //         var entity = that.getView().getModel().getProperty("/"+nameProperty);
            //         try{
            //         sum += Number.parseInt(entity.CountTotal);
            //         }catch(e){}
            //     });
            //     let oModelView = this.getOwnerComponent().getModel("mainView");
            //     oModelView.setProperty("/sumChar0" + numGraph, sum);
            // },

            

            onFilterChange: function(oEvent) {
                let i           = 0,
                    aFilter     = [],
                    oModel      = this.getOwnerComponent().getModel("mainView"),
                    oModelData  = oModel.getData();

                if(oModelData.selectedBrand)    
                {
                    aFilter.push(
                        new Filter("Brand", "EQ",oModelData.selectedBrand)
                    );
                }

                if(oModelData.PeriodType)    
                {
                    aFilter.push(
                        new Filter("PeriodType", "EQ",oModelData.PeriodType)
                    );
                }   

                if (oModelData.beginDate && oModelData.endDate) {   
                    oModelData.endDate.setHours(23,59,59,0);         
                 
                    aFilter.push(new Filter({
                        path: "SelectedDate",
                        operator: "BT",
                        value1: oModelData.beginDate,
                        value2: oModelData.endDate
                    }));
                }
                // if(oModelData.date)    
                // {
                //     aFilter.push(
                //         new Filter("SelectedDate", "EQ",oModelData.date)
                //     );
                // }   

                var oFilter =  new Filter({
                    filters: aFilter,
                    and: true
                  });
                
                do {
                    i++;

                    //  Set Busy
                    oModel.setProperty("/busyChar0" + i, true);
                    //  Apply Filter
                    this["oVizFrame" + i].getDataset().getBinding("data").filter(oFilter);

                }
                while (i < 7);

            },
 
            resetFilters: function (bSegmentedButton) {
                let oModelView = this.getOwnerComponent().getModel("mainView");

                //  Date
                oModelView.setProperty("/beginDate", "");
                oModelView.setProperty("/endDate", "");

                //  ComboBox Filters
                oModelView.setProperty("/selectedBrand", "");
                oModelView.setProperty("/PeriodType", "");

            },

            onFilterReset: function (oEvent) {
                this.resetFilters();
                this.onFilterChange();
            },
            // onSelectedData: function(oEvent) {
            //     debugger;
            //     var index = oEvent.mParameters.data[0].data._context_row_number;
            //     var sEntityKey = oEvent.getSource().getDataset().getBinding("data").aKeys[index];
            //     var oBinding = oEvent.getSource().getDataset().getBinding("data").getModel().getProperty("/" + sEntityKey);
            //     if (oBinding.ObjIdsStr) {
            //         var sClient = oEvent.getSource().getDataset().getBinding("data").getModel().aUrlParams.find(oEvent => oEvent.includes("sap-client"));
            //         var sUrl =  `/sap/bc/ui5_ui5/sap/zcrm_leads_list/index.html?sap-ui-language=HE&LEADID=${oBinding.ObjIdsStr}`.substring(0,2000);
            //         if (sClient) 
            //             sUrl += "&" + sClient;
            //         window.open(window.location.origin + sUrl, "_blank");
            //     }
            //     debugger;
            // },
            // onSelectedData: function(oEvent) {
            //     debugger;
            //     //let sServiceName = oEvent.getSource().getDataset().getBinding("data").getPath();
            //     var index = oEvent.mParameters.data[0].data._context_row_number;
            //     var sEntityKey = oEvent.getSource().getDataset().getBinding("data").aKeys[index];
            //     var oBinding = oEvent.getSource().getDataset().getBinding("data").getModel().getProperty("/"+sEntityKey);
            //     if( oBinding.ObjIdsStr && oBinding.ProcessTypeStr){
            //         const url = `${this.crmUrl}?objecttype=${oBinding.Objtype}&processtype=${oBinding.ProcessTypeStr}&objidstring=${oBinding.ObjIdsStr}`.substring(0,2000);
            //         // var url = this.crmUrl + "?objecttype=LEAD&processtype=" + oBinding.ProcessTypeStr + "&objidstring=" + oBinding.ObjIdsStr;
            //         // if(client)
            //         // url+="&" + client;
            //         window.open(url,"_blank");
            //     }
            //     debugger;
            // }
            onSelectedData: function(oEvent) {
                debugger;
                var index = oEvent.mParameters.data[0].data._context_row_number;
                var sEntityKey = oEvent.getSource().getDataset().getBinding("data").aKeys[index];
                var oBinding = oEvent.getSource().getDataset().getBinding("data").getModel().getProperty("/" + sEntityKey);
                if (oBinding.ObjIdsStr) {
                    var sClient = oEvent.getSource().getDataset().getBinding("data").getModel().aUrlParams.find(oEvent => oEvent.includes("sap-client"));
                    var sUrl =  `/sap/bc/ui5_ui5/sap/zcrm_leads_list/index.html?sap-ui-language=HE&LEADID=${oBinding.ObjIdsStr}`.substring(0,2000);
                    if (sClient) 
                        sUrl += "&" + sClient;
                    window.open(window.location.origin + sUrl, "_blank");
                }
                debugger;
            },            
            // ,
            // renderComplete: function(oEvent) {
            //     oEvent.getSource().setBusy(false);
            // }
        });
    });
