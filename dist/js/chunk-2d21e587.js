(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e587"],{d4bc:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t._self._c;return i("section",{staticClass:"main-content",attrs:{id:"main-content"}},[i("loader",{attrs:{"is-visible":t.isLoading}}),i("section",{staticClass:"page-action"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12 padding-t_8"},[i("div",{staticClass:"theme-primary partition-full"},[i("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("Import Product Type")))])])])])]),i("div",{staticClass:"user-guide-custom d-none"},[t._v(" "+t._s(t.$t("User_Guide_ProductTypeSampleImport"))+" ")]),i("div",{staticClass:"border p-3"},[i("Form",{ref:"ItemTypeForm"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"form-group"},[i("label",[t._v(t._s(t.$t("Sample File"))+":")]),i("div",{staticClass:"input-group mb-3"},[i("div",{staticClass:"form-control"},[i("i",{staticClass:"fa fa-file-excel-o pr-1 text-success"}),t._v(t._s(t.$t("ProductTypeSample"))+".xls ")]),i("div",{staticClass:"input-group-append downloadProductSample"},[i("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[i("a",{attrs:{href:"/Content/files/ProductTypeSample.xls",download:""}},[i("i",{staticClass:"fa fa-download text-primary"})])])])])])]),i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"form-group"},[i("label",[t._v(t._s(t.$t("Upload a File"))+":"),i("span",{staticClass:"text-danger"},[t._v("*")])]),i("Field",{attrs:{rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[i("div",{staticClass:"input-group"},[i("div",{staticClass:"custom-file ProductTypeSampleFile"},[i("input",{staticStyle:{position:"absolute",clip:"rect(0px, 0px, 0px, 0px)"},attrs:{type:"file",name:"FileSrc",id:"flAvatar",multiple:"true",tabindex:"-1"},on:{change:function(i){return t.setFile(i)}}}),i("div",{staticClass:"bootstrap-filestyle input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.attachmentName,expression:"attachmentName"}],class:{"form-control disabled":!0,"is-invalid":a[0]},attrs:{type:"text",disabled:""},domProps:{value:t.attachmentName},on:{input:function(i){i.target.composing||(t.attachmentName=i.target.value)}}}),i("div",{staticClass:"input-group-append",staticStyle:{cursor:"pointer"}},[i("span",{staticClass:"group-span-filestyle input-group-btn input-group-text bg-white",attrs:{tabindex:"0"}},[i("label",{staticClass:"mb-0 font-weight-normal",attrs:{title:"Click here to select a file.",for:"flAvatar"}},[t._v(t._s(t.$t("FileControlText")))])]),i("span",{staticClass:"input-group-text border-0 bg-transparent p-0 pl-2"},[i("a",{staticClass:"round-icon-small btn-danger-light",attrs:{href:"javascript:;",title:"Clear"},on:{click:t.Clear}},[i("i",{staticClass:"fa fa-undo"})])])])])])])]}}])})],1)])]),i("div",{staticClass:"row flex-row-reverse"},[i("div",{staticClass:"col-lg-6 text-right"},[i("a",{staticClass:"btn btn-info formbtn mr-1",attrs:{href:"javascript:void(0);",title:t.$t("ImportFromExcelFile")},on:{click:function(i){return t.UploadProductSampleFile()}}},[i("i",{staticClass:"fa fa-download pr-2"}),t._v(t._s(t.$t("Import From Excel File")))]),i("a",{staticClass:"btn btn-danger formbtn my-2",attrs:{title:"","data-toggle-tooltip":"tooltip","data-original-title":"Cancel"},on:{click:function(i){return t.onCancel()}}},[i("i",{staticClass:"fa fa-close mr-2"}),t._v("Cancel")])])])])],1),t.ShowImportProduct?i("ProductTypeSample",{ref:"myChild",attrs:{filepath:t.filepath}}):t._e()],1)},e=[],l=(a("14d9"),function(){var t=this;t._self._c;return t._m(0)}),r=[function(){var t=this,i=t._self._c;return i("section",[i("div",{staticClass:"listing mt-2"},[i("div",{staticClass:"table-responsive mb-3 table-fix-header"},[i("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",attrs:{id:"tblExpList"}},[i("thead",{staticClass:"thead-bg"},[i("tr",[i("th",{staticClass:"ui-resizable",staticStyle:{width:"156px","min-width":"156px","max-width":"156px"},attrs:{id:"th-PRODUCTTYPE"}},[i("span",{staticClass:"d-inline-block",staticStyle:{"min-width":"138px"}},[t._v("Product Type"),i("span",{staticClass:"d-inline-block"},[i("span",{staticClass:"text-danger"},[t._v("*")])])]),i("div",{staticClass:"sizer",attrs:{id:"th-PRODUCTTYPE-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"85px","min-width":"85px","max-width":"85px"},attrs:{id:"th-STATUS"}},[i("span",{staticClass:"d-inline-block",staticStyle:{"min-width":"67px"}},[t._v("Status"),i("span",{staticClass:"d-inline-block"},[i("span",{staticClass:"text-danger"},[t._v("*")])])]),i("div",{staticClass:"sizer",attrs:{id:"th-STATUS-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"204px","min-width":"204px","max-width":"204px"},attrs:{id:"th-PRODUCTTYPECODE"}},[i("span",{staticStyle:{"min-width":"186px"}},[t._v("Product Type Code")]),i("div",{staticClass:"sizer",attrs:{id:"th-PRODUCTTYPECODE-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"132px","min-width":"132px","max-width":"132px"},attrs:{id:"th-DESCRIPTION"}},[i("span",{staticStyle:{"min-width":"114px"}},[t._v("Description")]),i("div",{staticClass:"sizer",attrs:{id:"th-DESCRIPTION-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"108px","min-width":"108px","max-width":"108px"},attrs:{id:"th-CONTAINER"}},[i("span",{staticStyle:{"min-width":"90px"}},[t._v("Container")]),i("div",{staticClass:"sizer",attrs:{id:"th-CONTAINER-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"948px","min-width":"948px","max-width":"948px"},attrs:{id:"th-COMPARTMENTIFINCONTAINERPLEASEWRITECOMPARTMENTNAMESSEPARATEDBYACOMMA"}},[i("span",{staticStyle:{"min-width":"930px"}},[t._v("Compartment")]),i("small",{staticClass:"form-text text-muted"},[t._v("If in container, please write compartment names separated by a comma")]),i("div",{staticClass:"sizer",attrs:{id:"th-COMPARTMENTIFINCONTAINERPLEASEWRITECOMPARTMENTNAMESSEPARATEDBYACOMMA-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"85px","min-width":"85px","max-width":"85px"},attrs:{id:"th-PRODUCT"}},[i("span",{staticStyle:{"min-width":"67px"}},[t._v("Product")]),i("div",{staticClass:"sizer",attrs:{id:"th-PRODUCT-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"120px","min-width":"120px","max-width":"120px"},attrs:{id:"th-CONSUMABLE"}},[i("span",{staticStyle:{"min-width":"102px"}},[t._v("Consumable ")]),i("div",{staticClass:"sizer",attrs:{id:"th-CONSUMABLE-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"120px","min-width":"120px","max-width":"120px"},attrs:{id:"th-LICENSES"}},[i("span",{staticStyle:{"min-width":"102px"}},[t._v("License(s)")]),i("div",{staticClass:"sizer",attrs:{id:"th-LICENSES-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"240px","min-width":"240px","max-width":"240px"},attrs:{id:"th-MATERIALSPAREPARTS"}},[i("span",{staticStyle:{"min-width":"222px"}},[t._v("Material/Spare Parts")]),i("div",{staticClass:"sizer",attrs:{id:"th-MATERIALSPAREPARTS-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"180px","min-width":"180px","max-width":"180px"},attrs:{id:"th-ISTRANSFERABLE"}},[i("span",{staticStyle:{"min-width":"162px"}},[t._v("Is Transferable")]),i("div",{staticClass:"sizer",attrs:{id:"th-ISTRANSFERABLE-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"156px","min-width":"156px","max-width":"156px"},attrs:{id:"th-SELFCHECKOUT"}},[i("span",{staticStyle:{"min-width":"138px"}},[t._v("Self Checkout")]),i("div",{staticClass:"sizer",attrs:{id:"th-SELFCHECKOUT-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"204px","min-width":"204px","max-width":"204px"},attrs:{id:"th-PENALTYONSTATUS"}},[i("span",{staticStyle:{"min-width":"186px"}},[t._v("Penalty On Status")]),i("div",{staticClass:"sizer",attrs:{id:"th-PENALTYONSTATUS-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"clsFixSize ui-resizable",staticStyle:{width:"168px","min-width":"168px","max-width":"168px"},attrs:{id:"th-PENALTYSTATUS"}},[i("span",{staticStyle:{"min-width":"150px"}},[t._v("Penalty Status")]),i("div",{staticClass:"sizer",attrs:{id:"th-PENALTYSTATUS-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"300px","min-width":"300px","max-width":"300px"},attrs:{id:"th-PENALTYONRETURNOVERDUE"}},[i("span",{staticStyle:{"min-width":"282px"}},[t._v("Penalty On Return Overdue")]),i("div",{staticClass:"sizer",attrs:{id:"th-PENALTYONRETURNOVERDUE-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"144px","min-width":"144px","max-width":"144px"},attrs:{id:"th-GRACEPERIOD"}},[i("span",{staticStyle:{"min-width":"126px"}},[t._v("Grace Period")]),i("div",{staticClass:"sizer",attrs:{id:"th-GRACEPERIOD-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"324px","min-width":"324px","max-width":"324px"},attrs:{id:"th-ENABLETERMSANDCONDITIONS"}},[i("span",{staticStyle:{"min-width":"306px"}},[t._v("Enable Terms and Conditions")]),i("div",{staticClass:"sizer",attrs:{id:"th-ENABLETERMSANDCONDITIONS-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"228px","min-width":"228px","max-width":"228px"},attrs:{id:"th-EMPLOYEEACCEPTANCE"}},[i("span",{staticStyle:{"min-width":"210px"}},[t._v("Employee Acceptance")]),i("div",{staticClass:"sizer",attrs:{id:"th-EMPLOYEEACCEPTANCE-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"192px","min-width":"192px","max-width":"192px"},attrs:{id:"th-INSURANCEPOLICY"}},[i("span",{staticStyle:{"min-width":"174px"}},[t._v("Insurance Policy")]),i("div",{staticClass:"sizer",attrs:{id:"th-INSURANCEPOLICY-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"132px","min-width":"132px","max-width":"132px"},attrs:{id:"th-CALIBRATION"}},[i("span",{staticStyle:{"min-width":"114px"}},[t._v("Calibration")]),i("div",{staticClass:"sizer",attrs:{id:"th-CALIBRATION-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"144px","min-width":"144px","max-width":"144px"},attrs:{id:"th-PRODUCTCOST"}},[i("span",{staticStyle:{"min-width":"126px"}},[t._v("Product Cost")]),i("div",{staticClass:"sizer",attrs:{id:"th-PRODUCTCOST-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"96px","min-width":"96px","max-width":"96px"},attrs:{id:"th-WARRANTY"}},[i("span",{staticStyle:{"min-width":"78px"}},[t._v("Warranty")]),i("div",{staticClass:"sizer",attrs:{id:"th-WARRANTY-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"132px","min-width":"132px","max-width":"132px"},attrs:{id:"th-DEPRECIABLE"}},[i("span",{staticStyle:{"min-width":"114px"}},[t._v("Depreciable")]),i("div",{staticClass:"sizer",attrs:{id:"th-DEPRECIABLE-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"144px","min-width":"144px","max-width":"144px"},attrs:{id:"th-GPSTRACKING"}},[i("span",{staticStyle:{"min-width":"126px"}},[t._v("GPS Tracking")]),i("div",{staticClass:"sizer",attrs:{id:"th-GPSTRACKING-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),i("th",{staticClass:"ui-resizable",staticStyle:{width:"192px","min-width":"192px","max-width":"192px"},attrs:{id:"th-FLEETMANAGEMENT"}},[i("span",{staticStyle:{"min-width":"174px"}},[t._v("Fleet Management")]),i("div",{staticClass:"sizer",attrs:{id:"th-FLEETMANAGEMENT-sizer"}}),i("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})])])])])]),i("div",{staticClass:"row flex-row-reverse"},[i("div",{staticClass:"col-lg-6 text-right"},[i("div",{staticClass:"search-btm-btn"},[i("a",{staticClass:"btn btn-success formbtn widthhalf",attrs:{id:"aSubmit",href:"javascript:;",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Submit"}},[i("i",{staticClass:"fa fa-save pr-2"}),t._v("Submit")]),i("a",{staticClass:"btn btn-danger",attrs:{id:"aCancel",href:"javascript:;",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Cancel"}},[i("i",{staticClass:"fa fa-close pr-2"}),t._v("Cancel")])])])])])])}],d=a("1115"),n={props:{filepath:{type:String}},data(){return{Xdata:[]}},created(){var t=this;t.ProductTypeSample()},methods:{onCancel:function(){this.$router.push({name:"Product Type"})},ProductTypeSample:function(){var t=this;t.filepath}}},c=n,p=a("2877"),h=Object(p["a"])(c,l,r,!1,null,null,null),o=h.exports,u={components:{ProductTypeSample:o},data:function(){return{isLoading:!1,file:null,filepath:"",excelFileName:null,reqfrom:null,expListing:null,trips:[],categories:[],projects:[],currencies:[],tasks:[],expLimitJsonBack:[],check_EXPENSE_LIMIT:!1,userDateFormat:null,files:new FormData,value:null,attachmentName:"",ShowImportProduct:!1,Xdata:""}},methods:{onCancel:function(){this.$router.push({name:"Product Type"})},setFile:function(t){this.attachmentName=t.target.files[0].name,this.file=t.target.files[0],this.excelFileName=t.target.files[0].name},Clear:function(){this.attachmentName=""},UploadProductSampleFile(){var t=this;t.$refs.ItemTypeForm.validate().then(i=>{if(i)if(""!=$("#flAvatar").val()){var a=$("#flAvatar").val().split("\\").pop(),s=".xls,.xlsx",e=a.replace(/^.*\./,"");s.includes(e)?t.confirmR(t.$t("bulkImportConfirmationMsg"),!0,t.$t("Delete")+"  "+t.$t("REPORT_ID"),(function(){const i=new FormData;i.append("file",t.file),t.isLoading=!0,d["a"].ImportProductSamplePost(i).then((function(i){t.isLoading=!1;var a=i.data;0==a.Status?(t.filepath=a.Msg,t.ShowImportProduct=""!=t.filepath):t.ShowAlert(a.Msg,"warning",!0,t.$t("Alert"))})),t.isLoading=!1})):t.ShowAlert(t.$t("InvalidSampleFileUploadMsg",[a,s]),"warning",!0,t.$t("Alert"))}else t.ShowAlert(t.$t("PleaseUploadExcelFile"),"warning",!0,t.$t("Alert"))}),t.$emit("ImportProduct")}}},C=u,x=Object(p["a"])(C,s,e,!1,null,null,null);i["default"]=x.exports}}]);
//# sourceMappingURL=chunk-2d21e587.js.map