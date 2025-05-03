import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await api.get(`/posts/${id}`);
            setPost(res.data);
        };
        fetchPost();
    }, [id]);

    if (!post) return <p className="text-center mt-5">Loading...</p>;

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">{post.content}</p>
                    <div className="mt-3">
                        <Link to={`/edit/${post._id}`} className="btn btn-warning me-2">Edit</Link>
                        <Link to="/" className="btn btn-secondary">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
