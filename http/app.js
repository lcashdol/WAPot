
function localize(){try{$("*[tid]").each(function(index){if(!$(this).attr("tok")&&($(this).attr("tid")!="undefined")){var s=getLangM($(this).attr("tid"));if(s){if($(this).is("button")){$(this).name(s);}else{$(this).html(s);}
$(this).attr("tok","ok");}}});}catch(e){}}
function printContent(div_id){var wl_key={'gt24SSID':PWS_ssid,'gt24PSK':PWS_key,'gt24Sec':get_wifi_sc_str(PWS_type)};if(top.G_prog>0||top.G_lock)return false;try{$("*[tid]").each(function(index){var id=$(this).attr("tid");var info=wl_key[id];if(info){$(this).html(info);}});}catch(e){};var servcard=$("#"+div_id).html();var html='<!DOCTYPE html>'+'<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->'+'<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->'+'<!--[if IE 8]><html class="no-js lt-ie9" lang="en"> <![endif]-->'+'<!--[if gt IE 8]><!--><html lang="en" class="gt-ie8"><!--<![endif]-->'+'<head>'+'<link href="app.css" rel="stylesheet" type="text/css" />'+'<!--[if lt IE 9]><link rel="stylesheet" href="ie.css"/><![endif]-->'+'<link href="serviceCard.css" rel="stylesheet" type="text/css" />'+'</head><body style=\"background:#ffffff;\">'+
servcard+'</body></html>';var WindowObject=window.open("","PrintWindow","width=900,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes");WindowObject.document.writeln(html);WindowObject.document.close();WindowObject.focus();WindowObject.print();return false;}
function preLoadPages(){loadPage("serviceCard.htm","serviceCard");}
function get_scrollTop_of_body(){var scrollTop;if(typeof window.pageYOffset!='undefined'){scrollTop=window.pageYOffset;}
else
if(typeof document.compatMode!='undefined'&&document.compatMode!='BackCompat'){scrollTop=document.documentElement.scrollTop;}
else
if(typeof document.body!='undefined'){scrollTop=document.body.scrollTop;}
return scrollTop;}
$(document).ready(function(){var isIOS=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i);var isAndroid=navigator.userAgent.match(/(android)/i);var isWindows=navigator.platform.match(/(win)/i);var isOSX=navigator.platform.match(/(mac)/i);if(isIOS){$("body").addClass("ios");}
if(isAndroid){$("body").addClass("android");}
if(isWindows){$("body").addClass("win");}
if(isOSX){$("body").addClass("osx");}
function pad(num,size){var s="000000000"+num;return s.substr(s.length-size);}
toggle_debug();localize();dev_debug(cPage);init();if(("undefined"==typeof(G_main))&&("undefined"==typeof(G_BBS))&&("undefined"==typeof(G_NO_APPLY)))
setTimeout('preSubform()',500);if("undefined"==typeof(G_BBS))
setTimeout('preLoadPages()',510);if(GetCookie("jump_ui"))
{$("#mainbody").hide();DeleteCookie("jump_ui");}
else
setTimeout(function(){$("#mainbody").show();},1000);(function(f,h,c){var a='placeholder'in h.createElement('input'),d='placeholder'in h.createElement('textarea'),i=c.fn,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){return this.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind('focus.placeholder',b).bind('blur.placeholder',e).trigger('blur.placeholder').end()};j.input=a;j.textarea=d;c(function(){c(h).delegate('form','submit.placeholder',function(){var k=c('.placeholder',this).each(b);setTimeout(function(){k.each(e)},10)})});c(f).bind('unload.placeholder',function(){c('.placeholder').val('')})}function g(l){var k={},m=/^jQuery\d+$/;c.each(l.attributes,function(o,n){if(n.specified&&!m.test(n.name)){k[n.name]=n.value}});return k}function b(){var k=c(this);if(k.val()===k.attr('placeholder')&&k.hasClass('placeholder')){if(k.data('placeholder-password')){k.hide().next().show().focus().attr('id',k.removeAttr('id').data('placeholder-id'))}else{k.val('').removeClass('placeholder')}}}function e(){var o,n=c(this),k=n,m=this.id;if(n.val()===''){if(n.is(':password')){if(!n.data('placeholder-textinput')){try{o=n.clone().attr({type:'text'})}catch(l){o=c('<input>').attr(c.extend(g(this),{type:'text'}))}o.removeAttr('name').data('placeholder-password',true).data('placeholder-id',m).bind('focus.placeholder',b);n.data('placeholder-textinput',o).data('placeholder-id',m).before(o)}n=n.removeAttr('id').hide().prev().attr('id',m).show()}n.addClass('placeholder').val(n.attr('placeholder'))}else{n.removeClass('placeholder')}}}(this,document,jQuery));$('input, textarea').placeholder();(function($){var modalQueued=false;$('a[data-reveal-id]').live('click',function(event){event.preventDefault();var modalLocation=$(this).attr('data-reveal-id');$('#'+modalLocation).reveal($(this).data());});var myScrollTop=get_scrollTop_of_body;$.fn.reveal=function(options){var defaults={animation:'fadeAndPop',animationSpeed:300,closeOnBackgroundClick:false,closeOnESC:false,dismissModalClass:'close-reveal-modal',open:$.noop,opened:$.noop,close:$.noop,closed:$.noop};options=$.extend({},defaults,options);return this.each(function(){var modal=$(this),topMeasure=parseInt(modal.css('top'),10),topOffset=modal.height()+topMeasure,locked=false,modalBg=$('.reveal-modal-bg'),closeButton;if(modalBg.length===0){modalBg=$('<div class="reveal-modal-bg" />').insertAfter(modal);modalBg.fadeTo('fast',0.8);}
function unlockModal(){locked=false;}
function lockModal(){locked=true;}
function closeOpenModals(modal){var openModals=$(".reveal-modal.open");if(openModals.length===1){modalQueued=true;$(".reveal-modal.open").trigger("reveal:close");}}
function openAnimation(){if(!locked){lockModal();closeOpenModals(modal);modal.addClass("open");if(options.animation==="fadeAndPop"){modal.css({'top':myScrollTop()-topOffset,'opacity':0,'visibility':'visible'});modalBg.fadeIn(options.animationSpeed/2);modal.delay(options.animationSpeed/2).animate({"top":myScrollTop()+topMeasure+'px',"opacity":1},options.animationSpeed,function(){modal.trigger('reveal:opened');});}
if(options.animation==="fade"){modal.css({'opacity':0,'visibility':'visible','top':myScrollTop()+topMeasure});modalBg.fadeIn(options.animationSpeed/2);modal.delay(options.animationSpeed/2).animate({"opacity":1},options.animationSpeed,function(){modal.trigger('reveal:opened');});}
if(options.animation==="none"){modal.css({'visibility':'visible','top':myScrollTop()+topMeasure});modalBg.css({"display":"block"});modal.trigger('reveal:opened');}}}
modal.bind('reveal:open.reveal',openAnimation);function closeAnimation(){if(!locked){lockModal();modal.removeClass("open");if(options.animation==="fadeAndPop"){modal.animate({"top":myScrollTop()-topOffset+'px',"opacity":0},options.animationSpeed/2,function(){modal.css({'top':topMeasure,'opacity':1,'visibility':'hidden'});});if(!modalQueued){modalBg.delay(options.animationSpeed).fadeOut(options.animationSpeed,function(){modal.trigger('reveal:closed');});}else{modal.trigger('reveal:closed');}
modalQueued=false;}
if(options.animation==="fade"){modal.animate({"opacity":0},options.animationSpeed,function(){modal.css({'opacity':1,'visibility':'hidden','top':topMeasure});});if(!modalQueued){modalBg.delay(options.animationSpeed).fadeOut(options.animationSpeed,function(){modal.trigger('reveal:closed');});}else{modal.trigger('reveal:closed');}}
if(options.animation==="none"){modal.css({'visibility':'hidden','top':topMeasure});if(!modalQueued){modalBg.css({'display':'none'});}
modal.trigger('reveal:closed');}}}
function destroy(){modal.unbind('.reveal');modalBg.unbind('.reveal');$('.'+options.dismissModalClass).unbind('.reveal');$('body').unbind('.reveal');}
modal.bind('reveal:close.reveal',closeAnimation);modal.bind('reveal:opened.reveal reveal:closed.reveal',unlockModal);modal.bind('reveal:closed.reveal',destroy);modal.bind('reveal:open.reveal',options.open);modal.bind('reveal:opened.reveal',options.opened);modal.bind('reveal:close.reveal',options.close);modal.bind('reveal:closed.reveal',options.closed);modal.trigger('reveal:open');closeButton=$('.'+options.dismissModalClass).bind('click.reveal',function(){modal.trigger('reveal:close');});if(options.closeOnBackgroundClick){modalBg.css({"cursor":"pointer"});modalBg.bind('click.reveal',function(){modal.trigger('reveal:close');});}
if(options.closeOnESC){$('body').bind('keyup.reveal',function(event){if(event.which===27){modal.trigger('reveal:close');}});}});};}(jQuery));});var pages=[];function idxOfPages(kk){if(kk=='undefined'){alert("undefined");return-1;}
if(!pages){return-1;}
for(var i=0;i<pages.length;i++){if(pages[i].n!='undefined'&&pages[i].n==kk){return i;}}
return-1;}
function addPage(n){var idx=idxOfPages(n);if(idx<0){pages.push({'n':n});}
return idx;}
function ShowModalURL(_URL,_txt_id,_cb){var showIt=function(){if(typeof(_txt_id)=='string'){dev_debug('Popup '+_txt_id);window.scrollTo(0,0);$('#progploader').append($(_txt_id));if($('#progploader').css('visibility')=='hidden'){$('#progploader').reveal({animation:'fade',animationspeed:100});}
if(_cb)_cb();}};if(_URL==''||(typeof(_txt_id)=='string'&&$(_txt_id).length!=0))closeModal(showIt);else if(addPage(_URL)==-1){$.get(_URL,function(h){$(h).appendTo('#preloader');localize();if($.isFunction(_txt_id))setTimeout(_txt_id,200);else if(typeof(_txt_id)=='string')
closeModal(showIt);},'html');}else{if($.isFunction(_txt_id))setTimeout(_txt_id,200);else if(typeof(_txt_id)=='string')
closeModal(showIt);}};function closeModal(_cb){$('#progploader').trigger('reveal:close');setTimeout(function(){$('#progploader').children().appendTo('#preloader');if($.isFunction(_cb))_cb();},1000);};function loadPage(url,_txt_id,_cb){if(addPage(url,_txt_id)==-1){mainobj=$('.main').first();$.get(url,function(h){if(pg_dir){h=h.replace('images/',pg_dir+'images/');}
pageob=$(h).hide();mainobj.after(pageob);localize();if($.isFunction(_cb))_cb();},'html');}}
function reloadPage(url,_txt_id,_cb){$(_txt_id).remove();addPage(url,_txt_id);mainobj=$('.main').first();$.get(url,function(h){if(pg_dir){h=h.replace('images/',pg_dir+'images/');}
pageob=$(h).hide();mainobj.after(pageob);localize();if($.isFunction(_cb))_cb();},'html');}
function showPage(_txt_id,_cb){dev_debug('Switch page '+_txt_id);$('.main').hide();closeModal();$(_txt_id).show(_cb);}
function hidePage(_cb){$('.main').hide().first().show(_cb);}
function do_cgi(_url,_cb)
{var t1;$.get(_url,function(txt){clearTimeout(t1);if(txt.indexOf("OK")==-1){dev_debug(_url+' fail.');_cb(0);}else{dev_debug(_url+' success.');_cb(1);}}).error(function(){clearTimeout(t1);dev_debug(_url+' error.');_cb(-1);});t1=setTimeout(function(){dev_debug(_url+' timeout.');_cb(-1);},30*1000);return false;}
function getRegForm(_cb){var REGISTER_URL='/cgi-bin/getRegForm.api';return do_cgi(REGISTER_URL,_cb);}
function CheckOptionContent(_cb){var OPTSW_URL='/cgi-bin/getOptSW.api';return do_cgi(OPTSW_URL,_cb);};function sndRegForm(info,_done){var submitURL="/cgi-bin/regURL.api?";var retryRequest=$.ajax({type:"GET",contentType:"application/json; charset=utf-8",dataType:"jsonp",timeout:8000,url:submitURL+info,crossDomain:true,error:function(jqXHR,textStatus,errorThrown){dev_debug('sndRegForm fail.'+textStatus);if(_done)_done(0);}}).done(function(msg){dev_debug('sndRegForm success.');if(_done)_done(1);});}
var devwnd=null;function toggle_debug(flag){var en=GetCookie('dev');if(flag){if(en&&en==0){en=1;}else{try{devwnd.close();}catch(e){};en=0;}
SetCookie('dev',en);}
$("#devflag").html((en==1)?"on":"+");return false;}
function dev_debug(msg){var d=new Date();var ds=d.toUTCString();var en=GetCookie('dev');if(en==1){if(!devwnd){devwnd=window.open("","dev","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,width=700,height=400,resizable=1,top=0,left=0");}
if(!msg)return;var elm=document.createElement("div");elm.innerHTML=ds+": "+msg;try{var h=devwnd.document.body.innerHTML;if(h.length==0){elm.innerHTML=ds+': Open debug window <br>'+
ds+': <b>appCodeName:</b>'+navigator.appCodeName+'<br>'+
ds+': <b>appName:</b>'+navigator.appName+'<br>'+
ds+': <b>appVersion:</b>'+navigator.appVersion+'<br>'+
ds+': <b>userAgent:</b>'+navigator.userAgent+'<br>'+
ds+': <b>platform:</b>'+navigator.platform+'<br>'+
ds+": "+msg;}
devwnd.document.body.appendChild(elm);}catch(e){try{h+=elm.outerHTML;devwnd.document.body.innerHTML=h;}catch(e){}};}}
/*END_JS_PACKER*/
