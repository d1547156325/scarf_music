define(["../template",""],function(t){return t("songlist/searchSongTmpl",function(t,a){"use strict";var s=this,i=s.$helpers,e=t.i,l=t.song_list,n=t.item,o=t.songInfo,r=t.id,d=t.title,g=t.artist_id,u=t.author,c=t.album_id,_=t.album_title,p=s.$escape,h=i.jsonStringify,f="";f+='<ul class="t"> ';for(e=0;e<l.length;e++){n=l[e];o={id:n.song_id,title:n.title,artist_id:n.artist_id,author:n.author,album_id:n.album_id,album_title:n.album_title};f+=" ";if(n.del_status==1||n.del_status==0&&n.copy_type==0||n.del_status==0&&n.copy_type==2){f+=' <li> <a href="javascript:void(0)" class="song-name-begray to">';f+=p(n.title);f+='</a> <a href="javascript:void(0)" class="song-singer-begray to">';f+=p(n.author);f+='</a> <a href="javascript:void(0)" class="song-add-btn-begray" title="应版权方要求，资源暂时不能使用">添加</a> </li> '}else{f+=' <li> <a href="javascript:void(0)" class="song-name to">';f+=p(n.title);f+='</a> <a href="javascript:void(0)" class="song-singer to">';f+=p(n.author);f+='</a> <span class="song-add-btn song-add-btn-';f+=p(n.song_id);f+='" data-songinfo="';f+=p(h(o));f+='">添加</span> </li> '}f+=" "}f+=" </ul>  ";return new String(f)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/