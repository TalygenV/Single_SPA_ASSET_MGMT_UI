(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a9cabd8"],{f9bd:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"modal-header d-flex"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("AddRelationship"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button",title:"Close"},on:{click:function(e){return t.ClosePopup()}}},[e("em",{staticClass:"fa fa-times"})]),e("span",{staticClass:"user-guide"},[t._m(0),e("div",{staticClass:"divancuserguide collapse overflow-auto",attrs:{id:"collapseReplyUG"}},[e("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarreplyuserguideMangeView"}},[e("div",{staticClass:"con",domProps:{innerHTML:t._s(t.$t("USERGUIDE_AC_ADD_RELATIONSHIP"))}})])])])]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"rad_value",attrs:{type:"radiobutton"}},[e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input dynamic IssuedByIds",attrs:{type:"radio",id:"SearchProductName",name:"SearchProduct",value:"CheckedCheckBox"},domProps:{checked:t.SearchByBarcode},on:{change:function(e){return t.searchByProduct("barcode")}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"SearchProductName"}},[t._v(t._s(t.$t("SearchbyBarcodeRFID")))])]),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input dynamic IssuedByIds",attrs:{type:"radio",id:"SearchProducts",name:"SearchProduct",value:"CheckedCheckBox"},domProps:{checked:!t.SearchByBarcode},on:{change:function(e){return t.searchByProduct("product")}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"SearchProducts"}},[t._v(t._s(t.$t("SearchbyProduct")))])])])]),t.SearchByBarcode?[e("Form",{ref:"ProductSearch",staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"},[e("div",{staticClass:"col-12 float-left mt-3 SearchByBarcode p-0"},[e("div",{staticClass:"col-12 col-sm-12 float-left"},[e("div",{staticClass:"form-group mb-3"},[e("label",[e("span",{attrs:{id:""}},[t._v(t._s(t.$t("Searchby"))+" "+t._s(t.$t("Barcode"))+"/"+t._s(t.$t("SerialNumber"))+"/"+t._s(t.$t("RFID"))+":")])]),e("span",{staticClass:"text-danger"},[t._v("*")]),e("Field",{staticClass:"w-100",attrs:{name:"BarCode",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtBarcode,expression:"txtBarcode"}],class:{"form-control":!0,"is-invalid":a[0]},attrs:{name:"BarCode",placeholder:"Enter Barcode",type:"text"},domProps:{value:t.txtBarcode},on:{keyup:function(e){return t.searchfilter()},input:function(e){e.target.composing||(t.txtBarcode=e.target.value)}}}),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"BarCode"}},[t._v(t._s(a[0]))]):t._e()]}}],null,!1,777179284)})],1)])]),e("div",{staticClass:"col-9 float-left searchByProduct"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"Subject"}},[t._v(t._s(t.$t("Location"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{staticClass:"w-100",attrs:{name:"Location",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.LocationValueForBarCode,expression:"LocationValueForBarCode"}],class:{"form-control":!0,"is-invalid":a[0]},attrs:{name:"Location"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.LocationValueForBarCode=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"",disabled:t.LocationValueForBarCode}},[t._v(t._s(t.$t("Select"))+" ")]),""!=t.LocationValueForBarCode?e("option",{attrs:{disabled:t.LocationValueForBarCode},domProps:{value:t.LocationValueForBarCode}},[t._v(" "+t._s(t.LocationName)+" ")]):t._e()]),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Location"}},[t._v(t._s(a[0]))]):t._e()]}}],null,!1,2709118327)})],1)]),e("div",{staticClass:"col-sm-6 col-md-6 col-lg-3 float-left pl-md-0 mt-0 mt-md-4 mt-sm-4"},[e("div",{staticClass:"background-0 text-left w-100 form-check-inline"},[e("input",{attrs:{type:"hidden",id:"hdnSearch",value:""}}),e("a",{staticClass:"btn btn-success w-50 mr-1 px-4 hlsearch",attrs:{title:"",id:"Searchassest_barcode",href:"javascript:;","data-toggle-tooltip":"tooltip","data-original-title":"Search"},on:{click:function(e){return t.SearchAssetByBarCode()}}},[e("em",{staticClass:"fa fa-search"})]),e("a",{staticClass:"btn btn-danger w-50 clearsearchtext px-4",attrs:{id:"aClear",href:"javascript:;",title:"Clear all ","data-toggle-tooltip":"tooltip","data-original-title":"Clear"},on:{click:function(e){return t.ClearhdnIdsOnChange()}}},[e("em",{staticClass:"fa fa-refresh"})])])])])]:t._e(),t.SearchByBarcode?t._e():[e("Form",{ref:"ProductSearchBar",staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"},[e("div",{staticClass:"col-12 float-left searchByProduct"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("Location"))),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{staticClass:"w-100",attrs:{name:"Location",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("tree-view",{class:{"is-invalid":a[0]},attrs:{options:t.options,placeholder:"Select Location","show-count":!0,flat:!0},on:{input:function(e){return t.BindItemTypeByUserId(t.TreeValue)}},model:{value:t.TreeValue,callback:function(e){t.TreeValue=e},expression:"TreeValue"}}),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Location"}},[t._v(t._s(a[0]))]):t._e()]}}],null,!1,781829271)})],1)]),e("div",{staticClass:"col-12 float-left",attrs:{id:"searchByProduct"}},[e("div",{staticClass:"col-12 float-left pl-0 py-2"},[e("div",{staticClass:"rad_value",attrs:{type:"radiobutton"}},[e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input dynamic",attrs:{type:"radio",id:"ProductNameItem",value:"ProductName"},domProps:{checked:t.IsProductName},on:{change:function(e){return t.searchByItemName("ProductName")}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"ProductNameItem"}},[t._v(t._s(t.$t("AssetId")))])]),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input dynamic",attrs:{type:"radio",id:"ItemName",value:"Product"},domProps:{checked:!t.IsProductName},on:{change:function(e){return t.searchByItemName("Product")}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"ItemName"}},[t._v(t._s(t.$t("ItemName")))])])])]),e("br"),t.IsProductName?e("div",{staticClass:"col-9 float-left pl-0"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("ProductName"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{staticClass:"w-100",attrs:{name:"Product",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.txtAssetType,expression:"txtAssetType"}],class:{"form-control":!0,"is-invalid":a[0]},attrs:{name:"AssetTypeData"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.txtAssetType=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:""}},[t._v("Select")]),t._l(t.AssetTypeData,(function(a,s){return e("option",{key:s,domProps:{value:a.Value}},[t._v(t._s(a.Text)+" ")])}))],2),a[0]?e("span",{staticClass:"invalid-feedback d-block"},[t._v(t._s(a[0]))]):t._e()]}}],null,!1,4283199202)})],1)]):t._e(),t.IsProductName?t._e():e("div",{staticClass:"col-9 float-left pl-0"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("ItemName"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{staticClass:"d-flex",attrs:{name:"ItemName",rules:{required:!0},label:"ItemName"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("div",{staticClass:"input-group mb-3",staticStyle:{position:"relative"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.assetUniqueItem,expression:"assetUniqueItem"}],staticClass:"form-control",class:{"form-control":!0,"is-invalid":a[0]},attrs:{id:"txtAssetItems",name:"ItemName",placeholder:"Enter Product Name",type:"text"},domProps:{value:t.assetUniqueItem},on:{input:function(e){e.target.composing||(t.assetUniqueItem=e.target.value)}}}),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"ItemName"}},[t._v(t._s(a[0]))]):t._e(),e("div",{staticClass:"unique_dynamicdatalist"},[t.IsDDLShowHide?e("ul",{staticClass:"listOfProduct"},t._l(t.UniqueItemData,(function(a,s){return e("li",{key:s,staticClass:"listitem all-items",attrs:{value:a.Value},on:{click:function(e){return t.uniqueItemChange(a)}}},[t._v(" "+t._s(a.Name))])})),0):t._e()])]),e("a",{staticClass:"btn float-left",staticStyle:{"background-color":"#fff",color:"#303030","border-color":"#abb5bf","border-left":"none","max-height":"37px"},attrs:{href:"javascript:;",id:"customddlinput"},on:{click:t.itemDDLShowHide}},[e("em",{staticClass:"dropdown-toggle float-right"})])]}}],null,!1,2372530739)})],1)]),e("div",{staticClass:"col-sm-8 col-md-8 col-lg-3 float-left pl-md-0 mt-0 mt-md-4 mt-sm-4 pr-0"},[e("div",{staticClass:"background-0 text-left w-100 form-check-inline"},[e("input",{attrs:{type:"hidden",id:"hdnSearch",value:""}}),e("a",{staticClass:"btn btn-success w-50 mr-1 px-4 hlsearch",attrs:{title:"",href:"javascript:;","data-toggle-tooltip":"tooltip","data-original-title":"Search"},on:{click:function(e){return t.SearchAssetByProduct()}}},[e("em",{staticClass:"fa fa-search"})]),e("a",{staticClass:"btn btn-danger w-50 clearsearchtext px-4",attrs:{id:"aClear",href:"javascript:;",title:"Clear all ","data-toggle-tooltip":"tooltip","data-original-title":"Clear"},on:{click:function(e){return t.ClearhdnIdsOnChange()}}},[e("em",{staticClass:"fa fa-refresh"})])])])])])]],2),t.searchResult?e("AddrelationListing",{attrs:{ProductData:t.ProductData,UniqueData:t.UniqueData,LocationValueForBarCode:t.LocationValueForBarCode,iselectVal:t.iselectVal,txtBarcode:t.txtBarcode,txtAssetType:t.txtAssetType,LocationValue:t.TreeValue,AssetData:t.AssetData,FetchData:t.FetchData,ClosePopup:t.ClosePopup}}):t._e()],1)])],1)])])])])},i=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"ancuserguide text-white",attrs:{"data-toggle":"collapse",href:"#collapseReplyUG",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[e("em",{staticClass:"fa fa-files-o pr-2"}),t._v("User Guide")])}],o=(a("14d9"),a("1115")),r=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"col-12 listing tblassestgroupinfo px-0"},[e("div",{staticClass:"table-responsive"},[0==!t.ProductData.length?e("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",attrs:{id:"tblassestgroupinfo"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticClass:"text-center"},[e("span",[t._v(t._s(t.$t("SerialNumber")))])]),e("th",{staticClass:"text-center"},[e("span",[t._v(t._s(t.$t("ItemName")))])]),e("th",{staticClass:"text-center"},[e("span",[t._v(t._s(t.$t("PairProduct")))])]),e("th",{staticClass:"text-center"},[e("span",[t._v(t._s(t.$t("ItemMandatoryForCheckOut")))])]),e("th",{staticClass:"text-center"},[e("span",[t._v(t._s(t.$t("Action")))])])])]),e("tbody",[t._l(t.ProductData,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"text-center"},[t._v(" "+t._s(s+1)+" ")]),e("td",[t._v(t._s(a.Name))]),null==t.iselectVal?e("td",{staticClass:"text-center"},[e("select",{ref:"productn",refInFor:!0,staticClass:"form-control",class:{"is-invalid":!a.isValidation},on:{change:function(e){return t.bindProductItem(e,a.count)}}},[e("option",{attrs:{value:""}},[t._v("Select Product Name")]),t._l(t.AssetData,(function(a,s){return e("option",{key:s,domProps:{value:a.Value}},[t._v(" "+t._s(a.Text)+" ")])}))],2)]):t._e(),null!=t.iselectVal?e("td",{staticClass:"text-center"},[e("select",{staticClass:"form-control",class:{"is-invalid":!a.isValidation},on:{change:function(e){return t.bindProductItem(e,a.count)}}},[e("option",{attrs:{value:""}},[t._v("Select Product Name")]),t._l(t.UniqueData,(function(a,s){return e("option",{key:s,domProps:{value:a.Value}},[t._v(t._s(a.Name)+" ")])}))],2)]):t._e(),e("td",{staticClass:"text-center"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.IsMandatory,expression:"item.IsMandatory"}],staticClass:"form-check-input rdoticketfor custom-control-input dynamic",attrs:{id:"isCheck",type:"checkbox"},domProps:{checked:Array.isArray(a.IsMandatory)?t._i(a.IsMandatory,null)>-1:a.IsMandatory},on:{change:[function(e){var s=a.IsMandatory,i=e.target,o=!!i.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);i.checked?n<0&&t.$set(a,"IsMandatory",s.concat([r])):n>-1&&t.$set(a,"IsMandatory",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(a,"IsMandatory",o)},function(e){return t.ChangeCheck(e)}]}}),t._m(0,!0)])])]),e("td",{staticClass:"text-center single-action"},[parseInt(t.result)==parseInt(s+1)?e("a",{attrs:{href:"javascript:;",id:"addProduct",title:"Add Product"},on:{click:function(e){return t.AddMoreItem(a)}}},[e("i",{staticClass:"fa fa-plus px-4 text-success"})]):t._e(),e("a",{attrs:{href:"javascript:;",title:"Delete"},on:{click:function(e){return t.deleteItem(a.count)}}},[e("i",{staticClass:"fa fa-trash px-4 text-danger"})])])])})),0==t.NoRecordLength?e("tr",[e("td",{staticClass:"text-danger text-center no-record",attrs:{colspan:"7"}},[t._v("No Record Found")])]):t._e()],2)]):t._e()]),e("div",{staticClass:"col-12 text-right mt-3"},[e("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;",title:"Save"},on:{click:function(e){return t.SubmitData()}}},[e("i",{staticClass:"fa fa-save pr-2"}),t._v(t._s(t.$t("Save"))+" ")]),t._v("  "),e("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:;",title:"Cancel",id:"ancCancelgroupRequisition"},on:{click:t.RelationPopUpClose}},[e("i",{staticClass:"fa fa-close pr-2"}),t._v(t._s(t.$t("Cancel")))])])])])},n=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"slider round"},[e("span",{staticClass:"slider-yes"},[t._v("Yes")]),e("span",{staticClass:"slider-no"},[t._v("No")])])}],l={props:{UniqueData:{type:Array},ProductData:{type:Array},LocationValue:{type:Number},txtAssetType:{type:Number},iselectVal:{type:Number},ClosePopup:{type:Function},LocationValueForBarCode:{type:Number},txtBarcode:{type:String},FetchData:{type:Function},AssetData:{type:Array}},data(){return{NoRecordLength:0,noDataAvailable:"No Product is available in the items list.",isCheckDeployItem:"",product:{},Relations:[],sliderValue:0,IsMandatory:!1,ChildId:null,result:1,isVal:!1,UniqueItemData1:[]}},created:function(){this.NoRecordLength=this.ProductData.length},updated(){var t=this;t.lastItem()},methods:{lastItem(){this.result=this.ProductData.length},ChangeCheck:function(t){var e=this;return e.IsMandatory=!1,1==t.target.checked?void(null!=e.ChildId&&(e.Relations.forEach(t=>{var a=e.Relations.some(t=>t.ChildId===e.ChildId);t.IsMandatory=1==a}),e.IsMandatory=!1)):e.IsMandatory=!1},AddMoreItem(t){var e=this;if(null!=e.ChildId){const a={Name:t.Name,AssetCatalogueId:t.AssetCatalogueId,count:e.ProductData.length+1,isValidation:!1};e.ProductData.push(a),e.ChildId=null}else e.ProductData.map(t=>{if(1==t.count)return t.isValidation=!1}),e.ShowAlert(e.$t("Product Name is required."),"warning",e.$t("Alert"))},bindProductItem(t,e){var a=this,s=[];let i=!1;if(a.ChildId=parseInt(t.target.value),1==e&&(a.Relations=[],0==a.Relations.length)){let t={ChildId:a.ChildId,IsMandatory:!1};return a.Relations.unshift(t),void a.ProductData.map(t=>{if(t.count==e)return t.isValidation=!0})}s.push(a.Relations),s.forEach(s=>{if(i=a.Relations.some(e=>e.ChildId===parseInt(t.target.value)),0==i){let t={ChildId:a.ChildId,IsMandatory:!1};return a.Relations.push(t),void a.ProductData.forEach(t=>{t.count==e&&(t.isValidation=!0)})}return t.target.value=null,a.ChildId=null,a.ShowAlert(a.$t("Relation with this Product Has already been added."),"failure",a.$t("Alert"))})},deleteItem(t){var e=this;const a=e.ProductData.findIndex(e=>e.count===t);return-1!==a&&(e.ProductData.splice(a,1),this.$parent.ClearhdnIdsOnChange()),e.ShowAlert(e.$t("Item has been deleted Successfully "),"success",e.$t("Alert"))},SubmitData:function(){var t=this;let e={};if(""==this.LocationValueForBarCode){if(0==t.Relations.length)return t.ShowAlert(t.$t("Product Name is required."),"warning",t.$t("Alert"));e={ParentId:this.txtAssetType?parseInt(this.txtAssetType):this.iselectVal,type:this.txtAssetType?"ProductName":"Product",LocationId:this.LocationValue,Relations:t.Relations}}else e={ParentId:parseInt(this.txtBarcode),type:"ProductName",LocationId:this.LocationValueForBarCode,Relations:t.Relations};o["a"].SaveAssetRelationship(e).then(e=>{if(null!=e.data){var a=e.data;if(0==a.status)return this.ClosePopup(),t.ShowAlert(t.$t("Add relationship Submitted successfully "),""+a.msg,t.$t("Alert"));t.ShowAlert(t.$t("Something went wrong"),""+a.msg,t.$t("Alert"))}})},RelationPopUpClose(){this.$parent.ClosePopup()}}},c=l,d=a("2877"),u=Object(d["a"])(c,r,n,!1,null,null,null),h=u.exports,m=a("ca17"),p=a.n(m),C=(a("542c"),{components:{AddrelationListing:h,"tree-view":p.a},props:{FetchData:{type:Function}},data(){return{SearchByBarcode:!0,IsProductName:!0,SearchByProduct:!1,LocationData:null,TreeValue:null,LocationValueForBarCode:null,AssetTypeData:[],txtBarcode:null,txtAssetType:"",searchResult:!1,isLoading:!1,IsDDLShowHide:!1,assetUniqueItem:"",iselectVal:null,UniqueItemData:[],LocationName:"",ProductData:[],options:[],isuniqueSearch:"No",AssetData:[],UniqueData:[]}},created:function(){var t=this;t.searchByProduct("barcode"),t.GetLocationByCompanyId()},methods:{searchByProduct:function(t){var e=this;this.SearchByBarcode=!1,"barcode"==t?(e.isdata=!1,e.SearchByBarcode=!0,e.CheckedCheckBox="SearchProductName",e.BarcodeSelected="BarCodeSearch",e.ProductData=[]):(e.isdata=!0,e.SearchByBarcode=!1,e.CheckedCheckBox="SearchProducts",e.BarcodeSelected="ProductSearch",e.ProductData=[]),this.ClearhdnIdsOnChange()},ClearhdnIdsOnChange:function(){var t=this;t.txtBarcode="",t.ProductData=[],t.LocationValueForBarCode="",t.TreeValue=null,t.assetUniqueItem=""},itemDDLShowHide:function(){this.IsDDLShowHide=!this.IsDDLShowHide},uniqueItemChange:function(t){this.iselectVal=t.Value,this.assetUniqueItem=t.Name,this.IsDDLShowHide=!1},searchByItemName:function(t){this.IsProductName=!1,"ProductName"==t?(this.IsProductName=!0,this.IsProduct="ProductName",this.assetUniqueItem=""):(this.IsProductName=!1,this.IsProduct="Product")},BindItemTypeByUserId:function(t){var e=this,a=`id=&isView=&barcode=&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&startTime=&endTime=&locationId=${e.TreeValue}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;o["a"].GetCompanyAssestCatalogsDetalis(a).then(t=>{e.AssetTypeData=t.data.Result}),e.GetAssetUniqueData()},GetLocationByCompanyId:async function(){var t=this,e="reqForm=assetassignment";await o["a"].GetLocationByuserId(e).then(e=>{t.FindalLocationArray=[],e.data.data.forEach(a=>{var s=t.FindalLocationArray.filter((function(t){return t.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==s.length&&null==a.PARENT_LOCATION_ID){let s=a.COMPANY_LOCATION_ID,i=t.getChildLocation(s,a,e.data.data);t.FindalLocationArray.push(i)}}),t.options=t.FindalLocationArray})},getChildLocation:function(t,e,a){let s=this,i={};i={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let o=i;var r=a.filter((function(e){return e.PARENT_LOCATION_ID==t}));let n=[];return r.forEach(t=>{let e=t.COMPANY_LOCATION_ID;var o=n.filter((function(e){return e.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==o.length){var r=a.filter((function(t){return t.PARENT_LOCATION_ID==e}));if(null!=r&&r.length>0){let i=s.getChildLocation(e,t,a);n.push(i)}else i={id:""+t.COMPANY_LOCATION_ID,label:""+t.LOCATION_NAME},n.push(i)}}),o.children=n,o},ClosePopup(){this.$parent.CloseAddRelationShipPopup()},searchfilter:function(){var t=this;t.isLoading=!0;var e=`id=&isView=1&barcode=${this.txtBarcode}&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=search&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;o["a"].GetCompanyAssestCatalogsDetalis(e).then(e=>{null!=e.data[0]?(t.LocationName=e.data[0].LocationName,t.LocationValueForBarCode=e.data[0].LocationId,t.isLoading=!1):t.isLoading=!1})},SearchAssetByBarCode(){var t=this;t.isuniqueSearch="yes",t.isLoading=!0;var e=`id=&isView=1&barcode=${t.txtBarcode}&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=search&isuniqueSearch=${t.isuniqueSearch}&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${t.LocationValueForBarCode}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;t.$refs.ProductSearch.validate().then(a=>{if(!a)return t.isLoading=!1;o["a"].GetCompanyAssestCatalogsDetalis(e).then(e=>{if(e.data.length>0){t.isLoading=!1,t.searchResult=!0,t.ProductData=e.data;let a=!1,s=1;t.ProductData.map(t=>{t.isValidation=a,t.count=s})}else t.searchResult=!0,t.NoRecordLength=0,t.ProductData=[],t.isLoading=!1}),t.GetAssetUniqueData()})},GetAssetUniqueData:function(){var t=this;let e="";t.isLoading=!0,e=null==t.LocationValueForBarCode||""==t.LocationValueForBarCode?`assetCatalogId=&name=&issueTo=&locationId=${t.TreeValue}&requestFrom=addAssetRelationShip&assetType=`:`assetCatalogId=&name=&issueTo=&locationId=${t.LocationValueForBarCode}&requestFrom=addAssetRelationShip&assetType=`,o["a"].GetUniqueAssetItems(e).then((function(e){t.UniqueItemData=e.data})),t.isLoading=!1},SearchAssetByProduct:function(){let t="";var e=this;e.isLoading=!0,e.AssetData=[],e.UniqueData=[],""!=e.txtAssetType?e.AssetTypeData.forEach(t=>{t.Value!=e.txtAssetType&&e.AssetData.push(t)}):""!=e.iselectVal&&e.UniqueItemData.forEach(t=>{t.Value!=e.iselectVal&&e.UniqueData.push(t)}),t=null==e.iselectVal?`id=${e.txtAssetType}&isView=1&barcode=&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=search&isuniqueSearch=no&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${e.TreeValue}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=${e.txtAssetType}`:`id=&isView=1&barcode=&assetType=0&assetUniqueId=${e.iselectVal}&selfCheckout=&reqFrom=addAssetRelationShip&isFor=search&isuniqueSearch=no&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${e.TreeValue}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=${e.iselectVal}&catalogueIds=`,e.$refs.ProductSearchBar.validate().then(a=>{a?o["a"].GetCompanyAssestCatalogsDetalis(t).then(t=>{if(t.data.length>0){e.searchResult=!0,e.isLoading=!1,e.ProductData=t.data;let a=!0,s=1;e.ProductData.map(t=>{t.isValidation=a,t.count=s})}else e.searchResult=!0,e.NoRecordLength=0,e.isLoading=!1}):e.isLoading=!1})}}}),f=C,g=Object(d["a"])(f,s,i,!1,null,null,null);e["a"]=g.exports},ff55:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("tg-list",{attrs:{IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"AssetRequisitionId",HeaderText:t.$t("NEW_ASSET_REQUISITION"),ListData:t.ProductData,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecord,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.SortExp,NorecordfoundText:t.$t("NoRecordfound"),SortBy:t.SortBy},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata}}),t.IsShowRelation?e("RelationPopup"):t._e()],1)},i=[],o=(a("14d9"),a("1115"));let r=[{title:"Request New Product Type",iconClass:"fa fa-plus",callbackfunction:"RequestNewProductType",href:"",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Delete",iconClass:"fa fa-trash",callbackfunction:"",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1}],n=[{fieldName:"Product Name",fieldType:"text",fieldIcon:"fa-file",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Product Type",fieldType:"text",fieldIcon:"fa-user",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];function l(t,e,a){}var c={buttons:r,leftsearchSchema:n,bindleftCommonSearchdropdown:l},d=a("f9bd"),u={components:{RelationPopup:d["a"]},data(){return{listheaderbuttons:c.buttons,leftSearchFields:c.leftsearchSchema,listActions:c.listActions,LegendArray:[],ProductData:[],PageSize:10,PageNumber:1,PageSizeOption:null,StatusListForListing:[],Headers:[{COLUMN_NAME:"ProductName",DATA_TYPE:"image",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Product Name"),DISPLAY_ORDER:1},{COLUMN_NAME:"AssetTypeId",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Product Type"),DISPLAY_ORDER:2},{COLUMN_NAME:"Quantity",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Requested Quantity"),DISPLAY_ORDER:3},{COLUMN_NAME:"Description",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Description"),DISPLAY_ORDER:4,settings:{clickEvent:this.clickEventOfColumn,formatter:this.columnDataFormatter}},{COLUMN_NAME:"CreatedAt",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("CreatedAt"),DISPLAY_ORDER:5},{COLUMN_NAME:"CreatedBy",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Created By"),DISPLAY_ORDER:6},{COLUMN_NAME:"View",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("View"),DISPLAY_ORDER:7,settings:{isInSlot:!0}}],noRecord:!0,TotalRecord:0,CurrentPage:1,TotalPages:0,LocationId:"",SortBy:"",SortExp:"",PageNumber:1,isPaged:1,PageSize:10,searchCondition:"",widgets:[],legendProgress:[],IsShowRelation:!1}},created(){var t=this;t.FetchData()},methods:{columnDataFormatter:function(t,e){return t[e.COLUMN_NAME]},FetchData:function(){var t=this;t.isLoading=!0;var e=`pageSize=${t.PageSize}&pageNumber=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${this.SortExp}&${t.searchCondition}`;o["a"].NewAssetRequisitionListing(e).then(e=>{null!=e.data&&(e.data.length>0?(t.ProductData=e.data,t.TotalRecord=e.data[0].Total,t.TotalPage=Math.ceil(t.TotalRecord/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.isLoading=!1):(t.noRecord=!0,t.ProductData=[],t.TotalRecord=0,t.isLoading=!1)),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)})},clickEventOfColumn:function(t,e){},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},currentPageMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},GetPageSizeOption:function(){for(var t=[],e=10,a=e;a<e+95;a+=5)t.push(a);this.PageSizeOption=t},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},commonHeaderButtonClick(t){switch(t.callbackfunction){case"RequestNewProductType":this.RequestNewProductType();break}},RequestNewProductType(){this.$router.push({path:"/AssetRequisition/AddNewRequisition"})},AddRelationShipPopup(){},CloseAddRelationShipPopup(){},actionButtonClick(){},sortdata:function(t){},renderActions(t){}},updated:function(){this.BindActionButtonEvent()}},h=u,m=a("2877"),p=Object(m["a"])(h,s,i,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-7a9cabd8.js.map