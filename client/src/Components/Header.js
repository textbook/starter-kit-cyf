import React from "react"
import { Link } from "react-router-dom"

export default () => (
  <div>
    
        <Link
          to={`/`}
          style={{
            textDecoration: "none",
            textAlign: "center"
          }}
        >
          <h1>
            Welcome to CYF Feedback </h1>
        </Link>
      </div>
)
