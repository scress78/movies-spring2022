import './App.css';
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
	
	return(
		<>	
			<p>{movieToPreview.title}</p>
			<img
				src={movieToPreview.posterUrl} 
				alt={movieToPreview.title}
				onClick={() => setCurrentMovie(movieToPreview)}
			/>
		</>
	)
}

export default MoviePreview;
