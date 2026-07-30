/* ===== M3 引導精靈（正式版）===== */
(function(){
try{
var IB='https://img.1shop.tw/ZLDl7P1ybNpzP89AO5Q6n98k/';
function im(t){return IB+t+'/600x.png';}
function imj(t){return IB+t+'/600x.jpg';}
var IMG_QUICK='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/quickbuy.jpg';
var PLAN_STD='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/standard.jpg';
var PLAN_EARLY='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/earlybird2.jpg';
var IMG_HOME='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/home.jpg';
var IMG_SHOP='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/shop.jpg';
var IMG_AREA_OK='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/green.jpg';
var IMG_AREA_RM='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/gold.jpg';
var IMG_AREA_NO='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/red.jpg';
var LINE_CS='https://line.me/R/ti/p/@063kttbk';
var TW={
'基隆市':['仁愛區','信義區','中正區','中山區','安樂區','暖暖區','七堵區'],
'台北市':['中正區','大同區','中山區','松山區','大安區','萬華區','信義區','士林區','北投區','內湖區','南港區','文山區'],
'新北市':['萬里區','金山區','板橋區','汐止區','深坑區','石碇區','瑞芳區','平溪區','雙溪區','貢寮區','新店區','坪林區','烏來區','永和區','中和區','土城區','三峽區','樹林區','鶯歌區','三重區','新莊區','泰山區','林口區','蘆洲區','五股區','八里區','淡水區','三芝區','石門區'],
'宜蘭縣':['宜蘭市','頭城鎮','礁溪鄉','壯圍鄉','員山鄉','羅東鎮','三星鄉','大同鄉','五結鄉','冬山鄉','蘇澳鎮','南澳鄉','釣魚台列嶼'],
'新竹市':['東區','北區','香山區'],
'新竹縣':['竹北市','湖口鄉','新豐鄉','新埔鎮','關西鎮','芎林鄉','寶山鄉','竹東鎮','五峰鄉','橫山鄉','尖石鄉','北埔鄉','峨嵋鄉'],
'桃園市':['中壢區','平鎮區','龍潭區','楊梅區','新屋區','觀音區','桃園區','龜山區','八德區','大溪區','復興區','大園區','蘆竹區'],
'苗栗縣':['竹南鎮','頭份市','三灣鄉','南庄鄉','獅潭鄉','後龍鎮','通霄鎮','苑裡鎮','苗栗市','造橋鄉','頭屋鄉','公館鄉','大湖鄉','泰安鄉','銅鑼鄉','三義鄉','西湖鄉','卓蘭鎮'],
'台中市':['中區','東區','南區','西區','北區','北屯區','西屯區','南屯區','太平區','大里區','霧峰區','烏日區','豐原區','后里區','石岡區','東勢區','和平區','新社區','潭子區','大雅區','神岡區','大肚區','沙鹿區','龍井區','梧棲區','清水區','大甲區','外埔區','大安區'],
'彰化縣':['彰化市','芬園鄉','花壇鄉','秀水鄉','鹿港鎮','福興鄉','線西鄉','和美鎮','伸港鄉','員林市','社頭鄉','永靖鄉','埔心鄉','溪湖鎮','大村鄉','埔鹽鄉','田中鎮','北斗鎮','田尾鄉','埤頭鄉','溪州鄉','竹塘鄉','二林鎮','大城鄉','芳苑鄉','二水鄉'],
'南投縣':['南投市','中寮鄉','草屯鎮','國姓鄉','埔里鎮','仁愛鄉','名間鄉','集集鎮','水里鄉','魚池鄉','信義鄉','竹山鎮','鹿谷鄉'],
'嘉義市':['東區','西區'],
'嘉義縣':['番路鄉','梅山鄉','竹崎鄉','阿里山','中埔鄉','大埔鄉','水上鄉','鹿草鄉','太保市','朴子市','東石鄉','六腳鄉','新港鄉','民雄鄉','大林鎮','溪口鄉','義竹鄉','布袋鎮'],
'雲林縣':['斗南鎮','大埤鄉','虎尾鎮','土庫鎮','褒忠鄉','東勢鄉','台西鄉','崙背鄉','麥寮鄉','斗六市','林內鄉','古坑鄉','莿桐鄉','西螺鎮','二崙鄉','北港鎮','水林鄉','口湖鄉','四湖鄉','元長鄉'],
'台南市':['中西區','東區','南區','北區','安平區','安南區','永康區','歸仁區','新化區','左鎮區','玉井區','楠西區','南化區','仁德區','關廟區','龍崎區','官田區','麻豆區','佳里區','西港區','七股區','將軍區','學甲區','北門區','新營區','後壁區','白河區','東山區','六甲區','下營區','柳營區','鹽水區','善化區','大內區','山上區','新市區','安定區'],
'高雄市':['新興區','前金區','苓雅區','鹽埕區','鼓山區','旗津區','前鎮區','三民區','楠梓區','小港區','左營區','仁武區','大社區','東沙群島','南沙群島','岡山區','路竹區','阿蓮區','田寮區','燕巢區','橋頭區','梓官區','彌陀區','永安區','湖內區','鳳山區','大寮區','林園區','鳥松區','大樹區','旗山區','美濃區','六龜區','內門區','杉林區','甲仙區','桃源區','那瑪夏區','茂林區','茄萣區'],
'屏東縣':['屏東市','三地門鄉','霧台鄉','瑪家鄉','九如鄉','里港鄉','高樹鄉','鹽埔鄉','長治鄉','麟洛鄉','竹田鄉','內埔鄉','萬丹鄉','潮州鎮','泰武鄉','來義鄉','萬巒鄉','崁頂鄉','新埤鄉','南州鄉','林邊鄉','東港鎮','佳冬鄉','新園鄉','枋寮鄉','枋山鄉','春日鄉','獅子鄉','車城鄉','牡丹鄉','恆春鎮','滿州鄉'],
'台東縣':['台東市','延平鄉','卑南鄉','鹿野鄉','關山鎮','海端鄉','池上鄉','東河鄉','成功鎮','長濱鄉','太麻里鄉','金峰鄉','大武鄉','達仁鄉'],
'花蓮縣':['花蓮市','新城鄉','秀林鄉','吉安鄉','壽豐鄉','鳳林鎮','光復鄉','豐濱鄉','瑞穗鄉','萬榮鄉','玉里鎮','卓溪鄉','富里鄉']
};
var REMOTE=['台中市外埔區','台中市大安區','台中市大甲區','台中市新社區','台中市東勢區','台中市石岡區','屏東縣崁頂鄉','屏東縣潮州鎮','屏東縣竹田鄉','屏東縣萬丹鄉','新竹縣北埔鄉','新竹縣芎林鄉','苗栗縣卓蘭鎮','苗栗縣大湖鄉','苗栗縣獅潭鄉','苗栗縣苑裡鎮','苗栗縣通霄鎮','雲林縣二崙鄉','雲林縣元長鄉','雲林縣台西鄉','雲林縣土庫鎮','雲林縣大埤鄉','雲林縣崙背鄉','雲林縣東勢鄉','雲林縣林內鄉','雲林縣褒忠鄉','雲林縣麥寮鄉','高雄市旗山區','高雄市梓官區'];
var NOSVC=['南投縣中寮鄉','南投縣仁愛鄉','南投縣信義鄉','南投縣國姓鄉','南投縣埔里鎮','南投縣水里鄉','南投縣竹山鎮','南投縣集集鎮','南投縣魚池鄉','南投縣鹿谷鄉','台中市和平區','台南市六甲區','台南市北門區','台南市南化區','台南市大內區','台南市學甲區','台南市將軍區','台南市山上區','台南市左鎮區','台南市後壁區','台南市新營區','台南市東山區','台南市柳營區','台南市楠西區','台南市白河區','台南市龍崎區','嘉義縣中埔鄉','嘉義縣大埔鄉','嘉義縣布袋鎮','嘉義縣東石鄉','嘉義縣梅山鄉','嘉義縣番路鄉','嘉義縣竹崎鄉','嘉義縣義竹鄉','嘉義縣阿里山','宜蘭縣南澳鄉','宜蘭縣大同鄉','屏東縣三地門鄉','屏東縣佳冬鄉','屏東縣來義鄉','屏東縣內埔鄉','屏東縣南州鄉','屏東縣恆春鎮','屏東縣新園鄉','屏東縣新埤鄉','屏東縣春日鄉','屏東縣東港鎮','屏東縣枋寮鄉','屏東縣枋山鄉','屏東縣林邊鄉','屏東縣泰武鄉','屏東縣滿州鄉','屏東縣牡丹鄉','屏東縣獅子鄉','屏東縣瑪家鄉','屏東縣萬巒鄉','屏東縣車城鄉','屏東縣霧台鄉','彰化縣二水鄉','彰化縣大城鄉','彰化縣溪州鄉','彰化縣竹塘鄉','新北市三芝區','新北市坪林區','新北市平溪區','新北市深坑區','新北市烏來區','新北市瑞芳區','新北市石碇區','新北市萬里區','新北市貢寮區','新北市金山區','新北市雙溪區','新竹縣五峰鄉','新竹縣尖石鄉','新竹縣峨嵋鄉','新竹縣橫山鄉','桃園市大溪區','桃園市復興區','苗栗縣南庄鄉','苗栗縣泰安鄉','雲林縣北港鎮','雲林縣口湖鄉','雲林縣古坑鄉','雲林縣四湖鄉','雲林縣水林鄉','高雄市內門區','高雄市六龜區','高雄市杉林區','高雄市桃源區','高雄市田寮區','高雄市甲仙區','高雄市美濃區','高雄市茂林區','高雄市那瑪夏區'];
function classify(c,d){if(!c||!d)return null;var k=c+d;if(NOSVC.indexOf(k)>=0)return 'nosvc';if(REMOTE.indexOf(k)>=0)return 'remote';return 'normal';}
var P={
 wall:{pid:'KmEBAGDMzKbYZNjnkZ3l52W4',price:3000,img:im('wx1WRpGD38J9QmJkNJnad4eb')},
 cs:{pid:'p9KbWMJZ7NmJvaAW1x3VEYmB',price:1600,img:im('ZOaL8DPWY6LP7mLKl92ExyG0')},
 cm:{pid:'wMXgOaDokp3AWaDB7Y9JAp45',price:3000,img:im('o4a0bwXWNWbyLrb7lGgE1yzv')},
 cl:{pid:'N6qx3aVnzXN2rVdW7jZWBXY2',price:5000,img:im('o4a0bwXWNWbyLrb7lGgE1yzv')},
 m4:{pid:'oBpXwKO97o9aZ8Wnz3dgQyV0',price:4000,img:im('Wqybvx25N9yJLmyvNREOMVPo')},
 f4:{pid:'WwNEQDBMkmGKVN8Z1O5a3Jb4',price:5000,img:im('Wqybvx25N9yJLmyvNREOMVPo')},
 o1:{pid:'JZ8LKanp10Zlx48xkXVbQw04',price:1000,img:im('0nMRz1wGlRwA7jaGNV9Kjv6E')},
 om:{pid:'eobJKaG21M0Qr8ZRzA4BqnwO',price:1500,img:im('BoQZq74kYmWexpj7l5PMywAK')},
 fan:{pid:'4WjbAXQV12Zg4J0Y1gqNOdal',price:500,img:im('wAjo1QaDle4mRjzg390xLGMJ')},
 air:{pid:'28je90BY1yYVlQm91Mqp6lDN',price:1600,img:im('BW4907rb3bP61B6VNQGK6kwy')},
 hi:{pid:'P02rqdam78ebxLvekNbvx6p8',price:1000,img:im('v5zx6meKY4vVbemgl0DVkLyo')},
 bz:{pid:'aovEX3VGzav0AMmq1jy9xdYm',price:1000,img:im('Xno5Qb1D3MV2j11ql67ZWPv9')},
 rm:{pid:'ndwgBoML1AZ9omyv7lD8O52Z',price:600,img:im('rAW85emGlnzxeppylyok6vBL')},
 dh:{price:21900,oprice:25900,img:imj('O5gwrR4GNQbo4EnRYBpn071e')},
 tf:{price:600,img:imj('ZLjRK1AGl0Aobp9KNV6DPJEw')}
};
var INDOOR=[
 {k:'wall',n:'家用壁掛清洗保養',d:'壁掛式・約1.5-2小時/台',grp:'家用壁掛'},
 {k:'cs',n:'吊隱式小清洗保養',d:'約0.5-1小時/台',grp:'吊隱式'},
 {k:'cm',n:'吊隱式大清洗保養',d:'含風鼓拆洗',grp:'吊隱式'},
 {k:'cl',n:'吊隱式全清洗保養',d:'全機深度清洗',grp:'吊隱式'},
 {k:'m4',n:'迷你四方吹清洗保養',d:'嵌入式小型機',grp:'四方吹'},
 {k:'f4',n:'四方吹清洗保養',d:'嵌入式標準機',grp:'四方吹'}
];
var LK={wall:'家用壁掛',cs:'吊隱式小',cm:'吊隱式大',cl:'吊隱式全',m4:'迷你四方吹',f4:'四方吹'};
var OUTLIST=[
 {k:'o1',n:'1對1室外機清洗',d:'一對一分離式'},
 {k:'om',n:'1對多室外機清洗',d:'一對多(多聯機)'}
];
var ADDON=[
 {k:'air',n:'AIRMON',dn:'AIRMON 智慧遠端控制器 MHICAD-WF100',d:'含全新設備費跟安裝設定費',air:true,pop:true,tag:'🔧 到府安裝',nmsm:true},
 {k:'dh',n:'三菱重工除濕機',dn:'三菱重工除濕機 DH18W-T 織紋白',d:'內建UVC燈＋機內乾燥｜除濕18.5L/日',pop:true,tag:'📦 另行宅配',gift:'🎁 加贈清洗75折券'},
 {k:'fan',n:'風鼓清洗',d:'僅適用吊隱大保養/全保養清洗',needBlow:true},
 {k:'tf',n:'車馬費',d:'技師車程與交通成本'},
 {k:'hi',n:'挑高施作3.5-4M加價',d:'每台加收'},
 {k:'rm',n:'偏遠地區加價',d:'一張訂單收一次'},
 {k:'bz',n:'商用/重油汙加價',d:'冷氣重油汙(如近廚房)每台加收'}
];
var ICO_GUIDE='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 12h3M14 12h3"/></svg>';
var ICO_LIST='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.4"/></svg>';

var CSS='#qw-ovl{position:fixed;inset:0;z-index:99999;background:rgba(4,20,40,.55);display:flex;align-items:center;justify-content:center;padding:14px;font-family:"PingFang TC","Microsoft JhengHei",system-ui,sans-serif}'
+'#qw-ovl *{box-sizing:border-box}'
+'.qw{position:relative;background:#fff;border-radius:18px;width:100%;max-width:400px;max-height:92vh;overflow-y:auto;padding:20px 18px 18px;box-shadow:0 14px 44px rgba(0,0,0,.35)}'
+'@media (min-width:760px){#qw-ovl .qw{max-width:520px!important}}'
+'.qw .on.qw-on-sm{font-size:12.5px;white-space:nowrap;letter-spacing:-.2px}'
+'.qw .qw-thumb{cursor:zoom-in}'
+'#qw-zoom{position:fixed;inset:0;z-index:100005;background:rgba(0,0,0,.82);display:flex;align-items:center;justify-content:center;padding:20px;cursor:zoom-out}#qw-zoom img{max-width:100%;max-height:90vh;border-radius:10px;box-shadow:0 10px 40px rgba(0,0,0,.5)}'
+'.qw .qw-x{position:absolute;top:9px;right:11px;width:30px;height:30px;border:none;background:rgba(255,255,255,.7);border-radius:50%;color:#a4b1bf;font-size:24px;line-height:28px;text-align:center;cursor:pointer;padding:0;font-family:inherit;z-index:5}.qw .qw-x:active{color:#5f6b78}'
+'.qw .qwbar{display:flex;align-items:center;gap:6px;margin-bottom:4px;padding-right:32px}'
+'.qw .qwdot{width:22px;height:22px;flex-shrink:0;border-radius:50%;font-size:12px;font-weight:700;display:flex!important;align-items:center;justify-content:center;background:#E6F1FB;color:#8a97a5;line-height:1;padding:0;box-sizing:border-box}'
+'.qw .qwdot.on{background:#0C447C;color:#fff}.qw .qwdot.done{background:#B8860B;color:#fff}'
+'.qw .qwln{flex:1;height:2px;background:#c9d7e6}.qw .qwln.done{background:#B8860B}'
+'.qw h2{font-size:18px;margin:12px 0 3px;color:#042C53;font-weight:900!important;-webkit-text-stroke:.5px currentColor}'
+'.qw .qh4{font-weight:900;-webkit-text-stroke:.5px currentColor}'
+'.qw .sub{font-size:12.5px;color:#8a97a5;margin:0 0 14px}'
+'.qw .grp-lbl{font-size:12px;font-weight:700;color:#0C447C;margin:12px 0 6px}'
+'.qw .opt{display:block;border:1.5px solid #c9d7e6;border-radius:12px;padding:10px 12px;margin-bottom:9px}'
+'.qw .qw-add{border:none;background:#042C53;color:#fff;font-size:12.5px;font-weight:800;border-radius:999px;padding:8px 17px;font-family:inherit;cursor:pointer;white-space:nowrap;flex:0 0 auto}.qw .qw-add:active{transform:scale(.96)}'
+'.qw .opt.sel{border-color:#0C447C;background:#E6F1FB}'
+'.qw .opt-main{display:flex;align-items:center;gap:11px}'
+'#qw-ovl .opt img{width:72px!important;height:72px!important;border-radius:8px;border:1px solid #c9d7e6;object-fit:cover;flex-shrink:0}'
+'.qw .oi{flex:1;min-width:0}.qw .on{font-size:14.5px;font-weight:500;display:block}.qw .od{font-size:11px;color:#8a97a5;display:block}'
+'.qw .op{color:#B8860B;font-weight:800;font-size:14px;white-space:nowrap}'
+'.qw .op-o{color:#c4ccd6;font-weight:600;font-size:11px;margin-right:6px}'
+'.qw .qw-tags{display:flex;flex-wrap:wrap;gap:6px;margin:5px 0 1px}'
+'.qw .qw-pop{display:inline-flex;align-items:center;background:linear-gradient(100deg,#b8860b,#d9b24a);color:#fff;font-size:10.5px;font-weight:800;border-radius:999px;padding:3px 10px;line-height:1.4;white-space:nowrap;box-shadow:0 2px 7px rgba(184,134,11,.3)}'
+'.qw .qw-info{display:inline-flex;align-items:center;background:#E6F1FB;color:#0C447C;border:1px solid #cddff0;font-size:10.5px;font-weight:800;border-radius:999px;padding:3px 10px;line-height:1.4;white-space:nowrap}'
+'.qw .qw-gift{display:inline-flex;align-items:center;background:#fdeeec;color:#c0392b;border:1px solid #f3c9c4;font-size:10.5px;font-weight:800;border-radius:999px;padding:3px 10px;line-height:1.4;white-space:nowrap}'
+'.qw .qw-terms{display:inline-flex;align-items:center;gap:3px;margin-top:7px;font-size:11.5px;font-weight:800;color:#0C447C;text-decoration:underline;text-underline-offset:2px;cursor:pointer}'
+'#qw-terms{position:fixed;inset:0;z-index:100003;background:rgba(4,20,40,.6);display:flex;align-items:center;justify-content:center;padding:16px;font-family:"PingFang TC","Microsoft JhengHei",system-ui,sans-serif}#qw-terms *{box-sizing:border-box}'
+'.qwt-m{background:#fff;border-radius:16px;max-width:380px;width:100%;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 20px 55px rgba(0,0,0,.4)}'
+'.qwt-hd{background:linear-gradient(120deg,#042C53,#0C447C);color:#fff;padding:15px 18px;position:relative;flex:0 0 auto}'
+'.qwt-pill{display:inline-block;font-size:10.5px;font-weight:800;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.28);border-radius:999px;padding:3px 10px;margin-bottom:7px}'
+'.qwt-hd h3{font-size:16px;font-weight:900;margin:0;padding-right:24px;line-height:1.35;color:#fff!important}'
+'.qwt-x{position:absolute;top:12px;right:13px;background:none;border:none;color:#cfe0f2;font-size:22px;line-height:1;cursor:pointer;padding:0;font-family:inherit}'
+'.qwt-bd{padding:16px 18px;overflow-y:auto;-webkit-overflow-scrolling:touch;flex:1 1 auto}'
+'.qwt-ft{flex:0 0 auto;padding:12px 18px;border-top:1px solid #eef2f6}'
+'.qwt-ok{width:100%;background:#042C53;color:#fff;border:none;border-radius:999px;padding:12px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer}'
+'.qwt-intro{font-size:13px;color:#2a3b4d;background:#faf6ea;border:1px solid #f0e6cc;border-radius:9px;padding:11px 13px;margin-bottom:12px;line-height:1.7}'
+'.qwt-bd p,.qwt-inj p{font-size:13px;color:#33414f;margin:9px 0;line-height:1.75}'
+'.qwt-h{font-size:14px;font-weight:900;color:#042C53;padding-bottom:6px;border-bottom:2px solid #d9b24a;display:inline-block;margin:16px 0 9px}'
+'.qwt-ul{list-style:none;margin:7px 0;padding:0}.qwt-ul li{font-size:13px;color:#33414f;padding:2px 0 2px 17px;position:relative;line-height:1.6}.qwt-ul li::before{content:"・";position:absolute;left:0;color:#B8860B;font-weight:900}'
+'.qwt-note{font-size:12.5px;color:#b45309;background:#fef6e7;border-left:3px solid #d9b24a;border-radius:0 8px 8px 0;padding:8px 12px;margin:8px 0;line-height:1.6}'
+'.qwt-scroll{max-height:230px;overflow-y:auto;-webkit-overflow-scrolling:touch;text-align:left;border:1px solid #eef2f6;border-radius:10px;padding:2px 12px;background:#fbfdff;margin-top:6px}'
+'.qwt-img{width:100%;border:1px solid #e2e8f1;border-radius:9px;display:block;margin:9px 0}'
+'.qwt-link{display:block;text-align:center;font-size:12.5px;font-weight:800;color:#0C447C;text-decoration:underline;margin:6px 0 2px}'
+'.qwt-ul li b{color:#042C53}'
+'.qwt-chk{display:flex;align-items:flex-start;gap:9px;font-size:13px;font-weight:700;color:#1c2733;cursor:pointer;line-height:1.5;margin-bottom:10px}.qwt-chk input{width:20px;height:20px;flex:0 0 auto;margin-top:1px;accent-color:#042C53}'
+'.qwt-ok:disabled{background:#a9bdd2;cursor:not-allowed}'
+'.qwt-hint{font-size:11px;color:#9aa7b4;text-align:center;margin-top:7px}'
+'.qw .det-body{margin-top:9px;background:#E6F1FB;border-radius:8px;padding:9px 11px}'
+'.qw .det-cap{font-size:12px;font-weight:700;color:#0C447C;margin-bottom:4px}'
+'.qw .det-body ul{margin:0;padding:0;list-style:none}.qw .det-body li{font-size:12px;color:#1c2733;line-height:1.75}'
+'.qw .det-warn{font-size:11.5px;color:#c0392b;font-weight:700;margin-top:5px}'
+'.qw .step-ctl{display:flex;align-items:center;gap:8px;background:#E6F1FB;border-radius:999px;padding:4px}'
+'.qw .step-ctl button{width:28px;height:28px;border-radius:50%;border:none;background:#fff;color:#0C447C;font-size:15px;font-weight:700;cursor:pointer}'
+'.qw .step-ctl .q{min-width:18px;text-align:center;font-weight:700;font-size:14px;color:#042C53}'
+'.qw .op-wrap{display:flex;align-items:center;justify-content:flex-end;gap:10px;width:100%;margin-top:9px;padding-top:10px;border-top:1px dashed #d7e0ea}'
+'.qw .warnbox{font-size:11.5px;color:#c0392b;background:rgba(192,57,43,.08);border-radius:8px;padding:7px 10px;margin:2px 0 10px;line-height:1.5}'
+'.qw .optnote{font-size:12px;color:#0C447C;background:#E6F1FB;border-radius:8px;padding:8px 11px;margin:0 0 12px;line-height:1.5}.qw .optnote b{color:#B8860B;font-weight:800}'
+'.qw .airnote{font-size:11.5px;color:#8a97a5;background:#E6F1FB;border-radius:8px;padding:7px 10px;margin:2px 0 10px;line-height:1.5}'
+'.qw .nav{display:flex;gap:9px;margin-top:14px}'
+'.qw .btn{flex:1;border-radius:999px;padding:12px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;border:none}'
+'.qw .btn.pri{background:#0C447C;color:#fff}.qw .btn.pri:disabled{background:#a9bdd2;cursor:not-allowed}'
+'.qw .btn.gho{background:none;border:1.5px solid #c9d7e6;color:#042C53}'
+'.qw .skip{text-align:center;font-size:13px;color:#8a97a5;text-decoration:underline;margin-top:12px;cursor:pointer}'
+'.qw .laststep{display:inline-block;font-size:11px;font-weight:800;letter-spacing:.06em;color:#B8860B;background:rgba(184,134,11,.1);border-radius:5px;padding:3px 9px;margin-bottom:4px}'
+'.qw .qplans{display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:2px}'
+'.qw .qplan{position:relative;border:2.5px solid transparent;border-radius:13px;padding:0;overflow:hidden;cursor:pointer;background:none;transition:transform .12s;box-shadow:0 2px 8px rgba(4,44,83,.1)}'
+'.qw .qplan img{width:100%;height:auto;display:block}'
+'.qw .qpn{padding:7px 3px;text-align:center;font-size:14px;font-weight:900;line-height:1.3;white-space:nowrap;border-top:1px solid rgba(0,0,0,.05);-webkit-text-stroke:.4px currentColor}'
+'.qw .qpn-std{background:#E6F1FB;color:#0C447C}'
+'.qw .qpn-early{background:rgba(184,134,11,.14);color:#8a6410}'
+'.qw .qplan.sel{border-color:#0C447C}'
+'.qw .qplan.sel::after{content:\"✓\";position:absolute;top:6px;right:6px;width:22px;height:22px;background:#0C447C;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800}'
+'.qw .qplan:active{transform:scale(.97)}'
+'.qw .callnote{font-size:11.5px;color:#0C447C;background:#E6F1FB;border-radius:8px;padding:8px 11px;margin:11px 0 2px;line-height:1.55}'
+'.qw.wel{text-align:center}.qw .wel-brand{font-size:11px;font-weight:800;letter-spacing:.1em;color:#0C447C;margin-bottom:12px}'
+'.qw .wel-bar{width:34px;height:3px;background:#B8860B;border-radius:2px;margin:2px auto 15px}'
+'.qw .wel-h{font-size:24px;font-weight:900;color:#16202b;margin:0 0 10px;line-height:1.42;white-space:nowrap;-webkit-text-stroke:0.4px #16202b}'
+'.qw .wel-p{font-size:13px;color:#7c8998;line-height:1.7;margin:0 0 6px}'
+'.qw .wel-steps{display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;gap:2px;margin:6px 0 22px;white-space:nowrap}'
+'.qw .ws{display:inline-flex;align-items:center;gap:3px;font-size:10.5px;font-weight:800;color:#042C53}'
+'.qw .wsn{width:16px;height:16px;flex-shrink:0;border-radius:50%;background:none;border:1.3px solid #B8860B;color:#B8860B;font-size:9px;font-weight:800;display:inline-flex;align-items:center;justify-content:center}'
+'.qw .wsa{color:#B8860B;font-weight:800;font-size:9px;opacity:.5;margin:0 -1px}'
+'.qw .wel-tiles{display:grid;grid-template-columns:1fr 1fr;gap:12px}'
+'.qw .wel-start{display:block;width:100%;border:none;border-radius:14px;overflow:hidden;padding:0;background:none;cursor:pointer;box-shadow:0 5px 16px rgba(4,44,83,.18);-webkit-tap-highlight-color:transparent;transition:transform .12s}'
+'.qw .wel-start img{width:100%;display:block;aspect-ratio:3/1;object-fit:cover}'
+'.qw .wel-start:active{transform:scale(.98)}'
+'.qw .wel-skip{display:inline-block;text-align:center;font-size:13px;color:#8a97a5;text-decoration:underline;text-underline-offset:2px;margin-top:16px;cursor:pointer}'
+'.qw .wel-tile{aspect-ratio:1/1;border:none;border-radius:12px;padding:0;overflow:hidden;background:none;font-family:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform .12s;box-shadow:0 2px 10px rgba(4,44,83,.12)}'
+'.qw .wel-tile img{width:100%;height:100%;object-fit:cover;display:block}'
+'.qw .wel-tile:active{transform:scale(.97)}'
+'.qw .env-g{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:2px}'
+'.qw .env-o{position:relative;aspect-ratio:1/1;border:2.5px solid #dbe4ee;border-radius:14px;overflow:hidden;background:#fff;cursor:pointer;padding:0;font-family:inherit;-webkit-tap-highlight-color:transparent;box-shadow:0 2px 10px rgba(4,44,83,.1);transition:transform .12s}'
+'.qw .env-o img{width:100%;height:100%;object-fit:cover;display:block}'
+'.qw .env-o:active{transform:scale(.97)}'
+'.qw .env-o.sel{border-color:#0C447C}'
+'.qw .env-o.sel::after{content:\"✓\";position:absolute;top:7px;right:8px;width:22px;height:22px;background:#0C447C;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800}'
+'.qw .envnote{font-size:12px;color:#0C447C;background:#E6F1FB;border-radius:8px;padding:8px 11px;margin:10px 0 2px;line-height:1.5}.qw .envnote b{color:#B8860B;font-weight:800}'
+'.qs-corr-line .item-tool{display:none!important}.qs-corr-line [class*="qty"],.qs-corr-line [class*="quantity"],.qs-corr-line [class*="counter"],.qs-corr-line [class*="number"]{display:none!important}.qs-corr-line .item-name{color:#0C447C!important;font-size:12.5px}'
+'.qw .flbl{font-size:12px;font-weight:700;color:#0C447C;margin:2px 0 5px}'
+'.qw .qsel{width:100%;border:1.5px solid #c9d7e6;border-radius:12px;padding:11px 34px 11px 12px;font-size:14px;color:#12233a;background:#fff;font-family:inherit;-webkit-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%230C447C%27 stroke-width=%273%27><path d=%27M6 9l6 6 6-6%27/></svg>\");background-repeat:no-repeat;background-position:right 12px center;margin-bottom:10px}'
+'.qw .area-res{width:100%;border-radius:12px;display:block;margin:4px 0 2px}'
+'.qw .cslink{display:block;background:#B8860B;color:#fff;border-radius:999px;padding:12px;font-size:14px;font-weight:800;text-align:center;text-decoration:none;margin-top:9px}'
+'#qw-air{position:fixed;inset:0;z-index:100000;background:rgba(4,20,40,.62);display:flex;align-items:center;justify-content:center;padding:18px;font-family:inherit}'
+'#qw-air .m{background:#fff;border-radius:16px;max-width:340px;width:100%;max-height:92vh;overflow-y:auto;padding:20px 18px;text-align:center}'
+'#qw-air h3{margin:0 0 8px;font-size:17px;color:#042C53}#qw-air p{font-size:13px;color:#1c2733;line-height:1.7;margin:0 0 12px}#qw-air p b{color:#0C447C}'
+'#qw-air img{width:100%;border-radius:8px;border:1px solid #c9d7e6;display:block}'
+'#qw-air a{display:block;font-size:13px;color:#0C447C;font-weight:800;margin:12px 0;text-decoration:none}'
+'#qw-air .ok{background:#0C447C;color:#fff;border:none;border-radius:999px;padding:12px 28px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;width:100%}'
+'#qw-toast{position:fixed;left:0;right:0;bottom:24px;z-index:100001;text-align:center;pointer-events:none}#qw-toast span{background:#042C53;color:#fff;font-size:13px;padding:10px 18px;border-radius:999px;font-family:inherit}';

var qty={},opened={},step=0,plan=null,env=null,ovl=null;
var areaCity=null,areaDist=null,areaCls=null;
var INK=['wall','cs','cm','cl','m4','f4'];
function money(n){return 'NT$ '+n.toLocaleString('en-US');}
function sumKeys(ks){var s=0;ks.forEach(function(k){s+=qty[k]||0;});return s;}
function hasBlow(){return (qty.cm||0)+(qty.cl||0)>0;}
/* 商用/重油汙加價台數：室內機每台加價；室外機「隨室內機清洗」不加價，只有「單獨清洗室外機」時才每台加價 */
function bzQty(){if(env!=='biz')return 0;var i=sumKeys(INK),o=sumKeys(['o1','om']);return i>0?i:o;}
/* 車馬費：家用 + 只洗室外機 + 剛好1台 → 自動加$600(單筆);2台以上免;非此情況不加 */
function tfQty(){var i=sumKeys(INK),o=sumKeys(['o1','om']);return (env==='home'&&i===0&&o===1)?1:0;}
function stepper(item){var q=qty[item.k]||0;return '<div class="op-wrap"><span class="op">'+(P[item.k].oprice?'<s class="op-o">'+money(P[item.k].oprice)+'</s>':'')+money(P[item.k].price)+'</span>'+(q>0?'<div class="step-ctl" onclick="event.stopPropagation()"><button onclick="__qw.chg(&quot;'+item.k+'&quot;,-1)">−</button><span class="q">'+q+'</span><button onclick="__qw.chg(&quot;'+item.k+'&quot;,1)">＋</button></div>':'<button class="qw-add" onclick="__qw.pick(&quot;'+item.k+'&quot;)">＋ 加入</button>')+'</div>';}
var OUT_DETAIL='<b>清洗項目：</b><br>1. 機外殼除塵清潔<br>2. 冷凝器（散熱鰭片）深層清洗<br>3. 高壓水柱沖洗散熱片<br>4. 清除散熱口灰塵與雜物';
function detailBlock(item){if(item.k==='o1'||item.k==='om'){return (qty[item.k]>0)?'<div class="det-body">'+OUT_DETAIL+'</div>':'';}var mk=LK[item.k];if(!mk||!(qty[item.k]>0)||!window.__qsLISTS||!window.__qsLISTS[mk])return '';return '<div class="det-body">'+window.__qsLISTS[mk]+'</div>';}
function optRow(item){var q=qty[item.k]||0;var pop=item.pop?'<span class="qw-pop">🔥 人氣加購</span>':'';var tag=item.tag?'<span class="qw-info">'+item.tag+'</span>':'';var gift=item.gift?'<span class="qw-gift">'+item.gift+'</span>':'';var tags=(pop||tag||gift)?'<div class="qw-tags">'+pop+tag+gift+'</div>':'';var tm=_TERMS[item.k]?'<span class="qw-terms" onclick="event.stopPropagation();__qw.terms(&quot;'+item.k+'&quot;)">📋 注意事項 ›</span>':'';return '<div class="opt '+(q>0?'sel':'')+'"><div class="opt-main"><img class="qw-thumb" src="'+P[item.k].img+'" onclick="event.stopPropagation();__qw.zoom(&quot;'+P[item.k].img+'&quot;)"><div class="oi"><span class="on'+(item.nmsm?' qw-on-sm':'')+'">'+(item.dn||item.n)+'</span>'+tags+'<span class="od">'+item.d+'</span>'+tm+stepper(item)+'</div></div>'+detailBlock(item)+'</div>';}
function curPos(){return step==='area'?1:(step==='env'?2:(step===1?3:(step===2?3:(step===3?4:5))));}
function stepBar(){var pos=curPos();function d(n){return '<div class="qwdot '+(pos>n?'done':pos===n?'on':'')+'">'+(pos>n?'✓':n)+'</div>';}function l(n){return '<div class="qwln '+(pos>n?'done':'')+'"></div>';}return '<div class="qwbar">'+d(1)+l(1)+d(2)+l(2)+d(3)+l(3)+d(4)+l(4)+d(5)+'</div>';}
function render(){
  var w='';
  if(env==='biz')qty.bz=bzQty();qty.tf=tfQty();
  if(step===0){
    w='<div class="qw wel"><div class="wel-brand">三菱重工 · 原廠空調清洗 官方賣場</div><div class="wel-bar"></div>'
    +'<h2 class="wel-h">幫你快速挑好清洗方案</h2>'
    +'<p class="wel-p">不知道要洗哪些？讓我一步步帶你選</p>'
    +'<div class="wel-steps"><span class="ws"><i class="wsn">1</i>地區</span><span class="wsa">›</span><span class="ws"><i class="wsn">2</i>環境</span><span class="wsa">›</span><span class="ws"><i class="wsn">3</i>機型</span><span class="wsa">›</span><span class="ws"><i class="wsn">4</i>加購</span><span class="wsa">›</span><span class="ws"><i class="wsn">5</i>方案</span></div>'
    +'<button class="wel-start" onclick="__qw.start()"><img src="'+IMG_QUICK+'" alt="開始快速選購"></button><div class="wel-skip" onclick="__qw.skip()">我已經知道要買什麼，自己看就好 →</div></div>';
  } else if(step==='area'){
    var cityOpts='<option value="">請選擇縣市</option>';
    for(var ci in TW){if(TW.hasOwnProperty(ci)){cityOpts+='<option value="'+ci+'"'+(areaCity===ci?' selected':'')+'>'+ci+'</option>';}}
    var distOpts='<option value="">'+(areaCity?'請選擇鄉鎮市區':'請先選擇縣市')+'</option>';
    if(areaCity&&TW[areaCity]){TW[areaCity].forEach(function(dn){distOpts+='<option value="'+dn+'"'+(areaDist===dn?' selected':'')+'>'+dn+'</option>';});}
    var resImg=areaCls==='normal'?'<img class="area-res" src="'+IMG_AREA_OK+'" alt="可正常服務">':(areaCls==='remote'?'<img class="area-res" src="'+IMG_AREA_RM+'" alt="偏遠加價">':(areaCls==='nosvc'?'<img class="area-res" src="'+IMG_AREA_NO+'" alt="尚未服務">':''));
    var canNext=(areaCls==='normal'||areaCls==='remote');
    w='<div class="qw">'+stepBar()+'<h2>您的服務地區在哪裡？</h2><p class="sub">先確認是否在服務範圍</p>'
     +'<div class="flbl">縣市</div><select class="qsel" onchange="__qw.pickCity(this.value)">'+cityOpts+'</select>'
     +'<div class="flbl">鄉鎮市區</div><select class="qsel" onchange="__qw.pickDist(this.value)">'+distOpts+'</select>'
     +resImg
     +(areaCls==='nosvc'?'<a class="cslink" href="'+LINE_CS+'" target="_blank" rel="noopener">聯繫客服 →</a>':'')
     +'<div class="nav"><button class="btn gho" onclick="__qw.go(0)">上一步</button><button class="btn pri" '+(canNext?'':'disabled')+' onclick="__qw.go(&quot;env&quot;)">下一步</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step==='env'){
    w='<div class="qw">'+stepBar()+'<h2>冷氣的使用環境為？</h2><p class="sub">先確認環境，幫你算好正確價格</p>'
    +'<div class="env-g"><button type="button" class="env-o '+(env==='home'?'sel':'')+'" onclick="__qw.pickEnv(&quot;home&quot;)"><img src="'+IMG_HOME+'" alt="一般家用"></button>'
    +'<button type="button" class="env-o '+(env==='biz'?'sel':'')+'" onclick="__qw.pickEnv(&quot;biz&quot;)"><img src="'+IMG_SHOP+'" alt="營業場所"></button></div>'
    +'<div class="envnote">選「營業場所」後，之後選室內機會自動幫你算好加價 <b>$1,000</b></div>'
    +'<div class="nav"><button class="btn gho" onclick="__qw.go(&quot;area&quot;)">上一步</button><button class="btn pri" '+(env?'':'disabled')+' onclick="__qw.go(1)">下一步：室內機</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step===1){
    var groups={};INDOOR.forEach(function(x){(groups[x.grp]=groups[x.grp]||[]).push(x);});
    var body='';Object.keys(groups).forEach(function(g){body+='<div class="grp-lbl">'+g+'式機型適用</div>'+groups[g].map(optRow).join('');});
    var inLbl=sumKeys(['wall','cs','cm','cl','m4','f4'])>0?'下一步：室外機':'只洗室外機，下一步';
    w='<div class="qw">'+stepBar()+'<h2>要清洗哪種室內機？</h2><p class="sub">選擇機型與清洗方案，可選多台</p>'+body+'<div class="nav"><button class="btn gho" onclick="__qw.go(&quot;env&quot;)">上一步</button><button class="btn pri" onclick="__qw.go(2)">'+inLbl+'</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step===2){
    var outN=sumKeys(['o1','om']),inNow=sumKeys(['wall','cs','cm','cl','m4','f4']);
    var tfHint=(env==='home'&&inNow===0&&outN===1);
    var outLbl=outN>0?'下一步：加購':'不洗室外機，下一步';
    var outNote=(env==='biz')?'<div class="optnote">🏢 營業場所可<b>單獨清洗室外機</b>，每台加收 <b>$1,000</b> 商用加價</div>':(inNow>0?'<div class="optnote">室外機清洗為選配，可搭配室內機一起清洗。</div>':'<div class="optnote">只洗室外機：<b>1 台</b>加 <b>$600 車馬費</b>（單筆）、<b>2 台以上免</b></div>');
    w='<div class="qw">'+stepBar()+'<h2>要清洗室外機嗎？</h2><p class="sub">室外機清洗為選配，不需要可直接按下一步</p>'+outNote+OUTLIST.map(optRow).join('')+(tfHint?'<div class="warnbox" style="color:#8a6410;background:rgba(184,134,11,.08)">🚗 目前只洗 1 台室外機，將自動加收 <b>車馬費 $600</b>（技師車程成本，單筆）</div>':'')+'<div class="nav"><button class="btn gho" onclick="__qw.go(1)">上一步</button><button class="btn pri" onclick="__qw.go(3)">'+outLbl+'</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step===3){
    var body='';ADDON.forEach(function(x){if(x.needBlow&&!hasBlow())return;if(x.k==='bz'&&env==='biz'){var bn=bzQty();if(bn>0){body+='<div class="envnote">🏢 營業場所：已自動加購「商用/重油汙加價」<b>× '+bn+'</b>（室內機每台 +$1,000；室外機隨室內機清洗不加價，僅單洗室外機時每台 +$1,000）</div>';}return;}if(x.k==='rm'){if(areaCls==='remote'){body+='<div class="envnote">📍 偏遠地區：已自動加購「偏遠地區加價」<b>× 1</b>（一張訂單收一次 +$600）</div>';}return;}if(x.k==='tf'){if(tfQty()>0){body+='<div class="envnote">🚗 只洗 1 台室外機：已自動加購「車馬費」<b>× 1</b>（技師車程成本 +$600，單筆）</div>';}return;}body+=optRow(x);if(x.k==='air'&&(qty.air||0)>0){body+='<div class="airnote">＊AIRMON 僅適用三菱重工家用壁掛室內機，請確認機型後再購買</div>';}if(x.k==='hi'&&(qty.hi||0)>0){body+='<div class="airnote">＊挑高加價請對應實際 3.5–4M 高處的機器台數（最多 '+(sumKeys(INK)+sumKeys(['o1','om']))+' 台）</div>';}});
    if(!hasBlow()){body+='<div class="warnbox">＊「風鼓清洗」僅在選購吊隱式大/全清洗時才可加購</div>';}
    var nextLbl=sumKeys(ADDON.map(function(a){return a.k;}))>0?'下一步：選到府方案':'不加購，下一步';
    w='<div class="qw">'+stepBar()+'<h2>要加購特殊項目嗎？</h2><p class="sub">這一步是「選配」，沒有需要可直接按下一步</p><div class="optnote">以下項目<b>非必要</b>，依你的現場條件加購即可</div>'+body+'<div class="nav"><button class="btn gho" onclick="__qw.go(2)">上一步</button><button class="btn pri" onclick="__qw.go(4)">'+nextLbl+'</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else {
    function planCard(k,img,note,ncls){var sel=plan===k;return '<div class="qplan '+(sel?'sel':'')+'" onclick="__qw.pickPlan(&quot;'+k+'&quot;)"><img src="'+img+'" alt=""><div class="qpn '+ncls+'">'+note+'</div></div>';}
    w='<div class="qw"><div class="laststep">最後一步</div><h2 class="qh4">你想要多快安排到府清洗？</h2><p class="sub">越有彈性、折扣越多，二選一</p><div class="qplans">'+planCard('std',PLAN_STD,'安排兩週內到府服務','qpn-std')+planCard('early',PLAN_EARLY,'安排30天後到府服務','qpn-early')+'</div><div class="callnote">📞 下單付款後，將由專人來電與您約定實際到府時間</div><div class="nav"><button class="btn gho" onclick="__qw.go(3)">上一步</button><button class="btn pri" '+(plan?'':'disabled')+' onclick="__qw.finish()">完成，前往結帳</button></div></div>';
  }
  ovl.innerHTML=w;
  var _card=ovl.querySelector('.qw');
  if(_card){var _x=document.createElement('button');_x.type='button';_x.className='qw-x';_x.setAttribute('aria-label','關閉');_x.innerHTML='×';_x.onclick=function(e){e.stopPropagation();close();};_card.appendChild(_x);}
}
function open(){if(!document.getElementById('qw-style')){var s=document.createElement('style');s.id='qw-style';s.textContent=CSS;document.head.appendChild(s);}ovl=document.createElement('div');ovl.id='qw-ovl';document.body.appendChild(ovl);step=0;render();}
function close(){if(ovl){ovl.parentNode.removeChild(ovl);ovl=null;}}
function toast(msg){var t=document.getElementById('qw-toast');if(!t){t=document.createElement('div');t.id='qw-toast';document.body.appendChild(t);}t.innerHTML='<span>'+msg+'</span>';clearTimeout(window.__qwTt);window.__qwTt=setTimeout(function(){if(t.parentNode)t.parentNode.removeChild(t);},2600);}
/* ===== 加購商品注意事項(除濕機自動彈；AIRMON併入原機型提醒) ===== */
var _TERMS={
 dh:{pill:'📦 另行宅配',title:'三菱重工除濕機 DH18W-T 織紋白',body:
  '<div class="qwt-intro">本項目為冷氣清洗服務限定加購商品，須與冷氣清洗服務同筆訂購。</div>'
  +'<p>三菱重工除濕機為實體宅配商品，將於訂單確認後由物流另行配送至指定地址，不會由清洗技師攜帶，亦不一定與冷氣清洗服務於同日送達。</p>'
  +'<div class="qwt-h">加購內容</div><ul class="qwt-ul"><li>三菱重工除濕機</li><li>物流宅配到府</li><li>原廠保固服務</li><li>加贈冷氣清洗75折折價券 1 張，限次回使用</li></ul>'
  +'<div class="qwt-h">配送及收件說明</div><p>除濕機與冷氣清洗服務為不同作業流程：</p><ul class="qwt-ul"><li>冷氣清洗服務：由約時人員聯繫安排技師到府</li><li>除濕機加購商品：由物流另行安排宅配</li></ul><p>實際出貨及到貨時間，將依訂單確認、商品庫存及物流配送狀況為準。</p><div class="qwt-note">※ 除濕機不會由清洗技師於服務當日攜帶或交付。</div><div class="qwt-note">※ 除濕機到貨日期與冷氣清洗服務日期可能不同。</div>'
  +'<div class="qwt-h">75折折價券發放說明</div><p>加購除濕機並完成本次冷氣清洗服務者，將加贈「冷氣清洗75折折價券」1 張，限定次回購買冷氣清洗服務時使用。</p><ul class="qwt-ul"><li><b>發放時間：</b>本次冷氣清洗服務完成日之次一工作日。</li><li><b>發放方式：</b>客服將透過 LINE 官方帳號訊息通知並發放折價券。</li><li><b>領取條件：</b>請務必於折價券發放前完成 LINE 官方帳號好友加入，並確認可正常接收訊息。</li></ul><p>如本次冷氣清洗服務未完成，包含客戶取消服務、現場環境不符合施作條件、空調設備故障或其他因素致服務無法完成，恕不贈送 75 折折價券。</p><div class="qwt-note">※ 折價券僅限次回冷氣清洗服務使用，不適用於本次訂單。</div><div class="qwt-note">※ 折價券使用期限、適用項目、最低購買條件及其他使用限制，依券面及活動規則所載內容為準。</div>'
  +'<div class="qwt-h">取消、退換貨及售後說明</div><p>本商品屬網路購買之實體宅配商品，消費者自收到商品次日起享有 7 日猶豫期，猶豫期並非試用期。</p><p>如需辦理退貨，請於收到商品後 7 日內聯繫客服提出申請，請勿自行寄回。</p><p>辦理退貨時，商品及相關內容物應保持完整，包括：</p><ul class="qwt-ul"><li>除濕機主機</li><li>原廠紙箱及包裝材料</li><li>說明書及保證書</li><li>配件及贈品</li></ul><p>消費者得於確認商品外觀、規格及功能所必要的範圍內拆封檢查；如因超出必要檢查範圍之使用，造成商品刮傷、污損、缺件、包裝嚴重毀損或其他商品價值減損情形，將依商品實際狀況依法處理。</p><p>如商品收到時有外觀損傷、缺件、無法正常運作或其他異常，請保留商品、包裝及相關內容物，並儘速聯繫客服協助處理。</p><p>設備後續如發生功能異常或故障，將依原廠保固及檢測流程辦理維修或相關售後服務。</p><div class="qwt-note">※ 除濕機商品之配送、退換貨及原廠保固，與冷氣清洗服務之預約、改約、取消及服務保固分開計算。</div><div class="qwt-note">※ 冷氣清洗服務取消或改期，不代表除濕機訂單將同步取消，仍須另行聯繫客服辦理。</div>'},
 air:{pill:'🔧 到府安裝',title:'AIRMON 智慧遠端控制器 MHICAD-WF100',body:
  '<div class="qwt-intro">本項目為冷氣清洗服務限定加購商品，須與冷氣清洗服務同筆訂購。</div>'
  +'<p>智慧遠端控制器將由技師於約定的冷氣清洗服務日攜帶至現場，並協助完成設備安裝、連線設定及功能確認，不會事先或另行宅配給客戶。</p>'
  +'<div class="qwt-h">適用機型</div><p>「AIRMON 智慧遠端控制器」僅適用於三菱重工家用壁掛室內機，請確認您的機型後再購買。</p><img class="qwt-img" src="https://img.1shop.tw/ZLDl7P1ybNpzP89AO5Q6n98k/BW4907rb3bP61BDVNQGK6kwy/600x.png" alt="適用機型對照"><a class="qwt-link" href="https://www.heavyduty.com.tw/product/Accessories/AIRMON_iLiving.html" target="_blank" rel="noopener">最新適用空調機型｜詳洽官網專區 →</a>'
  +'<div class="qwt-h">加購內容</div><ul class="qwt-ul"><li>智慧遠端控制器設備</li><li>技師到府安裝</li><li>基本連線設定及功能確認</li></ul>'
  +'<div class="qwt-h">安裝及適用條件</div><p>實際能否安裝，仍須依現場空調型號、設備配置、安裝環境及網路條件確認。</p><p>如現場確認設備型號或環境不符合安裝條件，將由客服協助辦理本加購項目後續退款事宜。</p>'
  +'<div class="qwt-h">取消、退換貨及售後說明</div><p>如需取消本加購項目，請於設備拆封及安裝前聯繫客服提出。</p><p>智慧遠端控制器經技師完成拆封、安裝、接線、配對或啟用後，即非全新未使用狀態，非因商品瑕疵之個人喜好、操作習慣或其他因素，恕不接受一般退換貨。</p><p>如設備於安裝後發生無法連線、功能異常或其他故障情形，將由客服安排檢測，並依檢測結果及原廠保固規定辦理維修或更換。</p><div class="qwt-note">※ 本商品為設備搭配到府安裝之加購項目，不另行宅配。</div><div class="qwt-note">※ 如消費者依法提出解除契約，因設備已完成安裝或使用而產生拆卸、復原、材料耗用或商品價值減損者，將依實際情況依法處理。</div>'}
};
function _readStamp(){try{var d=new Date(),p=function(n){return (n<10?'0':'')+n;};return d.getFullYear()+'/'+p(d.getMonth()+1)+'/'+p(d.getDate())+' '+p(d.getHours())+':'+p(d.getMinutes());}catch(e){return '';}}
/* ===== 除濕機期望配送日選擇：D+2工作天起、擋週日/國定假日、旺季4-9月週六可配送、不可回溯 ===== */
var _DHHOLA=["20260101","20260215","20260216","20260217","20260218","20260219","20260220","20260227","20260228","20260403","20260404","20260405","20260406","20260501","20260619","20260925","20260928","20261009","20261010","20261025","20261026","20261225","20270101","20270204","20270205","20270206","20270207","20270208","20270209","20270210","20270228","20270301","20270404","20270405","20270406","20270430","20270501","20270609","20270915","20270928","20271010","20271011","20271025","20271224","20271225","20271231"];
var _DHHOL={};_DHHOLA.forEach(function(d){_DHHOL[d]=1;});
function _dhKey(dt){var m=dt.getMonth()+1,d=dt.getDate();return dt.getFullYear()+((m<10?'0':'')+m)+((d<10?'0':'')+d);}
function _dhBlocked(dt){if(_DHHOL[_dhKey(dt)])return true;var w=dt.getDay();if(w===0)return true;if(w===6){var m=dt.getMonth()+1;return !(m>=4&&m<=9);}return false;}
function _dhMin(){var d=new Date();d.setHours(12,0,0,0);var n=0;while(n<2){d.setDate(d.getDate()+1);if(!_dhBlocked(d))n++;}return d;}
function _dhFmt(dt){var m=dt.getMonth()+1,d=dt.getDate();return dt.getFullYear()+'/'+(m<10?'0':'')+m+'/'+(d<10?'0':'')+d;}
function showDeliveryPicker(onDone){
 if(document.getElementById('qw-dhcal'))return;
 var MIN=_dhMin();var minMonth=new Date(MIN.getFullYear(),MIN.getMonth(),1);var view=new Date(minMonth);var selDate=null,selSlot=null;
 var ov=document.createElement('div');ov.id='qw-dhcal';
 ov.style.cssText='position:fixed;inset:0;z-index:100001;background:rgba(4,20,40,.6);display:flex;align-items:center;justify-content:center;padding:14px;font-family:"PingFang TC","Microsoft JhengHei",system-ui,sans-serif';
 ov.innerHTML='<div style="background:#fff;border-radius:18px;max-width:420px;width:100%;max-height:92vh;overflow:auto;box-shadow:0 14px 40px rgba(0,0,0,.35)">'
 +'<div style="background:linear-gradient(135deg,#042C53,#0C447C);color:#fff;padding:15px 18px"><div style="font-size:11px;font-weight:800;opacity:.85">📦 三菱重工除濕機 · 另行宅配</div><div style="font-size:16.5px;font-weight:900;margin-top:3px">選擇期望配送日期與時段</div></div>'
 +'<div style="padding:15px 18px 18px">'
 +'<div style="font-size:12px;font-weight:800;color:#042C53;margin-bottom:8px">1. 期望配送日期<span style="color:#7c8998;font-weight:600">（週日/國定假日不可選）</span></div>'
 +'<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:7px"><button data-nav="-1" style="width:30px;height:30px;border-radius:8px;border:1.5px solid #d3ddea;background:#fff;color:#042C53;font-size:15px;font-weight:800;cursor:pointer">‹</button><b id="qwdh-ml" style="font-size:14px"></b><button data-nav="1" style="width:30px;height:30px;border-radius:8px;border:1.5px solid #d3ddea;background:#fff;color:#042C53;font-size:15px;font-weight:800;cursor:pointer">›</button></div>'
 +'<div id="qwdh-wd" style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:3px"></div>'
 +'<div id="qwdh-days" style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px"></div>'
 +'<div style="font-size:12px;font-weight:800;color:#042C53;margin:16px 0 8px">2. 時段</div>'
 +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><button data-slot="上午" class="qwdh-slot" style="border:1.5px solid #d3ddea;border-radius:12px;padding:12px;font-size:14px;font-weight:800;background:#fff;color:#16202b;cursor:pointer">上午<span style="display:block;font-size:11px;font-weight:600;color:#7c8998;margin-top:2px">約 09:00–12:00</span></button><button data-slot="下午" class="qwdh-slot" style="border:1.5px solid #d3ddea;border-radius:12px;padding:12px;font-size:14px;font-weight:800;background:#fff;color:#16202b;cursor:pointer">下午<span style="display:block;font-size:11px;font-weight:600;color:#7c8998;margin-top:2px">約 13:00–18:00</span></button></div>'
 +'<div style="font-size:11.5px;color:#8a6410;background:rgba(184,134,11,.09);border:1px solid rgba(184,134,11,.25);border-radius:10px;padding:10px 12px;line-height:1.65;margin-top:15px">⚠️ 此為<b>期望配送時間</b>，實際仍需依物流量能為準，司機將於配送前<b>去電聯繫</b>確認。</div>'
 +'<div id="qwdh-sum" style="font-size:12.5px;color:#042C53;font-weight:800;text-align:center;margin-top:13px;min-height:17px"></div>'
 +'<button id="qwdh-ok" disabled style="width:100%;border:none;border-radius:12px;padding:14px;font-size:15px;font-weight:900;background:#b7c2cf;color:#fff;margin-top:9px;cursor:not-allowed">確認加購除濕機</button>'
 +'<button id="qwdh-cancel" style="width:100%;border:none;background:none;color:#7c8998;font-size:12.5px;margin-top:10px;cursor:pointer;text-decoration:underline">取消，不加購除濕機</button>'
 +'</div></div>';
 document.body.appendChild(ov);
 var wd=['日','一','二','三','四','五','六'];
 ov.querySelector('#qwdh-wd').innerHTML=wd.map(function(n,i){return '<div style="text-align:center;font-size:11px;font-weight:800;color:'+((i===0||i===6)?'#c0392b':'#7c8998')+';padding:2px 0">'+n+'</div>';}).join('');
 function render(){
  ov.querySelector('#qwdh-ml').textContent=view.getFullYear()+' 年 '+(view.getMonth()+1)+' 月';
  var pad=new Date(view.getFullYear(),view.getMonth(),1).getDay();var dim=new Date(view.getFullYear(),view.getMonth()+1,0).getDate();
  var h='';for(var i=0;i<pad;i++)h+='<div></div>';
  for(var d=1;d<=dim;d++){var dt=new Date(view.getFullYear(),view.getMonth(),d);var dis=(dt<MIN)||_dhBlocked(dt);var sel=selDate&&_dhKey(selDate)===_dhKey(dt);var hol=_DHHOL[_dhKey(dt)];
   var st='aspect-ratio:1/1;border-radius:9px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:13.5px;font-weight:700;';
   if(sel)st+='background:#042C53;color:#fff;';else if(dis)st+='background:#f0f3f7;color:#7c8998;opacity:.45;cursor:not-allowed;';else st+='background:#fff;border:1.5px solid #d3ddea;color:#16202b;cursor:pointer;';
   h+='<div '+(dis?'':'data-d="'+d+'"')+' style="'+st+'">'+d+(hol?'<span style="font-size:8px;font-weight:800;color:'+(sel?'#f5c4be':'#c0392b')+';line-height:1;margin-top:1px">假</span>':'')+'</div>';}
  ov.querySelector('#qwdh-days').innerHTML=h;
  var pv=ov.querySelector('[data-nav="-1"]');pv.disabled=(view<=minMonth);pv.style.opacity=(view<=minMonth)?'.35':'1';
 }
 function sum(){var el=ov.querySelector('#qwdh-sum');var ok=ov.querySelector('#qwdh-ok');
  if(selDate&&selSlot){el.textContent='已選：'+_dhFmt(selDate)+'（'+selSlot+'）';ok.disabled=false;ok.style.background='#042C53';ok.style.cursor='pointer';}
  else{el.textContent=selDate?'請再選時段':'請選擇日期與時段';ok.disabled=true;ok.style.background='#b7c2cf';ok.style.cursor='not-allowed';}}
 ov.addEventListener('click',function(e){
  var nav=e.target.closest('[data-nav]');if(nav){var dir=+nav.getAttribute('data-nav');var nv=new Date(view.getFullYear(),view.getMonth()+dir,1);if(nv>=minMonth){view=nv;render();}return;}
  var day=e.target.closest('[data-d]');if(day){selDate=new Date(view.getFullYear(),view.getMonth(),+day.getAttribute('data-d'));render();sum();return;}
  var slot=e.target.closest('.qwdh-slot');if(slot){selSlot=slot.getAttribute('data-slot');[].slice.call(ov.querySelectorAll('.qwdh-slot')).forEach(function(x){x.style.borderColor='#d3ddea';x.style.background='#fff';x.style.color='#16202b';});slot.style.borderColor='#042C53';slot.style.background='#E6F1FB';slot.style.color='#042C53';sum();return;}
 });
 ov.querySelector('#qwdh-cancel').onclick=function(){if(ov.parentNode)ov.parentNode.removeChild(ov);};
 ov.querySelector('#qwdh-ok').onclick=function(){if(!selDate||!selSlot)return;window.__qsDhDelivery=_dhFmt(selDate)+'（'+selSlot+'）';if(ov.parentNode)ov.parentNode.removeChild(ov);if(onDone)onDone();};
 render();sum();
}
function showTerms(k,mode,onConfirm){
 var t=_TERMS[k];if(!t||document.getElementById('qw-terms'))return;
 var gate=(mode==='gate');
 var ft=gate?'<div class="qwt-ft"><label class="qwt-chk"><input type="checkbox" class="qwt-cb"> 我已閱讀並瞭解上述加購注意事項</label><button class="qwt-ok" type="button" disabled>確認加購</button><div class="qwt-hint">勾選後才能加購；系統會記錄您已閱讀</div></div>':'<div class="qwt-ft"><button class="qwt-ok" type="button">我知道了</button></div>';
 var ov=document.createElement('div');ov.id='qw-terms';
 ov.innerHTML='<div class="qwt-m"><div class="qwt-hd"><div class="qwt-pill">'+t.pill+'</div><h3>'+t.title+'</h3><button class="qwt-x" type="button" aria-label="關閉">×</button></div><div class="qwt-bd">'+t.body+'</div>'+ft+'</div>';
 document.body.appendChild(ov);
 function cl(){if(ov.parentNode)ov.parentNode.removeChild(ov);}
 ov.querySelector('.qwt-x').onclick=cl;
 ov.onclick=function(e){if(e.target===ov)cl();};
 var ok=ov.querySelector('.qwt-ok');
 if(gate){var cb=ov.querySelector('.qwt-cb');cb.onchange=function(){ok.disabled=!cb.checked;};ok.onclick=function(){if(!cb.checked)return;window['__qsRead_'+k]=_readStamp();cl();var doAdd=function(){if(onConfirm){onConfirm();}else{qty[k]=1;render();}};if(k==='dh'){showDeliveryPicker(doAdd);}else{doAdd();}};}
 else{ok.onclick=cl;}
}

var api={
  start:function(){step='area';render();},
  skip:function(){close();},
  pickCity:function(v){areaCity=v||null;areaDist=null;areaCls=null;qty.rm=0;render();},
  pickDist:function(v){areaDist=v||null;areaCls=classify(areaCity,areaDist);qty.rm=(areaCls==='remote')?1:0;render();},
  pickEnv:function(k){env=k;if(k!=='biz')qty.bz=0;render();},
  pick:function(k){if(k==='dh'||k==='air'){showTerms(k,'gate');return;}if(k==='hi'&&(sumKeys(INK)+sumKeys(['o1','om']))<1)return;var was=qty[k]||0;if(!qty[k])qty[k]=1;render();},
  terms:function(k){showTerms(k,'read');},
  zoom:function(src){if(document.getElementById('qw-zoom'))return;var z=document.createElement('div');z.id='qw-zoom';z.innerHTML='<img src="'+src+'" alt="">';z.onclick=function(){if(z.parentNode)z.parentNode.removeChild(z);};document.body.appendChild(z);},
  chg:function(k,d){var v=Math.max(0,(qty[k]||0)+d);if(k==='hi'){var mx=sumKeys(INK)+sumKeys(['o1','om']);if(v>mx)v=mx;}qty[k]=v;render();},
  pickPlan:function(k){plan=k;window.__qsPlan=k;render();},
  go:function(n){if(n===3){var out=sumKeys(['o1','om']),indoor=sumKeys(['wall','cs','cm','cl','m4','f4']);if(out===0&&indoor===0){alert('請至少選擇一台室內機或室外機清洗喔！\n可回上一步（室內機／室外機）選擇台數。');return;}}step=n;render();},
  finish:function(){
    if(sumKeys(['wall','cs','cm','cl','m4','f4'])===0&&sumKeys(['o1','om'])===0){alert('請至少選擇一台室內機或室外機清洗喔！');return;}
    /* 動態對應：不靠寫死商品ID，改用「名稱開頭比對」找出當前頁面的真實按鈕與ID
       （1SHOP複製頁面後商品ID會全變，寫死ID會失效；此法在任何頁面都可用）*/
    function realProds(){
      var arr=[],bm=window.__qsBtnMap||{};
      for(var pid in bm){if(!bm.hasOwnProperty(pid))continue;var b=bm[pid];var wrap=(b&&b.closest)?b.closest('.product-wrap'):null;var h3=wrap?wrap.querySelector('h3'):null;arr.push({pid:pid,btn:b,name:h3?(h3.textContent||'').trim():''});}
      return arr;
    }
    function resolve(nm){var a=realProds();var i;for(i=0;i<a.length;i++){if(a[i].name.indexOf(nm)===0)return a[i];}for(i=0;i<a.length;i++){if(a[i].name.indexOf(nm)>-1)return a[i];}return null;}
    if(env==='biz')qty.bz=bzQty();qty.tf=tfQty();
    if(areaCls==='remote')qty.rm=1;
    var items=INDOOR.concat(OUTLIST,ADDON).filter(function(x){return qty[x.k]>0;});
    var jobs=[];items.forEach(function(x){var r=resolve(x.n);if(r){for(var i=0;i<qty[x.k];i++){jobs.push(r);}}});
    if(jobs.length===0){alert('抱歉，加入購物車時發生問題，請再試一次；若持續失敗，可關閉精靈自行選購。');return;}
    var btn=ovl.querySelector('.btn.pri');if(btn){btn.disabled=true;btn.textContent='加入中…';}
    var i=0;
    function next(){
      if(i>=jobs.length){
        window.__qsPlan=plan;window.__qsEnv=env;window.__qsAreaCls=areaCls;window.__qsAreaCity=areaCity;window.__qsAreaDist=areaDist;
        if(window.__qsApplyPlanCoupon)setTimeout(window.__qsApplyPlanCoupon,900);
        setTimeout(function(){window.__qsAdding=false;},1800);
        close();toast('已為您加入購物車，可再調整或結帳');
        return;
      }
      var job=jobs[i++];
      try{if(window.viewProduct)window.viewProduct(job.btn||null,job.pid);}catch(e){}
      setTimeout(next,550);
    }
    window.__qsAdding=true;
    next();
  }
};
window.__qw=api;
/* 頁面(自己下單)加購把關:按除濕機/AIRMON 的原生「+加入」時,先跳注意事項gate,勾選確認才真的加(與精靈一致、並記錄已閱讀) */
if(!window.__qsGateHook){window.__qsGateHook=true;
 document.addEventListener('click',function(e){
  try{
   if(window.__qsGatePass)return;
   var el=e.target;if(!el||!el.closest)return;
   var card=el.closest('.product-wrap');if(!card||el.closest('#qw-ovl'))return;
   var h=card.querySelector('h3');var nm=h?(h.textContent||''):'';
   var k=(nm.indexOf('AIRMON')>=0)?'air':((nm.indexOf('除濕機')>=0)?'dh':null);
   if(!k)return;var _done=(k==='dh')?window.__qsDhDelivery:window['__qsRead_'+k];if(_done)return;
   var btn=el.closest('button,a');if(!btn)return;
   var _bt=(btn.textContent||'').replace(/\s/g,'');if(_bt.indexOf('加入')<0&&_bt.indexOf('加購')<0)return;
   e.preventDefault();e.stopImmediatePropagation();
   showTerms(k,'gate',function(){var r=_resolveBtn((k==='air')?'AIRMON':'三菱重工除濕機');if(r&&window.viewProduct){try{window.viewProduct(r.btn,r.pid);}catch(_){}}});
  }catch(err){}
 },true);
}
/* 載入時即注入「結帳彈窗方案note」樣式（由1SHOP內文JS的結帳彈窗共用，省內文CSS字數）*/
if(!document.getElementById('qw-ck')){var _cs=document.createElement('style');_cs.id='qw-ck';_cs.textContent='.qs-pnote{padding:7px 3px;text-align:center;font-size:14px;font-weight:900;line-height:1.3;white-space:nowrap;border-radius:0 0 10px 10px;margin-top:-1px;-webkit-text-stroke:.4px currentColor}.qs-pnote-std{background:#E6F1FB;color:#0C447C}.qs-pnote-early{background:rgba(184,134,11,.14);color:#8a6410}.qs-plan.sel::after{content:"\\2713";position:absolute;top:6px;right:6px;width:22px;height:22px;background:#0C447C;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800}#qsf{background:#fff;border:1px solid #e7edf3;border-radius:14px;padding:18px 14px 16px;box-shadow:0 4px 16px rgba(4,44,83,.06);margin:14px 0 20px}#qsf .qsf-h{display:flex;align-items:center;gap:7px;font-size:16px;font-weight:900;color:#042C53;margin-bottom:14px;-webkit-text-stroke:.3px #042C53}#qsf .qsf-i{color:#B8860B;font-size:17px}#qsf .qsf-g{display:grid;grid-template-columns:repeat(4,1fr);gap:0}#qsf .qsf-li{text-align:center;padding:8px 10px;position:relative}#qsf .qsf-li+.qsf-li::before{content:"";position:absolute;left:0;top:12px;bottom:12px;width:1px;background:#e7edf3}#qsf .qsf-ic{color:#B8860B;display:flex;justify-content:center;margin-bottom:9px}#qsf .qsf-ic svg{width:26px;height:26px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;display:block}#qsf .qsf-li b{display:block;font-weight:800;color:#042C53;font-size:13.5px;line-height:1.35;margin-bottom:4px}#qsf .qsf-s{font-size:11px;color:#6a7684;line-height:1.4}@media(max-width:640px){#qsf .qsf-g{grid-template-columns:1fr 1fr}#qsf .qsf-li{padding:12px 8px}#qsf .qsf-li:nth-child(3)::before{display:none}#qsf .qsf-li:nth-child(3),#qsf .qsf-li:nth-child(4){border-top:1px solid #e7edf3}}.qsh-ey{text-align:center;font-size:12px;font-weight:800;color:#B8860B;letter-spacing:2px;margin:16px 0 0;line-height:1.4}h1.qsh-u{margin-top:3px!important;padding-bottom:14px!important;position:relative;font-weight:900!important;-webkit-text-stroke:.45px currentColor}h1.qsh-u::after{content:"";position:absolute;left:50%;bottom:2px;transform:translateX(-50%);width:34px;height:3px;background:#d9b24a;border-radius:2px}.btn-cart{display:none!important}.qs-plan-h{margin:0 0 2px!important}.qs-plan-sub{margin:0 0 8px!important}.qs-planbox{margin-bottom:8px!important}#qs-modal p{margin:2px 0 9px!important;line-height:1.6!important}#qs-modal h3{margin:0 0 6px!important}#qs-modal ul{margin:0 0 4px!important;padding-left:20px!important}#qs-modal li{margin-bottom:6px!important;line-height:1.5!important}.qs-plan-call{margin-top:8px!important}#qs-agree-l{white-space:nowrap!important;font-size:12.5px!important}.product-wrap .price{display:flex!important;align-items:baseline;justify-content:flex-end;gap:6px}.product-wrap .price .base{order:-1}';document.head.appendChild(_cs);}

function cartHasProduct(){try{var c=(window._UserSession&&window._UserSession.Cart)||[];for(var i=0;i<c.length;i++){if(c[i].ProductType===0)return true;}}catch(e){}return false;}
function fixCards(){
  try{
    if(window.innerWidth>640)return; /* 只修手機；電腦版原本就正常 */
    var ws=document.querySelectorAll('.product-row .product-wrap');
    for(var i=0;i<ws.length;i++){var w=ws[i];
      var h3=w.querySelector('h3');if(!h3)continue;
      var r=h3.getBoundingClientRect();if(r.width>0&&r.height<=r.width*1.8)continue; /* 沒破版就不動 */
      var ac=w.querySelector('.action-content');if(ac){ac.style.setProperty('display','block','important');ac.style.setProperty('grid-template-columns','none','important');}
      var prod=w.querySelector('.product');if(prod)prod.style.setProperty('align-items','flex-start','important');
      var acts=w.querySelector('.actions');if(acts)acts.style.setProperty('display','block','important');
      var c3=w.querySelector('.col-3');if(c3){c3.style.setProperty('flex','0 0 92px','important');c3.style.setProperty('max-width','92px','important');c3.style.setProperty('align-self','flex-start','important');c3.style.setProperty('margin-top','4px','important');}
    }
  }catch(e){}
}
function injectFeat(){
  try{
    if(document.getElementById('qsf'))return true;
    var hs=document.querySelectorAll('h1'),head=null;
    for(var i=0;i<hs.length;i++){if((hs[i].textContent||'').trim()==='選擇您要清洗的項目'){head=hs[i];break;}}
    if(!head)return false;
    var d=document.createElement('div');d.id='qsf';
    d.innerHTML='<div class="qsf-h"><span class="qsf-i">✦</span>服務特色</div><div class="qsf-g">'
      +'<div class="qsf-li"><div class="qsf-ic"><svg viewBox="0 0 24 24"><path d="M12 3l7 2.5v5.5c0 4.5-3 7-7 8-4-1-7-3.5-7-8V5.5z"/><path d="M9 12l2 2 4-4"/></svg></div><b>30 天功能保證</b><div class="qsf-s">原廠技師</div></div>'
      +'<div class="qsf-li"><div class="qsf-ic"><svg viewBox="0 0 24 24"><path d="M4 9h9a2.5 2.5 0 1 0-2.4-3.2"/><path d="M4 15h13a2.5 2.5 0 1 1-2.4 3.2"/><path d="M4 12h6"/></svg></div><b>異味過敏改善</b><div class="qsf-s">深層殺菌藥水</div></div>'
      +'<div class="qsf-li"><div class="qsf-ic"><svg viewBox="0 0 24 24"><path d="M4 21c0-3 1.6-4.6 4.2-4.6"/><path d="M8.6 16.6 18 7.2a2.1 2.1 0 0 0-3-3L5.6 13.6z"/></svg></div><b>蒸發器深刷</b><div class="qsf-s">有效移除表面積垢</div></div>'
      +'<div class="qsf-li"><div class="qsf-ic"><svg viewBox="0 0 24 24"><path d="M12 3c3.5 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2.5-6 6-10z"/><path d="M10 14a2 2 0 0 0 2 2"/></svg></div><b>高壓水柱穿透</b><div class="qsf-s">清出髒水看得見</div></div></div>';
    head.parentNode.insertBefore(d,head);
    return true;
  }catch(e){return true;}
}
function styleHeads(){
  try{
    var map=[['選擇您要清洗的項目','STEP 1・選購'],['特殊加購項目','STEP 2・加購'],['目前已經選購','STEP 3・結帳']];
    var hs=document.querySelectorAll('h1');
    for(var m=0;m<map.length;m++){
      for(var i=0;i<hs.length;i++){
        var h=hs[i];
        if((h.textContent||'').trim().indexOf(map[m][0])!==0)continue;
        if(h.getAttribute('data-qsh')){break;}
        h.setAttribute('data-qsh','1');
        h.className=((h.className||'')+' qsh-u').trim();
        var ey=document.createElement('div');ey.className='qsh-ey';ey.textContent=map[m][1];
        h.parentNode.insertBefore(ey,h);
        break;
      }
    }
  }catch(e){}
}
function addBrandBadge(){
  try{
    var ov=document.getElementById('qs-ovl');
    if(!ov||(ov.textContent||'').indexOf('結帳前請確認')<0)return;
    var lis=ov.querySelectorAll('li'),li=null;
    for(var i=0;i<lis.length;i++){if((lis[i].textContent||'').indexOf('本服務僅適用')>=0){li=lis[i];break;}}
    if(!li||li.querySelector('.qs-mhi'))return;
    var img=document.createElement('img');img.className='qs-mhi';
    img.src='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/mhi-badge.jpg';
    img.alt='認明三菱重工 MITSUBISHI HEAVY INDUSTRIES';
    img.style.cssText='width:100%;max-width:200px;border-radius:11px;display:block;margin:9px auto 2px;border:1px solid #e2e8f1';
    li.appendChild(img);
  }catch(e){}
}
/* 人氣加購＋配送標籤＋注意事項連結 — 貼在 AIRMON 智慧遠端控制器、三菱重工除濕機 的商品卡 */
function addPopularBadge(){
  try{
    var map=[{key:'AIRMON',info:'🔧 到府安裝',tk:'air'},{key:'除濕機',info:'📦 另行宅配',tk:'dh',gift:'🎁 加贈清洗75折券'}];
    var ws=document.querySelectorAll('.product-row .product-wrap');
    var POP='display:inline-flex;align-items:center;background:linear-gradient(100deg,#b8860b,#d9b24a);color:#fff;font-size:11px;font-weight:800;border-radius:999px;padding:4px 12px;line-height:1;white-space:nowrap;box-shadow:0 2px 8px rgba(184,134,11,.32)';
    var INFO='display:inline-flex;align-items:center;background:#E6F1FB;color:#0C447C;border:1px solid #cddff0;font-size:11px;font-weight:800;border-radius:999px;padding:4px 12px;line-height:1;white-space:nowrap';
    for(var i=0;i<ws.length;i++){
      var w=ws[i],h3=w.querySelector('h3');if(!h3)continue;
      var nm=(h3.textContent||'').trim(),m=null;
      for(var j=0;j<map.length;j++){if(nm.indexOf(map[j].key)>=0){m=map[j];break;}}
      if(!m)continue;
      if(w.querySelector('.qs-tags'))continue;
      var box=document.createElement('div');box.className='qs-tags';
      box.style.cssText='display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 2px;align-self:flex-start';
      var GIFT='display:inline-flex;align-items:center;background:#fdeeec;color:#c0392b;border:1px solid #f3c9c4;font-size:11px;font-weight:800;border-radius:999px;padding:4px 12px;line-height:1;white-space:nowrap';
      box.innerHTML='<span style="'+POP+'">🔥 人氣加購</span><span style="'+INFO+'">'+m.info+'</span>'+(m.gift?'<span style="'+GIFT+'">'+m.gift+'</span>':'');
      h3.parentNode.insertBefore(box,h3.nextSibling);
      var lk=document.createElement('span');lk.className='qs-termlink';lk.textContent='📋 注意事項 ›';
      lk.style.cssText='display:inline-block;margin:0 0 4px;font-size:11.5px;font-weight:800;color:#0C447C;text-decoration:underline;text-underline-offset:2px;cursor:pointer;align-self:flex-start';
      (function(tk){lk.onclick=function(){if(window.__qw)window.__qw.terms(tk);};})(m.tk);
      box.parentNode.insertBefore(lk,box.nextSibling);
    }
  }catch(e){}
}
/* 車馬費純自動:隱藏商品頁的車馬費加購卡,客戶不能手動加(由精靈依規則自動加入購物車) */
function hideTravelCard(){try{var ws=document.querySelectorAll('.product-row .product-wrap');for(var i=0;i<ws.length;i++){var h=ws[i].querySelector('h3');var nm=h?(h.textContent||''):'';if(nm.indexOf('車馬費')>=0||nm.indexOf('偏遠地區加價')>=0||nm.indexOf('方案折扣校正')>=0){ws[i].style.display='none';}}}catch(e){}}
/* 購物車裡的「方案折扣校正」改成白話說明、隱藏數量/單價/刪除鈕(系統自動管理,客戶不需操作) */
function styleCorrLine(){try{var items=[].slice.call(document.querySelectorAll('.cart-item'));items.forEach(function(it){var h=it.querySelector('.detail h4')||it.querySelector('h4')||it.querySelector('.item-name');if(!h)return;if(it.classList.contains('qs-corr-line')||(h.textContent||'').indexOf('方案折扣校正')>=0){it.classList.add('qs-corr-line');h.textContent='加購品優惠價・不參與方案折扣';h.style.cssText='color:#0C447C;font-weight:700;font-size:13px';var hide='position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important';var q=it.querySelector('.quantity');if(q)q.style.cssText=hide;var tool=it.querySelector('.item-tool');if(tool)tool.style.cssText=hide;var qty=Number(it.getAttribute('data-qty'))||0;var meta=it.querySelector('.meta');if(meta)meta.innerHTML='<span style="color:#0C447C;font-weight:700">＋ NT$ '+qty.toLocaleString()+'</span>';}});}catch(e){}}
/* 自己下單時,系統自動加入的費用(車馬費/商用/偏遠)在購物車項目下補一行白話說明,避免客戶覺得莫名多收 */
var _FEENOTE=[
 {m:'車馬費',t:'🚗 只洗 1 台室外機需加收車馬費；清洗 2 台室外機以上免加收車馬費'},
 {m:'商用/重油汙加價',t:'🏢 營業場所/重油汙加價，每台 +$1,000'},
 {m:'偏遠地區加價',t:'📍 您的服務地址屬偏遠地區，每張訂單收一次 +$600'}
];
function autoFeeNotes(){try{
 var items=[].slice.call(document.querySelectorAll('.cart-item'));
 items.forEach(function(it){
  if(/cart-empty/.test(it.className)||(it.closest&&it.closest('#qw-ovl')))return;
  var content=it.querySelector('.item-content')||it;
  if(content.querySelector('.qs-feenote'))return;
  var nmEl=it.querySelector('.item-name');var nm=nmEl?(nmEl.textContent||''):(it.textContent||'');
  for(var i=0;i<_FEENOTE.length;i++){var f=_FEENOTE[i];
   if(nm.indexOf(f.m)>=0){
    var d=document.createElement('div');d.className='qs-feenote';d.textContent=f.t;
    d.style.cssText='clear:both;font-size:12px;color:#0C447C;background:#E6F1FB;border-radius:7px;padding:6px 10px;margin:8px 0 2px;line-height:1.5;font-weight:600';
    content.appendChild(d);break;
   }
  }
 });
}catch(e){}}
var _PLANI={early:{img:'earlybird2.jpg',name:'早鳥方案 · 85折',sub:'安排 30 天後到府服務',nc:'#B8860B',sc:'#8a6a1f'},std:{img:'standard.jpg',name:'標準方案 · 95折',sub:'安排兩週內到府服務',nc:'#0C447C',sc:'#5a6672'}};
var _PLANB='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/';
function _curPlan(){return (window.__qsPlan==='early')?'early':'std';}
function _renderPlanSum(wrap,collapsed){
  var p=_curPlan();
  if(collapsed){
    var info=_PLANI[p];
    wrap.innerHTML='<div style="font-size:11.5px;color:#8a6a1f;font-weight:700;letter-spacing:.3px;margin:0 0 6px">您選擇的方案</div>'
      +'<div style="display:flex;align-items:center;gap:9px;background:#faf6ea;border:1px solid #ecdcae;border-radius:11px;padding:9px 10px">'
        +'<img src="'+_PLANB+info.img+'" style="width:72px;border-radius:7px;display:block;flex:0 0 auto">'
        +'<div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:900;color:'+info.nc+';white-space:nowrap">'+info.name+'</div><div style="font-size:11px;color:'+info.sc+';margin-top:2px;white-space:nowrap">'+info.sub+'</div></div>'
        +'<button type="button" class="qsps-chg" style="flex:0 0 auto;border:1px solid #d9b24a;background:#fff;color:#8a6410;font-size:12.5px;font-weight:800;border-radius:999px;padding:7px 13px;cursor:pointer;white-space:nowrap">變更</button>'
      +'</div>'
      +'<div style="font-size:11px;color:#9aa7b4;margin-top:5px;padding-left:2px">選錯了?點「變更」可調整方案</div>';
    var c=wrap.querySelector('.qsps-chg');if(c)c.onclick=function(){_renderPlanSum(wrap,false);};
  }else{
    var card=function(k){var info=_PLANI[k];var sel=(k===p);return '<div class="qsps-pick" data-p="'+k+'" style="flex:1;border:'+(sel?'2.5px solid #B8860B':'2px solid #d3dde9')+';border-radius:11px;overflow:hidden;cursor:pointer;position:relative;box-shadow:0 2px 6px rgba(4,44,83,.08)"><img src="'+_PLANB+info.img+'" style="width:100%;display:block">'+(sel?'<div style="position:absolute;top:6px;right:6px;background:#B8860B;color:#fff;font-size:10px;font-weight:800;border-radius:999px;padding:2px 9px">已選</div>':'')+'</div>';};
    wrap.innerHTML='<div style="display:flex;align-items:center;justify-content:space-between;margin:0 0 7px"><span style="font-size:11.5px;color:#8a6a1f;font-weight:700;letter-spacing:.3px">選擇到府方案(越有彈性、折扣越多)</span><button type="button" class="qsps-col" style="border:none;background:none;color:#9aa7b4;font-size:12px;cursor:pointer;text-decoration:underline">收合</button></div>'
      +'<div style="display:flex;gap:9px">'+card('std')+card('early')+'</div>'
      +'<div style="font-size:11px;color:#9aa7b4;margin-top:6px;text-align:center">點方案圖即可切換,折扣即時更新</div>';
    var col=wrap.querySelector('.qsps-col');if(col)col.onclick=function(){_renderPlanSum(wrap,true);};
    var picks=wrap.querySelectorAll('.qsps-pick');
    for(var i=0;i<picks.length;i++){picks[i].onclick=function(){var np=this.getAttribute('data-p');if(np!==_curPlan()){window.__qsPlan=np;try{if(window.__qsApplyPlanCoupon)window.__qsApplyPlanCoupon(function(){});}catch(e){}}_renderPlanSum(wrap,true);};}
  }
}
function addPlanSummary(){
  try{
    var ov=document.getElementById('qs-ovl');
    if(!ov||(ov.textContent||'').indexOf('結帳前請確認')<0)return;
    if(!window.__qsPlan)return;
    var modal=ov.querySelector('#qs-modal')||ov;
    if(modal.querySelector('#qs-plansum-wrap'))return;
    var h3=null,hs=modal.querySelectorAll('h3');
    for(var i=0;i<hs.length;i++){if((hs[i].textContent||'').indexOf('結帳前請確認')>=0){h3=hs[i];break;}}
    if(!h3)return;
    var wrap=document.createElement('div');wrap.id='qs-plansum-wrap';wrap.style.cssText='margin:0 0 14px';
    h3.parentNode.insertBefore(wrap,h3);
    _renderPlanSum(wrap,true);
  }catch(e){}
}
function addContinueBtn(){
  try{
    if(!cartHasProduct())return;
    var h1=null,hs=document.querySelectorAll('h1');
    for(var i=0;i<hs.length;i++){if((hs[i].textContent||'').trim().indexOf('目前已經選購')===0){h1=hs[i];break;}}
    if(!h1)return;
    if(document.getElementById('qs-contbtn-wrap'))return;
    var w=document.createElement('div');w.id='qs-contbtn-wrap';w.style.cssText='margin:2px 0 16px';
    w.innerHTML='<button type="button" id="qs-contbtn" style="width:100%;border:2px dashed #d9b24a;background:#fbf7ec;color:#8a6410;font-size:15px;font-weight:800;border-radius:12px;padding:14px;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:8px"><span style="font-size:18px">＋</span> 還要加購? 繼續選購清洗項目</button><div style="font-size:11.5px;color:#9aa7b4;text-align:center;margin-top:6px">點了會捲回清洗項目列表，已選的都在購物車不會不見</div>';
    h1.parentNode.insertBefore(w,h1.nextSibling);
    w.querySelector('#qs-contbtn').onclick=function(){
      var t=null,hh=document.querySelectorAll('h1');
      for(var j=0;j<hh.length;j++){if((hh[j].textContent||'').trim().indexOf('選擇您要清洗的項目')===0){t=hh[j];break;}}
      if(!t)return;
      var ey=t.previousElementSibling;
      var tgt=(ey&&(ey.className||'').indexOf('qsh-ey')>=0)?ey:t;
      var wy=tgt.getBoundingClientRect().top+window.scrollY-70,sy=window.scrollY,dd=wy-sy,i=0,n=18;
      (function step(){i++;var p=i/n,e=1-Math.pow(1-p,3);window.scrollTo(0,sy+dd*e);if(i<n)setTimeout(step,16);})();
    };
  }catch(e){}
}
function fillConsent(){
  try{
    if(!window.__qsPlan)return;
    var cfs=document.querySelectorAll('[name^="cf-"]'),el=null,row=null;
    for(var i=0;i<cfs.length;i++){
      var r=cfs[i].closest('.form-group');
      var lbl=r?((r.querySelector('label')||{}).textContent||''):'';
      if(/同意存證/.test(lbl)){el=cfs[i];row=r;break;}
    }
    if(!el)return;
    if(row&&row.getAttribute('data-qsc')!=='1'){
      row.style.cssText+=';position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;border:0!important;white-space:nowrap!important;';
      row.setAttribute('data-qsc','1');
    }
    if((el.value||'').indexOf('【結帳前同意存證】')<0){
      var planTxt=(window.__qsPlan==='early')?'早鳥方案(30天後到府・85折)':'標準方案(兩週內到府・95折)';
      var d=new Date(),p=function(n){return (n<10?'0':'')+n;};
      var ts=d.getFullYear()+'/'+p(d.getMonth()+1)+'/'+p(d.getDate())+' '+p(d.getHours())+':'+p(d.getMinutes());
      var rec='【結帳前同意存證】方案:'+planTxt+'｜已詳閱並同意:僅限三菱重工冷氣、機齡15年以上不服務、安裝高度4米以上不服務、機齡10年以上不提供保固、偏遠/商用/挑高加價規範、保固範圍與取消政策、服務規範與隱私權政策'+(window.__qsRead_dh?'｜已閱讀確認「三菱重工除濕機」加購注意事項('+window.__qsRead_dh+')':'')+(window.__qsRead_air?'｜已閱讀確認「AIRMON智慧遠端控制器」加購注意事項('+window.__qsRead_air+')':'')+((window.__qsDhDelivery&&_cartArr().some(function(x){return (x.ProductName||'').indexOf('除濕機')>=0;}))?'｜除濕機期望配送:'+window.__qsDhDelivery:'')+'｜時間:'+ts;
      var st=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;
      st.call(el,rec);
      el.dispatchEvent(new Event('input',{bubbles:true}));
      el.dispatchEvent(new Event('change',{bubbles:true}));
    }
  }catch(e){}
}
function fillEnv(){
  try{
    if(!window.__qsEnv)return;
    var sels=document.querySelectorAll('select[name^="cf-"]'),el=null;
    for(var i=0;i<sels.length;i++){var r=sels[i].closest('.form-group');var lbl=r?((r.querySelector('label')||{}).textContent||''):'';if(/服務環境/.test(lbl)){el=sels[i];break;}}
    if(!el||el.getAttribute('data-qse')==='1')return;
    var want=(window.__qsEnv==='biz')?/營業|重油/:/一般|住家/;
    for(var j=0;j<el.options.length;j++){if(want.test(el.options[j].text||'')){el.selectedIndex=j;el.setAttribute('data-qse','1');el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));break;}}
  }catch(e){}
}
/* ===== 離開精靈後也強制校正：營業場所時，購物車「商用/重油汙加價」數量 = 室內機＋室外機台數 ===== */
var INNAMES=['家用壁掛清洗保養','吊隱式小清洗保養','吊隱式大清洗保養','吊隱式全清洗保養','迷你四方吹清洗保養','四方吹清洗保養'];
function _cartArr(){try{return (window._UserSession&&window._UserSession.Cart)||[];}catch(e){return [];}}
function _indoorInCart(){var c=_cartArr(),n=0;c.forEach(function(x){var nm=x.ProductName||'';for(var i=0;i<INNAMES.length;i++){if(nm.indexOf(INNAMES[i])===0){n+=Number(x.Quantity)||0;break;}}});return n;}
var OUTNAMES=['1對1室外機清洗','1對多室外機清洗'];
function _outdoorInCart(){var c=_cartArr(),n=0;c.forEach(function(x){var nm=x.ProductName||'';for(var i=0;i<OUTNAMES.length;i++){if(nm.indexOf(OUTNAMES[i])===0){n+=Number(x.Quantity)||0;break;}}});return n;}
function _bzInCart(){var c=_cartArr();for(var i=0;i<c.length;i++){if((c[i].ProductName||'').indexOf('商用/重油汙加價')===0)return Number(c[i].Quantity)||0;}return 0;}
function _resolveBtn(nm){var bm=window.__qsBtnMap||{};for(var pid in bm){var b=bm[pid];var w=(b&&b.closest)?b.closest('.product-wrap'):null;var h=w?w.querySelector('h3'):null;var n=h?(h.textContent||'').trim():'';if(n.indexOf(nm)===0)return {pid:pid,btn:b};}return null;}
var _bzSyncing=false;
function _svcEnvField(){var sels=document.querySelectorAll('select[name^="cf-"]');for(var i=0;i<sels.length;i++){var r=sels[i].closest('.form-group');var lbl=r?((r.querySelector('label')||{}).textContent||''):'';if(/服務環境/.test(lbl))return sels[i];}return null;}
function reconcileBz(){
  try{
    if(window.__qsAdding||_bzSyncing)return;
    var svc=_svcEnvField();
    var guidedBiz=(window.__qsEnv==='biz');
    if(!guidedBiz&&!svc)return; /* 銷售頁且非精靈營業：不動商用(保留客戶手動加購) */
    var isBiz=guidedBiz||(svc&&/營業|重油/.test((svc.options[svc.selectedIndex]||{}).text||''));
    if(!isBiz)return; /* 家用:商用/重油汙由客戶手動決定,系統不自動增減或移除 */
    var _ri=_indoorInCart(),_ro=_outdoorInCart();
    var target=isBiz?(_ri>0?_ri:_ro):0;
    var bz=_bzInCart();
    if(bz===target)return;
    var it=[].slice.call(document.querySelectorAll('.cart-item')).filter(function(x){return /商用\/重油汙加價/.test(x.textContent||'');})[0];
    if(target<=0){
      if(!it)return;
      var rb=[].slice.call(it.querySelectorAll('button')).filter(function(b){return (b.getAttribute('onclick')||'').indexOf('removeCartItem')>=0;})[0];
      if(!rb)return;_bzSyncing=true;try{rb.click();}catch(e){}setTimeout(function(){_bzSyncing=false;},1900);
    } else if(it){
      var btn=[].slice.call(it.querySelectorAll('button')).filter(function(b){var t=(b.textContent||'').trim();return t==='+'||t==='-';})[0];
      if(!btn)return;_bzSyncing=true;try{window.selectQty(btn,target-bz);}catch(e){}setTimeout(function(){_bzSyncing=false;},1900);
    } else {
      var r=_resolveBtn('商用/重油汙加價');if(!r)return;_bzSyncing=true;var k=0;
      (function addOne(){if(k>=target){setTimeout(function(){_bzSyncing=false;},700);return;}try{if(window.viewProduct)window.viewProduct(r.btn,r.pid);}catch(e){}k++;setTimeout(addOne,600);})();
    }
  }catch(e){_bzSyncing=false;}
}
/* ===== 結帳頁把關：以客戶真實地址判定，偏遠自動加$600、正常自動移除、不服務擋結帳 ===== */
function _qtyByName(nm){var c=_cartArr();for(var i=0;i<c.length;i++){if((c[i].ProductName||'').indexOf(nm)===0)return Number(c[i].Quantity)||0;}return 0;}
var _rmSyncing=false;
function reconcileRm(target){
  if(_rmSyncing)return;
  var cur=_qtyByName('偏遠地區加價');
  if(cur===target)return;
  var it=[].slice.call(document.querySelectorAll('.cart-item')).filter(function(x){return /偏遠地區加價/.test(x.textContent||'');})[0];
  if(target===0){
    if(!it)return;
    var rb=[].slice.call(it.querySelectorAll('button')).filter(function(b){return (b.getAttribute('onclick')||'').indexOf('removeCartItem')>=0;})[0];
    if(!rb)return;_rmSyncing=true;try{rb.click();}catch(e){}setTimeout(function(){_rmSyncing=false;},1900);
  } else {
    if(cur>=1)return;
    var r=_resolveBtn('偏遠地區加價');if(!r)return;_rmSyncing=true;try{if(window.viewProduct)window.viewProduct(r.btn,r.pid);}catch(e){}setTimeout(function(){_rmSyncing=false;},1400);
  }
}
function _nosvcBlock(on){
  var box=document.getElementById('qs-nosvc');
  var btns=[].slice.call(document.querySelectorAll('button')).filter(function(b){if(b.closest('#qw-ovl'))return false;return /下一步|送出訂單|確認訂單|確認付款|前往付款|成立訂單|確認送出|前往結帳/.test((b.textContent||'').trim());});
  if(on){
    btns.forEach(function(b){b.disabled=true;b.setAttribute('data-qsnb','1');});
    if(!box){var as=document.querySelector('select[name="Area"]');if(as&&as.parentNode){box=document.createElement('div');box.id='qs-nosvc';box.style.cssText='background:#fdeeec;color:#c0392b;font-size:13px;font-weight:800;border-radius:8px;padding:10px 12px;margin:8px 0;line-height:1.6';box.innerHTML='很抱歉，此地區尚未提供服務，請洽詢客服 <a href="'+LINE_CS+'" target="_blank" rel="noopener" style="color:#B8860B;text-decoration:underline">聯繫 LINE →</a>';as.parentNode.insertBefore(box,as.nextSibling);}}
  } else {
    [].slice.call(document.querySelectorAll('[data-qsnb]')).forEach(function(b){b.disabled=false;b.removeAttribute('data-qsnb');});
    if(box&&box.parentNode)box.parentNode.removeChild(box);
  }
}
function checkoutArea(){
  try{
    var cs=document.querySelector('select[name="CountyAndCity"]'),as=document.querySelector('select[name="Area"]');
    if(!cs||!as)return;
    var c=cs.value,d=as.value;
    var cls=(c&&d&&!/請/.test(d))?classify(c,d):null;
    if(cls)reconcileRm(cls==='remote'?1:0);
    _nosvcBlock(cls==='nosvc');
  }catch(e){}
}
function _tfInCart(){var c=_cartArr();for(var i=0;i<c.length;i++){if((c[i].ProductName||'').indexOf('車馬費')===0)return Number(c[i].Quantity)||0;}return 0;}
var _tfSyncing=false;
/* 結帳把關:家用+只洗1台室外機(無室內機)→ 自動補車馬費$600;不符則移除(補自己下單漏洞) */
function reconcileTf(){
  try{
    if(window.__qsAdding||_tfSyncing)return;
    var svc=_svcEnvField();var guidedEnv=window.__qsEnv;
    if(!guidedEnv&&!svc)return;
    var isBiz=(guidedEnv==='biz')||(svc&&/營業|重油/.test((svc.options[svc.selectedIndex]||{}).text||''));
    var indoor=_indoorInCart(),outdoor=_outdoorInCart();
    var target=(!isBiz&&indoor===0&&outdoor===1)?1:0;
    var cur=_tfInCart();
    if(cur===target)return;
    var it=[].slice.call(document.querySelectorAll('.cart-item')).filter(function(x){return /車馬費/.test(x.textContent||'');})[0];
    if(target<=0){
      if(!it)return;
      var rb=[].slice.call(it.querySelectorAll('button')).filter(function(b){return (b.getAttribute('onclick')||'').indexOf('removeCartItem')>=0;})[0];
      if(!rb)return;_tfSyncing=true;try{rb.click();}catch(e){}setTimeout(function(){_tfSyncing=false;},1900);
    } else if(!it){
      var r=_resolveBtn('車馬費');if(!r)return;_tfSyncing=true;try{if(window.viewProduct)window.viewProduct(r.btn,r.pid);}catch(e){}setTimeout(function(){_tfSyncing=false;},1400);
    }
  }catch(e){_tfSyncing=false;}
}
function _fanInCart(){var c=_cartArr();for(var i=0;i<c.length;i++){if((c[i].ProductName||'').indexOf('風鼓清洗')===0)return Number(c[i].Quantity)||0;}return 0;}
function _blowInCart(){var c=_cartArr(),n=0;c.forEach(function(x){var nm=x.ProductName||'';if(nm.indexOf('吊隱式大清洗保養')===0||nm.indexOf('吊隱式全清洗保養')===0)n+=Number(x.Quantity)||0;});return n;}
var _fanSyncing=false;
/* 把關:購物車有「風鼓清洗」但沒有「吊隱式大/全清洗」→ 自動移除(風鼓僅適用吊隱大/全) */
function reconcileFan(){
  try{
    if(window.__qsAdding||_fanSyncing)return;
    if(_fanInCart()<=0)return;
    if(_blowInCart()>0)return;
    var it=[].slice.call(document.querySelectorAll('.cart-item')).filter(function(x){return /風鼓清洗/.test(x.textContent||'');})[0];
    if(!it)return;
    var rb=[].slice.call(it.querySelectorAll('button')).filter(function(b){return (b.getAttribute('onclick')||'').indexOf('removeCartItem')>=0;})[0];
    if(!rb)return;_fanSyncing=true;try{rb.click();}catch(e){}setTimeout(function(){_fanSyncing=false;},1900);
  }catch(e){_fanSyncing=false;}
}
function _hiInCart(){var c=_cartArr();for(var i=0;i<c.length;i++){if((c[i].ProductName||'').indexOf('挑高施作')===0)return Number(c[i].Quantity)||0;}return 0;}
var _hiSyncing=false;
/* 把關:挑高加價台數不可超過總機器(室內+室外)台數,超過自動壓回;機器歸零則移除 */
function reconcileHi(){try{
  if(window.__qsAdding||_hiSyncing)return;
  var hi=_hiInCart();if(hi<=0)return;
  var max=_indoorInCart()+_outdoorInCart();
  if(hi<=max)return;
  var it=[].slice.call(document.querySelectorAll('.cart-item')).filter(function(x){return /挑高施作/.test(x.textContent||'');})[0];
  if(!it)return;
  if(max<=0){
    var rb=[].slice.call(it.querySelectorAll('button')).filter(function(b){return (b.getAttribute('onclick')||'').indexOf('removeCartItem')>=0;})[0];
    if(!rb)return;_hiSyncing=true;try{rb.click();}catch(e){}setTimeout(function(){_hiSyncing=false;},1900);
  } else {
    var btn=[].slice.call(it.querySelectorAll('button')).filter(function(b){var t=(b.textContent||'').trim();return t==='+'||t==='-';})[0];
    if(!btn)return;_hiSyncing=true;try{if(window.selectQty)window.selectQty(btn,max-hi);}catch(e){}setTimeout(function(){_hiSyncing=false;},1900);
  }
}catch(e){_hiSyncing=false;}}
/* ===== 加購品保護:車馬費/AIRMON/除濕機 不受任何優惠券折扣(自我校正) =====
   原理:券照打整車→在校正=0時反推真實折扣率並快取→用它算「只折服務、保護品原價」的目標小計
   →設定隱形「方案折扣校正」商品數量把保護品被多折的錢補回→目標取偏客戶地板值,保證絕不多收 */
var _adjSyncing=false,_adjC=null;
function _readXiaoji(){try{var box=document.querySelector('.cart-total');if(box){var m=(box.textContent||'').match(/小計[\s\S]*?NT\$\s*([\d,]+)/);if(m)return parseInt(m[1].replace(/,/g,''),10);}}catch(e){}return null;}
function _corrInCart(){var c=_cartArr();for(var i=0;i<c.length;i++){if((c[i].ProductName||'').indexOf('方案折扣校正')>=0)return Number(c[i].Quantity)||0;}return 0;}
function _setCorr(n){var cur=_corrInCart();if(cur===n)return;var it=[].slice.call(document.querySelectorAll('.cart-item')).filter(function(x){return x.classList.contains('qs-corr-line')||/方案折扣校正/.test(x.textContent||'');})[0];
 if(!it){if(n<=0)return;var r=_resolveBtn('方案折扣校正');if(!r)return;_adjSyncing=true;try{if(window.viewProduct)window.viewProduct(r.btn,r.pid);}catch(e){}setTimeout(function(){_adjSyncing=false;},1600);return;}
 var iq=it.getAttribute('data-item');
 if(n<=0){var rb=[].slice.call(it.querySelectorAll('button')).filter(function(b){return (b.getAttribute('onclick')||'').indexOf('removeCartItem')>=0;})[0];_adjSyncing=true;try{if(rb)rb.click();else if(window.cartChangeItem)window.cartChangeItem(iq,0);}catch(e){}setTimeout(function(){_adjSyncing=false;},1700);return;}
 _adjSyncing=true;try{if(window.cartChangeItem)window.cartChangeItem(iq,n);}catch(e){}setTimeout(function(){_adjSyncing=false;},1700);}
function reconcileAdjust(){try{
 if(window.__qsAdding||_adjSyncing)return;
 var cart=_cartArr();if(!cart.length){_adjC=null;return;}
 var P=0,X=0,sub=0;
 for(var i=0;i<cart.length;i++){var nm=cart[i].ProductName||'';var lt=Number(cart[i].LineTotal)||0;sub+=lt;
  if(nm.indexOf('方案折扣校正')>=0){X+=Number(cart[i].Quantity)||0;}
  else if(nm.indexOf('車馬費')>=0||nm.indexOf('AIRMON')>=0||nm.indexOf('三菱重工除濕機')>=0){P+=lt;}}
 var xiao=_readXiaoji();if(xiao==null)return;
 if(X===0){_adjC=sub>0?(sub-xiao)/sub:0;}
 var C=_adjC||0;
 if(C<=0.0001||P<=0){if(X>0)_setCorr(0);return;}
 var Cnow=sub>0?(sub-xiao)/sub:0;if(X>0&&Math.abs(Cnow-C)>0.02){_setCorr(0);return;}
 var S=sub-P-X;var target=S-Math.ceil(C*S)+P;
 if(xiao>target){_setCorr(Math.max(0,X-1));return;}
 if(xiao===target)return;
 var dX=Math.round((target-xiao)/(1-C));if(dX===0)dX=(target-xiao)>0?1:-1;
 var nX=Math.max(0,X+dX);if(nX!==X)_setCorr(nX);
}catch(e){}}
setInterval(function(){reconcileBz();reconcileTf();reconcileFan();reconcileHi();reconcileAdjust();checkoutArea();},1500);
function fillAddr(){
  try{
    if(!window.__qsAreaCity||!window.__qsAreaDist)return;
    var cs=document.querySelector('select[name="CountyAndCity"]'),as=document.querySelector('select[name="Area"]');
    if(!cs||!as)return;
    var st=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,'value').set;
    if(cs.getAttribute('data-qsc')!=='1'){
      if(cs.value!==window.__qsAreaCity){st.call(cs,window.__qsAreaCity);cs.dispatchEvent(new Event('change',{bubbles:true}));}
      cs.setAttribute('data-qsc','1');return;
    }
    if(as.getAttribute('data-qsa')!=='1'){
      var has=[].slice.call(as.options).some(function(o){return o.value===window.__qsAreaDist;});
      if(has){st.call(as,window.__qsAreaDist);as.dispatchEvent(new Event('change',{bubbles:true}));as.setAttribute('data-qsa','1');}
    }
  }catch(e){}
}
function addAddrHint(){
  try{
    if(document.getElementById('qs-addrhint'))return;
    var addr=document.querySelector('input[name="Address"]');
    if(!addr||!addr.parentNode)return;
    var h=document.createElement('div');h.id='qs-addrhint';
    h.style.cssText='font-size:12px;color:#0C447C;background:#E6F1FB;border-radius:8px;padding:8px 11px;margin:6px 0;line-height:1.55;font-weight:700';
    h.innerHTML='📍 請填寫完整地址：<b style="color:#B8860B">巷弄街道 ＋ 門牌號碼 ＋ 樓層</b>';
    addr.parentNode.insertBefore(h,addr);
  }catch(e){}
}
/* ===== 懸浮「立即結帳」按鈕(手機底部常駐)：小計＋結帳鈕 ===== */
function _cartTotalShown(){
  try{
    var labs=[].slice.call(document.querySelectorAll('*')).filter(function(e){return e.children.length===0&&(e.textContent||'').trim()==='小計'&&e.offsetHeight>0;});
    for(var i=labs.length-1;i>=0;i--){var row=labs[i];
      for(var k=0;k<5&&row;k++){var amt=[].slice.call(row.querySelectorAll('span.amount')).filter(function(a){return a.offsetHeight>0;});
        if(amt.length){var n=parseInt((amt[amt.length-1].textContent||'').replace(/[^\d]/g,''),10);if(n>0)return n;}
        row=row.parentElement;}
    }
  }catch(e){}
  return null;
}
function updateFab(){
  try{
    var cart=_cartArr(),hasProd=false,subtotal=0,cnt=0;
    for(var i=0;i<cart.length;i++){if(cart[i].ProductType===0){hasProd=true;subtotal+=Number(cart[i].LineTotal)||0;cnt+=Number(cart[i].Quantity)||0;}}
    var shown=_cartTotalShown();if(shown==null||shown<=0)shown=subtotal;
    var _cc=document.querySelector('select[name="CountyAndCity"]');
    var inCheckout=(_cc&&_cc.offsetHeight>0)||[].slice.call(document.querySelectorAll('button')).some(function(b){var t=(b.textContent||'').trim();return (t==='同意並繼續結帳'||/^請先選擇/.test(t))&&b.offsetHeight>0;});
    var wizardOpen=!!document.getElementById('qw-ovl');
    var cartBtnVis=[].slice.call(document.querySelectorAll('button,a')).some(function(b){if(b.closest('#qs-fab')||b.classList.contains('btn-cart'))return false;if((b.textContent||'').replace(/\s+/g,'').indexOf('立即結帳')<0)return false;var r=b.getBoundingClientRect();return r.height>20&&r.top<window.innerHeight-40&&r.bottom>0;});
    var fab=document.getElementById('qs-fab');
    if(!(hasProd&&!inCheckout&&!wizardOpen&&!cartBtnVis)){if(fab)fab.style.display='none';document.body.style.paddingBottom='';return;}
    if(!fab){
      fab=document.createElement('div');fab.id='qs-fab';
      fab.style.cssText='position:fixed;left:0;right:0;bottom:0;z-index:9998;background:rgba(255,255,255,.72);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-top:1px solid rgba(4,44,83,.12);box-shadow:0 -6px 22px rgba(4,44,83,.1);padding:10px 14px calc(10px + env(safe-area-inset-bottom,0px));font-family:\"PingFang TC\",\"Microsoft JhengHei\",system-ui,sans-serif';
      fab.innerHTML='<div style=\"width:100%;max-width:640px;margin:0 auto;display:flex;align-items:center;gap:14px\"><div style=\"flex:1;min-width:0;font-size:14.5px;color:#1c2733;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\">共 <b id=\"qs-fab-n\" style=\"color:#042C53\">0</b> 件 · <span id=\"qs-fab-p\" style=\"font-size:17px;font-weight:900;color:#B8860B\"></span></div><button id=\"qs-fab-btn\" type=\"button\" style=\"flex:0 0 auto;border:none;border-radius:999px;background:#042C53;color:#fff;font-size:15px;font-weight:800;padding:14px 46px;font-family:inherit;cursor:pointer;white-space:nowrap\">立即結帳</button></div>';
      document.body.appendChild(fab);
      fab.querySelector('#qs-fab-btn').onclick=function(){var co=[].slice.call(document.querySelectorAll('button')).filter(function(b){return (b.textContent||'').trim()==='立即結帳'&&!b.closest('#qs-fab');})[0];if(co)co.click();};
      if(window.visualViewport){var vv=window.visualViewport;var repos=function(){var f=document.getElementById('qs-fab');if(!f)return;var lvh=document.documentElement.clientHeight;var gap=lvh-vv.height-vv.offsetTop;f.style.bottom=(gap>0?gap:0)+'px';};vv.addEventListener('resize',repos);vv.addEventListener('scroll',repos);window.addEventListener('scroll',repos,{passive:true});repos();}
    }
    fab.style.display='flex';
    document.body.style.paddingBottom='76px';
    var pe=fab.querySelector('#qs-fab-p');if(pe)pe.textContent='NT$ '+shown.toLocaleString('en-US');
    var ne=fab.querySelector('#qs-fab-n');if(ne)ne.textContent=cnt;
  }catch(e){}
}
setInterval(function(){fillConsent();fillEnv();fillAddr();addAddrHint();fixCards();updateFab();styleHeads();addBrandBadge();addPlanSummary();addContinueBtn();addPopularBadge();hideTravelCard();autoFeeNotes();styleCorrLine();},700);
var tries=0;
var boot=setInterval(function(){
  tries++;
  injectFeat();
  styleHeads();
  fixCards();
  if(typeof window.viewProduct==='function'&&document.querySelector('.product-row .product-wrap')){
    clearInterval(boot);
    if(!cartHasProduct()&&!window.__qwShown){window.__qwShown=true;open();}
  }
  if(tries>40)clearInterval(boot);
},400);
setTimeout(fixCards,1500);setTimeout(fixCards,3500);setTimeout(fixCards,6000);
}catch(e){}
})();
