define(["../../template",""],function(i){return i("rank/jinlirank/urankFocusTmpl",function(i,e){"use strict";var s=this,a=s.$helpers,r=i.i,l=i.item,t=i.picListLength,c=i._url,d=s.$escape,n="";n+='<div class="mui-slider"> <a class="control-left" href="javascript:void(0)"><i></i><em></em></a> <a class="control-right" href="javascript:void(0)"><i></i><em></em></a> <div class="mui-slider-scroll-wrap"> <ul class="mui-slider-scroll-container" id="js-random-focus"> ';for(var r in l){var t=l.length;var c="";if(l[r].type==2){c="/album/"+l[r].code}else if(l[r].type==3){c="/artist/"+l[r].code}else if(l[r].type==8){c="/mv/"+l[r].code}else if(l[r].type==5){c="/songlist/"+l[r].code}else if(l[r].type==9){c="/discuss/detail/"+l[r].code}else{c=l[r].code}n+=' <li class="js-random-first" data-title="';n+=d(l[r].randpic_desc);n+="\" data-origin-id='0'> ";if(c){n+=' <a href="';n+=d(c);n+="\" title='";n+=d(l[r].randpic_desc);n+='\' target="_blank"> '}else{n+=' <a href="javascript:void(0)" class="urank-focus-nolink" title=\'';n+=d(l[r].randpic_desc);n+="'> "}n+=' <img src="';n+=d(l[r].randpic);n+='@w_1000,o_1,q_80" class="" alt="';n+=d(l[r].randpic_desc);n+='"/> </a> </li> '}n+=' </ul> </div> <div class="mui-slider-controller" style="margin-right:-';n+=d(t*13+5);n+='px"> <div class="slider-page slider-right"> <div class="slider-page-inner"> ';for(var r in l){n+=' <a href="javascript:void(0)" class="page ';if(r==1){n+=" on "}n+='"><i></i></a> '}n+="  </div> </div> </div> </div>";return new String(n)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/