const changeColor = () => {
    const colors = ['yellow', 'red', 'blue', 'green', 'orange', 'lightgreen', 'pink', 'purple', 'black', 'grey', 'seagreen', 'skyblue']
    let x = Math.ceil(Math.random()*colors.length)
    document.getElementById('name').style.color = colors[x];
}
