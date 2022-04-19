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
		<>	
			<p>{movieToPreview.title}</p>
			<p>{`Clicked ${clickCount} times`}</p>
			<img
				src={movieToPreview.posterUrl} 
				alt={movieToPreview.title}
				onClick={updateMovieSelection}
					
			/>
		</>
		
		
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
