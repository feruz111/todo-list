(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{61:function(e,t,a){e.exports=a(71)},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),l=a(25),o=a(106),s=a(107),u=a(102),d=a(108),m=a(105),T=a(109),f=a(110),O=a(72),v=a(26),b=a(111),k=a(103),E=i.a.memo((function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),o=Object(v.a)(l,2),s=o[0],d=o[1],m=function(){""!==r.trim()?(e.addItem(r),c("")):d("Title is required")};return i.a.createElement("div",null,i.a.createElement(b.a,{error:!!s,variant:"outlined",value:r,onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(e){null!==s&&d(null),13===e.charCode&&m()},label:"Title",helperText:s}),i.a.createElement(u.a,{color:"primary",onClick:m},i.a.createElement(k.a,null)))})),h=a(104);function I(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(e.value),o=Object(v.a)(l,2),s=o[0],u=o[1];return r?i.a.createElement(b.a,{variant:"outlined",value:s,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.onChange(s)}}):i.a.createElement("span",{onDoubleClick:function(){c(!0),u(e.value)}},e.value)}var j=a(112),g=i.a.memo((function(e){var t=Object(n.useCallback)((function(t){e.changeTaskTitle(e.task.id,t,e.todolistId)}),[e.task.id,e.changeTaskTitle,e.todolistId]);return i.a.createElement("div",{key:e.task.id,className:e.task.isDone?"is-done":""},i.a.createElement(j.a,{checked:e.task.isDone,color:"primary",onChange:function(t){var a=t.currentTarget.checked;e.changeTaskStatus(e.task.id,a,e.todolistId)}}),i.a.createElement(I,{value:e.task.title,onChange:t}),i.a.createElement(u.a,{onClick:function(){return e.removeTask(e.task.id,e.todolistId)}},i.a.createElement(h.a,null)))}));function p(e){var t=Object(n.useCallback)((function(t){e.addTask(t,e.id)}),[e.addTask,,e.id]),a=Object(n.useCallback)((function(t){e.changeTodolistTitle(e.id,t)}),[e.changeTodolistTitle,e.id]),r=Object(n.useCallback)((function(){e.changeFilter(e.id,"all")}),[e.id,e.changeFilter]),c=Object(n.useCallback)((function(){e.changeFilter(e.id,"active")}),[e.id,e.changeFilter]),l=Object(n.useCallback)((function(){e.changeFilter(e.id,"completed")}),[e.id,e.changeFilter]),o=e.tasks;return"active"===e.filter&&(o=e.tasks.filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(o=e.tasks.filter((function(e){return!0===e.isDone}))),i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(I,{value:e.title,onChange:a}),i.a.createElement(u.a,{onClick:function(){e.removeTodolist(e.id)}},i.a.createElement(h.a,null))),i.a.createElement(E,{addItem:t}),i.a.createElement("div",null,o.map((function(t){return i.a.createElement(g,{task:t,changeTaskStatus:e.changeTaskStatus,changeTaskTitle:e.changeTaskTitle,removeTask:e.removeTask,todolistId:e.id,key:t.id})}))),i.a.createElement("div",null,i.a.createElement(m.a,{variant:"all"===e.filter?"outlined":"text",onClick:r,color:"primary"},"All"),i.a.createElement(m.a,{variant:"active"===e.filter?"outlined":"text",onClick:c,color:"primary"},"Active"),i.a.createElement(m.a,{variant:"completed"===e.filter?"outlined":"text",onClick:l,color:"primary"},"Completed")))}var C=a(37),D=a(27),S=a(13),A=a(113),y={1:[{id:"t1",title:"hooks",isDone:!0},{id:"t2",title:"VDOM",isDone:!1}]},L=[{id:"1",title:"React",filter:"all"}],w=i.a.memo((function(){var e=Object(l.c)((function(e){return e.todolists})),t=Object(l.c)((function(e){return e.tasks})),a=Object(l.b)(),r=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"REMOVE-TASK",taskId:e,todolistId:t}}(e,t);a(n)}),[a]),c=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"ADD-TASK",title:e,todolistId:t}}(e,t);a(n)}),[a]),v=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"CHANGE-TODOLIST-FILTER",id:e,filter:t}}(e,t);a(n)}),[a]),b=Object(n.useCallback)((function(e,t,n){var i=function(e,t,a){return{type:"CHANGE-TASK-STATUS",taskId:e,isDone:t,todolistId:a}}(e,t,n);a(i)}),[a]),k=Object(n.useCallback)((function(e,t,n){var i=function(e,t,a){return{type:"CHANGE-TASK-TITLE",taskId:e,title:t,todolistId:a}}(e,t,n);a(i)}),[a]),h=Object(n.useCallback)((function(e){var t={type:"REMOVE-TODOLIST",id:e};a(t)}),[a]),I=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(e,t);a(n)}),[a]),j=Object(n.useCallback)((function(e){var t=function(e){return{type:"ADD-TODOLIST",title:e,todolistId:Object(A.a)()}}(e);a(t)}),[a]);return i.a.createElement("div",{className:"App"},i.a.createElement(o.a,{position:"static"},i.a.createElement(s.a,null,i.a.createElement(u.a,{edge:"start",color:"inherit","aria-label":"menu"}),i.a.createElement(d.a,{variant:"h6"},"News"),i.a.createElement(m.a,{color:"inherit"},"Login"))),i.a.createElement(T.a,{fixed:!0},i.a.createElement(f.a,{container:!0,style:{padding:"20px"}},i.a.createElement(E,{addItem:j})),i.a.createElement(f.a,{container:!0,spacing:3},e.map((function(e){var a=t[e.id];return i.a.createElement(f.a,{item:!0},i.a.createElement(O.a,{style:{padding:"10px"}},i.a.createElement(p,{key:e.id,id:e.id,title:e.title,tasks:a,removeTask:r,changeFilter:v,addTask:c,changeTaskStatus:b,filter:e.filter,removeTodolist:h,changeTaskTitle:k,changeTodolistTitle:I})))})))))}));a(70),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(42),F=Object(N.a)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":var a=Object(S.a)({},e);return a[t.todolistId]=a[t.todolistId].filter((function(e){return e.id!==t.taskId})),a;case"ADD-TASK":var n={id:Object(A.a)(),title:t.title,isDone:!1},i=Object(S.a)({},e);return i[t.todolistId]=[n].concat(Object(D.a)(e[t.todolistId])),i;case"CHANGE-TASK-STATUS":var r=e[t.todolistId];return e[t.todolistId]=r.map((function(e){return e.id===t.taskId?Object(S.a)(Object(S.a)({},e),{},{isDone:t.isDone}):e})),Object(S.a)({},e);case"CHANGE-TASK-TITLE":var c=e[t.todolistId];return e[t.todolistId]=c.map((function(e){return e.id===t.taskId?Object(S.a)(Object(S.a)({},e),{},{title:t.title}):e})),Object(S.a)({},e);case"ADD-TODOLIST":var l=t.todolistId;return Object(S.a)(Object(S.a)({},e),{},Object(C.a)({},l,[]));case"REMOVE-TODOLIST":var o=Object(S.a)({},e);return delete o[t.id],o;default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!==t.id}));case"ADD-TODOLIST":var a={id:t.todolistId,title:t.title,isDone:!1};return[].concat(Object(D.a)(e),[a]);case"CHANGE-TODOLIST-TITLE":var n=e.find((function(e){return e.id===t.id}));return n?(n.title=t.title,Object(D.a)(e)):e;case"CHANGE-TODOLIST-FILTER":var i=e.find((function(e){return e.id===t.id}));return i&&(i.filter=t.filter),Object(D.a)(e);default:return e}}}),K=Object(N.b)(F);window.store=K,c.a.render(i.a.createElement(l.a,{store:K},i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.8ddf4b0e.chunk.js.map