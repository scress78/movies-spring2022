import './App.css';
import {useState} from "react";

const MoviePreview = (props) => {
	
	{
	/*
	// props is an objects
	// const props = {moviesToPrevies: movie}
	// setCurrentMovie: a function
	// }
	
	
	// this is using constructing to access moviesToPreview
	// const: moviesToPreview = props.moviesToPreview;
	*/
	}
	
	const {movieToPreview, setCurrentMovie} = props;
	const [clickCount, setClickCount] = useState(0);
	
	const updateMovieSelection = () => {
		setCurrentMovie(movieToPreview)
		setClickCount(clickCount + 1);
		
	}
	
	return(
		<p>	
			<h2 style={{flex: 1, flexWrap:'wrap', width:'auto'}}>{movieToPreview.title}</h2>
			<h3>{`Clicked ${clickCount} times`}</h3>
			<img
				src={movieToPreview.posterUrl} 
				alt={movieToPreview.title}
				onClick={updateMovieSelection}
					
			/>
		</p>
		
		
	)
	
	{
		/*
		further above is the backtic, *(upper left keyboard) and then variables with ${}
		
		same thing as **above onClick
		onClick = {() => {
			setCurrentMovie(movieToPreview)
			setClickCount(clickCount + 1);
		}}
		*/
	}
	
}

export default MoviePreview;
