const express = require('express');
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');
const pdfParse = require('pdf-parse');
const fs = require('fs');

const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });

app.post('/ask-pdf', upload.single('file'), async (req, res) => {
    try {
        const question = req.body.question;
        const file = req.file;

        if (!file || !question) {
            return res.status(400).json({ error: 'PDF file and question are required' });
        }

        // Read PDF file
        const dataBuffer = fs.readFileSync(file.path);
        const pdfData = await pdfParse(dataBuffer);
        let text = pdfData.text;

        // Optional: Truncate text to avoid 413 error from Ollama
        const maxChars = 4000;
        if (text.length > maxChars) {
            text = text.substring(0, maxChars) + '\n...[truncated]';
        }

        // Create the prompt
        const combinedPrompt = `Given the following document:\n${text}\n\nAnswer this question:\n${question}`;

        // Send to Ollama
        const ollamaResponse = await axios.post('http://localhost:11434/api/generate', {
            model: 'llama3.2',
            prompt: combinedPrompt,
            stream: false
        });

        const result = ollamaResponse.data;

        // Delete the temp file
        fs.unlinkSync(file.path);

        res.json({ response: result.response.trim() });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});