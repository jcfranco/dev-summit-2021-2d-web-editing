import {
  queryForFirstFeature,
  setUpEditableLayer,
  setUpView,
  setUpEditor
} from "./utils.js";

const featureLayer = await setUpEditableLayer();
const view = await setUpView(featureLayer);
const editor = await setUpEditor(view);

//region 1. fine-tune layer editing operations
/*
editor.layerInfos = [
  {
    layer: featureLayer,

    // 1. disable editing entirely for this layer
    // enabled: false

    // 1. or you can configure more granular edit operations
    addEnabled: true,
    updateEnabled: true,
    deleteEnabled: false,

    // 1. whether to show the attachments UX
    allowAttachments: true
  }
];
*/
//endregion

//region 2. define smart form, locally, on the feature layer itself
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

      // 2. override if field can be edited on the client-side
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
        type: "radio-buttons",
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
//endregion

//region 3. enable snapping
/*
editor.snappingOptions = {
  enabled: true,
  // all specified layers here will be considered as candidates for snapping
  featureSources: [{ layer: featureLayer }]
};
*/
//endregion

//region 4. tweak options of supporting widgets
/*
editor.supportingWidgetDefaults = {
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
};
*/
//endregion

//region 5. start at a specific edit workflow
/*
await editor.startUpdateWorkflowAtFeatureEdit(
  await queryForFirstFeature(view, featureLayer)
);
*/
//endregion

//region 6. watch viewModel props to react to workflow toggling
/*
editor.watch("activeWorkflow", (workflow, oldWorkflow) => {
  if (!workflow) {
    console.log(`${oldWorkflow.type} workflow has been exited`);
    return;
  }

  console.log(`currently has active ${workflow.type} workflow`);
});
*/
//endregion
