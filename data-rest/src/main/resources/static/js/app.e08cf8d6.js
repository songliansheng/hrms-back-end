(function(e){function t(t){for(var a,r,s=t[0],l=t[1],c=t[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0306":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("2f62"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-icon",{attrs:{large:"",color:"green darken-2"}},[e._v(" mdi-file-account-outline ")]),n("v-toolbar-title",[e._v("人事管理系统")]),n("v-spacer"),e._l(e.tabs,(function(t){return n("v-btn",{key:t.name,on:{click:function(n){e.currenTab=t.name}}},[e._v(" "+e._s(t.label)+" ")])})),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-export")])],1)],2),n("v-main",[n("v-container",[n(e.currentTab,e._b({tag:"component",staticClass:"tab",on:{"update-employee":e.updateEmployee,"delete-employee":e.deleteEmployee,"add-employee":e.addEmployee}},"component",{jobs:e.jobs,departments:e.departments,employees:e.employees},!1))],1)],1)],1)],1)},r=[],s=(n("a434"),n("d3b7"),n("5530")),l=(n("96cf"),n("1da1")),c=[{name:"general",label:"概况"},{name:"employees",label:"员工管理"},{name:"users",label:"用户管理"},{name:"jobs",label:"职位管理"},{name:"departments",label:"部门管理"}],u=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("general Tab")])])}],m={name:"departments-tab",data:function(){}},p=m,v=n("2877"),f=Object(v["a"])(p,u,d,!1,null,null,null),h=f.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-data-table",{staticClass:"elevation-1",attrs:{"show-select":"",headers:e.HEADER,items:e.employees,"items-per-page":5},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",[n("v-toolbar-title",[e._v("员工列表")]),n("v-divider",{staticClass:"mx-4",attrs:{vertical:"",inset:""}}),n("v-spacer"),n("v-dialog",{attrs:{"hide-overlay":"","max-width":"600px","overlay-opacity":"true"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",i,!1),a),[e._v(" 增加员工 ")])]}}]),model:{value:e.dialogEdit,callback:function(t){e.dialogEdit=t},expression:"dialogEdit"}},[n("EmployeeForm",{attrs:{employee:e.editedItem}})],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("取消")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("删除")]),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)},y=[],x=(n("c975"),n("d4ec")),g=function e(){Object(x["a"])(this,e),this.sex="",this.idNumber="",this.department="",this.education="",this.speciality="",this.job="",this.phone="",this.address="",this.note="",this.ename="",this.age="",this.department=""},E=[{text:"姓名",align:"start",sortable:!1,value:"ename"},{text:"性别",value:"sex"},{text:"身份证号",value:"idNumber"},{text:"学历",value:"education"},{text:"手机",value:"phone"},{text:"住址",value:"address"},{text:"备注",value:"notes"},{text:"操作",value:"actions",sortable:!1}],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",[n("v-card-text",[n("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"姓名",rules:e.nameRules},model:{value:e.employee.ename,callback:function(t){e.$set(e.employee,"ename",t)},expression:"employee.ename"}})],1),n("v-col",[n("v-text-field",{attrs:{label:"性别"},model:{value:e.employee.sex,callback:function(t){e.$set(e.employee,"sex",t)},expression:"employee.sex"}})],1),n("v-col",[n("v-text-field",{attrs:{label:"学历"},model:{value:e.employee.education,callback:function(t){e.$set(e.employee,"education",t)},expression:"employee.education"}})],1)],1),n("v-text-field",{attrs:{label:"身份证号",rules:e.idNumRules,required:""},model:{value:e.employee.idNumber,callback:function(t){e.$set(e.employee,"idNumber",t)},expression:"employee.idNumber"}}),n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"手机"},model:{value:e.employee.phone,callback:function(t){e.$set(e.employee,"phone",t)},expression:"employee.phone"}})],1),n("v-col",[n("v-text-field",{attrs:{label:"专业"},model:{value:e.employee.speciality,callback:function(t){e.$set(e.employee,"speciality",t)},expression:"employee.speciality"}})],1)],1),n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"职位"},model:{value:e.employee.job,callback:function(t){e.$set(e.employee,"job",t)},expression:"employee.job"}})],1),n("v-col",[n("v-text-field",{attrs:{label:"住址"},model:{value:e.employee.address,callback:function(t){e.$set(e.employee,"address",t)},expression:"employee.address"}})],1)],1),n("v-text-field",{attrs:{label:"备注"},model:{value:e.employee.notes,callback:function(t){e.$set(e.employee,"notes",t)},expression:"employee.notes"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.cancel}},[e._v(" Cancel ")]),n("v-spacer"),n("v-btn",{staticClass:"mr-4",attrs:{color:"blue darken-1",text:"",disabled:!e.valid},on:{click:e.save}},[e._v(" Save ")]),n("v-spacer")],1)],1)],1)},j=[],k=new a["a"],w={name:"employee-form",props:{employee:Object},data:function(){return{valid:!0,nameRules:[function(e){return!!e||"姓名不能为空"},function(e){return e.length<=10||"Name must be less than 10 characters"}],idNumRules:[function(e){return 18==e.length||"身份证号必须是18位"}]}},methods:{save:function(){this.$refs.form.validate(),k.$emit("saveEmployee",this.employee)},cancel:function(){k.$emit("cancelEdit")}}},O=w,$=n("6544"),I=n.n($),S=n("8336"),V=n("b0af"),C=n("99d9"),T=n("62ad"),D=n("4bd4"),R=n("0fd9"),A=n("2fa4"),P=n("8654"),N=Object(v["a"])(O,_,j,!1,null,null,null),L=N.exports;I()(N,{VBtn:S["a"],VCard:V["a"],VCardActions:C["a"],VCardText:C["b"],VCol:T["a"],VForm:D["a"],VRow:R["a"],VSpacer:A["a"],VTextField:P["a"]});var M={components:{EmployeeForm:L},name:"employees-tab",props:{employees:Array},data:function(){return{dialogEdit:!1,dialogDelete:!1,editedItem:new g,editedIndex:-1,error:!1,submitting:!1,success:!1,HEADER:E}},mounted:function(){k.$on("saveEmployee",this.save,g),k.$on("cancelEdit",this.close)},watch:{dialogEdit:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},methods:{editItem:function(e){this.editedIndex=this.employees.indexOf(e),this.editedItem=Object.assign({},e),this.dialogEdit=!0},save:function(){this.editedIndex>-1?this.$emit("update-employee",this.editedItem,this.editedIndex):this.$emit("add-employee",this.editedItem),this.close()},close:function(){var e=this;this.dialogEdit=!1,this.$nextTick((function(){e.editedItem=Object.assign({},new g),e.editedIndex=-1}))},deleteItem:function(e){this.editedIndex=this.employees.indexOf(e),this.dialogDelete=!0},deleteItemConfirm:function(){this.$emit("delete-employee",this.editedIndex),this.closeDelete()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},handleSubmit:function(){this.clearStatus(),this.submitting=!0,this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.employee),this.$refs.first.focus(),this.employee={name:"",email:""},this.success=!0,this.error=!1,this.submitting=!1)}}},B=M,U=n("7496"),F=n("8fea"),J=n("169a"),Y=n("ce7e"),H=n("132d"),q=n("71d9"),z=n("2a7f"),G=Object(v["a"])(B,b,y,!1,null,null,null),K=G.exports;I()(G,{VApp:U["a"],VBtn:S["a"],VCard:V["a"],VCardActions:C["a"],VCardTitle:C["c"],VDataTable:F["a"],VDialog:J["a"],VDivider:Y["a"],VIcon:H["a"],VSpacer:A["a"],VToolbar:q["a"],VToolbarTitle:z["a"]});var Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"inline-block"},[n("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",dark:"","show-select":"",headers:e.headers,items:e.dataItems,"items-per-page":5},scopedSlots:e._u([{key:"item.ename",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.ename.toUpperCase())+" ")]}},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)])},W=[],X=(n("b0c0"),{name:"departments-tab",props:{dataItems:Array},data:function(){return{enabled:null,editing:null,error:!1,submitting:!1,success:!1,employee:{name:"",email:""},headers:[{text:"部门名称",align:"start",sortable:!1,value:"ename"},{text:"备注",value:"phone"}]}},methods:{editMode:function(e){this.cachedEmployee=Object.assign({},e),this.editing=e.id},cancelEdit:function(e){Object.assign(e,this.cachedEmployee),this.editing=null},editEmployee:function(e){""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e.id,e),this.editing=null)},handleSubmit:function(){this.clearStatus(),this.submitting=!0,this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.employee),this.$refs.first.focus(),this.employee={name:"",email:""},this.success=!0,this.error=!1,this.submitting=!1)},getColor:function(){return"green"},isEnabled:function(e){return this.enabled===e}}}),Z=X,ee=(n("8b5c"),Object(v["a"])(Z,Q,W,!1,null,null,null)),te=ee.exports;I()(ee,{VDataTable:F["a"],VIcon:H["a"]});var ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("v-data-table",{staticClass:"elevation-1",attrs:{dark:"",headers:e.headers,items:e.dataItems,"items-per-page":5}})],1)])},ae=[],ie={name:"jobs-tab",props:{dataItems:[]},data:function(){return{headers:[{text:"JobName (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Department",value:"username"},{text:"Fat (g)",value:"email"},{text:"Carbs (g)",value:"address.city"},{text:"Protein (g)",value:"phone"},{text:"Iron (%)",value:"website"}]}}},oe=ie,re=Object(v["a"])(oe,ne,ae,!1,null,null,null),se=re.exports;I()(re,{VDataTable:F["a"]});var le={name:"App",components:{general:h,employees:K,departments:te,jobs:se},props:{},data:function(){return{BASE_URL_EMPLOYEE:"http://localhost:8090/employees",employees:[],tabs:c,currentTab:"employees"}},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getEmployees(),e.$store.dispatch("job/initState"),e.$store.dispatch("department/initState"),k.$on("add-employee",e.addEmployee),k.$on("update-employee",e.updateEmployee);case 5:case"end":return t.stop()}}),t)})))()},computed:Object(s["a"])({},Object(i["b"])({jobs:function(e){return e.job.jobs},departments:function(e){return e.department.departments}})),methods:{getEmployees:function(){var e=this;fetch(this.BASE_URL_EMPLOYEE).then((function(e){return e.json()})).then((function(t){return e.employees=t})).catch((function(e){return console.log(e)}))},addEmployee:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:fetch(t.BASE_URL_EMPLOYEE,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t.employees.push(e)}));case 1:case"end":return n.stop()}}),n)})))()},updateEmployee:function(e,t){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:fetch("http://localhost:8090/employees/5",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(Object.assign(n.employees[t],e));case 1:case"end":return a.stop()}}),a)})))()},deleteEmployee:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t.employees[e].id,i=t.BASE_URL_EMPLOYEE+"/"+a,fetch(i,{method:"DELETE"}).then(t.employees.splice(e,1));case 3:case"end":return n.stop()}}),n)})))()}}},ce=le,ue=n("40dc"),de=n("a523"),me=n("f6c4"),pe=Object(v["a"])(ce,o,r,!1,null,null,null),ve=pe.exports;I()(pe,{VApp:U["a"],VAppBar:ue["a"],VBtn:S["a"],VContainer:de["a"],VIcon:H["a"],VMain:me["a"],VSpacer:A["a"],VToolbarTitle:z["a"]});var fe=n("f309");a["a"].use(fe["a"]);var he=new fe["a"]({theme:{dark:!0}}),be="http://localhost:8090/jobs",ye={namespaced:!0,state:{jobs:[]},actions:{initState:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,fetch(be).then((function(e){return e.json()})).then((function(e){return n("initState",e)}));case 2:case"end":return t.stop()}}),t)})))()}},mutations:{initState:function(e,t){e.jobs=t}}},xe="http://localhost:8090/departments",ge={namespaced:!0,state:{departments:[]},actions:{initState:function(e){var t=e.commit;fetch(xe).then((function(e){return e.json()})).then((function(e){return t("initState",e)}))},deleteItem:function(e,t){var n=e.state,a=e.commit,i=n.departments[t].id,o=xe+"/"+i;fetch(o,{method:"DELETE"}).then(a("deleteDepartment",t))}},mutations:{initState:function(e,t){e.departmentsArray=t},deleteDepartment:function(e,t){e.departments.splice(t,1)}}};a["a"].use(i["a"]);var Ee=new i["a"].Store({modules:{job:ye,department:ge}});a["a"].config.productionTip=!1,a["a"].use(i["a"]),window.store=Ee,new a["a"]({store:Ee,vuetify:he,render:function(e){return e(ve)}}).$mount("#app")},"8b5c":function(e,t,n){"use strict";n("0306")}});
//# sourceMappingURL=app.e08cf8d6.js.map