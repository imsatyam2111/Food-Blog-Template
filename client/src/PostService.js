const axios = require("axios");

const url = "http://localhost:2000/api/posts/";

class PostService {
    // Get Posts
    static getPosts() {
        return new Promise((resolve, reject) => {
                axios.get(url).then(res => {
                    const data = res.data;
                    resolve(
                        data.map(post => ({
                            ...post,
                            createdAt: new Date(post.createdAt)
                        }))
                    );
                })
                .catch((err) => {reject(err)});
       });
    }
}

module.exports = PostService;