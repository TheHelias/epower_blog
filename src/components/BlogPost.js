import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogPosts extends React.Component { 
    constructor (props) {
    super(props)
    this.state = {
        posts: [],
        currentPage: 1,
        postsPerPage: 6,
        upperPageBound: 6,
        lowerPageBound: 0,
        isPrevBtnActive: 'disabled',
        isNextBtnActive: '',
        pageBound: 6,
        isLoading: true
      } 
    }
    handleClick = event =>{
      let listid = Number(event.target.id);
      this.setState({
        currentPage: listid
      });
      this.PrevAndNextButton(listid);
    }
    PrevAndNextButton = listid => {
      let totalPage = Math.ceil(this.state.posts.length / this.state.postsPerPage);
      this.setState({isNextBtnActive: 'disabled'});
      this.setState({isPrevBtnActive: 'disabled'});
      if(totalPage === listid && totalPage > 1){
          this.setState({isPrevBtnActive: ''});
      }
      else if(listid === 1 && totalPage > 1){
          this.setState({isNextBtnActive: ''});
      }
      else if(totalPage > 1){
          this.setState({isNextBtnActive: ''});
          this.setState({isPrevBtnActive: ''});
      }
    }

    PrevButton = () => {
      if((this.state.currentPage -1)%this.state.pageBound === 0 ){
          this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
          this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
      }
      let listid = this.state.currentPage - 1;
      this.setState({ currentPage : listid});
      this.PrevAndNextButton(listid);
    }
    NextButton = () => {
      if((this.state.currentPage +1) > this.state.upperPageBound ){
          this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
          this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
      }
      let listid = this.state.currentPage + 1;
      this.setState({ currentPage : listid});
      this.PrevAndNextButton(listid);
    }

    componentDidMount () {
        fetch('https://epower.ng/wp-json/wp/v2/posts')
        .then(res => res.json())
        .then(data => this.setState({ posts: data, isLoading: false }))
    }
    render() {
      const { posts, isLoading, currentPage, postsPerPage, isPrevBtnActive, isNextBtnActive } = this.state;
      const indexOfLastpost = currentPage * postsPerPage;
        const indexOfFirstpost = indexOfLastpost - postsPerPage;
        const currentposts = posts.slice(indexOfFirstpost, indexOfLastpost);

        const blogPosts = currentposts.map(post => <div key={post.slug}>
          <img alt="post" src={post.featured_image}/>
          <Link className="link" to={`/blogposts/${post.slug}`}><h3>{post.title.rendered}</h3></Link>
          <p>{post.excerpt.rendered}</p>
        </div>)

        let renderPrevBtn = null;
        if(isPrevBtnActive === 'disabled') {
            renderPrevBtn = <div className={isPrevBtnActive}>
              <span id="btnPrev"> Previous </span>
              </div>
        }
        else{
            renderPrevBtn = <div className={isPrevBtnActive}>
              <a href='#' id="btnPrev" onClick={this.PrevButton}> Previous </a>
              </div>
        }
        let renderNextBtn = null;
        if(isNextBtnActive === 'disabled') {
            renderNextBtn = <div className={isNextBtnActive}>
              <span id="btnNext"> Next </span>
              </div>
        }
        else{
            renderNextBtn = <div className={isNextBtnActive}>
              <a href='#' id="btnNext" onClick={this.NextButton}> Next </a>
              </div>
        }
        if (isLoading) {
          return <p>loading...</p>;
        }
        return (
            <div>
              <div className='blog_posts'>
              {blogPosts}
              </div>
            <div className="pagination">
              {renderPrevBtn}
              {renderNextBtn}
            </div>
            </div>
        );
      }
}