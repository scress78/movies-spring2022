import './App.css';
import {movies} from './movies';
//file with same name as component common theme.. note import export
// parenthesis needed!
const App = () => {
    return (
        <div>
			// pre tag renders code in a code type way
			// curly brackets signify javascript
			// for all movies  print the title in a p tag
			// map function below will be important 
			// movie is a stand-in for whatever is being looped.
			// this is like a for loop in python
			{
				movies.map((movie) => <p>{movie.title}</p>)
			}
			
			
			<p>{movies[0].title}</p>
			<p>{movies[1].title}</p>
			<p>{movies[2].title}</p>
            <pre>{JSON.stringify(movies, null, 4)}</pre>
        </div>
    );
}

export default App;
