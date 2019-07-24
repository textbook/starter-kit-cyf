import React from 'react'
import { Link } from 'react-router-dom' 
import { Button } from '@material-ui/core'

export default function Menu() {
    return (
      <div className="Create-play-result">
        <div className="Create">
          <Link to="/CreateQuiz">
            <Button variant="contained" color="default">
              Create Quiz
            </Button>
          </Link>
        </div>
        <div className="Play">
          <Link className="Menu" to="/play">
            <Button variant="contained" color="default">
              Play
            </Button>
          </Link>
        </div>
        <div className="Result">
          <Link className="Menu" to="/Results">
            <Button variant="contained" color="default">
              Results
            </Button>
          </Link>
        </div>
      </div>
    )
}
