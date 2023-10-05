var searchName = "batman"
var noIdUrl = "https://www.cheapshark.com/api/1.0/games?ids="
var idListUrl = noIdUrl

fetch("https://www.cheapshark.com/api/1.0/games?title=" + searchName)
.then((response) => {
    if (!response.ok) {
      throw new Error('An Error has occured');
    }
    return response.json();
  })
  .then((data) => {
    var limit = 24
    if(limit > data.length){
      limit = data.length
    }
    var idList = []
    for(i = 0; i < limit; i++){
      idList.push(data[i].gameID)
      idListUrl += data[i].gameID
      if(i < limit - 1){
        idListUrl += ','
      }
    }
    var storedSearch = data
    fetch(idListUrl)
    .then((response) =>{
      if (!response.ok) {
        throw new Error('An Error has occured');
      }
      return response.json();
    })
    .then((idData) => {
      for(i = 0; i < limit; i++){
      console.log('Title: ' + idData[idList[i]].info.title)
      console.log('Store ID: ' + idData[idList[i]].deals[0].storeID)
      console.log('Price: ' + idData[idList[i]].deals[0].price)
      console.log('Retail price: ' + idData[idList[i]].deals[0].retailPrice)
      console.log('Savings: ' + idData[idList[i]].deals[0].savings)
      console.log('Pic: ' + idData[idList[i]].info.thumb)
      }
    })
    //for(i = 0; i < limit; i++){
     //   console.log(data[i].external)
      //  console.log(data[i].cheapest)
      //  console.log(data[i].thumb)
      
   // }
  
    
    console.log(idListUrl)
  });