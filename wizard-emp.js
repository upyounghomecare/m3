/* ===== 員工專用頁 引導精靈（EMP 版）=====
   ⚠️ 這是 wizard.js 的分支,只給員工頁 rnhzk4 用。正式頁 v8cs91 請勿載入本檔。
   兩份共用的防呆邏輯若要修,記得兩邊都改。 */
(function(){
try{
var IB='https://img.1shop.tw/ZLDl7P1ybNpzP89AO5Q6n98k/';
function im(t){return IB+t+'/600x.png';}
function imj(t){return IB+t+'/600x.jpg';}
var IMG_BRAND_MHI=imj('O5gwrR4GNQbopyP7YBpn071e');
var IMG_BRAND_OTHER=imj('rAW85emGlnzxgK2Alyok6vBL');
var IMG_QUICK='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@80ddf1921e696f34827eb07d92e39899a0df3f46/quickbuy.jpg';
var PLAN_STD='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@80ddf1921e696f34827eb07d92e39899a0df3f46/standard.jpg';
var PLAN_EARLY='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@80ddf1921e696f34827eb07d92e39899a0df3f46/earlybird2.jpg';
var IMG_HOME='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@80ddf1921e696f34827eb07d92e39899a0df3f46/home.jpg';
var IMG_SHOP='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@80ddf1921e696f34827eb07d92e39899a0df3f46/shop.jpg';
var IMG_AREA_OK='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@80ddf1921e696f34827eb07d92e39899a0df3f46/green.jpg';
var IMG_AREA_RM='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@80ddf1921e696f34827eb07d92e39899a0df3f46/gold.jpg';
var IMG_AREA_NO='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@80ddf1921e696f34827eb07d92e39899a0df3f46/red.jpg';
var LINE_CS='https://line.me/R/ti/p/@063kttbk';
var TW={
'基隆市':['仁愛區','信義區','中正區','中山區','安樂區','暖暖區','七堵區'],
'台北市':['中正區','大同區','中山區','松山區','大安區','萬華區','信義區','士林區','北投區','內湖區','南港區','文山區'],
'新北市':['萬里區','金山區','板橋區','汐止區','深坑區','石碇區','瑞芳區','平溪區','雙溪區','貢寮區','新店區','坪林區','烏來區','永和區','中和區','土城區','三峽區','樹林區','鶯歌區','三重區','新莊區','泰山區','林口區','蘆洲區','五股區','八里區','淡水區','三芝區','石門區'],
'宜蘭縣':['宜蘭市','頭城鎮','礁溪鄉','壯圍鄉','員山鄉','羅東鎮','三星鄉','大同鄉','五結鄉','冬山鄉','蘇澳鎮','南澳鄉','釣魚台列嶼'],
'新竹市':['東區','北區','香山區'],
'新竹縣':['竹北市','湖口鄉','新豐鄉','新埔鎮','關西鎮','芎林鄉','寶山鄉','竹東鎮','五峰鄉','橫山鄉','尖石鄉','北埔鄉','峨眉鄉'],
'桃園市':['中壢區','平鎮區','龍潭區','楊梅區','新屋區','觀音區','桃園區','龜山區','八德區','大溪區','復興區','大園區','蘆竹區'],
'苗栗縣':['竹南鎮','頭份市','三灣鄉','南庄鄉','獅潭鄉','後龍鎮','通霄鎮','苑裡鎮','苗栗市','造橋鄉','頭屋鄉','公館鄉','大湖鄉','泰安鄉','銅鑼鄉','三義鄉','西湖鄉','卓蘭鎮'],
'台中市':['中區','東區','南區','西區','北區','北屯區','西屯區','南屯區','太平區','大里區','霧峰區','烏日區','豐原區','后里區','石岡區','東勢區','和平區','新社區','潭子區','大雅區','神岡區','大肚區','沙鹿區','龍井區','梧棲區','清水區','大甲區','外埔區','大安區'],
'彰化縣':['彰化市','芬園鄉','花壇鄉','秀水鄉','鹿港鎮','福興鄉','線西鄉','和美鎮','伸港鄉','員林市','社頭鄉','永靖鄉','埔心鄉','溪湖鎮','大村鄉','埔鹽鄉','田中鎮','北斗鎮','田尾鄉','埤頭鄉','溪州鄉','竹塘鄉','二林鎮','大城鄉','芳苑鄉','二水鄉'],
'南投縣':['南投市','中寮鄉','草屯鎮','國姓鄉','埔里鎮','仁愛鄉','名間鄉','集集鎮','水里鄉','魚池鄉','信義鄉','竹山鎮','鹿谷鄉'],
'嘉義市':['東區','西區'],
'嘉義縣':['番路鄉','梅山鄉','竹崎鄉','阿里山鄉','中埔鄉','大埔鄉','水上鄉','鹿草鄉','太保市','朴子市','東石鄉','六腳鄉','新港鄉','民雄鄉','大林鎮','溪口鄉','義竹鄉','布袋鎮'],
'雲林縣':['斗南鎮','大埤鄉','虎尾鎮','土庫鎮','褒忠鄉','東勢鄉','台西鄉','崙背鄉','麥寮鄉','斗六市','林內鄉','古坑鄉','莿桐鄉','西螺鎮','二崙鄉','北港鎮','水林鄉','口湖鄉','四湖鄉','元長鄉'],
'台南市':['中西區','東區','南區','北區','安平區','安南區','永康區','歸仁區','新化區','左鎮區','玉井區','楠西區','南化區','仁德區','關廟區','龍崎區','官田區','麻豆區','佳里區','西港區','七股區','將軍區','學甲區','北門區','新營區','後壁區','白河區','東山區','六甲區','下營區','柳營區','鹽水區','善化區','大內區','山上區','新市區','安定區'],
'高雄市':['新興區','前金區','苓雅區','鹽埕區','鼓山區','旗津區','前鎮區','三民區','楠梓區','小港區','左營區','仁武區','大社區','東沙群島','南沙群島','岡山區','路竹區','阿蓮區','田寮區','燕巢區','橋頭區','梓官區','彌陀區','永安區','湖內區','鳳山區','大寮區','林園區','鳥松區','大樹區','旗山區','美濃區','六龜區','內門區','杉林區','甲仙區','桃源區','那瑪夏區','茂林區','茄萣區'],
'屏東縣':['屏東市','三地門鄉','霧台鄉','瑪家鄉','九如鄉','里港鄉','高樹鄉','鹽埔鄉','長治鄉','麟洛鄉','竹田鄉','內埔鄉','萬丹鄉','潮州鎮','泰武鄉','來義鄉','萬巒鄉','崁頂鄉','新埤鄉','南州鄉','林邊鄉','東港鎮','佳冬鄉','新園鄉','枋寮鄉','枋山鄉','春日鄉','獅子鄉','車城鄉','牡丹鄉','恆春鎮','滿州鄉','琉球鄉'],
'台東縣':['台東市','延平鄉','卑南鄉','鹿野鄉','關山鎮','海端鄉','池上鄉','東河鄉','成功鎮','長濱鄉','太麻里鄉','金峰鄉','大武鄉','達仁鄉','綠島鄉','蘭嶼鄉'],
'花蓮縣':['花蓮市','新城鄉','秀林鄉','吉安鄉','壽豐鄉','鳳林鎮','光復鄉','豐濱鄉','瑞穗鄉','萬榮鄉','玉里鎮','卓溪鄉','富里鄉']
};
var REMOTE=['台中市外埔區','台中市大安區','台中市大甲區','台中市新社區','台中市東勢區','台中市石岡區','屏東縣崁頂鄉','屏東縣潮州鎮','屏東縣竹田鄉','屏東縣萬丹鄉','新竹縣北埔鄉','新竹縣芎林鄉','苗栗縣卓蘭鎮','苗栗縣大湖鄉','苗栗縣獅潭鄉','苗栗縣苑裡鎮','苗栗縣通霄鎮','雲林縣二崙鄉','雲林縣元長鄉','雲林縣台西鄉','雲林縣土庫鎮','雲林縣大埤鄉','雲林縣崙背鄉','雲林縣東勢鄉','雲林縣林內鄉','雲林縣褒忠鄉','雲林縣麥寮鄉','高雄市旗山區','高雄市梓官區'];
var NOSVC=['南投縣中寮鄉','南投縣仁愛鄉','南投縣信義鄉','南投縣國姓鄉','南投縣埔里鎮','南投縣水里鄉','南投縣竹山鎮','南投縣集集鎮','南投縣魚池鄉','南投縣鹿谷鄉','台中市和平區','台南市六甲區','台南市北門區','台南市南化區','台南市大內區','台南市學甲區','台南市將軍區','台南市山上區','台南市左鎮區','台南市後壁區','台南市新營區','台南市東山區','台南市柳營區','台南市楠西區','台南市白河區','台南市龍崎區','嘉義縣中埔鄉','嘉義縣大埔鄉','嘉義縣布袋鎮','嘉義縣東石鄉','嘉義縣梅山鄉','嘉義縣番路鄉','嘉義縣竹崎鄉','嘉義縣義竹鄉','嘉義縣阿里山鄉','宜蘭縣南澳鄉','宜蘭縣大同鄉','屏東縣三地門鄉','屏東縣佳冬鄉','屏東縣來義鄉','屏東縣內埔鄉','屏東縣南州鄉','屏東縣恆春鎮','屏東縣新園鄉','屏東縣新埤鄉','屏東縣春日鄉','屏東縣東港鎮','屏東縣枋寮鄉','屏東縣枋山鄉','屏東縣林邊鄉','屏東縣泰武鄉','屏東縣滿州鄉','屏東縣牡丹鄉','屏東縣獅子鄉','屏東縣瑪家鄉','屏東縣萬巒鄉','屏東縣車城鄉','屏東縣霧台鄉','彰化縣二水鄉','彰化縣大城鄉','彰化縣溪州鄉','彰化縣竹塘鄉','新北市三芝區','新北市坪林區','新北市平溪區','新北市深坑區','新北市烏來區','新北市瑞芳區','新北市石碇區','新北市萬里區','新北市貢寮區','新北市金山區','新北市雙溪區','新竹縣五峰鄉','新竹縣尖石鄉','新竹縣峨眉鄉','新竹縣橫山鄉','桃園市大溪區','桃園市復興區','苗栗縣南庄鄉','苗栗縣泰安鄉','雲林縣北港鎮','雲林縣口湖鄉','雲林縣古坑鄉','雲林縣四湖鄉','雲林縣水林鄉','高雄市內門區','高雄市六龜區','高雄市杉林區','高雄市桃源區','高雄市田寮區','高雄市甲仙區','高雄市美濃區','高雄市茂林區','高雄市那瑪夏區','花蓮縣花蓮市','花蓮縣新城鄉','花蓮縣秀林鄉','花蓮縣吉安鄉','花蓮縣壽豐鄉','花蓮縣鳳林鎮','花蓮縣光復鄉','花蓮縣豐濱鄉','花蓮縣瑞穗鄉','花蓮縣萬榮鄉','花蓮縣玉里鎮','花蓮縣卓溪鄉','花蓮縣富里鄉','台東縣台東市','台東縣延平鄉','台東縣卑南鄉','台東縣鹿野鄉','台東縣關山鎮','台東縣海端鄉','台東縣池上鄉','台東縣東河鄉','台東縣成功鎮','台東縣長濱鄉','台東縣太麻里鄉','台東縣金峰鄉','台東縣大武鄉','台東縣達仁鄉','台東縣綠島鄉','台東縣蘭嶼鄉','屏東縣琉球鄉','宜蘭縣釣魚台列嶼','高雄市東沙群島','高雄市南沙群島','新北市石門區','苗栗縣三灣鄉','台南市玉井區'];
/* ===== 客服核准的單次例外(不服務地區) =====
   老闆 2026-08-21 定案:技師確認過可以跑的個案,客服發一組「通行碼」讓客戶自己下單。
   ⚠️ 表裡只存**雜湊值**(SHA-256 前 12 碼),看前台原始碼看不到明碼。
   ⚠️ 雜湊是 `地區名|通行碼` 一起算的 —— 所以**平溪區的碼只能開平溪區**,
      客戶轉貼給別區的朋友沒用。
   ⚠️ 老闆定案:例外訂單**一律當偏遠地區處理**(自動加 $600、且 $600 照樣被優惠券折)。
      所以解鎖後 classify() 回的是 'remote' 而不是 'normal' —— 精靈報價、結帳頁加價、
      場勘金額全部會自動跟著算,不需要另外改。
   ⚠️ 純前端做不到跨裝置的「一次性」。同一台裝置擋得住,轉貼給同地區的人用別台裝置擋不住;
      靠「一組一用的客服清單」＋「訂單自動加註通行碼」在流程上管理。 */
var NOSVC_PASS={"0":["d59190a0c21a","a3049c1ad3bd","8bf4fa1907d3"],"1":["3f7b83320f43","f8b4f9a8942f","3a344735f11e"],"2":["5075b572290c","27802c59de71","04e9e9196711"],"3":["6708bf46d05e","4d910a2f87ef","d099afe759cc"],"4":["db8750972b53","270429dfe9a0","eeba1cc8c709"],"5":["75430aa933bd","40e0bcd869b0","6eb4822cfe4d"],"6":["1491d43c6746","729d01afacf0","49bbccffedb5"],"7":["6a4158227934","97a673c77ccc","a35a650712ce"],"8":["4144cd6e099f","d9b4adb689d0","abb169ecbcef"],"9":["60fb13f3680f","67a2396c2c65","dbd469813bad"],"10":["5883ce522da3","6778cad93883","e9df98157db1"],"11":["14e82107444b","4266b766a633","6749a30ba9f8"],"12":["c13fb6d44de9","397a9ed0c302","de938139dac4"],"13":["7b0f6e480b45","1cf6571dfa46","b37baae886a6"],"14":["fb84a2a31920","87f39b6fbc0e","7129415a350c"],"15":["8c15566f76c1","d09d27bd0c33","042b0f0f1aa1"],"16":["01c9e11bb382","fa743ec8abec","44c902f1426f"],"17":["4dbaabc73c64","5ced3610c00b","f86a650f0632"],"18":["b9b27b393c2d","d1f9095bd644","1215fc0e6fb2"],"19":["0c3ad6b76682","8cc16a5312f0","2eccb1bd7849"],"20":["bb6e2378efa1","6fb3479541ea","399b1e5c6588"],"21":["f837a221600f","094b05fb94a1","8b1b991cbd4a"],"22":["0877a1532ea8","65d4b0b0f6cb","1a9c740f8547"],"23":["679969b8d4ea","956a08626bce","7c3a1ff0c701"],"24":["abc1831eea05","06d8c84e2025","88662affc0c6"],"25":["a17faf49c6ba","725d91af8228","48044c944c21"],"26":["146b5b588e50","85639f73cc1e","c0bd69fc2e82"],"27":["3a9c819de0a4","e7a91bd4b17a","22bdf06c4546"],"28":["531be60d60cf","fe622ae60a32","78602dcd4311"],"29":["aa1594994a23","61e92a35bcc1","e0db7598b903"],"30":["d1f1b694fd1f","71c7bdb2a429","3a79361e71e6"],"31":["3c3b2a7b87c7","0e3d7f8a910e","a983423629b9"],"32":["6b826b8e9032","5e67948a634b","3f2aa82b5697"],"33":["3458c59d8525","59b72ec4a4f5","f82a8aef34e0"],"34":["588280e59662","3438d035a660","724ad43bfa11"],"35":["7d6dbf5e5422","516d047fe357","df102cc9613b"],"36":["cea3076c91a5","99980d0ba67e","01468d004aa7"],"37":["5f6b13dfa994","c98be4fdc40d","8598c6d9ad56"],"38":["90d736a8fc47","ece9d095f641","92344b7e7f0d"],"39":["cfd8304d4d86","a71f07aa1d8e","9acb61d08e79"],"40":["463559cbc08c","df99261a0b66","780802fd6fe8"],"41":["903bd17f3904","4090efba1e1a","8377979bc467"],"42":["6367459aade2","26f51bd49121","2fe826e22e6e"],"43":["e0f38d652eed","61be2c911c04","895e4800e6b7"],"44":["16ef84d103ac","7fd872fa45ec","d3daadce3589"],"45":["3f6db57fae49","5b6528eafe05","c2af43ddc41f"],"46":["bdae3a5fba8d","3cbfe9f662de","9770cb33d00b"],"47":["ac17632c29bb","502765e71444","b51e114463c5"],"48":["a34024d0623d","070d42b31038","54bb7b4368b2"],"49":["00f2df089c5a","3fb3d4394886","bed559f151fd"],"50":["920f136ab644","aba2e29cecf3","fab72841c515"],"51":["02f79a64ac0e","0d748269f869","ec0de7c61425"],"52":["8805d3084176","96001dd792ad","c046fb8446ce"],"53":["808e1438faf2","6f498758fcc2","9aeb3de4bfb4"],"54":["f445a18ec746","bb2a037fbe7d","d8a60a554bbb"],"55":["a3bb6199bcd4","0cf2bbf520ba","8ba9c46df954"],"56":["f12e57a5eca0","b227ef2b2cd0","9fd1ac21a1bd"],"57":["7d55e88d6989","f41bb07fd99c","a5577cfd5f16"],"58":["f7d7be7cf5c4","e52f780b9f57","cad155e4f2d2"],"59":["516a5735a3c8","5bb03024da21","90b054e1d7c2"],"60":["f74d9ac7826b","003bd3ab1d73","9b5ac169ce34"],"61":["5484bece3fd0","41f01f785ba1","75a6fd71a195"],"62":["d422377855c8","113e54b2d076","f047e93fb967"],"63":["c53b9d0b47a9","cae2457fb3f5","aff653effcdb"],"64":["11d7678f355e","43c0c4c08a84","32b3759d9f74"],"65":["b38713bdc04b","9080becafb80","d3f962cbb21f"],"66":["f792b0512b16","8131585f7a4f","2dfac2cbf1e9"],"67":["e80de2ac6e30","9eaf80359108","96389f412f47"],"68":["1d9d7a9ac739","c18aa9451d7e","95d0ae6fec40"],"69":["e17fabbc4b76","e6738dfe8ede","8da157c192fc"],"70":["79b35adbbdc3","cfa4754ee31b","5d120e0fd514"],"71":["06fb293ad315","69529e931b7f","fed37764ce35"],"72":["5db3179d669c","c1892fbaf718","aa9f642fe7f5"],"73":["637d1f57e5d2","221da9d47ce8","f631c866146e"],"74":["7f0526e338a5","b444212b288d","22967f9d09ca"],"75":["8156ff372220","7a56ccc0dce2","5144a17fac91"],"76":["3203db683b75","53c3a677962b","6b47b8338c58"],"77":["7ace485dbdb8","0685fa7c5980","b6839a1412b3"],"78":["bf86312654e6","692b184443ee","e60b318b6560"],"79":["b7277d14e151","5609648c781c","4c665b41cf2e"],"80":["54d436c8c245","3332768b0def","fdf542c211cf"],"81":["b5776cfe8d12","08554d214279","f4b2dab7ef71"],"82":["a4502edf8d7b","01dab642bd81","d1ec15f63186"],"83":["eef624f5a56e","d31b33c66727","c47f2553b046"],"84":["69121f5fc613","f0f24c2f2dfb","eeb3df5e8e1f"],"85":["1d5bd2c63299","ee0edc748c91","eeba7a0c5279"],"86":["762e72b7647c","a98fd37d9fa1","fdd40b9d7349"],"87":["3777add83ad9","51a2d42b5f37","7564f124712f"],"88":["b41c7f2d992f","b7fbdd40a257","2c9a66192140"],"89":["c78ef4531b73","b129ce5e4971","144f93fa91b9"],"90":["2957520209db","fe3258876d33","f920af3d5e1e"],"91":["1fd14dcd3714","54bc7df40a9c","7628861da7e5"],"92":["821d95468b14","7e3c37fde6aa","0851d4cfa9d9"],"93":["52a29f524602","780f16911c5b","09b265a75f8f"],"94":["86b69fcbedd4","3c583ccb5565","f59d58b5a407"],"95":["f64356cf3f2d","178605287a5e","a453184bacd1"],"96":["4843417574e7","cd66daeb3964","f9ec37e10a7c"],"97":["5b8cd8229e35","8a17730ac9b7","d1ac804b450d"],"98":["dda24c181ec7","c34f269fa6bd","b9dceb660806"],"99":["29f1d9a61646","b61bf1579b2f","b7067dff210f"],"100":["a49f7c275865","b385064de9e9","6e6ada35267a"],"101":["a34c73bfcc72","79bb49a20f2c","334293657a5c"],"102":["1700fd5780fe","9860b5c4f9fb","eef9ca087e72"],"103":["c838f4b8a9d5","6883eec36817","5e5fdb1a05fe"],"104":["97a56d19e255","4f1fbba8118a","340ad58e0491"],"105":["3bf973686699","e2d11a713113","193b4a5be51d"],"106":["13d768922ede","103f50748a35","404e634f5b3f"],"107":["e6bc95ea585b","74f30cfb7aeb","e64c6e1a39cf"],"108":["466d52565ae5","41f90a077e53","d56be6f4931e"],"109":["a4722c6a161a","521ba6dd4085","cf7bde8ecc70"],"110":["54b637c3040e","e4b700480b2c","2a161b2418b0"],"111":["1709db4b23ef","d502e6239793","fa5293b4d346"],"112":["5a88f364ce6b","bc568b184ec3","368ff28f34b7"],"113":["7acf4e703906","e246f3d530a5","7227dec8bcb6"],"114":["0bce878c0d4a","4f716aff7ce8","78799570aae0"],"115":["50a5d87cef90","d5ab5a7f405e","6499c1785d2a"],"116":["9c9a1784bce6","70e996d41b3d","ed881727d65b"],"117":["fee78dd4b546","1701aa26ad3e","a8e669ade365"],"118":["54aa234e9cc4","1c3996e6feb5","5278115eb905"],"119":["182ce82febb2","53257d418f33","fa38d7362180"],"120":["bdbe8de8f967","08b4aa77e3de","e1bcc3301499"],"121":["540f4d8c9e75","1b961f28a0a7","fca7574975f1"],"122":["750be0bd52a2","2469a4a6ee39","4773eea47ff0"],"123":["22b877dc299c","b428871aeaa6","8e699326e75a"],"124":["1dd7b07efe0d","ab8bc12fcfab","6e79404e8280"],"125":["f11db1168677","58cd96a42db9","bd4ca15acde2"],"126":["91fe7134652a","6226309ad376","3fe77ba20112"],"127":["a8dfbf8b850c","447558522e91","08b794500c56"],"128":["a1dfeb292892","2b4f966bf21f","b5a4d37ee22d"],"129":["6370598750fd","6d35d757c651","916142863f60"],"130":["1a1ad9aaa856","685a0ef9e9bd","7de9f54ebc6f"]};
var _SVC_KEY='qs_svc_pass';
function _svcPass(){try{
  var o=JSON.parse(localStorage.getItem(_SVC_KEY)||'null');
  if(!o||!o.a||!o.c)return null;
  if((new Date()).getTime()-(o.t||0)>30*864e5){localStorage.removeItem(_SVC_KEY);return null;}/* 放30天就失效 */
  return o;
}catch(e){return null}}
function _svcUnlocked(k){var o=_svcPass();return !!(o&&o.a===k);}
function classify(c,d){if(!c||!d)return null;var k=c+d;
  if(NOSVC.indexOf(k)>=0)return _svcUnlocked(k)?'remote':'nosvc';/* 客服已核准 → 當偏遠處理 */
  if(REMOTE.indexOf(k)>=0)return 'remote';return 'normal';}
/* 用過的碼記在本機,同一台裝置不能重複用 */
function _svcUsed(code){try{return (JSON.parse(localStorage.getItem('qs_svc_used')||'[]')).indexOf(code)>=0;}catch(e){return false}}
function _svcMarkUsed(code){try{var a=JSON.parse(localStorage.getItem('qs_svc_used')||'[]');
  if(a.indexOf(code)<0){a.push(code);localStorage.setItem('qs_svc_used',JSON.stringify(a.slice(-50)));}}catch(e){}}
async function _svcTry(city,dist,raw){
  var k=city+dist, code=(raw||'').trim().toUpperCase().replace(/\s/g,'');
  var idx=NOSVC.indexOf(k);
  if(idx<0)return 'notneeded';
  if(!code)return 'empty';
  if(_svcUsed(code))return 'used';
  var list=NOSVC_PASS[idx]||[];
  var buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(k+'|'+code));
  var hex=[].slice.call(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,'0');}).join('').slice(0,12);
  if(list.indexOf(hex)<0)return 'bad';
  try{localStorage.setItem(_SVC_KEY,JSON.stringify({a:k,c:code,t:(new Date()).getTime()}));}catch(e){}
  _svcMarkUsed(code);
  return 'ok';
}
var P={
 wall:{pid:'KmEBAGDMzKbYZNjnkZ3l52W4',price:3000,img:imj('BW4907rb3bP68bk9NQGK6kwy')},
 cs:{pid:'p9KbWMJZ7NmJvaAW1x3VEYmB',price:1600,img:imj('DPq15dgL3Pqjg67ylrBbJ2am')},
 cm:{pid:'wMXgOaDokp3AWaDB7Y9JAp45',price:3000,img:imj('EM7nvrbJlqVge7APNBpxVwjP')},
 cl:{pid:'N6qx3aVnzXN2rVdW7jZWBXY2',price:5000,img:imj('xQdpkWj03ae1WbGG39by6aRo')},
 m4:{pid:'oBpXwKO97o9aZ8Wnz3dgQyV0',price:4000,img:imj('AZajx5K9lEmoJ6EwlPJR4Wd2')},
 f4:{pid:'WwNEQDBMkmGKVN8Z1O5a3Jb4',price:5000,img:imj('Wqybvx25N9yJO5zgNREOMVPo')},
 o1:{pid:'JZ8LKanp10Zlx48xkXVbQw04',price:1000,img:imj('0nMRz1wGlRwAygdyNV9Kjv6E')},
 om:{pid:'eobJKaG21M0Qr8ZRzA4BqnwO',price:1500,img:imj('1LPZao453vJ7yQjo3QAR86mM')},
 fan:{pid:'4WjbAXQV12Zg4J0Y1gqNOdal',price:500,img:imj('A7dLy5pv31v9D0krlXg0QzKr')},
 air:{pid:'28je90BY1yYVlQm91Mqp6lDN',price:1600,img:imj('BW4907rb3bP61B6VNQGK6kwy')},
 hi:{pid:'P02rqdam78ebxLvekNbvx6p8',price:1000,img:imj('eKP9MRgBYr85EzARlOvLWZrn')},
 bz:{pid:'aovEX3VGzav0AMmq1jy9xdYm',price:1000,img:imj('w560gEeAlo0aovA2NOqrx1ab')},
 rm:{pid:'ndwgBoML1AZ9omyv7lD8O52Z',price:600,img:imj('41brG7JDYpJLm4AXlxW5ywvg')},
 dh:{price:21900,oprice:25900,img:imj('O5gwrR4GNQbo4EnRYBpn071e')},
 tf:{price:600,img:imj('wAjo1QaDle4m1WkZ390xLGMJ')},
 /* ↓ 非三菱重工機款(員工頁專用) */
 ob1:{price:1800,img:imj('O5gwrR4GNQbopyLRYBpn071e')},
 ob2:{price:2500,img:imj('rAW85emGlnzxgKydlyok6vBL')},
 ob3:{price:3000,img:imj('o4a0bwXWNWbyWRmDlGgE1yzv')},
 obo:{price:500,img:imj('0nMRz1wGlRwAygdyNV9Kjv6E')},
 obc:{price:2800,img:imj('EM7nvrbJlqVge7APNBpxVwjP')}
};
var INDOOR_MHI=[
 {k:'wall',n:'家用壁掛清洗保養',d:'壁掛式・約1.5-2小時/台',grp:'家用壁掛式'},
 {k:'cs',n:'吊隱式小清洗保養',d:'約0.5-1小時/台',grp:'吊隱式'},
 {k:'cm',n:'吊隱式大清洗保養',d:'含風鼓拆洗',grp:'吊隱式'},
 {k:'cl',n:'吊隱式全清洗保養',d:'全機深度清洗',grp:'吊隱式'},
 {k:'m4',n:'迷你四方吹清洗保養',d:'嵌入式小型機',grp:'四方吹式'},
 {k:'f4',n:'四方吹清洗保養',d:'嵌入式標準機',grp:'四方吹式'}
];
var LK_MHI={wall:'家用壁掛',cs:'吊隱式小',cm:'吊隱式大',cl:'吊隱式全',m4:'迷你四方吹',f4:'四方吹'};
var OUT_MHI=[
 {k:'o1',n:'1對1室外機清洗',d:'一對一分離式'},
 {k:'om',n:'1對多室外機清洗',d:'一對多(多聯機)'}
];
/* ===== 非三菱重工機款(員工頁專用) =====
   n 必須跟後台商品名稱「完全一致」——_resolveBtn 是用名稱前綴去比對按鈕的,
   後台改名這裡就要跟著改,否則加不進購物車。 */
