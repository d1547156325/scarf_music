$(function(){var i=$(".mod-musician"),n=i.find(".rank"),e=i.find(".rank-list"),r=i.find(".musician-recomm");n.slider({controls:i.find(".mui-slider-controller"),hoverShowController:true});require(["muui/ui/tab"],function(i){new i({tmpl:false,el:r,handles:{change:function(i,n){n.loadImages()}}})});$(window).on("responsive.resize:narrow",function(){e.accordionSlider("resize",{maxWidth:228})}).on("responsive.resize:wide",function(){e.accordionSlider("resize",{maxWidth:280})})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/