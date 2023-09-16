# usePopcorn

This is a movie app that allows users to search for movies, see details about movies, and add movies to a watched list.

## Features

- Search for movies by title
- See details about movies, including plot, rating, and cast
- Add movies to a watched list
- See a summary of movies you've watched

## How to use

To use the app, simply clone the repository and run `npm start`. The app will be available at `localhost:3000`.

## Code snippets

Here are some code snippets that show how the app works:

```javascript
// This function gets the movie details from the OMDb API.
async function getMovieDetails(imdbID) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${KEY}&i=${imdbID}`
  );

  const data = await res.json();
  return data;
}

// This function adds a movie to the watched list.
function handleAddWatched(movie) {
  setWatched(watched => [...watched, movie]);

  // localStorage.setItem(
  //   'watched',
  //   JSON.stringify([...watched, movie]),
  // );
}

// This function renders the movie details.
function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(null);

  const countRef = useRef(0);

  const isWatched = watched.some(
    movie => movie.imdbID === selectedId,
  );
  const watchedUserRating = watched.find(
    movie => movie.imdbID === selectedId,
  )?.userRating;
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `https://
```
