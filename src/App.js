import React, {Component} from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from "./components/Recipes";

const API_KEY = "16a96bdbadf1eaf93f2f06df1fb28998";

// https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2

class App extends Component {

    state = {
        recipes: []
    };

    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=15 `);

        const data = await api_call.json();
        this.setState({recipes: data.recipes});
        console.log(this.state.recipes);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Recipe Search</h1>
                </header>
                <Form getRecipe={this.getRecipe}/>
                <Recipes recipes={this.state.recipes}/>
            </div>
        )
    }
}

export default App;
