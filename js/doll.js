"use strict";
var grid,rCh,ghver=1.80902,idir="../img/t_doll/",dollData=[],dollT=[0,0,0,0,0,0,0,0,0],dollSkill=["AimAttackCurrentTarge","AimAttackDistanceTarge","AimAttackSpecificTarge","airattack","airborne","AK12Buff","AN94Shot","AR15Shot","armor","armorBuff","armorBuffSelf","armorDebuff","armorDebuffSelf","BBNoel","bombard","Bronya","buff","Carcano1891","Carcano1938","CBJMS","Chloe","CLEAR","Coldweapon","comboBuffSelf","command","crit","critBuff","critBuffSelf","debuff","defense","dodgeBuff","dodgeBuffSelf","dodgeDebuff","empty","FAIL","fighting","Flare","Flashbomb","fortress","GGElfeldt","golden","Grenade","Himeko","hitBuff","hitBuffSelf","hitDebuff","illumine","Invincible","Invincible35","IWantU","Kaguya","Kiana","LadyMadeSTAR","Landmines","M4Nightmare","M1918","MosinNagant","Napalm","nightcritBuff","nightcritBuff38","nightcritBuffSelf","nightdodgeBuff","nightdodgeBuffSelf","nightdodgeDebuff","nighthitBuff","nighthitBuffSelf","nighthitDebuff","nightpowBuff","nightpowBuffSelf","nightpowDebuff","nightrateBuff","nightrateBuffSelf","nightrateDebuff","nightspeedDebuff","nighttargetdodgeDebuff","nighttargethitDebuff","nighttargetpowDebuff","nighttargetrateDebuff","nighttargetspeedDebuff","Noconsumption","position","powBuff","powBuffSelf","powBuffShield","powDebuff","RaidenMei","rateBuff","rateBuffSelf","rateDebuff","reinforce","rescue","RifleGrenade","roadblocks","Sakura","Seele","shield","Shotgun","Smoke","sniper","speedDebuff","target","targetdodgeDebuff","targethitDebuff","targetpowDebuff","targetrateDebuff","targetspeedDebuff","Theresa","VariableBuff","augbuff","OblivioN"];
const main=document.getElementById("grid"),loader=document.getElementById("loader"),imgtag=document.querySelector(".col-lg-5:nth-child(1)>img"),
	VoActor=["나즈카 카오리","누마쿠라 마나미","마츠이 에리코","마이하라 유메","무카이야마 나오미","미사키 마미","미타라이 카린","사토 리나","사쿠마 히로미","소와 하루미","스자키 아야","시노하라 나루미","시미즈 아이","아마노 미라이","아마미야 소라","아야미야 유키코","아이미","야마네 노조미","야츠루기 스미레","오구라 유이","오오니시 사오리","와키 아즈미","요시다 사치요","요시오카 카오리","요코야 사야카","우에사카 스미레","유우키 아오이","이나모토 치히로","이와마츠 이즈미","이카다이 카나에","이타타니 아야카","이토 아스카","이데 카오리","츄조 토모요","타나카 아이미","타네다 리사","타카하시 하루카","토마츠 하루카","카나에 토오루","카야노 아이","코이즈미 타카오","호리에 유이","하나다 마미코","하나타 타마리","나카하라 마이","난죠 요시노","노나카 아이","노미즈 이오리","노토 마미코","닛타 히요리","다이몬 카미","미네우치 토모미","미모리 스즈코","사쿠라 아야네","세리자와 유우","스와 아야카","아카오 히카루","오오츠보 유카","우에마 에미","우치다 마아야","우치야마 유미","이가라시 히로미","코가 아오이","코시미즈 아미","쿠기미야 리에","카와스미 아야코","카토 에미리","쿠로사와 토모요","키타무라 에리","타무라 유카리","타카하시 미카코","토쿠이 소라","하나자와 아카네","하야미 사오리","후쿠하라 아야카","호리고메 사야","나바타메 히토미","사토 아리세","아오키 루리코","아오키 시키","아이사카 유카","야마모토 노조미","오오쿠보 루미","요시무라 하루카","이노우에 마리나","이마이 아사미","이토 시즈카","나나미 카린","나나세 아미","마에카와 료코","사이토 유카","사토 사토미","세토 아사미","아사쿠라 아즈미","아이하라 코토미","오우사키 치요","우에다 레이나","이다 아리사","이토 카나에","츠다 미나미","치바 이즈미","카네모토 히사코","카와카미 아스카","코리 아리사","코보리 미유키","코이치 마코토","코키도 시호","쿠보타 리사","쿠와하라 유우키","키부네 사치호","타자와 리이코","하루노 안즈","혼다 마리코","후지이 유키요","후지이 아야카","히다카 리나","Lynn"],
	VA=["Kaori Nazuka","Manami Numakura","Eriko Matsui","Yume Maihara","Naomi Mukaiyama","Mami Misaki","Karin Mitarai","Rina Sato","Hiromi Sakuma","Harumi Sowa","Aya Suzaki","Narumi Sinohara","Ai Shimizu","Mirai Amano","Sora Amamiya","Yukiko Ayamiya","Aimi","Nozomi Amane","Sumire Yatsurugi","Ogura Yui","Saori Onishi","Azumi Waki","Sachiyo Yoshida","Kaori Yoshioka","Sayaka Yokoya","Uesaka Sumire","Yuuki Aoi","Chihiro Inamoto","Izumi Iwamatsu","Kanae Ikadai","Ayaka Itatani","Asuka Ito","Kaori Ide","Tomoyo Chuujou","Aimi Tanaka","Risa Taneda","Haruka Takahashi","Haruka Tomatsu","Tooru Kanae","Ai Kayano","Takao Koizumi","Yui Horie","Mamiko Hanada","Tamari Hinata","Mai Nakahara","Yoshino Nanjo","Ai Nonaka","Iori Nomizu","Mamiko Noto","Hiyori Nitta","Kami Daimon","Tomomi Mineuchi","Suzuko Mimori","Ayane Sakura","Serizawa Yuu","Ayaka Suwa","Hikaru Akao","Yuka Ootsubo","Emi Uema","Maaya Uchida","Yumi Uchiyama","Hiromi Igarashi","Aoi Koga","Koshimizu Ami","Rie Kugimiya","Ayako Kawasumi","Emiri Katou","Tomoyo Kurosawa","Eri Kitamura","Yukari Tamura","Mikako Takahashi","Sora Tokui","Akane Hanazawa","Saori Hayami","Ayaka Fukuhara","Saya Horigome","Hitomi Nabatame","Arise Sato","Ruriko Aoki","Shiki Aoki","Yuuka Aisaka","Nozomi Yamamoto","Rumi Okubo","Haruka Yoshimura","Marina Inoue","Asami Imai","Shizuka Ito","Karin Nanami","Ami Nanase","Ryoko Maekawa","Yuka Saito","Satomi Sato","Asami Seto","Azumi Asakura","Kotomi Aihara","Chiyo Ousaki","Reina Ueda","Arisa Ida","Kanae Ito","Minami Tsuda","Izumi Chiba","Hisako Kanemoto","Asuka Kawakami","Arisa Kori","Miyuki Kobori","Makoto Koichi","Shiho Kokido","Risa Kubota","Yuuki Kuwahara","Sachiho Kibune","Riiko Tazawa","Anzu Haruno","Mariko Honda","Yukiyo Fujii","Ayaka Fujii","Rina Hidaka","Lynn"],
	Illustrator=["15K","92M","AC-130","ALLENES","Anmi","AS109","ASK","BIBIA","Bison仓鼠","CanceR","DDAL","DOGALA","Evan揚","hanasa","HIKARI","HJL","KAN","KIncora","Ki桑","Krenz","KY","liduke","LIN+","Lino","lpip","lyo","M.vv","MKiiiiii","neco","NIN","nineo","NIXOO","NoriZC","NorthAbyssor","november","NS","Parsley","phantania","PHI","Rain Lan","RAN","REALMBW","rei","Renatus.Z","RFF","rosele","SA","Sam_Ashton","Saru","Silverwing","Skade","sola7764","spirtie","TAMAXI","TOMATO","XQ","X布","ZAGALA","zui","かれい","とり","ミカピカゾ","两卡车","仙女V","兔爷","八云玖","八才","十月十日奏","卑しい人间","厕所董事长","原子Dan","受菟","叽困","和茶","咩爆","哈路卡","团子","堀森","多元菌","小吃","小迪","工口牛","幻象黑兔","废人","戏言咸咸","拿铁","时辰","木shiyo","木子翔","林大B","林檎愛す","死盖","水乌龟","水熊","河马","油库狸","洲川Terras","海猫络合物","熊猫印象","狂気の君","猫头神","百足","真名","細重ソウジ","羽中","能登ツグミ","芙芙酱","荒境TS","莲子","薯子Imoko","虎三","钉田西瓜","防弹乳牛","陆生の洲川","雪樱樱","音符","鳗鱼子","麻将"];
