var request = new XMLHttpRequest()
const pokedex = document.getElementById('pokedex')

// Open a new connection, using the GET request on the URL endpoint
//request.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', true)

function getPokemon(request, id){
    let info = {}
    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`, true)
    request.onload = function() { 
        var pokemon = JSON.parse(this.response)
        var display = document.createElement('div')
        display.classList.add('display') 

        var name = document.createElement('h3')
        name.innerHTML = pokemon['name'].toUpperCase()

        var sprite = document.createElement('img')
        sprite.src = pokemon['sprites']['front_default']

        var stats = document.createElement('div')
        stats.classList.add('stats')
        
        var type = document.createElement('div')
        type.classList.add('type')
        var typing = pokemon['types']

        for(var i = 0; i < typing.length; i++){
            let element = document.createElement('span')
            element.classList.add(`${typing[i]['type']['name']}`)
            element.innerHTML = typing[i]['type']['name']
            type.appendChild(element)
        }
        
        var hp = document.createElement('span')
        hp.textContent = `HP: ${pokemon['stats'][0]['base_stat']}`
        var atk = document.createElement('span')
        atk.textContent = `ATK: ${pokemon['stats'][1]['base_stat']}`
        var spatk = document.createElement('span')
        spatk.textContent = `SPATK: ${pokemon['stats'][2]['base_stat']}`
        var def = document.createElement('span')
        def.textContent = `DEF: ${pokemon['stats'][3]['base_stat']}`
        var spdef = document.createElement('span')
        spdef.textContent = `SPDEF: ${pokemon['stats'][4]['base_stat']}`
        var spd = document.createElement('span')
        spd.textContent = `SPD: ${pokemon['stats'][5]['base_stat']}`
        stats.appendChild(hp)
        stats.appendChild(atk)
        stats.appendChild(spatk)
        stats.appendChild(def)
        stats.appendChild(spdef)
        stats.appendChild(spd)

        display.appendChild(name)
        display.appendChild(sprite)
        display.appendChild(stats)
        display.appendChild(type)
        pokedex.appendChild(display)
        
    }
    request.send()
}

for (let i = 0; i < 200; i++  ){
    let request = new XMLHttpRequest()
    getPokemon(request, i)
}


/*request.open('GET', 'https://pokeapi.co/api/v2/pokemon/1', true)
request.onload = function() {
    var data = JSON.parse(this.response)
    console.log(data)
}
request.send()*/