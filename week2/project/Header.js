import React from 'react'
import Toolbar from "./Toolbar"


const Header = props => (
    <header className="heading">
        <Toolbar />
        <div className ="cleanBlog">
        <h1>Clean Blog</h1>
        <h3>A Blog Theme by Start Bootstrap</h3>
        </div>
    </header>
)
export default Header