(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{561:function(e,n,t){"use strict";t.r(n);var a=t(1),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-and-open-entity-generator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-and-open-entity-generator"}},[e._v("#")]),e._v(" Create And Open - Entity Generator")]),e._v(" "),t("h3",{attrs:{id:"this-is-a-tutorial-on-how-to-use-custom-ts-code-to-generate-an-entity-record-from-an-entity-form-through-ribbon-button"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this-is-a-tutorial-on-how-to-use-custom-ts-code-to-generate-an-entity-record-from-an-entity-form-through-ribbon-button"}},[e._v("#")]),e._v(" This is a tutorial on how to use custom TS code to generate an entity record from an entity form through ribbon button.")]),e._v(" "),t("p",[e._v("You have to add "),t("code",[e._v("JS function")]),e._v(" to RibbonDiff.xml, so it looks something like this.")]),e._v(" "),t("p",[e._v("You must use "),t("code",[e._v("createAndOpen")]),e._v(" function and "),t("code",[e._v("talxis_entitygenerator.js")]),e._v(" library.")]),e._v(" "),t("p",[e._v("Here is the whole RibbonDiff.xml, but be careful you still have to play with the sequence and TemplateAlias to get it exactly where you want it.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<?xml version="1.0" encoding="utf-8"?>\n<RibbonDiffXml xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n  <CustomActions>\n    <CustomAction Id="ntg.lead.createAndOpen.CustomAction" Location="Mscrm.Form.lead.MainTab.Save.Controls._children" Sequence="49">\n      <CommandUIDefinition>\n        <Button Command="ntg.lead.createAndOpen.Command" Id="ntg.lead.createAndOpen.CommandDefinition" LabelText="$LocLabels:ntg.lead.createAndOpen.LabelText" Sequence="49" TemplateAlias="o1"  ModernImage="$webresource:ntg_createadnopenicon.svg" />\n      </CommandUIDefinition>\n    </CustomAction>\n  </CustomActions>\n  <Templates>\n    <RibbonTemplates Id="Mscrm.Templates" />\n  </Templates>\n  <CommandDefinitions>\n    <CommandDefinition Id="ntg.lead.createAndOpen.Command">\n      <EnableRules />\n      <DisplayRules />\n      <Actions>\n       <JavaScriptFunction FunctionName="createAndOpen" Library="$webresource:talxis_entitygenerator.js">\n        <CrmParameter Value="PrimaryControl" />\n        <StringParameter Value="ait_GenerateCase" /> (name of my action\n       </JavaScriptFunction>\n      </Actions>\n    </CommandDefinition>\n  </CommandDefinitions>\n  <RuleDefinitions>\n    <TabDisplayRules />\n    <DisplayRules />\n    <EnableRules />\n  </RuleDefinitions>\n  <LocLabels>\n    <LocLabel Id="ntg.lead.createAndOpen.LabelText">\n      <Titles>\n        <Title description="Generate new record" languagecode="1033" />\n      </Titles>\n    </LocLabel>\n  </LocLabels>\n</RibbonDiffXml>\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br")])]),t("p",[e._v("You must use "),t("code",[e._v("2 parameters")]),e._v(" the first one is always PrimaryControl and the second one is the name of your workflow action.")]),e._v(" "),t("p",[e._v("Then you have to create an action with the given name. And add 2 Process Arguments just like in the picture\n"),t("img",{attrs:{src:"/.attachments/CreateAndOpen.png",alt:"Process Arguments"}}),e._v("\nThe names "),t("code",[e._v("must")]),e._v(" be the same as on the picture.")]),e._v(" "),t("p",[e._v("Then you have to add at least "),t("code",[e._v("3 steps")]),e._v(" to your Action\n"),t("img",{attrs:{src:"/.attachments/CreateAndOpen2.png",alt:"Workflow Setup"}}),e._v(" "),t("code",[e._v("Create Entity")]),e._v(" where you can add some data to your freshly created entity and create the entity itself.\n"),t("code",[e._v("ReturnRecordUrl")]),e._v(" where you set Value to Record URL Create the entity(you want).\n"),t("code",[e._v("CreateEntityName")]),e._v(" holds the name of the entity you are creating. For example talxis_document.\nAnd now you are good to go.\nYou can add more steps to your action to fill empty fields that need to be filled.")])])}),[],!1,null,null,null);n.default=s.exports}}]);