$(document).ready(()=>{
	dominit();
	contentsload();
	game.init();
});
function dominit(){
	var i;
	for(i of document.querySelectorAll("#table,#graph")){
		for(let v=0;v<20;v++){
			i.appendChild(document.createElement("div"))
			v%2==0?i.children[v].classList.add("col-4","bg-dark"):i.children[v].classList.add("col-8","bg-secondary","text-truncate")
		}
	};
	for(i of document.querySelectorAll(".text-white svg")){i.classList.add("col-6","svg","mx-auto")};
	for(i of document.querySelectorAll(".d-flex>svg:nth-child(1)>polygon")){i.setAttribute("points","0,0 0,35 0,36 100,36 125,0")};
	for(i of document.querySelectorAll(".d-flex>svg:nth-child(2)>polygon")){i.setAttribute("points","125,0 125,35 0,35 0,35 25,0")};
	for(i of document.querySelectorAll(".ntg>svg")){
		setAttributes(i,{"width":200,"height":35});
		setAttributes(i.querySelector("polygon"),{"fill":"grey","points":"0,0 0,35 0,35 200,35 150,0"});
		setAttributes(i.querySelector("text"),{"x":"40%","y":"50%"})
	};
	$("[data-toggle='popover']").popover();
	$(".tileFilter").popover({html:true,content:()=>document.getElementById("tileFilter").innerHTML})
}
function contentsload(){
	fetch("../json/doll.json").then(response=>response.json().then(tdoll=>{
		dollData=tdoll;
		var allCharacters=dollData.map(doll=>{
			doll.buildTime||(doll.buildTime = 0),doll.faction||(doll.faction = "Griffin & Kryuger");
			var temp=document.createDocumentFragment(),timehour=(doll.buildTime/3600|0),timemin=doll.buildTime%3600/60,noval=doll.id,dollT=[0,0,0,0,0,0,0,0,0],cho=cho_hangul(`${doll.krName}`);
			noval>2E4?noval="M"+(noval-2E4):noval>1E3&&(noval="X"+(noval-1E3));
			doll.Fx.tile.map(tile=>dollT[tile-1]=1,dollT[doll.Fx.self-1]=2);
			temp.appendChild(document.createElement("div")).classList.add("item");
			setAttributes(temp.querySelector(".item"),{"data-time":timehour+timemin,"data-type":doll.type,"data-rarity":doll.rarity,"data-skill":doll.skill.src});
			temp.querySelector(".item").innerHTML=`<div class="tdoll item-content"><div class="text-white no" data-no="${doll.id}">${noval}</div><p class="name podo">${doll.krName}</p><i class="star r${doll.rarity}"></i><i class="incage doll info_cage_${doll.rarity}"></i><i class="type doll ${doll.type}_${doll.rarity}"></i><img class="dollbg" width="175" height="276" data-src="https://cdn.jsdelivr.net/gh/ergo9ine/sfdb_img@${ghver}/img/t_doll/${doll.id}_i.jpg" onload="this.removeAttribute('class'),this.removeAttribute('onload')"><div class="tag">${doll.type}/${doll.nick}/${timehour}${timemin}/${doll.voice}/${doll.illust}/${doll.skill.src}/${dollT}/${cho}/From:${doll.Country}/Manufacturer:${doll.Manuf}/Faction:${doll.faction}</div></div>`;
			return temp
		});
		for(var i of allCharacters){main.appendChild(i)};
		loadComplete(),LazyLoad.update();
	}));
};
function setAttributes(el,attrs){for(var key in attrs){el.setAttribute(key,attrs[key])}};
function loadComplete(){
	grid=new Muuri("#grid",{
		showDuration:null,hideDuration:null,layoutDuration:null,showEasing:null,hideEasing:null,layoutEasing:null,
		visibleStyles:{},hiddenStyles:{},
		sortData:{
			time:(item,element)=>element.getAttribute("data-time"),
			type:(item,element)=>element.getAttribute("data-type").toUpperCase(),
			rarity:(item,element)=>element.getAttribute("data-rarity")
		}
	});
	imgtag.addEventListener("load",()=>loader.classList.remove("is-active"));
	document.getElementById("search").addEventListener("click",e=>dollSearch(e.target.value));
	document.getElementById("search").addEventListener("input",e=>dollSearch(e.target.value))
	function dollSearch(e){
		grid.filter(t=>t.getElement().querySelector(".tag").innerHTML.includes(e)||t.getElement().querySelector(".name").innerHTML.includes(e)),
		document.getElementById("grid").querySelector("[class*=muuri-item-shown]")?document.getElementById("noResultMessage").style.display="none":document.getElementById("noResultMessage").style.display="block"
	};
	$(".VAinput").quicksearch(".VA",{
		"bind":"input",
		"hide":function(){this.classList.add("d-none")},
		"show":function(){this.classList.remove("d-none")}
	});
	$(".Artinput").quicksearch(".Illustrator",{
		"bind":"input",
		"hide":function(){this.classList.add("d-none")},
		"show":function(){this.classList.remove("d-none")}
	});
	loader.classList.remove("is-active");
	for(var i of document.querySelectorAll(".item-content")){
		i.addEventListener("click",e=>{
			for(var k of document.querySelectorAll("#grid,#toolbar,#func"))k.classList.toggle("d-none");
			document.getElementById("noResultMessage").style.display="none";
			document.getElementById("search").value="";
			$(".tileFilter").popover("hide");
			dollload(Number(e.target.parentNode.querySelector(".no").getAttribute("data-no")))
		})
	};
	document.querySelector(".btn-dark:nth-child(5)").addEventListener("click",e=>e.target.nextElementSibling.classList.toggle("d-block"));
	$("#dormi,#battlei").click(function(){
		var on=$(this).attr("id"),dorm=$("#dorm>rect"),battle=$("#battle>rect"),dollname=$("#GN").text();
		on==="dormi"?(battle.css("fill","grey"),dorm.css("fill","#ffc107"),preview.ready(dollname,"R"+dollname)):(battle.css("fill","#ffc107"),dorm.css("fill","grey"),preview.ready(dollname,dollname));
	});
	document.querySelector(".xfunc").addEventListener("click",togglecon);
};
var fltr={
	VA:a=>{
		var b=cho_hangul(a);
		document.querySelector(".VoC").innerHTML+=`<a class="dropdown-item VA" href="#"><span>${a}</span><span class="d-none">${b}/</span></a>`;
	},
	Art:a=>{document.querySelector(".IoC").innerHTML+=`<a class="dropdown-item Illustrator" href="#"><span>${a}</span></a>`}
};
function dollload(num){
	loader.classList.add("is-active");
	var options,i,x=10,doll=dollData.find(doll=>doll.id===num),
		simg=idir+doll.id,cimg=simg+".png",timehour=(doll.buildTime/3600|0),timemin=doll.buildTime%3600/60,time=`${timehour}시간${timemin}분`,gridself=`#grid${doll.Fx.self}`,gridPos=[],skins=[],i=0,x,name;
	for(i of(document.getElementById("doll").innerHTML="",document.getElementById("dolldiscussion").innerHTML="",document.querySelectorAll(".btn-warning")))i.parentNode.removeChild(i);
	rCh?rCh.destroy():rCh=``;
	doll.Fx.tile.map(tile=>gridPos[tile]=`#grid${tile}`);
	for(;x--&&0!==x;){
		var tar=document.getElementById(`grid${x}`).classList;
		tar.remove("bg-white","aqua","grey"),
		tar.add("grey")
	};
	document.querySelector(gridself).classList.add("grey","bg-white");
	for(i of document.querySelectorAll(gridPos.filter(echk=>echk!="")))i.classList.remove("grey"),i.classList.add("aqua");
	$("body,html").animate({scrollTop:0},0);
	doll.skins&&doll.skins.map(t=>{for(var n of document.querySelectorAll(".skinntg,#contents>div:nth-child(6)"))n.innerHTML+=`<button type="button" class="btn btn-warning btn-sm">${t}</button>`}),
	document.querySelector("#contents>div:nth-child(6)>button").classList.add("btn-block");
	doll.voice||(doll.voice="");
	var stat={".blockquote>p":doll.krName,"#CV":doll.voice,"#illust":doll.illust,"#GN":doll.name,"#Time":time};
	for(i in stat)document.querySelector(i).innerHTML=stat[i];
	utteranc(doll.id);
	if(doll.respec){
		var a="",b="";
		for(var i of doll.respec){
			for(name in i)name=name;
			document.getElementById("doll").innerHTML+=`<div id="${name}" class="row no-gutters border-bottom"><div class="head col-4 my-auto">${name}</div><div class="tail col-8 border-left"></div></div>`;
			if(Array.isArray(i[name])){
				for(var val of i[name])0==i[name].indexOf(val)?b=val:b+=`<br>${val}`,document.getElementById(name).querySelector(".tail").innerHTML=b;
			}else{document.getElementById(name).querySelector(".tail").innerHTML+=`${i[name]}`}
		}
	};
	imgtag.setAttribute("src",cimg);
	document.getElementById("Drop").setAttribute("data-content",doll.drop);
	preview.ready(doll.name,doll.name);
	options={
		chart:{height:365,type:'line',stacked:false},
		dataLabels:{enabled:false},
		series:[
			{name:doll.krName,type:'column',data:[]},
			{type:'column',data:[]},
			{name:'비교대상',type:'line',data:[]}
		],
		stroke:{width:[1,1,4]},
		xaxis:{categories:["체력","화력","회피","사속","명중"]},
		tooltip:{
			fixed:{
				enabled:true,
				position:'topLeft',// topRight,topLeft,bottomRight,bottomLeft
				offsetY:30,offsetX:60
			}
		},
		legend:{horizontalAlign:'left',offsetX:40}
	};
	chrtset(doll,options);
	fxts(doll.Fx);
	Skill(doll.id,doll.skill);
	rCh=new ApexCharts(document.getElementById("chart"),options);
	rCh.render();
	$("#Tdesc,#Sdesc,#doll").each(el=>{new SimpleBar($("#Tdesc,#Sdesc,#doll")[el])});
};
function sort(a){grid.sort(a)};
function filter(a){grid.filter(a)};
function Sval(a){document.getElementById("search").value=a;document.getElementById("search").click()};
function utteranc(index){
	document.querySelector(".blockquote-footer>cite").innerHTML=index;
	var discussion=document.getElementById('dolldiscussion');
	if(!discussion)return;
	var script=document.createElement('script');
	script.src='https://utteranc.es/client.js';
	script.setAttribute('repo','SFDB-Team/sfdb_tracker');
	script.setAttribute('issue-term',index);
	script.setAttribute('theme','github-dark');
	script.setAttribute('crossorigin','anonymous');
	discussion.appendChild(script)
};
function chrtset(x,y){
	var tableA=document.getElementById("table"),tableB=document.getElementById("graph"),modchk=x.id+2E4,ty=x.type,D="5링크시 <br>탄약 C,식량 M 소모",spd,crit;
	"hg"==ty?(Set2("HG",[71,31,79,58,55],30,30),spd=15,crit=20):
	"smg"==ty?(Set2("SMG",[183,28,70,86,13],85,60),spd=12,crit=5):
	"ar"==ty?(Set2("AR",[115,51,43,72,47],60,60),spd=10,crit=20):
	"rf"==ty?(Set2("RF",[86,128,33,34,74],55,90),spd=7,crit=40):
	"mg"==ty?(Set2("MG",[171,89,28,119,28],140,90),spd=4,crit=5):
	"sg"==ty&&(Set2("SG",[261,32,11,28,11],90,140),spd=6,crit=40);
	"true"==x.mod?(Set1(2),table(2)):(Set1(1),table(1));
	function table(k){
		20056==x.id&&(crit=30);
		var a,n,mod,wiki=x.wiki,Fname=x.Fname,Country=x.Country,Manuf=x.Manuf,faction=x.faction,Potential=x.Potential,hp=x.hp,dmg=x.dmg,ammo=x.ammo,armor=x.armor,dodge=x.dodge,hit=x.hit,FR=x.FR,time=x.time,MS=x.MS,OC=x.OC,Teuqip=x.Teuqip,
			errchk=[ammo,wiki,Country,Manuf,Teuqip];
		/*dollData.map(doll=>{doll.id==modchk&&(mod=`<a href="#">${doll.name}</a>`)});
		Potential||(Potential=""),mod||(mod="");
		for(a in errchk)errchk[a]="undefined"==typeof errchk[a]?"":`<a href="#">${errchk[a]}</a>`;OC||(OC=["",""]);armor||(armor=["",""]);
		faction||(faction="Griffin & Kryuger");
		wiki&&(Fname=`<a href="https://en.wikipedia.org/wiki/${wiki}">${Fname}</a>`);*/
		for(a in dollData.map(a=>{a.id==modchk&&(mod=`<a href="#">${a.name}</a>`)}),Potential||(Potential=""),mod||(mod=""),errchk)errchk[a]=void 0===errchk[a]?"":`<a href="#">${errchk[a]}</a>`;OC||(OC=["",""]),armor||(armor=["",""]),faction||(faction="Griffin & Kryuger"),wiki&&(Fname=`<a href="https://en.wikipedia.org/wiki/${wiki}">${Fname}</a>`);
		for(n=1;n<21;n++){
			a=
			n==1?`체력`:
			n==2?`${hp[0]} ~ ${hp[k]}`:
			n==3?`입수 방법`:
			n==4?`<div class="btn-group" role="group" aria-label="Acquisition"><button class="btn btn-sm bg-warning" disabled>Normal</button><button class="btn btn-sm bg-danger" disabled>Heavy</button><button class="btn btn-sm bg-info" disabled>Drop</button></div>`:
			n==5?`화력`:
			n==6?`${dmg[0]} ~ ${dmg[k]}`:
			n==7?`회피`:
			n==8?`${dodge[0]} ~ ${dodge[k]}`:
			n==9?`명중`:
			n==10?`${hit[0]} ~ ${hit[k]}`:
			n==11?`사속`:
			n==12?`${FR[0]} ~ ${FR[k]}`:
			n==13?`치명타율`:
			n==14?`${crit}%`:
			n==15?`치명타 피해`:
			n==16?`50%`:
			n==17?`방어력 관통`:
			n==18?`10`:
			n==19?`탄창 크기`:
			n==20&&(`${errchk[0]}`);
			tableA.querySelector(`div:nth-child(${n})`).innerHTML=a;
		};
		for(n=1;n<21;n++){
			a=
			n==1?`장갑`:
			n==2?`${armor[0]} ~ ${armor[k]}`:
			n==3?`기동력`:
			n==4?`${spd}`:
			n==5?`풀네임`:
			n==6?`${Fname}`:
			n==7?`설계 국가`:
			n==8?`${errchk[2]}`:
			n==9?`제조사`:
			n==10?`${errchk[3]}`:
			n==11?`소속`:
			n==12?`<a href="#">${faction}</a>`:
			n==13?`전용장비`:
			n==14?`${errchk[4]}`:
			n==15?`개조유무`:
			n==16?`${mod}`:
			n==17?`성장등급`:
			n==18?`${Potential}`:
			n==19?`작전능력`:
			n==20&&(`${OC[0]} ~ ${OC[1]}`);
			tableB.querySelector(`div:nth-child(${n})`).innerHTML=a;
		}
	};
	function skin(e){
		loader.classList.add("is-active");
		let _thisimg=Array.prototype.indexOf.call(e.target.parentNode.childNodes,e.target),No=document.querySelector(".blockquote-footer>cite").innerHTML,Isrc=idir+No+".png";
		if(0===_thisimg){
			var src,imgsrc=imgtag.getAttribute("src").split(idir)[1].split(".png")[0],
			imgM=imgsrc.indexOf("_d"),imgT=imgsrc.slice(0,-2);
			-1!=imgM?(src=idir+imgT+".png",fetch(src).then(i=>{i.ok&&imgtag.setAttribute("src",src)})):
			(src=idir+imgsrc+"_d.png",fetch(src).then(i=>{i.ok&&imgtag.setAttribute("src",src)}))}
		else 1===_thisimg?fetch(Isrc).then(i=>{i.ok&&imgtag.setAttribute("src",Isrc)}):
		(--_thisimg,Isrc=idir+No+"_"+_thisimg+".png",fetch(Isrc).then(i=>{i.ok&&imgtag.setAttribute("src",Isrc)}));
	};
	if(x.drop){
		let drop=tableA.querySelector("div:nth-child(4)>.btn-group>button:nth-child(3)");
		drop.removeAttribute("disabled");
		drop.classList.add("text-white")
	};
	function Set1(z){y.series[0].data=[x.hp[z],x.dmg[z],x.dodge[z],x.FR[z],x.hit[z]]};
	function Set2(a,b,c,d){y.series[1].name=a+" 평균";y.series[1].data=b;D=D.replace("C",c).replace("M",d)};
	document.querySelector("#sec-fir>div:nth-child(2)>div:nth-child(2)").innerHTML=D;
	var modlamp=document.querySelector("#graph>div:nth-child(16)>a");
	!x.Mod&&modlamp&&modlamp.addEventListener("click",()=>dollload(modchk));
	var graph=document.querySelector("#graph");
	for(var i=0;i<6;i+=2){
		var target=graph.querySelector(`div:nth-child(${i+8})>a`);
		target&&target.addEventListener("click",r=>{var e,t=r.target.parentNode.previousSibling.innerHTML;
		e="설계 국가"==t?"From:":"제조사"==t?"Manufacturer:":"Faction:",search(e+r.target.innerHTML)})
	};
	for(var i of document.querySelectorAll(".skinntg>button,#contents>div:nth-child(6)>button"))i.addEventListener("click",e=>skin(e));
};
function fxts(x){
	var TS="타일 위 타겟에게";
	"all"==x.target?Set("모든 총기"):
	"hg"==x.target?Set("HG"):
	"smg"==x.target?Set("SMG"):
	"ar"==x.target?Set("AR"):
	"rf"==x.target?Set("RF"):
	"mg"==x.target?Set("MG"):
	"sg"==x.target&&Set("SG");
	for(var i in x.TileFx){
		let y=x.TileFx[i];
		"dmg"==i?Set2("화력",y,"증가"):
		"dodge"==i?Set2("회피",y,"증가"):
		"hit"==i?Set2("명중",y,"증가"):
		"FR"==i?Set2("사속",y,"증가"):
		"cri"==i?Set2("치명타율",y,"증가"):
		"time"==i?Set2("쿨타임",y,"증가"):
		"armor"==i&&Set2("장갑",y,"증가");
	};
	function Set(x){TS=TS.replace("타겟",x)};
	function Set2(x,y,z){TS+=`<br>${x} ${y}% ${z}`}
	document.getElementById("Tdesc").innerHTML=TS;
};
function Skill(y,x){
	var skillimg=document.querySelector("#sec-fir>div:nth-child(3)>div:nth-child(2)>img"),FCD=x.FCD,CD=x.CD,src=x.src,dmg=x.Fx.dmg,dmg1=x.Fx.dmg1,dmg2=x.Fx.dmg2,dmg3=x.Fx.dmg3,ammo=x.Fx.ammo,armor=x.Fx.armor,dodge=x.Fx.dodge,hit=x.Fx.hit,FR=x.Fx.FR,cri=x.Fx.cri,time=x.Fx.time,MS=x.Fx.MS,Sdesc="";
	function sniper(time,target){Sdesc=`${time}초간 조준 후,${target}에게 공격력의 ${dmg[1]/10}배의 피해를 입힌다.`};
	function c81(a){Sdesc=`${a} 화력을 ${dmg[1]}% 상승시킨다.`};
	function rep(a,b){Sdesc=Sdesc.replace(a,b)};
	function pt(a){Sdesc=Sdesc.replace("1.5",a)};
	skillimg.setAttribute("src",`../img/etc/skill/${dollSkill[src]}.png`);
	//console.log(src)
	src=="temp"?Sdesc=`수정중`:
	src==0||src==1?
		y==148?Sdesc=`지속시간 동안 자신의 공격속도를 ${FR[1]}% 감소시키고,화력을 ${dmg[1]}% 상승시킨다.`:
		y==183?Sdesc=`1초간 조준 후 특수한 탄환을 발사하여 공격력의 ${dmg1[1]/10}배의 피해를 입히고 3초간 받는 피해량을 ${dmg2[1]}% 증가시키며 아군의 화력을 집중시킨다. 보스급의 적을 우선 조준하며 컨텐더의 위치에 따라 전열 : 가장 멀리있는 / 중간 : 가장 체력이 많은 / 후열 : 가장 가까운 적을 조준한다.`:
		y==222?Sdesc=`패시브:스킬 쿨타임 종료 후 TAC의 드론이 무작위의 적을 조준합니다.(1초마다 대상 변경) 액티브:조준된 적에게 치명타가 적용되는 저격을 하여 ${dmg[1]}배의 피해를 입힙니다.`:
		x.target=="enemy_current"?(sniper("1.5","현재 공격하던 타깃"),
			y==145?(pt("2")):
			y==46&&(rep("1.5초간 조준 후","1초씩 두번 조준 사격하여"),rep("현재 공격히던 타깃","각각 현재 타깃에게"))):
		x.target=="enemy_farthest"?(sniper("1.5","가장 멀리 있는 적"),
			y==180||y==192&&(pt("2"),rep(`에게 공격력의 ${dmg[1]/10}배의 피해를 입힌다`,`에게 관통효과를 지닌 탄환을 발사하여,뚫고 지나간 모든 적에게 공격력의 ${dmg[1]/10}배의 피해를 입히며,목표 대상에겐 추가로 공격력의 ${dmg[1]/10}배의 피해를 입힌다.`))):
		x.target=="enemy_specific"?sniper("1.5","특정한 타깃"):
		x.target=="enemy_hp_highest"?Sdesc=`2초간 조준 후,가장 체력이 많은 적에게 공격력의 ${dmg1[1]/10}배의 피해를 입힌다. 만약 목표 대상이 장갑형 개체일 경우 ${dmg2[1]/10}배의 피해를 입힌다.`:
		x.target=="enemy_nearest"&&(sniper("1.5","가장 가까운 타깃"),
			y==42||y==53||y==128?pt("2"):
			y==202&&(rep(`${dmg[1]/10}`,`${dmg[1]*100}`),pt("1"),rep("배의 피해를 입힌다.","%의 피해를 입힌다. 단 빗나갈 수 있으며 사격 후 재장전에 2초가 소요된다."))):
	src==5?Sdesc=`자신의 화력 사속 / 명중 및 치명률을 ${dmg[1]}% 상승시킨다.`:
	src==6?Sdesc=`공격 대상이 바뀔 시 2회의 대미지를 입힌다. 스킬 발동 후 지속시간 동안 매 공격 시 2회의 대미지를 입힌다.`:
	src==10?Sdesc=`자신의 장갑을 ${armor[1]}% 상승시킨다.`:
	src==13?Sdesc=`적을 향해 필살기를 사용하여 일정 범위 내의 적들에게 공격력의 ${dmg[1]/10}배의 대미지를 총 8회 입힌다`:
	src==15?Sdesc=`블랙홀을 발생시키는 수류탄을 던져 ${time[1]}초 동안 반경 2.5 범위 내의 적을 끌어당기고 중심에서 1.5 범위 내의 적들에게 초당 공격력의 ${dmg[1]}%의 피해를 준다.`:
	src==17?Sdesc=`스킬 발동 시 제대에 배속된 RF 1기마다(편제무관) 자신의 치명률과 사속 ${FR[1]}%씩 상승. ${time[1]}초 지속 【패시브 :공격 시 40%의 확률로 2초 동안 같은 열에 있는 모든 아군의 치명률과 사속 ${cri[1]}% 상승(최대 3회 중첩)】`:
	src==18?Sdesc=`발동 시 ${dmg1[1]}개의 각인을 새긴다. 【패시브 :공격 시 ${cri[1]}% 확률로 각인을 ${ammo[1]}개씩 새긴다. 18개 도달 시 다음 공격으로 엘리트 적에게 공격력의 ${dmg2[1]*10}%(통상 적에게 ${dmg3[1]*10}%)의 피해를 입히며 각인 수는 리셋된다.】`:
	src==19?Sdesc=`스킬을 발동할 때마다 다른 효과를 가진 탄환으로 교체 :<span style=color:#91c1f0;font-weight:bold>아음속탄</span>(기본) :회피 ${dodge[1]}% 상승 / <span style=color:#db3d3d;font-weight:bold>ST탄</span>:화력 ${dmg[1]}% 상승 / <span style=color:#ffb400;font-weight:bold>일반탄</span> :명중 ${hit[1]}% 상승`:
	src==21?Sdesc=`공격을 멈추고 다섯 차례 연주한다 매 연주는 무작위 아군 하나의 화력과 명중을 ${dmg1[1]}%(Glory Light 장착시 ${dmg2[1]}%) 상승시킨다<br>중첩 불가<br>연주당 지속시간 각 3초.`:
	src==22?Sdesc=`투척용 도끼를 던져 타깃에게 공격력의 ${dmg[1]}배의 피해를 입힌다.`:
	src==23?Sdesc=
		y==79||y==185?`야간작전에서 ${time[1]}초 동안 자신의 화력을 ${x.FxNight.dmg[1]}%(주간 보정치 :${dmg[1]}%) 상승시키며 사격 중 장탄수를 ${ammo[1]}발 추가한다.`:
		y==80||y==81||y==110||y==121?`자신의 명중을 ${hit[1]}% 상승시키며 지속시간 동안 모든 공격이 치명타로 적용된다.`:
		y==77||y==85||y==109?`패시브 스킬 <br> 매 3회 공격 시 그 다음 공격은 타깃에게 ${dmg[1]/10}배의 피해를 입힌다.`:
		y==112?`재장전 할 때 마다 25초간 자신의 화력이 ${dmg[1]}% 상승하는 버프를 받는다 (각 버프는 중첩가능)`:
		y==163?`장탄수를 ${ammo[1]}발 사속을 ${FR[1]}% 상승시키며 공격이 적을 밀어낼 확률이 ${x.Fx.KB[1]}%로 상승하지만 화력이 ${dmg[1]}% 감소한다.`:
		y==173?`매 공격시 ${cri[1]}%의 확률로 반드시 치명상을 입히는 탄환 한 발을 발사한다.`:
		y==189?`${time[1]}초 동안 사속이 ${FR[1]}% 상승하며 장탄수가 ${ammo[1]}발 증가한다. 단 다음 탄창 교체에 걸리는 시간이 1초 증가한다.`:
        y==194?`[피버/기본] ${dmg[1]}% 데미지로 ${time[1]}회 공격,온도 1도 상승. 15도 초과시 명중&화력이 누적온도당 ${temp[1]}%감소(최대 20도) [노트] 매 공격시 온도 1도 감소,회피&이속 ${dodge[1]}%감소. 동일 대상 타격 시 매 공격당 화력 ${dmg2[1]}%씩 상승(최대 10회)`:
		y==203?`패시브 효과 :${dmg[1]}초마다 적에게 표식 1개를 새긴다. (중첩 가능)<br>액티브 효과 :스킬 발동 후 일반 사격 시 표식이 남겨진 목표에게 추가타가 발생하며 표식을 1개 소모한다. 액티브 효과는 최대 ${time[1]}초 혹은 표식이 전부 소모될 때까지 지속된다.`:
		y==208?`자신의 화력을 ${dmg[1]}% 명중을 ${hit[1]}% 상승시키고 장탄수가 ${ammo[1]}발 추가되며 난사 모드로 진입하여 매 공격 시 타깃을 변경한다. 단 자신의 이동속도가 50% 감소한다.`:
		`${time[1]}초 동안 자신의 화력을 ${dmg[1]}% 상승시키며 사격 중 장탄수를 ${ammo[1]}발 추가한다.`:
	src==26?Sdesc=`아군 전체 화력을 ${dmg[1]}%,치명타율을 ${cri[1]}% 상승시킨다.`:
	src==27?Sdesc=`자신의 화력과 치명타율을 각각 ${dmg[1]}% 씩 상승시킨다.`:
	src==30?Sdesc=
		y==140?(`아군 전체 명중을 ${hit[1]}%,회피를 ${dodge[1]}% 상승시킨다.`):
		`아군 전체 회피를 ${dodge[1]}% 상승시킨다.`:
	src==31?Sdesc=
		y==28?`자신의 사속이 ${FR[1]}%,명중이 ${hit[1]}% 만큼 감소하는 대신 이동속도가 ${MS[1]}%,회피가 ${dodge[1]}% 만큼 증가한다`:
		`자신의 회피를 ${dodge[1]}% 상승시킨다.`:
	src==32?Sdesc=`적군 전체 회피를 ${dodge[1]}% 감소시킨다.`:
	src==34?Sdesc=`공격을 멈추고 다섯 차례 연주한다 매 연주는 무작위 적군 셋의 사속과 명중을 ${dmg1[1]}%(Black Cat 장착시 ${dmg2[1]}%) 감소시킨다<br>2회 중첩 가능<br>연주당 지속시간 각 3초.`:
	src==36?Sdesc=`[야간전용]아군 전체 명중을 ${x.FxNight.hit[1]}% 상승시킨다`:
	src==37?Sdesc=`섬광탄을 투척하여 반경 2.5범위 내의 적들을 ${time[1]}초 동안 기절 상태로 만든다.`:
	src==39?Sdesc=`표적에게 공격력의 ${dmg1[1]}배의 피해를 입힌 뒤 미사일을 발사하여 표적 주위 1.5범위 내의 적들에게 ${dmg2[1]}배의 피해를 입힌다`:
	src==41?Sdesc=`수류탄을 투척하여 반경 2.5범위 내의 적들에게 공격력의 ${dmg[1]/10}배의 피해를 입힌다.`:
	src==42?Sdesc=`가장 가까운 적 3기를 대상으로 매혹(화력 감소 ${dmg1[1]}%)과 공포(이동속도 감소 ${dmg1[1]}%) 상태로 만들고 공포에 빠진 적에게 가하는 대미지가 ${dmg2[1]}% 증가한다.`:
	src==43?Sdesc=`아군 전체 명중을 ${hit[1]}% 상승시킨다.`:
	src==44?Sdesc=`자신의 명중을 ${hit[1]*100}% 상승시킨다.`:
	src==45?Sdesc=`적군 전체 명중을 ${hit[1]}% 감소시킨다`:
	src==47?Sdesc=
		y==156||y==157?`자신의 회피를 ${dodge[1]}%,장갑을 ${armor[1]}% 상승시킨다`:
		`자신의 피해를 막는 왜곡방벽을 9999점 생성한다.`:
	src==51?Sdesc=`한 줄기의 번개를 불러내 반경 1.5 범위 내의 적들에게 치명피해를 입히고 ${time[1]}초동안 마비(이동/공격 불가)와 쇄약(피해량 증가 ${dmg[1]}%) 상태로 만든다(보스 무효)`:
	src==57?Sdesc=`소이탄을 투척하여 반경 1.5범위 내의 적들에게 공격력의 ${dmg1[1]/10}배의 폭발 대미지와 함께 ${time[1]}초 동안 0.33초당 공격력의 ${dmg2[1]/10}배의 화상 도트 대미지를 지속적으로 입힌다.`:
	src==60?Sdesc=`야간작전에서 자신의 화력을 ${x.FxNight.dmg[1]}%(주간 보정치 없음) 명중을 ${hit[1]}%(주간 보정치 :${hit[1]}%) 상승시키며 지속시간 동안 모든 공격이 치명타로 적용된다.`:
	src==61?Sdesc=`야간작전에서 아군 전체 회피를 ${x.FxNight.dodge[1]}% 상승시킨다. (주간 보정치 :${dodge[1]}%)`:
	src==62?Sdesc=`야간작전시,자신의 회피를 ${x.FxNight.dodge[1]}%(주간작전시 ${dodge[1]}%),명중을 ${x.FxNight.hit[1]}%(주간작전시 ${hit[1]}%) 상승시킨다.`:
	src==63?Sdesc=`야간작전에서 적군 전체 회피를 ${x.FxNight.dodge[1]}% 감소시킨다. (주간 보정치 :${dodge[1]}%)`:
	src==67?Sdesc=`야간작전에서 자신의 화력을 ${x.FxNight.dmg[1]}% 상승시킨다. (주간 보정치 :${dmg[1]}%)`:
	src==68?Sdesc=`주간전에서 화력이 ${dmg[1]}% 치명률이 ${cri[1]}% 상승하며 야간전일 경우 명중이 ${x.FxNight.hit[1]}% 사속이 ${x.FxNight.FR[1]}% 상승한다.`:
	src==69?Sdesc=`(야간)적군 전체 화력을 ${dmg[1]}(${x.FxNight.dmg[1]})% 하락시킨다.`:
	src==71?Sdesc=`(야간)자신의 사속을 ${FR[1]}(${x.FxNight.FR[1]})% 상승시킨다.`:
	src==81?Sdesc=
		y==13?`아군 전체의 화력과 사속을 각각 ${dmg[1]}% 씩 상승시킨다.`:
		y==142?`아군 전체의 사속과 치명타율을 각각 ${dmg[1]}% 씩 상승시킨다.`:
		y==167?`아군 전체 화력을 ${dmg[1]}% 명중을 ${hit[1]}% 상승시킨다.`:
		y==171?`스킬 발동시 자신이 제공하는 버프칸에 있는 아군에게 화력과 명중 그리고 사속을 ${dmg[1]}% 상승시킨다.`:
		y==181||y==193?`야간작전에서 자신의 화력을 ${x.FxNight.dmg[1]}%(주간 보정치 :${dmg[1]}%) 치명타율을 ${x.FxNight.cri[1]}%(주간 보정치 :${cri[1]}%) 상승시킨다.`:
		`아군 전체 화력을 ${dmg[1]}% 상승시킨다.`:
	src==82?Sdesc=
		y==58||y==138?`자신의 화력을 ${dmg[1]}% 명중을 ${hit[1]}% 상승시킨다.`:
		y==102?`패시브 효과 :스킬 미발동 시 매 2초마다 회피 상승 ${dmg}% 화력 감소 ${dodge}%(최대 5회 중첩) & 액티브 효과 :누적된 패시브 효과를 초기화 한 뒤 매 2초마다 화력 상승 ${dmg2[1]}% 회피감소 ${x.Fx.dodge2[1]}% (최대 5회 중첩)`:
		y==158||y==161||y==162?`자신의 화력을 ${dmg[1]}% 상승시키며 지속시간 동안 동시공격 가능한 타깃수가 5명으로 늘어난다.(슬러그 탄의 효과와 중첩되지 않는다.)`:
		y==165?`자신의 화력을 ${dmg[1]}% 장갑을 ${armor[1]}% 상승시킨다.`:
		y==169||y==203?`자신의 화력을 ${dmg[1]}% 회피를 ${dodge[1]}% 상승시킨다.`:
		y==172?`스킬 발동 시 자신의 화력을 ${dmg[1]}% 명중을 ${hit[1]}% 상승시키며 후열의 적을 우선적으로 공격하게된다.`:
		y==175?`자신의 화력을 ${dmg[1]}% 사속을 ${FR[1]}% 상승시킨다.`:
		y==211?`자신의 화력을 ${dmg[1]}% 명중을 ${hit[1]}% 상승시킨다.`:
		`자신의 화력을 ${dmg[1]}% 상승시킨다.`:
	src==83?Sdesc=`전투 중 자신의 앞 한 칸에 아군 인형이 존재 시 해당 인형에게 ${armor[1]}의 피해를 막아주는 보호막을 부여하고 회피를 ${dodge[1]}% 상승시킨다. 비어 있을 경우 자신의 화력을 ${dmg[1]}% 사속을 ${FR[1]}% 상승시킨다.`:
	src==84?Sdesc=
		y==15||y==220?`적군 전체 화력을 ${dmg[1]}% 감소시킨다.`:
		`적군 전체 화력을 ${dmg[1]}% 감소시키고 자신의 회피를 ${dodge[1]}% 상승시킨다.`:
	src==85?Sdesc=`1.5초간 조준 후 가장 멀리 있는 적에게 공격력의 ${dmg[1]}배의 대미지를 입히고 ${time[1]}초간 마비(이동/공격 불가) 상태로 만든다.(보스 무효)`:
	src==86?Sdesc=`아군 전체 사속을 ${FR[1]}% 상승시킨다.`:
	src==87?Sdesc=
		y==184||y==223||y==230?`자신의 사속을 ${FR[1]}% 명중을 ${hit[1]}% 상승시킨다.`:
		`자신의 사속을 ${FR[1]}% 상승시킨다.`:
	src==88?Sdesc=`적군 전체 사속을 ${FR[1]}% 감소시킨다.`:
	src==91?Sdesc=
		y==61||y==66||y==69||y==108?`유탄을 발사하여 반경 1/2.5/4범위 내의 적들에게 각각 공격력의 ${dmg1[1]}/${dmg2[1]}/${dmg3[1]}배의 피해를 입힌다.`:
		y==106?`3발의 유탄을 연속으로 발사하여 각 발당 반경 1.5범위 내의 적들에게 공격력의 ${dmg[1]}배의 피해를 입힌다.`:
		y==151?`단일 적 타깃에게 ${dmg[1]}의 고정 대미지를 입히고 거리 ${x.Fx.KB[1]}칸 만큼 적을 밀어낸다.`:
		y==196?`유탄을 발사하여 반경 2.5범위 내의 적들에게 공격력의 ${dmg1[1]}%의 피해를 입히며 3기 이상의 적 명중 시 ${x.Fx.time1[1]}초 동안 타깃의 받는 피해량을 ${dmg2[1]}% 증가시키고 3기 미만의 적 명중 시 ${x.Fx.time2[1]}초 동안 자신의 대미지가 ${dmg3[1]}% 상승한다.`:
		`유탄을 발사하여 반경 1.5범위 내의 적들에게 공격력의 ${dmg[1]}배의 피해를 입힌다.`:
	src==94?Sdesc=`스킬 발동 후 공격의 마지막 탄환이 적에게 공격력의 ${dmg[1]}%의 대미지를 입히고 자신의 탄창을 즉시 장전한다.`:
	src==95?Sdesc=
		y==164?`자신이 위치한 열에 무작위로 방패를 2개 설치하여 작은 범위에 ${dmg[1]}% 피해를 주고 밀어낸다. 방패가 설치된 칸에 있는 아군은 받는 피해가 ${armor[1]}% 감소한다.`:
		`전투 중 전열에 존재하는 아군측 인형에게 ${armor[1]}의 피해를 흡수하는 실드를 부여한다.`:
	src==96?Sdesc=
		y==160?`다음 3회의 공격을 점차 강화 하여 각각 타깃에게 자신의 공격력의 ${dmg1[1]}/${dmg2[1]}/${dmg3[1]}배의 피해를 입힌다.`:
		`공격력의 ${dmg[1]}배의 피해를 주는 추가탄을 발사하고 거리 ${x.Fx.KB[1]}칸 만큼 적을 밀어낸다.`:
	src==97?Sdesc=`연막탄을 투척하여 반경 2.5범위 내의 적들의 공격속도를 ${FR[1]}%,이동속도를 ${MS[1]}% 감소시킨다`:
	src==106?Sdesc=`${time[1]}초 동안 자신 주변 반경 ${dmg1[1]}범위 내의 적들의 받는 피해량 ${dmg3[1]}% 상승 및 매 공격 시 ${dmg2[1]}% 확률로 대상을 ${MS[1]}초 동안 속박(이동불가) 상태로 만든다.(보스 무효)`:
	src==107?Sdesc=`자신의 버프칸에 위치한 아군 인형에게 그 종류에 따라 강화 부여 :HG/SMG 회피 ${dodge[1]}% 상승 RF/AR 화력 ${dmg[1]}% 상승 MG/SG 명중 ${hit[1]}% 상승`:
	src==108?Sdesc=`자신의 명중을 ${hit[1]}% 감소시키는 대신 사속을 150까지 상승시키고 난사합니다.`:
	src==109&&(Sdesc=`스킬 지속시간 동안 쌍총으로 공격하여 2회의 피해를 입히며 반드시 치명타가 됩니다.`);
	Sdesc=y==5||y==11||y==47||y==174||y==200||y==20005?Sdesc+`<br>지속시간${x.FxNight.time[1]}초(주간 보정치 :${time[1]}초)/선쿨${FCD}초/쿨타임${CD[1]}초`:
	src=="temp"||src==94||y==77||y==85||y==109||y==173?Sdesc+``:
	src==0||src==1||src==13||src==22||src==37||src==39||src==39||src==41||src==57||src==91||src==94||src==96||y==79||y==102||y==185||y==198||y==213||y==1004||y==1005||y==1006||y==1009||y==1010?Sdesc+`<br>선쿨${FCD}초/쿨타임${CD[1]}초`:
	Sdesc+`<br>지속시간${time[1]}초/선쿨${FCD}초/쿨타임${CD[1]}초`;
	y==148||y==183&&(Sdesc=Sdesc.replace(`<br>`,`<br>지속시간${time[1]}초`));
	document.getElementById("Sdesc").innerHTML=Sdesc;
};
function togglecon(){
	var i;
	for(i of document.querySelectorAll("#grid,#toolbar,#func"))i.classList.toggle("d-none");
	for(i of document.querySelectorAll(".img-fluid,#drop"))i.removeAttribute("src","data-content");
	$("[data-toggle='popover']").popover("hide");
	preview.stage.off("pointerdown");
	SimpleBar.removeObserver();
};
$(".filter,.dropdown-menu>a").click(function(){
	var filtr=$(this).text(),t0=$("[data-time='0']");
	filtr=="2성"?filter("[data-rarity='2']"):
	filtr=="3성"?filter("[data-rarity='3']"):
	filtr=="4성"?filter("[data-rarity='4']"):
	filtr=="5성"?filter("[data-rarity='5']"):
	filtr=="EXTRA"?filter("[data-rarity='ex']"):
	filtr=="HG"?filter("[data-type='hg']"):
	filtr=="SMG"?filter("[data-type='smg']"):
	filtr=="AR"?filter("[data-type='ar']"):
	filtr=="RF"?filter("[data-type='rf']"):
	filtr=="MG"?filter("[data-type='mg']"):
	filtr=="SG"?filter("[data-type='sg']"):
	filtr=="제조불가"?filter("[data-time='0']"):
	filtr=="All"&&filter("[data-type]");
	//정렬
	filtr=="Index No"?(t0.addClass("muuri-item-shown"),filter(".muuri-item-shown"),new Muuri("#grid",{sordData:null})):
	filtr=="Rarity"?(t0.addClass("muuri-item-shown"),filter(".muuri-item-shown"),sort("rarity")):
	filtr=="Build Time"?(t0.removeClass("muuri-item-shown"),filter(".muuri-item-shown"),sort("time")):
	filtr=="Type"&&(t0.addClass("muuri-item-shown"),filter(".muuri-item-shown"),sort("type"))
});
$(".tileFilter").on("shown.bs.popover",()=>{
	for(var i of document.querySelectorAll(".Target>div,.Self>div")){
		i.addEventListener("click",function(){
			var C="CC";
			this.classList.toggle(C);
			for(let n=1;n<10;n++){
				var T=`#gridT${n}`,S=`#gridS${n}`;
				if(document.querySelectorAll(T)[1].classList.contains(C)){dollT[n-1]=1}else(dollT[n-1]=0);
				if(document.querySelectorAll(S)[1].classList.contains(C)){dollT[n-1]=2}
			};
			Sval(dollT.toString())
		})
	}
}).on("hide.bs.popover",()=>{
	$(".Target>div,.Self>div").off("click");
	for(var i of document.querySelectorAll(".Target>div,.Self>div"))i.classList.remove("CC")
});
VoActor.forEach(fltr.VA),$(".VA").click(function(){Sval(VA[VoActor.indexOf($(this).find("span:nth-child(1)").text())])});
Illustrator.forEach(fltr.Art),$(".Illustrator").click(function(){Sval(Illustrator[Illustrator.indexOf($(this).find("span:nth-child(1)").text())])});
function search(query){togglecon(),Sval(query)};
function cho_hangul(o){var r,t=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],h="",n=o.length;for(let a=0;a<n;a++)(r=o.charCodeAt(a)-44032)>-1&&r<11172&&(h+=t[Math.floor(r/588)]);return h}
if(void 0===resPasePath)var resPasePath="";
var game={
	init:function(chr){
		game.girls=new Girls(resPasePath+"../gf-spine-simulator/character/");
		preview.init();
		var stageLoaded=false;
		if(typeof defaultStageData!=="undefined"){
			preview.loadStage(defaultStageData);
			stageLoaded=true
		}
		if(window.location.hash&&stageLoaded==false){
			var hash=window.location.hash.substring(1);
			preview.loadStage(hash);
			stageLoaded=true
		}
	}
};
var preview={
	init:function(){
		preview.canvas=$("#sdc");
		preview.isUpdate=true;
		preview.selectScale=0.75;
		preview.selectX=preview.canvas.width()*0.5;
		preview.selectY=preview.canvas.height()*0.925;
		preview.stage=new PIXI.Container;
		preview.renderer=PIXI.autoDetectRenderer(preview.canvas.width(),preview.canvas.height(),{transparent:true});
		preview.lastTime=new Date().getTime();
		preview.nowTime=new Date().getTime();
		preview.animationFrame=window.requestAnimationFrame(preview.animate);
		preview.canvas.html(preview.renderer.view);
		preview.stage.interactive=true
	},
	ready:function(doll_name,doll_skin){
		game.girls.load(doll_name,doll_skin,preview)
	},
	changeCanvas:function(skeletonData){
		preview.stage.removeChildren();
		preview.name=skeletonData.name;
		preview.skeletonData=skeletonData;
		preview.spine=new PIXI.spine.Spine(skeletonData);
			preview.spine.x=preview.selectX;
			preview.spine.y=preview.selectY;
			preview.spine.scale.x=preview.selectScale;
		preview.spine.scale.y=preview.selectScale;
		var animations=preview.spine.spineData.animations;
		var stringAnimations="";
		var n,nowSkin=0;
		preview.changeAnimation(0);
		preview.spine.skeleton.setToSetupPose();
		preview.spine.update(0);
		preview.spine.autoUpdate=false;
		preview.stage.addChild(preview.spine);
		preview.stage.on("pointerdown",function(){
			var Canilength=preview.stage.children[0].state.data.skeletonData.animations.length;
			if(nowSkin>=Canilength){
				preview.changeAnimation(0);
				nowSkin=0
			}else{
				preview.changeAnimation(nowSkin);
				nowSkin+=1
			};
		})
	},
	loadToStage:function(defaultStageData,spineData){
		for(i in defaultStageData){
			var role=defaultStageData[i];
			var spine=spineData[role.name][role.skin];
				spine.code=role.name;
				spine.skin=role.skin;
				spine.x=role.x;
				spine.y=role.y;
				spine.scale=role.scale;
				spine.animation=role.animation;
			gameview.addRole(spine,role.animation)
		}
	},
	animate:function(){
		preview.lastTime=preview.nowTime;
		preview.nowTime=new Date().getTime();
		preview.animationFrame=window.requestAnimationFrame(preview.animate);
		if(preview.isUpdate&&preview.spine){preview.spine.update((preview.nowTime-preview.lastTime)/1000)};
		preview.renderer.render(preview.stage)
	},
	changeAnimation:function(num){
		var name=preview.spine.spineData.animations[num].name;
		var isload=true;
		//if(name=="die"||name=="reload"||name=="victory"){isload=false} 반복재생
		preview.spine.state.setAnimationByName(0,name,isload,0);
		preview.spine.update(0)
	},
	loadStage:function(jsonString){
		var defaultStageData=JSON.parse(decodeURIComponent(jsonString));
		if(defaultStageData.ro){
			for(i in defaultStageData.ro){
				var role=defaultStageData.ro[i];
				game.girls.loadAsync(role.name,role.skin,preview);
			}
			game.girls.loadAll(defaultStageData.ro)
		}
		gameview.selectBackground.val(defaultStageData.bg).change()
	}
};