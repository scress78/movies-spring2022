import './App.css';
import {movies} from './movies';
//file with same name as component common theme.. note import export
// parenthesis needed!
const App = () => {
    return (
        <div>
		{
			/*
			// pre tag renders code in a code type way
			// curly brackets signify javascript
			// for all movies  print the title in a p tag
			// map function below will be important 
			// movie is a stand-in for whatever is being looped.
			// this is like a for loop in python
			
			// Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (17:5)
			// with mapping react tries to return one element for each item <> things like kbelow are called fragments
			*/
		}
			{
				movies.map((movie) =>
					
					<div>
						<p>{movie.title}</p>
						<img src={movie.posterUrl}/>
					</div>
					)
			}
        </div>
    );
}

export default App;
