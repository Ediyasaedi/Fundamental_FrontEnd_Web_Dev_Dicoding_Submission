class MovieItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
               * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: flex;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .fan-art-movie {
                   width: 100%;
                   min-width: 200px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .movie-info {
                   padding: 24px;
               }
              
               .movie-info > h2 {
                   font-weight: lighter;
               }
              
               .movie-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-align: justify;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }

               .movie-info > div {
                margin-top: 20px;
                overflow: hidden;
                text-align: justify;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: horizontal;
                -webkit-line-clamp: 10; /* number of lines to show */
            }

               .flex-container {
                display: flex;
                justify-content: center;
              }

              .flex-container > div {
                background-color: #f1f1f1;
              }

              img {
                  border-radius: 20px;
                  padding: 10px;
              }

              .footer-container {
                    flex-direction: column;
                    position: static;
              }

              .footer-container > h5 {
                width: 50%;
                align-content: flex-end;
              }
           </style>
           <div class="flex-container">
                <div>
                    <img class="fan-art-movie" src="http://image.tmdb.org/t/p/w185/${this._movie.poster_path}" alt="Poster unavailabe">
                </div>
                <div class="movie-info">
                    <h2>${this._movie.title}</h2>
                    <p>${this._movie.overview}</p>
                    <div class="footer-container">
                        <h5>Rating: ${this._movie.vote_average}</h5>
                        <h5>Popularity: ${this._movie.popularity}</h5>
                    </div>
                </div>
            </div>`;
    }
 }

 customElements.define("movie-item", MovieItem);