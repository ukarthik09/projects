import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/posts', { title, content, image });
            if (response.status === 201) {
                console.log('Post created successfully');
                navigate('/home');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to create post');
            console.error('Error creating post:', error);
        }
    };


    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title mb-4">Create Post</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
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
                        <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="Paste image URL here"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Create Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
