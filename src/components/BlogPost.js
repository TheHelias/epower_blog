import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogPosts extends React.Component { 
    constructor (props) {
    super(props)
    this.state = {
        posts: [],
        isLoading: true
      } 
    }

    componentDidMount () {
        fetch('https://epower.ng/wp-json/wp/v2/posts')
        .then(res => res.json())
        .then(data => this.setState({ posts: data, isLoading: false }))
    }
    render() {
        const { posts, isLoading } = this.state;
        if (isLoading) {
          return <p>Hold on, your meal is being served...</p>;
        }
        return (
            <div className=''>
              {posts.map(post => <div key={post.slug} className="">
              <img src={post.featured_image_thumbnail} alt="thumbnail"/>
                <Link to={`/blogposts/${post.slug}`} className=''>{post.title.rendered}</Link>
                <span>{post.excerpt.rendered}</span>
              </div>)}
            </div>
        );
      }
}