import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Movie from './pages/Movie/Movie';
import MyList from './pages/MyList/MyList';
import Popular from './pages/Popular/Popular';
import TopMovies from './pages/TopMovies/TopMovies';
import Error from './pages/Error/Error';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="movie" element={<Movie />} />
                <Route path="myList" element={<MyList />} />
                <Route path="popular" element={<Popular />} />
                <Route path="topMovies" element={<TopMovies />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
