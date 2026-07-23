/* ===== M3 引導精靈（正式版）===== */
(function(){
try{
var IB='https://img.1shop.tw/ZLDl7P1ybNpzP89AO5Q6n98k/';
function im(t){return IB+t+'/600x.png';}
var TILE_GUIDE='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/guide-new.jpg';
var TILE_ALL='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/all-new_v4.jpg';
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
 rm:{pid:'ndwgBoML1AZ9omyv7lD8O52Z',price:600,img:im('rAW85emGlnzxeppylyok6vBL')}
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
 {k:'o1',n:'1對1室外機清洗',d:'需搭配室內機'},
 {k:'om',n:'1對多室外機清洗',d:'需搭配室內機'}
];
var ADDON=[
 {k:'rm',n:'偏遠地區加價',d:'一張訂單收一次'},
 {k:'bz',n:'商用/重油汙加價',d:'每台加收'},
 {k:'hi',n:'挑高施作3.5-4M加價',d:'每台加收'},
 {k:'fan',n:'風鼓清洗',d:'僅適用吊隱大保養/全保養清洗',needBlow:true},
 {k:'air',n:'AIRMON智慧連網控制器',d:'含全新設備費跟安裝設定費',air:true}
];
var ICO_GUIDE='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 12h3M14 12h3"/></svg>';
var ICO_LIST='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.4"/></svg>';

var CSS='#qw-ovl{position:fixed;inset:0;z-index:99999;background:rgba(4,20,40,.55);display:flex;align-items:center;justify-content:center;padding:14px;font-family:"PingFang TC","Microsoft JhengHei",system-ui,sans-serif}'
+'#qw-ovl *{box-sizing:border-box}'
+'.qw{position:relative;background:#fff;border-radius:18px;width:100%;max-width:400px;max-height:92vh;overflow-y:auto;padding:20px 18px 18px;box-shadow:0 14px 44px rgba(0,0,0,.35)}'
+'.qw .qw-x{position:absolute;top:9px;right:11px;width:30px;height:30px;border:none;background:rgba(255,255,255,.7);border-radius:50%;color:#a4b1bf;font-size:24px;line-height:28px;text-align:center;cursor:pointer;padding:0;font-family:inherit;z-index:5}.qw .qw-x:active{color:#5f6b78}'
+'.qw .qwbar{display:flex;align-items:center;gap:6px;margin-bottom:4px;padding-right:32px}'
+'.qw .qwdot{width:22px;height:22px;flex-shrink:0;border-radius:50%;font-size:12px;font-weight:700;display:flex!important;align-items:center;justify-content:center;background:#E6F1FB;color:#8a97a5;line-height:1;padding:0;box-sizing:border-box}'
+'.qw .qwdot.on{background:#0C447C;color:#fff}.qw .qwdot.done{background:#B8860B;color:#fff}'
+'.qw .qwln{flex:1;height:2px;background:#c9d7e6}.qw .qwln.done{background:#B8860B}'
+'.qw h2{font-size:18px;margin:12px 0 3px;color:#042C53;font-weight:900!important;-webkit-text-stroke:.5px currentColor}'
+'.qw .qh4{font-weight:900;-webkit-text-stroke:.5px currentColor}'
+'.qw .sub{font-size:12.5px;color:#8a97a5;margin:0 0 14px}'
+'.qw .grp-lbl{font-size:12px;font-weight:700;color:#0C447C;margin:12px 0 6px}'
+'.qw .opt{display:block;border:1.5px solid #c9d7e6;border-radius:12px;padding:10px 12px;margin-bottom:9px;cursor:pointer}'
+'.qw .opt.sel{border-color:#0C447C;background:#E6F1FB}'
+'.qw .opt-main{display:flex;align-items:center;gap:11px}'
+'.qw .opt img{width:46px;height:46px;border-radius:8px;border:1px solid #c9d7e6;object-fit:cover;flex-shrink:0}'
+'.qw .oi{flex:1;min-width:0}.qw .on{font-size:14.5px;font-weight:500;display:block}.qw .od{font-size:11px;color:#8a97a5}'
+'.qw .op{color:#B8860B;font-weight:800;font-size:14px;white-space:nowrap}'
+'.qw .det-body{margin-top:9px;background:#E6F1FB;border-radius:8px;padding:9px 11px}'
+'.qw .det-cap{font-size:12px;font-weight:700;color:#0C447C;margin-bottom:4px}'
+'.qw .det-body ul{margin:0;padding:0;list-style:none}.qw .det-body li{font-size:12px;color:#1c2733;line-height:1.75}'
+'.qw .det-warn{font-size:11.5px;color:#c0392b;font-weight:700;margin-top:5px}'
+'.qw .step-ctl{display:flex;align-items:center;gap:8px;background:#E6F1FB;border-radius:999px;padding:4px}'
+'.qw .step-ctl button{width:28px;height:28px;border-radius:50%;border:none;background:#fff;color:#0C447C;font-size:15px;font-weight:700;cursor:pointer}'
+'.qw .step-ctl .q{min-width:18px;text-align:center;font-weight:700;font-size:14px;color:#042C53}'
+'.qw .op-wrap{display:flex;align-items:center;gap:8px}'
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
+'.qw .wel-h{font-size:20px;font-weight:900;color:#16202b;margin:0 0 10px;line-height:1.42;white-space:nowrap;-webkit-text-stroke:0.4px #16202b}'
+'.qw .wel-p{font-size:13px;color:#7c8998;line-height:1.7;margin:0 0 6px}'
+'.qw .wel-steps{display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;gap:2px;margin:6px 0 22px;white-space:nowrap}'
+'.qw .ws{display:inline-flex;align-items:center;gap:3px;font-size:10.5px;font-weight:800;color:#042C53}'
+'.qw .wsn{width:16px;height:16px;flex-shrink:0;border-radius:50%;background:none;border:1.3px solid #B8860B;color:#B8860B;font-size:9px;font-weight:800;display:inline-flex;align-items:center;justify-content:center}'
+'.qw .wsa{color:#B8860B;font-weight:800;font-size:9px;opacity:.5;margin:0 -1px}'
+'.qw .wel-tiles{display:grid;grid-template-columns:1fr 1fr;gap:12px}'
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
function stepper(item){var q=qty[item.k]||0;return '<div class="op-wrap"><span class="op">'+money(P[item.k].price)+'</span>'+(q>0?'<div class="step-ctl" onclick="event.stopPropagation()"><button onclick="__qw.chg(&quot;'+item.k+'&quot;,-1)">−</button><span class="q">'+q+'</span><button onclick="__qw.chg(&quot;'+item.k+'&quot;,1)">＋</button></div>':'')+'</div>';}
function detailBlock(item){var mk=LK[item.k];if(!mk||!(qty[item.k]>0)||!window.__qsLISTS||!window.__qsLISTS[mk])return '';return '<div class="det-body">'+window.__qsLISTS[mk]+'</div>';}
function optRow(item){var q=qty[item.k]||0;return '<div class="opt '+(q>0?'sel':'')+'" onclick="__qw.pick(&quot;'+item.k+'&quot;)"><div class="opt-main"><img src="'+P[item.k].img+'"><div class="oi"><span class="on">'+item.n+'</span><span class="od">'+item.d+'</span></div>'+stepper(item)+'</div>'+detailBlock(item)+'</div>';}
function curPos(){return step==='area'?1:(step==='env'?2:(step===1?3:(step===2?4:(step===3?5:6))));}
function stepBar(){var pos=curPos();function d(n){return '<div class="qwdot '+(pos>n?'done':pos===n?'on':'')+'">'+(pos>n?'✓':n)+'</div>';}function l(n){return '<div class="qwln '+(pos>n?'done':'')+'"></div>';}return '<div class="qwbar">'+d(1)+l(1)+d(2)+l(2)+d(3)+l(3)+d(4)+l(4)+d(5)+'</div>';}
function render(){
  var w='';
  if(env==='biz')qty.bz=sumKeys(INK);
  if(step===0){
    w='<div class="qw wel"><div class="wel-brand">三菱重工 · 原廠空調清洗 官方賣場</div><div class="wel-bar"></div>'
    +'<h2 class="wel-h">幫你快速挑好清洗方案</h2>'
    +'<p class="wel-p">不知道要洗哪些？讓我一步步帶你選</p>'
    +'<div class="wel-steps"><span class="ws"><i class="wsn">1</i>地區</span><span class="wsa">›</span><span class="ws"><i class="wsn">2</i>環境</span><span class="wsa">›</span><span class="ws"><i class="wsn">3</i>機型</span><span class="wsa">›</span><span class="ws"><i class="wsn">4</i>加購</span><span class="wsa">›</span><span class="ws"><i class="wsn">5</i>方案</span></div>'
    +'<div class="wel-tiles"><button class="wel-tile" onclick="__qw.start()"><img src="'+TILE_GUIDE+'" alt="帶我一步步選"></button><button class="wel-tile" onclick="__qw.skip()"><img src="'+TILE_ALL+'" alt="查看所有方案"></button></div></div>';
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
     +'<div class="nav"><button class="btn gho" onclick="__qw.go(0)">上一步</button><button class="btn pri" '+(canNext?'':'disabled')+' onclick="__qw.go(&quot;env&quot;)">下一步</button></div></div>';
  } else if(step==='env'){
    w='<div class="qw">'+stepBar()+'<h2>冷氣的使用環境為？</h2><p class="sub">先確認環境，幫你算好正確價格</p>'
    +'<div class="env-g"><button type="button" class="env-o '+(env==='home'?'sel':'')+'" onclick="__qw.pickEnv(&quot;home&quot;)"><img src="'+IMG_HOME+'" alt="一般家用"></button>'
    +'<button type="button" class="env-o '+(env==='biz'?'sel':'')+'" onclick="__qw.pickEnv(&quot;biz&quot;)"><img src="'+IMG_SHOP+'" alt="營業場所"></button></div>'
    +'<div class="envnote">選「營業場所」後，之後選室內機會自動幫你算好加價 <b>$1,000</b></div>'
    +'<div class="nav"><button class="btn gho" onclick="__qw.go(&quot;area&quot;)">上一步</button><button class="btn pri" '+(env?'':'disabled')+' onclick="__qw.go(1)">下一步：室內機</button></div></div>';
  } else if(step===1){
    var groups={};INDOOR.forEach(function(x){(groups[x.grp]=groups[x.grp]||[]).push(x);});
    var body='';Object.keys(groups).forEach(function(g){body+='<div class="grp-lbl">'+g+'式機型適用</div>'+groups[g].map(optRow).join('');});
    var inLbl=sumKeys(['wall','cs','cm','cl','m4','f4'])>0?'下一步：室外機':'只洗室外機，下一步';
    w='<div class="qw">'+stepBar()+'<h2>要清洗哪種室內機？</h2><p class="sub">選擇機型與清洗方案，可選多台</p>'+body+'<div class="nav"><button class="btn gho" onclick="__qw.go(&quot;env&quot;)">上一步</button><button class="btn pri" onclick="__qw.go(2)">'+inLbl+'</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step===2){
    var outN=sumKeys(['o1','om']),inNow=sumKeys(['wall','cs','cm','cl','m4','f4']);
    var needMore=(inNow===0&&outN>0&&outN<3);
    var outLbl=outN>0?'下一步：加購':'不洗室外機，下一步';
    w='<div class="qw">'+stepBar()+'<h2>要清洗室外機嗎？</h2><p class="sub">室外機清洗為選配，不需要可直接按下一步</p><div class="optnote">需搭配室內機一起洗；若只洗室外機需滿 3 台</div>'+OUTLIST.map(optRow).join('')+(needMore?'<div class="warnbox">＊只洗室外機需滿 3 台（1對1＋1對多合計），目前 '+outN+' 台，<b>還差 '+(3-outN)+' 台</b>；或加入任一室內機清洗即可</div>':'')+'<div class="nav"><button class="btn gho" onclick="__qw.go(1)">上一步</button><button class="btn pri" onclick="__qw.go(3)">'+outLbl+'</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step===3){
    var body='';ADDON.forEach(function(x){if(x.needBlow&&!hasBlow())return;if(x.k==='bz'&&env==='biz'){var bn=sumKeys(INK);body+='<div class="envnote">🏢 營業場所：已自動加購「商用/重油汙加價」<b>× '+bn+'</b>（依室內機台數，每台 +$1,000）</div>';return;}if(x.k==='rm'&&areaCls==='remote'){body+='<div class="envnote">📍 偏遠地區：已自動加購「偏遠地區加價」<b>× 1</b>（一張訂單收一次 +$600）</div>';return;}body+=optRow(x);if(x.k==='air'&&(qty.air||0)>0){body+='<div class="airnote">＊AIRMON 僅適用三菱重工家用壁掛室內機，請確認機型後再購買</div>';}});
    if(!hasBlow()){body+='<div class="warnbox">＊「風鼓清洗」僅在選購吊隱式大/全清洗時才可加購</div>';}
    var nextLbl=sumKeys(['rm','bz','hi','fan','air'])>0?'下一步：選到府方案':'不加購，下一步';
    w='<div class="qw">'+stepBar()+'<h2>要加購特殊項目嗎？</h2><p class="sub">這一步是「選配」，沒有需要可直接按下一步</p><div class="optnote">以下項目<b>非必要</b>，依你的現場條件加購即可</div>'+body+'<div class="nav"><button class="btn gho" onclick="__qw.go(2)">上一步</button><button class="btn pri" onclick="__qw.go(4)">'+nextLbl+'</button></div></div>';
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
function showAir(){if(window.__qsShowAir){window.__qsShowAir();function lift(){var a=document.getElementById('qs-ovl2');if(a)a.style.setProperty('z-index','100002','important');}lift();setTimeout(lift,60);}}

var api={
  start:function(){step='area';render();},
  skip:function(){close();},
  pickCity:function(v){areaCity=v||null;areaDist=null;areaCls=null;qty.rm=0;render();},
  pickDist:function(v){areaDist=v||null;areaCls=classify(areaCity,areaDist);qty.rm=(areaCls==='remote')?1:0;render();},
  pickEnv:function(k){env=k;if(k!=='biz')qty.bz=0;render();},
  pick:function(k){var was=qty[k]||0;if(!qty[k])qty[k]=1;render();if(k==='air'&&was===0){showAir();}},
  chg:function(k,d){qty[k]=Math.max(0,(qty[k]||0)+d);render();},
  pickPlan:function(k){plan=k;render();},
  go:function(n){if(n===3){var out=sumKeys(['o1','om']),indoor=sumKeys(['wall','cs','cm','cl','m4','f4']);if(out>0&&indoor===0&&out<3){alert('只洗室外機需滿 3 台才可單洗（1對1＋1對多 合計，目前 '+out+' 台，還差 '+(3-out)+' 台）。\n請增加台數，或加入任一室內機清洗即可。');return;}}step=n;render();},
  finish:function(){
    /* 動態對應：不靠寫死商品ID，改用「名稱開頭比對」找出當前頁面的真實按鈕與ID
       （1SHOP複製頁面後商品ID會全變，寫死ID會失效；此法在任何頁面都可用）*/
    function realProds(){
      var arr=[],bm=window.__qsBtnMap||{};
      for(var pid in bm){if(!bm.hasOwnProperty(pid))continue;var b=bm[pid];var wrap=(b&&b.closest)?b.closest('.product-wrap'):null;var h3=wrap?wrap.querySelector('h3'):null;arr.push({pid:pid,btn:b,name:h3?(h3.textContent||'').trim():''});}
      return arr;
    }
    function resolve(nm){var a=realProds();var i;for(i=0;i<a.length;i++){if(a[i].name.indexOf(nm)===0)return a[i];}for(i=0;i<a.length;i++){if(a[i].name.indexOf(nm)>-1)return a[i];}return null;}
    if(env==='biz')qty.bz=sumKeys(INK);
    if(areaCls==='remote')qty.rm=1;
    var items=INDOOR.concat(OUTLIST,ADDON).filter(function(x){return qty[x.k]>0;});
    var jobs=[];items.forEach(function(x){var r=resolve(x.n);if(r){for(var i=0;i<qty[x.k];i++){jobs.push(r);}}});
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
/* 載入時即注入「結帳彈窗方案note」樣式（由1SHOP內文JS的結帳彈窗共用，省內文CSS字數）*/
if(!document.getElementById('qw-ck')){var _cs=document.createElement('style');_cs.id='qw-ck';_cs.textContent='.qs-pnote{padding:7px 3px;text-align:center;font-size:14px;font-weight:900;line-height:1.3;white-space:nowrap;border-radius:0 0 10px 10px;margin-top:-1px;-webkit-text-stroke:.4px currentColor}.qs-pnote-std{background:#E6F1FB;color:#0C447C}.qs-pnote-early{background:rgba(184,134,11,.14);color:#8a6410}.qs-plan.sel::after{content:"\\2713";position:absolute;top:6px;right:6px;width:22px;height:22px;background:#0C447C;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800}#qsf{background:#fff;border:1px solid #e7edf3;border-radius:14px;padding:18px 14px 16px;box-shadow:0 4px 16px rgba(4,44,83,.06);margin:14px 0 20px}#qsf .qsf-h{display:flex;align-items:center;gap:7px;font-size:16px;font-weight:900;color:#042C53;margin-bottom:14px;-webkit-text-stroke:.3px #042C53}#qsf .qsf-i{color:#B8860B;font-size:17px}#qsf .qsf-g{display:grid;grid-template-columns:repeat(4,1fr);gap:0}#qsf .qsf-li{text-align:center;padding:8px 10px;position:relative}#qsf .qsf-li+.qsf-li::before{content:"";position:absolute;left:0;top:12px;bottom:12px;width:1px;background:#e7edf3}#qsf .qsf-ic{color:#B8860B;display:flex;justify-content:center;margin-bottom:9px}#qsf .qsf-ic svg{width:26px;height:26px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;display:block}#qsf .qsf-li b{display:block;font-weight:800;color:#042C53;font-size:13.5px;line-height:1.35;margin-bottom:4px}#qsf .qsf-s{font-size:11px;color:#6a7684;line-height:1.4}@media(max-width:640px){#qsf .qsf-g{grid-template-columns:1fr 1fr}#qsf .qsf-li{padding:12px 8px}#qsf .qsf-li:nth-child(3)::before{display:none}#qsf .qsf-li:nth-child(3),#qsf .qsf-li:nth-child(4){border-top:1px solid #e7edf3}}.qsh-ey{text-align:center;font-size:12px;font-weight:800;color:#B8860B;letter-spacing:2px;margin:16px 0 0;line-height:1.4}h1.qsh-u{margin-top:3px!important;padding-bottom:14px!important;position:relative;font-weight:900!important;-webkit-text-stroke:.45px currentColor}h1.qsh-u::after{content:"";position:absolute;left:50%;bottom:2px;transform:translateX(-50%);width:34px;height:3px;background:#d9b24a;border-radius:2px}';document.head.appendChild(_cs);}

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
      var rec='【結帳前同意存證】方案:'+planTxt+'｜已詳閱並同意:僅限三菱重工冷氣、機齡15年以上不服務、安裝高度4米以上不服務、機齡10年以上不提供保固、偏遠/商用/挑高加價規範、保固範圍與取消政策、服務規範與隱私權政策｜時間:'+ts;
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
/* ===== 離開精靈後也強制校正：營業場所時，購物車「商用/重油汙加價」數量 = 室內機台數 ===== */
var INNAMES=['家用壁掛清洗保養','吊隱式小清洗保養','吊隱式大清洗保養','吊隱式全清洗保養','迷你四方吹清洗保養','四方吹清洗保養'];
function _cartArr(){try{return (window._UserSession&&window._UserSession.Cart)||[];}catch(e){return [];}}
function _indoorInCart(){var c=_cartArr(),n=0;c.forEach(function(x){var nm=x.ProductName||'';for(var i=0;i<INNAMES.length;i++){if(nm.indexOf(INNAMES[i])===0){n+=Number(x.Quantity)||0;break;}}});return n;}
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
    var indoor=_indoorInCart();
    var target=isBiz?indoor:0;
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
setInterval(function(){reconcileBz();checkoutArea();},1500);
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
    var fab=document.getElementById('qs-fab');
    if(!(hasProd&&!inCheckout&&!wizardOpen)){if(fab)fab.style.display='none';document.body.style.paddingBottom='';return;}
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
setInterval(function(){fillConsent();fillEnv();fillAddr();addAddrHint();fixCards();updateFab();styleHeads();},700);
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
