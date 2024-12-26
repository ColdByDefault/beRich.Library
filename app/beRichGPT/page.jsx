'use client';

import { useState } from 'react';

export default function ChatGPTPage() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResponse('');
    
        try {
            const res = await fetch('/api/beRichGPT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
    
            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }
    
            const data = await res.json();
            console.log('Frontend API Response:', data); // Debugging line
    
            // Update to display the correct response
            setResponse(data.generated_text || 'No response from the AI.');
        } catch (err) {
            setError('Failed to fetch response. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Chat with GPT</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <textarea
                    className="w-full p-2 border rounded mb-2"
                    rows="4"
                    placeholder="Enter your prompt here..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={loading}
                >
                    {loading ? 'Generating...' : 'Submit'}
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {response && (
                <div className="bg-gray-100 p-4 rounded mt-4">
                    <h2 className="font-bold mb-2">Response:</h2>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
}
