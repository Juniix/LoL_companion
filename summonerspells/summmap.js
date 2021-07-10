fetch("./../data_dragon/11.10.1/data/en_US/summoner.json")
    .then(response => response.json())
    .then(function(data){
        const summlist=[data];
        const summs = summlist.map(obj => {
            const summ = obj.data
            return Object.values(summ)
        });
        document.getElementById("title").innerHTML =`
        <h1>Summoner spells list</h1>
        <h2>There are currently ${summs[0].length} summonner spells.<h2>
        `

        document.getElementById("summmap").innerHTML = `
        ${summs[0].map(function(summ) {
            return `
            <div><a href="spell/${summ.name}">
                <img class="main_page_icon" src="../data_dragon/11.10.1/img/spell/${summ.image.full}">${summ.name}</img>
            </a></div>
            `
        }).join('')}
        `
    })