(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237553"],{fb56:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!0,showCheckBox:!0,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"ASSET_CATALOGUE_ID",HeaderText:"Asset Management",ListData:t.ProductData,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["STATUS_NAME"==a.column.COLUMN_NAME?[e("a",{staticClass:"inactive-disabled"},[e("span",{staticClass:"btn d-inline-block text-center text-truncate btn-success"},[t._v(" "+t._s(a.row[a.column.COLUMN_NAME])+" ")])])]:t._e(),"NUMBER_OF_ITEM"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark",attrs:{title:a.row.NUMBER_OF_ITEM}},[e("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"noti-circle noti-blue"},[t._v(t._s(a.row.NUMBER_OF_ITEM>0?a.row.NUMBER_OF_ITEM:0))])])]:t._e(),"AVAILABLE_ITEMS"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark",attrs:{title:a.row.AVAILABLE_ITEMS}},[e("i",{staticClass:"fa fa-list-ul",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"noti-circle noti-green"},[t._v(t._s(a.row.AVAILABLE_ITEMS>0?a.row.AVAILABLE_ITEMS:0))])])]:t._e(),"ATTACHMENT_PATH"==a.column.COLUMN_NAME?[e("div",{staticClass:"form-control p-0 border-0 text-center"},[e("img",{staticStyle:{"max-height":"80px"},attrs:{src:a.row.ATTACHMENT_PATH}})])]:t._e(),"HAS_RELATED_PRODUCTS"==a.column.COLUMN_NAME?[e("div",{staticClass:"form-control p-0 border-0 text-center"},[a.row.HAS_RELATED_PRODUCTS?e("span",{staticClass:"text-dark"},[e("a",{staticClass:"relatedproduct",attrs:{href:"javascript:;",id:a.row.ASSET_CATALOGUE_ID,title:"Related Products "},on:{click:function(e){return t.RelatedProductsPopup(a.row.ASSET_CATALOGUE_ID)}}},[e("i",{staticClass:"fa fa-sitemap text-primary",attrs:{"aria-hidden":"true"}})])]):t._e()])]:t._e()]}}])}),t.IsShowRelation?e("RelationPopup"):t._e(),t.ShowClonePopup?e("ClonePopup",{attrs:{AssetCatCloneId:t.AssetCatCloneId}}):t._e(),t.ShowViewFilePopup?e("AttachFilePopup",{attrs:{AssetDetails:t.AssetDetails}}):t._e(),t.ShowCheckAvailablity?e("CheckAvailablity"):t._e(),t.ShowAddProduct?e("AddProduct",{attrs:{popupCondition:t.popupCondition}}):t._e(),t.ShowRelatedProducts?e("RelatedProducts",{attrs:{AssetCatId:t.AssetCatId}}):t._e()],1)},i=[],o=(a("14d9"),a("1115"));let l=[{title:"Product List",href:"/AssetCatalog/RelatedInformation",iconClass:"fa fa-list",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Add Relationship",iconClass:"fa fa-plus",callbackfunction:"addRelationShip",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Check Availability",iconClass:"fa fa-check",callbackfunction:"CheckAvailablity",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Add Product",iconClass:"fa fa-plus",callbackfunction:"OpenModelAddProduct",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Product Transfer",href:"/AssetCatalog/TransferItem",iconClass:"fa fa fa-exchange",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"In-Transit Products",iconClass:"fa fa-recycle",href:"/AssetCatalog/ViewInTransitItems",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Transferred List",iconClass:"fa fa fa-exchange",href:"/AssetCatalog/ViewTransferedItem",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Depreciation",iconClass:"fa fa-sort-amount-asc",href:"/Asset/Depreciation",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Import Product",iconClass:"fa fa-download",callbackfunction:"ImportProduct",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Delete",iconClass:"fa fa-trash",callbackfunction:"DeletData",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1}],n=[{fieldName:"Location",fieldType:"ddl-multilevel",fieldIcon:"fa-map-marker",paramName:"LocationId",fieldSearchConditionName:[""],isSearch:!1,value:[],listOptions:[]},{fieldName:"Product Name/Code",fieldType:"text",fieldIcon:"fa-user",paramName:"search",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Status",fieldType:"radio",fieldIcon:"fa fa-file-text-o",paramName:"statusIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Tag",fieldType:"ddl-check",fieldIcon:"fa-server",paramName:"tagIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}],r=[{title:"Edit",href:"/AssetCatalog/ManageProducts/{ASSET_CATALOGUE_ID}",icon:"fa fa-pencil text-success action-icon",additionalSpan:"",isVisible:!0},{title:"Clone",href:"javascript:void(0)",callbackfunction:"OpenClonePopup",icon:"fa fa-clone text-success action-icon",additionalSpan:"",isVisible:!0},{title:"Detail Products History",href:"/AssetAssignment/Index",icon:"fa fa-file text-warning action-icon",additionalSpan:"",isVisible:!0},{title:"View attached file(s)",callbackfunction:"OpenViewFilePopup",href:"javascript:void(0)",icon:"fa fa-download text-secondary action-icon",additionalSpan:"",isVisible:!0}];async function d(t,e,a){var s=t,i=[],l=[];if("Location"==a){var n="reqForm=";await o["a"].GetLocationByCompanyId(n).then((function(t){var e=s.MakeNormalArray(t.data);e=e.data,$.each(e,$.proxy((function(t,a){var s=a.PARENT_LOCATION_ID,o=$.grep(i,(function(t,e){return t.id==s}));if(0==o.length){var l=$.grep(e,(function(t,e){return t.PARENT_LOCATION_ID==s}));if(l.length>0&&l[0].LOCATION_NAME){var n={id:s,label:l[0].LOCATION_NAME,children:l.map(t=>({id:t.COMPANY_LOCATION_ID,label:t.LOCATION_NAME}))};i.push(n)}}}))),console.log(i),s.leftSearchFields[0].listOptions=i}))}if("Tag"==a){n="modulename="+e;o["a"].GetTagsByModuleId(n).then((function(t){if("Tag"==a){let e={};JSON.parse(t.data).data.forEach(t=>{e={name:t.TAG_NAME,value:t.TAG_ID},l.push(e)}),s.leftSearchFields[3].listOptions=l}}))}if("Status"==a){n="langCode=en&statusType=AssetManagement&hasglobal=true";o["a"].GetStatusList(n).then((function(t){if("Status"==a){let e={};JSON.parse(t.data).forEach(t=>{e={name:t.STATUS,value:t.STATUS_ID},l.push(e)}),s.leftSearchFields[2].listOptions=l}}))}}var c={buttons:l,leftsearchSchema:n,listActions:r,bindleftCommonSearchdropdown:d},u=a("f9bd"),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("CloneProduct"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.ClosePopup()}}},[e("em",{staticClass:"fa fa-times"})])]),e("div",{staticClass:"border p-3"},[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}})],1)])])])])},h=[],A={props:{AssetCatCloneId:{type:String}},components:{},data(){return{FormSchema:[{layoutType:"single",Data:[{astype:"TextField",label:this.$t("Product"),name:"Title",value:"",placeholder:"",validationRules:{required:!0,max:250}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.ClosePopup}]}},created:function(){},methods:{ClosePopup(){var t=this;t.$parent.CloseViewFilePopup()},onSubmit(t,e){var a=this;let s={};s.AssetcatalogId=a.AssetCatCloneId,s.ProductName=t.Title;var i=JSON.stringify(s);o["a"].CloneProductSave(i).then(t=>{})}}},C=A,f=a("2877"),m=Object(f["a"])(C,p,h,!1,null,null,null),S=m.exports,_=a("55a7"),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered",staticStyle:{"max-width":"900px !important"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header theme-primary partition-full"},[e("h4",{staticClass:"modal-title"},[t._v(t._s(t.$t("HAS_RELATED_PRODUCTS")))]),e("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.ClosePopup}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"listing py-3 px-3"},[e("div",{staticClass:"table-responsive table-fix-header",attrs:{id:"div_forListView"}},[e("table",{staticClass:"table table-bordered mt-0",staticStyle:{width:"100%"},attrs:{id:"tblRElatedProductsList"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",[e("span",[t._v(t._s(t.$t("PRODUCT_NAME")))])]),e("th",[e("span",[t._v(t._s(t.$t("Mandatory_Non_Mandatory")))])])])]),e("tbody",[t._l(t.RelatedProductsData,(function(a){return e("tr",[e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(a.NAME)+" ")])]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(1==a.Mandatory?"Mandatory":"NonMandatory")+" ")])])])})),e("tr",[0==t.RelatedProductsData.length?e("td",{staticClass:"text-danger text-center no-record",attrs:{colspan:"7"}},[t._v("No Record Found")]):t._e()])],2)])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.ClosePopup}},[t._v("Close")])])])])])])])},P=[],T={props:{AssetCatId:{type:String}},data(){return{RelatedProductsData:[]}},created:function(){var t=this;t.FetchData()},methods:{FetchData(){var t=this;t.isLoading=!0;var e=`catId=${t.AssetCatId}&type=ProductName`;o["a"].GetRelatedProduct(e).then(e=>{t.RelatedProductsData=JSON.parse(JSON.parse(e.data.result).RESULT)})},ClosePopup(){var t=this;t.$parent.CloseRelatedProductsPopup()}}},b=T,E=Object(f["a"])(b,v,P,!1,null,null,null),g=E.exports,I=a("191f"),D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered",staticStyle:{"max-width":"900px !important"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("Attachments"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.ClosePopup()}}},[e("em",{staticClass:"fa fa-times"})])]),e("div",{staticClass:"modal-body"},[e("Form",{ref:"tagForm",attrs:{autocomplete:"off"}},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"listing OuterMainDiv"},[e("div",{staticClass:"row",staticStyle:{"max-height":"500px","overflow-y":"auto"}},[t.DataLoaded?e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema}}):t._e()],1)])])])])],1),e("div",{staticClass:"listing tblassestgroupinfodetails px-1 mt-3"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",attrs:{id:"tblassestgroupinfodetails"}},[t._m(0),e("tbody",t._l(t.arryaofData,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(a.SERIAL_NUMBER)+" ")]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(t._s(a.ATTACHMENT_NAME))])]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(t._s(a.ATTACHMENT_PATH))])]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(t._s(a.IS_FOR_TERMS_CONDITION))])]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(t._s(a.TERMS_CONDITION_STARTS_AT))])]),e("td",{staticClass:"text-center single-action"},[e("a",{staticClass:"downloadfile",attrs:{href:"javascript:;",title:"",value:"2332",filename:"checkfalg.png",filepath:"files/78376/2675/d4f2c8f6-0b4a-45e7-ba61-255fd4f87775.png",filetype:"image/png","data-toggle-tooltip":"tooltip","data-original-title":"Download"},on:{click:function(e){return t.Downloadfiles(a)}}},[e("i",{staticClass:"fa fa-download text-primary action-icon",attrs:{title:"Download Attachment"}})]),t._m(1,!0)])])})),0)])])])])])])])},N=[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",[t._v("Serial Number")]),e("th",[t._v("Attachment Name")]),e("th",[t._v("File Name")]),e("th",[t._v("Used For Terms And Conditions")]),e("th",[t._v("Terms and Conditions Start Date")]),e("th",[t._v("Action")])])])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"deletefile",attrs:{href:"javascript:;",title:"",value:"2332",filepath:"files/78376/2675/d4f2c8f6-0b4a-45e7-ba61-255fd4f87775.png",filetype:"image/png","data-toggle-tooltip":"tooltip","data-original-title":"Delete"}},[e("i",{staticClass:"fa fa-trash text-danger action-icon",attrs:{title:"Remove Attachment"}})])}],L={props:{AssetDetails:{type:String}},data(){return{arryaofData:[],buttons:[{type:"",onClick:this.ClosePopup}]}},created:function(){var t=this;t.GetViewFiles()},methods:{ClosePopup(){var t=this;t.$parent.CloseViewFilePopup()},GetViewFiles(){var t=this,e=`catalogueId=${t.AssetDetails.ASSET_CATALOGUE_ID}&isDelete=1&flag=`;o["a"].AttachViewFiles(e).then(e=>{t.arryaofData=JSON.parse(e.data).data})},Downloadfiles(t){var e="filePath="+t.ATTACHMENT_PATH;o["a"].DownloadAttachment(e).then((function(e){const a=e.data,s=`data:${t.ATTACHMENT_TYPE};base64,${a}`;var i=document.createElement("a");i.href=s,i.setAttribute("download",t.ATTACHMENT_NAME),document.body.appendChild(i),i.click()}))}}},w=L,O=Object(f["a"])(w,D,N,!1,null,null,null),M=O.exports,k={components:{RelationPopup:u["a"],ClonePopup:S,CheckAvailablity:_["a"],AddProduct:I["a"],RelatedProducts:g,AttachFilePopup:M},data(){return{listheaderbuttons:c.buttons,leftSearchFields:c.leftsearchSchema,listActions:c.listActions,LegendArray:[],ProductData:[],PageSize:10,PageNumber:1,PageSizeOption:null,StatusListForListing:[],Headers:[{COLUMN_NAME:"ATTACHMENT_PATH",DATA_TYPE:"image",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Image"),DISPLAY_ORDER:1,settings:{isInSlot:!0}},{COLUMN_NAME:"ASSET_TYPE",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("ItemNameType"),DISPLAY_ORDER:2},{COLUMN_NAME:"ITEM_CODE",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("ITEM_CODE"),DISPLAY_ORDER:3},{COLUMN_NAME:"NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("PRODUCT_NAME"),DISPLAY_ORDER:4,settings:{clickEvent:this.clickEventOfColumn,formatter:this.columnDataFormatter}},{COLUMN_NAME:"STATUS_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Status"),DISPLAY_ORDER:5,settings:{isInSlot:!0}},{COLUMN_NAME:"NUMBER_OF_ITEM",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("NUMBER_OF_ITEM"),DISPLAY_ORDER:6,settings:{isInSlot:!0}},{COLUMN_NAME:"AVAILABLE_ITEMS",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("AVAILABLE_ITEMS"),DISPLAY_ORDER:7,settings:{isInSlot:!0}},{COLUMN_NAME:"HAS_RELATED_PRODUCTS",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("HAS_RELATED_PRODUCTS"),DISPLAY_ORDER:8,settings:{isInSlot:!0}}],noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,SortBy:"",SortExp:"",widgets:[{icon:"fa fa-dollar",value:"12",name:"Total Expenses",class:"one_wid"},{icon:"fa fa-dollar",value:"7",name:"Approved Expenses",class:"two_wid"},{icon:"fa fa-clock-o",value:"5",name:"Approval Pending",class:"three_wid"},{icon:"fa fa-reply",value:"1",name:"Send for Correction",class:"four_wid"}],catalogId:"",legendProgress:[{class:"",backgroundColor:"#17a2b8",name:"Draft"},{class:"legend-Progress",backgroundColor:"",name:"Approved"},{class:"legend-pending",backgroundColor:"",name:"Pending"},{class:"",backgroundColor:"#fe6847",name:"SendForCorrection"},{class:"",backgroundColor:"#ee1313",name:"Rejected"}],IsShowRelation:!1,ShowClonePopup:!1,ShowViewFilePopup:!1,ShowCheckAvailablity:!1,ShowAddProduct:!1,isLoading:!1,ShowRelatedProducts:!1,AssetCatId:"",AssetCatCloneId:"",AssetDetails:""}},created(){var t=this;t.FetchData(),c.bindleftCommonSearchdropdown(t,"Asset","Location"),c.bindleftCommonSearchdropdown(t,"Asset","Tag"),c.bindleftCommonSearchdropdown(t,"Asset","Status"),t.LegendArray=[{class:"legend-Progress colorboxsquare",text:t.$t("AssetsHavingUniqueNames")}]},methods:{RelatedProductsPopup(t){var e=this;e.AssetCatId=t,e.ShowRelatedProducts=!0},columnDataFormatter:function(t,e){return t[e.COLUMN_NAME]},FetchData(){var t=this;t.isLoading=!0;var e=`pageSize=${t.PageSize}&pageNum=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${t.SortExp}&${t.searchCondition}`;o["a"].AssetCatalogueListing(e).then(e=>{null!=e.data&&e.data.length>0?(t.ProductData=e.data,t.ProductData.forEach(t=>{t.rowDetailsUrl="",t.additionalClass="",""==t.rowDetailsUrl&&(t.rowDetailsUrl="/AssetCatalog/ManageProducts/"+t.ASSET_CATALOGUE_ID),1==t.IS_SAMPLE_DATA&&(t.additionalClass="sample-bar"),t.HAS_UNIUQE_NAMES&&(t.additionalClass="low-bar odd")}),t.TotalRecords=e.data[0].TOTAL,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.isLoading=!1):(t.noRecord=!0,t.ProductData=[],t.TotalRecords=0,t.isLoading=!1),t.isLoading=!1,setTimeout((function(){t.CheckBoxBootstrap()}),100),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)})},DeleteData:function(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e.length>0&&t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("ASSET_CATALOGUE_ID"),(function(){var a={ids:e};let s=`ids=${e}&tableName=TALYGEN_asset_catalogue&primaryKey=asset_catalogue_id`;JSON.stringify(a);o["a"].Delete(s).then(e=>{e.data?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='DeleteMultiple']").removeClass("enable").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Product")]),"Success",!0,t.$t("Alert"))):t.ShowAlert(t.$t("DeletedError",[t.$t("val")]),"failure",!0,t.$t("Alert")),t.FetchData()})}))},clickEventOfColumn:function(t,e){var a=this;"NAME"==t.column.COLUMN_NAME&&a.$router.push({path:"ManageProducts",params:{id:t.ASSET_CATALOGUE_ID}})},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},currentPageMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},GetPageSizeOption:function(){for(var t=[],e=10,a=e;a<e+95;a+=5)t.push(a);this.PageSizeOption=t},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},commonHeaderButtonClick(t){switch(t.callbackfunction){case"addRelationShip":this.AddRelationShipPopup();break;case"CheckAvailablity":this.OpenCheckAvailablity();break;case"OpenModelAddProduct":this.OpenModelAddProduct();break;case"ImportProduct":this.ImportProduct();break;case"DeletData":this.DeleteData();break}},ProductTransfer(){this.$router.push({name:"Transferred Items"})},InTransitProducts(){this.$router.push({name:"ViewInTransitItems"})},OpenModelAddProduct(){var t=this;t.popupCondition="",t.ShowAddProduct=!0,$("#modelAddProduct").modal("show"),setTimeout((function(){$("#modelAddProduct").modal("show"),setTimeout((function(){t.SetBootstraptoolTip()}),200)}),1e3)},OpenCheckAvailablity(){var t=this;t.ShowCheckAvailablity=!0},RelatedInformation(){this.$router.push({name:"RelatedInformation"})},movetodepreciationlist:function(){this.$router.push({name:"Depreciation"})},MovetoTransferredList:function(){this.$router.push({name:"TransferredItemsList"})},ImportProduct:function(){this.$router.push({name:"ImportAssetitem"})},AddRelationShipPopup(){var t=this;t.IsShowRelation=!0},CloseAddRelationShipPopup(){var t=this;t.IsShowRelation=!1},OpenClonePopup(t){var e=this;e.AssetCatCloneId=t,e.ShowClonePopup=!0},OpenViewFilePopup(t){var e=this;e.AssetDetails=t,e.ShowViewFilePopup=!0},actionButtonClick(t,e,a,s){var i=this;switch(t){case"OpenClonePopup":i.OpenClonePopup(e.ASSET_CATALOGUE_ID);break;case"View attached file(s)":break;case"OpenViewFilePopup":i.OpenViewFilePopup(e);break}},CloseClonePopup(){var t=this;t.ShowClonePopup=!1},ClosePOPuP(t){var e=this;e.ShowCheckAvailablity=!1},CloseRelatedProductsPopup(){var t=this;t.ShowRelatedProducts=!1},CloseViewFilePopup(){var t=this;t.ShowViewFilePopup=!1},sortdata:function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},renderActions(t){var e=this;let a=[];return e.listActions.forEach(t=>{let e={...t};switch(e.title){case"Edit":e.isVisible=!0;break;case"Clone":e.isVisible=!0;break;case"Detail Products History":e.isVisible=!0;break;case"View attached file(s)":e.isVisible=!0;break;default:e.isVisible=!0;break}a.push(e)}),a}},updated:function(){this.BindActionButtonEvent()}},R=k,y=Object(f["a"])(R,s,i,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d237553.js.map