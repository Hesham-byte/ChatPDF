import React, {useState} from 'react';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async () => {
        if (!file || !question) {
            alert('Please provide both a file and a question.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('question', question);

        try {
            const response = await fetch('http://localhost:8000/ask-pdf', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setAnswer(data.response || 'No answer received.');
        } catch (error) {
            console.error('Error:', error);
            setAnswer('An error occurred while processing your request.');
        }
    };

    return (
        <>
            <div className="container">
                <h1 className="mt-5 text-center text-muted">Chat With PDF Now</h1>
                <div className="mb-3">
                    <input
                        type="file"
                        className="form-control"
                        aria-label="file example"
                        required
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formInput2" className="form-label">Your Question</label>
                    <textarea
                        className="form-control"
                        id="formInput2"
                        rows="3"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-light float-end" onClick={handleSubmit}>
                    Ask AI
                </button>
                <p>Answer: {answer}</p>
            </div>
        </>
    );
};

export default Upload;