(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ecd19ef"],{"0fb3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"padding-t_10"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-2"},[e("div",{staticClass:"theme-primary partition p-2",staticStyle:{overflow:"visible"}},[e("span",{staticClass:"p-name text-white p-0"},[t._v(t._s(t.$t("Product Dashboard")))]),e("div",{staticClass:"float-right global"},[e("DateRangespop",{attrs:{pgaction:"global"}})],1)])])]),e("div",{attrs:{id:"tabs"}},[e("div",{staticClass:"dashbord-graph-widget row ml-0 mr-0"},t._l(t.DashData,(function(a){return e("div",{staticClass:"col-md-4"},[e("div",{style:{transform:`scale(${a.zoomLevel})`}},[e("div",{staticClass:"graph-widget align-self-stretch col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3 ticketingDashboardHead",attrs:{"data-id":"@item.REPORT_ID",daction:"@list.ACTION",dctrl:"@list.CONTROLLER"}},[e("div",{staticClass:"graph-widget-box gwb_control"},[e("div",{staticClass:"graph-widget-heading"},[t._v(t._s(t.$t(a.REPORT_HEADING))+" "),e("input",{attrs:{type:"hidden",value:"@Resources.ResourceManager.GetString(@list.REPORT_HEADING)"}}),e("span",{staticClass:"icon_close"},[e("a",{staticClass:"hlkDeleteReport ancdashboard mobileleftalignfix text-secondary",on:{click:function(e){return t.Removereport(a.REPORT_ID)}}},[e("i",{staticClass:"fa fa-times",attrs:{title:"Remove"}})])]),e("span",{staticClass:"icon_expand"},[e("a",{staticClass:"zoomin ancdashboard mobileleftalignfix text-secondary",on:{click:function(e){return t.ResizeReportWidget(a,a.REPORT_ID)}}},[e("i",{staticClass:"fa fa-expand",attrs:{title:"Zoom Out"}})])]),e("div",{staticClass:"float-right local"},[e("DateRangespop",{attrs:{pgaction:a.ACTION}})],1),e("div",{staticClass:"float-right"},[e("VueApexCharts",{attrs:{width:"600",type:"pie",options:a.pieChart.chartOptions,series:a.pieChart.series}})],1),e("div",{staticClass:"clearfix"})]),e("div",{staticClass:"clearfix"}),e("div",{staticClass:"raph-widget-content reportBlock text-center",attrs:{action:"@Asset.ACTION",controller:"@list.CONTROLLER"}})])])])])})),0),e("div",{staticClass:"clearfix"}),e("div",{staticClass:"text-right mt-3"},[e("a",{staticClass:"btn btn-success formbtn",attrs:{id:"hlkAddMoreReports"},on:{click:function(e){return t.openAddMorepopup()}}},[e("i",{staticClass:"fa fa-plus pr-2"}),t._v(" "+t._s(t.$t("AddMore"))+" ")])])]),t.AddAseet?e("AddMorepop",{attrs:{ReportData:t.ReportData},on:{closeAddMorepopup:t.closeAddMorepopup}}):t._e(),e("div")],1)])},i=[],o=(a("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v("Report ")]),e("button",{staticClass:"close",attrs:{type:"button",title:"close","data-original-title":"Close"},on:{click:function(e){return t.$emit("closeAddMorepopup")}}},[e("em",{staticClass:"fa fa-times"})])]),e("div",{staticClass:"border p-3"},[t._m(0),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left"},[e("div",{staticClass:"table-responsive table-fix-header"},[e("table",{staticClass:"table table-bordered mb-0",attrs:{id:"tblReportDashboard"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticClass:"text-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAllPram,expression:"selectAllPram"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selectAllPram)?t._i(t.selectAllPram,null)>-1:t.selectAllPram},on:{change:[function(e){var a=t.selectAllPram,s=e.target,i=!!s.checked;if(Array.isArray(a)){var o=null,r=t._i(a,o);s.checked?r<0&&(t.selectAllPram=a.concat([o])):r>-1&&(t.selectAllPram=a.slice(0,r).concat(a.slice(r+1)))}else t.selectAllPram=i},t.SelectAll]}})]),e("th",[t._v("Report")]),e("th",[t._v("Description")])])]),e("tbody",t._l(t.ReportData,(function(a,s){return e("tr",{key:s},[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.ISSELECTED,expression:"item.ISSELECTED"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.ISSELECTED)?t._i(a.ISSELECTED,null)>-1:a.ISSELECTED},on:{change:[function(e){var s=a.ISSELECTED,i=e.target,o=!!i.checked;if(Array.isArray(s)){var r=null,l=t._i(s,r);i.checked?l<0&&t.$set(a,"ISSELECTED",s.concat([r])):l>-1&&t.$set(a,"ISSELECTED",s.slice(0,l).concat(s.slice(l+1)))}else t.$set(a,"ISSELECTED",o)},t.SingleSelect]}})]),e("td",[e("span",[t._v(" "+t._s(a.REPORT_HEADING))]),t._v("> ")]),e("td",[e("span",[t._v(t._s(a.REPORT_DESCRIPTION))])])])})),0)])])]),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left px-0"},[e("div",{staticClass:"row flex-row-reverse"},[e("div",{staticClass:"col-lg-4 text-right"},[e("a",{staticClass:"btn btn-success formbtn text-white mr-1",attrs:{href:"javascript:;",title:t.$t("Save")},on:{click:function(e){return t.SaveWidgets()}}},[e("i",{staticClass:"fa fa-save pr-2"}),e("span",[t._v(t._s(t.$t("Save")))])]),e("a",{staticClass:"btn btn-danger formbtn text-white",attrs:{href:"javascript:;",title:t.$t("Cancel")},on:{click:function(e){return t.ClosePopup()}}},[e("i",{staticClass:"fa fa-close pr-2"}),e("span",[t._v(t._s(t.$t("Cancel")))])])])])])])])])])])}),r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-12 mb-3 px-0"},[e("div",{staticClass:"heading-border"},[e("h5",{staticClass:"h5"},[e("span",[t._v("Select report(s) from below list to display on dashboard.")])])])])}],l=a("1115"),n={props:{ReportData:[]},data(){return{mulipleSelect:!1,Sreportdata:[],selectAllPram:!1,ReportIds:[]}},created(){var t=this;t.SingleSelect()},methods:{closeAddMorepopup(){var t=this;t.AddAseet=!1},SelectAll(){var t=this;t.selectAllPram?t.ReportData.forEach(t=>{t.ISSELECTED=1}):t.ReportData.forEach(t=>{t.ISSELECTED=0})},SingleSelect(){var t=this;t.selectAllPram=!0,t.ReportData.forEach(e=>{1!=e.ISSELECTED&&(t.selectAllPram=!1)})},SaveWidgets(){var t=this,e="";t.ReportData.forEach(e=>{1==e.ISSELECTED&&t.ReportIds.push(e.REPORT_ID)}),e=t.ReportIds.join(",");let a={ReportIds:e,ModuleName:""};""==e||t.ReportIds.length<=3?t.ShowAlert(t.$t("DashBoardReportErrorMessage"),"failure",!0,t.$t("Alert")):l["a"].widgetSave(a).then(e=>{console.log("res",e),t.$parent.AssetDashBoard(),t.$parent.closeAddMorepopup()})},ClosePopup(){this.$parent.closeAddMorepopup()}}},d=n,c=a("2877"),p=Object(c["a"])(d,o,r,!1,null,null,null),h=p.exports,u=a("1321"),m=a.n(u),g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"float-right displayinlineblock"},[e("div",{ref:"modalRef",staticClass:"date_range",class:t.modal,attrs:{id:"mainDiv"}},[e("a",{staticClass:"btn btn-info formbtn inline-block showDatePanel mr-2 py-1",attrs:{id:"aDateLable_"+t.pgaction,href:"javascript:; "},on:{click:t.OpenDatePopUp}},[e("i",{staticClass:"fa fa-bars mt-1 pr-2"}),e("em",{staticClass:"text-white"},[t._v(t._s(t.$t("Today")))])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showpopup,expression:"showpopup"}],staticClass:"DatePopUp divtimer_design p-1",attrs:{id:"DivTimer_"+t.pgaction,"data-pageaction":t.pgaction}},[e("table",{staticClass:"table-responsive AssetDatePopUp d-block"},[e("tbody",{staticClass:"daterangebody"},[e("tr",{ref:"daterange",staticClass:"daterangetr",staticStyle:{display:"contents!important"}},[e("td",{staticClass:"sep daterangetd"},[e("ul",{staticClass:"date_select"},[e("li",{attrs:{id:"1"}},[e("a",{staticClass:"Today",attrs:{title:t.$t("Today"),id:"aToday",typ:"Today"},on:{click:function(e){return t.ClickTimer("Today",this,t.pgaction)}}},[t._v(t._s(t.$t("Today")))])]),e("li",{attrs:{id:"2"}},[e("a",{staticClass:"Yesterday",attrs:{title:t.$t("Yesterday"),id:"aYesterday",typ:"Yesterday"},on:{click:function(e){return t.ClickTimer("Yesterday",this,t.pgaction)}}},[t._v(t._s(t.$t("Yesterday")))])]),e("li",{attrs:{id:"3"}},[e("a",{staticClass:"Week",attrs:{title:t.$t("ThisWeek"),id:"aWeek",typ:"Week"},on:{click:function(e){return t.ClickTimer("Week",this,t.pgaction)}}},[t._v(t._s(t.$t("ThisWeek")))])]),e("li",{attrs:{id:"4"}},[e("a",{staticClass:"AllTime",attrs:{title:t.$t("AllTime"),id:"aAll",typ:"AllTime"},on:{click:function(e){return t.ClickTimer("AllTime",this,t.pgaction)}}},[t._v(t._s(t.$t("ThisYear")))])])])]),e("td",{staticClass:"daterangetd",attrs:{valign:"top"}},[e("ul",{staticClass:"date_select"},[e("li",{attrs:{id:"5"}},[e("a",{staticClass:"LastWeek",attrs:{id:"aLastWeek",typ:"LastWeek",title:t.$t("LastWeek")},on:{click:function(e){return t.ClickTimer("LastWeek",this,t.pgaction)}}},[t._v(t._s(t.$t("LastWeek")))])]),e("li",{attrs:{id:"6"}},[e("a",{staticClass:"Month",attrs:{id:"aMonth",typ:"Month",title:t.$t("ThisMonth")},on:{click:function(e){return t.ClickTimer("Month",this,t.pgaction)}}},[t._v(t._s(t.$t("ThisMonth")))])]),e("li",{attrs:{id:"7"}},[e("a",{staticClass:"LastMonth",attrs:{id:"aLastMonth",typ:"LastMonth",title:t.$t("LastMonth")},on:{click:function(e){return t.ClickTimer("LastMonth",this,t.pgaction)}}},[t._v(t._s(t.$t("LastMonth")))])])])])])])]),e("div",{staticClass:"col-lg-12 d-flex p-0 daterangetr"},[e("div",{staticClass:"col-lg-4 daterangetd table_datepickerfix p-0"},[e("label",[t._v("From ...")]),e("br"),e("v-date-picker",{attrs:{mode:"date"},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,inputEvents:s}){return[e("input",t._g({staticClass:"textfield2 ie_crossicon_none FromDate form-control p-1",attrs:{id:"txtFromDate_"+t.pgaction,name:"startDate"},domProps:{value:a}},s))]}}]),model:{value:t.fromDate,callback:function(e){t.fromDate=e},expression:"fromDate"}})],1),e("div",{staticClass:"col-lg-4 daterangetd table_datepickerfix pr-0 pl-2"},[e("label",[t._v("...To")]),e("br"),e("v-date-picker",{attrs:{mode:"date"},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,inputEvents:s}){return[e("input",t._g({staticClass:"textfield2 ie_crossicon_none ToDate form-control p-1",attrs:{id:"txtToDate_"+t.pgaction,name:"endDate"},domProps:{value:a}},s))]}}]),model:{value:t.toDate,callback:function(e){t.toDate=e},expression:"toDate"}})],1),e("div",{staticClass:"col-lg-4 px-2 mt-4"},[e("input",{staticClass:"btn btn-success float-left p-1 p-1 pl-4 pr-4",attrs:{type:"button",id:"btnsearch_"+t.pgaction,"data-result":"btnsearch",value:"Go"},on:{click:function(e){return t.searchGoclick(this,t.pgaction)}}})])])]),e("input",{attrs:{type:"hidden",id:"hdnDateSpan",value:"Month",title:"hidden ctr for keeping current Search type Like week, month and day."}}),e("input",{attrs:{type:"hidden",id:"ReportViewer",name:"returnType"}}),e("input",{attrs:{type:"hidden",id:"pgaction",name:"pgaction"},domProps:{value:t.pgaction}}),e("input",{attrs:{type:"hidden",id:"hdnViewId",name:"viewid"}}),e("input",{attrs:{type:"hidden",id:"hdnPinnedViewId",name:"viewid"}})])])},v=[],f={props:{pgaction:null},data(){return{isLoading:!1,fromDate:null,toDate:null,showpopup:!1,eval:"",evaltype:"",showPin:!1}},created(){this.GetStartEndDates("ThisMonth")},methods:{OpenDatePopUp(){document.addEventListener("mouseup",this.closeModalOnClickOutside),this.showpopup=!0},closeModal(){this.showpopup=!1,document.removeEventListener("mouseup",this.closeModalOnClickOutside)},closeModalOnClickOutside(t){const e=this.$refs.modalRef;console.log("modal"),e.contains(t.target)||this.closeModal()},searchGoclick(t,e){var a=this;if(this.global){this.$refs.dateRangeGlobal.aDateLable_global="Custom"}a.$parent.AssetDashBoard()},ClickTimer(t,e,a){var s=this;$(".btnPin").show(),"global"==$(e).closest("div.DatePopUp").attr("data-pageaction")?($(e).closest(".date_range").find("#aDateLable_global").find("em.text-white").html("").html($(e).text()),s.isLoading=!0,"Today"==t?s.GetStartEndDates(t,e,a):"Yesterday"==t?s.GetStartEndDates("yesterday",e,a):"Week"==t?s.GetStartEndDates("thisweek",e,a):"LastWeek"==t?s.GetStartEndDates("lastweek",e,a):"Month"==t?s.GetStartEndDates("thismonth",e,a):"LastMonth"==t?s.GetStartEndDates("lastmonth",e,a):"AllTime"==t&&s.GetStartEndDates("thisyear",e,a),s.isLoading=!1):"Today"==t?($(e).closest(".date_range").find("#hdnDateSpan").val("day"),s.GetStartEndDates(t,e,a)):"Yesterday"==t?($(e).closest(".date_range").find("#hdnDateSpan").val("day"),s.GetStartEndDates("yesterday",e,a)):"Week"==t?($(e).closest(".date_range").find("#hdnDateSpan").val("week"),s.GetStartEndDates("thisweek",e,a)):"LastWeek"==t?($(e).closest(".date_range").find("#hdnDateSpan").val("week"),s.GetStartEndDates("lastweek",e,a)):"Month"==t?($(e).closest(".date_range").find("#hdnDateSpan").val("month"),s.GetStartEndDates("thismonth",e,a)):"LastMonth"==t?($(e).closest(".date_range").find("#hdnDateSpan").val("month"),s.GetStartEndDates("lastmonth",e,a)):"AllTime"==t&&($(e).closest(".date_range").find("#hdnDateSpan").val("day"),s.GetStartEndDates("thisyear",e,a)),$(e).closest(".date_range").find("#imgNext").show(),$(e).closest(".date_range").find("#imgPrev").show()},GetStartEndDates(t,e,a){var s=this;a=void 0==a?"global":a,s.isLoading=!0;var i=`DateSpan=${t.toLowerCase()}&report=`;l["a"].GetStartEndDate_New(i).then((function(t){s.isLoading=!1;var e=t.data;s.fromDate=e.dateStart,s.toDate=e.dateEnd,$("#txtFromDate_"+a).val(e.dateStart),$("#txtToDate_"+a).val(e.dateEnd),$("#aDateLable_"+a).find("em").text(e.displayText),s.$emit("set-date",e.dateStart,e.dateEnd),s.$parent.AssetDashBoard(a)}))}}},D=f,_=(a("c61c"),a("15f2"),Object(c["a"])(D,g,v,!1,null,null,null)),b=_.exports,C={components:{DateRangespop:b,AddMorepop:h,VueApexCharts:m.a},props:{pgaction:{type:String}},data(){return{PieWidgetData:[],DashData:[],AddAseet:!1,ReportData:[],zoomLevel:1}},created(){var t=this;t.AssetDashBoard("global"),t.GetReporttype()},methods:{GetReporttype:async function(){var t=this,e="moduleName=Asset";await l["a"].GetReports(e).then(e=>{t.ReportData=e.data.Result})},openAddMorepopup:function(){var t=this;t.AddAseet=!0},closeAddMorepopup(){var t=this;t.AddAseet=!1},AssetDashBoard:async function(t){var e=this,a="";if("global"==t||""==t)a=`fromDate=${$(".global #txtFromDate_global").val()}&toDate=${$(".global #txtToDate_global").val()}`,await l["a"].GetDashBoard(a).then(t=>{if(null!=t.data){e.DashData=t.data.ReportList;var a=[],s=[],i={};e.DashData.forEach(t=>{a=[],s=[],t.chartList.forEach((function(t,e){a.push(t.STATUS_NAME),s.push(t.TOTAL_COUNT)})),i={series:s,chartOptions:{chart:{width:380,type:"pie"},labels:a,responsive:[{breakpoint:480,options:{chart:{width:200}}}]}},t.pieChart=i})}});else{var s="#txtFromDate_"+t,i="#txtToDate_"+t;a=`fromDate=${$(s).val()}&toDate=${$(i).val()}&reportType=${t}`;await l["a"].LocalAssetReportTypeParam(a).then(t=>{null!=t.data&&(e.DashData=t.data.ReportList)})}},ResizeReportWidget:function(t,e){var a="pieChart"+e,s=$(a).data("pieChart");if(s){var i={height:300,width:800};t.ACTION?i={height:200,width:400}:$(window).width()<=1280&&$(window).height()<=1024&&(i={height:200,width:300}),chartData.resize(i),console.log(chartData)}else console.error("Chart not found:",a)},Removereport(t){var e=this,a="reportId="+t;l["a"].ReportsRemove(a).then(t=>{e.DashData.length<=3?e.ShowAlert(e.$t("DashBoardRemoveErrorMessage",[e.$t("Id")]),"failure",!0,e.$t("Alert")):e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("REPORT_ID"),(function(){e.AssetDashBoard()}))})}}},x=C,k=(a("4cf4"),Object(c["a"])(x,s,i,!1,null,null,null));e["default"]=k.exports},"15f2":function(t,e,a){"use strict";a("edcc")},4353:function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".unique_dropdown{background:#484848;line-height:20px;height:33px;color:#fff;margin-top:3px;padding:5px 3px 5px 0;border:1px solid #767676}.table_header .date_range_bi{background:#484848!important;border:1px solid #767676!important}.ticketingDashboardHead:nth-child(3n+3){float:right!important}.contentcontainer{margin-top:0!important}.DatePopUp{background-color:#fff;border:1px solid #030303;box-shadow:0 0 3px #d8d8d8;position:absolute;width:244px;z-index:999;right:4px}.ui-datepicker-trigger{display:none!important}.table_header .date_range_bi{padding:5px 0 5px 5px;margin-right:6px}.ResizeReportWidget{background-position:-95px 1px;width:25px}.reporthead .icon_remove{width:26px}.table_header .date_range label{margin:0 5px 0 0}",""]),t.exports=e},"4cf4":function(t,e,a){"use strict";a("706f")},"706f":function(t,e,a){var s=a("4353");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("56572429",s,!0,{sourceMap:!1,shadowMode:!1})},"8c2e":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".gwb_control .graph-widget-heading span{color:#000!important}.graph-widget.ticketingDashboardHead{overflow:visible}",""]),t.exports=e},c61c:function(t,e,a){"use strict";a("c816")},c816:function(t,e,a){var s=a("efb3");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("07166818",s,!0,{sourceMap:!1,shadowMode:!1})},edcc:function(t,e,a){var s=a("8c2e");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("78fe9a16",s,!0,{sourceMap:!1,shadowMode:!1})},efb3:function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".DatePopUp{width:320px}.divtimer_design table.AssetDatePopUp{margin-bottom:0}.divtimer_design table.AssetDatePopUp td.daterangetd{padding:0!important;text-align:left;vertical-align:top;font-size:12px}.divtimer_design table.AssetDatePopUp td.sep{border-right:1px solid #d2d2d2}.reporthead .divtimer_design table.AssetDatePopUp td.daterangetd{line-height:30px}.date_range_bi div.divtimer_design span{margin-top:0!important;color:#000}.divtimer_design .bootstrap-datetimepicker-widget{position:relative!important;top:auto!important;left:5px!important}.AssetDatePopUp tr td.daterangetd.date-range-column{max-width:114px!important;display:table-column!important;width:auto!important}.AssetDatePopUp tbody.daterangebody tr.daterangetr{display:table-row!important}",""]),t.exports=e}}]);
//# sourceMappingURL=chunk-1ecd19ef.js.map