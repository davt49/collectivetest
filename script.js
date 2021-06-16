function getData(){
  fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      console.log(data);
      display(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}
getData()

let cardtotal = 9
console.log(cardtotal)

function display(data){
  const beersDiv = document.getElementById("beers");
  for(let i = 0; i < cardtotal; i++){
    let beerDiv = document.createElement('div');

    let beersName = data[i].name;
    let heading = document.createElement('h1');
    heading.classList.add('beer-heading');
    heading.innerHTML = beersName;
    beerDiv.appendChild(heading);

    let tip = data[i].brewers_tips;
    let text = document.createElement('p');
    text.classList.add('beer-text');
    text.innerHTML = tip;
    beerDiv.appendChild(text);

    let image = data[i].image_url;
    let imgblock = document.createElement('div');
    let beerImg = document.createElement("img");
    beerImg.src = image;
    imgblock.appendChild(beerImg)
    imgblock.classList.add('img-block');
    beerDiv.appendChild(imgblock);
    beerImg.classList.add('beer-image');
    

    beerDiv.classList.add('beer-card')
    beersDiv.appendChild(beerDiv); 
    
  }
}

const loadmore = document.querySelector('.load-more-button')
loadmore.addEventListener('click', () => {
  cardtotal += 9;
  console.log('clicked', cardtotal)
  const olddivs = document.querySelectorAll('.beer-card')
  olddivs.forEach(div => div.remove())
  console.log(olddivs)

  getData()
})