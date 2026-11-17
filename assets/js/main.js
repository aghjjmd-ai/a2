(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
function row(a,b){return '<li><span>'+a+'</span><b>'+b+'</b></li>';}
var pf=$('pt-f');if(pf){
 var T={pancake:['Medium','190°C','2–3 min, flip, then 1–2 min','Bubbles pop on top and stay open; edges look dry','Wipe on a thin film of butter or oil between batches.'],egg:['Low to medium','150–160°C','3–4 min','White fully set; yolk as you like it','Too hot and the edges turn brown and crisp before the white sets.'],steak:['High','220–250°C','3–4 min per side','Deep brown crust; check the inside with a thermometer','Pat dry, salt well and do not move it until it releases.'],burger:['Medium-high','200–220°C','4–5 min per side','Cooked through with no pink juices','Press a dimple into the centre so it stays flat.'],fish:['Medium','170–190°C','3–4 min skin side, 1–2 min more','Flesh turns opaque and flakes','Press the fillet flat for the first 20 seconds so the skin crisps evenly.'],chicken:['Medium-high','190–210°C','4–5 min per side','Cooked through, juices run clear','Flatten to an even thickness so it cooks at the same rate.'],sandwich:['Medium','170–180°C','3–4 min per side','Golden outside, cheese melted','Butter the outside of the bread, not the pan.'],veg:['Medium-high','190–210°C','5–8 min','Browned at the edges, tender inside','Cut to the same size and leave space between pieces.'],flatbread:['High','230–250°C','1–2 min per side','Puffed with dark spots','A dry pan works best; brush with butter afterwards.']};
 on([pf],function(){var t=T[pf.value];$('pt-o').innerHTML='<strong>'+t[0]+' heat</strong><ul>'+row('Surface',t[1])+row('Time',t[2])+row('Done when',t[3])+'</ul><p>'+t[4]+'</p>';});}
var bp=$('bs-p');if(bp){var bs=$('bs-s');
 on([bp,bs],function(){var p=Math.min(40,Math.max(1,parseInt(bp.value,10)||1)),n=p*parseInt(bs.value,10),k=n/8;function g(x){return Math.round(x/5)*5;}
  $('bs-o').innerHTML='<strong>'+n+' pancakes</strong><ul>'+row('Plain flour',g(150*k)+' g')+row('Milk',g(300*k)+' ml')+row('Eggs',Math.max(1,Math.round(2*k)))+row('Baking powder',(Math.round(2*k*2)/2)+' tsp')+row('Sugar',Math.max(1,Math.round(1*k))+' tbsp')+row('Melted butter',g(25*k)+' g')+'</ul><p>Makes about 8 pancakes, 10 cm across, per 150 g of flour. Rest the batter for 10 minutes before cooking.</p>';});}
var sl=$('sc-l');if(sl){var su=$('sc-u');
 var F={black:['In good shape','Keep cooking with it. After each wash, dry on the hob and wipe on a thin film of oil.'],patch:['Due a touch-up','Wipe a very thin coat of oil all over and heat on the hob until it just smokes, then let it cool. Repeat a few times, or cook several fatty meals.'],rust:['Needs re-seasoning','Scrub the rust away with steel wool, wash, dry on the hob, then oil thinly and bake at about 230°C for an hour. Repeat three times.'],sticky:['Too much oil','Bake it upside down at about 230°C for an hour to finish curing the oil. Next time, wipe the oil back until the pan looks almost dry.']};
 on([sl,su],function(){var f=F[sl.value];$('sc-o').innerHTML='<strong>'+f[0]+'</strong><p>'+f[1]+'</p>'+(su.value==='1'?'<p>Acidic dishes such as tomato sauce can thin the seasoning. Keep them short, and cook something fatty in the pan afterwards.</p>':'');});}
})();
