import './App.css';
import {movies} from './movies';

function App() {
    return (
        <div>
            <pre>{JSON.stringify(movies, null, 4)}</pre>
        </div>
    );
}

export default App;
