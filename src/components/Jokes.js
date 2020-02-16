import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline }, isLoading = true }) => (
    <div className="has-text-centered" style={{ margin: 10 }}>
        {isLoading ? 'Loading...' : <p>{setup} <i>{punchline}</i></p>}
    </div>
);

class Jokes extends Component {
    state = { joke: {}, jokes: [], isLoading: true, isLoadingMultiple: true };

    loadJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json, isLoadingMultiple: false }))
            .catch(error => alert(error.message));
    }

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ joke: json, isLoading: false }))
            .catch(error => alert(error.message));
    }

    render() {
        return (
            <div className="section">
                <div className="columns is-centered is-mobile is-multiline">
                    <div className="column is-12">
                        <div className="hero is-info">
                            <div className='hero-body has-text-centered'>
                                <h2 className='title'>Highlighted Joke</h2>
                                <Joke isLoading={this.state.isLoading} joke={this.state.joke} />
                                <div className="has-text-right">
                                    <br />
                                    <button className="button is-success" onClick={this.loadJokes}>Want more jokes, Click Me!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-12">
                        <div className="card">
                            <div className="card-content">
                                {this.state.jokes.map(joke => <Joke key={joke.id} isLoading={this.state.isLoadingMultiple} joke={joke} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jokes;