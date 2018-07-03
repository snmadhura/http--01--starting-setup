import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
import './Blog.css';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                to="/"
                            exact
                            activeClassName="active"
                            activeStyle={{
                                textDecoration : 'underline',
                                fontSize: '14pt'
                            }}
                            >Home
                            </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                pathname : '/new-post',
                                hash : '#submit',
                                search : '?quick-submit=true'
                            }}>NewPost</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h2>Home</h2>}/>
                <Route path="/" render={() => <h2>Home 2</h2>}/> */}

                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
                <Route path="/:id" exact component={FullPost}/>
            </div>
        );
    }
}

export default Blog;