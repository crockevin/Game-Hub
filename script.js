var searchName = "batman"
fetch("https://www.cheapshark.com/api/1.0/games?title=" + searchName)
.then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for(i = 0; i < data.length; i++){
        console.log(data[i].external)
        console.log(data[i].cheapest)
        console.log(data[i].thumb)
    }
  });