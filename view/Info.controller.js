sap.ui.controller("my-app.view.Info", {

    onInit: function() {
        this.bus = sap.ui.getCore().getEventBus();
    },

    doNavBack: function(event) {
        this.bus.publish("nav", "back");
    } 
});