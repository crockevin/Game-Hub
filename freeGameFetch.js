var freeNoId = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by='
var fetchUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
var appendHere2 = document.querySelector('#appendArea2')
var catBtn = document.querySelectorAll('.store-btn')
var searchBt = document.querySelectorAll('.store-btn')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c8e26b1df6msh16edc125f8b0b91p1ddadfjsn807fd6c08955',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
catBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        var search = btn.textContent
        freeFetch(search)
    })
})

function freeFetch(search){
    fetch(freeNoId + search, options)
	.then((response) => {
        return response.json()
    })   
    .then((data) =>{
        var limit = 24
      if (limit > data.length) {
        limit = data.length
      }
      appendHere2.innerHTML = ''
      for(i = 0; i < limit; i++){
        const divAppend2 = document.createElement('div')
       divAppend2.innerHTML = `
       <div class="mt-10 mx-20 gap-2">
         <div class="game-card bg-white rounded overflow-hidden shadow-lg">
             <img src=${data[i].thumbnail} alt="#"
                 class="image rounded object-cover p-1 mb-1 h-42 w-64 object-scaled-down">
             <div class="text-center flex  flex-col">
                <span class="game-Title font-bold">${data[i].title}</span>
                 <button class="mt-2 mb-2 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-full"><a href = ${data[i].game_url} target = '_blank'>Get Here</a></button>
           </div>
         </div>
       </div>
   `
        appendHere2.appendChild(divAppend2)
      }
    })}