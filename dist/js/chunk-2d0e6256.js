(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6256"],{9801:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("section",[t("tg-list",{attrs:{IsShowAction:!0,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"ASSET_CATALOGUE_ID",HeaderText:"Scanned Items Status",ListData:e.ItemWriteOffData,HeaderData:e.Headers,widgets:e.widgets,callbackfunction:e.FetchData,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,LegendArray:e.LegendArray,SortExp:e.SortExp,SortBy:e.SortBy},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata}})],1)},n=[];a("1115");let r=[{title:"Add New",iconClass:"fa fa-plus",callbackfunction:"addnew",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1}],s=[{fieldName:"Select Location",fieldType:"ddl-check",fieldIcon:"fa-file",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Product Name/Code",fieldType:"text",fieldIcon:"fa-user",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];function i(e,t,a){if("Location"==a);}var c={buttons:r,leftsearchSchema:s,bindleftCommonSearchdropdown:i},d={components:{},data(){return{listheaderbuttons:c.buttons,LegendArray:[],ItemWriteOffData:[],PageSize:5,PageNumber:1,PageSizeOption:null,StatusListForListing:[],Headers:[{COLUMN_NAME:"Location",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Location",DISPLAY_ORDER:1},{COLUMN_NAME:"Product Type",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Product Type",DISPLAY_ORDER:2},{COLUMN_NAME:"Product Name",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Product Name",DISPLAY_ORDER:3},{COLUMN_NAME:"Unique Code",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Unique Code",DISPLAY_ORDER:4},{COLUMN_NAME:"Sub Location",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Sub Location",DISPLAY_ORDER:5},{COLUMN_NAME:"Serial Number",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Serial Number",DISPLAY_ORDER:6},{COLUMN_NAME:"EPC Tags",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"EPC Tags",DISPLAY_ORDER:7},{COLUMN_NAME:"IP Address",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"IP Address",DISPLAY_ORDER:8},{COLUMN_NAME:"Status",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:9}],noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,SortBy:"",SortExp:"",legendProgress:[{class:"",backgroundColor:"#17a2b8",name:"Draft"},{class:"legend-Progress",backgroundColor:"",name:"Approved"},{class:"legend-pending",backgroundColor:"",name:"Pending"},{class:"",backgroundColor:"#fe6847",name:"SendForCorrection"},{class:"",backgroundColor:"#ee1313",name:"Rejected"}],ItemWriteOffData:[],PageSize:10,PageNumber:1}},created(){var e=this;e.FetchData(),e.LegendArray=[{class:"legend-Progress colorboxsquare",text:" Missing Products"}]},methods:{columnDataFormatter:function(e,t){return e[t.COLUMN_NAME]},FetchData(){},leftCommonSearch(){}}},l=d,A=a("2877"),S=Object(A["a"])(l,o,n,!1,null,null,null);t["default"]=S.exports}}]);
//# sourceMappingURL=chunk-2d0e6256.js.map