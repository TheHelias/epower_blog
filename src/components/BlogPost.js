import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogPosts extends React.Component { 
    constructor (props) {
    super(props)
    this.state = {
        posts: [],
      } 
    }

    componentDidMount () {
        fetch('https://epower.ng/wp-json/wp/v2/posts')
        .then(res => res.json())
        .then(data => this.setState({ posts: data }))
    }
    render() {
        const { posts } = this.state;
        return (
            <div className=''>
              {posts.map(post => <div key={post.id} className="">
              <img src={post.featured_image_thumbnail} alt="thumbnail"/>
                <Link to={`/blogposts/${post.id}`} className=''>{post.title.rendered}</Link>
                <span>{post.excerpt.rendered}</span>
              </div>)}
            </div>
        );
      }
}