import React from 'react';
import { Link } from 'react-router-dom';

class BlogPostItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        item: [],
        isLoading: true
      };
    }
  
    componentDidMount() {
      const { match: { params } } = this.props;
      fetch(`https://epower.ng/wp-json/wp/v2/posts?slug=${params.slug}`)
        .then(res => res.json())
        .then(data => this.setState({ item: data, isLoading: false } ));
    }

    render() {
      const { item, isLoading } = this.state;
      if (isLoading) {
        return <p>Your meal is being served...</p>;
      }
      return (
          <div className=''>
                 <p>{item[0].title.rendered}</p>
                <img alt="post" src={item[0].featured_image}/>
                <div dangerouslySetInnerHTML={{ __html: item[0].content.rendered }} />
          </div>
      );
    }
  };
  
  export default BlogPostItem;