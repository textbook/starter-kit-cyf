import React from 'react'
import { Link } from 'react-router-dom' 
<<<<<<< HEAD
import { Button } from '@material-ui/core'
=======
>>>>>>> origin

export default function Menu() {
    return (
      <div className="Create-play-result">
        <div className="Create">
          <Link to="/CreateQuiz">
<<<<<<< HEAD
            <Button variant="contained" color="default">
              Create Quiz
            </Button>
=======
           
              Create Quiz
        
>>>>>>> origin
          </Link>
        </div>
        <div className="Play">
          <Link className="Menu" to="/play">
<<<<<<< HEAD
            <Button variant="contained" color="default">
              Play
            </Button>
=======
           
              Play
           
>>>>>>> origin
          </Link>
        </div>
        <div className="Result">
          <Link className="Menu" to="/Results">
<<<<<<< HEAD
            <Button variant="contained" color="default">
              Results
            </Button>
=======
           
              Results
          
>>>>>>> origin
          </Link>
        </div>
      </div>
    )
}
