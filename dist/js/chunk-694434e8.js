(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-694434e8"],{"907c":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".center-icon{display:flex;justify-content:center;align-items:center}",""]),t.exports=e},"91ac":function(t,e,a){t.exports=a.p+"img/imagenotavailable.jpg"},"94ba":function(t,e,a){var s=a("907c");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var o=a("499e").default;o("01b2d6f6",s,!0,{sourceMap:!1,shadowMode:!1})},"953c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content",attrs:{id:"tabs"}},[e("tg-list",{attrs:{showCheckBox:!0,IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"ASSET_TYPE_ID",HeaderText:"RFID Asset Listing",ListData:t.RfidData,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecord,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NorecordfoundText")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:s}){return["Image"==s.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:s.column.COLUMN_NAME}},[e("img",{staticClass:"fa fa-file text-warning action-icon",staticStyle:{width:"50px"},attrs:{src:a("91ac")}})])]:t._e(),"DESCRIPTION"==s.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:s.column.COLUMN_NAME}},[""!=s.row.DESCRIPTION?e("em",{staticClass:"text-dark center-icon"},[t._v(t._s(s.row.DESCRIPTION))]):e("em",{staticClass:"text-dark center-icon"},[t._v("--")])])]:t._e(),"IsContainer"==s.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:s.column.COLUMN_NAME}},[1==s.row.IS_CONTAINER?e("em",{staticClass:"text-dark center-icon"},[t._v("Yes")]):e("em",{staticClass:"text-dark center-icon"},[t._v("No")])])]:t._e(),"STATUS_NAME"==s.column.COLUMN_NAME?[e("td",{staticClass:"text-center single-action"},[e("span",{staticClass:"cstm-drop-btn"},[e("select",{directives:[{name:"model",rawName:"v-model",value:s.row.STATUS_ID,expression:"data.row.STATUS_ID"}],class:{"ddlupdatestatus w-80 btn-success":1001==s.row.STATUS_ID,"ddlupdatestatus w-80 btn-danger":1002==s.row.STATUS_ID},attrs:{name:"Reader"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(s.row,"STATUS_ID",e.target.multiple?a:a[0])},function(e){return t.changeStatus(s.row.ASSET_TYPE_ID,s.row.STATUS_ID)}]}},t._l(t.StatusListData,(function(a,s){return e("option",{key:s,domProps:{value:a.STATUS_ID}},[t._v(t._s(a.STATUS))])})),0)])])]:t._e()]}}])})],1)},o=[],i=(a("14d9"),a("1115"));let n=[{title:"Add",iconClass:"fa fa-plus",callbackfunction:"addProductType",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{title:"Import Product Type",iconClass:"fa fa-download",callbackfunction:"ImportProductType",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{title:"Active",iconClass:"fa fa-check",callbackfunction:"Active",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{title:"Inactive",iconClass:"fa fa-close",callbackfunction:"Inactive",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{title:"Delete",iconClass:"fa fa-trash",callbackfunction:"DeletData",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0}],r=[];async function c(t,e){}var l={buttons:n,leftsearchSchema:r,bindleftCommonSearchdropdown:c},d={components:{},data(){return{leftSearchFields:"",listheaderbuttons:l.buttons,LegendArray:[],RfidData:[],LeadStatusList:[],StatusListForListing:[],Headers:[{COLUMN_NAME:"Image",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Image",DISPLAY_ORDER:1,settings:{isInSlot:!0}},{COLUMN_NAME:"TYPE_CODE",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Product Type Code",DISPLAY_ORDER:2},{COLUMN_NAME:"ASSET_TYPE",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Product Type Name",DISPLAY_ORDER:3},{COLUMN_NAME:"DESCRIPTION",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Description",DISPLAY_ORDER:4,settings:{isInSlot:!0}},{COLUMN_NAME:"IsContainer",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Container",DISPLAY_ORDER:5,settings:{isInSlot:!0}},{COLUMN_NAME:"STATUS_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:6,settings:{isInSlot:!0}}],widgets:[],noRecord:!0,TotalRecord:0,CurrentPage:1,TotalPages:0,txtsearch:"",statusIds:"",LocationId:"",SortBy:"",SortExp:"",PageNumber:1,isPaged:1,PageSize:10,ePC_TAG:"",searchCondition:"",IsProductHistory:!1,legendProgress:[{class:"",backgroundColor:"#17a2b8",name:"Draft"},{class:"legend-Progress",backgroundColor:"",name:"Approved"},{class:"legend-pending",backgroundColor:"",name:"Pending"},{class:"",backgroundColor:"#fe6847",name:"SendForCorrection"},{class:"",backgroundColor:"#ee1313",name:"Rejected"}],privilegeParams:null,StatusListData:[]}},created(){var t=this;t.privilegeParams="controller=Asset&action=",t.GetStatusList(),t.userId=t.GetUserInfo.ID,t.companyId=t.GetUserInfo.Name,setTimeout(()=>{t.FetchData()},1e3),t.leftSearchFields=""},methods:{FetchData(){var t=this;t.isLoading=!0;var e=`pageSize=${t.PageSize}&pageNum=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${this.SortExp}&${t.searchCondition}`;i["a"].Index(e).then(e=>{null!=e.data?e.data.length>0?(t.RfidData=e.data,t.TotalRecord=e.data[0].TOTAL,t.TotalPage=Math.ceil(t.TotalRecord/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.isLoading=!1):(t.noRecord=!0,t.RfidData=[],t.TotalRecord=0,t.isLoading=!1):t.isLoading=!1,setTimeout((function(){t.CheckBoxBootstrap()}),100),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)})},GetStatusList(){var t=this;t.isLoading=!0;var e="langCode=en&statusType=AssetManagement&hasglobal=true";i["a"].GetStatusList(e).then(e=>{const a=JSON.parse(e.data);t.StatusListData=a.filter(t=>1001===t.STATUS_ID||1002===t.STATUS_ID),t.isLoading=!1})},changeStatus(t,e){var a=this;a.confirmR(a.$t("Are you sure you want to change the status?"),!0,a.$t("Update")+"  "+a.$t("Group_Item"),(function(){var s=`TableName=Talygen_asset_type&ColumnName=asset_type_id&Id=${t}&statusId=${e}`;i["a"].UpdateStatus(s).then(t=>{1==t.data?(a.ShowAlert(a.$t("Product Type  has been successfully updated."),"success",!0,a.$t("Alert")),a.FetchData()):a.ShowAlert(a.$t("An error has occurred while updating Product Type. Please retry."),"success",!0,a.$t("Alert")),a.isLoading=!1})}))},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},actionButtonClick(){},sortdata:function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},renderActions(t){var e=this;let a=[];return e.listActions.forEach(t=>{let e={...t};a.push(e)}),a},commonHeaderButtonClick(t){switch(t.callbackfunction){case"addProductType":this.AddProductType();break;case"ImportProductType":this.ImportProductType();break;case"Active":this.Active();break;case"Inactive":this.Inactive();break;case"Delete":this.Delete();break}},AddProductType:function(){var t=this;t.$router.push({name:"ProductTypeCheckOutRequest"})},ImportProductType:function(){var t=this;t.$router.push({name:"ImportItemType"})},Active:function(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),t.changeStatus(e,1001)},Inactive:function(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),t.changeStatus(e,1002)},Delete:function(){var t=this,e="";i["a"].CheckPrivilege(t.privilegeParams+"Delete").then(a=>{a.data?($(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e.length>0&&t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("ASSET_CATALOGUE_ID"),(function(){let a=`ids=${e}&tableName=TALYGEN_asset_catalogue&primaryKey=asset_catalogue_id`;i["a"].Delete(a).then(e=>{e.data?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='DeleteMultiple']").removeClass("enable").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Product")]),"Success",!0,t.$t("Alert"))):t.ShowAlert(t.$t("DeletedError",[t.$t("val")]),"failure",!0,t.$t("Alert")),t.FetchData()})}))):t.ShowAlert(t.$t("NotAuthorizedSection"),"failure",!0,"Alert")})}}},u=d,h=(a("b9e5"),a("2877")),S=Object(h["a"])(u,s,o,!1,null,null,null);e["default"]=S.exports},b9e5:function(t,e,a){"use strict";a("94ba")}}]);
//# sourceMappingURL=chunk-694434e8.js.map