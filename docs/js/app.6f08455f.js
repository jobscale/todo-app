(function(e){function t(t){for(var o,r,a=t[0],s=t[1],l=t[2],u=0,d=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},c={app:0},i=[];function a(e){return s.p+"js/"+({"RecycleBin-vue":"RecycleBin-vue"}[e]||e)+"."+{"RecycleBin-vue":"ed34d80e"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"RecycleBin-vue":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({"RecycleBin-vue":"RecycleBin-vue"}[e]||e)+"."+{"RecycleBin-vue":"1455ba36"}[e]+".css",c=s.p+o,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var l=i[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===c))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],u=l.getAttribute("data-href");if(u===o||u===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=a(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06d6":function(e,t,n){},1799:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ToDo"},[n("div",{staticClass:"title is-4 has-text-centered"},[e._v(" TODOs ")]),n("div",{staticClass:"ToDo__addNew"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newTodoContent,expression:"newTodoContent",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text",name:"new_todo",placeholder:"Your new TODO"},domProps:{value:e.newTodoContent},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.saveTodo.apply(null,arguments))},input:function(t){t.target.composing||(e.newTodoContent=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"ToDo__items"},[n("draggable",{attrs:{handle:".TodoItem__reorderHandle"},on:{end:e.storeItems},model:{value:e.todoItems,callback:function(t){e.todoItems=t},expression:"todoItems"}},e._l(e.todoItems,(function(t){return n("todo-item",{key:t.key,attrs:{item:t},on:{change:e.handleItemChange}})})),1)],1)])},r=[],c=n("b76a"),i=n.n(c),a=(n("d3b7"),n("25f0"),function(){return Math.random().toString(36).substr(2,5)}),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-todo-item",{staticClass:"TodoItem",attrs:{item:e.item},scopedSlots:e._u([{key:"checkbox",fn:function(){return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.completedLocal,expression:"completedLocal"}],staticClass:"checkbox",attrs:{type:"checkbox","data-testid":"completeCheckbox"},domProps:{checked:Array.isArray(e.completedLocal)?e._i(e.completedLocal,null)>-1:e.completedLocal},on:{change:function(t){var n=e.completedLocal,o=t.target,r=!!o.checked;if(Array.isArray(n)){var c=null,i=e._i(n,c);o.checked?i<0&&(e.completedLocal=n.concat([c])):i>-1&&(e.completedLocal=n.slice(0,i).concat(n.slice(i+1)))}else e.completedLocal=r}}})]},proxy:!0},{key:"content",fn:function(){return[e.isEditing?e._e():n("div",{staticClass:"break-all",attrs:{"data-testid":"contentEditTrigger"},on:{dblclick:e.enableEdit}},[e._v(" "+e._s(e.item.content)+" ")]),e.isEditing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.contentLocal,expression:"contentLocal"}],ref:"editInput",staticClass:"input",attrs:{type:"text","data-testid":"editInput"},domProps:{value:e.contentLocal},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveEdit.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.stopEdit.apply(null,arguments)}],blur:e.saveEdit,input:function(t){t.target.composing||(e.contentLocal=t.target.value)}}}):e._e()]},proxy:!0},{key:"actions",fn:function(){return[n("button",{staticClass:"TodoItem__delete button is-inverted is-danger is-small",attrs:{"data-testid":"deleteTrigger"},on:{click:function(t){return t.preventDefault(),e.deleteItem.apply(null,arguments)}}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-trash fa-lg"})])]),n("div",{staticClass:"TodoItem__reorderHandle"},[n("i",{staticClass:"fa fa-bars"})])]},proxy:!0}])})},l=[],u=n("1da1"),d=n("5530"),f=(n("96cf"),n("39fc")),m={name:"TodoItem",components:{BaseTodoItem:f["a"]},props:{item:{type:Object,required:!0}},data:function(){return{isEditing:!1,contentLocal:""}},computed:{completedLocal:{get:function(){return!!this.item.completedAt},set:function(e){this.emitChange({completedAt:e?Date.now():null})}}},methods:{deleteItem:function(){this.emitChange({deletedAt:Date.now()})},emitChange:function(e){this.$emit("change",Object(d["a"])(Object(d["a"])({},this.item),e))},enableEdit:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.contentLocal=e.item.content,e.isEditing=!0,t.next=4,e.$nextTick();case 4:e.$refs.editInput.focus();case 5:case"end":return t.stop()}}),t)})))()},saveEdit:function(){this.contentLocal&&this.emitChange({content:this.contentLocal}),this.stopEdit()},stopEdit:function(){this.isEditing=!1,this.contentLocal=""}}},p=m,h=(n("66c8"),n("2877")),v=Object(h["a"])(p,s,l,!1,null,"1e4fe95a",null),y=v.exports,g=n("a638"),b={name:"ToDo",components:{TodoItem:y,Draggable:i.a},data:function(){return{newTodoContent:"",todoItems:[]}},mounted:function(){this.fetchToDos()},methods:{fetchToDos:function(){this.todoItems=g["a"].fetchAll()},saveTodo:function(){this.newTodoContent&&(this.todoItems.push({id:a(),content:this.newTodoContent,createdAt:Date.now(),completedAt:null,deletedAt:null}),this.newTodoContent="",this.storeItems())},handleItemChange:function(e){g["a"].updateItem(e.id,e),this.fetchToDos()},storeItems:function(){g["a"].storeAll(this.todoItems)}}},_=b,w=(n("7480"),Object(h["a"])(_,o,r,!1,null,null,null));t["default"]=w.exports},"1a5d":function(e,t,n){var o={"./RecycleBin.vue":["9453","RecycleBin-vue"],"./ToDo.vue":["1799"]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id="1a5d",e.exports=r},"289f":function(e,t,n){"use strict";n("06d6")},3326:function(e,t,n){"use strict";n("6d3f")},3360:function(e,t,n){},"39fc":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"BaseTodoItem",class:{"BaseTodoItem--completed":e.item.completedAt}},[n("div",{staticClass:"BaseTodoItem__checkbox"},[e._t("checkbox",(function(){return[n("input",{attrs:{type:"checkbox",disabled:""},domProps:{checked:!!e.item.completedAt}})]}))],2),n("div",{staticClass:"BaseTodoItem__content"},[e._t("content",(function(){return[e._v(" "+e._s(e.item.content)+" ")]}))],2),n("div",{staticClass:"BaseTodoItem__actions"},[e._t("actions")],2)])},r=[],c={name:"BaseTodoItem",props:{item:{type:Object,required:!0}}},i=c,a=(n("3326"),n("2877")),s=Object(a["a"])(i,o,r,!1,null,"6ef7cf61",null);t["a"]=s.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"app-content"},[n("the-nav",{staticClass:"has-text-centered"}),n("router-view")],1)])])},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"TheNav"},[n("router-link",{attrs:{to:{name:"todo-list"},"data-testid":"TheNav__TodoList"}},[e._v(" Todo List ")]),e._v(" | "),n("router-link",{attrs:{to:{name:"recycle-bin"},"data-testid":"TheNav__RecycleBin"}},[e._v(" Recycle Bin ")])],1)},a=[],s={name:"TheNav"},l=s,u=(n("289f"),n("2877")),d=Object(u["a"])(l,i,a,!1,null,"a2e93bf0",null),f=d.exports,m={components:{TheNav:f}},p=m,h=(n("5c0b"),Object(u["a"])(p,r,c,!1,null,null,null)),v=h.exports,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=n("1799"),b=function(e){return function(){return n("1a5d")("./".concat(e,".vue"))}};o["a"].use(y["a"]);var _=[{path:"/",name:"todo-list",component:g["default"]},{path:"/recycle-bin",name:"recycle-bin",component:b("RecycleBin")}],w=new y["a"]({mode:"history",base:"/",routes:_}),T=w;o["a"].config.productionTip=!1,new o["a"]({router:T,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5cf6":function(e,t,n){},"66c8":function(e,t,n){"use strict";n("3360")},"6d3f":function(e,t,n){},7480:function(e,t,n){"use strict";n("5cf6")},"9c0c":function(e,t,n){},a638:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("4de4"),n("c740"),n("a434");var o={getItem:function(e,t){try{var n=window.localStorage.getItem(e);return n?window.JSON.parse(n):t}catch(o){return t}},setItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.localStorage.setItem(e,window.JSON.stringify(t))},removeItem:function(e){window.localStorage.removeItem(e)},clearAllItems:function(){window.localStorage.clear()}},r="todoItems",c={storeAll:function(e){o.setItem(r,e)},fetchAllWithDeleted:function(){return o.getItem(r,[])},fetchDeleted:function(){return c.fetchAllWithDeleted().filter((function(e){return e.deletedAt}))},fetchAll:function(){return c.fetchAllWithDeleted().filter((function(e){return!e.deletedAt}))},updateItem:function(e,t){var n=c.fetchAllWithDeleted(),o=n.findIndex((function(t){return t.id===e}));-1!==o&&(n.splice(o,1,t),c.storeAll(n))},removeItem:function(e){var t=c.fetchAllWithDeleted(),n=t.findIndex((function(t){return t.id===e}));t.splice(n,1),c.storeAll(t)}}}});
//# sourceMappingURL=app.6f08455f.js.map