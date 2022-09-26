const changeColor = () => {
    const colors = ['yellow', 'red', 'blue', 'green', 'orange', 'lightgreen', 'pink', 'purple', 'black', 'grey', 'seagreen', 'skyblue']
    let x = Math.ceil(Math.random()*colors.length)
    document.getElementById('name').style.color = colors[x];
}
const openHoroscopes = () => {
    console.log('here')
    console.log(document.getElementById('horoscopesCarousel').style.visibility)

    if (document.getElementById('horoscopesCarousel').style.visibility === 'hidden'){
        console.log('what')
        document.getElementById('horoscopesCarousel').style.visibility = 'visible';
    } else {
        document.getElementById('horoscopesCarousel').style.visibility = 'hidden'
    }
    return;
}
const openGreenExchange = () => {
    console.log('here')
    console.log(document.getElementById('greenExchangeCarousel').style.visibility)

    if (document.getElementById('greenExchangeCarousel').style.visibility === 'hidden'){
        console.log('what')
        document.getElementById('greenExchangeCarousel').style.visibility = 'visible';
    } else {
        document.getElementById('greenExchangeCarousel').style.visibility = 'hidden'
    }
    return;
}
const openAdventureConnect = () => {
    console.log('here')
    console.log(document.getElementById('adventureConnectCarousel').style.visibility)

    if (document.getElementById('adventureConnectCarousel').style.visibility === 'hidden'){
        console.log('what')
        document.getElementById('adventureConnectCarousel').style.visibility = 'visible';
    } else {
        document.getElementById('adventureConnectCarousel').style.visibility = 'hidden'
    }
    return;
}