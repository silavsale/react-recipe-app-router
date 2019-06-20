import React from "react";
import {Link} from "react-router-dom";
import Recipes from "./Recipes";


const API_KEY = "16a96bdbadf1eaf93f2f06df1fb28998";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    };

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch
        (`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const res = await req.json();
        this.setState({activeRecipe: res.recipes[0]});
    };

    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div className='container'>
                {this.state.activeRecipe.length !== 0 &&
                <div className="active-recipe">
                    <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                    <h3 className="active-recipe__title">{recipe.title}</h3>
                    <h4 className="active-recipe__publisher">
                        Pubclisher: <span>{recipe.publisher}</span></h4>
                    <p className="active-recipe__website">
                        Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a> </span>
                    </p>
                    <button className="active-recipe__button">
                        <Link to="/"> Go Home </Link>
                    </button>
                </div>
                }
            </div>

        );
    }
};

export default Recipe;
