import React, {useState} from 'react'
import BlogCard from './Card'
import './Body.css'
import CardWithImage from './cardview'
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';

const  Body = ({...props}) => {

    let [data ,setData] = useState(null);
    React.useEffect( () => {
            axios.get('http://localhost:3000/')
                .then(response => {
                    setData({blogs : response.data})
                })
                .catch(error => {
                    
                    console.log(error);
                })
        },[]);
    let cards = []   
    console.log(data); 
    const blogList = () => {
        
        return data.blogs.map(currentblog => {
             cards.push(<Col>  <BlogCard data={currentblog} key={currentblog._id} />  </Col>) ;
        })
    };
    return (
        <div>

        {  data === null ?
            <h1>loading.....</h1>
            :
            <div className="body">
                {blogList()}
            <div className="poster">

            </div>
            <h1 className="body_header">Recent Blogs</h1>
            <div className="cards_container">
                <div className="row2">
                    <CardWithImage />
                </div>
                <Row>
                    {cards}
                </Row>
            </div>
        </div>
        
    }
    </div>
        
    );
}

export default Body
