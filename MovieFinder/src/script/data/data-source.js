import movies from './movies.js';

class DataSource {

    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=9c6231bf11bc5fc63c35aae99f97e231&language=en-US&query=${keyword}&include_adult=false`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}

export default DataSource;
