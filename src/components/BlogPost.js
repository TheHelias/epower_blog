import React from 'react';

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
            <div className='tutors_div_2'>
              {posts.map(post => <div className="child_div">
              <img src={post.featured_image_thumbnail} alt="tutor_photo"/>
                <p className='tutor_name'>{post.title.rendered}</p>
                <span>{post.excerpt.rendered}</span>
              </div>)}
            </div>
        );
      }
}