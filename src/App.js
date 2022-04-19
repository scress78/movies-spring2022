import './App.css';
import {movies} from './movies';
import MoviePreview from './MoviePreview'
import MovieDetails from './MovieDetails'

import {useState} from "react";

//file with same name as component common theme.. note import export
// parenthesis needed!
const App = () => {
	
	
	// you can do javascript here
	console.log("hello");
	//below is destructuring of array object
	const [currentMovie, setCurrentMovie] = useState(null);
	// this ilne is the same as the next two
	//const currentMovie = useState(null)[0];
	//const setCurrentMovie = useState(null)[1];
	
	//console.log(currentMovie);
	
	//setCurrentMovie("what is up?");
	
	console.log(currentMovie);
	
	
	/*
	function useState(startingState){
		// some logic goes here
		return[variable, setVariableFunction];
	}
	*/
	
	{
			/*
			// above className instead of class because class is a reserved word in react, like function
			
			// pre tag renders code in a code type way
			// curly brackets signify javascript
			// for all movies  print the title in a p tag
			// map function below will be important 
			// movie is a stand-in for whatever is being looped.
			// this is like a for loop in python
			
			// Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (17:5)
			// with mapping react tries to return one element for each item <> things like kbelow are called fragments
			
			// no parenthaseses on setCurrentMovie!! you'll invoke the function if you do
			*/
		}
	
    return (
		<div className="movie-container">
			{
				movies.map((movie) =>
					<div key={movie.title}>
						<MoviePreview
							movieToPreview={movie}
							setCurrentMovie={setCurrentMovie}
						/>		
					</div>
				)
			}
			
			{
				/*check if the movie exists*
				if it does type the stuff we want
				if not type no movie selected*/
			}
			
			<MovieDetails
				currentMovie={currentMovie}
			>
				
			</MovieDetails>
			
			
        </div>
    );
}

export default App;
