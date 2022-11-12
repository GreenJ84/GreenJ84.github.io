const openHoroscopes = () => {

    if (document.getElementById('horoscopesCarousel').style.display === 'none'){
        document.getElementById('horoscopesCarousel').style.display = 'block';
    } else {
        document.getElementById('horoscopesCarousel').style.display = 'none'
    }
    return;
}
const openGreenExchange = () => {

    if (document.getElementById('greenExchangeCarousel').style.display === 'none'){
        document.getElementById('greenExchangeCarousel').style.display = 'block';
    } else {
        document.getElementById('greenExchangeCarousel').style.display = 'none'
    }
    return;
}
const openAdventureConnect = () => {

    if (document.getElementById('adventureConnectCarousel').style.display === 'none'){
        document.getElementById('adventureConnectCarousel').style.display = 'block';
    } else {
        document.getElementById('adventureConnectCarousel').style.display = 'none'
    }
    return;
}