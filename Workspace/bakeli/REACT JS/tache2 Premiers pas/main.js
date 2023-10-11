let n = 0
function myfunction() {
    const title = React.createElement('h1', {},
     'Bonjour tout le monde',
      React.createElement('span', {}, n)
    )
    ReactDOM.render(title, document.getElementById('affiche'))
}
myfunction()

window.setInterval(() => {
    n++
    myfunction()
}, 1000)