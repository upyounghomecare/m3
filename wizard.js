/* ===== M3 引導精靈（正式版）===== */
(function(){
try{
var IB='https://img.1shop.tw/ZLDl7P1ybNpzP89AO5Q6n98k/';
function im(t){return IB+t+'/600x.png';}
var TILE_GUIDE='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/tile-guide.jpg';
var TILE_ALL='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/tile-all.jpg';
var PLAN_STD='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/standard.jpg';
var PLAN_EARLY='https://cdn.jsdelivr.net/gh/upyounghomecare/m3@main/earlybird.jpg';
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
+'.qw .qwbar{display:flex;align-items:center;gap:6px;margin-bottom:4px}'
+'.qw .qwdot{width:22px;height:22px;flex-shrink:0;border-radius:50%;font-size:12px;font-weight:700;display:flex!important;align-items:center;justify-content:center;background:#E6F1FB;color:#8a97a5;line-height:1;padding:0;box-sizing:border-box}'
+'.qw .qwdot.on{background:#0C447C;color:#fff}.qw .qwdot.done{background:#B8860B;color:#fff}'
+'.qw .qwln{flex:1;height:2px;background:#c9d7e6}.qw .qwln.done{background:#B8860B}'
+'.qw h2{font-size:18px;margin:12px 0 3px;color:#042C53;font-weight:800}'
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
+'.qw .qplan img{width:100%;height:auto;display:block;border-radius:10px}'
+'.qw .qplan.sel{border-color:#0C447C}'
+'.qw .qplan.sel::after{content:\"✓\";position:absolute;top:6px;right:6px;width:22px;height:22px;background:#0C447C;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800}'
+'.qw .qplan:active{transform:scale(.97)}'
+'.qw .callnote{font-size:11.5px;color:#0C447C;background:#E6F1FB;border-radius:8px;padding:8px 11px;margin:11px 0 2px;line-height:1.55}'
+'.qw.wel{text-align:center}.qw .wel-brand{font-size:11px;font-weight:800;letter-spacing:.1em;color:#0C447C;margin-bottom:12px}'
+'.qw .wel-bar{width:34px;height:3px;background:#B8860B;border-radius:2px;margin:2px auto 15px}'
+'.qw .wel-h{font-size:20px;font-weight:900;color:#16202b;margin:0 0 10px;line-height:1.42;white-space:nowrap;-webkit-text-stroke:0.4px #16202b}'
+'.qw .wel-p{font-size:13px;color:#7c8998;line-height:1.7;margin:0 0 6px}'
+'.qw .wel-steps{display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;gap:4px;margin:6px 0 22px;white-space:nowrap}'
+'.qw .ws{display:inline-flex;align-items:center;gap:4px;font-size:13px;font-weight:800;color:#042C53}'
+'.qw .wsn{width:21px;height:21px;flex-shrink:0;border-radius:50%;background:none;border:1.5px solid #B8860B;color:#B8860B;font-size:11px;font-weight:800;display:inline-flex;align-items:center;justify-content:center}'
+'.qw .wsa{color:#B8860B;font-weight:800;font-size:11px;opacity:.5;margin:0 -1px}'
+'.qw .wel-tiles{display:grid;grid-template-columns:1fr 1fr;gap:12px}'
+'.qw .wel-tile{aspect-ratio:1/1;border:none;border-radius:12px;padding:0;overflow:hidden;background:none;font-family:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform .12s;box-shadow:0 2px 10px rgba(4,44,83,.12)}'
+'.qw .wel-tile img{width:100%;height:100%;object-fit:cover;display:block}'
+'.qw .wel-tile:active{transform:scale(.97)}'
+'#qw-air{position:fixed;inset:0;z-index:100000;background:rgba(4,20,40,.62);display:flex;align-items:center;justify-content:center;padding:18px;font-family:inherit}'
+'#qw-air .m{background:#fff;border-radius:16px;max-width:340px;width:100%;max-height:92vh;overflow-y:auto;padding:20px 18px;text-align:center}'
+'#qw-air h3{margin:0 0 8px;font-size:17px;color:#042C53}#qw-air p{font-size:13px;color:#1c2733;line-height:1.7;margin:0 0 12px}#qw-air p b{color:#0C447C}'
+'#qw-air img{width:100%;border-radius:8px;border:1px solid #c9d7e6;display:block}'
+'#qw-air a{display:block;font-size:13px;color:#0C447C;font-weight:800;margin:12px 0;text-decoration:none}'
+'#qw-air .ok{background:#0C447C;color:#fff;border:none;border-radius:999px;padding:12px 28px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;width:100%}'
+'#qw-toast{position:fixed;left:0;right:0;bottom:24px;z-index:100001;text-align:center;pointer-events:none}#qw-toast span{background:#042C53;color:#fff;font-size:13px;padding:10px 18px;border-radius:999px;font-family:inherit}';

var qty={},opened={},step=0,plan=null,ovl=null;
function money(n){return 'NT$ '+n.toLocaleString('en-US');}
function sumKeys(ks){var s=0;ks.forEach(function(k){s+=qty[k]||0;});return s;}
function hasBlow(){return (qty.cm||0)+(qty.cl||0)>0;}
function stepper(item){var q=qty[item.k]||0;return '<div class="op-wrap"><span class="op">'+money(P[item.k].price)+'</span>'+(q>0?'<div class="step-ctl" onclick="event.stopPropagation()"><button onclick="__qw.chg(&quot;'+item.k+'&quot;,-1)">−</button><span class="q">'+q+'</span><button onclick="__qw.chg(&quot;'+item.k+'&quot;,1)">＋</button></div>':'')+'</div>';}
function detailBlock(item){var mk=LK[item.k];if(!mk||!(qty[item.k]>0)||!window.__qsLISTS||!window.__qsLISTS[mk])return '';return '<div class="det-body">'+window.__qsLISTS[mk]+'</div>';}
function optRow(item){var q=qty[item.k]||0;return '<div class="opt '+(q>0?'sel':'')+'" onclick="__qw.pick(&quot;'+item.k+'&quot;)"><div class="opt-main"><img src="'+P[item.k].img+'"><div class="oi"><span class="on">'+item.n+'</span><span class="od">'+item.d+'</span></div>'+stepper(item)+'</div>'+detailBlock(item)+'</div>';}
function stepBar(){function d(n){return '<div class="qwdot '+(step>n?'done':step===n?'on':'')+'">'+(step>n?'✓':n)+'</div>';}function l(n){return '<div class="qwln '+(step>n?'done':'')+'"></div>';}return '<div class="qwbar">'+d(1)+l(1)+d(2)+l(2)+d(3)+'</div>';}
function render(){
  var w='';
  if(step===0){
    w='<div class="qw wel"><div class="wel-brand">三菱重工 · 冷氣清洗</div><div class="wel-bar"></div>'
    +'<h2 class="wel-h">幫你快速挑好清洗方案</h2>'
    +'<p class="wel-p">不知道要洗哪些？讓我一步步帶你選</p>'
    +'<div class="wel-steps"><span class="ws"><i class="wsn">1</i>室內機</span><span class="wsa">›</span><span class="ws"><i class="wsn">2</i>室外機</span><span class="wsa">›</span><span class="ws"><i class="wsn">3</i>加購</span><span class="wsa">›</span><span class="ws"><i class="wsn">4</i>到府方案</span></div>'
    +'<div class="wel-tiles"><button class="wel-tile" onclick="__qw.start()"><img src="'+TILE_GUIDE+'" alt="帶我一步步選"></button><button class="wel-tile" onclick="__qw.skip()"><img src="'+TILE_ALL+'" alt="查看所有方案"></button></div></div>';
  } else if(step===1){
    var groups={};INDOOR.forEach(function(x){(groups[x.grp]=groups[x.grp]||[]).push(x);});
    var body='';Object.keys(groups).forEach(function(g){body+='<div class="grp-lbl">'+g+'式機型適用</div>'+groups[g].map(optRow).join('');});
    var inLbl=sumKeys(['wall','cs','cm','cl','m4','f4'])>0?'下一步：室外機':'只洗室外機，下一步';
    w='<div class="qw">'+stepBar()+'<h2>要清洗哪種室內機？</h2><p class="sub">選擇機型與清洗方案，可選多台</p>'+body+'<div class="nav"><button class="btn pri" onclick="__qw.go(2)">'+inLbl+'</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step===2){
    var outN=sumKeys(['o1','om']),inNow=sumKeys(['wall','cs','cm','cl','m4','f4']);
    var needMore=(inNow===0&&outN>0&&outN<3);
    var outLbl=outN>0?'下一步：加購':'不洗室外機，下一步';
    w='<div class="qw">'+stepBar()+'<h2>要清洗室外機嗎？</h2><p class="sub">室外機清洗為選配，不需要可直接按下一步</p><div class="optnote">需搭配室內機一起洗；若只洗室外機需滿 3 台</div>'+OUTLIST.map(optRow).join('')+(needMore?'<div class="warnbox">＊只洗室外機需滿 3 台（1對1＋1對多合計），目前 '+outN+' 台，<b>還差 '+(3-outN)+' 台</b>；或加入任一室內機清洗即可</div>':'')+'<div class="nav"><button class="btn gho" onclick="__qw.go(1)">上一步</button><button class="btn pri" onclick="__qw.go(3)">'+outLbl+'</button></div><div class="skip" onclick="__qw.skip()">我自己選就好</div></div>';
  } else if(step===3){
    var body='';ADDON.forEach(function(x){if(x.needBlow&&!hasBlow())return;body+=optRow(x);if(x.k==='air'&&(qty.air||0)>0){body+='<div class="airnote">＊AIRMON 僅適用三菱重工家用壁掛室內機，請確認機型後再購買</div>';}});
    if(!hasBlow()){body+='<div class="warnbox">＊「風鼓清洗」僅在選購吊隱式大/全清洗時才可加購</div>';}
    var nextLbl=sumKeys(['rm','bz','hi','fan','air'])>0?'下一步：選到府方案':'不加購，下一步';
    w='<div class="qw">'+stepBar()+'<h2>要加購特殊項目嗎？</h2><p class="sub">這一步是「選配」，沒有需要可直接按下一步</p><div class="optnote">以下項目<b>非必要</b>，依你的現場條件加購即可</div>'+body+'<div class="nav"><button class="btn gho" onclick="__qw.go(2)">上一步</button><button class="btn pri" onclick="__qw.go(4)">'+nextLbl+'</button></div></div>';
  } else {
    function planCard(k,img){var sel=plan===k;return '<div class="qplan '+(sel?'sel':'')+'" onclick="__qw.pickPlan(&quot;'+k+'&quot;)"><img src="'+img+'" alt=""></div>';}
    w='<div class="qw"><div class="laststep">最後一步</div><h2>你可以接受多快到府？</h2><p class="sub">越有彈性、折扣越多，二選一</p><div class="qplans">'+planCard('std',PLAN_STD)+planCard('early',PLAN_EARLY)+'</div><div class="callnote">📞 下單付款後，將由專人來電與您約定實際到府時間</div><div class="nav"><button class="btn gho" onclick="__qw.go(3)">上一步</button><button class="btn pri" '+(plan?'':'disabled')+' onclick="__qw.finish()">完成，前往結帳</button></div></div>';
  }
  ovl.innerHTML=w;
  var _card=ovl.querySelector('.qw');
  if(_card){var _x=document.createElement('button');_x.type='button';_x.className='qw-x';_x.setAttribute('aria-label','關閉');_x.innerHTML='×';_x.onclick=function(e){e.stopPropagation();close();};_card.appendChild(_x);}
}
function open(){if(!document.getElementById('qw-style')){var s=document.createElement('style');s.id='qw-style';s.textContent=CSS;document.head.appendChild(s);}ovl=document.createElement('div');ovl.id='qw-ovl';document.body.appendChild(ovl);step=0;render();}
function close(){if(ovl){ovl.parentNode.removeChild(ovl);ovl=null;}}
function toast(msg){var t=document.getElementById('qw-toast');if(!t){t=document.createElement('div');t.id='qw-toast';document.body.appendChild(t);}t.innerHTML='<span>'+msg+'</span>';clearTimeout(window.__qwTt);window.__qwTt=setTimeout(function(){if(t.parentNode)t.parentNode.removeChild(t);},2600);}
function showAir(){if(window.__qsShowAir)window.__qsShowAir();}

var api={
  start:function(){step=1;render();},
  skip:function(){close();},
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
    var items=INDOOR.concat(OUTLIST,ADDON).filter(function(x){return qty[x.k]>0;});
    var jobs=[];items.forEach(function(x){var r=resolve(x.n);if(r){for(var i=0;i<qty[x.k];i++){jobs.push(r);}}});
    var btn=ovl.querySelector('.btn.pri');if(btn){btn.disabled=true;btn.textContent='加入中…';}
    var i=0;
    function next(){
      if(i>=jobs.length){
        window.__qsPlan=plan;
        if(window.__qsApplyPlanCoupon)setTimeout(window.__qsApplyPlanCoupon,900);
        close();toast('已為您加入購物車，可再調整或結帳');
        return;
      }
      var job=jobs[i++];
      try{if(window.viewProduct)window.viewProduct(job.btn||null,job.pid);}catch(e){}
      setTimeout(next,320);
    }
    next();
  }
};
window.__qw=api;

function cartHasProduct(){try{var c=(window._UserSession&&window._UserSession.Cart)||[];for(var i=0;i<c.length;i++){if(c[i].ProductType===0)return true;}}catch(e){}return false;}
var tries=0;
var boot=setInterval(function(){
  tries++;
  if(typeof window.viewProduct==='function'&&document.querySelector('.product-row .product-wrap')){
    clearInterval(boot);
    if(!cartHasProduct()&&!window.__qwShown){window.__qwShown=true;open();}
  }
  if(tries>40)clearInterval(boot);
},400);
}catch(e){}
})();
