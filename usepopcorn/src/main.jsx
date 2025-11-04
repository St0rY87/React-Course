import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import StarRating from "./StarRating";
import App from "./App.jsx";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0)
//   return <div>
//     <StarRating color='blue' maxRating={10} onSetMovieRating={setMovieRating}/>
//     <p style={{fontSize: 18}}>This movie was rated {movieRating} stars</p>
//   </div>
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}/>
    <StarRating size={40} color='tomato' defaultRating={4}/>
    <Test/> */}
  </StrictMode>
);
