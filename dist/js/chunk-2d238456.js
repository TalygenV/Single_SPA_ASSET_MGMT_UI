(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238456"],{ff55:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("section",[e("tg-list",{attrs:{IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"ASSET_CATALOGUE_ID",HeaderText:"New Product Type Request",ListData:t.ProductData,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata}}),t.IsShowRelation?e("RelationPopup"):t._e()],1)},o=[],s=(a("14d9"),a("1115"));let n=[{title:"Request New Product Type",iconClass:"fa fa-plus",callbackfunction:"RequestNewProductType",href:"",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Delete",iconClass:"fa fa-trash",callbackfunction:"",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1}],r=[{fieldName:"Product Name",fieldType:"text",fieldIcon:"fa-file",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Product Type",fieldType:"text",fieldIcon:"fa-user",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];function c(t,e,a){}var l={buttons:n,leftsearchSchema:r,bindleftCommonSearchdropdown:c},d=a("f9bd"),u={components:{RelationPopup:d["a"]},data(){return{listheaderbuttons:l.buttons,leftSearchFields:l.leftsearchSchema,listActions:l.listActions,LegendArray:[],ProductData:[],PageSize:10,PageNumber:1,PageSizeOption:null,StatusListForListing:[],Headers:[{COLUMN_NAME:this.$t("Product Name"),DATA_TYPE:"image",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Product Name",DISPLAY_ORDER:1},{COLUMN_NAME:this.$t("Product Type"),DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Product Type",DISPLAY_ORDER:2},{COLUMN_NAME:this.$t("Requested Quantity"),DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Requested Quantity",DISPLAY_ORDER:3},{COLUMN_NAME:this.$t("Description"),DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Description",DISPLAY_ORDER:4,settings:{clickEvent:this.clickEventOfColumn,formatter:this.columnDataFormatter}},{COLUMN_NAME:this.$t("Created By"),DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Created By",DISPLAY_ORDER:5,settings:{isInSlot:!0}},{COLUMN_NAME:this.$t("Created At"),DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Created At",DISPLAY_ORDER:6,settings:{isInSlot:!0}},{COLUMN_NAME:this.$t("View"),DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"View",DISPLAY_ORDER:7,settings:{isInSlot:!0}}],noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,SortBy:"",SortExp:"",widgets:[],legendProgress:[],IsShowRelation:!1}},created(){var t=this;t.FetchData()},methods:{columnDataFormatter:function(t,e){return t[e.COLUMN_NAME]},FetchData(){var t=this,e="search=&pageSize=10&pageNum=1&sortBy=&sortExp=&statusIds=&LocationId=&tagIds=";s["a"].AssetCatalogueListing(e).then(e=>{null!=e.data&&(e.data.data.length>0?(t.ProductData=e.data.data,t.ProductData.forEach(t=>{t.rowDetailsUrl="",""==t.rowDetailsUrl&&(t.rowDetailsUrl="/AssetCatalog/ManageProducts/"+t.ASSET_CATALOGUE_ID)}),t.TotalRecords=50,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1):(t.noRecord=!1,t.ProductData=[],t.TotalRecords=0)),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)})},clickEventOfColumn:function(t,e){},leftCommonSearch(){},currentPageMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},GetPageSizeOption:function(){for(var t=[],e=10,a=e;a<e+95;a+=5)t.push(a);this.PageSizeOption=t},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},commonHeaderButtonClick(t){switch(t.callbackfunction){case"RequestNewProductType":this.RequestNewProductType();break}},RequestNewProductType(){this.$router.push({path:"/AssetRequisition/AddNewRequisition"})},AddRelationShipPopup(){},CloseAddRelationShipPopup(){},actionButtonClick(){},sortdata:function(t){},renderActions(t){}},updated:function(){this.BindActionButtonEvent()}},A=u,S=a("2877"),h=Object(S["a"])(A,i,o,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d238456.js.map