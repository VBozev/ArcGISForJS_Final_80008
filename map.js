require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home"
    
], (esriConfig, WebMap, MapView, ScaleBar, Legend, Home) => {
    esriConfig.apikey = "AAPKb65e0f9459e54524983d875ea23edb66IPXwyWdAtPXJM6BLx1WnCOHBtU-yslIHaLa2HvstGhbY8KK1_pbrIDvvKuWThivG";

    const webmap = new WebMap({
        portalItem: {
            id: "46473f7635e34c7dbf948195b8dd9c4f"
        }
    })

    const view = new MapView({
        container: "viewDiv",
        map: webmap
    });

    const homeBtn = new Home({
        view: view
    })

    view.ui.add(homeBtn, "top-right");

})