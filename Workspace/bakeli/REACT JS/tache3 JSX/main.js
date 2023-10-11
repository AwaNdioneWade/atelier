let n = 0

function numberFirmat(n) {
    return n.toString().padStart(2, 0)
}
function liste() {
    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3'
    ]
    const lis = items.map((item, k) =>
     <li key={k}>{item}</li>)
    

    const title =   <React.Fragment>
                        <h1 id={"title" + n} className="myTitle">
                            Bonjour tout le monde
                            <span> {n % 2 ? numberFirmat(n) : null}</span>
                        </h1>
                        <ul>{lis}</ul>
                    </React.Fragment> 
    ReactDOM.render(title, document.getElementById('affiche'))

}
liste()

window.setInterval(() => {
    n++
    liste()
}, 1000)