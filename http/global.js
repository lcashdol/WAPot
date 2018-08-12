
$W=function(a){document.write(a);};$I=function(a){return document.getElementById(a);};var REBOOT_WAIT=20;var cgi_lang_list="EN DE FR ES NL IT CN TW TR PT RU EL SV NO DA FI BR MX CA";var security_type=PWS_type;var sAscii=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ";var sAscii=sAscii+"[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";var sHex="0123456789abcdef";function hex(i){h="";for(j=0;j<=3;j++){h+=sHex.charAt((i>>(j*8+4))&0x0F)+
sHex.charAt((i>>(j*8))&0x0F);}
return h;}
function add(x,y){return(((x&0x7FFFFFFF)+(y&0x7FFFFFFF))^(x&0x80000000)^(y&0x80000000));}
function R1(A,B,C,D,X,S,T){q=add(add(A,(B&C)|(~B&D)),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R2(A,B,C,D,X,S,T){q=add(add(A,(B&D)|(C&~D)),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R3(A,B,C,D,X,S,T){q=add(add(A,B^C^D),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function R4(A,B,C,D,X,S,T){q=add(add(A,C^(B|~D)),add(X,T));return add((q<<S)|((q>>(32-S))&(Math.pow(2,S)-1)),B);}
function calcMD5(sInp){wLen=(((sInp.length+8)>>6)+1)<<4;var X=new Array(wLen);j=4;for(i=0;(i*4)<sInp.length;i++){X[i]=0;for(j=0;(j<4)&&((j+i*4)<sInp.length);j++){X[i]+=(sAscii.indexOf(sInp.charAt((i*4)+j))+32)<<(j*8);}}
if(j==4){X[i++]=0x80;}else{X[i-1]+=0x80<<(j*8);}
for(;i<wLen;i++){X[i]=0;}
X[wLen-2]=sInp.length*8;a=0x67452301;b=0xefcdab89;c=0x98badcfe;d=0x10325476;for(i=0;i<wLen;i+=16){aO=a;bO=b;cO=c;dO=d;a=R1(a,b,c,d,X[i+0],7,0xd76aa478);d=R1(d,a,b,c,X[i+1],12,0xe8c7b756);c=R1(c,d,a,b,X[i+2],17,0x242070db);b=R1(b,c,d,a,X[i+3],22,0xc1bdceee);a=R1(a,b,c,d,X[i+4],7,0xf57c0faf);d=R1(d,a,b,c,X[i+5],12,0x4787c62a);c=R1(c,d,a,b,X[i+6],17,0xa8304613);b=R1(b,c,d,a,X[i+7],22,0xfd469501);a=R1(a,b,c,d,X[i+8],7,0x698098d8);d=R1(d,a,b,c,X[i+9],12,0x8b44f7af);c=R1(c,d,a,b,X[i+10],17,0xffff5bb1);b=R1(b,c,d,a,X[i+11],22,0x895cd7be);a=R1(a,b,c,d,X[i+12],7,0x6b901122);d=R1(d,a,b,c,X[i+13],12,0xfd987193);c=R1(c,d,a,b,X[i+14],17,0xa679438e);b=R1(b,c,d,a,X[i+15],22,0x49b40821);a=R2(a,b,c,d,X[i+1],5,0xf61e2562);d=R2(d,a,b,c,X[i+6],9,0xc040b340);c=R2(c,d,a,b,X[i+11],14,0x265e5a51);b=R2(b,c,d,a,X[i+0],20,0xe9b6c7aa);a=R2(a,b,c,d,X[i+5],5,0xd62f105d);d=R2(d,a,b,c,X[i+10],9,0x2441453);c=R2(c,d,a,b,X[i+15],14,0xd8a1e681);b=R2(b,c,d,a,X[i+4],20,0xe7d3fbc8);a=R2(a,b,c,d,X[i+9],5,0x21e1cde6);d=R2(d,a,b,c,X[i+14],9,0xc33707d6);c=R2(c,d,a,b,X[i+3],14,0xf4d50d87);b=R2(b,c,d,a,X[i+8],20,0x455a14ed);a=R2(a,b,c,d,X[i+13],5,0xa9e3e905);d=R2(d,a,b,c,X[i+2],9,0xfcefa3f8);c=R2(c,d,a,b,X[i+7],14,0x676f02d9);b=R2(b,c,d,a,X[i+12],20,0x8d2a4c8a);a=R3(a,b,c,d,X[i+5],4,0xfffa3942);d=R3(d,a,b,c,X[i+8],11,0x8771f681);c=R3(c,d,a,b,X[i+11],16,0x6d9d6122);b=R3(b,c,d,a,X[i+14],23,0xfde5380c);a=R3(a,b,c,d,X[i+1],4,0xa4beea44);d=R3(d,a,b,c,X[i+4],11,0x4bdecfa9);c=R3(c,d,a,b,X[i+7],16,0xf6bb4b60);b=R3(b,c,d,a,X[i+10],23,0xbebfbc70);a=R3(a,b,c,d,X[i+13],4,0x289b7ec6);d=R3(d,a,b,c,X[i+0],11,0xeaa127fa);c=R3(c,d,a,b,X[i+3],16,0xd4ef3085);b=R3(b,c,d,a,X[i+6],23,0x4881d05);a=R3(a,b,c,d,X[i+9],4,0xd9d4d039);d=R3(d,a,b,c,X[i+12],11,0xe6db99e5);c=R3(c,d,a,b,X[i+15],16,0x1fa27cf8);b=R3(b,c,d,a,X[i+2],23,0xc4ac5665);a=R4(a,b,c,d,X[i+0],6,0xf4292244);d=R4(d,a,b,c,X[i+7],10,0x432aff97);c=R4(c,d,a,b,X[i+14],15,0xab9423a7);b=R4(b,c,d,a,X[i+5],21,0xfc93a039);a=R4(a,b,c,d,X[i+12],6,0x655b59c3);d=R4(d,a,b,c,X[i+3],10,0x8f0ccc92);c=R4(c,d,a,b,X[i+10],15,0xffeff47d);b=R4(b,c,d,a,X[i+1],21,0x85845dd1);a=R4(a,b,c,d,X[i+8],6,0x6fa87e4f);d=R4(d,a,b,c,X[i+15],10,0xfe2ce6e0);c=R4(c,d,a,b,X[i+6],15,0xa3014314);b=R4(b,c,d,a,X[i+13],21,0x4e0811a1);a=R4(a,b,c,d,X[i+4],6,0xf7537e82);d=R4(d,a,b,c,X[i+11],10,0xbd3af235);c=R4(c,d,a,b,X[i+2],15,0x2ad7d2bb);b=R4(b,c,d,a,X[i+9],21,0xeb86d391);a=add(a,aO);b=add(b,bO);c=add(c,cO);d=add(d,dO);}
return hex(a)+hex(b)+hex(c)+hex(d);}
function encryption(s){var keys=ClientIP.replace(/\./g,'');var k_idx=0;var new_s="";var tt;for(var i=0;i<s.length;i++){tt=(s.charCodeAt(i)+(keys.charCodeAt(k_idx))-48);if(tt>126)tt-=84;new_s+=String.fromCharCode(tt);k_idx=(k_idx+1)%keys.length;}
return calcMD5(new_s);}
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2 5="a";b c(6,d){2 3=0;2 7="";e(2 4=0;4<6.8;4++){7+=(6.9(4)+5.9(3))+" ";3=(3+1)%5.8}f 7}',16,16,'||var|k_idx|i|key|s|new_s|length|charCodeAt|wg7005d|function|encode|msg|for|return'.split('|'),0,{}))
function getCookieVal(offset){var endstr=document.cookie.indexOf(";",offset);if(endstr==-1)
endstr=document.cookie.length;return unescape(document.cookie.substring(offset,endstr));}
function GetCookie(name){var arg=name+"=";var alen=arg.length;var clen=document.cookie.length;var i=0;while(i<clen){var j=i+alen;if(document.cookie.substring(i,j)==arg)
return getCookieVal(j);i=document.cookie.indexOf(" ",i)+1;if(i==0)break;}
return null;}
function SetCookie(name,value){var expires=new Date();var path="/";var domain=null;var secure=null;expires.setTime(expires.getTime()+(365*24*60*60*1000));document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain));}
function DeleteCookie(name){exp=new Date();exp.setTime(exp.getTime()-1);var cval=GetCookie(name);document.cookie=name+"="+cval+"; expires="+exp.toGMTString();}
function SetMenuexp(_pg){SetCookie("menuexp",''+_pg);}
function GetMenuexp(){var _pg=GetCookie("menuexp")=='1'?1:0;return _pg;}
function SetDefPg(_pg){SetCookie("defpg",_pg);}
function GetDefPg(){var _pg=GetCookie("defpg");SetDefPg("");return _pg;}
function SetTags(_tg){SetCookie("tag",_tg);}
function GetTags(){var _pg=GetCookie("tag");SetTags("");return _pg;}
var CFG_SP=";";function Cfg(i,n,v){this.i=i;this.n=n;this.v=this.o=v;this.x=0;}
var CA=new Array();function addCfg(n,i,v){var idx=idxOfCfg(n);if(idx<0){CA.length++;CA[CA.length-1]=new Cfg(i,n,v);}else{setCfg(n,v);}}
function idxOfCfg(kk){if(kk=='undefined'){alert("undefined");return-1;}
if(!CA){return-1;}
for(var i=0;i<CA.length;i++){if(CA[i].n!='undefined'&&CA[i].n==kk){return i;}}
return-1;}
function getCfg(n){var idx=idxOfCfg(n);var v="";if(idx>=0){v=HTML2str(CA[idx].v);}
return v;}
function getCfgInt(n){var v=getCfg(n);v=v?v:0;return parseInt(v,10);}
function getCfgIP(n){var ip=[0,0,0,0];var v=getCfg(n);if(v){ip=v.split(".");for(var i=0;i<4;i++){ip[i]=parseInt(ip[i],10);}}
return ip;}
function getCfgMAC(n){var mac=":::::";var v=getCfg(n);if(v){mac=v;}
return mac.split(":");}
function getCfgV6(n){var v=null,ip6=":::::::";var l=8;var idx=idxOfCfg(n);if(idx>=0){v=HTML2str(CA[idx].v);}
if(v&&((v.length!=4)||(v.length==8))){ip6=v;l=v.length;}
CA[idx].x=1;return ip6;}
function setCfg(n,v){var idx=idxOfCfg(n);if(idx>=0){if("object"!=typeof(v)){if(CA[idx].x==1){setCfgV6(n,v);}else{CA[idx].v=str2HTML(v);}}else{CA[idx].v=str2HTML(v.join(CFG_SP));}
return CA[idx].v;}
return null;}
function setCfgV6(n,v){var idx=idxOfCfg(n);if(idx>=0){if("object"!=typeof(v)){CA[idx].v=str2HTML(v);CA[idx].x=1;}}}
function getCfgID(n){var idx=idxOfCfg(n);return(idx>=0)?CA[idx].i:0;}
function getCfgObj(n){var idx=idxOfCfg(n);return(idx>=0)?CA[idx]:null;}
function setCfgObj(n,cfgobj){var idx=idxOfCfg(n);if(idx>=0){CA[idx].i=cfgobj.i;CA[idx].n=cfgobj.n;CA[idx].v=cfgobj.v;CA[idx].o=cfgobj.o;CA[idx].x=cfgobj.x;}}
function cpyCfg(_frm,_to){var frm=idxOfCfg(_frm);var to=idxOfCfg(_to);if((frm>=0)&&(to>=0)){CA[to].i=CA[frm].i;CA[to].n=CA[frm].n;CA[to].v=CA[frm].v;CA[to].o=CA[frm].o;CA[to].x=CA[frm].x;}}
function getCfgAry(n){var v=[];var s=getCfg(n);if(s){v=s.split(CFG_SP);return v;}
return null;}
function setCfgAry(n,ar){var o=getCfg(n);var n=setCfg(n,ar);return(o==n)?0:1;}
function combinIP2(d){if(d.length!=4)return d.value;var ip=d[0].value+"."+d[1].value+"."+d[2].value+"."+d[3].value;if(ip=="...")
ip="";return ip;}
function combinMAC2(m){var mac=m[0].value+":"+m[1].value+":"+m[2].value+":"+m[3].value+":"+m[4].value+":"+m[5].value;mac=mac.toUpperCase();if(mac==":::::")
mac="";return mac;}
function combinIPV6(d){var ip='';var a=0;var n=d.length;if((n!=4)&&(n!=8))return d.value;for(var i=0;i<n;i++){ip+=(i!=0)?":":"";if((d[i].value=="0000")||(d[i].value==""))a++;ip+=d[i].value;}
if(a==n)ip="";return ip;}
function cfg2Form(f){for(var i=0;i<CA.length;i++){var e=eval('f.'+CA[i].n);if(e){if(e.name=='undefined')continue;if(e.length&&e[0].type=='text'){if(e.length==4){if(decomIPv6(e,CA[i].v)){CA[i].x=1;}else{decomIP2(e,CA[i].v);}}else if(e.length==6){decomMAC2(e,CA[i].v);}
else if(e.length==8){decomIPv6(e,CA[i].v);CA[i].x=1;}}else if(e.length&&e[0].type=='radio'){setIdVal(0,CA[i].v,e);}else{setIdVal(0,CA[i].v,e);}}}}
function decomMAC2(ma,macs,nodef){var re=/^[0-9a-fA-F]{1,2}:[0-9a-fA-F]{1,2}:[0-9a-fA-F]{1,2}:[0-9a-fA-F]{1,2}:[0-9a-fA-F]{1,2}:[0-9a-fA-F]{1,2}$/;var d=['','','','','',''];if(re.test(macs)||macs==''){if(ma.length!=6){setIdVal(0,macs,ma);return true;}
if(macs!=''){d=macs.split(":");}
for(i=0;i<6;i++){setIdVal(0,d[i],ma[i]);}
return true;}
return false;}
function decomIP2(ipa,ips,nodef){var re=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;if(re.test(ips)){var d=ips.split(".");var i=0;for(i=3;i>=0;i--){setIdVal(0,d[i],ipa[i]);}
return true;}
return false;}
function decomIPv6(ipa,ips,nodef){var v;var d=ips.split(":");var n=d.length;if((n!=4)&&(n!=8))return false;var i=0;for(i=(n-1);i>=0;i--){if(d[i]=="")d[i]="0000";setIdVal(0,d[i],ipa[i]);}
return true;}
var frmExtraElm='';function addFormElm(n,v){var set1='<input type=hidden name='+n+' value="'+v+'">\n';frmExtraElm+=set1;}
function form2Cfg(f){for(var i=0;i<CA.length;i++){if(CA[i].i==0)continue;var e=eval('f.'+CA[i].n);if(e){if(e.disabled)continue;if(e.length&&e[0].type=='text'){if(e.length==4){if(CA[i].x){CA[i].v=combinIPV6(e);}else{CA[i].v=combinIP2(e);}}
else if(e.length==6){CA[i].v=combinMAC2(e);}
else if(e.length==8){CA[i].v=combinIPV6(e);}}else if(e.length&&e[0].type=='radio'){for(var j=0;j<e.length;j++){if(e[j].checked){CA[i].v=e[j].value;break;}}}else if(e.type=='checkbox'){setCfg(e.name,(e.checked)?e.value:1-Number(e.value));}else{setCfg(e.name,e.value);}}}}
var OUTF;function frmHead(na,to,cmd,go){OUTF="<FORM name="+na+" action="+to+" target='OUTfrm' method=POST >\n"+"<INPUT type=hidden name='CMD' value='"+cmd+"'>\n"+"<INPUT type=hidden name='GO' value='"+go+"'>\n";}
function frmEnd(){OUTF+="</FORM>\n";}
function frmAdd(n,v){set1="<input type=hidden name='"+n+"' value=\"";v=v.replace(/\"/g,"&quot;");var r=new RegExp(set1+".*\n","g");if(OUTF.search(r)>=0)
OUTF=OUTF.replace(r,(set1+v+"\">\n"));else
OUTF+=(set1+v+"\">\n");}
function addFieldValue(f,v,n){var newElem=document.createElement("input");newElem.name=n;newElem.type="hidden";newElem.value=v;f.appendChild(newElem);}
function genForm(n,to,cmd,g){var sub=0;frmHead(n,to,cmd,g);for(var i=0;i<CA.length;i++){if(CA[i].i==0)continue;if(CA[i].v!=CA[i].o){frmAdd("SET"+sub,String(CA[i].i)+"="+CA[i].v);sub++;}}
if(frmExtraElm.length){OUTF+=frmExtraElm;}
frmExtraElm='';frmEnd();return OUTF;}
function FMW_date_conv(_s){var month=new Array("Jan","Feb","Mar","Apr","May","Jun","July","Ang","Sep","Oct","Nov","Dec");var b=_s.indexOf("(");var e=_s.lastIndexOf(")");var now=new Date(_s.substring(b+1,e));var d_s=month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear();return(_s.substring(0,b)+"("+d_s+")");}
var upgfrm=null;function subForm_T(){if(upgfrm){upgfrm.submit();upgfrm=null;top.G_prog=3;}}
var ErrMsg={"-99":"submit_err_unknow","-8":"submit_err_fmt","-7":"submit_err_sver","-6":"submit_err_sver","-5":"submit_err_sver","-4":"submit_err_sver","-3":"submit_err_sver","-1":"submit_err_fmw","-2":"submit_err_unknow","0":"submit_ok","1":"submit_ok","2":"submit_ok","4":"submit_rsok","8":"submit_fmwok"};function submit_again(){closeModal();SubForm_Next(1);}
function RouterDetect(_cb,_nxt,_wait){rtobj=this;rtobj.cb=_cb;rtobj.jumpnxt=_nxt;rtobj.wait=_wait;rtobj.st=-1;rtobj.WPS=0;rtobj.login=0;rtobj.loginescape=0;rtobj.wanst=0;rtobj.timer=null;rtobj.timeouter=null;rtobj.callback=function(){return(rtobj.cb(rtobj.st));};rtobj.done=function(){clearTimeout(rtobj.timeouter);clearInterval(rtobj.timer);rtobj.timeouter=rtobj.timer=null;if(rtobj.jumpnxt)rtobj.jumpnxt(rtobj.st);};rtobj.docheck=function(){try{$.ajax({type:"GET",contentType:"application/json; charset=utf-8",dataType:"script",timeout:8000,url:pg_dir+"cgi-bin/RouterStatus.api",crossDomain:true,error:function(jqXHR,textStatus,errorThrown){rtobj.st=0;if(rtobj.callback()==1){rtobj.done();}}}).done(function(msg){rtobj.st=parseInt(RouterStatus.Status,10);rtobj.WPS=parseInt(RouterStatus.WPS,10);rtobj.login=parseInt(RouterStatus.login,10);rtobj.loginescape=parseInt(RouterStatus.timout,10);if(parseInt(RouterStatus.cable,10)==0){rtobj.wanst=0;}else if(parseInt(RouterStatus.link,10)==0){rtobj.wanst=1;}else{rtobj.wanst=2;}
if(rtobj.callback()==1){rtobj.done();}});}catch(e){}};rtobj.run=function(){if(!rtobj.timer){rtobj.docheck();}
rtobj.timer=setInterval(function(){rtobj.docheck();},2*1000);rtobj.timeouter=setTimeout(function(){if(rtobj.timeouter){rtobj.done();}},1000*rtobj.wait);};rtobj.stop=function(){rtobj.done();};return rtobj;}
function changeip()
{window.location.href=pg_dir;}
function show_803(){ShowModalURL('','#p803',function(){var detobj=new RouterDetect(function(st){return((st==1)?1:0);},function(st){if(st==1){JumpTo(top.G_next);}else{ShowModalURL('','#p804',function(){detobj=new RouterDetect(function(st){return((st==1)?1:0);},function(st){if(st==1){JumpTo(top.G_next);}else{closeModal(function(){showPage("#Support5",function(){});});}},60);detobj.run();});}},30);detobj.run();});}
function show_802(){ShowModalURL('','#p802',function(){detobj=new RouterDetect(function(st){return((st==1)?1:0);},function(st){if(st==1){JumpTo(top.G_next);}else{ShowModalURL('','#p804',function(){detobj=new RouterDetect(function(st){return((st==1)?1:0);},function(st){if(st==1){JumpTo(top.G_next);}else{closeModal(function(){showPage("#Support4",function(){});});}},60);detobj.run();});}},30);detobj.run();});}
function CheckDUTAlive(){if(access_from!=3){ShowModalURL('','#p801',function(){var detobj=RouterDetect(function(st){return((st==1)?1:0);},function(st){if(st==1){JumpTo(top.G_next);}else{detobj.run();}},15);detobj.run();});}else if(access_from==3)
{if(top.G_cmd.indexOf("WIFI_SSID")!=-1)
{show_803();}
else
{show_802();}}}
function SubForm_Next(flag){top.G_prog=0;top.G_wizard=0;if(flag){return false;}else{if(top.G_URL){top.location.href=URLTimeStamp(top.G_URL);}else{if(top.G_option.done){top.G_option.done();}else{window.location=URLTimeStamp(top.G_option.next);}}}
return false;}
function showWiFi()
{$('[tid=Network24SSID]').text(top.PWS_ssid);$('[tid=Network24Passkey]').text(top.PWS_key);if(top.PWS_key==''){$('.wifinosec').show();$('.wifisec').hide();}
else{$('.wifinosec').hide();$('.wifisec').show();}}
function subForm_Prog(){if(top.G_wizard!=1){ShowModalURL('','#p800',function(){var myclk=new Date();$("#p800Progress").css({width:'0'});$("#submit_again").hide();$(".hide").hide();$('#p800ProgBar').show();$('#submit_run').show();var checkstat=setInterval(function(){var o;var nowclk=new Date();var secs=top.G_wait-Math.ceil((nowclk-myclk)/1000);if(top.G_prog==99){dev_debug(' err:'+top.G_err+' ssid:'+top.PWS_ssid+' key:'+top.PWS_key);clearInterval(checkstat);showWiFi();var err=top.G_err;o=ErrMsg[''+err];if(!o){err=-99;ErrMsg[''+err];}
$("#"+o).show();$("#submit_run").hide();if(err<0){$('#p800ProgBar').hide();$("#p800Progress").stop();$("#submit_prg").hide();$("#submit_again").show();}
if(access_from!=2&&top.G_ip!=top.G_svrip){pg_dir='http://'+top.G_ip+'/';top.G_next=pg_dir;}}},1000);$("#p800Progress").animate({width:'100%'},top.G_wait*1000,function(){{if(top.G_err>=0){CheckDUTAlive();}}});subForm_T();});}else{subForm_T();var _go_next=function(){if($.isFunction(top.G_next)){top.G_next();}else{window.location=top.G_next;}
top.G_prog=0;}
var watch_timer;var checkstat=setInterval(function(){if(top.G_prog==99){clearInterval(checkstat);clearTimeout(watch_timer);setTimeout(_go_next,top.G_wait*1000);}},1000);watch_timer=setTimeout(function(){dev_debug('Submit error.');clearInterval(checkstat);_go_next();},30*1000)}
top.G_wizard=0;}
top.G_prog=-2;top.G_next='';top.G_wizard=0;top.G_err=0;top.G_errmsg="";top.G_wait=0;top.G_cmd="";var subform_callback;function preSubform()
{if(top.G_prog==-2){top.G_prog=-1;loadPage("Support4-ReconnectAfterSettingsChange.htm","#Support4",function(){$('#Support4TryAgain').click(function(){show_802();return false;});loadPage("Support5-ReconnectAfterSsidChange.htm","#Support5",function(){$('#Support5TryAgain').click(function(){show_803();return false;});ShowModalURL('800-ApplyingSettings.htm',function(){top.G_prog=0;if(subform_callback)subform_callback();});});});}}
function subForm(_f,_go,_cmd,_wait,_no_frm){if(top.G_prog>0)return false;if(top.G_prog<0){if(top.G_wizard!=1){subform_callback=function(){subForm(_f,_go,_cmd,_wait,_no_frm);};if(top.G_prog==-2)preSubform();return false;}}
top.G_prog=1;var msg="";var go=_go;top.G_next=go;top.G_err=0;top.G_wait=_wait;top.G_cmd=_cmd;var newElem=$I("OUTdiv");if(!newElem){newElem=document.createElement("div");newElem.id="OUTdiv";newElem.width="100%";document.body.appendChild(newElem);}
upgfrm=_f;setTimeout("subForm_Prog()",10);return false;}
function getFieldValue(Obj){if(!Obj)return'';var typ=Obj.type;if(!typ&&Obj.length){typ=Obj[0].type;}
switch(typ){case"radio":case"checkbox":if(Obj.length){for(var j=0;j<Obj.length;j++){if(Obj[j].checked)return Obj[j].value;}}else{if(Obj.checked)return Obj.value;}
return null;break;case"select-one":case"select-multiple":for(var j=0;j<Obj.options.length;j++){if(Obj.options[j].selected){return(Obj.options[j].value);}}
return null;break;case"password":case"textarea":case"text":case"hidden":default:return Obj.value;break;}}
function getFieldIntVal(obj){var v=getFieldValue(obj);if(v!=null)
return parseInt(v,10);}
function SetTitle(_til){document.title=_til;}
function setIdVal(_id,val,fieldObj,dbg){var ElemObj,cElemObj;var str,txt;if(fieldObj){ElemObj=fieldObj;var newElemObj=ElemObj.parentNode;var typ=ElemObj.type;if(!typ&&ElemObj.length){typ=ElemObj[0].type;newElemObj=ElemObj[0].parentNode;}
switch(typ){case"radio":case"checkbox":txt='';if(ElemObj.length){for(var j=0;j<ElemObj.length;j++){ElemObj[j].checked=ElemObj[j].defaultChecked=(ElemObj[j].value==val);if(ElemObj[j].checked){cElemObj=ElemObj[j];}}
if(!cElemObj)cElemObj=ElemObj[0];}else{ElemObj.checked=ElemObj.defaultChecked=(ElemObj.value==val);cElemObj=ElemObj;}
txt=ElemObj.innerHTML;_id=cElemObj.id;if(_id){str=getLangM(_id);if(str){txt=str;}}
break;case"select-one":case"select-multiple":var findIdx=0;txt='-';for(var j=0;j<ElemObj.options.length;j++){ElemObj.options[j].selected=ElemObj.options[j].defaultSelected=(ElemObj.options[j].value==val);if((ElemObj.options[j].value==val)==true){findIdx=1;ElemObj.options.selectedIndex=j;}}
if(!findIdx&&(ElemObj.options.length!=0)){ElemObj.options.selectedIndex=0;ElemObj.options[0].selected=ElemObj.options[0].defaultSelected=true;}
break;case"password":case"textarea":case"text":ElemObj.defaultValue=ElemObj.value=HTML2str(val);break;case"hidden":ElemObj.defaultValue=ElemObj.value=HTML2str(val);case"button":case"submit":ElemObj.value=val;if(dbg)ElemObj.style.border="dashed #ff0000 2px";break;default:ElemObj.innerHTML=HTML2str(val);if(dbg)ElemObj.style.border="dashed #ff0000 2px";break;case"file":break;}}else{if("object"==typeof(_id)){ElemObj=_id;}else{ElemObj=document.getElementById(_id);}
if(ElemObj){if(ElemObj.type=="button"||ElemObj.type=="submit"||ElemObj.type=="text"||ElemObj.type=="password")
ElemObj.value=val;else{ElemObj.innerHTML=val;}}}
return 1;}
function SetFieldValue(ElemObj,val){setIdVal(0,val,ElemObj);}
function fromCfg(elm,cfg){SetFieldValue(elm,getCfg(cfg));}
function getQueryValue(name){var v=null;var query=location.search;if(name.charAt(0)=="#"){query=location.href;if(query.indexOf(name)!=-1){return 1;}
return 0;}
if(query=="")return"";if(query.charAt(0)=="?"){query=query.substr(1,query.length);}
var arr=query.split(/[\&]/);var index;for(var x=0;x<arr.length;x++){index=arr[x].indexOf(name);if(index!=0)continue;v=1;}
return v;}
function getIntQueryValue(_name,_def){var r;var q=getQueryValue(_name);if(q=='')r=_def;else r=parseInt('0'+q,10);return r;}
function setQueryValue(_name,_val,_s)
{var q=location.search;if(null!=_s)q=_s;q=q.replace(/^.*[\?]/,"");return mergeQueryValue("?"+q,"?"+_name+"="+_val,0);}
function mergeQueryValue(_q1,_q2,_q1_first){var q1=_q1;var q2=_q2;var rtn="";var x,y;if((x=q1.indexOf("?"))!=-1){q1=q1.substr(x+1,q1.length);}else{q1="";}
if((x=q2.indexOf("?"))!=-1){q2=q2.substr(x+1,q2.length);}else{q2="";}
if((q1.length==0)||(q2.length==0))
return(q1+q2);var arr1=q1.split(/[\&]/);var arr2=q2.split(/[\&]/);var lookup={};if(_q1_first==0){for(x=0;x<arr1.length;x++){arr1[x]=arr1[x].split("=");lookup[arr1[x][0]]=arr1[x][1];}}
for(x=0;x<arr2.length;x++){arr2[x]=arr2[x].split("=");lookup[arr2[x][0]]=arr2[x][1];}
if(_q1_first==1)
{for(x=0;x<arr1.length;x++){arr1[x]=arr1[x].split("=");lookup[arr1[x][0]]=arr1[x][1];}}
rtn="";for(var x in lookup){rtn+="&"+x+"="+lookup[x];}
rtn=rtn.substring(1);return rtn;}
function HTML2str(_str){var s=unescape(_str);return(s);}
var noC=[":",",",".","-",";"];function str2HTML(_str){var v=escape(_str);var h;for(var x in noC){h=(noC[x].charCodeAt(0)).toString(16);v=v.replace(eval("RegExp(/%"+h+"/ig)"),noC[x]);}
v=v.replace(eval("RegExp(/[\+]/ig)"),"%2B");return v;}
function getObj(_obj,_attr,_val){var a={t:0,o:_obj};if("string"==typeof(_obj)){a={t:1,o:$('#'+_obj)};}
return(a.o)?a:null;}
function DisplayObject(_obj){var e;if((e=getObj(_obj))){if(e.t)
e.o.show();else{e.o.style.display="";e.o.style.visibility="visible";}}}
function HiddenObject(_obj){var e;if((e=getObj(_obj))){if(e.t){e.o.hide();}else{e.o.style.display="none";e.o.style.visibility="hidden";}}}
function DisableObject(_obj){var e;if((e=getObj(_obj))){if(e.t){if(e.o.attr('href')){NoClick(_obj);}else{e.o.attr('disabled','disabled');}}else{e.o.disabled=true;}}}
function EnableObject(_obj){var e;if((e=getObj(_obj))){if(e.t){if(e.o.attr('href')){AllowClick(_obj);}else{e.o.removeAttr('disabled');}}else{e.o.disabled=false;}}}
function ReadOnly(_obj){var e;if((e=getObj(_obj))){if(e.t){if(e.o.attr('href')){NoClick(_obj);}else{e.o.attr('readonly',true);}}else{e.o.disabled=true;if(e.o.type!="button")
e.o.style.backgroundColor="#ECEAE4";}}}
function WriteAllow(_obj){var e;if((e=getObj(_obj))){if(e.t){if(e.o.attr('href')){AllowClick(_obj)}
else{e.o.removeAttr("readonly")}}else{e.o.disabled=false;if(e.o.type!="button")
e.o.style.backgroundColor="#ffffff";}}}
function NoHyperLink(_obj){var e;if((e=getObj(_obj))){if(e.t){e.o=$I(_obj);}
var obj=e.o.parentNode;var lnk=obj.getElementsByTagName('a');for(var i=lnk.length-1;i>=0;i--){var h=document.createElement("font");h.innerHTML=lnk[i].innerHTML;obj.replaceChild(h,lnk[i]);}}}
function HyperClick(e){var obj=e.o;if(obj.attr('disabled')){return false;}
var f=obj.attr('nohyper');return eval(f);}
function NoClick(_obj){var d;if((d=getObj(_obj))){d.o.attr('nohyper',d.o.attr('onclick'));d.o.attr('disabled','disabled');d.o.removeAttr('onclick');d.o.bind('click',function(e){return HyperClick(d)});}}
function AllowClick(_obj){var e;if((e=getObj(_obj))){if(e.o.attr('nohyper'))
e.o.attr('onclick',e.o.attr('nohyper'));e.o.removeAttr('ohyper');e.o.removeAttr('disabled');}}
function URLTimeStamp(url){if(!url)return;var tt=new Date().getTime();var s="";var i=url.indexOf("?");if(i!=-1){s=url.substring(i);url=url.substring(0,i);}
url=url+"?"+setQueryValue("t",tt,s);return(url);}
function JumpTo(_url){if(!_url||_url=='')_url='dashboard.stm';if(_url==cPage)document.location.reload(true);else window.location=_url;return false;}
function JumpISP(_url){window.location="ISP.htm#"+_url;if((_url=="ISP5")||(_url=="ISP6"))
SetCookie("ispJump","1");else
DeleteCookie("ispJump");return false;}
var rowcls=["","",""];function Table_add_row(tableid,rowary,_flag){var aCell,aRow,i,imgH;var aCols=parseInt(rowary[0][0],10);var aRowid=parseInt(rowary[0][1],10);var clsid=aRowid%2;var aRowF=parseInt(rowary[0][2],10)+aRowid;var rowcnt=0;var flag=1;if("undefined"!=typeof(_flag))flag=_flag;if(null==document.getElementById(tableid)){alert("ER:"+tableid);return 0;}
aRow=document.getElementById(tableid).insertRow(aRowF+rowcnt);for(i=0;i<rowary[1].length;i++){if(!rowary[1][i][0])break;aCell=aRow.insertCell(-1);if(rowary[1][i][0]!=1)
aCell.setAttribute("colSpan",rowary[1][i][0]);if(flag==1){aCell.className=rowcls[clsid];}
if(rowary[1][i].length>2){for(var x in rowary[1][i][2]){if(x=="className"){aCell.className=rowary[1][i][2][x];}else{aCell.setAttribute(x,rowary[1][i][2][x]);}}}
aCell.innerHTML=rowary[1][i][1];}
rowcnt++;return rowcnt;}
function Table_del_row(tableid,rowidx,rowcount,_flag){if(_flag){while(document.getElementById(tableid).rows.length>rowidx){document.getElementById(tableid).deleteRow(-1);}}else{for(var i=0;i<rowcount;i++)
document.getElementById(tableid).deleteRow(rowidx);}}
function Table_get_rows(tableid){return document.getElementById(tableid).rows.length;}
var Lang_List=cgi_lang_list.split(" ");var Lang={0:["EN",'English',"utf-8","en"],1:["DE",'Deutsch',"utf-8","de"],2:["FR",'Fran&#xe7;ais(France)',"utf-8","fr"],3:["ES",'Espa&#xf1;ol',"utf-8","es"],4:["NL",'Nederlands',"utf-8","nl"],5:["IT",'Italiano',"utf-8","it"],6:["CN",'&#x4e2d;&#x6587;&#xff08;&#x7b80;&#x4f53;&#xff09;',"utf-8","zh-Hans,zh-cn,zh"],7:["TW",'&#x4e2d;&#x6587;&#xff08;&#x7e41;&#x9ad4;&#xff09;',"utf-8","zh-Hant,zh-hk,zh-mo,zh-tw"],8:["JP",'&#26085;&#26412;&#35486;',"utf-8","ja"],9:["KO",'&#xD55C;&#xAD6D;&#xC758;',"utf-8","ko"],10:["TR",'T&#xfc;rk',"utf-8","tr"],11:["PT",'Portugu&#xea;s',"utf-8","pt"],12:["RU",'&#1088;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;',"utf-8","ru"],13:["EL",'&#949;&#955;&#955;&#951;&#957;&#953;&#954;&#940;',"utf-8","el"],14:["SV",'Svenska',"utf-8","sv"],15:["NO",'Norske',"utf-8","no"],16:["DA",'Dansk',"utf-8","da"],17:["FI",'Suomi',"utf-8","fi"],18:["BR","Portugu&#xea;s(Brasil)","utf-8","pt-BR"],19:["MX",'Espa&#xf1;ol(M&#xe9;xico)',"utf-8","es-MX,es-419,es-ar,es-bo,es-cl,es-co,es-cr,es-ec,es-sv,es-gt,es-hn,es-ni,es-pa,es-py,es-pe,es-pr,es-ve,es-do,es-uy,es-us"],20:["CA",'Fran&#xe7;ais(Canada)',"utf-8","fr-CA,fr-us"]};function chkLang(_idx){if(!Lang[_idx]){for(var x in Lang){_idx=x;break;}}
for(var i in Lang_List){if(Lang[_idx][0]==Lang_List[i]){return _idx;}}
return 0;}
function GetLang(_mod){var id=GetCookie("lang");id=(id)?id:0;id=chkLang(id);if(_mod)
return(Lang[id][0]);else
return id;}
function GetLangISO(){var id=GetCookie("lang");id=(id)?id:0;id=chkLang(id);var iso=Lang[id][3].split(',');if(iso){return iso[0];}else{return"en";}}
function GetAccpLangId(){var lang_a=pc_lang.split(" ");var xlang,idx,id;for(var x in lang_a){xlang=lang_a[x].toUpperCase();idx=findAccpLangIdx(xlang);id=Lang[idx][0];for(var y in Lang_List){if(id==Lang_List[y])return id;}}
return Lang[0][0];}
function GetLangChar(){var id=GetLang(0);return(Lang[id][2]);}
function findLangIdx(_lang){for(var i in Lang){if(Lang[i][0]==_lang){return i;}}
return-1;}
function findAccpLangIdx(_lang){for(var i in Lang){if(!i)break;var s=Lang[i][3].split(',');if(s){for(var x in s){if(_lang==s[x].toUpperCase())return i;}}}
return 0;}
function findLang(_idx){var id=chkLang(_idx);return Lang[id][0];}
function SetLang(_id){var idx=chkLang(_id);SetCookie("lang",idx);return(idx);}
function ConfirmM(_s){return confirm(getLangC(_s));}
function AlertM(_s){alert(getLangC(_s));}
function ShowalertM(_id,_s){if(_s){$(_id).html(_s);}
$(_id).fadeTo(200,1);}
function HidealertM(_id){$(_id).hide();}
function getLangAM(_ar){var a=[];for(var x in _ar){a[x]=getLangC(_ar[x]);}
return a;}
function getLangM(_id){if(LangM){for(var x=0;x<LangM.length;x++){try{if(LangM[x][_id]){return LangM[x][_id];}}catch(e){}}}
return null;}
function getLangC(_id){var s=getLangM(_id);if(null==s)
return _id;else
return s;}
var wpswin=null;function popwpsWin()
{wpswin=window.open('wifi_wps_p.stm','WPS','toolbar=0,status=0,menubar=0,scrollbars=1,resizable=1,width=300,height=200,left=150,top=150,resizable=0,depended=1,location=1');wpswin.focus();}
function SetTitle(_til){top.document.title=_til;}
function getcPage(){return(window.location.toString().replace(/.*[\/]/,'').replace(/[#].*/,'').replace(/[\?].*/,''));}
function getcPageName(){var pg=window.location.toString();return pg.replace(/.*[\/]/,'').replace(/[\.].*$/,'');}
var last_islogin=("undefined"!=typeof(G_main))?-1:1;var last_wanisconnected=0;var LangM=[];if("undefined"==typeof(LangJ))LangJ=[];if("undefined"==typeof(CGIs))CGIs=[];var pg_lang=(GetLang(1)).toLowerCase();var pg=getcPageName();var pg_charset=GetLangChar();var pg_dir=(((window.location.toString()).indexOf("dashboard")!=-1)?"../":"");var cPage=getcPage();/*END_JS_PACKER*/