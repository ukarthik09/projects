import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get('/posts');
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    const handleDelete = async (postId) => {
        try {
            await api.delete(`/posts/${postId}`);
            setPosts(posts.filter(post => post._id !== postId)); // Remove deleted post from state
        } catch (err) {
            console.error('Failed to delete post:', err);
        }
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="/create" className="btn btn-success">Create Blog</Link>
            </div>

            <h2 className="mb-4">All Posts</h2>
            <div className="row">
                {posts.map(post => (
                    <div className="col-md-4 mb-4" key={post._id}>
                        <div className="card h-100">
                            {post.image && (
                                <img
                                    src={post.image}
                                    className="card-img-top"
                                    alt="Post"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.content.slice(0, 100)}...</p>
                                <Link to={`/posts/${post._id}`} className="btn btn-primary me-2">Read More</Link>
                                <Link to={`/edit/${post._id}`} className="btn btn-secondary me-2">Edit</Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(post._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
