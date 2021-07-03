let itemID = document.getElementById('itempage').innerHTML

fetch("./../../../data_dragon/11.10.1/data/en_US/item.json")
	.then(response => response.json())
	.then(function(data){
		const itemlist=[data];
		const items = itemlist.map(obj => {
			const item = obj.data
			return Object.values(item)
		});
		console.log(items[0])
		const item=items[0][itemID];

		document.getElementById('column').innerHTML = `
				<h1>${item.name}</h1>
				<img class='itemimg' src='../../../data_dragon/11.10.1/img/item/${item.image.full}'>
				${item.gold.purchasable==false ? `<h4 class="unpurch">Unpurchasable</h4>` : `<h3> Value : <span class='gold'>${item.gold.total==0 ? 'free' : `${item.gold.total} golds`}</span></h3>`}
				${item.gold.sell!=0 ? `<h4>(sell for <span class='gold'>${item.gold.sell} gold</span>)</h4>` : ""}
				<h2>Item type :</h2>
				<p>${item.tags.map(function(tagID){
					fetch("./../../../data_dragon/11.10.1/data/en_US/language.json")
						.then(response2 => response2.json())
						.then(function(data2){
							const taglist=[data2];
							console.log(taglist[0].data[tagID])
							console.log(tagID)

							return taglist[0].data[tagID]
						})
				}).join(', ')}</p>
				${item.plaintext!="" ? `<h2>Description :</h2><p>${item.plaintext}</p>` : ""}
				<h2>Detailed item :</h2>
				<p>${item.description}</p>
				`
	})