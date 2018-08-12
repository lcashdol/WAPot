
function toHEXString(hex){var value='';hex&=0xFF;var v1=Math.floor(hex/16);var v2=hex%16;if(v1>=10)
value+=''+String.fromCharCode(65+(v1-10));else
value+=''+v1;if(v2>=10)
value+=''+String.fromCharCode(65+(v2-10));else
value+=''+v2;return value;}
var WEP_1X=0;var WEP_MOD=1;var WEP_KEY=2;var WEP_AUTH=3;var WEP_PHAS=4;var WEP_KEYSZ=5;var WEP_KEYS=6;function getWEPAry(idx){var k=DUAL_MODE[idx][DUAL_WL_BAND];k=((k==0)?'':k);var wep=[];wep[WEP_1X]='0';wep[WEP_MOD]=getCfg("wifi_encryptype"+k);wep[WEP_KEY]=getCfgInt("wifi_wep_keyidx"+k)-1;if(wep[WEP_KEY]>3)wep[WEP_KEY]=0;wep[WEP_AUTH]=getCfg("wifi_authmode"+k);wep[WEP_PHAS]='0';wep[WEP_KEYSZ]=getCfgInt("wifi_wep_keylen"+k);wep[WEP_KEYS]=getCfg("wifi_wep128_key"+k);wep[WEP_KEYS+1]='';for(var i=1;i<=4;i++)
wep[WEP_KEYS+1]+=getCfg("wifi_wep64_key"+k+i);return wep;}
function setWEPAry(idx,wep){var k=DUAL_MODE[idx][DUAL_WL_BAND];k=((k==0)?'':k);var i=0;setCfg("wifi_radius"+k,'0');setCfg("wifi_authmode"+k,'WEPAUTO');setCfg("wifi_encryptype"+k,'WEP');setCfg("wifi_wep_keymode"+k,'0');setCfg("wifi_wep_keylen"+k,wep[WEP_KEYSZ]);if(wep[WEP_KEYSZ]==26){setCfg("wifi_wep_keyidx"+k,'1');setCfg("wifi_wep128_key"+k,wep[WEP_KEYS]);setCfg("wifi_wep_key1"+k,wep[WEP_KEYS]);for(i=2;i<=4;i++)
setCfg("wifi_wep_key"+k+i,'');}else{setCfg("wifi_wep_keyidx"+k,parseInt(wep[WEP_KEY],10)+1);var keys=wep[WEP_KEYS+1];var cut=0;for(i=1;i<=4;i++){cut=(i-1)*10;setCfg("wifi_wep_key"+k+i,keys.substring(cut,cut+10));setCfg("wifi_wep64_key"+k+i,keys.substring(cut,cut+10));}}}
function Get64bitkey(phrasekey){var phrase=phrasekey.phrase;var i,j,ps0,ps1,ps2,ps3,k;var len=phrase.length;if(len<=0){return-1;}
ps0=ps1=ps2=ps3=0;for(i=0;i<len;i++){switch(i%4)
{case 0:ps0^=(phrase.charCodeAt(i)&0x00FF);break;case 1:ps1^=(phrase.charCodeAt(i)&0x00FF);break;case 2:ps2^=(phrase.charCodeAt(i)&0x00FF);break;case 3:ps3^=(phrase.charCodeAt(i)&0x00FF);break;}}
var randNumber=(ps0&0xFF)|((ps1&0xFF)<<8)|((ps2&0xFF)<<16)|((ps3&0xFF)<<24);var k_s='';for(i=0;i<4;i++){for(j=0;j<5;j++){randNumber*=0x343fd;randNumber+=0x269ec3;randNumber&=0xFFFFFFFF;k_s+=toHEXString((randNumber>>16)&0x7fff);}}
phrasekey.keys=k_s;return 0;}
function Fill64keys(obj,keys){var k;for(var i=0;i<obj.length;i++){k=keys.substring(i*2,i*2+2);SetFieldValue(obj[i],k);}}
function Get128bitkey(phraseKey){var md5key="";var key='';var phase=phraseKey.phrase;var len=phase.length;if(len<=0){return-1;}
for(var i=0;i<64;i++){j=i%len;t=phase.charAt(j);key=key.concat(t);}
md5key=calcMD5(key);phraseKey.keys=md5key.toUpperCase();return 0;}
function Fill128keys(obj,keys){var k;for(var i=0;i<obj.length;i++){k=keys.substring(i*2,i*2+2);SetFieldValue(obj[i],k);}}
var WPA_ENCR=0;var WPA_MOD=1;var WPA_PSK=2;var WPA_PH=3;var WPA_OBS=4;var WPA_KEY=5;function getWPACfg(idx){var k=DUAL_MODE[idx][DUAL_WL_BAND];k=((k==0)?'':k);var wpa=[];var setting;setting=getCfg("wifi_encryptype"+k);if(setting=="TKIP")
wpa[WPA_ENCR]=1;else if(setting=="AES")
wpa[WPA_ENCR]=2;else
wpa[WPA_ENCR]=3;setting=getCfg("wifi_authmode"+k);if(setting=="WPAPSK")
wpa[WPA_MOD]=1;else if(setting=="WPA2PSK")
wpa[WPA_MOD]=2;else
wpa[WPA_MOD]=3;setting=getCfg("wifi_radius"+k);if(setting=='1')
alert("Enterprise mode not implement yet");wpa[WPA_PSK]=1;wpa[WPA_PH]=1;wpa[WPA_OBS]=getCfg("wifi_wpa_obscure"+k);wpa[WPA_KEY]=getCfg("wifi_wpa_key1"+k);return wpa;}
function setWPACfg(idx,wpa){var k=DUAL_MODE[idx][DUAL_WL_BAND];k=((k==0)?'':k);var wpa_mod=parseInt(wpa[WPA_MOD],10);if(parseInt(wpa[WPA_PSK],10)==1)
{setCfg("wifi_radius"+k,'0');if(wpa_mod==1)
setCfg("wifi_authmode"+k,"WPAPSK");else if(wpa_mod==2)
setCfg("wifi_authmode"+k,"WPA2PSK");else
setCfg("wifi_authmode"+k,"WPAPSKWPA2PSK");}else{setCfg("wifi_radius"+k,'1');if(wpa_mod==1)
setCfg("wifi_authmode"+k,"WPA");else if(wpa_mod==2)
setCfg("wifi_authmode"+k,"WPA2");else
setCfg("wifi_authmode"+k,"WPAWPA2");}
if(parseInt(wpa[WPA_ENCR],10)==1)
setCfg("wifi_encryptype"+k,"TKIP");else if(parseInt(wpa[WPA_ENCR],10)==2)
setCfg("wifi_encryptype"+k,"AES");else
setCfg("wifi_encryptype"+k,"TKIPAES");setCfg("wifi_wpa_obscure"+k,wpa[WPA_OBS]);setCfg("wifi_wep_keyk"+k,"2");setCfg("wifi_wpa_key1"+k,wpa[WPA_KEY]);}