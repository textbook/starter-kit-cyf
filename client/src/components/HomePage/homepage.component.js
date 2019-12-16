import React, { Component } from 'react'
import Footer from '../footer/footer.component'
import MapIt from '../map/map.component'

import NavBar from '../nav/nav.component'
import Search from '../Search/search.component'

class HomePage extends Component{
    render(){
        return(
            <div>

<NavBar />
                <Search />
<MapIt />
<Footer />
            </div>
        )
    }
}

export default HomePage