var INDOOR_OB=[
 {k:'ob1',n:'其他品牌 分離式室內機清洗(一般型)',d:'一般型壁掛機',grp:'分離式'},
 {k:'ob2',n:'其他品牌 分離式室內機清洗(國際牌QX/RX/G)',d:'國際牌 QX・RX・G 系列',grp:'分離式'},
 {k:'ob3',n:'其他品牌 分離式室內機清洗(國際牌LX/GX/PX・富士通非Z系列)',d:'國際牌 LX・GX・PX ／ 富士通一般型(非Z系列)',grp:'分離式'},
 {k:'obc',n:'其他品牌 吊隱式大保養清洗(含兩風鼓)',d:'大保養・含兩顆風鼓拆洗',grp:'吊隱式'}
];
var LK_OB={ob1:'分離式一般型',ob2:'分離式國際QX',ob3:'分離式國際LX/富士通',obc:'吊隱式大保養'};
var OUT_OB=[
 {k:'obo',n:'其他品牌 室外機清洗(不分多聯/1對1)',d:'不分多聯／1對1'}
];
var INK_MHI=['wall','cs','cm','cl','m4','f4'],INK_OB=['ob1','ob2','ob3','obc'];
var OUTK_MHI=['o1','om'],OUTK_OB=['obo'];
/* 目前生效的清單,由 applyBrand() 依品牌切換 */
var INDOOR=INDOOR_MHI,OUTLIST=OUT_MHI,LK=LK_MHI;
var ADDON=[
/* ⚠️ 員工頁不賣除濕機與 AIRMON(後台已下架),整組拿掉,
      免得畫面上出現用不到的「加贈清洗75折券」字樣。 */
 /* {k:'air',n:'AIRMON',dn:'AIRMON 智慧遠端控制器 MHICAD-WF100',d:'含全新設備費跟安裝設定費',air:true,pop:true,tag:'🔧 到府安裝',nmsm:true},
 {k:'dh',n:'三菱重工除濕機',dn:'三菱重工除濕機 DH18W-T 織紋白',d:'內建UVC燈＋機內乾燥｜每日除濕 18.5 公升',pop:true,tag:'📦 另行宅配',gift:'🎁 加贈清洗75折券'}, */
 {k:'fan',n:'風鼓清洗',d:'僅適用吊隱大保養/全保養清洗',needBlow:true},
 {k:'tf',n:'車馬費',d:'技師車程與交通成本'},
 {k:'hi',n:'挑高施作3.5-4M加價',d:'每台加收'},
 {k:'rm',n:'偏遠地區加價',d:'一張訂單收一次'},
 {k:'bz',n:'商用/重油汙加價',d:'冷氣重油汙(如近廚房)每台加收'}
];
/* ===== 到府場勘：客戶還不確定要洗哪些,先請技師來看並報價 =====
   價格依「服務環境」自動判斷,客戶不必自己選。
   ⚠️ 這兩個在後台是「一般產品」(不是加購品),客戶才能單獨結帳。
   ⚠️⚠️ 商品名稱「絕對不可以」含「車馬費」三個字。
      第一版叫「到府場勘車馬費」,結果被四個既有機制用 indexOf('車馬費') 抓到而誤傷:
        reconcileOrphanAddon → 單獨買時被當孤兒加購品自動刪掉(功能完全失效)
        reconcileTf          → 誤認為已經有車馬費,該補的 $600 不補
        autoFeeNotes         → 購物車貼上「只洗1台室外機需加收車馬費…」完全不相干的說明
        hideTravelCard       → (這個是刻意的)
      2026-08-20 改名為「到府場勘估價」根治。下面的排除條件保留當第二道防線。 */
var SURVEY_PREFIX='到府場勘估價';
var SURVEY={
 home:{n:'到府場勘估價(一般住家)',p:600,lbl:'一般住家'},
 biz :{n:'到府場勘估價(營業場所/社區住宅)',p:1500,lbl:'營業場所／社區住宅'}
};
function _surveyOf(){return SURVEY[(env==='biz')?'biz':'home'];}
var ICO_GUIDE='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 12h3M14 12h3"/></svg>';
var ICO_LIST='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.4"/></svg>';

var CSS='#qw-ovl{position:fixed;inset:0;z-index:99999;background:rgba(4,20,40,.55);display:flex;align-items:center;justify-content:center;padding:14px;font-family:"PingFang TC","Microsoft JhengHei",system-ui,sans-serif}'
+'#qw-ovl *{box-sizing:border-box}'
+''
+'#qw-ovl .qw{max-width:640px!important}'/* 內文CSS有一份舊的.qw(max-width:400px)排在後面會壓過來,故用#qw-ovl前綴+!important搶回;必須放在下面兩個@media之前,否則會反過來壓掉桌機規則 */
+'@media (min-width:760px){#qw-ovl .qw{max-width:640px!important;padding:12px 14px 14px!important}}'+'@media (min-width:1100px){#qw-ovl .qw{max-width:720px!important}}'+'@media (min-width:760px){#qw-terms .qwt-m{max-width:520px!important}}'+'#qw-ovl .qw .wel-start{max-width:89%!important;margin-left:auto!important;margin-right:auto!important;display:block!important}'+'.qw .qsvc{margin-top:11px;border:1.5px dashed #B8860B;background:#fdf6e3;border-radius:11px;padding:12px 13px}'+'.qw .qsvc-t{font-size:12.5px;font-weight:900;color:#8a6410;line-height:1.55;margin-bottom:8px}'+'.qw .qsvc-r{display:flex;gap:7px}'+'.qw .qsvc-i{flex:1;min-width:0;border:1px solid #dbe3ec;border-radius:8px;padding:9px 10px;font-size:14px;letter-spacing:.06em;font-family:ui-monospace,Menlo,monospace;background:#fff;color:#16202b}'+'.qw .qsvc-b{border:none;background:#B8860B;color:#fff;border-radius:8px;padding:9px 15px;font-size:13.5px;font-weight:900;font-family:inherit;cursor:pointer;white-space:nowrap}'+'.qw .qsvc-b:active{transform:scale(.97)}'+'.qw .qsvc-m{font-size:12px;font-weight:800;margin-top:7px;line-height:1.5}'+'.qw .qsvc-m.bad{color:#c0392b}.qw .qsvc-m.ok{color:#1f7a52}'+'.qw .qsvc-ok{margin-top:11px;background:#e8f4ee;color:#1f7a52;border-radius:10px;padding:11px 13px;font-size:12.5px;font-weight:800;line-height:1.65}'+'.qw .qpnote{margin-top:11px;border-radius:11px;padding:11px 13px;font-size:13px;line-height:1.75}'+'.qw .qpn-info{background:#eaf2fb;border:1px solid #b9d3ee;color:#0C447C}'+'.qw .qpn-warn{background:#fdf6e3;border:1px solid #e3c98a;color:#7a5c0d}'+'.qw .qdl{margin-top:12px;background:#fff;border:1.5px solid #dbe3ec;border-radius:12px;padding:12px 14px;display:flex;align-items:center;gap:11px;box-shadow:0 2px 8px rgba(4,44,83,.06);cursor:pointer}'+'.qw .qdl:active{transform:scale(.99)}'+'.qw .qdl-ic{width:34px;height:34px;flex:0 0 auto;border-radius:9px;background:rgba(184,134,11,.09);display:flex;align-items:center;justify-content:center;font-size:17px}'+'.qw .qdl-tx{flex:1;min-width:0}.qw .qdl-t1{font-size:14px;font-weight:900;color:#042C53}.qw .qdl-t2{font-size:11.5px;color:#5f6b78;margin-top:2px}'+'.qw .qdl-ar{color:#B8860B;font-size:18px;font-weight:900}'+'#qw-ovl .qw .wel-h{font-size:clamp(17px,5.7vw,24px)!important;white-space:normal!important;text-wrap:balance!important;font-weight:900!important}'/* 同上:內文CSS有舊的.wel-h(24px+nowrap)會把標題切掉,強制蓋回 */
+'#qw-ovl .qw .callnote,#qw-ovl .qw .envnote,#qw-ovl .qw .optnote,#qw-ovl .qw .warnbox{font-size:13.5px!important;font-weight:800!important;line-height:1.6!important;padding:10px 13px!important}'+'#qw-ovl .qw .callnote b,#qw-ovl .qw .envnote b,#qw-ovl .qw .optnote b,#qw-ovl .qw .warnbox b{font-weight:900!important}'/* 說明類文字統一放大加粗:內文CSS內有舊的.qw重複樣式會壓過wizard.js,故用#qw-ovl前綴+!important強制生效 *//* ⚠️ 彈窗的三條修正已移到 ensureModalCss():這份 CSS 只有「開過精靈」才會注入,
   客戶直接從商品列表加入再按立即結帳時根本沒載到,修正等於不存在(老闆實測抓到) */
