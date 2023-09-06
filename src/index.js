import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import StarRating from './StarRating';
// import '../src/index.css';

// function Test(){
//   const [rate,setMovieRating]=useState();
//   return (
//     <div>
//       <StarRating maxRating={10} color='blue' onSetRating={setMovieRating}/>
//       <p>The movie was rated {rate} stars</p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={12} message={['hey','how','are','you']} defaultRating={3}/>
    <Test/> */}
  </React.StrictMode>
);


