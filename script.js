var searchName = document.getElementById('default-search')
var searchBtn = document.querySelector('.search-Btn')
var appendHere = document.querySelector('#appendArea')
var noIdUrl = "https://www.cheapshark.com/api/1.0/games?ids="


function cheapSharkFetch(e) {
  appendHere.innerHTML = ''
  e.preventDefault()
  fetch("https://www.cheapshark.com/api/1.0/games?title=" + searchName.value)
    .then((response) => {
      if (!response.ok) {
        throw new Error('An Error has occured');
      }
      return response.json();
    })
    .then((data) => {
      var idListUrl = noIdUrl
      var limit = 24
      if (limit > data.length) {
        limit = data.length
      }
      var idList = []
      for (i = 0; i < limit; i++) {
        idList.push(data[i].gameID)
        idListUrl += data[i].gameID
        if (i < limit - 1) {
          idListUrl += ','
        }
      }
      var storedSearch = data
      fetch(idListUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('An Error has occured');
          }
          return response.json();
        })
        .then((idData) => {

          for (i = 0; i < limit; i++) {
            const divAppend = document.createElement('div')
            divAppend.innerHTML = `
            <div class="mt-10 mx-20 gap-2">
              <div class="game-card bg-white rounded overflow-hidden shadow-lg">
                  <img src=${idData[idList[i]].info.thumb} alt="#"
                      class="image rounded object-cover p-1 mb-1 h-42 w-64 object-scaled-down">
                  <div class="text-center">
                     <span class="game-Title font-bold">${idData[idList[i]].info.title}</span>
                      <span class="original-Price block text-red-600"><s>${idData[idList[i]].deals[0].retailPrice}</s></span>
                      <span class="font-bold current-Price block text-green-600">${idData[idList[i]].deals[0].price}</span>
                      <button class="mt-2 mb-2 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-full"><a href = ${getStoreUrl(idData[idList[i]].deals[0].storeID)} target = '_blank'>Get Here</a></button>
                </div>
              </div>
            </div>
        `
            appendHere.appendChild(divAppend)
            console.log('Title: ' + idData[idList[i]].info.title)
            console.log('Store ID: ' + idData[idList[i]].deals[0].storeID)
            console.log('Price: ' + idData[idList[i]].deals[0].price)
            console.log('Retail price: ' + idData[idList[i]].deals[0].retailPrice)
            console.log('Savings: ' + idData[idList[i]].deals[0].savings)
            console.log('Pic: ' + idData[idList[i]].info.thumb)
            console.log(getStoreUrl(idData[idList[i]].deals[0].storeID))
          }
        })
    })
}


function getStoreUrl(id) {
  var url = ''
  if (id == 1) {
    url = 'https://store.steampowered.com/'
    return url
  }
  else if (id == 2) {
    url = 'https://www.gamersgate.com/en-us/'
    return url
  }
  else if (id == 3) {
    url = 'https://www.greenmangaming.com/'
    return url
  }
  else if (id == 4) {
    url = 'https://www.amazon.com/'
    return url
  }
  else if (id == 5) {
    url = 'https://www.gamestop.com/'
    return url
  }
  else if (id == 6) {
    url = 'https://www.direct2drive.com/#!/pc'
    return url
  }
  else if (id == 7) {
    url = 'https://www.gog.com/'
    return url
  }
  else if (id == 8) {
    url = 'https://origin.onl//'
    return url
  }

  else if (id == 11) {
    url = 'https://www.humblebundle.com/store'
    return url
  }

  else if (id == 13) {
    url = 'https://store.ubisoft.com/us/home/?lang=en_US'
    return url
  }
  else if (id == 15) {
    url = 'https://www.fanatical.com/en/'
    return url
  }
  else if (id == 16) {
    url = 'https://www.gamesrocket.de/'
    return url
  }
  else if (id == 17) {
    url = 'https://www.gamesrepublic.com/'
    return url
  }
  else if (id == 18) {
    url = 'https://store.silagames.com/'
    return url
  }
  else if (id == 20) {
    url = 'https://imperial.games/'
    return url
  }
  else if (id == 21) {
    url = 'https://www.wingamestore.com/'
    return url
  }
  else if (id == 22) {
    url = 'https://funstock.co.uk/'
    return url
  }
  else if (id == 23) {
    url = 'https://www.gamebillet.com/'
    return url
  }
  else if (id == 24) {
    url = 'https://www.voidu.com/en/'
    return url
  }
  else if (id == 25) {
    url = 'https://store.epicgames.com/en-US/'
    return url
  }
  else if (id == 26) {
    url = 'https://www.razer.com/cortex/deals'
    return url
  }
  else if (id == 27) {
    url = 'https://us.gamesplanet.com/'
    return url
  }
  else if (id == 28) {
    url = 'https://www.gamesload.com/home.html'
    return url
  }
  else if (id == 29) {
    url = 'https://2game.com/us/'
    return url
  }
  else if (id == 30) {
    url = 'https://www.indiegala.com/'
    return url
  }
  else if (id == 31) {
    url = 'https://www.blizzard.com/en-us/'
    return url
  }
  else if (id == 32) {
    url = 'https://www.allyouplay.com/'
    return url
  }
  else if (id == 33) {
    url = 'https://www.dlgamer.com/us/'
    return url
  }
  else if (id == 34) {
    url = 'https://www.noctre.com/'
    return url
  }
  else if (id == 35) {
    url = 'https://www.dreamgame.com/en/'
    return url
  }
  
}
searchBtn.addEventListener('click', cheapSharkFetch)

