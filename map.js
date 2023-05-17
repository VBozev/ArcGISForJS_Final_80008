require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Search"
], (esriConfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList, BasemapToggle, BasemapGallery, Search) => {
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

    view.ui.add(homeBtn, "top-left");

    const legend = new Legend({
        view: view
    })

    view.ui.add(legend, "bottom-right");

    const scalebar = new ScaleBar({
        view: view,
        unit: "metric",
        style: "ruler"
    })

    view.ui.add(scalebar, "bottom-left");

    view.ui.add("basemap-btn", "top-right");
    view.ui.add("layerList-Btn", "top-right");

    const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery"
    })

    const basemapGallery = new BasemapGallery({
        view: view,
        source: {
            query: {

            }
        }
    })

    view.ui.add(basemapGallery, "top-right");

    view.ui.add(basemapToggle, "bottom-right");

    const layerList = new LayerList({
        view: view
    })

    view.ui.add(layerList, "top-right");

    document
        .getElementById("layerList-Btn")
        .addEventListener("click", function () {
            toggleButton("layerList")
        })

    document
        .getElementById("basemap-btn")
        .addEventListener("click", function () {
            toggleButton("gallery");
        })

    const searchWid = new Search({
        view: view
    })

    view.ui.add(searchWid, "bottom-left");

    function toggleButton(item) {
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
        const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
        let currentProp;

        if (item == "layerList") {
            currentProp = layerListEl.style.getPropertyValue("display");
            layerListEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            galleryEl.style.setProperty("display", "none");
        } else if (item == "gallery") {
            currentProp = galleryEl.style.getPropertyValue("display");
            galleryEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            layerListEl.style.setProperty("display", "none");

        }

    }
})