import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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
      let month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
      if (isLoading) {
        return <p>loading...</p>;
      }
      return (
          <div className=''>
            <div className='header'>
            <h1  >{item[0].title.rendered}</h1>
                 <p>Published on {month[new Date(item[0].date).getMonth()]} {new Date(item[0].date).getDate()}, {new Date(item[0].date).getFullYear()}</p>
            </div>
            <div className='item'>
              <img alt="news_photo" src={item[0].featured_image}/>
              <div className='content' dangerouslySetInnerHTML={{ __html: item[0].content.rendered }} />
            </div>
            <Footer/>
          </div>
      );
    }
  };
  
  export default BlogPostItem;