+'.qw .on.qw-on-sm{font-size:12.5px;white-space:nowrap;letter-spacing:-.2px}'
+'.qw .qw-thumb{cursor:zoom-in}'
+'#qw-zoom{position:fixed;inset:0;z-index:100005;background:rgba(0,0,0,.82);display:flex;align-items:center;justify-content:center;padding:20px;cursor:zoom-out}#qw-zoom img{max-width:100%;max-height:90vh;border-radius:10px;box-shadow:0 10px 40px rgba(0,0,0,.5)}'
+'.qw .qw-x{position:absolute;top:9px;right:11px;width:30px;height:30px;border:none;background:rgba(255,255,255,.7);border-radius:50%;color:#a4b1bf;font-size:24px;line-height:28px;text-align:center;cursor:pointer;padding:0;font-family:inherit;z-index:5}.qw .qw-x:active{color:#5f6b78}'
+''
+'.qw .qwdot{width:22px;height:22px;flex-shrink:0;border-radius:50%;font-size:12px;font-weight:700;display:flex!important;align-items:center;justify-content:center;background:#E6F1FB;color:#8a97a5;line-height:1;padding:0;box-sizing:border-box}'
+'.qw .qwdot.on{background:#0C447C;color:#fff}.qw .qwdot.done{background:#B8860B;color:#fff}'
+'.qw .qwln{flex:1;height:2px;background:#c9d7e6}.qw .qwln.done{background:#B8860B}'
+''
+'.qw .qh4{font-weight:900;-webkit-text-stroke:.5px currentColor}'
+''
+''
+''
+'.qw .qw-add{border:none;background:#042C53;color:#fff;font-size:12.5px;font-weight:800;border-radius:999px;padding:8px 17px;font-family:inherit;cursor:pointer;white-space:nowrap;flex:0 0 auto}.qw .qw-add:active{transform:scale(.96)}'
+''
+''
+'#qw-ovl .opt img{width:72px!important;height:72px!important;border-radius:8px;border:1px solid #c9d7e6;object-fit:cover;flex-shrink:0}'
+''
+''
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
+''
+''
+''
+''
+''
+''
+''
+''
+''
+''
+''
+''
+''
+''
+''
+''
+''
+'.qw .qplans{display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:2px}'
+'.qw .qplan{position:relative;border:2.5px solid transparent;border-radius:13px;padding:0;overflow:hidden;cursor:pointer;background:none;transition:transform .12s;box-shadow:0 2px 8px rgba(4,44,83,.1)}'
+'.qw .qplan img{width:100%;height:auto;display:block}'
+'.qw .qpn{padding:7px 3px;text-align:center;font-size:14px;font-weight:900;line-height:1.3;white-space:nowrap;border-top:1px solid rgba(0,0,0,.05);-webkit-text-stroke:.4px currentColor}'
+'.qw .qpn-std{background:#E6F1FB;color:#0C447C}'
+'.qw .qpn-early{background:rgba(184,134,11,.14);color:#8a6410}'
+'.qw .qplan.sel{border-color:#0C447C}'+'.qw .qwbar-sum{display:flex;align-items:center;justify-content:space-between;gap:10px;background:#042C53;color:#fff;border-radius:11px;padding:10px 13px;margin:10px 0 2px}'+'.qw .qwb-l{font-size:13.5px;font-weight:700;opacity:.92;line-height:1.45}'+'.qw .qwb-ex{display:block;font-size:11.5px;font-weight:600;opacity:.75;margin-top:2px}'+'.qw .qwb-r{font-size:21px;font-weight:900;white-space:nowrap;letter-spacing:.3px}'+'.qw .qp-money{background:#0C447C;color:#fff;padding:8px 4px;text-align:center;line-height:1.3}'+'.qw .qp-money s{display:block;font-size:12.5px;font-weight:600;color:#9fc2e6}'+'.qw .qp-money b{font-size:21px;font-weight:900;letter-spacing:.2px}'+'.qw .qp-save{background:#fff6e0;color:#8a6410;font-size:12.5px;font-weight:800;text-align:center;padding:6px 3px;line-height:1.35}'
+'.qw .qplan.sel::after{content:\"✓\";position:absolute;top:6px;right:6px;width:22px;height:22px;background:#0C447C;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800}'
+'.qw .qplan:active{transform:scale(.97)}'
+''
+''
+''
+''/* 修:原本nowrap+固定24px,窄螢幕標題會被切掉27px。改成字級隨螢幕縮放且允許換行,任何寬度都不會被切 */
+''
+''
+''
+''
+''
+''
+'.qw .wel-start{display:block;width:100%;border:none;border-radius:14px;overflow:hidden;padding:0;background:none;cursor:pointer;box-shadow:0 5px 16px rgba(4,44,83,.18);-webkit-tap-highlight-color:transparent;transition:transform .12s}'
+'.qw .wel-start img{width:100%;display:block;aspect-ratio:3/1;object-fit:cover}'
+'.qw .wel-start:active{transform:scale(.98)}'
+'.qw .wel-skip{display:inline-block;text-align:center;font-size:13px;color:#8a97a5;text-decoration:underline;text-underline-offset:2px;margin-top:16px;cursor:pointer}'
+''
+'.qw .wel-tile img{width:100%;height:100%;object-fit:cover;display:block}'
+'.qw .wel-tile:active{transform:scale(.97)}'
+'.qw .qw-sum{border:1px solid #e3eaf2;border-radius:12px;padding:10px 12px;margin:4px 0 12px;background:#fbfcfe}'+'.qw .qw-sr{display:flex;justify-content:space-between;align-items:baseline;gap:10px;padding:6px 0;font-size:13px;color:#2c3a48}'+'.qw .qw-srn{flex:1;line-height:1.45}'+'.qw .qw-srp{font-weight:800;white-space:nowrap;font-variant-numeric:tabular-nums}'+'.qw .qw-srt{border-top:1px solid #e3eaf2;margin-top:4px;padding-top:8px}'+'.qw .qw-sre{color:#0f6e56}.qw .qw-sre .qw-srp{font-size:17px;font-weight:900}'+'.qw .qw-srp2{font-weight:900;font-size:13px;color:#0f6e56;white-space:nowrap}'+'.qw .qw-empn{background:#f6ebda;border:1px solid #d9a85f;border-radius:11px;padding:11px 13px;font-size:12.5px;line-height:1.7;color:#4a3410;margin-bottom:10px}'+'.qw .qw-empo{margin:7px 0 0;padding-left:19px}'+'.qw .qw-empo li{margin:3px 0;line-height:1.65}'+'.qw .qw-empa{color:#06C755;font-weight:900;text-decoration:none;border-bottom:1.5px solid #06C755}'+'.qw .qw-empw{margin-top:8px;padding-top:7px;border-top:1px dashed #d9a85f;font-size:11.5px;line-height:1.6}'+'.qw .qw-bg{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:2px}'+'.qw .qw-bc{display:flex;flex-direction:column;border:2.5px solid #dbe4ee;border-radius:14px;overflow:hidden;background:#fff;cursor:pointer;padding:0;font-family:inherit;text-align:left;-webkit-tap-highlight-color:transparent;box-shadow:0 2px 10px rgba(4,44,83,.1);transition:transform .12s}'+'.qw .qw-bc.sel{border-color:#042c53;box-shadow:0 4px 16px rgba(4,44,83,.25)}'+'.qw .qw-bc:active{transform:scale(.97)}'+'.qw .qw-bc img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}'+'.qw .qw-bct{display:block;font-size:14px;font-weight:800;color:#042c53;padding:8px 10px 0;line-height:1.3}'+'.qw .qw-bcs{display:block;font-size:11px;color:#6b7f93;padding:2px 10px 10px;line-height:1.4}'+'.qw .env-g{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:2px}'
+'.qw .env-o{position:relative;aspect-ratio:1/1;border:2.5px solid #dbe4ee;border-radius:14px;overflow:hidden;background:#fff;cursor:pointer;padding:0;font-family:inherit;-webkit-tap-highlight-color:transparent;box-shadow:0 2px 10px rgba(4,44,83,.1);transition:transform .12s}'
+'.qw .env-o img{width:100%;height:100%;object-fit:cover;display:block}'
+'.qw .env-o:active{transform:scale(.97)}'
+'.qw .env-o.sel{border-color:#0C447C}'
+'.qw .env-o.sel::after{content:\"✓\";position:absolute;top:7px;right:8px;width:22px;height:22px;background:#0C447C;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800}'
+'.qw .envnote{font-size:13.5px;font-weight:800;color:#0C447C;background:#E6F1FB;border-radius:8px;padding:10px 13px;margin:10px 0 2px;line-height:1.6}.qw .envnote b{color:#B8860B;font-weight:900}'
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
+''/* ===== 內文CSS 舊 .qw 區塊搬遷(2026-08-06)=====
   原本這 61 條規則放在後台「內文CSS」欄位,排在 wizard.js 之後會壓掉這裡的新樣式,
   且已把內文CSS 撐到 14,976/15,000 字元。整塊原封不動搬來這裡,值完全沒改。
   ★ 必須放在 CSS 字串最尾端:如此才能重現原本「內文CSS 蓋過 wizard 基底規則」的優先順序;
     而前面那些 #qw-ovl ... !important 的修正規則優先權更高,不受影響。 */
+'.qw{position:relative;background:#fff;border-radius:18px;width:100%;max-width:400px;max-height:92vh;overflow-y:auto;padding:20px 18px 18px;box-shadow:0 14px 44px rgba(0,0,0,.35)}.qw .steps{display:flex;align-items:center;gap:6px;margin-bottom:4px}.qw .dot{width:22px;height:22px;border-radius:50%;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;background:#E6F1FB;color:#8a97a5}.qw .dot.on{background:#0C447C;color:#fff}.qw .dot.done{background:#B8860B;color:#fff}.qw .ln{flex:1;height:2px;background:#c9d7e6}.qw .ln.done{background:#B8860B}.qw h2{-webkit-text-stroke:.5px currentColor;font-size:18px;margin:12px 0 3px;color:#042C53;font-weight:900!important}.qw .sub{font-size:12.5px;color:#8a97a5;margin:0 0 14px}.qw .grp-lbl{font-size:12px;font-weight:700;color:#0C447C;margin:12px 0 6px}.qw .opt{display:block;border:1.5px solid #c9d7e6;border-radius:12px;padding:10px 12px;margin-bottom:9px;cursor:pointer}.qw .opt.sel{border-color:#0C447C;background:#E6F1FB}.qw .opt-main{display:flex;align-items:center;gap:11px}.qw .opt img{width:46px;height:46px;border-radius:8px;border:1px solid #c9d7e6;object-fit:cover;flex-shrink:0}.qw .oi{flex:1;min-width:0}.qw .on{font-size:14.5px;font-weight:500;display:block}.qw .od{display:block;font-size:11px;color:#8a97a5}.qw .op{color:#B8860B;font-weight:800;font-size:14px;white-space:nowrap}.qw .det-body{margin-top:9px;background:#E6F1FB;border-radius:8px;padding:9px 11px}.qw .det-cap{font-size:12px;font-weight:700;color:#0C447C;margin-bottom:4px}.qw .det-body ul{margin:0;padding:0;list-style:none}.qw .det-body li{font-size:12px;color:#1c2733;line-height:1.75}.qw .det-warn{font-size:11.5px;color:#c0392b;font-weight:700;margin-top:5px}.qw .step-ctl{display:flex;align-items:center;gap:8px;background:#E6F1FB;border-radius:999px;padding:4px}.qw .step-ctl button{width:28px;height:28px;border-radius:50%;border:none;background:#fff;color:#0C447C;font-size:15px;font-weight:700;cursor:pointer}.qw .step-ctl .q{min-width:18px;text-align:center;font-weight:700;font-size:14px;color:#042C53}.qw .op-wrap{justify-content:flex-end;width:100%;margin-top:9px;padding-top:10px;border-top:1px dashed #d7e0ea;display:flex;align-items:center;gap:8px}.qw .warnbox{font-size:11.5px;color:#c0392b;background:rgba(192,57,43,.08);border-radius:8px;padding:7px 10px;margin:2px 0 10px;line-height:1.5}.qw .optnote{font-size:12px;color:#0C447C;background:#E6F1FB;border-radius:8px;padding:8px 11px;margin:0 0 12px;line-height:1.5}.qw .optnote b{color:#B8860B;font-weight:800}.qw .airnote{font-size:11.5px;color:#8a97a5;background:#E6F1FB;border-radius:8px;padding:7px 10px;margin:2px 0 10px;line-height:1.5}.qw .nav{display:flex;gap:9px;margin-top:14px}.qw .qwfoot{position:sticky;bottom:0;z-index:5;background:#fff;box-shadow:0 -12px 18px -8px rgba(4,44,83,.16)}.qw .qwfoot-l::before{content:"";position:absolute;left:0;right:0;top:-26px;height:26px;background:linear-gradient(rgba(255,255,255,0),rgba(255,255,255,.96));pointer-events:none}.qw .qwmore{position:absolute;left:0;right:0;top:-16px;text-align:center;pointer-events:none;transition:opacity .18s}.qw .qwmore span{display:inline-block;background:#fff;color:#0C447C;font-size:12px;font-weight:800;border-radius:999px;padding:6px 14px;box-shadow:0 2px 12px rgba(4,44,83,.26);pointer-events:auto;cursor:pointer;border:1px solid #dfe8f2}.qw .qwmore.off{opacity:0}.qw .btn{flex:1;border-radius:999px;padding:12px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;border:none}.qw .btn.pri{background:#0C447C;color:#fff}.qw .btn.pri:disabled{background:#a9bdd2;cursor:not-allowed}.qw .btn.gho{background:none;border:1.5px solid #c9d7e6;color:#042C53}.qw .skip{text-align:center;font-size:13px;color:#8a97a5;text-decoration:underline;margin-top:12px;cursor:pointer}.qw .laststep{display:inline-block;font-size:11px;font-weight:800;letter-spacing:.06em;color:#B8860B;background:rgba(184,134,11,.1);border-radius:5px;padding:3px 9px;margin-bottom:4px}.qw .plans{display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:2px}.qw .plan{border:1.5px solid #c9d7e6;border-radius:12px;padding:13px 12px;cursor:pointer}.qw .plan.sel{border-color:#0C447C;background:#E6F1FB}.qw .plan .pn{font-size:15px;font-weight:800;color:#042C53}.qw .plan .phot{display:inline-block;font-size:10px;font-weight:800;color:#fff;background:#B8860B;border-radius:4px;padding:2px 7px;margin-top:5px}.qw .plan .phot-x{background:none;padding:2px 0;color:transparent}.qw .plan .pdisc{font-size:24px;font-weight:800;color:#B8860B;margin:7px 0 3px}.qw .plan .pd{font-size:11.5px;color:#8a97a5;line-height:1.5}.qw .callnote{font-weight:800;font-size:11.5px;color:#0C447C;background:#E6F1FB;border-radius:8px;padding:8px 11px;margin:11px 0 2px;line-height:1.55}.qw.wel{text-align:center}.qw .wel-brand{display:inline-block;font-size:13.5px;font-weight:900;letter-spacing:.05em;color:#F0D9A0;background:#042C53;border:1.5px solid #B8860B;border-radius:999px;padding:8px 18px;margin-bottom:14px;box-shadow:0 2px 10px rgba(4,44,83,.22);line-height:1.35}.qw .wel-bar{width:34px;height:3px;background:#B8860B;border-radius:2px;margin:2px auto 15px}.qw .wel-h{text-wrap:balance;-webkit-text-stroke:0.4px #16202b;font-size:24px;font-weight:800;color:#16202b;margin:0 0 10px;line-height:1.42;white-space:nowrap}.qw .wel-p{font-size:13px;color:#7c8998;line-height:1.7;margin:0 0 6px}.qw .wel-steps{display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;gap:4px;margin:6px 0 22px;white-space:nowrap}.qw .ws{display:inline-flex;align-items:center;gap:4px;font-size:13px;font-weight:800;color:#042C53}.qw .wsn{width:21px;height:21px;flex-shrink:0;border-radius:50%;background:none;border:1.5px solid #B8860B;color:#B8860B;font-size:11px;font-weight:800;display:inline-flex;align-items:center;justify-content:center}.qw .wsa{color:#B8860B;font-weight:800;font-size:11px;opacity:.5;margin:0 -1px}.qw .wel-tiles{display:grid;grid-template-columns:1fr 1fr;gap:12px}.qw .wel-tile{overflow:hidden;background:none;-webkit-tap-highlight-color:transparent;transition:transform .12s;box-shadow:0 2px 10px rgba(4,44,83,.12);aspect-ratio:1/1;border:none;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;font-size:15px;font-weight:800;font-family:inherit;cursor:pointer;line-height:1.35;text-align:center;padding:8px}.qw .wt-pri{background:#0C447C;color:#fff}.qw .wt-gho{background:#fff;color:#0C447C;box-shadow:inset 0 0 0 1.5px #d3dde9}#qw-toast{position:fixed;left:0;right:0;bottom:24px;z-index:100001;text-align:center;pointer-events:none}#qw-toast span{background:#042C53;color:#fff;font-size:13px;padding:10px 18px;border-radius:999px;font-family:inherit}.qw .qwbar{display:flex;align-items:center;gap:6px;margin-bottom:4px;padding-right:32px !important}'
/* ===== 到府場勘（單獨下車馬費）===== */
/* ===== 場勘入口卡片(2026-08-21 改版) =====
   舊版是「金色虛線框＋米色底」,老闆說「蠻沒質感的」—— 那組合在購物網站
   就是「折價券」的視覺語言,所以看起來像未完成的區塊。
   新版取三個元素:頂部藍色標籤(給客戶「這是為你準備的」訊號)、
   對話式問句(像客服在問,不像廣告)、柔和漸層底(脫離優惠券語言)。 */
