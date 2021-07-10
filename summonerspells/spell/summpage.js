let summID = document.getElementById('summpage').innerHTML

fetch("./../../../data_dragon/11.10.1/data/en_US/summoner.json")
	.then(response => response.json())
	.then(function(data){
		const summlist=[data];
		const summs = summlist.map(obj => {
			const summ = obj.data
			return Object.values(summ)
		});
		console.log(summs[0])
		const summ=summs[0][summID];
		document.getElementById('column').innerHTML = `
				<h1>${summ.name}</h1>
				<img class='summimg' src='../../../data_dragon/11.10.1/img/spell/${summ.image.full}'>
				<h2>Description :</h2>
				<p>${summ.description}</p>
				<h2>Detailed spell :</h2>
				<p>
					Unlock at level ${summ.summonerLevel} <br>
					Cooldown : ${summ.cooldownBurn} <br>
					${summ.maxammo > 0 ? `Maximum charges : ${summ.maxammo} <br>` : ``}
					Range : ${summ.rangeBurn}
				</p>
				<h2>Available in :</h2>
				<p>
				${summ.modes
					.map(mode => mode.charAt(0) + mode.slice(1).toLowerCase())
					.join(', ')}
				</p>
				`
	})