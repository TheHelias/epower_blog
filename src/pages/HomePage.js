import React from 'react';
import BlogPosts from '../components/BlogPost';
import Footer from '../components/Footer';

const HomePage = () => <div>
    <div >
        <div className='header'>
        <h1 >Epower Blog</h1>
        </div>
        
        <BlogPosts/>
    </div>
    <Footer/>
</div> 

export default HomePage;