+'.qw .qsv{position:relative;background:linear-gradient(135deg,rgba(12,68,124,.075),rgba(184,134,11,.11));'
+'border:1.5px solid rgba(12,68,124,.20);border-radius:14px;padding:19px 16px 15px;margin:18px 0 4px;cursor:pointer}'
+'.qw .qsv-chip{position:absolute;top:-10px;left:15px;background:#0C447C;color:#fff;font-size:10.5px;'
+'font-weight:800;letter-spacing:.05em;padding:3px 12px;border-radius:99px;box-shadow:0 2px 7px rgba(4,44,83,.28)}'
+'.qw .qsv-q{font-size:14.5px;font-weight:900;color:#042C53;line-height:1.55}'
+'.qw .qsv-s{font-size:12px;color:#4a5a6b;line-height:1.75;margin-top:7px}'
+'.qw .qsv-rm{font-size:11px;color:#8a6410;margin-top:6px;font-weight:700}'
+'.qw .qsv-r{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:13px}'
+'.qw .qsv-p{font-size:20px;font-weight:900;color:#8a6410;letter-spacing:-.02em;line-height:1}'
+'.qw .qsv-p u{font-size:11.5px;font-weight:700;color:#8593a3;text-decoration:none;margin-left:3px}'
+'.qw .qsv-go{background:#0C447C;color:#fff;border-radius:99px;padding:9px 17px;font-size:13px;'
+'font-weight:800;white-space:nowrap;box-shadow:0 3px 10px rgba(12,68,124,.28)}'
/* 跟著捲動出現的場勘提示。黏在卡片底部(卡片本身有 overflow-y:auto),
   預設隱藏,由 svHintWatch() 依「捲動距離＋還沒選機型」決定要不要顯示 */
+'.qw .qsvh{position:sticky;bottom:0;z-index:3;display:none;align-items:center;gap:8px;cursor:pointer;'
+'background:rgba(4,44,83,.94);color:#fff;border-radius:10px;padding:10px 13px;margin:8px 0 2px;'
+'font-size:12.5px;line-height:1.5;box-shadow:0 4px 14px rgba(4,44,83,.3);'
+'opacity:0;transition:opacity .25s}'
/* 進場只用淡入 —— transform 讓給彈動動畫,兩者搶同一個屬性會互相蓋掉 */
+'.qw .qsvh.on{display:flex;opacity:1;animation:qsvhpop 2.8s ease-in-out infinite}'
+'.qw .qsvh:active{animation:none;transform:scale(.985)}'
/* 2.8 秒一循環,但 86% 的時間完全靜止 —— 只在最後輕輕彈兩下。
   一直抖會很吵也顯得廉價,間歇性的動作反而更抓得住眼睛。 */
+'@keyframes qsvhpop{0%,86%,100%{transform:translateY(0);box-shadow:0 4px 14px rgba(4,44,83,.30)}'
+'90%{transform:translateY(-5px);box-shadow:0 12px 24px rgba(4,44,83,.44)}'
+'94%{transform:translateY(0);box-shadow:0 4px 14px rgba(4,44,83,.30)}'
+'97%{transform:translateY(-2px)}}'
+'.qw .qsvh b{color:#e6c876;font-weight:900}'
+'.qw .qsvh-a{margin-left:auto;font-size:15px;font-weight:900;color:#e6c876;animation:qsvhb 1.4s ease-in-out infinite}'
+'@keyframes qsvhb{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}'
+'@media(prefers-reduced-motion:reduce){.qw .qsvh-a{animation:none}.qw .qsvh,.qw .qsvh.on{transition:none;animation:none}}'
+'.qw .qsum{border:1.5px solid #e2e9f1;border-radius:11px;overflow:hidden;margin:12px 0 4px}'
+'.qw .qsr{display:flex;justify-content:space-between;gap:10px;padding:10px 12px;font-size:13px;border-bottom:1px solid #eef2f7}'
/* 場勘確認頁「偏遠」小標籤 */
+'.qw .qsr-tag{display:inline-block;margin-left:6px;background:rgba(184,134,11,.14);color:#8a6410;font-size:10.5px;font-weight:800;padding:1px 6px;border-radius:99px;vertical-align:1px}'
+'.qw .qsr:last-child{border-bottom:0}.qw .qsr span{color:#7a8a9a}.qw .qsr b{font-weight:800}'
+'.qw .qsr.big b{font-size:19px;color:#B8860B}'
+'.qw .qsok{background:#e7f3ec;color:#1d6b45;border-radius:9px;padding:10px 12px;font-size:12.5px;font-weight:800;line-height:1.65;margin-top:10px}'
+'.qw .qswarn{background:#fff6e0;color:#8a6410;border-radius:9px;padding:9px 12px;font-size:12px;font-weight:700;line-height:1.6;margin-top:7px}';

var qty={},opened={},step=0,plan=null,env=null,ovl=null,_finishing=false;
var areaCity=null,areaDist=null,areaCls=null;
var brand=null;/* 'mhi' | 'other' —— 員工頁專屬,決定要賣哪一組商品 */
var INK=INK_MHI,OUTK=OUTK_MHI;
/* 切品牌時把「目前生效的清單」整組換掉。
   ⚠️ 一定要清空 qty,否則客戶選了三菱 2 台再切到其他品牌,那 2 台會殘留在計價裡。 */
function applyBrand(b){
  brand=b;
  if(b==='other'){INDOOR=INDOOR_OB;OUTLIST=OUT_OB;LK=LK_OB;INK=INK_OB;OUTK=OUTK_OB;}
  else{INDOOR=INDOOR_MHI;OUTLIST=OUT_MHI;LK=LK_MHI;INK=INK_MHI;OUTK=OUTK_MHI;}
  INK_MHI.concat(INK_OB,OUTK_MHI,OUTK_OB).forEach(function(k){qty[k]=0;});
  window.__qsBrand=b;
}
function money(n){return 'NT$ '+n.toLocaleString('en-US');}
/* 統一的捲動函式。
   ⚠️ 不要用原生 window.scrollTo({behavior:'smooth'}) ——
      它在某些環境會「靜默失效」:不捲動、也不丟例外,所以 try/catch 完全接不到,
      按鈕看起來就像壞掉。(2026-08-21 正式頁實測:原生 smooth 完全沒作用,
       但同一頁 1SHOP 自己的「回到上方」鈕正常 —— 它用的是 jQuery animate。)
   所以優先走 jQuery(1SHOP 頁面本來就載了),沒有 jQuery 才退回原生,
   最後再補一道「300ms 後還沒動就硬跳」的保險。 */
function _scrollTo(y){
  try{
    y=Math.max(0,Math.round(y));
    var before=window.pageYOffset;
    if(window.jQuery){
      window.jQuery('html, body').stop().animate({scrollTop:y},600);
    }else{
      _scrollTo(y);
    }
    /* 保險:若 600ms 後完全沒動(且本來就不在目標位置),直接硬跳 */
    setTimeout(function(){
      try{
        if(Math.abs(window.pageYOffset-before)<2&&Math.abs(window.pageYOffset-y)>4)window.scrollTo(0,y);
      }catch(e){}
    },600);
  }catch(e){try{window.scrollTo(0,y);}catch(e2){}}
}
function sumKeys(ks){var s=0;ks.forEach(function(k){s+=qty[k]||0;});return s;}
function hasBlow(){return (qty.cm||0)+(qty.cl||0)>0;}
/* 商用/重油汙加價台數：室內機每台加價；室外機「隨室內機清洗」不加價，只有「單獨清洗室外機」時才每台加價 */
function bzQty(){if(env!=='biz')return 0;var i=sumKeys(INK),o=sumKeys(OUTK);return i>0?i:o;}
/* 車馬費：家用 + 只洗室外機 + 剛好1台 → 自動加$600(單筆);2台以上免;非此情況不加 */
function tfQty(){var i=sumKeys(INK),o=sumKeys(OUTK);return (env==='home'&&i===0&&o===1)?1:0;}
function stepper(item){var q=qty[item.k]||0;return '<div class="op-wrap"><span class="op">'+(P[item.k].oprice?'<s class="op-o">'+money(P[item.k].oprice)+'</s>':'')+money(P[item.k].price)+'</span>'+(q>0?'<div class="step-ctl" onclick="event.stopPropagation()"><button onclick="__qw.chg(&quot;'+item.k+'&quot;,-1)">−</button><span class="q">'+q+'</span><button onclick="__qw.chg(&quot;'+item.k+'&quot;,1)">＋</button></div>':'<button class="qw-add" onclick="__qw.pick(&quot;'+item.k+'&quot;)">＋ 加入</button>')+'</div>';}
var OUT_DETAIL='<b>清洗項目：</b><br>1. 機外殼除塵清潔<br>2. 冷凝器（散熱鰭片）深層清洗<br>3. 高壓水柱沖洗散熱片<br>4. 清除散熱口灰塵與雜物';
function detailBlock(item){if(item.k==='o1'||item.k==='om'){return (qty[item.k]>0)?'<div class="det-body">'+OUT_DETAIL+'</div>':'';}var mk=LK[item.k];if(!mk||!(qty[item.k]>0)||!window.__qsLISTS||!window.__qsLISTS[mk])return '';return '<div class="det-body">'+window.__qsLISTS[mk]+'</div>';}
function optRow(item){var q=qty[item.k]||0;var pop=item.pop?'<span class="qw-pop">🔥 人氣加購</span>':'';var tag=item.tag?'<span class="qw-info">'+item.tag+'</span>':'';var gift=item.gift?'<span class="qw-gift">'+item.gift+'</span>':'';var tags=(pop||tag||gift)?'<div class="qw-tags">'+pop+tag+gift+'</div>':'';var tm=_TERMS[item.k]?'<span class="qw-terms" onclick="event.stopPropagation();__qw.terms(&quot;'+item.k+'&quot;)">📋 注意事項 ›</span>':'';return '<div class="opt '+(q>0?'sel':'')+'"><div class="opt-main"><img class="qw-thumb" src="'+P[item.k].img+'" onclick="event.stopPropagation();__qw.zoom(&quot;'+P[item.k].img+'&quot;)"><div class="oi"><span class="on'+(item.nmsm?' qw-on-sm':'')+'">'+(item.dn||item.n)+'</span>'+tags+'<span class="od">'+item.d+'</span>'+tm+stepper(item)+'</div></div>'+detailBlock(item)+'</div>';}
/* ===== 精靈全程小計 =====
   客戶要走過室內機／室外機／加購三個畫面,以前中途完全看不到累計金額,
   要按下「完成」跳到購物車才第一次看到總價。客單價 $2,850~$9,975 不是隨手買的金額,
   而且精靈會「自動加」車馬費/商用/偏遠 —— 客戶沒主動選卻要付,過程中看得到才不會有疑慮。
   算法與 finish() 建購物車時完全一致:品項 + 商用×台數 + 車馬費 + 偏遠。 */
function _qwCount(){var n=0;INK.concat(OUTK).forEach(function(k){n+=qty[k]||0;});return n;}
/* ⚠️ 2026-08-26 實測抓到的 bug：
   原本 bz(商用/重油汙) 也在這裡,因為正式頁是「選營業場所就自動加購」。
   但員工頁沒有營業場所(env 永遠 home),bzQty() 永遠回 0 ——
   結果員工手動加購商用/重油汙時,精靈的小計與明細都當它不存在,
   購物車卻照樣收 $1,000,金額對不起來。
   員工頁的 bz 是「純手動加購」,所以要從自動項目名單裡拿掉。 */
