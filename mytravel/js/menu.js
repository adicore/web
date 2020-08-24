(function(a){if(typeof define==="function"&&define.amd){define(["jquery","../keycode","../position","../safe-active-element","../unique-id","../version","../widget"],a)}else{a(jQuery)}}(function(a){return a.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=false;this.element.uniqueId().attr({role:this.options.role,tabIndex:0});this._addClass("ui-menu","ui-widget ui-widget-content");this._on({"mousedown .ui-menu-item":function(b){b.preventDefault()},"click .ui-menu-item":function(b){var d=a(b.target);var c=a(a.ui.safeActiveElement(this.document[0]));if(!this.mouseHandled&&d.not(".ui-state-disabled").length){this.select(b);if(!b.isPropagationStopped()){this.mouseHandled=true}if(d.has(".ui-menu").length){this.expand(b)}else{if(!this.element.is(":focus")&&c.closest(".ui-menu").length){this.element.trigger("focus",[true]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)}}}}},"mouseenter .ui-menu-item":function(b){if(this.previousFilter){return}var c=a(b.target).closest(".ui-menu-item"),d=a(b.currentTarget);if(c[0]!==d[0]){return}this._removeClass(d.siblings().children(".ui-state-active"),null,"ui-state-active");this.focus(b,d)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(d,b){var c=this.active||this.element.find(this.options.items).eq(0);if(!b){this.focus(d,c)}},blur:function(b){this._delay(function(){var c=!a.contains(this.element[0],a.ui.safeActiveElement(this.document[0]));if(c){this.collapseAll(b)}})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(b){if(this._closeOnDocumentClick(b)){this.collapseAll(b)}this.mouseHandled=false}})},_destroy:function(){var c=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),b=c.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();b.children().each(function(){var d=a(this);if(d.data("ui-menu-submenu-caret")){d.remove()}})},_keydown:function(f){var c,e,g,d,b=true;switch(f.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(f);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(f);break;case a.ui.keyCode.HOME:this._move("first","first",f);break;case a.ui.keyCode.END:this._move("last","last",f);break;case a.ui.keyCode.UP:this.previous(f);break;case a.ui.keyCode.DOWN:this.next(f);break;case a.ui.keyCode.LEFT:this.collapse(f);break;case a.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(f)}break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(f);break;case a.ui.keyCode.ESCAPE:this.collapse(f);break;default:b=false;e=this.previousFilter||"";d=false;g=f.keyCode>=96&&f.keyCode<=105?(f.keyCode-96).toString():String.fromCharCode(f.keyCode);clearTimeout(this.filterTimer);if(g===e){d=true}else{g=e+g}c=this._filterMenuItems(g);c=d&&c.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):c;if(!c.length){g=String.fromCharCode(f.keyCode);c=this._filterMenuItems(g)}if(c.length){this.focus(f,c);this.previousFilter=g;this.filterTimer=this._delay(function(){delete this.previousFilter},1000)}else{delete this.previousFilter}}if(b){f.preventDefault()}},_activate:function(b){if(this.active&&!this.active.is(".ui-state-disabled")){if(this.active.children("[aria-haspopup='true']").length){this.expand(b)}else{this.select(b)}}},refresh:function(){var i,d,g,e,b,h=this,f=this.options.icons.submenu,c=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length);g=c.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var l=a(this),j=l.prev(),k=a("<span>").data("ui-menu-submenu-caret",true);h._addClass(k,"ui-menu-icon","ui-icon "+f);j.attr("aria-haspopup","true").prepend(k);l.attr("aria-labelledby",j.attr("id"))});this._addClass(g,"ui-menu","ui-widget ui-widget-content ui-front");i=c.add(this.element);d=i.find(this.options.items);d.not(".ui-menu-item").each(function(){var j=a(this);if(h._isDivider(j)){h._addClass(j,"ui-menu-divider","ui-widget-content")}});e=d.not(".ui-menu-item, .ui-menu-divider");b=e.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()});this._addClass(e,"ui-menu-item")._addClass(b,"ui-menu-item-wrapper");d.filter(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!a.contains(this.element[0],this.active[0])){this.blur()}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(c,d){if(c==="icons"){var b=this.element.find(".ui-menu-icon");this._removeClass(b,null,this.options.icons.submenu)._addClass(b,null,d.submenu)}this._super(c,d)},_setOptionDisabled:function(b){this._super(b);this.element.attr("aria-disabled",String(b));this._toggleClass(null,"ui-state-disabled",!!b)},focus:function(d,c){var f,e,b;this.blur(d,d&&d.type==="focus");this._scrollIntoView(c);this.active=c.first();e=this.active.children(".ui-menu-item-wrapper");this._addClass(e,null,"ui-state-active");if(this.options.role){this.element.attr("aria-activedescendant",e.attr("id"))}b=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");this._addClass(b,null,"ui-state-active");if(d&&d.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()},this.delay)}f=c.children(".ui-menu");if(f.length&&d&&(/^mouse/.test(d.type))){this._startOpening(f)}this.activeMenu=c.parent();this._trigger("focus",d,{item:c})},_scrollIntoView:function(e){var h,d,f,b,c,g;if(this._hasScroll()){h=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0;d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0;f=e.offset().top-this.activeMenu.offset().top-h-d;b=this.activeMenu.scrollTop();c=this.activeMenu.height();g=e.outerHeight();if(f<0){this.activeMenu.scrollTop(b+f)}else{if(f+g>c){this.activeMenu.scrollTop(b+f-c+g)}}}},blur:function(c,b){if(!b){clearTimeout(this.timer)}if(!this.active){return}this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active");this._trigger("blur",c,{item:this.active});this.active=null},_startOpening:function(b){clearTimeout(this.timer);if(b.attr("aria-hidden")!=="true"){return}this.timer=this._delay(function(){this._close();this._open(b)},this.delay)},_open:function(c){var b=a.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(c.parents(".ui-menu")).hide().attr("aria-hidden","true");c.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(b)},collapseAll:function(c,b){clearTimeout(this.timer);this.timer=this._delay(function(){var d=b?this.element:a(c&&c.target).closest(this.element.find(".ui-menu"));if(!d.length){d=this.element}this._close(d);this.blur(c);this._removeClass(d.find(".ui-state-active"),null,"ui-state-active");this.activeMenu=d},this.delay)},_close:function(b){if(!b){b=this.active?this.active.parent():this.element}b.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(b){return !a(b.target).closest(".ui-menu").length},_isDivider:function(b){return !/[^\-\u2014\u2013\s]/.test(b.text())},collapse:function(c){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(b&&b.length){this._close();this.focus(c,b)}},expand:function(c){var b=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();if(b&&b.length){this._open(b.parent());this._delay(function(){this.focus(c,b)})}},next:function(b){this._move("next","first",b)},previous:function(b){this._move("prev","last",b)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,c,d){var b;if(this.active){if(e==="first"||e==="last"){b=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)}else{b=this.active[e+"All"](".ui-menu-item").eq(0)}}if(!b||!b.length||!this.active){b=this.activeMenu.find(this.options.items)[c]()}this.focus(d,b)},nextPage:function(d){var c,e,b;if(!this.active){this.next(d);return}if(this.isLastItem()){return}if(this._hasScroll()){e=this.active.offset().top;b=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){c=a(this);return c.offset().top-e-b<0});this.focus(d,c)}else{this.focus(d,this.activeMenu.find(this.options.items)[!this.active?"first":"last"]())}},previousPage:function(d){var c,e,b;if(!this.active){this.next(d);return}if(this.isFirstItem()){return}if(this._hasScroll()){e=this.active.offset().top;b=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){c=a(this);return c.offset().top-e+b>0});this.focus(d,c)}else{this.focus(d,this.activeMenu.find(this.options.items).first())}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(b){this.active=this.active||a(b.target).closest(".ui-menu-item");var c={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(b,true)}this._trigger("select",b,c)},_filterMenuItems:function(d){var b=d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),c=new RegExp("^"+b,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return c.test(a.trim(a(this).children(".ui-menu-item-wrapper").text()))})}})}));
