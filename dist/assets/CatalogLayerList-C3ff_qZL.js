const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-button-EcJw6lo6.js","assets/button-CSzA_bli.js","assets/index-C-FXvluM.js","assets/index-NV7R-tPD.css","assets/form-DQKnXXcg.js","assets/dom-BREfK1_w.js","assets/interactive-D-sRmNmu.js","assets/label-6px4mHiC.js","assets/component-CeOigQot.js","assets/loadable-Cvdx6nsl.js","assets/locale-DEBMqv85.js","assets/key-BSF9a80T.js","assets/observers-D1cKOKbq.js","assets/t9n-D2cye325.js","assets/icon-8lrZIbmV.js","assets/loader-ANQMuyi7.js","assets/calcite-flow-pVqs_qJ1.js","assets/calcite-flow-item-Dp3v--sg.js","assets/panel-C3cQywDZ.js","assets/action-menu-Twcqn8VH.js","assets/array-D9rxjK_-.js","assets/action-CAtzgaiz.js","assets/popover-BX__IWwR.js","assets/floating-ui-Dm8u0tOT.js","assets/debounce-DUf35w49.js","assets/focusTrapComponent-BriOoisk.js","assets/openCloseComponent-CeEAhbSR.js","assets/Heading-DXUJ8E3s.js","assets/FloatingArrow-DkP1Wvq2.js","assets/scrim-DsHHWNOm.js","assets/calcite-list-uoMWRhXD.js","assets/resources4-BWCcs03d.js","assets/utils3-C2Q9KN47.js","assets/filter-Ig933xs6.js","assets/input2-DWqwRSdq.js","assets/Validation-aFOmH5lh.js","assets/input-De-TCHNF.js","assets/input-message-BVKsAPi_.js","assets/progress-B3_Mj3lS.js","assets/calcite-notice-BUqfqS28.js","assets/conditionalSlot-BMmxtGPE.js","assets/calcite-tooltip-DHysjdJv.js","assets/TableList-KKEw_YwC.js"])))=>i.map(i=>d[i]);
import{bO as b,lb as O,cm as U,cv as M,cq as B,lc as H,X as i,cw as D,Y as s,a3 as A,b1 as j,ck as z,kZ as N,ld as q,le as $,lf as X,lg as d,lh as f,li as C,lj as Y,_ as g,lk as Z,ll as k,lm as J,ln as K}from"./index-C-FXvluM.js";const R={layerListMode:"layer-list-mode"},Q="hide",x=b.ofType(O);let m=class extends U.EventedAccessor{constructor(e){super(e),this.catalogItems=new x,this.checkPublishStatusEnabled=!1,this.catalogLayer=null,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.view=null}initialize(){this.addHandles([M(()=>{var e,o;return[(e=this.catalogLayer)==null?void 0:e.loaded,(o=this.view)==null?void 0:o.ready]},()=>this._compileList(),D),B(()=>{var e;return(e=this.catalogLayer)==null?void 0:e.dynamicGroupLayer.layers},"change",()=>this._compileList()),M(()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled],()=>this._recompileList())])}destroy(){this.view=null,this.catalogItems.removeAll()}get state(){const{view:e,catalogLayer:o}=this;return e!=null&&e.ready&&(o!=null&&o.loaded)?"ready":e&&o?"loading":"disabled"}get totalItems(){return this.catalogItems.flatten(e=>e.children).length}triggerAction(e,o){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:o})}_createListItem(e){const{view:o,listItemCreatedFunction:t,checkPublishStatusEnabled:l,listModeDisabled:n}=this;return new O({checkPublishStatusEnabled:l,listModeDisabled:n,layer:e,listItemCreatedFunction:t,view:o})}_removeAllItems(){this.catalogItems.removeAll()}_getViewableLayers(e){return e?this.listModeDisabled?e:e.filter(o=>H(o)!==Q):void 0}_watchLayersListMode(e){this.removeHandles(R.layerListMode),e&&!this.listModeDisabled&&this.addHandles(M(()=>e.filter(o=>"listMode"in o).map(o=>o.listMode).toArray(),()=>this._compileList()),R.layerListMode)}_compileList(){const{catalogLayer:e}=this;if(!(e!=null&&e.loaded))return;const o=e==null?void 0:e.dynamicGroupLayer.layers;this._watchLayersListMode(o);const t=this._getViewableLayers(o);t!=null&&t.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{catalogItems:o}=this;e.forEach(t=>{o.some(l=>l.layer===t)||o.add(this._createListItem(t))})}_removeItems(e){const{catalogItems:o}=this,t=[];o.forEach(l=>{l&&(e!=null&&e.includes(l.layer))||t.push(l)}),o.removeMany(t)}_sortItems(e){const{catalogItems:o}=this;o.sort((t,l)=>{const n=e.indexOf(t.layer),r=e.indexOf(l.layer);return n>r?-1:n<r?1:0})}_recompileList(){this._removeAllItems(),this._compileList()}};i([s({type:x})],m.prototype,"catalogItems",void 0),i([s()],m.prototype,"checkPublishStatusEnabled",void 0),i([s()],m.prototype,"catalogLayer",void 0),i([s()],m.prototype,"listItemCreatedFunction",void 0),i([s({nonNullable:!0})],m.prototype,"listModeDisabled",void 0),i([s({readOnly:!0})],m.prototype,"state",null),i([s()],m.prototype,"totalItems",null),i([s()],m.prototype,"view",void 0),m=i([A("esri.widgets.CatalogLayerList.CatalogLayerListViewModel")],m);const V=m;let y=class extends j{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryLayerIndicators=!1}};i([s({type:Boolean,nonNullable:!0})],y.prototype,"closeButton",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"collapseButton",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"errors",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"filter",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"flow",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"heading",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"statusIndicators",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"temporaryLayerIndicators",void 0),y=i([A("esri.widgets.CatalogLayerList.CatalogLayerListVisibleElements")],y);const G=y,c="esri-catalog-layer-list",u=`${c}__item`,I={base:c,actionMenu:`${c}__action-menu`,actionGroup:`${c}__action-group`,filterNoResults:`${c}__filter-no-results`,item:u,itemActive:`${u}--active`,itemContent:`${u}-content`,itemContentBottom:`${u}-content-bottom`,itemMessage:`${u}-message`,itemInvisible:`${u}--invisible`,itemActionIcon:`${u}-action-icon`,itemActionImage:`${u}-action-image`,itemTemporaryIcon:`${u}-temporary-icon`,itemTableIcon:`${u}-table-icon`,statusIndicator:`${c}__status-indicator`,publishing:`${c}__publishing`,updating:`${c}__updating`,connectionStatus:`${c}__connection-status`,connectionStatusConnected:`${c}__connection-status--connected`,visibleToggle:`${c}__visible-toggle`,visibleIcon:`${c}__visible-icon`};var F;const W=b.ofType(O);let a=F=class extends z(K){constructor(e,o){super(e,o),this._activeItem=null,this._tooltipReferenceMap=new N,this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._focusLayerFlowItem=null,this._layerListMap=new N,this._rootGroupUid=`operational-${this.uid}`,this._openedLayersController=null,this.catalogLayerList=null,this.catalogOptions=null,this.collapsed=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.knowledgeGraphOptions=null,this.layerTablesEnabled=new b(["knowledge-graph"]),this.mapImageOptions=null,this.messages=null,this.messagesCommon=null,this.minFilterItems=q,this.openedLayers=new b,this.openedLayerLists=new b,this.selectedItems=new W,this.selectionMode="none",this.tableList=null,this.tileOptions=null,this.viewModel=new V,this.visibilityAppearance="default",this.visibleElements=new G,this._onTablesOpen=t=>{this.onTablesOpen?this.onTablesOpen(t):(this.openedLayers.push(t.layer),this._focusLayerFlowItem=t.layer.uid)},this._onCatalogOpen=t=>{this.onCatalogOpen?this.onCatalogOpen(t):(this.openedLayers.push(t.layer.parent),this._focusLayerFlowItem=t.layer.uid)},this._onPanelOpen=()=>{this._focusPanelFlowItem=!0},this._onTooltipReferenceChange=(t,l)=>{l?this._tooltipReferenceMap.set(t,l):this._tooltipReferenceMap.delete(t)},this._onTriggerAction=(t,l)=>{this.triggerAction(t,l)},this._clearActiveItem=()=>{this._activeItem=null},this._setActiveItem=t=>{if(this.visibilityAppearance!=="default")return;const l=Array.from(t.composedPath()).find(n=>{var r;return(r=n.classList)==null?void 0:r.contains(I.item)});this._activeItem=$(l)}}initialize(){this.addHandles(B(()=>this.openedLayers,"change",()=>this._handleOpenedLayersChange(),D))}loadDependencies(){return X({button:()=>g(()=>import("./calcite-button-EcJw6lo6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),flow:()=>g(()=>import("./calcite-flow-pVqs_qJ1.js"),__vite__mapDeps([16,2,3,12,9])),"flow-item":()=>g(()=>import("./calcite-flow-item-Dp3v--sg.js"),__vite__mapDeps([17,2,3,5,6,9,10,11,12,13,18,19,20,21,8,14,15,22,23,24,25,26,27,28,29])),list:()=>g(()=>import("./calcite-list-uoMWRhXD.js"),__vite__mapDeps([30,2,3,5,6,12,31,32,9,13,10,11,33,24,14,34,4,7,8,35,36,37,38,15,29])),notice:()=>g(()=>import("./calcite-notice-BUqfqS28.js"),__vite__mapDeps([39,2,3,40,12,5,9,10,11,13,26,8,14])),tooltip:()=>g(()=>import("./calcite-tooltip-DHysjdJv.js"),__vite__mapDeps([41,2,3,5,23,24,26,28]))})}destroy(){this._destroyOpenedLayerLists(),this._tooltipReferenceMap.clear()}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get _renderedOpenLayerFlowItems(){return this.openedLayers.toArray().map(e=>this._renderLayerFlowItem(e))}get catalogItems(){return this.viewModel.catalogItems}set catalogItems(e){this.viewModel.catalogItems=e}get catalogLayer(){return this.viewModel.catalogLayer}set catalogLayer(e){this.viewModel.catalogLayer=e}get icon(){return"catalog-dataset"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}triggerAction(e,o){return this.viewModel.triggerAction(e,o)}render(){var l,n;const e=(l=this.viewModel)==null?void 0:l.state,o={[f.hidden]:e==="loading",[f.disabled]:e==="disabled"},t=(n=this.catalogItems)==null?void 0:n.filter(r=>!r.hidden&&(this.visibleElements.errors||!r.error));return d("div",{class:this.classes(I.base,f.widget,f.panel,o)},t!=null&&t.length?[this._renderItemTooltips(t),this._renderItems(t)]:this._renderNoItems())}async _createFlowList(e,o){const{_layerListMap:t}=this,l=t.get(e);if(l)return l;const n=e.type==="catalog"?await this._createCatalogLayerList(e):await this._createTableList(e);return o.aborted||t.set(e,n),n}async _handleOpenedLayersChange(){var v;const{_layerListMap:e,openedLayers:o,openedLayerLists:t}=this;(v=this._openedLayersController)==null||v.abort();const l=new AbortController,{signal:n}=l;this._openedLayersController=l,e.forEach((_,L)=>{o.includes(L)||(_.destroy(),e.delete(L))});const r=await Promise.all(o.map(_=>this._createFlowList(_,n)));if(n.aborted)return;t.removeAll(),t.addMany(r);const p=t.at(-1);p?"catalogLayer"in p?(this._set("catalogLayerList",p),this._set("tableList",null)):(this._set("catalogLayerList",null),this._set("tableList",p)):(this._set("catalogLayerList",null),this._set("tableList",null))}_destroyOpenedLayerLists(){this.openedLayerLists.destroyAll(),this.openedLayers.removeAll(),this._layerListMap.clear()}_renderItemTooltip(e){const{_tooltipReferenceMap:o,messages:t}=this;return e?d("calcite-tooltip",{key:`tooltip-${e.layer.uid}`,referenceElement:o.get(e.layer.uid)},t.layerIncompatibleTooltip):null}_renderItemTooltipNodes(e){var o;return e.incompatible?this._renderItemTooltip(e):(o=e.children)==null?void 0:o.filter(t=>!t.hidden).toArray().map(t=>this._renderItemTooltipNodes(t))}_renderItemTooltips(e){return e==null?void 0:e.toArray().map(o=>this._renderItemTooltipNodes(o))}_renderNoItemsMessage(){return d("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return d("div",{class:I.itemMessage,key:"esri-layer-list__no-items"},d("calcite-notice",{icon:"information",kind:"info",open:!0,width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return e?e.flatten(o=>o.children).filter(({hidden:o,panel:t})=>!o&&(t==null?void 0:t.open)&&!t.disabled&&t.flowEnabled).toArray().map(({title:o,panel:t})=>{const l=()=>this._handlePanelFlowItemBack(t);return d("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:o,heading:t.title,headingLevel:this.headingLevel,key:`flow-panel-${t.uid}`,onCalciteFlowItemBack:n=>{n.preventDefault(),l()}},t.render(),d("calcite-button",{appearance:"transparent",onclick:l,slot:"footer-actions",width:"full"},this.messagesCommon.back))}):[]}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,C(e))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,C(e))}_renderItems(e){const{visible:o,collapsed:t,_filterEnabled:l,_rootGroupUid:n,visibleElements:{closeButton:r,collapseButton:p,heading:v,flow:_},selectionMode:L,filterText:w,filterPlaceholder:S,messages:T}=this,E=[d("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:r,closed:!o,collapsed:t,collapsible:p,heading:v?T.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},d("calcite-list",{afterCreate:h=>{h.addEventListener("focusin",this._setActiveItem),h.addEventListener("focusout",this._clearActiveItem)},afterRemoved:h=>{h.removeEventListener("focusin",this._setActiveItem),h.removeEventListener("focusout",this._clearActiveItem)},"data-layer-type":n,filterEnabled:l,filterPlaceholder:S,filterProps:Y,filterText:l?w:"",group:n,key:"root-list",label:T.widgetLabel,onmouseleave:this._clearActiveItem,onmouseover:this._setActiveItem,selectionAppearance:"border",selectionMode:L,onCalciteListChange:h=>this._handleCalciteListChange(h),onCalciteListFilter:h=>{var P;return this.filterText=((P=h.target)==null?void 0:P.filterText)??""}},e==null?void 0:e.toArray().map(h=>this._renderItem(h)),e!=null&&e.length&&l?d("div",{class:I.filterNoResults,slot:"filter-no-results"},d("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(e),this._renderedOpenLayerFlowItems];return o?_?d("calcite-flow",{key:"root-flow"},E):E:null}_focusLayerFlowItemNode(e){this._focusLayerFlowItem===e.dataset.layerUid&&(this._focusLayerFlowItem=null,C(e))}_renderLayerFlowItem(e){var n;const{messages:o,openedLayers:t}=this,l=e.title||this.messages.untitledLayer;return d("calcite-flow-item",{afterCreate:this._focusLayerFlowItemNode,afterUpdate:this._focusLayerFlowItemNode,bind:this,"data-layer-uid":e.uid,description:l,heading:o[e.type==="catalog"?"catalogLayers":"tables"],headingLevel:this.headingLevel,key:`flow-layer-list-${e.uid}`,onCalciteFlowItemBack:r=>{r.preventDefault(),t.pop();const p=t.at(-1);p?this._focusLayerFlowItem=p.uid:this._focusRootFlowItem=!0}},(n=this._layerListMap.get(e))==null?void 0:n.render())}async _createCatalogLayerList(e){const{headingLevel:o,catalogOptions:t,view:l,filterPlaceholder:n,listItemCreatedFunction:r,minFilterItems:p,selectionMode:v,visibilityAppearance:_,onCatalogOpen:L,onTablesOpen:w}=this;return new F({headingLevel:o,view:l,filterPlaceholder:n,listItemCreatedFunction:r,minFilterItems:p,selectionMode:v,visibilityAppearance:_,...t,catalogLayer:e,onCatalogOpen:L,onTablesOpen:w})}_getTableListParams(e){switch(e.type){case"knowledge-graph":return{...this.knowledgeGraphOptions,tables:e.tables};case"map-image":return{...this.mapImageOptions,tables:e.subtables};case"tile":return{...this.tileOptions,tables:e.subtables};default:return null}}async _createTableList(e){const{default:o}=await g(()=>import("./TableList-KKEw_YwC.js"),__vite__mapDeps([42,2,3])),{headingLevel:t,selectionMode:l}=this;return new o({headingLevel:t,selectionMode:l,...this._getTableListParams(e)})}_renderItem(e,o,t){return d(Z,{activeItem:this._activeItem,css:I,dragEnabled:!1,item:e,key:`layerListItem-${e.layer.uid}`,layerTablesEnabled:this.layerTablesEnabled,listModeDisabled:this.viewModel.listModeDisabled,messages:this.messages,messagesCommon:this.messagesCommon,parent:o,parentTitles:t,rootGroupUid:this._rootGroupUid,selectedDragItemLayerUid:null,selectedItems:this.selectedItems,selectionMode:this.selectionMode,visibilityAppearance:this.visibilityAppearance,visibleElements:this.visibleElements,onAction:this._onTriggerAction,onCatalogOpen:this._onCatalogOpen,onPanelOpen:this._onPanelOpen,onTablesOpen:this._onTablesOpen,onTooltipReferenceChange:this._onTooltipReferenceChange})}_handleCalciteListChange(e){const{selectionMode:o,selectedItems:t}=this;if(o==="none")return;const l=e.target.selectedItems.map(n=>$(n)).filter(Boolean);t.removeAll(),t.addMany(l)}};i([s()],a.prototype,"_activeItem",void 0),i([s()],a.prototype,"_tooltipReferenceMap",void 0),i([s()],a.prototype,"_focusRootFlowItem",void 0),i([s()],a.prototype,"_focusPanelFlowItem",void 0),i([s()],a.prototype,"_focusLayerFlowItem",void 0),i([s()],a.prototype,"_layerListMap",void 0),i([s()],a.prototype,"_filterEnabled",null),i([s()],a.prototype,"_renderedOpenLayerFlowItems",null),i([s()],a.prototype,"catalogItems",null),i([s()],a.prototype,"catalogLayer",null),i([s({readOnly:!0})],a.prototype,"catalogLayerList",void 0),i([s()],a.prototype,"catalogOptions",void 0),i([s()],a.prototype,"collapsed",void 0),i([s()],a.prototype,"filterPlaceholder",void 0),i([s()],a.prototype,"filterText",void 0),i([s()],a.prototype,"headingLevel",void 0),i([s()],a.prototype,"icon",null),i([s()],a.prototype,"knowledgeGraphOptions",void 0),i([s()],a.prototype,"label",null),i([s()],a.prototype,"layerTablesEnabled",void 0),i([s()],a.prototype,"listItemCreatedFunction",null),i([s()],a.prototype,"mapImageOptions",void 0),i([s(),k("esri/widgets/CatalogLayerList/t9n/CatalogLayerList")],a.prototype,"messages",void 0),i([s(),k("esri/t9n/common")],a.prototype,"messagesCommon",void 0),i([s()],a.prototype,"minFilterItems",void 0),i([s({readOnly:!0})],a.prototype,"openedLayers",void 0),i([s({readOnly:!0})],a.prototype,"openedLayerLists",void 0),i([s()],a.prototype,"onCatalogOpen",void 0),i([s()],a.prototype,"onTablesOpen",void 0),i([s()],a.prototype,"selectedItems",void 0),i([s()],a.prototype,"selectionMode",void 0),i([s({readOnly:!0})],a.prototype,"tableList",void 0),i([s()],a.prototype,"tileOptions",void 0),i([s()],a.prototype,"view",null),i([J("trigger-action"),s({type:V})],a.prototype,"viewModel",void 0),i([s()],a.prototype,"visibilityAppearance",void 0),i([s({type:G,nonNullable:!0})],a.prototype,"visibleElements",void 0),a=F=i([A("esri.widgets.CatalogLayerList")],a);const te=a;export{te as default};