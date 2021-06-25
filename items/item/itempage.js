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
		var purchase=""
		if(item.plaintext!=""){
			var plaintext=`<h2>Description :</h2><p>${item.plaintext}</p>`
		} else {
			var plaintext=""
		}

		if(item.gold.purchasable==false){
			purchase=`<h4 class="unpurch">Unpurchasable</h4>`
		}

		document.getElementById('column').innerHTML = `
				<h1>${item.name}</h1>
				<img class='itemimg' src='../../../data_dragon/11.10.1/img/item/${item.image.full}'>
				<h3> Value : <span class='gold'>${item.gold.total} golds</span></h3>
				<h4>(sell for <span class='gold'>${item.gold.sell} gold</span>)</h4>
				${purchase}
				<h2>Item type :</h2>
				<p>${item.tags.join(', ')}</p>
				${plaintext}
				<h2>Detailed item :</h2>
				<p>${item.description}</p>
				`
	})