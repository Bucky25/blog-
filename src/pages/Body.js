import React from 'react'
import BlogCard from './Card'
import './Body.css'
import CardWithImage from './cardview'


function Body() {
    return (
        <div className="body">
            <div className="poster">

            </div>
            <h1 className="body_header">Recent Blogs</h1>
            <div className="cards_container">
                <div className="row1">
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className="row2">
                    <CardWithImage />
                </div>
                <div className="row3">
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </div>
    )
}

export default Body
