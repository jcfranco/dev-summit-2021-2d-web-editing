import config from "https://js.arcgis.com/4.19/@arcgis/core/config.js";
import Map from "https://js.arcgis.com/4.19/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.19/@arcgis/core/views/MapView.js";
import FeatureLayer from "https://js.arcgis.com/4.19/@arcgis/core/layers/FeatureLayer.js";
import Editor from "https://js.arcgis.com/4.19/@arcgis/core/widgets/Editor.js";
import {whenFalseOnce} from "https://js.arcgis.com/4.19/@arcgis/core/core/watchUtils.js";

config.request.proxyUrl = "proxy"

export async function queryFeatureById(objectId, featureLayer) {
  const { features } = await featureLayer.queryFeatures({
    objectIds: [objectId],
    outFields: ["*"]
  });

  if (features.length === 0) {
    return;
  }

  const [firstFeature] = features;

  return firstFeature
}

export async function queryForFirstFeature(view, featureLayer) {
  const lv = await view.whenLayerView(featureLayer);
  await whenFalseOnce(lv, "updating")

  const { features } = await lv.queryFeatures({ geometry: view.extent });
  return queryFeatureById(features[0].attributes[featureLayer.objectIdField], featureLayer);
}

export async function setUpEditableLayer() {
  const featureLayer = new FeatureLayer("https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/El_Paso_Recreation_AttributeEditsOnly/FeatureServer/1");
  return featureLayer.load();
}

export async function setUpView(featureLayer) {
  const map = new Map({
    basemap: "topo-vector",
    layers: [featureLayer]
  });

  const view = new MapView({
    container: "viewDiv",
    map,
    extent: {
      xmin: -11862821.526652534,
      ymin: 3733387.7909429423,
      xmax: -11844476.639864117,
      ymax: 3739703.4004049967,
      spatialReference: {
        wkid: 102100
      }
    },
    zoom: 14
  });

  return view.when();
}

export async function setUpEditor(view ) {
  const editor = new Editor({ view });
  view.ui.add(editor, "top-right");
  return editor.when();
}
