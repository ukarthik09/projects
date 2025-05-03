import app from './server.js';
import connectDB from './db.js';

const PORT = 8000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
