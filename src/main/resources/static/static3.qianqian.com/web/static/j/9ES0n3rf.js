(function(e){var t=Math.abs,i=Math.max,o=Math.min,s=Math.round;function n(){return e("<div/>")}e.imgAreaSelect=function(r,d){var a=e(r),c,l=n(),f=n(),u=n().add(n()).add(n()).add(n()),h=n().add(n()).add(n()).add(n()),m=e([]),p,y,b,g={left:0,top:0},x,w,v,S={left:0,top:0},z=0,k="absolute",C,A,W,I,K,P,N,H,M,O,E,T,L,j,D,R={x1:0,y1:0,x2:0,y2:0,width:0,height:0},$=document.documentElement,q=navigator.userAgent,B,Q,X,Y,F,G,J;function U(e){return e+g.left-S.left}function V(e){return e+g.top-S.top}function Z(e){return e-g.left+S.left}function _(e){return e-g.top+S.top}function ee(e){return e.pageX-S.left}function te(e){return e.pageY-S.top}function ie(e){var t=e||W,i=e||I;return{x1:s(R.x1*t),y1:s(R.y1*i),x2:s(R.x2*t),y2:s(R.y2*i),width:s(R.x2*t)-s(R.x1*t),height:s(R.y2*i)-s(R.y1*i)}}function oe(e,t,i,o,n){var r=n||W,d=n||I;R={x1:s(e/r||0),y1:s(t/d||0),x2:s(i/r||0),y2:s(o/d||0)};R.width=R.x2-R.x1;R.height=R.y2-R.y1}function se(){if(!c||!a.width())return;g={left:s(a.offset().left),top:s(a.offset().top)};x=a.innerWidth();w=a.innerHeight();g.top+=a.outerHeight()-w>>1;g.left+=a.outerWidth()-x>>1;P=s(d.minWidth/W)||0;N=s(d.minHeight/I)||0;H=s(o(d.maxWidth/W||1<<24,x));M=s(o(d.maxHeight/I||1<<24,w));if(e().jquery=="1.3.2"&&k=="fixed"&&!$["getBoundingClientRect"]){g.top+=i(document.body.scrollTop,$.scrollTop);g.left+=i(document.body.scrollLeft,$.scrollLeft)}S=/absolute|relative/.test(v.css("position"))?{left:s(v.offset().left)-v.scrollLeft(),top:s(v.offset().top)-v.scrollTop()}:k=="fixed"?{left:e(document).scrollLeft(),top:e(document).scrollTop()}:{left:0,top:0};y=U(0);b=V(0);if(R.x2>x||R.y2>w)ue()}function ne(t){if(!E)return;l.css({left:U(R.x1),top:V(R.y1)}).add(f).width(F=R.width).height(G=R.height);f.add(u).add(m).css({left:0,top:0});u.width(i(F-u.outerWidth()+u.innerWidth(),0)).height(i(G-u.outerHeight()+u.innerHeight(),0));e(h[0]).css({left:y,top:b,width:R.x1,height:w});e(h[1]).css({left:y+R.x1,top:b,width:F,height:R.y1});e(h[2]).css({left:y+R.x2,top:b,width:x-R.x2,height:w});e(h[3]).css({left:y+R.x1,top:b+R.y2,width:F,height:w-R.y2});F-=m.outerWidth();G-=m.outerHeight();switch(m.length){case 8:e(m[4]).css({left:F>>1});e(m[5]).css({left:F,top:G>>1});e(m[6]).css({left:F>>1,top:G});e(m[7]).css({top:G>>1});case 4:m.slice(1,3).css({left:F});m.slice(2,4).css({top:G})}if(t!==false){if(e.imgAreaSelect.onKeyPress!=ve)e(document).unbind(e.imgAreaSelect.keyPress,e.imgAreaSelect.onKeyPress);if(d.keys)e(document)[e.imgAreaSelect.keyPress](e.imgAreaSelect.onKeyPress=ve)}if(ke&&u.outerWidth()-u.innerWidth()==2){u.css("margin",0);setTimeout(function(){u.css("margin","auto")},0)}}function re(e){se();ne(e);T=U(R.x1);L=V(R.y1);j=U(R.x2);D=V(R.y2)}function de(e,t){d.fadeSpeed?e.fadeOut(d.fadeSpeed,t):e.hide()}function ae(e){var t=Z(ee(e))-R.x1,i=_(te(e))-R.y1;if(!J){se();J=true;l.one("mouseout",function(){J=false})}K="";if(d.resizable){if(i<=d.resizeMargin)K="n";else if(i>=R.height-d.resizeMargin)K="s";if(t<=d.resizeMargin)K+="w";else if(t>=R.width-d.resizeMargin)K+="e"}l.css("cursor",K?K+"-resize":d.movable?"move":"").addClass("select-box");if(p)p.toggle()}function ce(t){e("body").css("cursor","");if(d.autoHide||R.width*R.height==0)de(l.add(h),function(){e(this).hide()});e(document).unbind("mousemove",he);l.mousemove(ae);d.onSelectEnd(r,ie())}function le(t){if(t.which!=1)return false;se();if(K){e("body").css("cursor",K+"-resize");T=U(R[/w/.test(K)?"x2":"x1"]);L=V(R[/n/.test(K)?"y2":"y1"]);e(document).mousemove(he).one("mouseup",ce);l.unbind("mousemove",ae)}else if(d.movable){C=y+R.x1-ee(t);A=b+R.y1-te(t);l.unbind("mousemove",ae);e(document).mousemove(pe).one("mouseup",function(){d.onSelectEnd(r,ie());e(document).unbind("mousemove",pe);l.mousemove(ae)})}else a.mousedown(t);return false}function fe(e){if(O)if(e){j=i(y,o(y+x,T+t(D-L)*O*(j>T||-1)));D=s(i(b,o(b+w,L+t(j-T)/O*(D>L||-1))));j=s(j)}else{D=i(b,o(b+w,L+t(j-T)/O*(D>L||-1)));j=s(i(y,o(y+x,T+t(D-L)*O*(j>T||-1))));D=s(D)}}function ue(){T=o(T,y+x);L=o(L,b+w);if(t(j-T)<P){j=T-P*(j<T||-1);if(j<y)T=y+P;else if(j>y+x)T=y+x-P}if(t(D-L)<N){D=L-N*(D<L||-1);if(D<b)L=b+N;else if(D>b+w)L=b+w-N}j=i(y,o(j,y+x));D=i(b,o(D,b+w));fe(t(j-T)<t(D-L)*O);if(t(j-T)>H){j=T-H*(j<T||-1);fe()}if(t(D-L)>M){D=L-M*(D<L||-1);fe(true)}R={x1:Z(o(T,j)),x2:Z(i(T,j)),y1:_(o(L,D)),y2:_(i(L,D)),width:t(j-T),height:t(D-L)};ne();d.onSelectChange(r,ie())}function he(e){j=/w|e|^$/.test(K)||O?ee(e):U(R.x2);D=/n|s|^$/.test(K)||O?te(e):V(R.y2);ue();return false}function me(t,i){j=(T=t)+R.width;D=(L=i)+R.height;e.extend(R,{x1:Z(T),y1:_(L),x2:Z(j),y2:_(D)});ne();d.onSelectChange(r,ie())}function pe(e){T=i(y,o(C+ee(e),y+x-R.width));L=i(b,o(A+te(e),b+w-R.height));me(T,L);e.preventDefault();return false}function ye(){e(document).unbind("mousemove",ye);se();j=T;D=L;ue();K="";if(!h.is(":visible"))l.add(h).hide().fadeIn(d.fadeSpeed||0);E=true;e(document).unbind("mouseup",be).mousemove(he).one("mouseup",ce);l.unbind("mousemove",ae);d.onSelectStart(r,ie())}function be(){e(document).unbind("mousemove",ye).unbind("mouseup",be);de(l.add(h));oe(Z(T),_(L),Z(T),_(L));if(!(this instanceof e.imgAreaSelect)){d.onSelectChange(r,ie());d.onSelectEnd(r,ie())}}function ge(t){if(t.which!=1||h.is(":animated"))return false;se();C=T=ee(t);A=L=te(t);e(document).mousemove(ye).mouseup(be);return false}function xe(){re(false)}function we(){c=true;ze(d=e.extend({classPrefix:"imgareaselect",movable:true,parent:"body",resizable:true,resizeMargin:10,onInit:function(){},onSelectStart:function(){},onSelectChange:function(){},onSelectEnd:function(){}},d));l.add(h).css({visibility:""});if(d.show){E=true;se();ne();l.add(h).hide().fadeIn(d.fadeSpeed||0)}setTimeout(function(){d.onInit(r,ie())},0)}var ve=function(e){var t=d.keys,s,n,r=e.keyCode;s=!isNaN(t.alt)&&(e.altKey||e.originalEvent.altKey)?t.alt:!isNaN(t.ctrl)&&e.ctrlKey?t.ctrl:!isNaN(t.shift)&&e.shiftKey?t.shift:!isNaN(t.arrows)?t.arrows:10;if(t.arrows=="resize"||t.shift=="resize"&&e.shiftKey||t.ctrl=="resize"&&e.ctrlKey||t.alt=="resize"&&(e.altKey||e.originalEvent.altKey)){switch(r){case 37:s=-s;case 39:n=i(T,j);T=o(T,j);j=i(n+s,T);fe();break;case 38:s=-s;case 40:n=i(L,D);L=o(L,D);D=i(n+s,L);fe(true);break;default:return}ue()}else{T=o(T,j);L=o(L,D);switch(r){case 37:me(i(T-s,y),L);break;case 38:me(T,i(L-s,b));break;case 39:me(T+o(s,x-Z(j)),L);break;case 40:me(T,L+o(s,w-_(D)));break;default:return}}return false};function Se(e,t){for(var i in t)if(d[i]!==undefined)e.css(t[i],d[i])}function ze(t){if(t.parent)(v=e(t.parent)).append(l.add(h));e.extend(d,t);se();if(t.handles!=null){m.remove();m=e([]);X=t.handles?t.handles=="corners"?4:8:0;while(X--)m=m.add(n());m.addClass(d.classPrefix+"-handle").css({position:"absolute",fontSize:0,zIndex:z+1||1});if(!parseInt(m.css("width"))>=0)m.width(5).height(5);if(Y=d.borderWidth)m.css({borderWidth:Y,borderStyle:"solid"});Se(m,{borderColor1:"border-color",borderColor2:"background-color",borderOpacity:"opacity"})}W=d.imageWidth/x||1;I=d.imageHeight/w||1;if(t.x1!=null){oe(t.x1,t.y1,t.x2,t.y2);t.show=!t.hide}if(t.keys)d.keys=e.extend({shift:1,ctrl:"resize"},t.keys);h.addClass(d.classPrefix+"-outer");f.addClass(d.classPrefix+"-selection");for(X=0;X++<4;)e(u[X-1]).addClass(d.classPrefix+"-border"+X);Se(f,{selectionColor:"background-color",selectionOpacity:"opacity"});Se(u,{borderOpacity:"opacity",borderWidth:"border-width"});Se(h,{outerColor:"background-color",outerOpacity:"opacity"});if(Y=d.borderColor1)e(u[0]).css({borderStyle:"solid",borderColor:Y});if(Y=d.borderColor2)e(u[1]).css({borderStyle:"dashed",borderColor:Y});l.append(f.add(u).add(p)).append(m);if(ke){if(Y=(h.css("filter")||"").match(/opacity=(\d+)/))h.css("opacity",Y[1]/100);if(Y=(u.css("filter")||"").match(/opacity=(\d+)/))u.css("opacity",Y[1]/100)}if(t.hide)de(l.add(h));else if(t.show&&c){E=true;l.add(h).fadeIn(d.fadeSpeed||0);re()}O=(Q=(d.aspectRatio||"").split(/:/))[0]/Q[1];a.add(h).unbind("mousedown",ge);if(d.disable||d.enable===false){l.unbind("mousemove",ae).unbind("mousedown",le);e(window).unbind("resize",xe)}else{if(d.enable||d.disable===false){if(d.resizable||d.movable)l.mousemove(ae).mousedown(le);e(window).resize(xe)}if(!d.persistent)a.add(h).mousedown(ge)}d.enable=d.disable=undefined}this.remove=function(){ze({disable:true});l.add(h).remove()};this.getOptions=function(){return d};this.setOptions=ze;this.getSelection=ie;this.setSelection=oe;this.cancelSelection=be;this.update=re;var ke=(/msie ([\w.]+)/i.exec(q)||[])[1],Ce=/opera/i.test(q),Ae=/webkit/i.test(q)&&!/chrome/i.test(q);B=a;while(B.length){z=i(z,!isNaN(B.css("z-index"))?B.css("z-index"):z);if(B.css("position")=="fixed")k="fixed";B=B.parent(":not(body)")}z=d.zIndex||z;if(ke)a.attr("unselectable","on");e.imgAreaSelect.keyPress=ke||Ae?"keydown":"keypress";if(Ce)p=n().css({width:"100%",height:"100%",position:"absolute",zIndex:z+2||2});l.add(h).css({visibility:"hidden",position:k,overflow:"hidden",zIndex:z||"0"});l.css({zIndex:z+2||2});f.add(u).css({position:"absolute",fontSize:0});r.complete||r.readyState=="complete"||!a.is("img")?we():a.one("load",we);if(!c&&ke&&ke>=7)r.src=r.src};e.fn.imgAreaSelect=function(t){t=t||{};this.each(function(){if(e(this).data("imgAreaSelect")){if(t.remove){e(this).data("imgAreaSelect").remove();e(this).removeData("imgAreaSelect")}else e(this).data("imgAreaSelect").setOptions(t)}else if(!t.remove){if(t.enable===undefined&&t.disable===undefined)t.enable=true;e(this).data("imgAreaSelect",new e.imgAreaSelect(this,t))}});if(t.instance)return e(this).data("imgAreaSelect");return this}})(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/