let champID = document.getElementById('champpage').innerHTML

fetch("./../../../data_dragon/11.10.1/data/en_US/championFull.json")
	.then(response => response.json())
	.then(function(data){
		const champlist=[data];
		const champs = champlist.map(obj => {
			const champ = obj.data
			return Object.values(champ)
		});
		console.log(champs[0])
		const champ=champs[0][champID];
		document.getElementById('column').innerHTML = `
				<h1>${champ.name}</h1>
				<h3>the Darkin Blade</h3>
				<img class="champImg" src="../../../data_dragon/img/champion/loading/${champ.id}_0.jpg">
				<h2>Class :</h2>
				<p>Fighter, Tank</p>
				<h2>Lore :</h2>
				<p>Once honored defenders of Shurima against the Void, ${champ.name} 
				and his brethren would eventually become an even greater threat to 
				Runeterra, and were defeated only by cunning mortal sorcery. But after 
				centuries of imprisonment, ${champ.name} was the first to find freedom once 
				more, corrupting and transforming those foolish enough to try and wield 
				the magical weapon that contained his essence. Now, with stolen flesh, 
				he walks Runeterra in a brutal approximation of his previous form, 
				seeking an apocalyptic and long overdue vengeance.</p>
				<h2>Stats :</h2>
				<table class="statsTable">
					<tbody>
						<tr>
							<th>Health</th>
							<th>Health per level</th>
							<th>Mana</th>
							<th>Mana per level</th>
							<th>Movement speed</th>
							<th>Armor</th>
							<th>Armor per level</th>
							<th>MR</th>
							<th>MR per level</th>
							<th>Range</th>
							<th>HP regen</th>
							<th>HP regen per level</th>
							<th>Mana regen</th>
							<th>Mana regen per level</th>
							<th>AD</th>
							<th>AD per level</th>
							<th>AS</th>
							<th>AS per level</th>
						</tr>
						<tr>
							<td>${champ.stats.hp}</td>
							<td>${champ.stats.hpperlevel}</td>
							<td>${champ.stats.mp}</td>
							<td>${champ.stats.mpperlevel}</td>
							<td>${champ.stats.movespeed}</td>
							<td>${champ.stats.armor}</td>
							<td>${champ.stats.armorperlevel}</td>
							<td>${champ.stats.spellblock}</td>
							<td>${champ.stats.spellblockperlevel}</td>
							<td>${champ.stats.attackrange}</td>
							<td>${champ.stats.hpregen}</td>
							<td>${champ.stats.hpregenperlevel}</td>
							<td>${champ.stats.mpregen}</td>
							<td>${champ.stats.mpregenperlevel}</td>
							<td>${champ.stats.attackdamage}</td>
							<td>${champ.stats.attackdamageperlevel}</td>
							<td>${champ.stats.attackspeed}</td>
							<td>${champ.stats.attackspeedperlevel}</td>
						</tr>
					</tbody>
				</table>
				<h2>Spells :</h2>
				<input class='spellButton' type="button" onclick='displaySpell(4)' value='P'></input>
				<input class='spellButton' type="button" onclick='displaySpell(0)' value='Q'></input>
				<input class='spellButton' type="button" onclick='displaySpell(1)' value='W'></input>
				<input class='spellButton' type="button" onclick='displaySpell(2)' value='E'></input>
				<input class='spellButton' type="button" onclick='displaySpell(3)' value='R'></input>
				<input class='spellButton' type="button" onclick='displaySpell(5)' value='All'></input>
				<div class="spellResume">
					<div class="spell" id='spell'>
						<div class='spellIcon'>
							<img src="../../../data_dragon/11.10.1/img/passive/${champ.passive.image.full}">
							<h3>Passive : ${champ.passive.name}</h3>
						</div>
						<p>${champ.passive.description}</p>
					</div>
				</div>
				<h2>Skins :</h2>
				<div class='flex_skins_container'>
				${champ.skins.map(function(skin){
					return `
					<div class='skinDiv'>
						<img class='skinImg' src='../../../data_dragon/img/champion/loading/${champ.id}_${skin.num}.jpg' onclick='displayImg("${champ.id}_${skin.num}")'>
						<p>${skin.name}</p>
					</div>`
				}).join('')}
				</div>
				<div id='imgFullSize'></div>
				`
	})

