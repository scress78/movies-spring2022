import './App.css';
import {movies} from './movies';

const App = () => {
    return (
        <div>
			<p>Spencer Cress</p>
            <pre>{JSON.stringify(movies, null, 4)}</pre>
        </div>
    );
}

export default App;
