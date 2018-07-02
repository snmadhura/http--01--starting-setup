import React, { Component } from React;
import axios from 'axios';

class Post extends Component {
    
state = {
    posts: []
}


componentDidMount(){
    axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 6);
            const updatedPost = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({ posts: updatedPost }
            )
        })
        .catch(error => {
            console.log(error);
            //this.setState({ error: true })
        });
}

postSelectedHandler = (id) => {
    this.setState(
        { selectedPostId: id }
    )
}
    render() {
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }


}