function Welcom({name, children}){
    return  <div>
                <h1>Bonjour {name}</h1>
                <p>
                    {children}
                </p>
            </div>
}

ReactDOM.render(<Welcom name="Awa">Bonjour Tout le monde</Welcom>, document.getElementById('affiche')) 

class WelcomFunc extends React.Component {
    render () {
        return  <div>
                    <br></br>
                    <h1>Bonjour {this.props.name} </h1>
                    <p>
                        {this.props.children}
                    </p>
                </div>
    }
}

ReactDOM.render(<WelcomFunc name="Wade">Bonjour Tout le monde</WelcomFunc>, document.getElementById('affiche2')) 

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }

    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentwillUnmount (){
        window.clearInterval(this.timer)
    }

    tick (){
        this.setState({date: new Date()})
    }

    render (){
        return <div>
            Il est {this.state.date.toDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}


class Increment extends React.Component{
    constructor(props){
        super(props)
        this.state = {n: this.props.start}
        this.timer = null
    }

    componentDidMount (){
        window.setInterval(this.incremente.bind(this), 1000)
    }

    componentwillUnmount (){
        window.clearInterval(this.timer)
    }

    incremente(){
        this.setState(function(state, props){
            return {n: this.state.n + props.step}
        })
    }
    render (){
        return  <div>
                   <h1>start : {this.state.n}</h1>
                </div>
    }

}
Increment.defaultProsps = {
    start: 0,
    step: 1
}

function Home() {
    return <div>
        <Welcom name="Ndione"></Welcom>
        <Welcom name="Awa"></Welcom>
        <Clock/>
        <Increment start={10} step={1}/>
        <Increment start={100} step={10}/>
    </div>
}

ReactDOM.render(<Home></Home>, document.getElementById('affiche3'))