import React from 'react'
import { Link } from 'react-router-dom' 

export default function Menu() {
    return (
      <div className="Create-play-result">
        <div className="Create">
          <Link to="/CreateQuiz">
           
              Create Quiz
        
          </Link>
        </div>
        <div className="Play">
          <Link className="Menu" to="/play">
           
              Play
           
          </Link>
        </div>
        <div className="Result">
          <Link className="Menu" to="/Results">
           
              Results
          
          </Link>
        </div>
      </div>
    )
}
