import React, {Component} from "react";

export default class Wild extends Component {
    state = {
        wildpokemons: ['Bulbasaur', 'Charmander', 'Squirtle', 'Pidgey', 'Rattata', 'Pikachu',
        'Jigglypuff', 'Diglet', 'Machop', 'Tentacool', 'Geodude', 'Slowpoke', 'Magnemite', 
        'Hitmonlee', 'Chansey', 'Mr. Mime'],
        mypokemons: [],
        secretNumber: 1,
        remainingAttempts: 5,
        guesses: ['1','2','3','4','5','6','7','8','9','10'] 
    };


    handleGuess = (event) => {
        if(this.state.remainingAttempts === 1) {
            console.log("failure")
            this.setState({
                secretNumber: Math.floor(Math.random() * 10) + 1,
                remainingAttempts: 5
            })
        }
        else if(event.target.id === String(this.state.secretNumber)) {
            console.log("success")
            let wildpokemoncopy = []
            for(let i = 0; i < this.state.wildpokemons.length - 1; i++) {
                wildpokemoncopy[i] = this.state.wildpokemons[i]
            }
            this.setState({
                secretNumber: Math.floor(Math.random() * 10) + 1,
                remainingAttempts: 5,
                mypokemons: this.state.mypokemons.concat([this.state.wildpokemons[this.state.wildpokemons.length - 1]]),
                wildpokemons: wildpokemoncopy
            })
            console.log(this.state.mypokemons)
            console.log(this.state.wildpokemons)
        }
        else {
            console.log("attempt")
            this.setState({ 
                remainingAttempts: this.state.remainingAttempts - 1
            })
        }
        
    }

    render() {
        return (
            <React.Fragment>
                    <div className="text-center mb-5">
                        <h1>My Pokemons</h1>
                        <ul class="list-group">
                            {console.log("My pokemons: ")}
                            {console.log(this.state.mypokemons)}
                            {console.log("Wild pokemons: ")}
                            {console.log(this.state.wildpokemons)}
                            {
                            this.state.mypokemons.map(pokemon => <li key={pokemon}>{pokemon}</li>)
                            }
                        </ul>
                        <h3>Guess a number from 1 to 10. If you guess the right number, you receive a pokemon!</h3>
                        <h4>Attempts remaining: {this.state.remainingAttempts}</h4>
                        <div className="row">
                            {this.state.guesses.map(guess => 
                            <><button id={guess} className="btn btn-secondary btn-sm" onClick={this.handleGuess}>{guess}</button> <div></div></>)}
                        </div>
                    </div>
                    <div className="text-center mb-5">
                        <h1>These are the Pokemons out in the wild!</h1>
                        <ul class="list-group">
                            {this.state.wildpokemons.map(pokemon => <li key={pokemon}>{pokemon}</li>)}
                        </ul>
                    </div>
            </React.Fragment>
        );
    }
}
