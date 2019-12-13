import React, { Component } from 'react'
import Footer from '../footer/footer.component'
import Map from '../map/map.component'

import NavBar from '../nav/nav.component'

class HomePage extends Component{
    render(){
        return(
            <div>

<NavBar />
<Map />
<Footer />
            </div>
        )
    }
}

export default HomePage