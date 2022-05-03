const MovieDetails = (props) => {
	// JS logic here
	
	const {currentMovie} = props;
	// equivalent to const currentMovie - props.currentMovie;
	// <p>{JSON.stringify(currentMovie)}</p>
	// <p>{currentMovie.categories}</p>
	
	return(
		<>
			{
			currentMovie ? 
				<div class="currentMovie">
					<h1>Selected Movie - {currentMovie.title}</h1>
					<h3>Description: {currentMovie.description}</h3>
					<h3>Rating: {currentMovie.rating}</h3>
					<h3>Director: {currentMovie.director}</h3>
					<h3>Release Year: {currentMovie.releaseYear}</h3>
				</div>
			:
				<p>No movie selected</p>
			}
		</>
	)
}

export default MovieDetails;