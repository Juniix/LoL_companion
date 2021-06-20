fetch("./../data_dragon/11.10.1/data/en_US/championFull.json")
    .then(response => response.json())
    .then(function(data){
        const champlist=[data];
        const champs = champlist.map(obj => {
            const champ = obj.data
            return Object.values(champ)
        });
        document.getElementById("title").innerHTML =`
        <h1>Champions list</h1>
        <h2>There are currently ${champs[0].length} champions.<h2>
        `

        document.getElementById("champmap").innerHTML = `
        ${champs[0].map(function(champ) {
            return `
            <div><a href="champion/${champ.name}">
                <img class="main_page_icon" src="../data_dragon/img/champion/tiles/${champ.id}_0.jpg">${champ.name}</img>
            </a></div>
            `
        }).join('')}
        `
    })