var searchName = document.getElementById('default-search')
var searchBtn = document.querySelector('.search-Btn')
var appendHere = document.querySelector('#appendArea')
var noIdUrl = "https://www.cheapshark.com/api/1.0/games?ids="

function cheapSharkFetch(e) {
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
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 mx-20 lg:grid-cols-4 gap-2 place-items-center">
              <div class="game-card bg-white rounded overflow-hidden shadow-lg">
                  <img src=${idData[idList[i]].info.thumb} alt="#"
                      class="rounded object-cover p-1 mb-1 h-42 w-64">
                  <div class="text-center">
                     <span class="game-Title font-bold">${idData[idList[i]].info.title}</span>
                      <span class="ratings block">Ratings</span>
                      <span class="original-Price block text-red-600"><s>${idData[idList[i]].deals[0].retailPrice}</s></span>
                      <span class="font-bold current-Price block text-green-600">${idData[idList[i]].deals[0].price}</span>
                      <button class="mt-2 mb-2 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-full">Store</button>
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
          }
        })
    })
}
searchBtn.addEventListener('click', cheapSharkFetch)
