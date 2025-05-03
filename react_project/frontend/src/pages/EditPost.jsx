import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const res = await api.get(`/posts/${id}`);
            setTitle(res.data.title);
            setContent(res.data.content);
        };
        fetchPost();
    }, [id]);

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            setPosts(posts.filter(post => post._id !== id)); // update UI
        } catch (error) {
            console.error('Delete failed:', error.response?.data || error.message);
            alert(error.response?.data?.message || 'Failed to delete post');
        }
    };



    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title mb-4">Edit Post</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Content</label>
                            <textarea
                                className="form-control"
                                rows="5"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Update Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPost;