var _AUTOK={tf:1,rm:1};/* 這兩項才是程式自動決定,不能從 qty 讀 */
function _qwSub(){try{
  var s=0;
  for(var k in qty){if(!qty.hasOwnProperty(k))continue;
    if(_AUTOK[k])continue;/* finish() 會把 bz/tf/rm 寫進 qty,若一併累加會重複計算
                             (客戶走完精靈再重開時 qty 還留著那些值) */
    var q=qty[k]||0;if(q<=0)continue;
    if(P[k]&&typeof P[k].price==='number')s+=P[k].price*q;}
  var bz=bzQty();if(bz>0&&P.bz)s+=P.bz.price*bz;
  var tf=tfQty();if(tf>0&&P.tf)s+=P.tf.price*tf;
  if(areaCls==='remote'&&P.rm)s+=P.rm.price;
  return s;
}catch(e){return 0}}
/* 底部小計條:只在有選東西時出現,沒選就不佔版面也不會嚇到人 */
function _qwFoot(card){try{
 var nav=card.querySelector('.nav');if(!nav||nav.parentNode!==card)return;
 var bar=nav.previousElementSibling;
 var f=document.createElement('div');f.className='qwfoot';
 var head=(bar&&bar.classList&&bar.classList.contains('qwbar-sum'))?bar:nav;
 card.insertBefore(f,head);
 if(head!==nav)f.appendChild(head);
 f.appendChild(nav);
 /* 貼齊視窗最底緣:讀精靈自己的下內距來抵,不寫死數字 */
 var pb=getComputedStyle(card).paddingBottom;
 f.style.bottom='-'+pb;f.style.paddingBottom=pb;
 if(head===nav)return;/* 沒有商品清單的步驟(地區/場域/方案)不加往下滑提示 */
 f.className='qwfoot qwfoot-l';
 var h2=card.querySelector('h2'),ht=h2?(h2.textContent||''):'';
 var unit=(ht.indexOf('\u52a0\u8cfc')>=0)?'\u9805\u52a0\u8cfc\u9805\u76ee':'\u7a2e\u6a5f\u578b';
 var m=document.createElement('div');m.className='qwmore';
 var sp=document.createElement('span');m.appendChild(sp);
 f.insertBefore(m,f.firstChild);
 function upd(){try{
  var top=f.getBoundingClientRect().top,n=0,cs=card.querySelectorAll('.opt');
  for(var i=0;i<cs.length;i++){if(cs[i].getBoundingClientRect().top>=top-6)n++;}
  if(n>0){sp.textContent='\u25bc \u5f80\u4e0b\u6ed1\u52d5\u9084\u6709 '+n+' '+unit;m.className='qwmore';}
  else m.className='qwmore off';
 }catch(e){}}
 card.addEventListener('scroll',upd);
 sp.onclick=function(){card.scrollTop+=card.clientHeight*0.7;};
 upd();
}catch(e){}}
function _qwBar(){
  var n=_qwCount(),s=_qwSub();
  if(n<=0&&s<=0)return '';
  var extra=[];
  if(bzQty()>0)extra.push('商用加價×'+bzQty());
  if(tfQty()>0)extra.push('車馬費');
  if(areaCls==='remote')extra.push('偏遠加價');
  var ex=extra.length?'<span class="qwb-ex">含 '+extra.join('、')+'</span>':'';
  return '<div class="qwbar-sum"><div class="qwb-l">已選 '+n+' 台'+ex+'</div><div class="qwb-r">'+money(s)+'</div></div>';
}
/* 員工頁沒有「環境」這一步(員工洗的都是自己家),所以是 5 格不是 6 格 */
function curPos(){return step==='brand'?1:(step==='area'?2:(step===1?3:(step===2?3:(step===3?4:5))));}
function stepBar(){var pos=curPos();function d(n){return '<div class="qwdot '+(pos>n?'done':pos===n?'on':'')+'">'+(pos>n?'✓':n)+'</div>';}function l(n){return '<div class="qwln '+(pos>n?'done':'')+'"></div>';}return '<div class="qwbar">'+d(1)+l(1)+d(2)+l(2)+d(3)+l(3)+d(4)+l(4)+d(5)+'</div>';}
function render(){
  var w='';
  if(env==='biz')qty.bz=bzQty();qty.tf=tfQty();
  if(step===0){
    w='<div class="qw wel"><div class="wel-brand">\uD83D\uDD12 上洋員工限定 · 冷氣清洗服務</div><div class="wel-bar"></div>'
    +'<h2 class="wel-h">快速選擇您的冷氣清洗保養項目</h2>'
    +'<p class="wel-p">員工專屬價，結帳輸入專屬優惠碼即可折抵</p>'
    +'<div class="wel-steps"><span class="ws"><i class="wsn">1</i>品牌</span><span class="wsa">›</span><span class="ws"><i class="wsn">2</i>地區</span><span class="wsa">›</span><span class="ws"><i class="wsn">3</i>機型</span><span class="wsa">›</span><span class="ws"><i class="wsn">4</i>加購</span><span class="wsa">›</span><span class="ws"><i class="wsn">5</i>完成</span></div>'
    +'<button class="wel-start" onclick="__qw.start()"><img src="'+IMG_QUICK+'" alt="開始快速選購"></button><div class="wel-skip" onclick="__qw.skip()">我已經知道要買什麼，自己看就好 →</div></div>';
  } else if(step==='brand'){
    /* 兩張卡是同構圖的實機照,只有紅色標籤的字不同 —— 並排才看得出差別,不要改成上下排。 */
    function bcard(k,img,t,sub2){
      return '<button type="button" class="qw-bc '+(brand===k?'sel':'')+'" onclick="__qw.pickBrand(&quot;'+k+'&quot;)">'
        +'<img src="'+img+'" alt="'+t+'"><span class="qw-bct">'+t+'</span><span class="qw-bcs">'+sub2+'</span></button>';
    }
    w='<div class="qw">'+stepBar()+'<h2>您要清洗的是什麼品牌？</h2><p class="sub">選擇後會顯示對應的服務項目與價格</p>'
     +'<div class="qw-bg">'+bcard('mhi',IMG_BRAND_MHI,'三菱重工','原廠認證清洗')
     +bcard('other',IMG_BRAND_OTHER,'其他品牌','國際牌・富士通・日立…')+'</div>'
     /* ⚠️ 畫面上不寫折數 —— 老闆 2026-08-26 指示:不要讓非員工看到「員工有幾折」。
        折抵金額結帳輸入優惠碼後才會出現。 */
     +(brand==='other'?'<div class="optnote">其他品牌採<b>對外牌價</b>上架，結帳輸入<b>員工專屬優惠碼</b>即可折抵。</div>':'')
     +(brand==='mhi'?'<div class="optnote">三菱重工為<b>原廠認證清洗</b>，結帳輸入<b>員工專屬優惠碼</b>即可折抵。</div>':'')
     +'<div class="nav"><button class="btn gho" onclick="__qw.go(0)">上一步</button><button class="btn pri" '+(brand?'':'disabled')+' onclick="__qw.go(&quot;area&quot;)">下一步：服務地區</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
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
     +(areaCls==='nosvc'?'<a class="cslink" href="'+LINE_CS+'" target="_blank" rel="noopener">聯繫客服 →</a>'
        +'<div class="qsvc"><div class="qsvc-t">🔑 已經和客服確認可以服務？<br>請輸入客服提供的通行碼</div>'
        +'<div class="qsvc-r"><input id="qsvc-in" class="qsvc-i" type="text" placeholder="例如 UPX……" autocomplete="off" spellcheck="false">'
        +'<button type="button" class="qsvc-b" onclick="__qw.unlock()">解鎖</button></div>'
        +'<div id="qsvc-msg" class="qsvc-m"></div></div>':'')
     /* 客服核准後 classify() 已經回 'remote',所以這裡看到的是偏遠畫面。加一條說明讓客戶知道為什麼 */
     +((areaCls==='remote'&&_svcUnlocked(areaCity+areaDist))?'<div class="qsvc-ok">✅ 客服已確認此地址可安排服務<br>因路程較遠，每張訂單加收偏遠地區加價 <b>$600</b>（僅收一次）</div>':'')
     +'<div class="nav"><button class="btn gho" onclick="__qw.go(&quot;brand&quot;)">上一步</button><button class="btn pri" '+(canNext?'':'disabled')+' onclick="__qw.go(1)">下一步：選機型</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step==='env'){
    /* ⚠️ 員工頁走不到這裡(沒有營業場所,env 寫死 home)。留著只是為了跟正式版對照,勿刪 else-if 鏈。 */
    w='<div class="qw">'+stepBar()+'<h2>冷氣的使用環境為？</h2><p class="sub">先確認環境，幫你算好正確價格</p>'
    +'<div class="env-g"><button type="button" class="env-o '+(env==='home'?'sel':'')+'" onclick="__qw.pickEnv(&quot;home&quot;)"><img src="'+IMG_HOME+'" alt="一般家用"></button>'
    +'<button type="button" class="env-o '+(env==='biz'?'sel':'')+'" onclick="__qw.pickEnv(&quot;biz&quot;)"><img src="'+IMG_SHOP+'" alt="營業場所"></button></div>'
    +'<div class="envnote">選「營業場所」後，之後選室內機會自動幫你算好加價 <b>$1,000</b></div>'
    +'<div class="nav"><button class="btn gho" onclick="__qw.go(&quot;area&quot;)">上一步</button><button class="btn pri" '+(env?'':'disabled')+' onclick="__qw.go(1)">下一步：室內機</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step===1){
    var groups={};INDOOR.forEach(function(x){(groups[x.grp]=groups[x.grp]||[]).push(x);});
    var body='';Object.keys(groups).forEach(function(g){body+='<div class="grp-lbl">'+g+'機型適用</div>'+groups[g].map(optRow).join('');});
    var inLbl=sumKeys(INK)>0?'下一步：室外機':'只洗室外機，下一步';
    /* 「我不知道要洗哪些」是客戶在這一步最常卡住的地方,給他一條出路:先請人來看。
       ⚠️ 曾經在這裡擋過「購物車有東西就不給入口」,想藉空購物車避開優惠券。
          2026-08-20 實測不成立:券是在「加入商品之後」才由 1SHOP 掛上來的,擋購物車擋不到,
          反而讓客戶找不到入口。老闆決定「可以接受被折,但場勘只吃標準方案的 95 折」,
          改由 capCouponForSurvey() 把折扣上限鎖在 95 折,入口一律顯示。 */
    /* ⚠️ 購物車已經有清洗項目 → 不顯示場勘入口。
       老闆定案(2026-08-21):場勘的意義是「我不知道要洗什麼」,客戶既然已經選好了,
       這個需求就消失了。技師到府清洗時順便看其他機器是很自然的事,不該再收 $600 ——
       同時出現在購物車最容易變成客訴,而退款成本遠高於那 $600。
       ⚠️ 這是**純顯示**的擋法,不碰購物車。今天兩次出包(門檻擋門、無限抖動)
          都是「自動增刪購物車」造成的,那種寫法在這一頁很容易跟其他機制打架。 */
    /* 已經挑了機型就不再顯示場勘入口(老闆提的):
       ①場勘與清洗互斥,留著入口等於邀請客戶去按一個等下會被擋的按鈕;
       ②更要緊的是 finishSurvey 只加場勘,**客戶已挑的台數會被無聲丟掉** ——
         挑了 3 台 $9,600 按下去,購物車只剩場勘 $600,沒有任何提示。
       qty 一改 pick()/chg() 都會 render(),所以歸零時入口會自己回來。 */
    var _svHasClean=(_indoorInCart()+_outdoorInCart())>0||_qwCount()>0;
    var _sv=_surveyOf();
    /* 入口卡片的金額必須跟確認頁一致(含偏遠加價),否則客戶點進去金額會跳 */
    var _svRm=(areaCls==='remote'), _svTot=_sv.p+(_svRm?600:0);
    /* ⚠️ 文案要跟著服務環境換。原本統一寫「家裡」,老闆一眼指出:
       社區大樓管委會或店面老闆看到「家裡」會覺得這不是給我的,直接滑過去。
       營業場所的痛點也不同 —— 不是「不懂機型」,是「幾十台散在各樓層數不完」,
       所以動詞用「清點」不用「判斷」。 */
    var _svBiz=(env==='biz');
    var svCard='<div class="qsv" onclick="__qw.goSurvey()">'
      +'<div class="qsv-chip">還在猶豫？</div>'
      +'<div class="qsv-q">'+(_svBiz?'不確定現場有幾台、要洗哪些嗎？':'不知道家裡有幾台、要洗哪些嗎？')+'</div>'
      +'<div class="qsv-s">'+(_svBiz
        ?'讓技師先到現場看一趟，勘查後給你確定的清洗報價。<br>不必自己清點機型和台數。'
        :'讓技師先到府看一趟，現場勘查後給你確定的清洗報價。<br>不必自己判斷機型和台數。')+'</div>'
      +(_svRm?'<div class="qsv-rm">📍 您的地區屬偏遠，含偏遠地區加價 $600</div>':'')
      +'<div class="qsv-r"><div class="qsv-p">NT$ '+_svTot.toLocaleString('en-US')+'<u>／趟</u></div>'
      +'<div class="qsv-go">預約到府場勘</div></div></div>';
    w='<div class="qw">'+stepBar()+'<h2>要清洗哪種室內機？</h2><p class="sub">選擇機型與清洗方案，可選多台</p>'+body+(_svHasClean?'':svCard)+(_svHasClean?'':'<div id="qs-svhint" class="qsvh"><span>🔍</span><span>還不確定要洗哪些？<b>點這裡</b>預約到府場勘</span><span class="qsvh-a">↓</span></div>')+_qwBar()+'<div class="nav"><button class="btn gho" onclick="__qw.go(&quot;area&quot;)">上一步</button><button class="btn pri" onclick="__qw.go(2)">'+inLbl+'</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step==='survey'){
    var sv=_surveyOf();
    /* ⚠️ 偏遠地區的場勘,結帳頁的 reconcileRm 會自動加一筆「偏遠地區加價 $600」。
       這一頁若只寫 $600,客戶按下「加入購物車」金額會突然變成 $1,200 ——
       說一個價收兩倍。(2026-08-20 實測苗栗縣大湖鄉抓到)
       老闆定案:錢照收,但這裡要先把明細攤開來給客戶看。 */
    var svRm=(areaCls==='remote'), svTot=sv.p+(svRm?600:0);
    w='<div class="qw">'
     /* 員工頁沒有「環境」步驟,步驟列只有兩格 */
     +'<div class="qwbar"><span class="ws"><i class="wsn">1</i>品牌</span><span class="wsa">›</span><span class="ws"><i class="wsn">2</i>地區</span><span class="wsa">›</span><span class="ws"><i class="wsn">3</i>場勘</span></div>'
     +'<h2>到府場勘估價</h2><p class="sub">技師到府現場勘查，並提供清洗報價</p>'
     +'<div class="qsum">'
     +'<div class="qsr"><span>服務地區</span><b>'+(areaCity||'')+' '+(areaDist||'')+(svRm?'<span class="qsr-tag">偏遠</span>':'')+'</b></div>'
     +'<div class="qsr"><span>服務環境</span><b>'+sv.lbl+'</b></div>'
     +'<div class="qsr"><span>場勘估價費</span><b>NT$ '+sv.p.toLocaleString('en-US')+'</b></div>'
     +(svRm?'<div class="qsr"><span>偏遠地區加價</span><b>NT$ 600</b></div>':'')
     +'<div class="qsr big"><span>'+(svRm?'合計':'應付金額')+'</span><b>NT$ '+svTot.toLocaleString('en-US')+'</b></div>'
     +'</div>'
     +(svRm?'<div class="qswarn">📍 您的服務地址屬<b>偏遠地區</b>，技師車程較遠，每張訂單加收 <b>$600</b>（僅收一次）</div>':'')
     /* ⚠️ 2026-08-21 老闆決定拿掉「可全額折抵」的承諾,保留自行決定的權力。
        原文是「場勘後若決定清洗,此費用可全額折抵清洗費用」—— 那是對客戶的金錢承諾,
        寫上去就等於答應了。要改回來或改成有條件折抵,三處要一起改(入口卡片/確認頁/取消說明)。 */
     +'<div class="qsok">✓ 技師到府現場勘查，依實際機型與環境<b>提供確定報價</b><br>不需要您自行判斷要洗哪些</div>'
     +'<div class="qswarn">※ 場勘後若未安排清洗，此費用不予退還</div>'
     +'<div class="nav"><button class="btn gho" onclick="__qw.go(1)">返回，我要直接選機型</button>'
     +'<button class="btn pri" onclick="__qw.finishSurvey()">加入購物車</button></div></div>';
  } else if(step===2){
    var outN=sumKeys(OUTK),inNow=sumKeys(INK);
    var tfHint=(env==='home'&&inNow===0&&outN===1);
    var outLbl=outN>0?'下一步：加購':'不洗室外機，下一步';
    var outNote=(env==='biz')?'<div class="optnote">🏢 營業場所可<b>單獨清洗室外機</b>，每台加收 <b>$1,000</b> 商用加價</div>':(inNow>0?'<div class="optnote">室外機清洗為選配，可搭配室內機一起清洗。</div>':'<div class="optnote">只洗室外機：<b>1 台</b>加 <b>$600 車馬費</b>（單筆）、<b>2 台以上免</b></div>');
    w='<div class="qw">'+stepBar()+'<h2>要清洗室外機嗎？</h2><p class="sub">室外機清洗為選配，不需要可直接按下一步</p>'+outNote+OUTLIST.map(optRow).join('')+(tfHint?'<div class="warnbox" style="color:#8a6410;background:rgba(184,134,11,.08)">🚗 目前只洗 1 台室外機，將自動加收 <b>車馬費 $600</b>（技師車程成本，單筆）</div>':'')+_qwBar()+'<div class="nav"><button class="btn gho" onclick="__qw.go(1)">上一步</button><button class="btn pri" onclick="__qw.go(3)">'+outLbl+'</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step===3){
    /* 只顯示銷售頁上真的買得到的加購品:後台把商品從銷售頁移除,精靈就自動不再提供(加回來也會自動出現),
       不必改程式。__qsBtnMap 還沒建好時不過濾,避免開場瞬間全部消失。 */
    var _bmReady=Object.keys(window.__qsBtnMap||{}).length>0;
    var body='';ADDON.forEach(function(x){if(_bmReady&&!_resolveBtn(x.n))return;if(x.needBlow&&!hasBlow())return;if(x.k==='bz'&&env==='biz'){var bn=bzQty();if(bn>0){body+='<div class="envnote">🏢 營業場所：已自動加購「商用/重油汙加價」<b>× '+bn+'</b>（室內機每台 +$1,000；室外機隨室內機清洗不加價，僅單洗室外機時每台 +$1,000）</div>';}return;}if(x.k==='rm'){if(areaCls==='remote'){body+='<div class="envnote">📍 偏遠地區：已自動加購「偏遠地區加價」<b>× 1</b>（一張訂單收一次 +$600）</div>';}return;}if(x.k==='tf'){if(tfQty()>0){body+='<div class="envnote">🚗 只洗 1 台室外機：已自動加購「車馬費」<b>× 1</b>（技師車程成本 +$600，單筆）</div>';}return;}body+=optRow(x);if(x.k==='air'&&(qty.air||0)>0){body+='<div class="airnote">＊AIRMON 僅適用三菱重工家用壁掛室內機，請確認機型後再購買</div>';}if(x.k==='hi'&&(qty.hi||0)>0){body+='<div class="airnote">＊挑高加價請對應實際 3.5–4M 高處的機器台數（最多 '+(sumKeys(INK)+sumKeys(OUTK))+' 台）</div>';}});
    if(!hasBlow()){body+='<div class="warnbox">＊「風鼓清洗」僅在選購吊隱式大/全清洗時才可加購</div>';}
    var nextLbl=sumKeys(ADDON.map(function(a){return a.k;}))>0?'下一步：選到府方案':'不加購，下一步';
    w='<div class="qw">'+stepBar()+'<h2>要加購特殊項目嗎？</h2><p class="sub">這一步是「選配」，沒有需要可直接按下一步</p><div class="optnote">以下項目<b>非必要</b>，依你的現場條件加購即可</div>'+body+_qwBar()+'<div class="nav"><button class="btn gho" onclick="__qw.go(2)">上一步</button><button class="btn pri" onclick="__qw.go(4)">'+nextLbl+'</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else {
    /* 員工頁沒有早鳥/標準方案 —— 折扣一律靠員工優惠碼,所以最後一步改成「確認清單」。
       plan 永遠是 null,planCouponWatch/planMemoryWatch 會因此自動停擺,不必另外關。 */
    var _sub=_qwSub();
    function _srow(nm,q,unit){return '<div class="qw-sr"><span class="qw-srn">'+nm+' × '+q+'</span><span class="qw-srp">'+money(unit*q)+'</span></div>';}
    var _rows=INDOOR.concat(OUTLIST,ADDON).filter(function(x){return !_AUTOK[x.k]&&qty[x.k]>0;}).map(function(x){
      return _srow(x.dn||x.n,qty[x.k],(P[x.k]&&P[x.k].price)||0);
    }).join('');
    /* ⚠️ 偏遠/車馬費/商用是程式自動決定的,不在 qty 裡。
       _qwSub() 有把它們算進小計,明細也必須列出來,否則客戶會覺得金額對不上。 */
    var _tfN=tfQty();if(_tfN>0&&P.tf)_rows+=_srow('車馬費',_tfN,P.tf.price);
    if(areaCls==='remote'&&P.rm)_rows+=_srow('偏遠地區加價',1,P.rm.price);
    w='<div class="qw"><div class="laststep">最後一步</div><h2 class="qh4">確認您的清洗項目</h2>'
     +'<p class="sub">'+(brand==='other'?'其他品牌':'三菱重工')+'・以下為對外牌價</p>'
     +'<div class="qw-sum">'+_rows
     +'<div class="qw-sr qw-srt"><span class="qw-srn">小計</span><span class="qw-srp">'+money(_sub)+'</span></div>'
     +'<div class="qw-sr qw-sre"><span class="qw-srn">結帳輸入員工專屬優惠碼</span><span class="qw-srp2">再折抵</span></div></div>'
     +'<div class="qw-empn"><b>🔑 還沒有員工專屬優惠碼？</b>'
     +'<ol class="qw-empo"><li>加入 LINE 官方帳號 <a class="qw-empa" href="'+LINE_CS+'" target="_blank" rel="noopener">@063kttbk</a></li>'
     +'<li>主動告知您的<b>姓名</b>與<b>員工編號</b></li>'
     +'<li>客服會回覆您的專屬優惠碼</li></ol>'
     +'<div class="qw-empw">每組優惠碼<b>只能使用一次</b>，用過即作廢。結帳時記得輸入。</div></div>'
     +'<div class="callnote">📞 下單付款後，將由專人來電與您約定實際到府時間</div>'
     +'<div class="qdl" onclick="__qw.seeDetail()"><div class="qdl-ic">📖</div><div class="qdl-tx"><div class="qdl-t1">先看服務說明/規範完整圖文介紹</div><div class="qdl-t2">服務內容、清洗流程、施工實例</div></div><div class="qdl-ar">›</div></div>'
     +'<div class="nav"><button class="btn gho" onclick="__qw.go(3)">上一步</button><button class="btn pri" onclick="__qw.finish()">完成，前往結帳</button></div></div>';
  }
  if(!ovl)return;/* 精靈已關閉就別動,避免崩潰 */
  ovl.innerHTML=w;
  var _card=ovl.querySelector('.qw');
  if(_card){_qwFoot(_card);var _x=document.createElement('button');_x.type='button';_x.className='qw-x';_x.setAttribute('aria-label','關閉');_x.innerHTML='×';_x.onclick=function(e){e.stopPropagation();close();};_card.appendChild(_x);}
}
var _qwResume=null;
function open(){if(!document.getElementById('qw-style')){var s=document.createElement('style');s.id='qw-style';s.textContent=CSS;document.head.appendChild(s);}ovl=document.createElement('div');ovl.id='qw-ovl';document.body.appendChild(ovl);step=(_qwResume!=null?_qwResume:0);_qwResume=null;render();}
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
 var MIN=_dhMin();var MAX=new Date();MAX.setHours(23,59,59,999);MAX.setDate(MAX.getDate()+9);/* 只開放 D+2(工作天)~D+9 */var minMonth=new Date(MIN.getFullYear(),MIN.getMonth(),1);var maxMonth=new Date(MAX.getFullYear(),MAX.getMonth(),1);var view=new Date(minMonth);var selDate=null,selSlot=null;
 var ov=document.createElement('div');ov.id='qw-dhcal';
 ov.style.cssText='position:fixed;inset:0;z-index:100001;background:rgba(4,20,40,.6);display:flex;align-items:center;justify-content:center;padding:14px;font-family:"PingFang TC","Microsoft JhengHei",system-ui,sans-serif';
 ov.innerHTML='<div style="background:#fff;border-radius:18px;max-width:420px;width:100%;max-height:92vh;overflow:auto;box-shadow:0 14px 40px rgba(0,0,0,.35)">'
 +'<div style="background:linear-gradient(135deg,#042C53,#0C447C);color:#fff;padding:15px 18px"><div style="font-size:11px;font-weight:800;opacity:.85">📦 三菱重工除濕機 · 另行宅配</div><div style="font-size:16.5px;font-weight:900;margin-top:3px">選擇除濕機期望配送日期與時段</div></div>'
 +'<div style="padding:15px 18px 18px">'
 +'<div style="font-size:12px;font-weight:800;color:#042C53;margin-bottom:8px">1. 期望配送日期<span style="color:#7c8998;font-weight:600">（僅可選 '+_dhFmt(MIN).slice(5)+'～'+_dhFmt(MAX).slice(5)+'，週日/國定假日不可選）</span></div>'
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
  for(var d=1;d<=dim;d++){var dt=new Date(view.getFullYear(),view.getMonth(),d);var dis=(dt<MIN)||(dt>MAX)||_dhBlocked(dt);var sel=selDate&&_dhKey(selDate)===_dhKey(dt);var hol=_DHHOL[_dhKey(dt)];
   var st='aspect-ratio:1/1;border-radius:9px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:13.5px;font-weight:700;';
   if(sel)st+='background:#042C53;color:#fff;';else if(dis)st+='background:#f0f3f7;color:#7c8998;opacity:.45;cursor:not-allowed;';else st+='background:#fff;border:1.5px solid #d3ddea;color:#16202b;cursor:pointer;';
   h+='<div '+(dis?'':'data-d="'+d+'"')+' style="'+st+'">'+d+(hol?'<span style="font-size:8px;font-weight:800;color:'+(sel?'#f5c4be':'#c0392b')+';line-height:1;margin-top:1px">假</span>':'')+'</div>';}
  ov.querySelector('#qwdh-days').innerHTML=h;
  var pv=ov.querySelector('[data-nav="-1"]');pv.disabled=(view<=minMonth);pv.style.opacity=(view<=minMonth)?'.35':'1';var nx=ov.querySelector('[data-nav="1"]');if(nx){nx.disabled=(view>=maxMonth);nx.style.opacity=(view>=maxMonth)?'.35':'1';}
 }
 function sum(){var el=ov.querySelector('#qwdh-sum');var ok=ov.querySelector('#qwdh-ok');
  if(selDate&&selSlot){el.textContent='已選：'+_dhFmt(selDate)+'（'+selSlot+'）';ok.disabled=false;ok.style.background='#042C53';ok.style.cursor='pointer';}
  else{el.textContent=selDate?'請再選時段':'請選擇日期與時段';ok.disabled=true;ok.style.background='#b7c2cf';ok.style.cursor='not-allowed';}}
 ov.addEventListener('click',function(e){
  var nav=e.target.closest('[data-nav]');if(nav){var dir=+nav.getAttribute('data-nav');var nv=new Date(view.getFullYear(),view.getMonth()+dir,1);if(nv>=minMonth&&nv<=maxMonth){view=nv;render();}return;}
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
  /* 員工頁一律當「一般家用」——員工洗的是自己家,沒有營業場所。
     env 保留變數是因為 tfQty()/reconcileBz() 都在讀它,直接寫死比拔掉安全。 */
  start:function(){env='home';window.__qsEnv='home';step='brand';render();},
  pickBrand:function(b){if(brand===b)return;applyBrand(b);render();},
  skip:function(){close();},
  pickCity:function(v){areaCity=v||null;areaDist=null;areaCls=null;qty.rm=0;render();},
  pickDist:function(v){areaDist=v||null;areaCls=classify(areaCity,areaDist);qty.rm=(areaCls==='remote')?1:0;render();},
  pickEnv:function(k){env=k;if(k!=='biz')qty.bz=0;render();},
  pick:function(k){if(k==='dh'||k==='air'){showTerms(k,'gate');return;}if(k==='hi'&&(sumKeys(INK)+sumKeys(OUTK))<1)return;var was=qty[k]||0;if(!qty[k])qty[k]=1;render();},
  terms:function(k){showTerms(k,'read');},
  zoom:function(src){if(document.getElementById('qw-zoom'))return;var z=document.createElement('div');z.id='qw-zoom';z.innerHTML='<img src="'+src+'" alt="">';z.onclick=function(){if(z.parentNode)z.parentNode.removeChild(z);};document.body.appendChild(z);},
  chg:function(k,d){var v=Math.max(0,(qty[k]||0)+d);if(k==='hi'){var mx=sumKeys(INK)+sumKeys(OUTK);if(v>mx)v=mx;}qty[k]=v;render();},
  pickPlan:function(k){plan=k;window.__qsPlan=k;render();},
  unlock:function(){
    var inp=document.getElementById('qsvc-in'), msg=document.getElementById('qsvc-msg');
    if(!inp)return;
    var raw=inp.value;
    function say(t,ok){if(msg){msg.textContent=t;msg.className='qsvc-m'+(ok?' ok':' bad');}}
    if(!raw.trim()){say('請先輸入通行碼');return;}
    say('確認中…');
    _svcTry(areaCity,areaDist,raw).then(function(r){
      /* ⚠️ areaCls 是 pickDist 當下算好存起來的變數,render() 不會重算 ——
         只呼叫 render() 畫面不會變(實測踩過)。必須先自己重算一次。 */
      if(r==='ok'){areaCls=classify(areaCity,areaDist);render();}
      else if(r==='used')say('這組通行碼在這台裝置已經用過了，請洽客服');
      else if(r==='empty')say('請先輸入通行碼');
      else say('通行碼不正確，或不適用於此地區。請向客服確認');
    }).catch(function(){say('確認失敗，請稍後再試或洽客服');});
  },
  goSurvey:function(){step='survey';render();},
  /* 單獨買場勘費:不經過方案步驟(沒有清洗要排程,方案沒有意義),
     所以不設 __qsPlan、也不呼叫 __qsApplyPlanCoupon */
  finishSurvey:function(){
    if(_finishing||window.__qsAdding)return;
    var sv=_surveyOf();
    var r=_resolveBtn(sv.n);
    if(!r){alert('抱歉，目前無法加入「'+sv.n+'」，請洽詢客服協助。');return;}
    _finishing=true;
    var btn=ovl?ovl.querySelector('.btn.pri'):null;if(btn){btn.disabled=true;btn.textContent='加入中…';}
    try{
      window.__qsAdding=true;
      window.__qsEnv=env;window.__qsAreaCls=areaCls;window.__qsAreaCity=areaCity;window.__qsAreaDist=areaDist;
      window.__qsSurvey=1;/* 標記這是場勘單,其他保護機制看得到 */
      /* 場勘沒有方案可言。客戶若先走過清洗流程,__qsPlan 會留著 'early'/'std',
         那會讓彈窗冒出矛盾的方案摘要條(寫85折但實收95折),也會讓 bindCouponGuard
         拿早鳥的 0.15 去跟客戶輸入的碼比較而擋錯人。這裡直接清掉。 */
      window.__qsPlan=null;plan=null;
      try{if(window.viewProduct)window.viewProduct(r.btn,r.pid);}catch(e){}
      setTimeout(function(){window.__qsAdding=false;_finishing=false;},1800);
      close();toast('已加入到府場勘，可直接結帳');
      setTimeout(function(){try{
        var t=null,hs=document.querySelectorAll('h1');
        for(var k=0;k<hs.length;k++){if((hs[k].textContent||'').trim().indexOf('目前已經選購')===0){t=hs[k];break;}}
        if(!t)t=document.getElementById('cart-section');
        if(t){var y=t.getBoundingClientRect().top+window.pageYOffset-70;
          _scrollTo(y);}
      }catch(e){}},420);
    }catch(e){_finishing=false;window.__qsAdding=false;}
  },
  go:function(n){if(n===3){var out=sumKeys(OUTK),indoor=sumKeys(INK);if(out===0&&indoor===0){alert('請至少選擇一台室內機或室外機清洗喔！\n可回上一步（室內機／室外機）選擇台數。');return;}}step=n;render();},
  /* 方案確認彈窗:按「完成，前往結帳」時先跳一次確認(兩種方案各自內容),確認後才真的加入購物車 */
  confirmPlan:function(){
    if(!plan||window.__qsAdding)return;/* 加購進行中不再跳確認窗 */
    if(sumKeys(INK)===0&&sumKeys(OUTK)===0){alert('請至少選擇一台室內機或室外機清洗喔！');return;}
    var D={std:{t:'確認您的標準方案',lead:'您選擇的是「標準方案 95 折」',
        li:['到府服務將安排在<b>專人去電聯繫起 2 週內</b>','實際到府日期，由約時人員<b>去電與您確認</b>','時間可以彈性的話，改選「早鳥方案」可享 <b>85 折</b>（需等候 30 天）'],
        alt:'改選早鳥方案',ok:'我了解，確認標準方案',other:'early'},
      early:{t:'確認您的早鳥方案',lead:'您選擇的是「早鳥方案 85 折」',
        li:['到府服務將安排在<b>專人去電聯繫約時起 30 天後</b>','實際到府日期，由約時人員<b>去電與您確認</b>','如需盡快服務，請改選「標準方案」（兩週內到府）'],
        alt:'改選標準方案',ok:'我了解，確認早鳥方案',other:'std'}}[plan];
    if(!D)return;
    var old=document.getElementById('qw-pc');if(old&&old.parentNode)old.parentNode.removeChild(old);
    var ov=document.createElement('div');ov.id='qw-pc';
    ov.style.cssText='position:fixed;inset:0;z-index:100002;background:rgba(4,20,40,.6);display:flex;align-items:flex-start;justify-content:center;overflow-y:auto;padding:20px 14px;font-family:"PingFang TC","Microsoft JhengHei",system-ui,sans-serif';
    ov.innerHTML='<div style="background:#fff;border-radius:17px;max-width:500px;width:100%;margin:auto;box-shadow:0 14px 44px rgba(0,0,0,.35);overflow:hidden">'
      +'<div style="background:linear-gradient(135deg,#042C53,#0C447C);color:#fff;padding:16px 20px;text-align:center;font-size:17px;font-weight:900">'+D.t+'</div>'
      +'<div style="padding:18px 20px"><div style="font-size:15px;font-weight:900;text-align:center;color:#B8860B;margin-bottom:13px">'+D.lead+'</div>'
      +'<ul style="list-style:none;margin:0;padding:0">'+D.li.map(function(x){return '<li style="font-size:13.5px;line-height:1.7;color:#17212c;padding-left:17px;position:relative;margin-bottom:9px"><span style="position:absolute;left:0;color:#B8860B;font-weight:900">・</span>'+x+'</li>';}).join('')+'</ul></div>'
      +'<div style="padding:0 20px 20px;display:flex;gap:10px">'
      +'<button type="button" id="qw-pc-alt" style="flex:1;border:1.5px solid #dbe3ec;background:transparent;color:#5f6b78;border-radius:12px;padding:13px 10px;font-size:13.5px;font-weight:900;font-family:inherit;cursor:pointer;white-space:nowrap">'+D.alt+'</button>'
      +'<button type="button" id="qw-pc-ok" style="flex:1;border:none;background:#042C53;color:#fff;border-radius:12px;padding:13px 10px;font-size:13.5px;font-weight:900;font-family:inherit;cursor:pointer;white-space:nowrap">'+D.ok+'</button>'
      +'</div></div>';
    document.body.appendChild(ov);
    function kill(){if(ov.parentNode)ov.parentNode.removeChild(ov);}
    ov.querySelector('#qw-pc-alt').onclick=function(){kill();api.pickPlan(D.other);};
    ov.querySelector('#qw-pc-ok').onclick=function(e){var b=this;if(b.disabled)return;b.disabled=true;b.textContent='處理中…';kill();api.finish();};
    ov.addEventListener('click',function(e){if(e.target===ov)kill();});
  },
  /* 先看服務說明/規範完整圖文介紹:關精靈→捲到詳情圖區→浮出「回到引導精靈」(選擇都保留,回來時停在原本那一步) */
  seeDetail:function(){
    _qwResume=step;
    close();
    _showBackBtn();
    setTimeout(function(){
      var t=null,ws=document.querySelectorAll('div');
      for(var i=0;i<ws.length;i++){var im=ws[i].querySelectorAll('img');if(im.length>=8&&/img\.1shop\.tw/.test(im[0].src||'')){t=ws[i];break;}}
      if(!t)t=document.querySelector('.product-row');
      if(t){_scrollTo(t.getBoundingClientRect().top+window.pageYOffset-60);}
    },180);
  },
  finish:function(){
    /* 防重入用獨立旗標 _finishing;__qsAdding 會凍結所有保護機制(校正/車馬費/挑高/孤兒把關),
       只能在真正開始加購時才設,且任何中途返回或例外都必須解除,否則保護會永久停擺 */
    if(_finishing||window.__qsAdding)return;
    if(sumKeys(INK)===0&&sumKeys(OUTK)===0){alert('請至少選擇一台室內機或室外機清洗喔！');return;}
    _finishing=true;
    try{
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
    if(jobs.length===0){alert('抱歉，加入購物車時發生問題，請再試一次；若持續失敗，可關閉精靈自行選購。');_finishing=false;return;}
    var btn=ovl?ovl.querySelector('.btn.pri'):null;if(btn){btn.disabled=true;btn.textContent='加入中…';}
    var i=0;
    function next(){
      if(i>=jobs.length){
        window.__qsPlan=plan;window.__qsEnv=env;window.__qsAreaCls=areaCls;window.__qsAreaCity=areaCity;window.__qsAreaDist=areaDist;
        setTimeout(function(){window.__qsAdding=false;_finishing=false;},1800);
        close();toast('已為您加入購物車，可再調整或結帳');
        /* 加完自動帶到「目前已經選購」購物車區,讓客戶馬上看到結果(不然精靈關掉後不知道發生什麼事) */
        setTimeout(function(){try{
          var t=null,hs=document.querySelectorAll('h1');
          for(var k=0;k<hs.length;k++){if((hs[k].textContent||'').trim().indexOf('目前已經選購')===0){t=hs[k];break;}}
          if(!t)t=document.getElementById('cart-section');
          if(t){var y=t.getBoundingClientRect().top+window.pageYOffset-70;
            _scrollTo(y);}
        }catch(e){}},420);
        return;
      }
      var job=jobs[i++];
      try{if(window.viewProduct)window.viewProduct(job.btn||null,job.pid);}catch(e){}
      setTimeout(next,550);
    }
    window.__qsAdding=true;
    next();
    }catch(e){_finishing=false;window.__qsAdding=false;}
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
   /* 事前把關:1SHOP規定加購品必須購物車先有主商品(清洗服務)才加得進,否則會在跳完注意事項/配送日後才失敗。
      這裡在按下的當下就先擋、給友善提示,不讓客戶白填 */
   var _isAddon=/AIRMON|除濕機|風鼓清洗|挑高施作|商用\/重油汙|偏遠地區|車馬費/.test(nm);
   if(_isAddon&&(_indoorInCart()+_outdoorInCart())<=0){
     var _b=el.closest('button,a');if(!_b)return;
     var _t=(_b.textContent||'').replace(/\s/g,'');
     if(_t.indexOf('加入')<0&&_t.indexOf('加購')<0&&_t.indexOf('選購')<0)return;
     e.preventDefault();e.stopImmediatePropagation();
     var _m='請先在上方「清洗項目」選擇要清洗的冷氣機型，才能加購此項目';
     try{if(window.notificationMsg)notificationMsg(_m,'danger',4);else alert(_m);}catch(_e){alert(_m);}
     return;
   }
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
    img.src='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@80ddf1921e696f34827eb07d92e39899a0df3f46/mhi-badge.png';
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
function hideTravelCard(){try{var ws=document.querySelectorAll('.product-row .product-wrap');for(var i=0;i<ws.length;i++){var h=ws[i].querySelector('h3');var nm=h?(h.textContent||''):'';/* 場勘車馬費也藏起來:只從精靈的入口進去,不讓客戶在商品列表直接點(會漏掉環境判斷與說明) */
if(nm.indexOf('車馬費')>=0||nm.indexOf('偏遠地區加價')>=0||nm.indexOf('加購品已享優惠價')>=0||nm.indexOf(SURVEY_PREFIX)===0){ws[i].style.display='none';}}}catch(e){}}
/* 購物車裡的「方案折扣校正」改成白話說明、隱藏數量/單價/刪除鈕(系統自動管理,客戶不需操作) */
/* 校正計算期間把會跳動的金額蓋成「計算中…」,算完一次顯示正確值(客戶不會看到金額亂跳);9秒安全上限,萬一卡住也會自動顯示真實金額 */
function _corrBusy(){var t=window.__qsCorrBusy||0;return t>0&&(Date.now()-t)<12000;}
/* 換優惠券期間的結帳鎖,用「自己的」旗標。
   不能共用 __qsCorrBusy —— 除濕機/AIRMON 下架後 reconcileAdjust 的 P 恆為 0,
   它每 600ms 就會執行一次 window.__qsCorrBusy=0,實測把鎖清成只剩 10 毫秒(等於沒鎖)。
   純時間判斷、8 秒硬到期,所以不可能卡住讓客戶結不了帳。 */
function _cpBusy(){var t=window.__qsCpBusy||0;return t>0&&(Date.now()-t)<8000;}
function _maskPrice(price,busy){try{if(!price)return;var sp=price.querySelector('.qs-calc');
 if(busy){if(!sp){[].slice.call(price.children).forEach(function(c){c.style.display='none';});sp=document.createElement('span');sp.className='qs-calc';sp.textContent='計算中…';sp.style.cssText='color:#8a93a0;font-size:13px;font-weight:600;white-space:nowrap';price.appendChild(sp);}}
 else if(sp){if(sp.parentElement)sp.parentElement.removeChild(sp);[].slice.call(price.children).forEach(function(c){c.style.display='';});}}catch(e){}}
var _dhGone=0;
function _dhResetWatch(){try{
  if(window.__qsAdding){_dhGone=0;return;}
  var has=_cartArr().some(function(x){return (x.ProductName||'').indexOf('三菱重工除濕機')>=0;});
  if(has){_dhGone=0;return;}
  if(window.__qsDhDelivery||window.__qsRead_dh){_dhGone++;if(_dhGone>=4){window.__qsDhDelivery='';window.__qsRead_dh='';_dhGone=0;}}
}catch(e){}}
/* 修:內文JS記住「已同意」(__qsAgreed)後,再按立即結帳會跳過方案選擇畫面,客戶想改早鳥/標準只能重新整理。
   作法:只要不在結帳畫面、也沒開著同意彈窗,就清掉旗標→下次按結帳會重新跳出方案選擇 */
function resetAgreeGate(){try{
  if(!window.__qsAgreed)return;
  var cc=document.querySelector('select[name="CountyAndCity"]');
  if(cc&&cc.offsetHeight>0)return;/* 正在結帳表單中,不動 */
  var o=document.getElementById('qs-ovl');
  if(o&&getComputedStyle(o).display!=='none')return;/* 同意彈窗開著,不動 */
  window.__qsAgreed=false;
}catch(e){}}
/* 在結帳同意彈窗加一顆「只更新方案，回購物車」:原本只有「同意並繼續結帳」會直接帶客戶進三步驟結帳,
   想單純換方案看金額的客戶沒有出路。此鈕只套用方案優惠券並關閉彈窗,不進結帳流程 */
function addPlanOnlyBtn(){try{
  var ovl=document.getElementById('qs-ovl');
  if(!ovl||getComputedStyle(ovl).display==='none')return;
  var box=document.getElementById('qs-planbox');if(!box)return;
  var go=document.getElementById('qs-go');if(!go||!go.parentNode)return;
  var b=document.getElementById('qs-planonly');
  if(!b){
    b=document.createElement('button');b.type='button';b.id='qs-planonly';
    b.textContent='只更新方案，回購物車看金額';
    b.style.cssText='width:100%;margin-top:9px;border:1.5px solid #d3ddea;background:#fff;color:#0C447C;border-radius:12px;padding:12px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer';
    b.onclick=function(){
      var sel=box.querySelector('.qs-plan.sel');
      if(!sel){try{if(window.notificationMsg)notificationMsg('請先選擇到府方案','danger',3);}catch(e){}return;}
      window.__qsPlan=sel.getAttribute('data-plan');
      b.disabled=true;b.textContent='更新中…';
      var done=false;
      function fin(){if(done)return;done=true;try{ovl.style.display='none';}catch(e){}b.disabled=false;b.textContent='只更新方案，回購物車看金額';}
      try{if(window.__qsApplyPlanCoupon){window.__qsApplyPlanCoupon(fin);setTimeout(fin,4500);}else fin();}catch(e){fin();}
    };
    go.parentNode.insertBefore(b,go.nextSibling);
  }
  var has=!!box.querySelector('.qs-plan.sel');
  b.style.opacity=has?'1':'.5';
  b.style.cursor=has?'pointer':'not-allowed';
}catch(e){}}
/* 「↩ 回到引導精靈」浮動鈕:①按📖看詳情時顯示 ②精靈被關掉且購物車是空的(客戶沒有其他入口可回精靈)時也顯示
   購物車有商品時不顯示(底部已有「共N件·立即結帳」浮動條,且購物車上方有🪄重選連結),結帳中也不顯示 */
function _showBackBtn(){try{
  var b=document.getElementById('qw-back');
  if(b)return b;
  if(!document.getElementById('qw-bk-css')){var bs=document.createElement('style');bs.id='qw-bk-css';bs.textContent='@keyframes qwbk{0%{transform:translateX(-50%) translateY(18px);opacity:0}60%{transform:translateX(-50%) translateY(-3px);opacity:1}100%{transform:translateX(-50%) translateY(0);opacity:1}}';document.head.appendChild(bs);}
  b=document.createElement('button');b.type='button';b.id='qw-back';
  b.textContent='↩ 回到引導精靈';
  b.style.cssText='position:fixed;left:50%;transform:translateX(-50%);bottom:22px;z-index:99990;background:linear-gradient(135deg,#C9962A,#B8860B);color:#fff;border:none;border-radius:99px;padding:15px 30px;font-size:15.5px;font-weight:900;letter-spacing:.02em;font-family:"PingFang TC","Microsoft JhengHei",system-ui,sans-serif;cursor:pointer;box-shadow:0 10px 30px rgba(184,134,11,.5);white-space:nowrap;animation:qwbk .34s cubic-bezier(.2,1.4,.4,1)';
  b.onclick=function(){_hideBackBtn();open();};
  document.body.appendChild(b);
  return b;
}catch(e){return null;}}
function _hideBackBtn(){try{var b=document.getElementById('qw-back');if(b&&b.parentNode)b.parentNode.removeChild(b);}catch(e){}}
/* ===== 發票資訊頁:把預設值從「捐贈」改成「個人」 =====
   1SHOP 的發票類型選單順序是 捐贈(v=1) / 個人(v=0) / 公司(v=2),
   預設選中第一個「捐贈」。客戶沒注意直接按送出,發票就被捐掉了 ——
   而且捐出去的發票**收不回來**,客訴成本很高。(2026-08-21 測試頁實測確認)
   ⚠️ 只在畫面第一次穩定後動一次。客戶之後自己選什麼就是什麼,絕不覆蓋。
      要等一輪才動,是為了避開 Vue 首次渲染 —— 太早設會被它蓋回去,
      每輪都設則會跟 Vue 打架變成閃爍(場勘折扣列那次的教訓)。 */
var _rtSeen=false,_rtDone=false;
function fixReceiptDefault(){try{
  if(_rtDone)return;
  var s=document.querySelector('select[name="ReceiptType"]');
  if(!s||!s.options.length)return;
  if(!_rtSeen){_rtSeen=true;return;}   /* 第一輪只記錄,讓 Vue 先渲染完 */
  _rtDone=true;
  var per=null;
  for(var i=0;i<s.options.length;i++){
    if((s.options[i].text||'').trim()==='個人'){per=s.options[i].value;break;}
  }
  if(per===null||s.value===per)return;
  s.value=per;
  try{s.dispatchEvent(new Event('change',{bubbles:true}));}catch(e){}
}catch(e){}}
/* 場勘提示條:機型清單很長,場勘卡片在最下面,客戶常常沒看到就按下一步走了。
   ⚠️ 第一版的觸發條件是「已經開始往下滑」——老闆一眼看出這是錯的:
      **最不滑的客戶正是最需要這個提示的人**,那樣寫等於專門排除掉他們。
   改成「開始滑」或「在這一步停留 3.5 秒」,哪個先到算哪個。
   停留即出現,語氣也對得上卡片的「還在猶豫？」——他確實正在猶豫。
   隱藏條件不變:選了機型(他知道要洗什麼了)或場勘卡片已經看得到,就立刻收掉。 */
function svHintWatch(){try{
  var h=document.getElementById('qs-svhint'); if(!h)return;
  var card=h.closest('.qw'); if(!card)return;
  /* 點提示條 → 直接捲到場勘卡片。老闆:「客戶點這區就可以自動跳轉到最下面」——
     只給文字要客戶自己滑,等於把工作丟回去給他。
     ⚠️ 捲的是卡片自己的內部捲軸(.qw 有 overflow-y:auto),不是整頁,
        所以不能用 _scrollTo()(那是給 window 用的)。
     ⚠️ 位置要用 getBoundingClientRect 相減算,不能用 offsetTop ——
        offsetParent 不一定是 .qw,算出來會偏掉。 */
  if(!h.getAttribute('data-b')){
    h.setAttribute('data-b','1');
    h.onclick=function(){
      try{
        var sv=card.querySelector('.qsv'); if(!sv)return;
        var top=card.scrollTop+(sv.getBoundingClientRect().top-card.getBoundingClientRect().top)-12;
        if(top<0)top=0;
        try{card.scrollTo({top:top,behavior:'smooth'});}catch(e){card.scrollTop=top;}
        /* 原生 smooth 會靜默失效(前往選購箭頭踩過),600ms 後沒到位就硬跳 */
        setTimeout(function(){try{if(Math.abs(card.scrollTop-top)>8)card.scrollTop=top;}catch(e){}},600);
      }catch(e){}
    };
  }
  /* 一進到這一步就顯示,不設任何延遲。
     演進史(免得有人又加回去):
       第一版「要先滑才顯示」→ 最不滑的客戶正是最需要提示的人,錯。
       第二版「滑動 或 停留3.5秒」→ 老闆問「怎麼不一開始就顯示」,那 3.5 秒的顧慮沒有根據。
       現在:進來就顯示,選了機型或看到場勘卡片才收。 */
  var on=true;
  if(_qwCount()>0)on=false;                         /* ② 已經選了機型 */
  if(on){                                           /* ③ 場勘卡片已經看得到 */
    var sv=card.querySelector('.qsv');
    if(sv){
      var r=sv.getBoundingClientRect(), cr=card.getBoundingClientRect();
      if(r.top<cr.bottom-40)on=false;
    }
  }
  /* ⚠️ 底部按鈕列 .qwfoot 也是 sticky bottom:0 —— 提示條若也用 bottom:0,
     會被它整個蓋住:元素在、class 也對,但客戶完全看不到。
     (2026-08-21 老闆實機回報「沒顯示」,實測提示條 704~762 剛好落在 qwfoot 的 696~780 內。
      我先前在「視窗 0x0 的凍結分頁」上只驗了 class 就說通過 —— 那個驗證不算數。)
     所以要動態量按鈕列的高度,把提示條墊到它上面。高度會隨文字換行變動,不能寫死。 */
  if(on){
    var foot=card.querySelector('.qwfoot');
    var fh=foot?Math.round(foot.getBoundingClientRect().height):0;
    var want=((fh||0)+8)+'px';
    if(h.style.bottom!==want)h.style.bottom=want;
  }
  var has=h.className.indexOf('on')>=0;
  if(on!==has)h.className='qsvh'+(on?' on':'');
}catch(e){}}
/* ===== 場勘在購物車時,擋下「加入清洗服務」 =====
   ⚠️ 老闆要的是「擋」,我第一版只做了提醒 + 一段永遠不會觸發的死程式(購物車有商品時
      客戶根本進不了精靈),等於完全沒擋。老闆實機截圖抓到:場勘 + 吊隱式大清洗同時在購物車。
   這裡用**攔截加入動作**,不是事後刪購物車 —— 後者就是今天害畫面無限抖動的寫法。
   只攔室內機/室外機清洗;偏遠加價、商用加價、車馬費、場勘本身都是系統自己加的,不能攔。 */
/* ===== 內文JS 結帳彈窗的版面修正(必須「永遠」注入) =====
   ⚠️ 這三條原本放在精靈的 CSS 變數裡,而那份只在 open() 開精靈時才注入 <style id="qw-style">。
      客戶若沒走精靈(直接從商品列表加入 → 按立即結帳),修正完全沒載到:
      彈窗維持 align-items:center + overflow:visible → 內容比視窗高時
      **上面被切掉、下面被切掉,而且完全捲不動** —— 右上角 × 與底部按鈕都按不到。
      老闆 2026-08-21 實測(800x620)抓到:彈窗高 801px,X 在 -85px、按鈕只露出 7px。
   ①讓遮罩本身可捲、內容靠上 ②按鈕列黏在可視底部 ③× 黏在可視右上角。 */
/* ===== 方案記憶:重整後不可以變回「尚未選擇」 =====
   ⚠️ window.__qsPlan 只是個記憶體變數,客戶按 F5 就歸零。
      重整後再按立即結帳,內文JS 看到 __qsPlan 是空的就重畫方案卡、兩張都沒選中,
      送出鈕變成 disabled 的「請先選擇到府方案」—— 但購物車裡方案折扣其實還在,
      客戶看到的狀態跟實際收費互相矛盾,而且被卡住不能結帳(老闆 2026-08-21 實測回報)。
   還原順序:①先問購物車真正掛著哪張方案券(最可信)
            ②問不出來才用 localStorage 的記憶 —— 因為客戶自己的券(例如 VIP88折)
              會被 couponRestoreWatch 換上去,把方案券蓋掉,這時購物車問不出方案。
   ⚠️ 折扣列 ProductType 99 沒有 ProductName,只能讀畫面上 .cart-item.coupon 的文字。 */
var _PLAN_KEY='qs_plan_sel';
function _planSave(p){try{localStorage.setItem(_PLAN_KEY,JSON.stringify({p:p,t:(new Date()).getTime()}));}catch(e){}}
function _planLoad(){try{
  var o=JSON.parse(localStorage.getItem(_PLAN_KEY)||'null');
  if(!o||(o.p!=='std'&&o.p!=='early'))return null;
  if((new Date()).getTime()-(o.t||0)>864e5)return null;/* 隔一天以上就不猜,讓客戶自己重選 */
  return o.p;
}catch(e){return null}}
function planMemoryWatch(){try{
  return;/* 員工頁沒有方案,方案記憶整個停用(留著函式是為了跟正式版對照時好比對) */
  if(window.__qsAdding||_corrBusy())return;
  /* ⚠️ 購物車還沒載進來時 _cartArr() 也是回空陣列,分不出「車是空的」和「還沒載到」。
     不擋這關的話,一重整就會在購物車載入前先把記憶清掉,修正等於白做。 */
  if(!(window._UserSession&&window._UserSession.Cart))return;
  if(!_cartHasGoods()){try{localStorage.removeItem(_PLAN_KEY);}catch(e){}return;}/* 車空了就忘掉,免得下一單被舊選擇預選 */
  /* ⚠️ 純場勘單沒有方案可言。finishSurvey 特地把 __qsPlan 清成 null 就是為了這個 ——
     留著方案會讓彈窗冒出矛盾的摘要條(寫85折、實收95折),也會讓 bindCouponGuard
     拿早鳥的 0.15 去跟客戶輸入的碼比較而擋錯人。
     ⚠️⚠️ 這裡「不可以」用 _surveyOnly() —— 它是黏著的,購物車讀不到時沿用上次結論,
     實測它在剛加入場勘的那幾秒回 false,害我把 __qsPlan 設成 'early',
     場勘變成 85 折 $510(應該封頂 95 折 $570,少收 $60)。直接查購物車現況才可靠。 */
  var _c=_cartArr(), _hasSv=false;
  for(var _i=0;_i<_c.length;_i++){if((_c[_i].ProductName||'').indexOf(SURVEY_PREFIX)===0){_hasSv=true;break;}}
  if(_hasSv&&(_indoorInCart()+_outdoorInCart())===0){window.__qsPlan=null;return;}
  if(window.__qsPlan==='std'||window.__qsPlan==='early'){_planSave(window.__qsPlan);return;}
  var p=null;
  var el=document.querySelector('.cart-item.coupon');
  var nm=el?(el.textContent||''):'';
  if(nm.indexOf('早鳥')>=0)p='early';
  else if(nm.indexOf('標準95折')>=0)p='std';
  if(!p)p=_planLoad();
  if(p)window.__qsPlan=p;
}catch(e){}}
/* ===== 客服核准例外 → 訂單備註自動加註 =====
   老闆要一眼看得出「這張是例外核准的,不是系統漏洞」,而且對帳時查得到是哪一組通行碼放行的。
   ⚠️ 備註是 1SHOP 內建的 `.form-note`,不是自訂欄位(cf-),層級也不同 —— 見 [[m3-live-status]]。
   ⚠️ 只加一次,而且不覆蓋客戶自己打的字(接在後面)。客戶手動刪掉就不再補,免得跟他打架。 */
function svcPassNote(){try{
  var o=_svcPass(); if(!o)return;
  var wrap=document.querySelector('form.step3 .form-group.form-note')||document.querySelector('.form-group.form-note');
  if(!wrap)return;
  var ta=wrap.querySelector('textarea')||document.querySelector('textarea[name="Note"]');
  if(!ta||ta.getAttribute('data-qssvc')==='1')return;
  ta.setAttribute('data-qssvc','1');
  var tag='【客服核准例外】地區：'+o.a+'・通行碼：'+o.c;
  if((ta.value||'').indexOf('【客服核准例外】')>=0)return;
  var v=(ta.value||'').trim();
  var nv=v?(v+'\n'+tag):tag;
  try{
    ta.focus();
    var st=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,'value').set;
    st.call(ta,nv);
  }catch(e){ta.value=nv;}
  try{ta.dispatchEvent(new Event('input',{bubbles:true}));ta.dispatchEvent(new Event('change',{bubbles:true}));}catch(e){}
}catch(e){}}
/* ===== 方案券沒掛上的保險 =====
   ⚠️ 2026-08-21 實測抓到的**既有**問題(跟通行碼無關,真.偏遠地區也一樣):
   購物車有 3 筆以上時(清洗＋偏遠加價＋商用加價),精靈完成後**方案券套不上去** ——
   客戶看到的是原價 $4,600 而不是 $3,910,**多付 $690**。
   兩次重現、換成台中大甲(真偏遠、沒用通行碼)也一樣,所以不是例外單專屬。
   原因:1SHOP 的購物車一次只吃一個操作,併發會被靜默丟棄;
        品項越多、加入耗時越久,方案券那一發就越容易撞上還沒落地的加購動作。
   ⚠️ **只在購物車「完全沒有任何折扣」時才出手** —— 這樣就不會跟老闆定案的
      「客戶可以自己換成比較差的碼」打架(客戶換過的話折扣>0,這裡直接不管)。 */
var _plcTry=0,_plcAt=0,_plcKey='';
function planCouponWatch(){try{
  if(window.__qsAdding||_corrBusy()||_cpBusy())return;
  if(((new Date()).getTime()-(window.__qsUserCpAt||0))<12000)return;/* 客戶正在自己換碼,別插手 */
  if(window.__qsPlan!=='std'&&window.__qsPlan!=='early')return;
  if(!(window._UserSession&&window._UserSession.Cart))return;
  if(!_cartHasGoods())return;
  /* 場勘單有自己的 95 折封頂機制,不要插手。⚠️ 不可用 _surveyOnly()(黏著的) */
  var c=_cartArr(),hasSv=false;
  for(var i=0;i<c.length;i++){if((c[i].ProductName||'').indexOf(SURVEY_PREFIX)===0){hasSv=true;break;}}
  if(hasSv)return;
  if(_cartOff()>0.001)return;/* 已經有折扣就不管,尊重客戶自己的選擇 */
  var key=_cartSub();
  if(key!==_plcKey){_plcKey=key;_plcTry=0;}
  var now=(new Date()).getTime();
  if(now-_plcAt<4000)return;
  if(_plcTry>=3)return;
  _plcTry++;_plcAt=now;
  try{if(window.__qsApplyPlanCoupon)window.__qsApplyPlanCoupon(function(){});}catch(e){}
}catch(e){}}
/* ===== 員工價 75 折:僅適用標準方案 =====
   老闆 2026-08-25 定案:員工券只搭「標準方案(兩週內到府)」,不能選早鳥。
   ⚠️ 為什麼要鎖:員工券 0.25 比早鳥 0.15 更優惠,客戶若切到早鳥,
      `__qsApplyPlanCoupon` 會把員工券換成早鳥85折 —— 員工反而多付錢($2,250→$2,550)。
      所以偵測到購物車有員工券就把方案釘在 std,避免這個誤觸。
   ⚠️ 判斷用**購物車折扣列的文字**(折扣列 ProductType 99 沒有 ProductName,只能讀畫面)。 */
function _empCoupon(){try{
  var el=document.querySelector('.cart-item.coupon');
  return !!(el&&/員工價/.test(el.textContent||''));
}catch(e){return false}}
/* ===== 員工頁強制無方案 =====
   ⚠️ 2026-08-26:原本這裡是 empPlanLock() —— 那是「員工用正式頁」的舊設計,
      偵測到員工券就把方案釘成 std,免得客戶切到早鳥反而多付錢。
      改成獨立員工頁之後,這頁根本沒有早鳥/標準的概念,
      但那段程式還是會把 __qsPlan 設成 'std',害結帳彈窗冒出
      「您選擇的方案 標準方案·95折 [變更]」—— 員工頁沒有 95 折,而且按變更會跑出早鳥。
      現在改成:只要看到 __qsPlan 有值就清掉。 */
/* ===== 員工頁：一律標準方案,不給選 =====
   ⚠️ 2026-08-26 實測踩到的兩個坑,合起來記：
   (1) 舊的 empPlanLock() 會把 __qsPlan 設成 'std',害結帳彈窗冒出
       「您選擇的方案 標準方案·95折 [變更]」—— 員工頁沒有 95 折,按變更還會跑出早鳥。
   (2) 但反過來把 __qsPlan 清成 null 也不行 ——
       結帳按鈕會檢查「有沒有選方案」,清掉之後按鈕直接卡在
       「請先選擇到府方案」,員工根本結不了帳。
   正解:內部固定 std(員工就是兩週內到府),幫他把卡片選好讓按鈕解鎖,
        然後把整個方案選擇區(#qs-plan-wrap:標題+副標+兩張卡)藏起來,
        以及把寫著折數的摘要條移掉。 */
function empForceStd(){try{
  if(window.__qsPlan!=='std')window.__qsPlan='std';
  var box=document.getElementById('qs-planbox');
  if(box){
    var std=box.querySelector('.qs-plan[data-plan="std"]');
    /* 先幫他選好,結帳按鈕才會解鎖 */
    if(std&&!std.classList.contains('sel')){try{std.click();}catch(e){}}
  }
  /* 藏整個 wrap,不是只藏 box —— 標題與副標在 box 裡但 wrap 才是完整區塊 */
  var wrap=document.getElementById('qs-plan-wrap')||box;
  if(wrap&&wrap.getAttribute('data-emphide')!=='1'){
    wrap.setAttribute('data-emphide','1');
    wrap.style.display='none';
  }
  /* 摘要條寫著「標準方案·95折」,員工頁沒有這個折數,直接移掉 */
  var w=document.getElementById('qs-plansum-wrap');
  if(w&&w.parentNode)w.parentNode.removeChild(w);
}catch(e){}}
function killPlanCoupon(){try{
  /* (1) 覆寫必須「每次都檢查」,不能設旗標只做一次 ——
     實測發現內文JS 會在我覆寫之後又重新定義這個函式,一次性覆寫會被蓋掉。
     用函式上的 __qsNoop 標記來判斷「現在這個是不是我的空函式」。 */
  var f=window.__qsApplyPlanCoupon;
  if(typeof f==='function'&&!f.__qsNoop){
    var noop=function(done){if(done)done();};
    noop.__qsNoop=1;
    window.__qsApplyPlanCoupon=noop;
  }
  /* (2) 光覆寫還不夠 —— 內文JS 可能在定義的同一瞬間就呼叫了,700ms 迴圈來不及擋。
     所以看到「標準/早鳥」這種客戶方案券出現、而員工自己又沒輸入過任何碼,就按掉它。
     ⚠️ 只認方案券,員工自己輸入的 UPE75 或任何其他碼一律不動。
     ⚠️ 有次數上限,避免跟內文JS 互相拉扯變成無限迴圈。 */
  if(window.__qsAdding)return;
  if(((new Date()).getTime()-(window.__qsUserCpAt||0))<15000)return;/* 員工剛輸入過碼就別插手 */
  var row=document.querySelector('.cart-item.coupon');
  if(!row){window.__qsKillTry=0;return;}
  var txt=row.textContent||'';
  if(!/標準\s*9?5\s*折|早鳥\s*8?5\s*折/.test(txt))return;/* 不是方案券,不動 */
  if((window.__qsKillTry||0)>=5)return;
  var t=row.querySelector('.fa-trash-alt');
  if(!t)return;
  window.__qsKillTry=(window.__qsKillTry||0)+1;
  try{(t.closest('a')||t.closest('button')||t).click();}catch(e){}
}catch(e){}}
function empLineHint(){try{
  var inp=document.querySelector('[name="CouponNumber"]');
  if(!inp)return;
  var box=inp.closest('.input-group')||inp.parentNode;
  if(!box||!box.parentNode)return;
  if(document.getElementById('qs-lnhint'))return;
  var a=document.createElement('a');
  a.id='qs-lnhint';
  a.href=LINE_CS;a.target='_blank';a.rel='noopener';
  a.innerHTML='\uD83D\uDCAC 還沒有員工優惠碼？加 LINE @063kttbk 索取 →'
    +'<small style="display:block;font-weight:600;font-size:11px;color:#5f6b78;margin-top:2px">'
    +'加入後請主動告知姓名與員工編號</small>';
  a.style.cssText='display:block;margin:7px 0 2px;font-size:12.5px;font-weight:800;color:#06C755;'
    +'text-decoration:none;line-height:1.5;font-family:inherit';
  box.parentNode.insertBefore(a,box.nextSibling);
}catch(e){}}
function bindCouponGuard(){try{
  if(window.__qsBindWrapped)return;
  var orig=window.submitCouponNumber;
  if(typeof orig!=='function')return;
  window.__qsBindWrapped=true;

  window.submitCouponNumber=function(a){
    try{
      var inp=null;
      try{if(window.jQuery)inp=window.jQuery(a).closest('.input-group').find('[name="CouponNumber"]')[0];}catch(e2){}
      if(!inp)inp=document.querySelector('[name="CouponNumber"]');
      var raw=(inp&&inp.value)||'';
      var code=raw.trim().toUpperCase();
      /* 自動去空白+轉大寫(1SHOP 的優惠碼區分大小寫,小寫輸入必失敗) */
      if(inp&&raw!==code){inp.value=code;try{inp.dispatchEvent(new Event('input',{bubbles:true}));}catch(e3){}}
      /* 2026-08-21 老闆定案:客戶要換成比較差的碼也讓他換。
         舊版會擋下並顯示「您目前的 88 折更優惠，已為您保留原折扣」——
         老闆的立場是「即便 88 折比 92 折好，也要讓消費者自行替換」。
         ⚠️ 只拿掉「擋下」,**保留 trim+轉大寫**(1SHOP 區分大小寫,小寫必失敗)
         與 `_cpPending` 記錄(套用失敗時才能自動補回,那是純保護、不違背客戶意願)。 */
      _cpPending=code;_cpPendBefore=_cartOff();
      /* ⚠️ 客戶自己送碼時,1SHOP 是「先移除舊券→再套新券」,中間有一段購物車完全沒折扣。
         planCouponWatch 看到「沒折扣」就會把方案券搶回去,客戶等於換不掉(實測踩到)。
         這裡舉旗,讓那支保險在客戶操作後 12 秒內完全不出手。 */
      window.__qsUserCpAt=(new Date()).getTime();
    }catch(e){}
    return orig.apply(this,arguments);
  };
}catch(e){}}
/* 看門狗:只要購物車現在的折扣比「客戶已經成功用過的最佳碼」還差,就自動補回去。
   一次補三種情況:①打錯字被清掉 ②重新整理後記憶歸零 ③客戶回頭改方案,方案券蓋掉自己的專屬券。 */
function couponRestoreWatch(){try{
  if(!window.__qsBindWrapped)return;
  /* 記住客戶自己輸入成功的碼。
     這裡直接看「購物車的折扣率是不是等於剛送出那組碼的折扣」,不靠 1SHOP 的提示文字 ——
     舊版是包 notificationMsg 來聽「使用成功」,但 bindCouponGuard 先把旗標設起來才去包,
     若當下 notificationMsg 還沒被建好就會永遠跳過不包:擋下的保護正常、記憶卻從頭到尾沒存過。
     這是時序競賽,測試頁測不出來、正式頁時好時壞(2026-08-12 實測)。 */
  if(_cpPending){
    var pv=_codeOff(_cpPending);
    if(pv===null||pv<=0)_cpPending=null;
    /* ⚠️ 2026-08-21 修迴歸:`_codeOff()` 是「用前綴猜折扣」,不會驗證這組碼是否真的存在。
       拿掉 bindCouponGuard 的「一樣好也擋下」之後,客戶打錯字(例如 UPB92QQQQQ)也會被送出,
       而送出的瞬間購物車還掛著舊券、折扣率剛好等於猜出來的 0.08 ——
       看門狗就把這組**不存在的假碼**存成記憶,之後永遠套不上,
       客戶折扣救不回來,而且購物車會在 3,000 ↔ 2,850 之間來回抖動(實測 25 秒抖 3 次)。
       修法:加上「折扣率必須真的變了」這個條件。寧可不更新記憶,也不要存到假碼。 */
    else if(Math.abs(_cartOff()-pv)<=0.001&&Math.abs(_cartOff()-_cpPendBefore)>0.001){_cpSave(_cpPending,pv);_cpPending=null;_cpPendBefore=-1;_cpTry=0;_cpFixing=0;}
  }
  /* 用 _corrBusy() 而不是直接看 __qsCorrBusy:它有 12 秒自動到期,
     萬一底下的解鎖 setTimeout 沒跑到(分頁在背景會被凍結),看門狗才不會被自己鎖死。 */
  if(window.__qsAdding||_corrBusy())return;/* 加購/清空進行中不要插手 */
  /* 場勘單($600/$1,500)是固定價,不該被任何方案券或優惠碼折到。
     看門狗會把上一次購物留在 localStorage 的「最佳券」自動補回來(實機看到 95 折被套上、
     $1,500 變 $1,425),所以這裡直接跳過,並且不要清掉記憶(客戶下次買清洗還要用) */
  if(_surveyOnly())return;
  if(!_cartHasGoods()){_cpTry=0;_cpSeen=0;return;}
  var best=_cpLoad();if(!best)return;
  var sub=_cartSub();
  if(sub!==_cpSub){_cpSub=sub;_cpTry=0;_cpSeen=0;}/* 購物車一有變動就給新的機會 */
  if(_cartOff()>=best.r-0.001){_cpTry=0;_cpSeen=0;_cpFixing=0;return;}/* 已經一樣好或更好 */
  var now=(new Date()).getTime();
  /* 1SHOP 的購物車一次只吃一個操作,併發送出會被靜默丟棄。
     折扣剛變差的那一瞬間,客戶那次的「移除舊券→套新券」多半還在飛,
     這時搶著送出一定失敗 —— 先靜候 1.8 秒讓它落地。(2026-08-12 正式頁實測踩過) */
  if(!_cpSeen){_cpSeen=now;return;}
  if(now-_cpSeen<1800)return;
  if(now-_cpAt<3000)return;/* 留時間給上一次落地 */
  /* 試滿次數就停手,但**不清掉記憶** —— 失敗多半只是撞到別的操作,
     把客戶的碼忘掉會讓折扣永遠回不來,代價比多試幾次大得多。
     購物車再有變動時上面會把次數歸零,自然會再試。 */
  if(_cpTry>=3){_cpFixing=0;return;}
  var el=document.querySelector('[name="CouponNumber"]');if(!el)return;
  var btn=document.querySelector('[onclick*="submitCouponNumber"]');if(!btn)return;
  _cpTry++;_cpAt=now;_cpFixing=1;
  /* 換券是「先移除舊券、再套新券」,中間購物車會有一小段完全沒有優惠券。
     客戶若剛好在這時按下「立即結帳」,就會用沒折扣的原價成立訂單。
     用自己的 __qsCpBusy 鎖住(不能用 __qsCorrBusy,會被 reconcileAdjust 每 600ms 清掉);
     maskCalc 排在本函式之前,只設旗標會慢一輪,所以這裡直接鎖一次。 */
  window.__qsCpBusy=now;
  try{_lockCheckout(true);}catch(e){}
  el.value=best.c;try{el.dispatchEvent(new Event('input',{bubbles:true}));}catch(e){}
  btn.click();
  if(window.notificationMsg)window.notificationMsg('已為您套回原本的 '+Math.round((1-best.r)*100)+' 折優惠','success',4);
  setTimeout(function(){window.__qsCpBusy=0;},2600);
}catch(e){}}
function liftCornerBtns(){try{
  var chat=document.querySelector('.chat');if(!chat)return;
  var fab=document.getElementById('qs-fab');
  var h=0;
  if(fab){var cs=getComputedStyle(fab);if(cs.display!=='none'&&cs.visibility!=='hidden')h=Math.round(fab.getBoundingClientRect().height);}
  var want=h>0?(h+12)+'px':'';
  if(chat.getAttribute('data-qslift')===want)return;
  chat.setAttribute('data-qslift',want);
  if(want)chat.style.setProperty('bottom',want,'important');
  else chat.style.removeProperty('bottom');
}catch(e){}}
/* 購物車區的標題(1SHOP用h1)。找不到就退回 #cart-section */
function _cartHead(){try{
  var hs=document.querySelectorAll('h1');
  for(var k=0;k<hs.length;k++){if((hs[k].textContent||'').trim().indexOf('目前已經選購')===0)return hs[k];}
}catch(e){}return document.getElementById('cart-section');}
/* 這顆鈕的下一站看客戶現在在哪:
   還沒到商品區 → 商品區;已經在商品區 → 購物車;已經在購物車 → 頁面最底。
   舊版固定跳商品區,而且捲過商品區就自己隱藏 → 精靈關閉後會自動捲到購物車,
   這顆鈕就消失了,老闆按到的其實是1SHOP原生的「回到上方」 */
function _goNext(){
  var p=document.querySelector('.product-row')||document.querySelector('.product-wrap');
  var c=_cartHead(),vh=window.innerHeight;
  if(p&&p.getBoundingClientRect().top>vh*0.6)return {el:p,off:60,t:'前往選購'};
  if(c&&c.getBoundingClientRect().top>vh*0.6)return {el:c,off:70,t:'前往已選購項目'};
  return {el:null,off:0,t:'前往頁面最下方'};
}
function addGoBottomBtn(){try{
  var list=document.querySelector('.chat ul.action-list');if(!list)return;
  var ref=list.querySelector('li.goTopBtn');if(!ref)return;
  var li=document.getElementById('qs-godown');
  if(!li){
    li=document.createElement('li');li.id='qs-godown';
    var cs=getComputedStyle(ref);
    li.style.cssText='display:block;list-style:none;margin:'+cs.margin+';padding:'+cs.padding;
    li.innerHTML='<button type="button" class="btn btn-top" title="前往選購"><i class="far fa-arrow-down"></i></button>';
    li.querySelector('button').onclick=function(){
      var g=_goNext();
      var y=g.el?(g.el.getBoundingClientRect().top+window.pageYOffset-g.off):document.body.scrollHeight;
      _scrollTo(y);
    };
    list.insertBefore(li,ref);
  }
  li.style.display='block';/* 不再自動隱藏:每一段都要按得到 */
  var b=li.querySelector('button'),g=_goNext();
  if(b&&b.getAttribute('title')!==g.t)b.setAttribute('title',g.t);
}catch(e){}}
setInterval(function(){fillConsent();fillEnv();fillAddr();_agePlaceholder();_hiPlaceholder();addTerms();hidePlanForSurvey();capCouponForSurvey();addAddrHint();fixCards();updateFab();styleHeads();addBrandBadge();addPlanSummary();addContinueBtn();addPopularBadge();hideTravelCard();autoFeeNotes();surveyMixNote();styleCorrLine();maskCalc();addGoBottomBtn();liftCornerBtns();bindCouponGuard();couponRestoreWatch();_dhResetWatch();resetAgreeGate();addPlanOnlyBtn();backBtnWatch();fixReceiptDefault();svHintWatch();guardSurveyExclusive();ensureModalCss();killPlanCoupon();empLineHint();planMemoryWatch();svcPassNote();planCouponWatch();empForceStd();},700);
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
