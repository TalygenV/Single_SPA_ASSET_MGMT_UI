(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac90607a"],{"3eab":function(t,e,a){var s=a("7e09");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("327861b0",s,!0,{sourceMap:!1,shadowMode:!1})},"55a7":function(t,a,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header d-flex"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("ProductAvailability"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.ClosePOPuP(t.event)}}},[e("em",{staticClass:"fa fa-times"})]),e("span",{staticClass:"user-guide"},[t._m(0),e("div",{staticClass:"divancuserguide collapse overflow-auto",attrs:{id:"collapseReplyUG"}},[e("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarreplyuserguideMangeView"}},[e("div",{staticClass:"con",domProps:{innerHTML:t._s(t.$t("USERGUIDE_AC_CHECK_AVAILABILITY"))}})])])])]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"rad_value",attrs:{type:"radiobutton"}},[e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input dynamic IssuedByIds",attrs:{type:"radio",id:"SearchProductName",name:"SearchProduct",value:"CheckedCheckBox"},domProps:{checked:t.SearchByBarcode},on:{change:function(e){return t.searchByProduct("barcode")}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"SearchProductName"}},[t._v(t._s(t.$t("SearchbyBarcodeRFID")))])]),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input dynamic IssuedByIds",attrs:{type:"radio",id:"SearchProducts",name:"SearchProduct",value:"CheckedCheckBox"},domProps:{checked:!t.SearchByBarcode},on:{change:function(e){return t.searchByProduct("product")}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"SearchProducts"}},[t._v(t._s(t.$t("SearchbyProduct")))])])])]),e("Form",{ref:"BarCodeForm",staticClass:"d-block w-100"},[e("div",{staticClass:"col-12 mt-3 p-0",attrs:{id:"searchByBarcode"}},[t.SearchByBarcode?e("div",{staticClass:"col-12 col-sm-9 col-md-9 col-lg-10 float-left"},[e("div",{staticClass:"form-group mb-2"},[e("label",[e("span",{attrs:{id:""}},[t._v(t._s(t.$t("SearchbyBarcodeRFID")))])]),e("span",{staticClass:"text-danger"},[t._v("*")]),e("Field",{attrs:{name:"txtBarcode",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtBarcode,expression:"txtBarcode"}],class:{"form-control":!0,"is-invalid":a[0]},attrs:{id:"txtBarcode",name:"txtBarcode",placeholder:"Enter Barcode",type:"text"},domProps:{value:t.txtBarcode},on:{input:function(e){e.target.composing||(t.txtBarcode=e.target.value)}}}),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"txtBarcode"}},[t._v(t._s(a[0]))]):t._e()]}}],null,!1,3568353031)})],1)]):t._e(),t.SearchByBarcode?e("div",{staticClass:"col-12 col-sm-3 col-md-3 col-lg-2 float-left pl-md-0 mt-0 mt-md-4 mt-sm-4"},[e("div",{staticClass:"background-0 text-left w-100 form-check-inline"},[e("input",{attrs:{type:"hidden",id:"hdnSearch",value:""}}),e("a",{staticClass:"btn btn-success w-50 mr-1 px-4 hlsearch",attrs:{title:"",id:"Searchassest_barcode",href:"javascript:;","data-toggle-tooltip":"tooltip","data-original-title":"Search"},on:{click:t.SearchassestBarcode}},[e("em",{staticClass:"fa fa-search"})]),e("a",{staticClass:"btn btn-danger w-50 clearsearchtext px-4",attrs:{id:"aClear",href:"javascript:;",title:"Clear all ","data-toggle-tooltip":"tooltip","data-original-title":"Clear"},on:{click:t.CleareAssestBarcode}},[e("em",{staticClass:"fa fa-refresh"})])])]):t._e()])]),t.SearchByBarcode?t._e():e("div",{staticClass:"col-12 float-left searchByProduct"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"Subject"}},[t._v(t._s(t.$t("Location"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{attrs:{name:"Location",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("tree-view",{class:{"form-control":!0,"is-invalid":a[0]},attrs:{options:t.options,placeholder:"Select Location","show-count":!0},on:{input:function(e){return t.GetddlProduct(t.location_id)}},model:{value:t.location_id,callback:function(e){t.location_id=e},expression:"location_id"}}),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Location"}},[t._v(t._s(a[0]))]):t._e()]}}],null,!1,3091994094)})],1)]),t.SearchByBarcode?t._e():e("div",{staticClass:"col-12 float-left",attrs:{id:"searchByProduct"}},[e("div",{staticClass:"col-12 float-left p-0"},[e("div",{staticClass:"rad_value",attrs:{type:"radiobutton"}},[e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input dynamic",attrs:{type:"radio",id:"ProductNameItem",value:"ProductName"},domProps:{checked:t.IsProductName},on:{change:function(e){return t.searchByItemName("ProductName")}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"ProductNameItem"}},[t._v(t._s(t.$t("AssetId")))])]),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{staticClass:"custom-control-input dynamic",attrs:{type:"radio",id:"ItemName",value:"Product"},domProps:{checked:!t.IsProductName},on:{change:function(e){return t.searchByItemName("Product")}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"ItemName"}},[t._v(t._s(t.$t("ItemName")))])])])]),t.IsProductName?e("div",{staticClass:"col-12 float-left mt-3 p-0 productName"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"Subject"}},[t._v(t._s(t.$t("AssetId"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{attrs:{name:"productName",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.Product_Id,expression:"Product_Id"}],class:{"form-control":!0,"is-invalid":a[0]},attrs:{name:"productName"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.Product_Id=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:""}},[t._v("Select")]),t._l(t.productDDLData,(function(a,s){return e("option",{key:s,domProps:{value:a.value}},[t._v(t._s(a.name))])}))],2),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"productName"}},[t._v(t._s(a[0]))]):t._e()]}}],null,!1,2255477632)})],1)]):t._e(),t.IsProductName?t._e():e("div",{staticClass:"col-12 float-left mt-3 p-0 product"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("ItemName"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("div",{staticClass:"input-group mb-3",staticStyle:{position:"relative"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.assetUniqueItem,expression:"assetUniqueItem"}],staticClass:"form-control",attrs:{id:"txtAssetItems",name:"txtAssetItems",value:"iselectVal",placeholder:"Enter Product Name",type:"text",autocomplete:"off"},domProps:{value:t.assetUniqueItem},on:{input:[function(e){e.target.composing||(t.assetUniqueItem=e.target.value)},t.GetAssetUniqueData]}}),e("div",{staticClass:"unique_dynamicdatalist"},[t.IsDDLShowHide?e("ul",{staticClass:"listOfProduct"},t._l(t.assetUniqueData,(function(a,s){return e("li",{key:s,staticClass:"listitem all-items",on:{click:function(e){return t.uniqueItemChange(a)}}},[t._v(t._s(a.name)+" ")])})),0):t._e()]),e("a",{staticClass:"btn float-left",staticStyle:{"background-color":"#fff",color:"#303030","border-color":"#abb5bf","border-left":"none"},attrs:{href:"javascript:;",id:"customddlinput"},on:{click:t.itemDDLShowHide}},[e("em",{staticClass:"dropdown-toggle float-right"})])])])])]),e("div",{staticClass:"col-12 mb-3 mt-3"},[e("div",{staticClass:"heading-border"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$t("AvailableBetween"))+" ")])])])]),e("div",{staticClass:"col-sm-12 col-md-6 col-xl-6"},[e("div",{staticClass:"input-group"},[e("label",[t._v(t._s(t.$t("From"))+":")]),e("span",{staticClass:"text-danger"},[t._v("*")]),e("v-date-picker",{staticClass:"timedate input-group",attrs:{popover:t.popover,"min-date":t.getMinDate(new Date),name:t.fromDate,dateformat:t.dateformat,"minute-increment":5},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,inputEvents:s,togglePopover:i}){return[e("input",t._g({class:{"form-control":!0},attrs:{placeholder:"M/D/YYYY h:mm A"},domProps:{value:a},on:{focus:function(e){return t.togglePopoverClick()}}},s)),e("div",{staticClass:"input-group-append cal",attrs:{id:"toggles"},on:{click:function(t){return i()}}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-calendar"})])])]}}]),model:{value:t.fromDate,callback:function(e){t.fromDate=e},expression:"fromDate"}})],1)]),e("div",{staticClass:"col-sm-12 col-md-6 col-xl-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("EventStartTime")))]),e("div",{staticClass:"input-group"},[e("v-date-picker",{staticClass:"input-group",attrs:{mode:"Time",dateformat:t.dateformat},on:{input:t.resetAvailabilityStatus},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,inputEvents:s,togglePopover:i}){return[e("input",t._g({staticClass:"form-control",domProps:{value:a}},s)),e("div",{staticClass:"input-group-append",on:{click:function(t){return i()}}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-clock-o"})])])]}}]),model:{value:t.StartTime,callback:function(e){t.StartTime=e},expression:"StartTime"}})],1)])]),e("div",{staticClass:"col-sm-12 col-md-6 col-xl-6"},[e("div",{staticClass:"input-group"},[e("label",[t._v(t._s(t.$t("Till"))+" ")]),e("span",{staticClass:"text-danger"},[t._v("*")]),e("v-date-picker",{staticClass:"timedate input-group",attrs:{popover:t.popover,"min-date":t.getMinDate(),name:t.toDate,"minute-increment":5},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,inputEvents:s,togglePopover:i}){return[e("input",t._g({class:{"form-control":!0},attrs:{placeholder:"M/D/YYYY h:mm A"},domProps:{value:a},on:{focus:function(e){return t.togglePopoverClick1()}}},s)),e("div",{staticClass:"input-group-append",attrs:{id:"toggled"},on:{click:function(t){return i()}}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-calendar"})])])]}}]),model:{value:t.toDate,callback:function(e){t.toDate=e},expression:"toDate"}})],1)]),e("div",{staticClass:"col-sm-12 col-md-6 col-xl-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("CAEndTime")))]),e("div",{staticClass:"input-group"},[e("v-date-picker",{staticClass:"input-group",attrs:{mode:"Time"},on:{input:t.resetAvailabilityStatus},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,inputEvents:s,togglePopover:i}){return[e("input",t._g({staticClass:"form-control",domProps:{value:a}},s)),e("div",{staticClass:"input-group-append",on:{click:function(t){return i()}}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-clock-o"})])])]}}]),model:{value:t.EndTime,callback:function(e){t.EndTime=e},expression:"EndTime"}})],1)])]),t.tblassestgroupinfoIsShow?e("CheckBarCodeAvalibility",{attrs:{BarCodeData:t.BarCodeData,RequestFrom:t.RequestFrom}}):t._e(),t.divAvailabilityStatusIsShow?e("AvailabilityStatus",{attrs:{GetUniqueProductIdData:t.GetUniqueProductIdData,noOfAvailableItems:t.noOfAvailableItems,statusAvailable:t.statusAvailable,uniqueItems:t.uniqueItems,statusReserved:t.statusReserved,statusUnAvailable:t.statusUnAvailable,divAvailabilityStatus:t.divAvailabilityStatusIsShow},on:{onUniqueItemClick:function(e){return t.onUniqueItemClick(e)}}}):t._e(),t._m(1),e("div",{staticClass:"col-12 text-right mt-3"},[t.btnReserve?e("a",{staticClass:"btn btn-warning mr-2",attrs:{href:"javascript:;"},on:{click:function(e){return t.ProceedToAction("reserve")}}},[t._v(t._s(t.$t("ProceedtoReserve")))]):t._e(),t.btnCheckAvailability?e("a",{staticClass:"btn btn-success mr-2",attrs:{href:"javascript:;"},on:{click:t.checkAssetAvailability}},[t._v(t._s(t.$t("Check_Availability")))]):t._e(),t.btnCheckout?e("a",{staticClass:"btn btn-success mr-2",attrs:{href:"javascript:;"},on:{click:function(e){return t.ProceedToAction("checkout")}}},[t._v(t._s(t.$t("ProceedtoCheckout")))]):t._e(),t.btnAssign?e("a",{staticClass:"btn btn-primary mr-2",attrs:{href:"javascript:;"},on:{click:function(e){return t.ProceedToAction("assign")}}},[t._v(t._s(t.$t("ProceedtoAssign")))]):t._e()]),e("div",{staticClass:"col-12 mt-3 flex-row-reverse mt-3"},[e("div",{staticClass:"col-lg-12 text-left"},[e("div",{staticClass:"py-2"},[e("span",{staticClass:"text-danger",attrs:{id:"spnSelfCheckOutError"}},[t._v(t._s(t.ErrorText))])])])])],1)])])])])])],1)},l=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"ancuserguide text-white",attrs:{"data-toggle":"collapse",href:"#collapseReplyUG",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[e("em",{staticClass:"fa fa-files-o pr-2"}),t._v("User Guide")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 mt-3 flex-row-reverse mt-3"},[e("div",{staticClass:"col-lg-12 text-left"},[e("div",{staticClass:"py-2"},[e("span",{staticClass:"text-danger",attrs:{id:"spnSelfCheckOutError"}})])])])}],o=(s("14d9"),s("1115")),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 mt-3 listing tblassestgroupinfo"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",attrs:{id:"tblassestgroupinfo"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticClass:"text-center",staticStyle:{"max-width":"120px"}},[e("span",[t._v(t._s(t.$t("SerialNumber")))])]),e("th",[e("span",[t._v(t._s(t.$t("PRODUCT_NAME")))])]),e("th",[e("span",[t._v(t._s(t.$t("Location")))])])])]),0!=t.NoRecordLength?t._l(t.BarCodeData,(function(a,s){return e("tbody",{key:s},[a.CreateUniqueNameListing?[e("tr",{staticClass:"showassetcataloguegroup",class:{"insertedrow bg-gold":a.AssetCatalogueGroup.length>0}},[e("td",{staticClass:"textaligncenter align-middle text-center",style:t.containercolor},[t._v(" "+t._s(s+1)+" ")]),e("td",{staticClass:"align-middle ad"},[t._v(t._s(a.AssetCatalogName))]),e("td",{staticClass:"align-middle ad"},[1==t.BarCodeData.length?[e("select",{class:{"form-control disabled":!0},attrs:{name:"location"}},[e("option",{domProps:{value:a.LocationId}},[t._v(t._s(a.LocationName))])])]:[e("select",{class:{"form-control":!0},attrs:{name:"location"}},[e("option",{domProps:{value:a.LocationId}},[t._v(t._s(a.LocationName))])])]],2)])]:[e("tr",{staticClass:"showassetcataloguegroup",class:{"insertedrow bg-gold":a.AssetCatalogueGroup.length>0}},[e("td",{staticClass:"textaligncenter align-middle text-center",style:t.containercolor},[a.AssetCatalogueGroup.length>0?e("span",{staticClass:"togglearrow arrowwhitecollapse_roles fa fa-caret-right fa-2x showcatalog showassetcatalog"}):e("span",{staticClass:"showcatalog hidden showassetcatalog"})]),e("td",{staticClass:"align-middle ad"},[t._v(t._s(a.AssetCatalogName))]),e("td",{staticClass:"align-middle ad"},[1==t.BarCodeData.length?[e("select",{class:{"form-control disabled":!0},attrs:{name:"location"}},[e("option",{domProps:{value:a.LocationId}},[t._v(t._s(a.LocationName))])])]:[e("select",{class:{"form-control":!0},attrs:{name:"location"}},[e("option",{domProps:{value:a.LocationId}},[t._v(t._s(a.LocationName))])])]],2)]),"assetassignment"==t.RequestFrom?e("tr",[e("td",{staticClass:"textaligncenter align-middle no_records",attrs:{colspan:"8"}},[t._v(t._s("NoItemAvailable")+" ")])]):t._e()]],2)})):[e("td",{staticClass:"text-danger text-center no-record",attrs:{colspan:"7"}},[t._v(t._s(t.NoProductAvailable))])]],2)])])},n=[],c={props:{BarCodeData:{type:Array,required:!0},RequestFrom:{type:String,required:!0}},data(){return{containercolor:"",NoProductAvailable:"No Product Available",NoRecordLength:null}},created:function(){this.NoRecordLength=this.BarCodeData.length,this.BarCodeData.forEach(t=>{1==t.IsContainer&&(this.containercolor="border-left: 6px solid #227003 !important;")})}},d=c,u=s("2877"),m=Object(u["a"])(d,r,n,!1,null,null,null),v=m.exports,h=function(){var t=this,e=t._self._c;return t.divAvailabilityStatus?e("div",{staticClass:"col-12 mt-3"},[e("div",{staticClass:"col-12 border p-2 float-left"},[e("label",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Availability")))]),t.statusAvailable?e("div",{staticClass:"col-12 p-0"},[e("small",[e("i",{staticClass:"text-success fa fa-circle"}),t._v(" "+t._s(t.$t("Available"))),e("span",{attrs:{id:"noOfAvailableItems"}}),t._v("-("+t._s(t.noOfAvailableItems)+")")]),t.uniqueItems?e("div",{staticClass:"col-12 px-0 mt-2"},[e("div",{staticClass:"listing"},[e("div",{staticClass:"table-responsive table-fix-header"},[e("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",attrs:{id:"tblUniqueItems"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticClass:"text-center"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.allSelected,expression:"allSelected"}],staticClass:"custom-control-input",attrs:{id:"chkAllUniqueItems",type:"checkbox",name:"checkbox"},domProps:{checked:Array.isArray(t.allSelected)?t._i(t.allSelected,null)>-1:t.allSelected},on:{click:function(e){return t.selectAll(e)},change:function(e){var a=t.allSelected,s=e.target,i=!!s.checked;if(Array.isArray(a)){var l=null,o=t._i(a,l);s.checked?o<0&&(t.allSelected=a.concat([l])):o>-1&&(t.allSelected=a.slice(0,o).concat(a.slice(o+1)))}else t.allSelected=i}}}),e("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chkAllUniqueItems"}})])]),e("th",{staticClass:"text-center"},[t._v(t._s(t.$t("AssetId")))]),e("th",{staticClass:"text-center"},[t._v(t._s(t.$t("AvailableItems")))])])]),e("tbody",t._l(t.GetUniqueProductIdData,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"text-center"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userIds,expression:"userIds"}],staticClass:"custom-control-input",attrs:{id:a.UNIQUE_ID,type:"checkbox",name:"checkbox"},domProps:{value:a.UNIQUE_ID,checked:Array.isArray(t.userIds)?t._i(t.userIds,a.UNIQUE_ID)>-1:t.userIds},on:{change:[function(e){var s=t.userIds,i=e.target,l=!!i.checked;if(Array.isArray(s)){var o=a.UNIQUE_ID,r=t._i(s,o);i.checked?r<0&&(t.userIds=s.concat([o])):r>-1&&(t.userIds=s.slice(0,r).concat(s.slice(r+1)))}else t.userIds=l},function(e){return t.select(a)}]}}),e("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:a.UNIQUE_ID}})])]),e("td",{staticClass:"text-center"},[t._v(t._s(a.NAME))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.AVAILABLE_QUANTIY))])])})),0)])])])]):t._e()]):t._e(),t.statusReserved?e("div",[e("small",[e("i",{staticClass:"text-warning fa fa-circle"}),t._v(" "+t._s(t.$t("Reserved"))+" - "),e("span",{staticClass:"text-primary cursor-pointer",attrs:{id:"resvation"},on:{click:function(e){return t.select()}}},[t._v(t._s(t.$t("ViewReservations")))])]),e("div",{staticClass:"col-12 px-0",attrs:{id:"divCalendar"}})]):t._e(),t.statusUnAvailable?e("div",[e("small",[e("i",{staticClass:"text-danger fa fa-circle"}),t._v(" "+t._s(t.$t("Not_Available")))])]):t._e()])]):t._e()},p=[],f={props:{GetUniqueProductIdData:{type:Array,required:!0},noOfAvailableItems:{type:Number,required:!0},statusAvailable:{type:Boolean,required:!0},uniqueItems:{type:Boolean,required:!0},statusReserved:{type:Boolean,required:!0},statusUnAvailable:{type:Boolean,required:!0},divAvailabilityStatus:{type:Boolean,required:!0}},created:function(){},data(){return{CheckCatlougeValue:null,CheckeduniqueId:"",selected:[],allSelected:!1,userIds:[]}},methods:{selectAll:function(t){this.userIds=[],this.checkedName=[];var e=[];if(t.target.checked?this.allSelected=!0:this.allSelected=!1,this.allSelected)for(let a in this.GetUniqueProductIdData)this.userIds.push(this.GetUniqueProductIdData[a].UNIQUE_ID),this.checkedName.push(this.GetUniqueProductIdData[a].NAME);e.push(this.userIds.toString()),e.push(this.checkedName.toString()),this.$emit("onUniqueItemClick",e)},select:function(t){this.userIdss=[],this.checkedNames=[];var e=[];this.GetUniqueProductIdData.length==this.userIdss.length&&this.GetUniqueProductIdData.length==this.checkedNames.length?this.allSelected=!0:this.allSelected=!1;for(let a in this.GetUniqueProductIdData)t.UNIQUE_ID==this.GetUniqueProductIdData[a].UNIQUE_ID&&(this.userIdss.push(this.GetUniqueProductIdData[a].UNIQUE_ID),this.checkedNames.push(this.GetUniqueProductIdData[a].NAME));e.push(this.userIdss.toString()),e.push(this.checkedNames.toString()),this.$emit("onUniqueItemClick",e)}}},C=f,b=Object(u["a"])(C,h,p,!1,null,null,null),I=b.exports,_=s("ca17"),A=s.n(_),g=(s("542c"),{components:{CheckBarCodeAvalibility:v,AvailabilityStatus:I,"tree-view":A.a},data(){return{productDDLData:[],locationDDLData:[],assetUniqueData:[],checkAvailabilityList:[],location_id:null,SearchByBarcode:!0,IsProductName:!0,IsDDLShowHide:!1,assetUniqueItem:"",txtBarcode:"",tblassestgroupinfoIsShow:!1,divAvailabilityStatusIsShow:!1,popover:{visibility:"click"},isLoading:!1,BarCodeData:[],RequestFrom:"",IsShowButton:!0,CheckedCheckBox:"SearchProductName",BarcodeSelected:"BarCodeSearch",StartTime:new Date,EndTime:new Date,UniqueNameListing:1,IsProduct:"ProductName",Product_Id:null,fromDate:new Date,toDate:new Date,GetUniqueProductIdData:[],SpnSelfCheckOutError:"",ErrorText:"",ASSETUniqueId:null,noOfAvailableItems:null,statusAvailable:!1,uniqueItems:!0,statusReserved:!1,statusUnAvailable:!1,btnCheckAvailability:!0,btnCheckout:!1,btnAssign:!1,btnReserve:!1,IsDefault:null,UserType:null,module_id:null,GetKeyData:[],isUserSelfCheckoutEnabled:!1,iselectVal:null,CheckeduniqueIds:null,LocationName:"",uniqueProductName:"",hdnQuantity:null,LocationDataTree:[],dateformat:null}},created:async function(){var t=this;await t.GetddlLocation(),t.searchByProduct("barcode"),t.fromDate=t.$options.filters.formatDate(t.fromDate),t.toDate=t.$options.filters.formatDate(t.toDate),t.EndTime=t.addHoursToDate(t.EndTime,1),t.UniqueNameListing="BarCodeSearch"!=t.BarcodeSelected?t.UniqueNameListing=1:t.UniqueNameListing=0,t.IsDefault=t.GetUserInfo.IsDefault,t.UserType=t.GetUserInfo.UserType,t.dateformat=t.GetUserInfo.DateFormat,await t.GetKey()},methods:{addHoursToDate(t,e){return new Date(new Date(t).setHours(t.getHours()+e))},GetKey:async function(){var t=this;await t.GetModuleByName();var e=`moduleId=${t.module_id}&code=USR`;await o["a"].GetKeys(e).then(e=>{e.data.length>0?(t.GetKeyData=e.data,t.GetKeyData.filter(e=>{if("SelfCheckout"==e.coreConfigKey||"SelfTransfer"==e.coreConfigKey)return t.isUserSelfCheckoutEnabled=!0})):t.isUserSelfCheckoutEnabled=!1})},GetModuleByName:async function(t){var e="moduleName=Asset";await o["a"].GetModuleByName(e).then(t=>{this.module_id=t.data})},GetAssetAvailability:async function(){var t=this,e="",a="";if("BarCodeSearch"==t.BarcodeSelected?(e=""==t.BarCodeData?null:t.BarCodeData[0].AssetCatalogueId,a=""==t.BarCodeData?null:t.BarCodeData[0].ParentUniqueId):(e=t.Product_Id,a=t.iselectVal),null!=t.fromDate&&""!=t.fromDate||(t.fromDate=new Date),null!=t.toDate&&""!=t.toDate||(t.toDate=new Date),t.fromDate>t.toDate)return t.ShowAlert(t.$t("From date should be less than or equal To Till date"),"failure",t.$t("Alert")),!1;var s=t.$options.filters.formatDateYear(t.fromDate),i=t.$options.filters.formatDateYear(t.toDate),l=t.$options.filters.formatTime(t.StartTime),r=t.$options.filters.formatTime(t.EndTime),n=t.StartTime.getHours(),c=t.EndTime.getHours(),d=new Date(Date.parse(s)),u=new Date(Date.parse(i));if(d>=u&&n>=c)return t.ShowAlert(t.$t("TimeRangeValidation"),"failure",t.$t("Alert")),!1;if(null!=a&&""!=a&&0!=a||null!=e&&""!=e&&0!=e)if(t.isLoading=!0,"BarCodeSearch"==t.BarcodeSelected&&0==t.UniqueNameListing){var m=`assetUniqueId=${a}&assignedFrom=${s}&assignedTill=${i}&startTime=${l}&endTime=${r}&locationId=&type=Product`;await o["a"].GetAssetAvailability(m).then(e=>{if("ERROR"!=e.data.availability)if(e.data.availability.length>0)if("AVAILABLE"==e.data.availability[0].availabilty){var a={status:"available",AvailableItems:e.data.availabilty[0].availablE_QUANTITY,IS_SELF_CHECKOUT:e.data.availabilty[0].iS_SELF_CHECKOUT};t.DisplayAvailability(a)}else if("RESERVED"==e.data.availabilty[0].availabilty){a={status:"reserved"};t.DisplayAvailability(a)}else t.DisplayAvailability("unAvailable");else t.DisplayAvailability("unAvailable");else t.DisplayAvailability("unAvailable");t.isLoading=!1})}else{if("ProductName"==t.IsProduct)if("BarCodeSearch"==t.BarcodeSelected){if(null==t.location_id&&0==t.location_id)return t.ShowAlert(t.$t("CostCentreReq"),"failure",t.$t("Alert")),t.isLoading=!1,!1}else await t.GetUniqueProductId(),a=t.ASSETUniqueId;if(null!=a&&""!=a&&0!=a&&"Product"!=t.IsProduct){m=`assetUniqueId=${e}&assignedFrom=${s}&assignedTill=${i}&startTime=${l}&endTime=${r}&locationId=${t.location_id}&type=ProductName`;await o["a"].GetAssetAvailability(m).then(e=>{if("ERROR"!=e.data.availabilty)if(e.data.availability.length>0)if("AVAILABLE"==e.data.availability[0].availabilty){var a={status:"available",AvailableItems:e.data.availability[0].availablE_QUANTITY,UNIQUE_ITEMS:e.data.availability[0].uniquE_ITEMS,IS_SELF_CHECKOUT:e.data.availability[0].iS_SELF_CHECKOUT};t.DisplayAvailability(a)}else if("RESERVED"==e.data.availabilty[0].availabilty){a={status:"reserved"};t.DisplayAvailability(a)}else t.DisplayAvailability("unAvailable");else t.DisplayAvailability("unAvailable");else t.DisplayAvailability("unAvailable");t.isLoading=!1})}else{m=`assetUniqueId=${a}&assignedFrom=${s}&assignedTill=${i}&startTime=${l}&endTime=${r}&locationId=${t.location_id}&type=Product`;await o["a"].GetAssetAvailability(m).then(e=>{if("ERROR"!=e.data.availability)if(e.data.availability.length>0)if("AVAILABLE"==e.data.availability[0].availability){var a={status:"available",AvailableItems:e.data.availability[0].availablE_QUANTITY,IS_SELF_CHECKOUT:e.data.availability[0].iS_SELF_CHECKOUT};t.DisplayAvailability(a)}else if("RESERVED"==e.data.availability[0].AVAILABILTY){a={status:"reserved"};t.DisplayAvailability(a)}else t.DisplayAvailability("unAvailable");else t.DisplayAvailability("unAvailable");else t.DisplayAvailability("unAvailable");t.isLoading=!1})}}else null==a||""==a||0==a?t.ShowAlert(t.$t("ProductRequired"),"failure",t.$t("Alert")):t.ShowAlert(t.$t("InvalidProduct"),"failure",t.$t("Alert"))},DisplayAvailability:function(t){var e=this;if(e.divAvailabilityStatusIsShow=!0,t.status)if(e.statusAvailable=!0,"available"==t.status){"ProductName"==e.IsProduct&&"BarCodeSearch"!=e.BarcodeSelected&&1!=e.UniqueNameListing&&(e.noOfAvailableItems=t.AvailableItems),t.UNIQUE_ITEMS?e.GetUniqueProductIdData=JSON.parse(t.UNIQUE_ITEMS):e.uniqueItems=!0;var a=e.fromDate,s=e.StartTime,i=new Date(new Date(Date.parse(a)).setHours(0,0,0,0)),l=a+" "+s.getTime()/6e4;l=l.split(" "),l=l[1];var o=new Date((new Date).setHours(0,0,0,0));e.hdnQuantity=t.AvailableItems,e.statusReserved=!1,e.statusUnAvailable=!1,e.btnCheckAvailability=!1,e.btnCheckout=!1,e.btnAssign=!1,+i===+o&&("CA"==e.UserType&&""+e.IsDefault==1?(e.btnCheckout=!0,e.btnAssign=!0):("True"==e.isUserSelfCheckoutEnabled&&(e.btnAssign=!0),1==e.isUserSelfCheckoutEnabled&&1==t.IS_SELF_CHECKOUT?e.btnCheckout=!0:0==t.IS_SELF_CHECKOUT?e.ErrorText="Self checkout is not enabled for this product.":"CA"==e.UserType?e.ErrorText="Please enable your self checkout option under user configuration.":e.ErrorText="Please ask the company admin to enable your self checkout option under user configuration."),l-(new Date).getTime()/6e4>=5&&(e.btnReserve=!0)),i>o&&(e.btnReserve=!0,"CA"==e.UserType&&1==e.IsDefault&&(e.btnAssign=!0))}else"reserved"==t.status&&(e.noOfAvailableItems=null,e.statusReserved=!0,e.statusUnAvailable=!1,e.btnCheckAvailability=!1,e.btnReserve=!1,e.btnCheckout=!1,e.btnAssign=!1);else e.noOfAvailableItems=null,e.statusReserved=!1,e.statusUnAvailable=!0,e.btnCheckAvailability=!1,e.btnReserve=!1,e.btnCheckout=!1,e.btnAssign=!1},GetUniqueProductId:async function(){var t=this,e=`name=&assetCatalogId=${t.Product_Id}&issueTo=0&locationId=${t.location_id}&requestFrom=CHECKASSETAVAILABILITY&assetType=`;await o["a"].GetUniqueAssetItems(e).then((function(e){t.ASSETUniqueId=e.data[0].Value}))},onUniqueItemClick:function(t){this.CheckeduniqueIds=t[0],this.uniqueProductName=t[1]},ProceedToAction:function(t){var e=this;"BarCodeSearch"==e.BarcodeSelected&&1==e.UniqueNameListing?e.BarCodeData[0].ParentUniqueId:"ProductName"==e.IsProduct?e.CheckeduniqueIds:e.iselectVal;if("ProductName"==e.IsProduct&&"BarCodeSearch"!=e.BarcodeSelected){e.ASSETUniqueId,e.LocationName;e.location_id;e.Product_Id,e.noOfAvailableItems}else if("BarCodeSearch"==e.BarcodeSelected&&0==e.UniqueNameListing){e.BarCodeData[0].ParentUniqueId,e.BarCodeData[0].LocationName;e.BarCodeData[0].LocationId;e.BarCodeData[0].AssetUniqueName,e.BarCodeData[0].AvailableItems}else if("BarCodeSearch"==e.BarcodeSelected&&1==e.UniqueNameListing){e.BarCodeData[0].ParentUniqueId,e.BarCodeData[0].LocationName;e.BarCodeData[0].LocationId;this.BarCodeData[0].AssetCatalogueId,e.BarCodeData[0].AvailableItems}else{e.iselectVal,e.LocationName;e.location_id;vmassetUniqueItem,e.hdnQuantity}e.fromDate,e.toDate,e.StartTime,e.EndTime,e.uniqueProductName;null!=e.uniqueProductName||1==e.UniqueNameListing||"Product"==e.IsProduct?"assign"==t?e.$router.push({path:"/AssetAssignment/Add/:reqForm"}):e.$router.push({path:"/AssetAssignment/AddCheckOutReuest"}):e.ShowAlert(e.$t("OneItemRequired"),"failure",e.$t("Alert"))},GetddlLocation:async function(){var t=this,e="reqForm=";await o["a"].GetLocationByCompanyId(e).then((function(e){t.FindalLocationArray=[],t.LocationDataTree=JSON.parse(e.data).data,t.LocationDataTree.forEach(a=>{var s=t.FindalLocationArray.filter((function(t){return t.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==s.length&&null==a.PARENT_LOCATION_ID){let s=a.COMPANY_LOCATION_ID,i=t.getChildLocation(s,a,JSON.parse(e.data).data);t.FindalLocationArray.push(i)}}),t.options=t.FindalLocationArray}))},getChildLocation:function(t,e,a){let s=this,i={};i={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let l=i;var o=a.filter((function(e){return e.PARENT_LOCATION_ID==t}));let r=[];return o.forEach(t=>{let e=t.COMPANY_LOCATION_ID;var l=r.filter((function(e){return e.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==l.length){var o=a.filter((function(t){return t.PARENT_LOCATION_ID==e}));if(null!=o&&o.length>0){let i=s.getChildLocation(e,t,a);r.push(i)}else i={id:""+t.COMPANY_LOCATION_ID,label:""+t.LOCATION_NAME},r.push(i)}}),l.children=r,l},GetddlProduct:async function(t){var a=this;a.assetUniqueData=[],a.assetUniqueItem="";var s=`id=&issueTo=&locationId=${a.location_id}&requestFrom=TRANSFER`;await o["a"].GetAssetCatalogWithContainer(s).then((function(s){let i={};var l=[];s.data.forEach(t=>{i={name:t.NAME,value:t.ASSET_CATALOGUE_ID},l.push(i)}),a.productDDLData=l,a.GetAssetUniqueData(t),a.filterName=a.LocationDataTree.find(t=>t.COMPANY_LOCATION_ID==parseInt(e)),a.LocationName=a.filterName.LOCATION_NAME}))},GetAssetUniqueData:async function(t){var e=this;e.isLoading=!0;var a=`assetCatalogId=&name=&issueTo=&locationId=${t}&requestFrom=CHECKASSETAVAILABILITY&assetType=`;await o["a"].GetUniqueAssetItems(a).then((function(t){let a={};var s=[];t.data.forEach(t=>{a={name:t.Name,value:t.Value},s.push(a)}),e.assetUniqueData=s})),e.isLoading=!1},checkAssetAvailability:function(){this.GetAssetAvailability()},searchByProduct:function(t){this.SearchByBarcode=!1,"barcode"==t?(this.SearchByBarcode=!0,this.CheckedCheckBox="SearchProductName",this.BarcodeSelected="BarCodeSearch"):(this.SearchByBarcode=!1,this.CheckedCheckBox="SearchProducts",this.BarcodeSelected="ProductSearch"),this.ClearhdnIdsOnChange()},SearchassestBarcode:function(){var t=this;t.isLoading=!0,this.$refs.BarCodeForm.validate().then(e=>{if(e){var a=`id=&isView=1&barcode=${this.txtBarcode}&assetType=&assetUniqueId=&selfCheckout=&reqFrom=CheckBarcodeAssetAvailability&isFor=search&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;o["a"].GetCompanyAssestCatalogsDetalis(a).then(e=>{this.tblassestgroupinfoIsShow=!0,this.BarCodeData=e.data,this.RequestFrom="",t.isLoading=!1})}})},CleareAssestBarcode:function(){this.txtBarcode="",this.tblassestgroupinfoIsShow=!1},searchByItemName:function(t){this.IsProductName=!1,"ProductName"==t?(this.IsProductName=!0,this.IsProduct="ProductName"):(this.IsProductName=!1,this.IsProduct="Product")},itemDDLShowHide:function(){this.IsDDLShowHide=!this.IsDDLShowHide},uniqueItemChange:function(t){this.iselectVal=t.value,this.assetUniqueItem=t.name,this.IsDDLShowHide=!1,this.getRelations()},ClosePOPuP:function(t){this.$parent.ClosePOPuP(t)},searchfilter:function(){this.SearchassestBarcode()},getRelations:function(){var t=this,e="",a=t.IsProduct;t.fromDate,t.toDate,t.startTime,t.endTime;"ProductName"==a||(e=t.iselectVal);var s=`id=${e}&type=${a}`;o["a"].GetRelatedAssets(s).then(t=>{JSON.parse(t.data.result)})},resetAvailabilityStatus:function(){var t=this;t.statusAvailable=!0,t.btnCheckAvailability=!0,t.statusReserved=!1,t.noOfAvailableItems=null,t.statusUnAvailable=!1,t.btnReserve=!1,t.btnCheckout=!1,t.btnAssign=!1,t.divAvailabilityStatusIsShow=!1},ClearhdnIdsOnChange:function(){var t=this;t.txtBarcode="",t.Product_Id="",t.assetUniqueItem="",t.location_id=null,t.tblassestgroupinfoIsShow=!1,t.BarCodeData="",t.noOfAvailableItems=""},getMinDate(){return new Date},togglePopoverClick(){$("#toggles").click()},togglePopoverClick1(){$("#toggled").click()}}}),y=g,D=(s("6df2"),Object(u["a"])(y,i,l,!1,null,null,null));a["a"]=D.exports},"6df2":function(t,e,a){"use strict";a("3eab")},"7e09":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".vue-treeselect__control{border:none;height:24px;padding:0}.vue-treeselect--searchable .vue-treeselect__input-container{padding:0!important}.vue-treeselect__placeholder{color:#303030!important}.vue-treeselect__control-arrow{color:#000}.vue-treeselect__placeholder{line-height:24px}",""]),t.exports=e}}]);
//# sourceMappingURL=chunk-ac90607a.js.map