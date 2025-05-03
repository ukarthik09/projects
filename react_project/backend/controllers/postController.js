import Post from '../models/Post.js';

// Create post
// Create post (no session check)
export const createPost = async (req, res) => {
    console.log('Create Post Request:', req.body);
    console.log('User Session:', req.session.user);  // Debugging line

    if (!req.session.user) {
        return res.status(401).json({ message: 'Unauthorized, please log in' });
    }

    try {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            image: req.body.image,
            author: req.session.user.id // Link post to user session ID
        });

        await post.save();
        res.status(201).json(post);
    } catch (err) {
        console.error('Error creating post:', err.message);
        res.status(500).json({ message: err.message });
    }
};



// Get all posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
};

// Get single post
export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username');
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post', error });
    }
};

// Update post
export const updatePost = async (req, res) => {
    if (!req.session.user) return res.status(401).json({ message: 'Unauthorized' });

    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: 'Post not found' });
    if (post.author.toString() !== req.session.user.id) {
        return res.status(403).json({ message: 'You can only edit your own posts' });
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    try {
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
};

// Delete post
// Delete post controller
export const deletePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post?.author?.toString() !== req.session.user.id) {
        return res.status(403).json({ message: 'You can only delete your own posts' });
    }



    try {
        await post.remove();
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
};

