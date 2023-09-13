import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        color='blue'
        maxRating={10}
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} defaultRating={3} />

    <StarRating
      maxRating={4}
      size={30}
      defaultRating={2}
      color='red'
      messages={['Bad', 'Good', 'Awesome']}
    />

    <Test />
  </React.StrictMode>,
);
