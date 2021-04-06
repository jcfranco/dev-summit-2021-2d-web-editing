import {
  queryForFirstFeature,
  setUpEditableLayer,
  setUpView,
  setUpEditor
} from "./utils.js";

const featureLayer = await setUpEditableLayer();
const view = await setUpView(featureLayer);
const editor = await setUpEditor(view);

// 1. fine-tune layer editing operations
//<editor-fold desc="...">
/*editor.layerInfos = [
  {
    layer: featureLayer,

    // 1.a. disable editing entirely for this layer
    // enabled: false

    // 1.b. or you can configure more granular edit operations
    addEnabled: true,
    updateEnabled: true,
    deleteEnabled: false,

    // 1.c. whether to show the attachments UX
    allowAttachments: false
  }
];*/
//</editor-fold>

// 2. use formTemplate to customize feature attribute form on the feature layer itself
//<editor-fold desc="...">
// https://developers.arcgis.com/web-map-specification/objects/formInfo/
/*
featureLayer.formTemplate = {
  title: "El Paso Trails",
  description: "Collect info on popular trails",
  elements: [
    {
      type: "field",
      fieldName: "trailName",

      // 2. provide a user-friendly label
      label: "Trail Name"

      // 2. override if field can be edited on the client-sided
      // editable: false,
    },
    {
      type: "field",
      fieldName: "condition",
      label: "Condition",
    },
    {
      type: "field",
      fieldName: "notes",
      label: "Notes",

      // 2. use expressions for requirement and/or visibility
      requiredExpression: "hasConditionDefined",
      visibilityExpression: "hasConditionDefined",

      // 2. provide extra details for a field by using:
      // 2. a placeholder for text and number fields
      hint: "Path was blocked by shrubs...",
      // 2. description text for a particular field
      description: "Detailed notes help prioritize maintenance"
    },

    // 2. omit difficulty field to exclude
    {
      type: "field",
      fieldName: "difficulty",
      label: "Difficulty"
    },

    {
      type: "field",
      fieldName: "trckType",
      label: "Path Type",

      // 2. specify input type (requires custom coded-value domain for this)
      input: {
        type: "combo-box",
        // 2. can also change the type
        // type: "radio-buttons",

        // 2. customize no value option
        noValueOptionLabel: "Unspecified condition",

        // 2. or remove it entirely
        showNoValueOption: true
      },

      // 2. customize domain for a field on the client
      domain: {
        type: "coded-value",
        name: "trckType",
        codedValues: [
          { name: "Foot", code: "foot" },
          { name: "Bikeway", code: "bikeway" },
          { name: "Multi-use ", code: "multiuse" },
          { name: "Hiking without trails", code: "hiking" }
        ]
      }
    }
  ],
  expressionInfos: [
    {
      name: "hasConditionDefined",
      expression: "!IsEmpty($feature.condition)"
    }
  ]
};
*/
//</editor-fold>

// 3. enable snapping
//<editor-fold desc="...">
/*editor.snappingOptions = {
  enabled: true,
  // all specified layers here will be considered as candidates for snapping
  snappingSources: [{ layer: featureLayer }]
};*/
//</editor-fold>

// 4. use supportingWidgetDefaults to tweak UX
//<editor-fold desc="...">
/*editor.supportingWidgetDefaults = {
  sketch: {
    defaultUpdateOptions: {
      tool: "transform"
    }
  },
  attachments: {
    displayType: "list",
    abilities: {
      editing: false
    }
  }
};*/
//</editor-fold>

// 5. start at a specific edit workflow
//<editor-fold desc="...">
/*await editor.startUpdateWorkflowAtFeatureEdit(
  await queryForFirstFeature(view, featureLayer)
);*/
//</editor-fold>

// 6. watch viewModel props to know when steps are done
//<editor-fold desc="...">
/*editor.watch("activeWorkflow", (workflow, oldWorklow) => {
  if (!workflow) {
    console.log(`${oldWorklow.type} workflow has been exited`);
    return;
  }

  console.log(`currently has active ${workflow.type} workflow`);
});*/
//</editor-fold>
