(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4215cc2c"],{4307:function(t,e,a){var o=a("f7b7");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=a("499e").default;s("34def756",o,!0,{sourceMap:!1,shadowMode:!1})},"91ac":function(t,e,a){t.exports=a.p+"img/imagenotavailable.jpg"},c365:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content",attrs:{id:"tabs"}},[e("tg-list",{attrs:{IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"ASSET_CATALOGUE_ID",HeaderText:"RFID Asset Listing",ListData:t.RfidData,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecord,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NorecordfoundText")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:o}){return["Image"==o.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:o.column.COLUMN_NAME}},[e("img",{staticClass:"fa fa-file text-warning action-icon",staticStyle:{width:"50px"},attrs:{src:a("91ac")}})])]:t._e(),"EPC_TAG"==o.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:o.column.COLUMN_NAME}},[e("em",{staticClass:"fa fa-file text-warning action-icon",on:{click:function(e){return t.ItemHistory(o.row.EPC_TAG)}}})])]:t._e()]}}])}),t.IsProductHistory?e("ProductHistoryModel",{attrs:{ItemData:t.ItemData},on:{ClosePOPuP:t.ClosePOPuP}}):t._e()],1)},s=[],i=(a("14d9"),a("1115"));let r=[],n=[{fieldName:"Location",fieldType:"ddl-multilevel",fieldIcon:"fa-file",paramName:"LocationId",fieldSearchConditionName:[""],isSearch:!1,value:null,listOptions:[]},{fieldName:"Product Name/Code",fieldType:"text",fieldIcon:"fa-user",paramName:"search",fieldSearchConditionName:[""],isSearch:!1,value:""},{fieldName:"Status",fieldType:"radio",fieldIcon:"fa fa-file-text-o",paramName:"statusIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Tag",fieldType:"ddl-check",fieldIcon:"fa-server",paramName:"EPCTags",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];async function d(t,e,a){var o=t,s=[],r=[];if("Location"==a){var n="reqForm=";await i["a"].GetLocationByCompanyId(n).then((function(t){var e=JSON.parse(t.data).data;e.forEach(e=>{var a=s.filter((function(t){return t.COMPANY_LOCATION_ID==e.COMPANY_LOCATION_ID}));if(0==a.length&&null==e.PARENT_LOCATION_ID){let a=e.COMPANY_LOCATION_ID,o=d(a,e,JSON.parse(t.data).data);s.push(o)}}),o.leftSearchFields[0].listOptions=s}))}function d(t,e,a){let o={};o={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let s=o;var i=a.filter((function(e){return e.PARENT_LOCATION_ID==t}));let r=[];return i.forEach(t=>{let e=t.COMPANY_LOCATION_ID;var s=r.filter((function(e){return e.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==s.length){var i=a.filter((function(t){return t.PARENT_LOCATION_ID==e}));if(null!=i&&i.length>0){let o=d(e,t,a);r.push(o)}else o={id:""+t.COMPANY_LOCATION_ID,label:""+t.LOCATION_NAME},r.push(o)}}),s.children=r,s}if("Tag"==a){n="modulename="+e;i["a"].GetTagsByModuleId(n).then((function(t){if("Tag"==a){let e={};JSON.parse(t.data).data.forEach(t=>{e={name:t.TAG_NAME,value:""+t.TAG_ID},r.push(e)}),o.leftSearchFields[3].listOptions=r}}))}if("Status"==a){n="langCode=en&statusType=AssetManagement&hasglobal=true";i["a"].GetStatusList(n).then((function(t){if("Status"==a){let e={};JSON.parse(t.data).forEach(t=>{e={name:t.STATUS,value:""+t.STATUS_ID},r.push(e)}),o.leftSearchFields[2].listOptions=r}}))}}var c={buttons:r,leftsearchSchema:n,bindleftCommonSearchdropdown:d},l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" Product Detail History ")]),e("button",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(e){return t.ClosePOPuP(e)}}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"listing"},[e("tg-list",{attrs:{showCheckBox:!1,IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"ASSET_CATALOGUE_ID",HeaderText:t.$t("AssetManagement"),widgets:t.widgets,ListData:t.ProductHistoryData,HeaderData:t.Headers,callbackfunction:t.GetItemHistory,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NorecordfoundText"),TotalRecords:t.TotalRecords,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.GetItemHistory},on:{PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick}})],1)])])])])],1)},u=[],A={props:{ItemData:{type:String,required:!0}},data(){return{noRecord:!1,isLoading:!1,ProductHistoryData:[],Headers:[{COLUMN_NAME:"EPCTag",DATA_TYPE:"image",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("EPCTag"),DISPLAY_ORDER:1},{COLUMN_NAME:"LogDate",DATA_TYPE:"image",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("LogDate"),DISPLAY_ORDER:1},{COLUMN_NAME:"TagStatus",DATA_TYPE:"image",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("TagStatus"),DISPLAY_ORDER:1},{COLUMN_NAME:"Status",DATA_TYPE:"image",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Status"),DISPLAY_ORDER:1}],listheaderbuttons:[],LegendArray:[],widgets:[],noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,SortBy:"",SortExp:"",PageNumber:1,isPaged:1,PageSize:10}},created:function(){this.GetItemHistory()},methods:{GetItemHistory:function(){this.isLoading=!0;var t="ePC_TAG="+this.ItemData;i["a"].GetItemHistory(t).then(t=>{null!=t.data?t.data.length>0?(console.log(t.data),this.ProductHistoryData=t.data,this.noRecord=!1,this.isLoading=!1):(this.noRecord=!0,this.ProductHistoryData=[],this.isLoading=!1):(vm.ShowAlert(vm.$t("Unknown Error Occur"),"failure",!0,vm.$t("Alert")),this.isLoading=!1,vm.$parent.ClosePOPuP())})},Cancel:function(t){this.$emit("ClosePOP",t)},ClosePOPuP:function(t){this.$emit("ClosePOPuP",t)},pagerMethod:function(t){this.pageSize=t.pageSize,this.PageNumber=t.PageNumber,this.GetItemHistory()},commonHeaderButtonClick:function(){},renderActions(){}}},S=A,h=a("2877"),I=Object(h["a"])(S,l,u,!1,null,null,null),E=I.exports,L={components:{ProductHistoryModel:E},data(){return{leftSearchFields:c.leftsearchSchema,listheaderbuttons:c.buttons,LegendArray:[],RfidData:[],LeadStatusList:[],StatusListForListing:[],Headers:[{COLUMN_NAME:"LOCATION_NAME",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Location",DISPLAY_ORDER:1},{COLUMN_NAME:"sub_location",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Sub Location",DISPLAY_ORDER:2},{COLUMN_NAME:"Image",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Image",DISPLAY_ORDER:10,settings:{isInSlot:!0}},{COLUMN_NAME:"unique_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Product Name",DISPLAY_ORDER:3},{COLUMN_NAME:"ITEM_CODE",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Product Code",DISPLAY_ORDER:4},{COLUMN_NAME:"STATUS_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:5},{COLUMN_NAME:"ISSUED_TO_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Assign To",DISPLAY_ORDER:6},{COLUMN_NAME:"EPC_TAG",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"RFID Tags",DISPLAY_ORDER:7},{COLUMN_NAME:"ip_address",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"IP Address",DISPLAY_ORDER:8},{COLUMN_NAME:"EPC_TAG",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Scanned Tags History",DISPLAY_ORDER:9,settings:{isInSlot:!0}}],widgets:[],noRecord:!0,TotalRecord:0,CurrentPage:1,TotalPages:0,txtsearch:"",statusIds:"",LocationId:"",SortBy:"",SortExp:"",PageNumber:1,isPaged:1,PageSize:10,ePC_TAG:"",searchCondition:"",IsProductHistory:!1,ItemData:"",userId:null,companyId:null,legendProgress:[{class:"",backgroundColor:"#17a2b8",name:"Draft"},{class:"legend-Progress",backgroundColor:"",name:"Approved"},{class:"legend-pending",backgroundColor:"",name:"Pending"},{class:"",backgroundColor:"#fe6847",name:"SendForCorrection"},{class:"",backgroundColor:"#ee1313",name:"Rejected"}]}},created(){var t=this;t=this;t.userId=t.GetUserInfo.ID,t.companyId=t.GetUserInfo.Name,setTimeout(()=>{t.FetchData()},1e3),c.bindleftCommonSearchdropdown(t,"Asset","Location"),c.bindleftCommonSearchdropdown(t,"Asset","Tag"),c.bindleftCommonSearchdropdown(t,"Asset","Status")},methods:{FetchData(){var t=this;t.isLoading=!0;var e=`pageSize=${t.PageSize}&pageNumber=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${this.SortExp}&${t.searchCondition}`;i["a"].GetRFIDListing(e).then(e=>{null!=e.data&&(e.data.length>0?(t.RfidData=e.data,t.TotalRecord=e.data[0].TOTAL,t.TotalPage=Math.ceil(t.TotalRecord/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.isLoading=!1):(t.noRecord=!0,t.RfidData=[],t.TotalRecord=0,t.isLoading=!1))})},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},ItemHistory:function(t){var e=this;e.IsProductHistory=!0,e.ItemData=t},ClosePOPuP:function(){var t=this;t.IsProductHistory=!1},commonHeaderButtonClick(){},actionButtonClick(){},sortdata:function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},renderActions(t){var e=this;let a=[];return e.listActions.forEach(t=>{let e={...t};a.push(e)}),a}}},P=L,C=(a("d997"),Object(h["a"])(P,o,s,!1,null,null,null));e["default"]=C.exports},d997:function(t,e,a){"use strict";a("4307")},f7b7:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".center-icon{display:flex;justify-content:center;align-items:center}",""]),t.exports=e}}]);
//# sourceMappingURL=chunk-4215cc2c.js.map