fetch("./../data_dragon/11.10.1/data/en_US/item.json")
    .then(response => response.json())
    .then(function(data){
        const itemslist=[data]
        const items = itemslist.map(obj => {
            const item = obj.data
            return Object.values(item)
        });

        document.getElementById("title").innerHTML =`
        <h1>Items list</h1>
        <h2>There are currently ${items[0].length} items.<h2>
        `

        document.getElementById("itemsmap").innerHTML = `
        ${items[0].map(function(item) {
            return `
            <div><a href="items/${item.name}.html">
                <img class="main_page_icon" src="../data_dragon/11.10.1/img/item/${item.image.full}">${item.name}</img>
            </a></div>
            `
        }).join('')}
        `
    })