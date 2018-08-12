
var voipprovname=new Array("VoIP Account","Other offerer");var voipprovtxt1=new Array("DSL Telephone number","Internet call number");var voipprovtxt2=new Array("E-Mail-Adresse","User name");var voipprovtxt3=new Array("Password (Web password)","Password");var voipprovtxt4=new Array("","Registrar");var voipprovovnr=new Array(true,true);var voipprovdtmf=new Array(false,true);var anz_msn=10;var anz_as=2;var anz_kuwa=0;var pstnfkt=true;function isBlank(s)
{for(i=0;i<s.length;i++)
{c=s.charAt(i);if((c!=' ')&&(c!='\n')&&(c!='\t'))return false;}
return true;}
function isHasBlank(s)
{return(/\s/.test(s));}
function isHasSpace(s){for(i=0;i<s.length;i++){c=s.charAt(i);if((c==' ')||(c=='\t'))return true;}
return false;}
function isBlank_allow_space(s)
{for(i=0;i<s.length;i++)
{c=s.charAt(i);if((c!='\n')&&(c!='\t'))return false;}
return true;}
function isBlank_empty(s)
{for(i=0;i<s.length;i++)
{c=s.charAt(i);if((c!='\n')&&(c!='\t'))return false;}
return true;}
function isEmpty(s)
{c=s.length;if((c==''))return true;}
function isBlank_Zero(s)
{for(i=0;i<s.length;i++){c=s.charAt(i);if((c!=' ')&&(c!='\n')&&(c!='\t')&&(c!='0'))return false;}
return true;}
function isNValidInt(s)
{var i,c;for(i=0;i<s.length;i++){c=s.charCodeAt(i);if((c<48)||(c>57))
return true;}
return false;}
function isNegInt(s)
{if(s<0)
return true;else
return false;}
function isNValidIP(s){if((isBlank(s))||(isNaN(s))||(isNValidInt(s))||(isNegInt(s))||(s<0||s>255))
return true;else
return false;}
function isNValidLastIP(s){if((isBlank(s))||(isNaN(s))||(isNValidInt(s))||(isNegInt(s))||(s<1||s>254))
return true;else
return false;}
function isNValidPort(s){if((isBlank(s))||(isNaN(s))||(isNValidInt(s))||(isNegInt(s))||(s<1||s>65535))
return true;else
return false;}
function isNValidPortAllowZero(s){if((isBlank(s))||(isNaN(s))||(isNValidInt(s))||(isNegInt(s))||(s<0||s>65535))
return true;else
return false;}
function is2Hex(s){var j,x=0;for(var i=0;i<s.length;i++){var c=s.charAt(i);j=parseInt(c,16);if(j>=0&&j<=15){if(x==1)return false;x=1;}}
return true;}
function isHex(s){var j,x=0;for(var i=0;i<s.length;i++){var c=s.charAt(i);j=parseInt(c,16);if(!(j>=0&&j<=15)){x=1;}
if(x==1)return false;}
return true;}
function isNValid(s){if(isBlank(s)||is2Hex(s))
return true;else
return false;}
function isNValids(s){if(isBlank(s)||isHex(s))
return true;else
return false;}
function MM_openBrWindow(theURL,winName,features){window.open(theURL,winName,features);}
function getElementsByFieldName(target_form,field)
{var i;var form;var value;if(target_form==null||field==null)return-1;for(i=0;i<target_form.length;i++)
{if(target_form.elements[i].name==field)
return i;}
return-1;}
function isNValidNum(s){if((isBlank(s))||(isNaN(s))||(isNValidInt(s))||(isNegInt(s)))
return true;else
return false;}
function isNValidNum_ZERO(s){if((isNaN(s))||(isNValidInt(s))||(isNegInt(s)))
return true;else
return false;}
function isNValidUnicastIP(s){if((isBlank(s))||(isNaN(s))||(isNValidInt(s))||(isNegInt(s))||(s<=0||s>=224))
return true;else
return false;}
function isSpecialChar(s,name){var src=new String(s);var lst=new String("\\\"\'\/");var i,n;n=lst.length;for(i=0;i<n;i++){var c=lst.charAt(i);var tmpS=new String(c);if(src.indexOf(tmpS)!=-1){alert(name+": \\ , \" , \/ and \' are invalid.");return true;}}
return false;}
function checkIPAddr(dstText)
{data=dstText.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/);if(!data||!dstText)return false;return true;}
function chkisValidIP(addr)
{var sub_addr;var net_id;var host_id;if(addr.search(/^\d{1,3}\.\d{1,3}\.\d{1,3}\./)==-1)
return false;sub_addr=addr.split(/\./);if(sub_addr.length<4)return false;if(sub_addr[3]=="*")
sub_addr[3]="1";else
{if(isNaN(sub_addr[3])==true)return false;}
if(sub_addr[0]>0xff||sub_addr[1]>0xff||sub_addr[2]>0xff||sub_addr[3]>0xff)
return false;if(sub_addr[0]<128)
{if(sub_addr[0]==0||sub_addr[0]==127)
return false;host_id=sub_addr[1]*0x10000+sub_addr[2]*0x100+sub_addr[3]*0x1;if(host_id==0||host_id==0xffffff)
return false;}
else if(sub_addr[0]<192)
{host_id=sub_addr[2]*0x100+sub_addr[3]*0x1;if(host_id==0||host_id==0xffff)
return false;}
else if(sub_addr[0]<224)
{host_id=sub_addr[3]*0x1;if(host_id==0||host_id==0xff)
return false;}
else
{return false;}
return true;}
function checkEMail(dstText)
{data=dstText.match(/^\S+@\S+\.\S+$/);if(!data||!dstText)return false;return true;}
function checkIPwithSubnet(strIP,ulLan_ip,ulLan_mask,bBelongTo){var ulLan_ID,ulIP,ulMaskedIP;var ulLan_Broadcast;if(!isValidIP(strIP))return false;if(vlan_func_enable==0){ulLan_ID=ulLan_ip&ulLan_mask;if(ulLan_ID<0)ulLan_ID+=0x100000000;ulLan_Broadcast=ulLan_ID+(0xffffffff^ulLan_mask);ulIP=IpToLong(strIP);ulMaskedIP=ulIP&ulLan_mask;if(ulMaskedIP<0)ulMaskedIP+=0x100000000;if(bBelongTo==false){if(ulLan_ID==ulMaskedIP)
return false;return true;}
if((ulLan_ID!=ulMaskedIP)||(ulIP==ulLan_ID)||(ulIP==ulLan_ip)||(ulIP==ulLan_Broadcast))
return false
return true;}else{var i,ulLan_ip1,ulLan_mask1;for(i=0;i<4;i++){ulLan_ip1=ulLan_ip[i*4]*0x1000000+ulLan_ip[i*4+1]*0x10000+ulLan_ip[i*4+2]*0x100+ulLan_ip[i*4+3];if(ulLan_ip1==0)continue;ulLan_mask1=ulLan_mask[i*4]*0x1000000+ulLan_mask[i*4+1]*0x10000+ulLan_mask[i*4+2]*0x100+ulLan_mask[i*4+3];ulLan_ID=ulLan_ip1&ulLan_mask1;if(ulLan_ID<0)ulLan_ID+=0x100000000;ulLan_Broadcast=ulLan_ID+(0xffffffff^ulLan_mask1);ulIP=IpToLong(strIP);ulMaskedIP=ulIP&ulLan_mask1;if(ulMaskedIP<0)ulMaskedIP+=0x100000000;if(bBelongTo==false){if(ulLan_ID==ulMaskedIP)
return false;}else{if((ulLan_ID==ulMaskedIP)&&(ulIP!=ulLan_ID)&&(ulIP!=ulLan_ip1)&&(ulIP!=ulLan_Broadcast))
return true;}}
if(bBelongTo==false)
return true;else
return false;}}
var tcp_proto=6;var udp_proto=17;var both_proto=0;var icmp_proto=1;var ADDRESS_MAP_NUMBER_PER_INTERFACE=16;var ADDRESS_MAP_TOTAL_COUNT=16;var VIRTUAL_SERVER_NUMBER_PER_INTERFACE=20;var VIRTUAL_SERVER_TOTAL_COUNT=20;var DMZ_NUMBER_PER_INTERFACE=16;var DMZ_TOTAL_COUNT=16;var PORT_MAX=5,IP_MAX=1;var MAX_PPPOE_SESSION=4;function PORT_RANGE()
{this.protocol=0;this.b_port=0;this.e_port=0;};function IP_RANGE()
{this.ip="";this.count=0;};function Interface_T()
{this.ip=new Array(4);this.mask=new Array(4);this.gateway=new Array(4);var i;for(i=0;i<4;i++)
{this.ip[i]=0;this.mask[i]=0;this.gateway[i]=0;}};function IsSameNetwork(int1,int2)
{var i;if(int1.ip==0||int2.ip==0)return false;for(i=0;i<4;i++)
if((int1.ip[i]&int1.mask[i])!=(int2.ip[i]&int2.mask[i]))return false;return true;}
function parseIP(strIP)
{var val1,val2,val3,val4;var IP=strIP.split(/\./);val1=new Number(IP[0]);val2=new Number(IP[1]);val3=new Number(IP[2]);val4=new Number(IP[3]);return(val1.valueOf()+'.'+val2.valueOf()+'.'+val3.valueOf()+'.'+val4.valueOf())}
function IpToLong(addr){var IP;var val1,val2,val3,val4,longIP;IP=addr.split(/\./);val1=new Number(IP[0]);val2=new Number(IP[1]);val3=new Number(IP[2]);val4=new Number(IP[3]);longIP=val1*0x1000000+val2*0x10000+val3*0x100+val4;return longIP;}
function isValidMASK(addr)
{var sub_addr;data=addr.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/);if(!data||!addr)return false;if(addr.search(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)==-1)
return false;sub_addr=addr.split(/\./);if(sub_addr.length!=4)return false;if(addr.lastIndexOf(".")==(addr.length-1))
return false;if(isNValidIP(sub_addr[0])==true)return false;if(isNValidIP(sub_addr[1])==true)return false;if(isNValidIP(sub_addr[2])==true)return false;if(isNValidIP(sub_addr[3])==true)return false;return true;}
function isValidIP(addr)
{var sub_addr;var net_id;var host_id;data=addr.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/);if(!data||!addr)return false;if(addr.search(/^\d{1,3}\.\d{1,3}\.\d{1,3}\./)==-1)
return false;sub_addr=addr.split(/\./);if(sub_addr.length!=4)return false;if(addr.lastIndexOf(".")==(addr.length-1))
return false;if(isNValidIP(sub_addr[0])==true)return false;if(isNValidIP(sub_addr[1])==true)return false;if(isNValidIP(sub_addr[2])==true)return false;if(isNValidIP(sub_addr[3])==true)return false;if(sub_addr[0]>0xff||sub_addr[1]>0xff||sub_addr[2]>0xff||sub_addr[3]>0xff)
return false;if(sub_addr[0]<128)
{if(sub_addr[0]==0||sub_addr[0]==127)
return false;host_id=sub_addr[1]*0x10000+sub_addr[2]*0x100+sub_addr[3]*0x1;if(host_id==0||host_id==0xffffff)
return false;}
else if(sub_addr[0]<192)
{host_id=sub_addr[2]*0x100+sub_addr[3]*0x1;if(host_id==0||host_id==0xffff)
return false;}
else if(sub_addr[0]<224)
{host_id=sub_addr[3]*0x1;if(host_id==0||host_id==0xff)
return false;}
else
{return false;}
return true;}
function isValid_Zero_IP(addr)
{var sub_addr;var net_id;var host_id;data=addr.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/);if(!data||!addr)return false;if(addr.search(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)==-1)
return false;sub_addr=addr.split(/\./);if(sub_addr.length!=4)return false;if(addr.lastIndexOf(".")==(addr.length-1))
return false;if(isNValidIP(sub_addr[0])==true)return false;if(isNValidIP(sub_addr[1])==true)return false;if(isNValidIP(sub_addr[2])==true)return false;if(isNValidIP(sub_addr[3])==true)return false;if(sub_addr[0]>0xff||sub_addr[1]>0xff||sub_addr[2]>0xff||sub_addr[3]>0xff)
return false;if(sub_addr[0]==0&&sub_addr[1]==0&&sub_addr[2]==0&&sub_addr[3]==0)
return true;if(sub_addr[0]<128)
{if(sub_addr[0]==0||sub_addr[0]==127)
return false;host_id=sub_addr[1]*0x10000+sub_addr[2]*0x100+sub_addr[3]*0x1;if(host_id==0xffffff)
return false;}
else if(sub_addr[0]<192)
{host_id=sub_addr[2]*0x100+sub_addr[3]*0x1;if(host_id==0xffff)
return false;}
else if(sub_addr[0]<224)
{host_id=sub_addr[3]*0x1;if(host_id==0xff)
return false;}
else
{return false;}
return true;}
function parseValueRange(value)
{var sub_value,range,sub_range;var i;var value1,value2;var dash;if(value==null||value.length==0)return null;if(value.length==1)
{if(value=='*')
{range=new Array(1);range[0]=new PORT_RANGE();range[0].b_port=1;range[0].e_port=65535;return range;}}
sub_value=value.split(/\,/);range=new Array(sub_value.length);for(i=0;i<sub_value.length;i++)
{range[i]=new PORT_RANGE();dash=sub_value[i].indexOf("-");sub_range=sub_value[i].split(/\-/);if(sub_range.length==1)
{if(dash!=-1)return null;if(isNaN(sub_range[0])==true)return null;range[i].b_port=range[i].e_port=sub_range[0];}
else if(sub_range.length==2)
{if(isNaN(sub_range[0])==false&&sub_range[1]=='*')
{value1=new Number(sub_range[0]);range[i].b_port=sub_range[0];range[i].e_port=65535;}
else
{if(isNaN(sub_range[0])==true||isNaN(sub_range[1])==true)return null;value1=new Number(sub_range[0]);value2=new Number(sub_range[1]);if(value1.valueOf()>value2.valueOf())
{range[i].b_port=sub_range[1];range[i].e_port=sub_range[0];}
else
{range[i].b_port=sub_range[0];range[i].e_port=sub_range[1];}}}
else
return null;}
return range;}
function parseIPValueRange(value)
{var sub_value,range,sub_range;var i;var value1,value2;var sub_addr;if(value==null||value.length==0)return null;if(value.length==1)
{if(value=='*')
{range=new Array(1);range[0]=new IP_RANGE();range[0].ip="0.0.0.0";range[0].count=1;return range;}
return null;}
sub_value=value.split(/\,/);range=new Array(sub_value.length);for(i=0;i<sub_value.length;i++)
{range[i]=new IP_RANGE();sub_range=sub_value[i].split(/\-/);if(sub_range.length==1)
{if(isValidIP(sub_range[0])==false)return null;sub_addr=sub_range[0].split(/\./);if(sub_addr[3]=="*")
{sub_addr[3]="1";range[i].ip=sub_addr[0]+"."+sub_addr[1]+"."+sub_addr[2]+"."+sub_addr[3];range[i].ip=parseIP(range[i].ip);range[i].count=254;}
else
{range[i].ip=sub_addr[0]+"."+sub_addr[1]+"."+sub_addr[2]+"."+sub_addr[3];range[i].ip=parseIP(range[i].ip);range[i].count=1;}}
else if(sub_range.length==2)
{if(isValidIP(sub_range[0])==false||isNaN(sub_range[1])==true)return null;sub_addr=sub_range[0].split(/\./);value1=new Number(sub_addr[3]);value2=new Number(sub_range[1]);if(value1.valueOf()>value2.valueOf())
{range[i].ip=sub_addr[0]+"."+sub_addr[1]+"."+sub_addr[2]+"."+value2.valueOf();range[i].count=value1.valueOf()-value2.valueOf()+1;}
else
{range[i].ip=sub_addr[0]+"."+sub_addr[1]+"."+sub_addr[2]+"."+value1.valueOf();range[i].count=value2.valueOf()-value1.valueOf()+1;}}
else
return null;}
return range;}
function trueValueToInt(inValue){if(inValue)
return 1;else
return 0;}
function intValueToBool(inValue){if(inValue==0)
return false;else
return true;}
function MM_preloadImages(){var d=document;if(d.images){if(!d.MM_p)d.MM_p=new Array();var i,j=d.MM_p.length,a=MM_preloadImages.arguments;for(i=0;i<a.length;i++)
if(a[i].indexOf("#")!=0){d.MM_p[j]=new Image;d.MM_p[j++].src=a[i];}}}
function MM_swapImgRestore(){var i,x,a=document.MM_sr;for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++)x.src=x.oSrc;}
function MM_findObj(n,d){var p,i,x;if(!d)d=document;if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p);}
if(!(x=d[n])&&d.all)x=d.all[n];for(i=0;!x&&i<d.forms.length;i++)x=d.forms[i][n];for(i=0;!x&&d.layers&&i<d.layers.length;i++)x=MM_findObj(n,d.layers[i].document);if(!x&&document.getElementById)x=document.getElementById(n);return x;}
function MM_swapImage(){var i,j=0,x,a=MM_swapImage.arguments;document.MM_sr=new Array;for(i=0;i<(a.length-2);i+=3)
if((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x;if(!x.oSrc)x.oSrc=x.src;x.src=a[i+2];}}
function MM_jumpMenu(targ,selObj,restore){eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");if(restore)selObj.selectedIndex=0;}
function clear1(){window.status="";}
var buttontype="'font-size:8pt;font-family:Verdana, Arial, sans-serif;font-weight:bold;BACKGROUND:#FFFFFF;border-style: outset;border-width:thin;border-color:#FFFFFF;color:#0000FF' onmouseover=\"this.style.backgroundColor='#A6A8BD'\" onmouseout=\"this.style.backgroundColor='#C6C6D6'\"";function isInvalidDomain(s,name)
{var src=new String(s);var lst=new String(" /:*?\"<>|`=+\[];,");var i,n;n=lst.length;for(i=0;i<n;i++){var c=lst.charAt(i);var tmpS=new String(c);if(src.indexOf(tmpS)!=-1){alert(name+": \\ , \" , \/ and \' are invalid.");return true;}}
return false;}
function isInvalidPath(s,name){var src=new String(s);var lst=new String("/:*?\"<>|");var i,n,c,tmpS;n=lst.length;for(i=0;i<n;i++){c=lst.charAt(i);tmpS=new String(c);if(src.indexOf(tmpS)!=-1){alert(name+"ERROR!! ");return true;}}
c=new String(".");tmpS=new String("\\");i=src.indexOf(c);n=src.indexOf(tmpS);if((i!=-1)&&(n!=-1)){if(((i+1)==n)||((i-1)==n)){alert(name+"ERROR!! ");return true;}}
return false;}
function getQueryValue(name)
{var query=location.search;if(query=="")return"";query=query.substr(1,query.length);var arr=query.split(/\&/);name=name+"=";var index;for(var x=0;x<arr.length;x++){index=arr[x].indexOf(name);if(index!=0)continue;return arr[x].substr(name.length,arr[x].length);}
return"";}
function getIntQueryValue(name,default_val)
{var r;var q=getQueryValue(name);if(q=='')r=default_val;else r=parseInt(q);return r;}
function containDuplicatePort(port_arr1,port_arr2)
{var x,y;if(port_arr1==null||port_arr2==null)return false;for(x=0;x<port_arr1.length;x++){if(port_arr1[x].b_port==0||port_arr1[x].e_port==0)continue;for(y=0;y<port_arr2.length;y++){if(port_arr2[y].b_port==0||port_arr2[y].e_port==0)continue;if(port_arr1[x].b_port<=port_arr2[y].b_port&&port_arr2[y].b_port<=port_arr1[x].e_port)
return true;if(port_arr1[x].b_port<=port_arr2[y].e_port&&port_arr2[y].e_port<=port_arr1[x].e_port)
return true;if(port_arr2[y].b_port<=port_arr1[x].b_port&&port_arr1[x].b_port<=port_arr2[y].e_port)
return true;if(port_arr2[y].b_port<=port_arr1[x].e_port&&port_arr1[x].e_port<=port_arr2[y].e_port)
return true;}}
return false;}
function showInfoByStyleID(idName,f)
{var F=document.tF;var styleDisplay;var jIdName=document.getElementById(idName);if(f==true){styleDisplay=(navigator.appName=="Netscape"||navigator.appName=="Opera")?"table-row":"block";}else{styleDisplay="none";}
jIdName.style.display=styleDisplay;}
function checkNumberRange(f,s,e,bFocus)
{if(f!=null){if(isNaN(f.value)==false){if(f.value>=s&&f.value<=e){return true;}}}
if(bFocus==true){f.focus();}
return false;}