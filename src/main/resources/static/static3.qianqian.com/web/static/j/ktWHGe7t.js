define(["core/utils","tmpl/common/at"],function(t,n){var e={baseEl:$("body"),btnEl:null,editEl:null,innerSelect:".at-tmpl"};var i=function(t,n){t.options=$.extend(e,n);t.$base=t.options.baseEl;t.$atEdit=$(t.options.editEl,t.$base);t.$atInner=$(t.options.innerSelect,t.$base);if(!t.$atInner||t.$atInner.length==0){t.$atInner=$('<div class="at-tmpl"></div>').appendTo(t.$base)}r(t)},o=function(t,n,e){t.options=$.extend(t.options,{btnEl:n});t.$atBtn=$(t.options.btnEl,t.$base);t.timeout=null;f(t,e,0,3)},s=function(t){t.timeout=setTimeout(function(){t.$atInner.hide()},200)},a=function(t){clearTimeout(t.timeout)},l=function(t,n){var e=t.$atInner.find("li.visited");switch(n){case 1:if(e&&e.length>0){e.find("a").trigger("click",t)}break;case 2:e=e.prev();if(!e||e.length==0){e=t.$atInner.find("li").last(0)}if(e&&e.length>0){e.trigger("mouseenter",t)}break;case 3:e=e.next();if(!e||e.length==0){e=t.$atInner.find("li").first(0)}if(e&&e.length>0){e.trigger("mouseenter",t)}break}},r=function(t){t.$atInner.on("mouseout",function(){}).on("mouseover",function(){}).on("click","a",function(n,e){t=t||e;var i=$(this).data("user");var o=t.$atEdit.val(),o=o.substr(0,t.$atEdit.iGetFieldPos()),s=o.lastIndexOf("@")+1;t.$atEdit.iDelField(t.$atEdit.iGetFieldPos()-s);t.$atEdit.iAddField(i.username+" ");t.$atEdit.trigger("select:user",i)}).on("mouseenter","li",function(n,e){t=t||e;var i=t.$atInner.find("li.visited");i.removeClass("visited");$(this).addClass("visited")})},f=function(e,i,o,s){var a=e.$atBtn;t.tingApi("baidu.ting.ugcfriend.getFriendList",{query:i||""}).done(function(t){t=t.list||[];if(t.length>8){t=t.slice(0,8)}e.$atInner.html(n({list:t,query:i||""}))}).fail(function(t){e.$atInner.html(n({list:{}}))});if(a.length>0){o=o||0;s=s||10;if(e.$base.css("position")=="absolute"||e.$base.css("position")=="fixed"){s=s+e.$base.offset().top;o=o+e.$base.offset().left}e.$atInner.addClass("common-at").css({top:a.offset().top+a.innerHeight()-s+"px",left:a.offset().left+a.innerWidth()-o+"px"}).show()}};return{init:function(t){var n={};i(n,t);return n},load:function(t,n,e){o(t,n,e)},hide:function(t){s(t)},clear:function(t){a(t)},control:function(t,n){l(t,n)}}});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/