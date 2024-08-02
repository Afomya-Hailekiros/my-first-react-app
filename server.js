import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Mock API for signup
app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    // Simulate successful signup
    return res.status(200).json({ success: true });
  }
  return res.status(400).json({ success: false, message: 'Invalid data' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
