import React from 'react';
import  { Link }   from 'react-router-dom'
import BlogPosts from '../components/BlogPost';

const HomePage = () => <div>
    <div className='header'>
        <h1>Epower Blog</h1>
        <BlogPosts/>
    </div>
</div> 

export default HomePage;

