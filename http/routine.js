
function isInteger(_s){var s=''+_s;if(s.search(/^[0-9]+$/)!=-1)
return true;else
return false;}
function Interface_T(){this.ip=new Array(4);this.mask=new Array(4);this.gateway=new Array(4);var i;for(i=0;i<4;i++)
{this.ip[i]=0;this.mask[i]=0;this.gateway[i]=0;}};function isBlank(_s){var c;var s=''+_s;for(var i=0;i<s.length;i++)
{c=s.charAt(i);if((c!=' ')&&(c!='\n')&&(c!='\t'))return false;}
return true;}
function isIncludeDQuote(_s){var c;var s=''+_s;for(var i=0;i<s.length;i++)
{c=s.charAt(i);if((c=='"'))return true;}
return false;}
function isIncludeBSlash(_s){var c;var s=''+_s;for(var i=0;i<s.length;i++)
{c=s.charAt(i);if((c=='\\'))return true;}
return false;}
function isBlank_Zero(_s){var c;var s=''+_s;for(var i=0;i<s.length;i++){c=s.charAt(i);if((c!=' ')&&(c!='\n')&&(c!='\t')&&(c!='0'))return false;}
return true;}
function isNvaliduser(_s){var j,x=0;var s=''+_s;for(var i=0;i<s.length;i++){var c=s.charAt(i);if((c=='<')||(c=='>')||(c=='&'))
{return true;}}
return false;}
function isNValidInt(_s){var c;var s=''+_s;for(var i=0;i<s.length;i++){c=s.charCodeAt(i);if((c<48)||(c>57))
return true;}
return false;}
function isNegInt(s){if(parseInt(s,10)<0)
return true;else
return false;}
function isNValidIP(_s){var s=parseInt(_s,10);if((isBlank(_s))||(isNaN(_s))||(isNValidInt(_s))||(isNegInt(_s))||(s<0||s>255))
return true;else
return false;}
function isNValidFirstIP(_s){var s=parseInt(_s,10);if((isBlank(_s))||(isNaN(_s))||(isNValidInt(_s))||(isNegInt(_s))||(s<1||s>223))
return true;else
return false;}
function isNValidLastIP(_s){var s=parseInt(_s,10);if((isBlank(_s))||(isNaN(_s))||(isNValidInt(_s))||(isNegInt(_s))||(s<1||s>254))
return true;else
return false;}
function isNValidIP_p(_s,l,u){var s=parseInt(_s,10);if(!isInteger(_s)||(s<l||s>u))
return true;else
return false;}
function isNValidMask(_s){var s=parseInt(_s,10);if(!isInteger(_s))
return true;if((s==255)||(s==254)||(s==252)||(s==248)||(s==240)||(s==224)||(s==192)||(s==128)||(s==0))
return false;return true;}
function isNValidLastMask(_s){var s=parseInt(_s,10);if(!isInteger(_s))
return true;if((s==252)||(s==248)||(s==240)||(s==224)||(s==192)||(s==128)||(s==0))
return false;return true;}
function IP2long(a1,a2,a3,a4){var iplong=Number(a1)*0x1000000+Number(a2)*0x10000+Number(a3)*0x100+Number(a4);return iplong;}
function isNValidSubnetMask(s1,s2,s3,s4){var ulMask=IP2long(s1,s2,s3,s4);var j=0;var ok=0;if(Number(s1)!=255)return 1;if(isNValidMask(s2))return 2;if(isNValidMask(s3))return 3;if(isNValidLastMask(s4))return 4;for(var i=31;i>=0;i--){j=j+Math.pow(2,i);if(ulMask==j)ok=1;}
return(ok)?0:1;return false;}
function isNValidPortAllowZero(_s){var s=parseInt(_s,10);if((isBlank(''+_s))||(isNaN(''+_s))||(isNValidInt(s))||(isNegInt(s))||(s<0||s>65535))
return true;else
return false;}
function is2Hex(_s){var j,x=0;var s=''+_s;for(var i=0;i<s.length;i++){var c=s.charAt(i);j=parseInt(c,16);if((j>=0)&&(j<16)){if(x==1)
return false;x=1;}}
return true;}
function isHex(_s){var j,x=0;var s=''+_s;for(var i=0;i<s.length;i++){var c=s.charAt(i);j=parseInt(c,16);if(!((j==0)||(j==1)||(j==2)||(j==3)||(j==4)||(j==5)||(j==6)||(j==7)||(j==8)||(j==9)||(j==10)||(j==11)||(j==12)||(j==13)||(j==14)||(j==15))){x=1;}
if(x==1)return false;}
return true;}
function isNValid(s){if(isBlank(s)||is2Hex(s))
return true;else
return false;}
function isValidMacAddress(address){var c='';var i=0,j=0;if(address.toUpperCase()=='FF:FF:FF:FF:FF:FF')return 1;if(address=='00:00:00:00:00:00'||address=='0:0:0:0:0:0')return 1;addrParts=address.split(':');if(addrParts.length!=6)return 1;for(i=0;i<6;i++){if(addrParts[i].length!=2)return(i+1);for(j=0;j<addrParts[i].length;j++){c=addrParts[i].toLowerCase().charAt(j);if((c>='0'&&c<='9')||(c>='a'&&c<='f'))
continue;else
return(i+1);}}
return 0;}
function isNValidNum(_s){var s=parseInt(_s,10);if((isBlank(''+_s))||(isNaN(''+_s))||(isNValidInt(s))||(isNegInt(s)))
return true;else
return false;}
function isNValidUnicastIP(_s){var s=parseInt(_s,10);if((isBlank(''+_s))||(isNaN(''+_s))||(isNValidInt(s))||(isNegInt(s))||(s<=0||s>=224))
return true;else
return false;}
function isValidIP(addr,_nobypass){var sub_addr;var net_id;var host_id;var nobypass=_nobypass;if(addr.search(/^\d{1,3}\.\d{1,3}\.\d{1,3}\./)==-1)
return false;sub_addr=addr.split(/\./);if(sub_addr.length!=4)return false;if(sub_addr[3]=="*")
sub_addr[3]="1";else
{if(isNaN(sub_addr[3])==true)return false;}
if(sub_addr[0]>0xff||sub_addr[1]>0xff||sub_addr[2]>0xff||sub_addr[3]>0xff)
return false;if(sub_addr[0]<128){if(sub_addr[0]==0||sub_addr[0]==127)
return false;host_id=sub_addr[1]*0x10000+sub_addr[2]*0x100+sub_addr[3]*0x1;if(!nobypass&&(host_id==0||host_id==0xffffff))
return false;}else if(sub_addr[0]<192){host_id=sub_addr[2]*0x100+sub_addr[3]*0x1;if(!nobypass&&(host_id==0||host_id==0xffff))
return false;}else if(sub_addr[0]<224){host_id=sub_addr[3]*0x1;if(!nobypass&&(host_id==0||host_id==0xff))
return false;}else{return false;}
return true;}
function isValidIPAddress3(_a1,_a2,_a3,_a4,_m1,_m2,_m3,_m4){var a1=''+_a1;var a2=''+_a2;var a3=''+_a3;var a4=''+_a4;var m1=''+_m1;var m2=''+_m2;var m3=''+_m3;var m4=''+_m4;var net_id;var host_id;if(isNValidIP(a1)==true)return 1;if(isNValidIP(a2)==true)return 2;if(isNValidIP(a3)==true)return 3;if(isNValidIP(a4)==true)return 4;net_id=IP2long(m1,m2,m3,m4);host_id=IP2long(a1,a2,a3,a4);if((host_id|net_id)==-1){return 4;}
if((host_id&net_id)==host_id){return 4;}
return 0;}
function isPrintable(_s,_lt){var c,len=_s.length-1;for(var i=0;i<=len;i++){c=_s.charCodeAt(i);if((c<32)||(c>126))return false;if(!_lt){if((i==0)&&(c==32))return false;if((i==len)&&(c==32))return false;}}
return true;}
function isNVaidSSIDChar(s){return!isPrintable(s,0);}
function isNVaidWPAChar(s){return!isPrintable(s,1);}
function isNLocalDomain(s){return!isPrintable(s,1);}
function isNHostName(s){return!isPrintable(s,1);}
function isNPPPoEname(s){return!isPrintable(s,1);}
function isNPPPoEpasswd(s){return!isPrintable(s,1);}
function isNPPPoEserver(s){return!isPrintable(s,1);}