const MovieDetails = (props) => {
	// JS logic here
	
	const {currentMovie} = props;
	// equivalent to const currentMovie - props.currentMovie;
	
	return(
		<>
			{
			currentMovie ? 
				<div>
					<p>{JSON.stringify(currentMovie)}</p>
					<p>{currentMovie.title}</p>
					<p>{currentMovie.description}</p>
					<p>{currentMovie.rating}</p>
					<p>{currentMovie.director}</p>
					<p>{currentMovie.releaseYear}</p>
					<p>{currentMovie.categories}</p>
				</div>
			:
				<p>No movie selected</p>
			}
		</>
	)
}

export default MovieDetails;