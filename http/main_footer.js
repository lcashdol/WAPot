
$W('<div class="footer-main container">');$W('<div class="row">');$W('<div class="twelve columns">');$W('<div class="row">');$W('<div class="twelve columns show-on-phones">');$W('<img src="../images/logo.png" class="logo" alt="Belkin"><br>');$W('</div>');$W('</div>');$W('<div class="row">');$W('<div id="commem" class="eight columns">');$W('<div id="dfNotConnected" style="display:none">');$W("<h5 tid='dft001'>It looks like you\'re not connected. </h5><p tid='dft002'>If you need support and have a connected device, visit <strong>help.belkin.com</strong>. </p>");$W('</div>');$W('<div id="dfConnected">');$W("<h5 tid='dft003'>Need Help? </h5><p><span tid='dft004'>Have a question or need some support? You can get 24-hour help in our online help center. </span><br /><a href='http://www.belkin.com/support/' target='_blank'><span tid='dft005'>Belkin Help Center</span> &rarr;</a></p>");$W('</div>');$W('</div>');$W('<div class="four columns">');if("undefined"!=typeof(G_main)){$W('<form name="tFLANG" id="pmainf000" style="display:none">');$W('<span tid="gtSelectLang">Select language:</span>');$W('<select style="display: inline;" id="pmainf0001"  name="lang_id"></select><br /></form>');}
$W('<span tid="gtCopyright">Copyright &copy; 2012. Belkin, All Rights Reserved. </span>');$W('</div>');$W('</div>');$W('</div>');$W('</div>');$W('</div>');$W('<div id="submitploader"><div id="progploader" class="large reveal-modal"></div></div>');$W('<div id="preloader" class="hide"></div>');$W('<iframe style="position:absolute;left:-100px;top:-100px;width:0px;height:0px;" name="OUTfrm" src="" width=0 height=0></iframe>');$W('<span class="desc"><a href="#dev" onClick="return toggle_debug(1)" id="devflag"></a></span>');$W('</body>');$W('</html>');var WANLNKST={'2':['online','Online'],'1':['offline2','Offline'],'0':['offline','Disconnected']};var ADMINST={'1':['locked','locked'],'0':['unlocked','unlocked']};var retry_num=0;var wandetobj=new RouterDetect(function(st){var msg=WANLNKST[''+wandetobj.wanst][1];var cs2=WANLNKST[''+wandetobj.wanst][0];var obj=$('.status');if(top.m_ap_mode==1){obj.css('visibility','hidden');}else{$.each(WANLNKST,function(i,n){obj.removeClass(n[0]);});obj.addClass(cs2).children().html(msg);if($.browser.msie){st_cor=obj.css('backgroundColor');obj=$I("IE_WANST");obj.fillcolor=st_cor;obj.strokecolor=st_cor;}
if(wandetobj.wanst==0){if($('#p1010').css('display')=='none')
$('#p1010').show();$('#p1020').hide();}else if(wandetobj.wanst==1&&retry_num++>2){if($('#p1020').css('display')=='none')
$('#p1020').show();$('#p1010').hide();}else{$('#p1010,#p1020').hide();}
if(wandetobj.wanst!=1)retry_num=0;}
var l=1;if((wandetobj.login)>=0)l=0;msg=ADMINST[''+l][1];cs2=ADMINST[''+l][0];obj=$('.settings');obj.children().html(msg);if(l)
obj.removeClass('unlocked');else
obj.addClass('unlocked');if(last_islogin!=wandetobj.login){last_islogin=wandetobj.login;if(l)JumpTo();}
if(last_islogin==-1)
setIdVal("BandPasswd",show_key);else
$("#BandPasswd").text(PWS_key);if(top.m_ap_mode==0){if(wandetobj.wanst!=2){$('#dfConnected').hide();$('#dfNotConnected').show();}else{$('#dfNotConnected').hide();$('#dfConnected').show();}
if(wandetobj.wanst!=last_wanisconnected){last_wanisconnected=wandetobj.wanst;if("undefined"!=typeof(G_main))
show_LANG(Show_FMW);}}
return 1;},null,10);function ShowWANState(){var my_wait=10;if(top.G_prog<=0&&!top.G_boot){wandetobj.stop();wandetobj.run();my_wait=5;}
setTimeout("ShowWANState()",my_wait*1000);}
function do_logout()
{$.post("/cgi-bin/logout.exe",function(){JumpTo();});}
$(function(){ShowWANState();$('.settings').click(function(){if(last_islogin==1){ShowModalURL("login.htm","#p1201",function(){setPass();});return false;}
do_logout();return false;});$("#dhSSID").text(PWS_ssid);});var WIFI_SC={'0':'Disabled','1':'WEP','2':'WPA/WPA2-Personal (PSK)'};function get_wifi_sc_str(){return WIFI_SC[get_wifi_uimode()];}
function get_wifi_uimode(mod){switch(mod){case 1:return 0;case 2:return 1;default:return 2;}}