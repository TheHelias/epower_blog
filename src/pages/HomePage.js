import React from 'react';
import BlogPosts from '../components/BlogPost';
import Footer from '../components/Footer';

const HomePage = () => <div>
    <div>
        <h1  className='header'>Epower Blog</h1>
        <BlogPosts/>
    </div>
    <Footer/>
</div> 

export default HomePage;

