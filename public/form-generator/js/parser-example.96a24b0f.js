(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["parser-example"],{"045a":function(e,r,_){},2638:function(e,r,_){"use strict";function o(){return o=Object.assign||function(e){for(var r,_=1;_<arguments.length;_++)for(var o in r=arguments[_],r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},o.apply(this,arguments)}var t=["attrs","props","domProps"],n=["class","style","directives"],l=["on","nativeOn"],a=function(e){return e.reduce((function(e,r){for(var _ in r)if(e[_])if(-1!==t.indexOf(_))e[_]=o({},e[_],r[_]);else if(-1!==n.indexOf(_)){var a=e[_]instanceof Array?e[_]:[e[_]],s=r[_]instanceof Array?r[_]:[r[_]];e[_]=a.concat(s)}else if(-1!==l.indexOf(_))for(var c in r[_])if(e[_][c]){var u=e[_][c]instanceof Array?e[_][c]:[e[_][c]],f=r[_][c]instanceof Array?r[_][c]:[r[_][c]];e[_][c]=u.concat(f)}else e[_][c]=r[_][c];else if("hook"==_)for(var m in r[_])e[_][m]=e[_][m]?i(e[_][m],r[_][m]):r[_][m];else e[_]=r[_];else e[_]=r[_];return e}),{})},i=function(e,r){return function(){e&&e.apply(this,arguments),r&&r.apply(this,arguments)}};e.exports=a},4212:function(e,r,_){"use strict";var o=_("045a"),t=_.n(o);t.a},b8fa:function(e,r,_){"use strict";_.r(r);var o,t,n=function(){var e=this,r=e.$createElement,_=e._self._c||r;return _("div",{staticClass:"test-form"},[_("parser",{attrs:{"form-conf":e.formConf},on:{submit:e.sumbitForm1}}),_("parser",{key:e.key2,attrs:{"form-conf":e.formConf},on:{submit:e.sumbitForm2}}),_("el-button",{on:{click:e.change}},[e._v(" change ")])],1)},l=[],a=(_("4160"),_("159b"),_("f50d")),i=a["a"],s=_("2877"),c=Object(s["a"])(i,o,t,!1,null,null,null),u=c.exports,f={components:{Parser:u},props:{},data:function(){return{key2:+new Date,formConf:{fields:[{__config__:{label:"单行文本",labelWidth:null,showLabel:!0,changeTag:!0,tag:"el-input",tagIcon:"input",required:!0,layout:"colFormItem",span:24,document:"https://element.eleme.cn/#/zh-CN/component/input",regList:[{pattern:"/^1(3|4|5|7|8|9)\\d{9}$/",message:"手机号格式错误"}]},__slot__:{prepend:"",append:""},__vModel__:"mobile",placeholder:"请输入手机号",style:{width:"100%"},clearable:!0,"prefix-icon":"el-icon-mobile","suffix-icon":"",maxlength:11,"show-word-limit":!0,readonly:!1,disabled:!1},{__config__:{label:"日期范围",tag:"el-date-picker",tagIcon:"date-range",defaultValue:null,span:24,showLabel:!0,labelWidth:null,required:!0,layout:"colFormItem",regList:[],changeTag:!0,document:"https://element.eleme.cn/#/zh-CN/component/date-picker",formId:101,renderKey:1585980082729},style:{width:"100%"},type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",disabled:!1,clearable:!0,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",readonly:!1,__vModel__:"field101"},{__config__:{layout:"rowFormItem",tagIcon:"row",label:"行容器",layoutTree:!0,children:[{__config__:{label:"评分",tag:"el-rate",tagIcon:"rate",defaultValue:0,span:24,showLabel:!0,labelWidth:null,layout:"colFormItem",required:!0,regList:[],changeTag:!0,document:"https://element.eleme.cn/#/zh-CN/component/rate",formId:102,renderKey:1586839671259},style:{},max:5,"allow-half":!1,"show-text":!1,"show-score":!1,disabled:!1,__vModel__:"field102"}],document:"https://element.eleme.cn/#/zh-CN/component/layout",formId:101,span:24,renderKey:1586839668999,componentName:"row101",gutter:15},type:"default",justify:"start",align:"top"},{__config__:{label:"按钮",showLabel:!0,changeTag:!0,labelWidth:null,tag:"el-button",tagIcon:"button",span:24,layout:"colFormItem",document:"https://element.eleme.cn/#/zh-CN/component/button",renderKey:1594288459289},__slot__:{default:"测试按钮1"},type:"primary",icon:"el-icon-search",round:!1,size:"medium",plain:!1,circle:!1,disabled:!1,on:{click:"clickTestButton1"}}],__methods__:{clickTestButton1:function(){console.log("%c【测试按钮1】点击事件里可以访问当前表单：\n                1) formModel='formData', 所以this.formData可以拿到当前表单的model\n                2) formRef='elForm', 所以this.$refs.elForm可以拿到当前表单的ref(vue组件)\n              ","color:#409EFF;font-size: 15px"),console.log("表单的Model：",this.formData),console.log("表单的ref：",this.$refs.elForm)}},formRef:"elForm",formModel:"formData",size:"small",labelPosition:"right",labelWidth:100,formRules:"rules",gutter:15,disabled:!1,span:24,formBtns:!0,unFocusedComponentBorder:!1},formConf2:{fields:[{__config__:{label:"单行文本",labelWidth:null,showLabel:!0,changeTag:!0,tag:"el-input",tagIcon:"input",required:!0,layout:"colFormItem",span:24,document:"https://element.eleme.cn/#/zh-CN/component/input",regList:[{pattern:"/^1(3|4|5|7|8|9)\\d{9}$/",message:"手机号格式错误"}]},__slot__:{prepend:"",append:""},__vModel__:"mobile",placeholder:"请输入手机号",style:{width:"100%"},clearable:!0,"prefix-icon":"el-icon-mobile","suffix-icon":"",maxlength:11,"show-word-limit":!0,readonly:!1,disabled:!1},{__config__:{label:"日期范围",tag:"el-date-picker",tagIcon:"date-range",defaultValue:null,span:24,showLabel:!0,labelWidth:null,required:!0,layout:"colFormItem",regList:[],changeTag:!0,document:"https://element.eleme.cn/#/zh-CN/component/date-picker",formId:101,renderKey:1585980082729},style:{width:"100%"},type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",disabled:!1,clearable:!0,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",readonly:!1,__vModel__:"field101"}],formRef:"elForm",formModel:"formData",size:"small",labelPosition:"right",labelWidth:100,formRules:"rules",gutter:15,disabled:!1,span:24,formBtns:!0,unFocusedComponentBorder:!1}}},computed:{},watch:{},created:function(){},mounted:function(){var e=this;setTimeout((function(){var r={mobile:"18836662555"};e.fillFormData(e.formConf,r),e.key2=+new Date}),2e3)},methods:{fillFormData:function(e,r){e.fields.forEach((function(e){var _=r[e.__vModel__];_&&(e.__config__.defaultValue=_)}))},change:function(){this.key2=+new Date;var e=this.formConf;this.formConf=this.formConf2,this.formConf2=e},sumbitForm1:function(e){console.log("sumbitForm1提交数据：",e)},sumbitForm2:function(e){console.log("sumbitForm2提交数据：",e)}}},m=f,d=(_("4212"),Object(s["a"])(m,n,l,!1,null,"77b1aafa",null));r["default"]=d.exports},f50d:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("d81d"),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("b64b"),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__),D_form_generator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ade3"),_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("2638"),_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_5__),D_form_generator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("5530"),_utils_index__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("ed08"),_components_render_render_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("4758"),ruleTrigger={"el-input":"blur","el-input-number":"blur","el-select":"change","el-radio-group":"change","el-checkbox-group":"change","el-cascader":"change","el-time-picker":"change","el-date-picker":"change","el-rate":"change"},layouts={colFormItem:function(e,r){var _=r.__config__,o=buildListeners.call(this,r),t=_.labelWidth?"".concat(_.labelWidth,"px"):null;return!1===_.showLabel&&(t="0"),e("el-col",{attrs:{span:_.span}},[e("el-form-item",{attrs:{"label-width":t,prop:r.__vModel__,label:_.showLabel?_.label:""}},[e(_components_render_render_js__WEBPACK_IMPORTED_MODULE_8__["a"],{attrs:{conf:r},on:Object(D_form_generator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["a"])({},o)})])])},rowFormItem:function(e,r){var _=renderChildren.apply(this,arguments);return"flex"===r.type&&(_=e("el-row",{attrs:{type:r.type,justify:r.justify,align:r.align}},[_])),e("el-col",{attrs:{span:r.span}},[e("el-row",{attrs:{gutter:r.gutter}},[_])])}};function renderFrom(e){var r=this.formConfCopy;return e("el-row",{attrs:{gutter:r.gutter}},[e("el-form",_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_5___default()([{attrs:{size:r.size,"label-position":r.labelPosition,disabled:r.disabled,"label-width":"".concat(r.labelWidth,"px")},ref:r.formRef},{props:{model:this[r.formModel]}},{attrs:{rules:this[r.formRules]}}]),[renderFormItem.call(this,e,r.fields),r.formBtns&&formBtns.call(this,e)])])}function formBtns(e){return e("el-col",[e("el-form-item",{attrs:{size:"large"}},[e("el-button",{attrs:{type:"primary"},on:{click:this.submitForm}},["提交"]),e("el-button",{on:{click:this.resetForm}},["重置"])])])}function renderFormItem(e,r){var _=this;return r.map((function(r){var o=r.__config__,t=layouts[o.layout];if(t)return t.call(_,e,r);throw new Error("没有与".concat(o.layout,"匹配的layout"))}))}function renderChildren(e,r){var _=r.__config__;return Array.isArray(_.children)?renderFormItem.call(this,e,_.children):null}function setValue(e,r,_){this.$set(r,"defaultValue",e),this.$set(this[this.formConf.formModel],_.__vModel__,e)}function buildListeners(e){var r=this,_=e.__config__,o=this.formConf.__methods__||{},t={};return Object.keys(o).forEach((function(e){t[e]=function(_){return o[e].call(r,_)}})),t.input=function(o){return setValue.call(r,o,_,e)},t}__webpack_exports__["a"]={components:{render:_components_render_render_js__WEBPACK_IMPORTED_MODULE_8__["a"]},props:{formConf:{type:Object,required:!0}},data:function(){var e,r=(e={formConfCopy:Object(_utils_index__WEBPACK_IMPORTED_MODULE_7__["b"])(this.formConf)},Object(D_form_generator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["a"])(e,this.formConf.formModel,{}),Object(D_form_generator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["a"])(e,this.formConf.formRules,{}),e);return this.initFormData(r.formConfCopy.fields,r[this.formConf.formModel]),this.buildRules(r.formConfCopy.fields,r[this.formConf.formRules]),r},methods:{initFormData:function(e,r){var _=this;e.forEach((function(e){var o=e.__config__;e.__vModel__&&(r[e.__vModel__]=o.defaultValue),o.children&&_.initFormData(o.children,r)}))},buildRules:function buildRules(componentList,rules){var _this4=this;componentList.forEach((function(cur){var config=cur.__config__;if(Array.isArray(config.regList)){if(config.required){var required={required:config.required,message:cur.placeholder};Array.isArray(config.defaultValue)&&(required.type="array",required.message="请至少选择一个".concat(config.label)),void 0===required.message&&(required.message="".concat(config.label,"不能为空")),config.regList.push(required)}rules[cur.__vModel__]=config.regList.map((function(item){return item.pattern&&(item.pattern=eval(item.pattern)),item.trigger=ruleTrigger&&ruleTrigger[config.tag],item}))}config.children&&_this4.buildRules(config.children,rules)}))},resetForm:function(){this.formConfCopy=Object(_utils_index__WEBPACK_IMPORTED_MODULE_7__["b"])(this.formConf),this.$refs[this.formConf.formRef].resetFields()},submitForm:function(){var e=this;this.$refs[this.formConf.formRef].validate((function(r){return!!r&&(e.$emit("submit",e[e.formConf.formModel]),!0)}))}},render:function(e){return renderFrom.call(this,e)}}}}]);