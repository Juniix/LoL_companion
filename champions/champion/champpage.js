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
				<img class="champImg" src="../../../data_dragon/img/champion/loading/${champ.name}_0.jpg">
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
		          <tbody><tr>
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
		            <th>Crit</th>
		            <th>Crit per level</th>
		            <th>AD</th>
		            <th>AD per level</th>
		            <th>AS per level</th>
		            <th>AS</th>
		          </tr>
		          <tr>
		            <td>580</td>
		            <td>90</td>
		            <td>0</td>
		            <td>0</td>
		            <td>345</td>
		            <td>38</td>
		            <td>3.25</td>
		            <td>32</td>
		            <td>1.25</td>
		            <td>175</td>
		            <td>3</td>
		            <td>1</td>
		            <td>0</td>
		            <td>0</td>
		            <td>0</td>
		            <td>0</td>
		            <td>60</td>
		            <td>5</td>
		            <td>2.5</td>
		            <td>0.651</td>
		          </tr>
		        </tbody></table>
		        <div class="spellResume">
		          <div class="spell">
			            <div class='spellIcon'><img src="../../../data_dragon/11.10.1/img/passive/${champ.passive.image.full}"></div>
			            <h3>Passive : Deathbringer Stance</h3>
		            <p>Periodically, ${champ.name}'s next basic attack deals bonus 
					&lt;physicalDamage&gt;physical damage&lt;/physicalDamage&gt; and heals 
					him, based on the target's max health. </p>
		          </div>
		        </div>`
    })