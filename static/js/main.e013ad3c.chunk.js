(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){e.exports=a(196)},184:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);a(149),a(174);var n=a(0),o=a.n(n),r=a(45),c=a.n(r),i=a(24),l=a(87),s=a(17),u=a(9),p=a(6),d=a(38),m=a(27),h=a.n(m),v=function(e){return{type:"SET_ACCESS_TOKEN",payload:e}},b=function(e,t){return t.access_token=be.getState().vkui.accessToken,t.v=void 0===t.v?"5.92":t.v,h.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then(function(e){return e.response}).catch(function(e){return e})},O=function(e){var t=be.getState().router.activePanel,a=be.getState().router.panelsHistory;return"undefined"!==typeof a[e]&&(t=a[e][a[e].length-1]),t},y={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},f={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},E={forms:[]},j=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,o=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:o}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var o=e.panelsHistory[a]||[],r=e.viewsHistory[e.activeStory]||[],c=r.indexOf(a);return-1!==c&&r.splice(c,1),-1===o.indexOf(n)&&(o=[].concat(Object(d.a)(o),[n])),o.length>1&&h.a.send("VKWebAppEnableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,o)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(d.a)(r),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var i=e.viewsHistory[t.payload.story]||[t.payload.story],l=e.storiesHistory,s=i[i.length-1],m=e.panelsHistory[s]||[t.payload.initial_panel],v=m[m.length-1];if(t.payload.story===e.activeStory)if(m.length>1){var b=m.shift();v=(m=[b])[m.length-1]}else if(i.length>1){var O=i.shift();s=(i=[O])[i.length-1],v=(m=e.panelsHistory[s])[m.length-1]}return t.payload.story===e.activeStory&&1===m.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===l.indexOf(t.payload.story)||l[0]===t.payload.story&&l[l.length-1]!==t.payload.story)&&(l=[].concat(Object(d.a)(l),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:v,storiesHistory:l,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,i)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,m)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var f=e.activeView,E=e.activePanel,j=e.activeStory,g=e.popouts;if(g[f])return g[f]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:g})});var w=e.modalHistory[f];if(void 0!==w&&0!==w.length){var k=w[w.length-2]||null;return null===k?w=[]:-1!==w.indexOf(k)?w=w.splice(0,w.indexOf(k)+1):w.push(k),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},f,k)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},f,w))})}var S=e.panelsHistory[f]||[],T=e.viewsHistory[e.activeStory]||[],_=e.storiesHistory;if(S.length>1)S.pop(),E=S[S.length-1];else if(T.length>1){T.pop(),f=T[T.length-1];var A=e.panelsHistory[f];E=A[A.length-1]}else if(_.length>1){_.pop(),j=_[_.length-1],f=e.viewsHistory[j][e.viewsHistory[j].length-1];var C=e.panelsHistory[f];E=C.length>1?C[C.length-1]:C[0]}else h.a.send("VKWebAppClose",{status:"success"}).then(function(e){return e}).catch(function(e){return e});return 1===S.length&&h.a.send("VKWebAppDisableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(p.a)({},e,{activeView:f,activePanel:E,activeStory:j,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,T)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,S))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var P=t.payload.id||null,H=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===P?H=[]:-1!==H.indexOf(P)?H=H.splice(0,H.indexOf(P)+1):H.push(P),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,P)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,H))});case"CLOSE_MODAL":var M=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,I=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===M?I=[]:-1!==I.indexOf(M)?I=I.splice(0,I.indexOf(M)+1):I.push(M),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,M)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,I))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),g=a(89),w=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},k=function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},S=function(){return{type:"GO_BACK"}},T=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},_=function(){return{type:"CLOSE_POPOUT"}},A=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},C=function(){return{type:"CLOSE_MODAL"}},P=(a(84),a(184),a(14)),H=a(15),M=a(18),I=a(16),D=a(19),V=a(2),B=a(100),L=a.n(B),x=a(101),G=a.n(x),z=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(M.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={showImg:!1},a.showImg=function(){a.setState({showImg:!0})},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id;t.setPage,t.withoutEpic;return o.a.createElement(V.u,{id:a},o.a.createElement(V.v,null,"\u0427\u0401\u0420\u041d\u042b\u0419 GTA-RP"),o.a.createElement(V.l,null,o.a.createElement(V.g,null,o.a.createElement(V.b,{mode:"secondary",size:"l",stretched:!0,onClick:function(){return e.props.openModal("MODAL_PAGE_BOTS_LIST")}},"\u041d\u0430\u0448\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430")),o.a.createElement(V.g,null,o.a.createElement(V.b,{mode:"secondary",size:"l",stretched:!0,onClick:function(){return e.props.openModal("MODAL_PAGE_BOT_INFO")}},"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430")),o.a.createElement(V.g,null,o.a.createElement(V.b,{mode:"secondary",size:"l",stretched:!0,onClick:function(){return e.props.openModal("testText")}},"FAQ"))))}}]),t}(o.a.Component),N={setPage:k,goBack:S,openModal:A},K=Object(s.b)(null,N)(z),U=a(61),R=a.n(U),W=a(102),F=function(e){function t(){return Object(P.a)(this,t),Object(M.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.photo,n=e.name,r=t.length>0?t:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442";return o.a.createElement(V.c,{description:r,before:o.a.createElement(V.a,{size:40,src:a})},n)}}]),t}(n.PureComponent),Y=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map(function(e){return o.a.createElement(F,{key:e.id,description:e.description,photo:e.photo_100,name:e.name})})),t},q=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(M.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?this.getAuthToken():this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["groups"],function(t){h.a.send("VKWebAppGetAuthToken",{app_id:7523480,scope:e.join(",")}).then(function(e){t(v(e.access_token))}).catch(function(){t(v(null))})}))}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e=Object(W.a)(R.a.mark(function e(){var t,a,n;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userGroupsAdmined")||!localStorage.getItem("userGroupsOther")){e.next=3;break}return this.setState({groups:{admined:JSON.parse(localStorage.getItem("userGroupsAdmined")),other:JSON.parse(localStorage.getItem("userGroupsOther"))},loading:!1}),e.abrupt("return");case 3:return e.next=5,b("groups.get",{extended:"1",fields:"description",count:"100"});case 5:t=e.sent,a=t.items.filter(function(e){return 1===e.is_admin}),n=t.items.filter(function(e){return 0===e.is_admin}),localStorage.setItem("userGroupsAdmined",JSON.stringify(a)),localStorage.setItem("userGroupsOther",JSON.stringify(n)),this.setState({groups:{admined:a,other:n},loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.goBack,r=Y(this.state.groups.admined),c=Y(this.state.groups.other);return o.a.createElement(V.u,{id:a},o.a.createElement(V.v,{left:o.a.createElement(V.w,{onClick:function(){return n()}})},"\u0413\u0440\u0443\u043f\u043f\u044b"),this.state.loading&&o.a.createElement(V.y,null),!this.state.loading&&this.state.errorGetAuthToken&&o.a.createElement(V.l,null,o.a.createElement(V.g,null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0412\u044b \u043d\u0435 \u0432\u044b\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f."),o.a.createElement(V.g,null,o.a.createElement(V.b,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()}},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"))),!this.state.loading&&!this.state.errorGetAuthToken&&r&&o.a.createElement(V.l,{header:o.a.createElement(V.m,{mode:"secondary"},"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435")},o.a.createElement(V.q,null,r)),!this.state.loading&&!this.state.errorGetAuthToken&&c&&o.a.createElement(V.l,{header:o.a.createElement(V.m,{mode:"secondary"},"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435")},o.a.createElement(V.q,null,c)))}}]),t}(o.a.Component);var Q=Object(s.b)(function(e){return{accessToken:e.vkui.accessToken}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({goBack:S,openPopout:T,closePopout:_,openModal:A},e))})(q),J=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(M.a)(this,Object(I.a)(t).call(this,e))).state={activeTab:e.activeTab.EXAMPLE||"modal"},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"setTab",value:function(e){this.setState({activeTab:e})}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.setScrollPositionByID;(0,e.setActiveTab)("EXAMPLE",this.state.activeTab),t("EXAMPLE_TABS_LIST")}},{key:"componentDidMount",value:function(){!function(){var e=be.getState().vkui.componentScroll;Object.keys(e).forEach(function(t){var a=e[t],n=document.getElementById(t);n&&((n=n.getElementsByClassName("HorizontalScroll__in")[0]).scrollLeft=a.x,n.scrollTop=a.y)})}()}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.setPage;return o.a.createElement(V.u,{id:a},o.a.createElement(V.v,{noShadow:!0},"Examples 2"),o.a.createElement(V.i,{vertical:"top"},o.a.createElement(V.C,{theme:"header",mode:"default"},o.a.createElement(V.n,{id:"EXAMPLE_TABS_LIST"},o.a.createElement(V.D,{onClick:function(){return e.setTab("modal")},selected:"modal"===this.state.activeTab},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(V.D,{onClick:function(){return e.setTab("test")},selected:"test"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430"),o.a.createElement(V.D,{onClick:function(){return e.setTab("test2")},selected:"test2"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430 2"),o.a.createElement(V.D,{onClick:function(){return e.setTab("test3")},selected:"test3"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430 3")))),o.a.createElement(V.l,{style:{marginTop:56}},"modal"===this.state.activeTab&&o.a.createElement(V.d,{onClick:function(){return n("modal","filters")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),"modal"!==this.state.activeTab&&o.a.createElement(V.g,null,this.state.activeTab)))}}]),t}(o.a.Component),X={setPage:k,setActiveTab:function(e,t){return{type:"SET_ACTIVE_TAB",payload:{component:e,tab:t}}},setScrollPositionByID:function(e){return{type:"SET_SCROLL_POSITION_BY_ID",payload:{component:e}}}},Z=Object(s.b)(function(e){return{activeTab:e.vkui.activeTab}},X)(J),$=function(e){function t(e){var a;Object(P.a)(this,t),a=Object(M.a)(this,Object(I.a)(t).call(this,e));var n={workplace:"",workposition:"",checkboxPhoto:0,checkboxOnline:0};return a.state={inputData:e.inputData.example_form||n},a.handleInput=function(e){var t=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(t=e.currentTarget.checked),a.setState({inputData:Object(p.a)({},a.state.inputData,Object(u.a)({},e.currentTarget.name,t))})},a.clearForm=function(){a.setState({inputData:n})},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setFormData("example_form",this.state.inputData)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return o.a.createElement(V.u,{id:t},o.a.createElement(V.v,{left:o.a.createElement(V.w,{onClick:function(){return a()}})},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(V.l,null,o.a.createElement(V.j,null,o.a.createElement(V.k,{top:"\u0420\u0430\u0431\u043e\u0442\u0430"},o.a.createElement(V.p,{value:this.state.inputData.workplace,onChange:this.handleInput,name:"workplace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b",autoComplete:"off"}),o.a.createElement(V.p,{value:this.state.inputData.workposition,onChange:this.handleInput,name:"workposition",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",autoComplete:"off"})),o.a.createElement(V.k,{top:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},o.a.createElement(V.e,{checked:this.state.inputData.checkboxPhoto,onChange:this.handleInput,name:"checkboxPhoto"},"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"),o.a.createElement(V.e,{checked:this.state.inputData.checkboxOnline,onChange:this.handleInput,name:"checkboxOnline"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"))),o.a.createElement(V.g,{className:"buttons-group"},o.a.createElement(V.b,{size:"l",stretched:!0,onClick:function(){return a()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement(V.b,{size:"l",stretched:!0,onClick:this.clearForm},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))))}}]),t}(o.a.Component),ee={setFormData:function(e,t){return{type:"SAVE_FORM_DATA",payload:{form:e,data:t}}},goBack:S},te=Object(s.b)(function(e){return{inputData:e.formData.forms}},ee)($),ae=a(47),ne=a.n(ae),oe=a(36),re=a.n(oe),ce=(a(46),[{name:"\u0427\u0401\u0420\u041d\u042b\u0419 GTARP",avatar:"https://sun9-64.userapi.com/Qww1fkk2Gpqj1DrACw_MIzhzM13IwKvYUncKAQ/5ivbIpzrUpE.jpg?ava=1",desc:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"},{name:"\u0420\u0410\u0417\u0414\u0410\u0427\u0418 \u041e\u0422 \u0427\u0401\u0420\u041d\u041e\u0413\u041e GTARP",avatar:"https://sun9-64.userapi.com/Qww1fkk2Gpqj1DrACw_MIzhzM13IwKvYUncKAQ/5ivbIpzrUpE.jpg?ava=1",desc:"\u0420\u0430\u0437\u0434\u0430\u0447\u0438 \u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0430 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432"}]),ie=function(e){function t(){return Object(P.a)(this,t),Object(M.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=(e.openModal,e.platform);return o.a.createElement(V.r,{id:t,header:o.a.createElement(V.s,{left:n!==V.o&&o.a.createElement(V.x,{onClick:a},o.a.createElement(re.a,null)),right:n===V.o&&o.a.createElement(V.x,{onClick:a},o.a.createElement(ne.a,null))},"\u041d\u0430\u0448\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430"),onClose:a,settlingHeight:80},o.a.createElement(V.q,null,ce.map(function(e,t){return o.a.createElement(V.c,{key:t,description:e.desc,before:o.a.createElement(V.a,{size:40,src:e.avatar})},e.name)})))}}]),t}(o.a.Component),le={openModal:A},se=Object(V.F)(Object(s.b)(null,le)(ie)),ue=[{name:"\u041d\u0438\u043a\u0438\u0442\u0430 \u041a\u043e\u043d\u0435\u0432",avatar:"https://sun9-46.userapi.com/c857532/v857532854/25de3/zv-bh73WI_g.jpg?ava=1",desc:"Rivers"},{name:"\u0420\u0443\u0441\u043b\u0430\u043d \u0413\u0430\u0434\u0436\u0438\u0435\u0432",avatar:"https://sun9-14.userapi.com/Uebazij-w7YQEVuNoBVzZdMydfZCKXTowhEvCQ/2qQal_YM4IA.jpg?ava=1",desc:"\u0427\u0421\u043d\u0438\u043a"},{name:"\u041c\u0430\u043a\u0441\u0438\u043c \u0414\u0451\u043c\u0438\u043d",avatar:"https://sun9-26.userapi.com/c855520/v855520161/21b4cd/AZ2osKzhnL8.jpg?ava=1",desc:"\u0427\u0435\u0440\u043d\u044b\u0439 Gangster"},{name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432",avatar:"https://sun9-2.userapi.com/c850416/v850416844/10a0e1/pAmwHvvkiWU.jpg?ava=1",desc:"developer"}],pe=function(e){function t(){return Object(P.a)(this,t),Object(M.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=(e.openModal,e.platform);return o.a.createElement(V.r,{id:t,header:o.a.createElement(V.s,{left:n!==V.o&&o.a.createElement(V.x,{onClick:a},o.a.createElement(re.a,null)),right:n===V.o&&o.a.createElement(V.x,{onClick:a},o.a.createElement(ne.a,null))},"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430"),onClose:a,settlingHeight:80},o.a.createElement(V.q,null,ue.map(function(e,t){return o.a.createElement(V.c,{key:t,description:e.desc,before:o.a.createElement(V.a,{size:40,src:e.avatar})},e.name)})))}}]),t}(o.a.Component),de={openModal:A},me=Object(V.F)(Object(s.b)(null,de)(pe)),he=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(M.a)(this,Object(I.a)(t).call(this,e))).lastAndroidBackAction=0,a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){return h.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(h.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),h.a.send("VKWebAppInit",{}).then(function(e){return e}).catch(function(e){return e})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a()):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,o=n.activeView,r=n.activeStory,c=n.activePanel,i=n.scrollPosition;if(e.activeView!==o||e.activePanel!==c||e.activeStory!==r){var l=i[r+"_"+o+"_"+c]||0;window.scroll(0,l)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,n=e.closeModal,r=e.popouts,c=e.activeView,i=e.activeStory,l=e.activeModals,s=e.panelsHistory,u=e.colorScheme,p=void 0===s[c]?[c]:s[c],d=void 0===r[c]?null:r[c],m=void 0===l[c]?null:l[c],h=o.a.createElement(V.t,{activeModal:m},o.a.createElement(se,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()}}),o.a.createElement(me,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return n()}}));return o.a.createElement(V.f,{isWebView:!0,scheme:u},o.a.createElement(V.h,{activeStory:i,tabbar:o.a.createElement(V.A,null,o.a.createElement(V.B,{onClick:function(){return a("home","base")},selected:"home"===i},o.a.createElement(L.a,null)),o.a.createElement(V.B,{onClick:function(){return a("more","callmodal")},selected:"more"===i},o.a.createElement(G.a,null)))},o.a.createElement(V.z,{id:"home",activeView:c,popout:d},o.a.createElement(V.E,{id:"home",modal:h,activePanel:O("home"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(K,{id:"base",withoutEpic:!1}),o.a.createElement(Q,{id:"groups"}))),o.a.createElement(V.z,{id:"more",activeView:c,popout:d},o.a.createElement(V.E,{id:"more",modal:h,activePanel:O("more"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(Z,{id:"callmodal"})),o.a.createElement(V.E,{id:"modal",modal:h,activePanel:O("modal"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(te,{id:"filters"})))))}}]),t}(o.a.Component);var ve=Object(s.b)(function(e){return{activeView:e.router.activeView,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({setStory:w,goBack:S,closeModal:C},e))})(he);a.d(t,"store",function(){return be});var be=Object(i.createStore)(j,Object(g.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));be.dispatch(w("home","base")),c.a.render(o.a.createElement(s.a,{store:be},o.a.createElement(ve,null)),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.e013ad3c.chunk.js.map