function displaySpell(spellID){
	const spellList=['Q','W','E','R']
	let spellName=spellList[spellID]
	fetch("./../../../data_dragon/11.10.1/data/en_US/championFull.json")
	.then(response => response.json())
	.then(function(data){
		const champlist=[data];
		const champs = champlist.map(obj => {
			const champ = obj.data
			return Object.values(champ)
		});
		console.log(champs[0])
		const champ=champs[0][champID];
		let spellDiv=document.getElementById('spell')
		if (spellID==4){
			spellDiv.innerHTML=`<div class='spellIcon'>
									<img src="../../../data_dragon/11.10.1/img/passive/${champ.passive.image.full}">
									<h3>Passive : ${champ.passive.name}</h3>
								</div>
								<p>${champ.passive.description}</p>`
		} else if(spellID==5){
			spellDiv.innerHTML=`<div class="spell">
									<div class='spellIcon'>
										<img src="../../../data_dragon/11.10.1/img/passive/${champ.passive.image.full}">
										<h3>Passive : ${champ.passive.name}</h3>
									</div>
									<p>${champ.passive.description}</p>
								</div>
								<div class="spell">
									<div class="spellIcon">
										<img src="../../../data_dragon/11.10.1/img/spell/${champ.spells[0].image.full}">
										<h3>Q : ${champ.spells[0].name}</h3>
									</div>
									<p>${champ.spells[0].description}</p>
									<p>Cost : ${champ.spells[0].costBurn}</p>
									<p>Cooldown : ${champ.spells[0].cooldownBurn}</p>
									<p>Range : ${champ.spells[0].rangeBurn}</p>
								</div>
								<div class="spell">
									<div class="spellIcon">
										<img src="../../../data_dragon/11.10.1/img/spell/${champ.spells[1].image.full}">
										<h3>W : ${champ.spells[1].name}</h3>
									</div>
									<p>${champ.spells[1].description}</p>
									<p>Cost : ${champ.spells[1].costBurn}</p>
									<p>Cooldown : ${champ.spells[1].cooldownBurn}</p>
									<p>Range : ${champ.spells[1].rangeBurn}</p>
								</div>
								<div class="spell">
									<div class="spellIcon">
										<img src="../../../data_dragon/11.10.1/img/spell/${champ.spells[2].image.full}">
										<h3>E : ${champ.spells[2].name}</h3>
									</div>
									<p>${champ.spells[2].description}</p>
									<p>Cost : ${champ.spells[2].costBurn}</p>
									<p>Cooldown : ${champ.spells[2].cooldownBurn}</p>
									<p>Range : ${champ.spells[2].rangeBurn}</p>
								</div>
								<div class="spell">
									<div class="spellIcon">
										<img src="../../../data_dragon/11.10.1/img/spell/${champ.spells[3].image.full}">
										<h3>R : ${champ.spells[3].name}</h3>
									</div>
									<p>${champ.spells[3].description}</p>
									<p>Cost : ${champ.spells[3].costBurn}</p>
									<p>Cooldown : ${champ.spells[3].cooldownBurn}</p>
									<p>Range : ${champ.spells[3].rangeBurn}</p>
								</div>`
		} else {
			spellDiv.innerHTML=`<div class="spellIcon">
									<img src="../../../data_dragon/11.10.1/img/spell/${champ.spells[spellID].image.full}">
									<h3>${spellName} : ${champ.spells[spellID].name}</h3>
								</div>
								<p>${champ.spells[spellID].description}</p>
								<p>Cost : ${champ.spells[spellID].costBurn}</p>
								<p>Cooldown : ${champ.spells[spellID].cooldownBurn}</p>
								<p>Range : ${champ.spells[spellID].rangeBurn}</p>
								`
		}
	})
}

function displayImg(imgId){
	fetch("./../../../data_dragon/11.10.1/data/en_US/championFull.json")
	/*.then(response => response.json())
	.then(function(data){
		const champlist=[data];
		const champs = champlist.map(obj => {
			const champ = obj.data
			return Object.values(champ)
		});
		const champ=champs[0][champID];
		let imgDiv=document.getElementById('imgFullSize')
		imgDiv.innerHTML=`<img class='displayedImg' src="../../../data_dragon/img/champion/splash/${imgId}.jpg" onclick='undisplay()'>
						`
	})
}

function undisplay(){
	document.getElementById('imgFullSize').innerHTML=``*/
}