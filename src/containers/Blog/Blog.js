import React, { Component } from 'react';

// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {



    render() {
        let posts = <p style={{ textAlign: 'center' }}>something went wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => { this.postSelectedHandler(post.id) }} />
            });
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">NewPost</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Blog;