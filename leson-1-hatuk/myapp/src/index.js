import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'

function App(){
    function changeBG(event){
        console.log('Clicked');
    }
    return(
        <div>
            <Navigation />
            <Header 
            barev='HelloTumo' 
            list={[ {id : 1,name: 'A', age : 21},
            {id : 2,name: 'B', age : 22}]}

            obj={{name: 'C', age : 20}}
            func={changeBG}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));