import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(session({
    secret: 'blogsecret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/blogapp' }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

export default app;
