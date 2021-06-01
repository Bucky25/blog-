import React from 'react'
import BlogCard from './item'
import './Body.css'

function Body() {
    return (
        <div className="body">
            <h1 className="body_header">The Blogs</h1>
            <div className="row">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
            <div className="row">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

        </div>
    )
}

export default Body
