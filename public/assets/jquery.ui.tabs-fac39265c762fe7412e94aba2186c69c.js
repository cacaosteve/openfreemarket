!function(o,l){function s(t,e){var i,s,a,n=t.nodeName.toLowerCase();return"area"===n?(s=(i=t.parentNode).name,!(!t.href||!s||"map"!==i.nodeName.toLowerCase())&&(!!(a=o("img[usemap=#"+s+"]")[0])&&r(a))):(/input|select|textarea|button|object/.test(n)?!t.disabled:"a"===n&&t.href||e)&&r(t)}function r(t){return o.expr.filters.visible(t)&&!o(t).parents().addBack().filter(function(){return"hidden"===o.css(this,"visibility")}).length}var t,e,i=0,a=/^ui-id-\d+$/;o.ui=o.ui||{},o.extend(o.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),o.fn.extend({focus:(t=o.fn.focus,function(e,i){return"number"==typeof e?this.each(function(){var t=this;setTimeout(function(){o(t).focus(),i&&i.call(t)},e)}):t.apply(this,arguments)}),scrollParent:function(){var t;return t=o.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(o.css(this,"position"))&&/(auto|scroll)/.test(o.css(this,"overflow")+o.css(this,"overflow-y")+o.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(o.css(this,"overflow")+o.css(this,"overflow-y")+o.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?o(document):t},zIndex:function(t){if(t!==l)return this.css("zIndex",t);if(this.length)for(var e,i,s=o(this[0]);s.length&&s[0]!==document;){if(("absolute"===(e=s.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(s.css("zIndex"),10),!isNaN(i)&&0!==i))return i;s=s.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++i)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&o(this).removeAttr("id")})}}),o.extend(o.expr[":"],{data:o.expr.createPseudo?o.expr.createPseudo(function(e){return function(t){return!!o.data(t,e)}}):function(t,e,i){return!!o.data(t,i[3])},focusable:function(t){return s(t,!isNaN(o.attr(t,"tabindex")))},tabbable:function(t){var e=o.attr(t,"tabindex"),i=isNaN(e);return(i||0<=e)&&s(t,!i)}}),o("<a>").outerWidth(1).jquery||o.each(["Width","Height"],function(t,i){function s(t,e,i,s){return o.each(a,function(){e-=parseFloat(o.css(t,"padding"+this))||0,i&&(e-=parseFloat(o.css(t,"border"+this+"Width"))||0),s&&(e-=parseFloat(o.css(t,"margin"+this))||0)}),e}var a="Width"===i?["Left","Right"]:["Top","Bottom"],n=i.toLowerCase(),r={innerWidth:o.fn.innerWidth,innerHeight:o.fn.innerHeight,outerWidth:o.fn.outerWidth,outerHeight:o.fn.outerHeight};o.fn["inner"+i]=function(t){return t===l?r["inner"+i].call(this):this.each(function(){o(this).css(n,s(this,t)+"px")})},o.fn["outer"+i]=function(t,e){return"number"!=typeof t?r["outer"+i].call(this,t):this.each(function(){o(this).css(n,s(this,t,!0,e)+"px")})}}),o.fn.addBack||(o.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),o("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(o.fn.removeData=(e=o.fn.removeData,function(t){return arguments.length?e.call(this,o.camelCase(t)):e.call(this)})),o.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),o.support.selectstart="onselectstart"in document.createElement("div"),o.fn.extend({disableSelection:function(){return this.bind((o.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),o.extend(o.ui,{plugin:{add:function(t,e,i){var s,a=o.ui[t].prototype;for(s in i)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([e,i[s]])},call:function(t,e,i){var s,a=t.plugins[e];if(a&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;s<a.length;s++)t.options[a[s][0]]&&a[s][1].apply(t.element,i)}},hasScroll:function(t,e){if("hidden"===o(t).css("overflow"))return!1;var i=e&&"left"===e?"scrollLeft":"scrollTop",s=!1;return 0<t[i]||(t[i]=1,s=0<t[i],t[i]=0,s)}})}(jQuery),function(u,o){var i=0,l=Array.prototype.slice,a=u.cleanData;u.cleanData=function(t){for(var e,i=0;null!=(e=t[i]);i++)try{u(e).triggerHandler("remove")}catch(s){}a(t)},u.widget=function(t,i,e){var s,a,n,r,o={},l=t.split(".")[0];t=t.split(".")[1],s=l+"-"+t,e||(e=i,i=u.Widget),u.expr[":"][s.toLowerCase()]=function(t){return!!u.data(t,s)},u[l]=u[l]||{},a=u[l][t],n=u[l][t]=function(t,e){if(!this._createWidget)return new n(t,e);arguments.length&&this._createWidget(t,e)},u.extend(n,a,{version:e.version,_proto:u.extend({},e),_childConstructors:[]}),(r=new i).options=u.widget.extend({},r.options),u.each(e,function(e,s){var a,n;u.isFunction(s)?o[e]=(a=function(){return i.prototype[e].apply(this,arguments)},n=function(t){return i.prototype[e].apply(this,t)},function(){var t,e=this._super,i=this._superApply;return this._super=a,this._superApply=n,t=s.apply(this,arguments),this._super=e,this._superApply=i,t}):o[e]=s}),n.prototype=u.widget.extend(r,{widgetEventPrefix:a&&r.widgetEventPrefix||t},o,{constructor:n,namespace:l,widgetName:t,widgetFullName:s}),a?(u.each(a._childConstructors,function(t,e){var i=e.prototype;u.widget(i.namespace+"."+i.widgetName,n,e._proto)}),delete a._childConstructors):i._childConstructors.push(n),u.widget.bridge(t,n)},u.widget.extend=function(t){for(var e,i,s=l.call(arguments,1),a=0,n=s.length;a<n;a++)for(e in s[a])i=s[a][e],s[a].hasOwnProperty(e)&&i!==o&&(u.isPlainObject(i)?t[e]=u.isPlainObject(t[e])?u.widget.extend({},t[e],i):u.widget.extend({},i):t[e]=i);return t},u.widget.bridge=function(n,e){var r=e.prototype.widgetFullName||n;u.fn[n]=function(i){var t="string"==typeof i,s=l.call(arguments,1),a=this;return i=!t&&s.length?u.widget.extend.apply(null,[i].concat(s)):i,t?this.each(function(){var t,e=u.data(this,r);return e?u.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,s))!==e&&t!==o?(a=t&&t.jquery?a.pushStack(t.get()):t,!1):void 0:u.error("no such method '"+i+"' for "+n+" widget instance"):u.error("cannot call methods on "+n+" prior to initialization; attempted to call method '"+i+"'")}):this.each(function(){var t=u.data(this,r);t?t.option(i||{})._init():u.data(this,r,new e(i,this))}),a}},u.Widget=function(){},u.Widget._childConstructors=[],u.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=u(e||this.defaultElement||this)[0],this.element=u(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=u.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=u(),this.hoverable=u(),this.focusable=u(),e!==this&&(u.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=u(e.style?e.ownerDocument:e.document||e),this.window=u(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:u.noop,_getCreateEventData:u.noop,_create:u.noop,_init:u.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(u.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:u.noop,widget:function(){return this.element},option:function(t,e){var i,s,a,n=t;if(0===arguments.length)return u.widget.extend({},this.options);if("string"==typeof t)if(n={},t=(i=t.split(".")).shift(),i.length){for(s=n[t]=u.widget.extend({},this.options[t]),a=0;a<i.length-1;a++)s[i[a]]=s[i[a]]||{},s=s[i[a]];if(t=i.pop(),1===arguments.length)return s[t]===o?null:s[t];s[t]=e}else{if(1===arguments.length)return this.options[t]===o?null:this.options[t];n[t]=e}return this._setOptions(n),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(r,o,t){var l,h=this;"boolean"!=typeof r&&(t=o,o=r,r=!1),t?(o=l=u(o),this.bindings=this.bindings.add(o)):(t=o,o=this.element,l=this.widget()),u.each(t,function(t,e){function i(){if(r||!0!==h.options.disabled&&!u(this).hasClass("ui-state-disabled"))return("string"==typeof e?h[e]:e).apply(h,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||u.guid++);var s=t.match(/^(\w+)\s*(.*)$/),a=s[1]+h.eventNamespace,n=s[2];n?l.delegate(n,a,i):o.bind(a,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){u(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){u(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){u(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){u(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var s,a,n=this.options[t];if(i=i||{},(e=u.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],a=e.originalEvent)for(s in a)s in e||(e[s]=a[s]);return this.element.trigger(e,i),!(u.isFunction(n)&&!1===n.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},u.each({show:"fadeIn",hide:"fadeOut"},function(n,r){u.Widget.prototype["_"+n]=function(e,t,i){"string"==typeof t&&(t={effect:t});var s,a=t?!0===t||"number"==typeof t?r:t.effect||r:n;"number"==typeof(t=t||{})&&(t={duration:t}),s=!u.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),s&&u.effects&&u.effects.effect[a]?e[n](t):a!==n&&e[a]?e[a](t.duration,t.easing,i):e.queue(function(t){u(this)[n](),i&&i.call(e[0]),t()})}})}(jQuery),function(h,s){function e(){return++t}function u(t){return 1<(t=t.cloneNode(!1)).hash.length&&decodeURIComponent(t.href.replace(i,""))===decodeURIComponent(location.href.replace(i,""))}var t=0,i=/#.*$/;h.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,t=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",t.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){h(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){h(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),t.active=this._initialActive(),h.isArray(t.disabled)&&(t.disabled=h.unique(t.disabled.concat(h.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),!1!==this.options.active&&this.anchors.length?this.active=this._findActive(t.active):this.active=h(),this._refresh(),this.active.length&&this.load(t.active)},_initialActive:function(){var i=this.options.active,t=this.options.collapsible,s=location.hash.substring(1);return null===i&&(s&&this.tabs.each(function(t,e){if(h(e).attr("aria-controls")===s)return i=t,!1}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==i&&-1!==i||(i=!!this.tabs.length&&0)),!1!==i&&-1===(i=this.tabs.index(this.tabs.eq(i)))&&(i=!t&&0),!t&&!1===i&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):h()}},_tabKeydown:function(t){var e=h(this.document[0].activeElement).closest("li"),i=this.tabs.index(e),s=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case h.ui.keyCode.RIGHT:case h.ui.keyCode.DOWN:i++;break;case h.ui.keyCode.UP:case h.ui.keyCode.LEFT:s=!1,i--;break;case h.ui.keyCode.END:i=this.anchors.length-1;break;case h.ui.keyCode.HOME:i=0;break;case h.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),void this._activate(i);case h.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),void this._activate(i!==this.options.active&&i);default:return}t.preventDefault(),clearTimeout(this.activating),i=this._focusNextTab(i,s),t.ctrlKey||(e.attr("aria-selected","false"),this.tabs.eq(i).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",i)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===h.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===h.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===h.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,e){function i(){return s<t&&(t=0),t<0&&(t=s),t}for(var s=this.tabs.length-1;-1!==h.inArray(i(),this.options.disabled);)t=e?t+1:t-1;return t},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,e){"active"!==t?"disabled"!==t?(this._super(t,e),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",e),e||!1!==this.options.active||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e)):this._setupDisabled(e):this._activate(e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+e()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,e=this.tablist.children(":has(a[href])");t.disabled=h.map(e.filter(".ui-state-disabled"),function(t){return e.index(t)}),this._processTabs(),!1!==t.active&&this.anchors.length?this.active.length&&!h.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=h()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=h()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var l=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return h("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=h(),this.anchors.each(function(t,e){var i,s,a,n=h(e).uniqueId().attr("id"),r=h(e).closest("li"),o=r.attr("aria-controls");u(e)?(i=e.hash,s=l.element.find(l._sanitizeSelector(i))):(i="#"+(a=l._tabId(r)),(s=l.element.find(i)).length||(s=l._createPanel(a)).insertAfter(l.panels[t-1]||l.tablist),s.attr("aria-live","polite")),s.length&&(l.panels=l.panels.add(s)),o&&r.data("ui-tabs-aria-controls",o),r.attr({"aria-controls":i.substring(1),"aria-labelledby":n}),s.attr("aria-labelledby",n)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return h("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){h.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var e,i=0;e=this.tabs[i];i++)!0===t||-1!==h.inArray(i,t)?h(e).addClass("ui-state-disabled").attr("aria-disabled","true"):h(e).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={click:function(t){t.preventDefault()}};t&&h.each(t.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,e=this.element.parent();"fill"===t?(i=e.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=h(this),e=t.css("position");"absolute"!==e&&"fixed"!==e&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=h(this).outerHeight(!0)}),this.panels.each(function(){h(this).height(Math.max(0,i-h(this).innerHeight()+h(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,h(this).height("").height())}).height(i))},_eventHandler:function(t){var e=this.options,i=this.active,s=h(t.currentTarget).closest("li"),a=s[0]===i[0],n=a&&e.collapsible,r=n?h():this._getPanelForTab(s),o=i.length?this._getPanelForTab(i):h(),l={oldTab:i,oldPanel:o,newTab:n?h():s,newPanel:r};t.preventDefault(),s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||a&&!e.collapsible||!1===this._trigger("beforeActivate",t,l)||(e.active=!n&&this.tabs.index(s),this.active=a?h():s,this.xhr&&this.xhr.abort(),o.length||r.length||h.error("jQuery UI Tabs: Mismatching fragment identifier."),r.length&&this.load(this.tabs.index(s),t),this._toggle(t,l))},_toggle:function(t,e){function i(){a.running=!1,a._trigger("activate",t,e)}function s(){e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),n.length&&a.options.show?a._show(n,a.options.show,i):(n.show(),i())}var a=this,n=e.newPanel,r=e.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s()}):(e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),s()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),e.oldTab.attr("aria-selected","false"),n.length&&r.length?e.oldTab.attr("tabIndex",-1):n.length&&this.tabs.filter(function(){return 0===h(this).attr("tabIndex")}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}),e.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var e,i=this._findActive(t);i[0]!==this.active[0]&&(i.length||(i=this.active),e=i.find(".ui-tabs-anchor")[0],this._eventHandler({target:e,currentTarget:e,preventDefault:h.noop}))},_findActive:function(t){return!1===t?h():this.tabs.eq(t)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){h.data(this,"ui-tabs-destroy")?h(this).remove():h(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=h(this),e=t.data("ui-tabs-aria-controls");e?t.attr("aria-controls",e).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var t=this.options.disabled;!1!==t&&(i===s?t=!1:(i=this._getIndex(i),t=h.isArray(t)?h.map(t,function(t){return t!==i?t:null}):h.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(t))},disable:function(t){var e=this.options.disabled;if(!0!==e){if(t===s)e=!0;else{if(t=this._getIndex(t),-1!==h.inArray(t,e))return;e=h.isArray(e)?h.merge([t],e).sort():[t]}this._setupDisabled(e)}},load:function(t,e){t=this._getIndex(t);var i=this,s=this.tabs.eq(t),a=s.find(".ui-tabs-anchor"),n=this._getPanelForTab(s),r={tab:s,panel:n};u(a[0])||(this.xhr=h.ajax(this._ajaxSettings(a,e,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(s.addClass("ui-tabs-loading"),n.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){n.html(t),i._trigger("load",e,r)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&i.panels.stop(!1,!0),s.removeClass("ui-tabs-loading"),n.removeAttr("aria-busy"),t===i.xhr&&delete i.xhr},1)})))},_ajaxSettings:function(t,i,s){var a=this;return{url:t.attr("href"),beforeSend:function(t,e){return a._trigger("beforeLoad",i,h.extend({jqXHR:t,ajaxSettings:e},s))}}},_getPanelForTab:function(t){var e=h(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+e))}})}(jQuery);