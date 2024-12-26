import axios from 'axios';

export async function POST(req) {
    try {
        const body = await req.json();
        const { prompt } = body;

        if (!prompt) {
            return new Response(
                JSON.stringify({ error: 'Prompt is required' }),
                { status: 400 }
            );
        }

        const response = await axios.post(
            'https://api-inference.huggingface.co/models/gpt2',
            { inputs: prompt },
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_BERICH_GPT_KEY}`,
                },
            }
        );

        const result = response.data[0]?.generated_text || 'No response from the AI.';
        return new Response(JSON.stringify({ generated_text: result }), { status: 200 });
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: 'Failed to fetch from Hugging Face API',
                details: error.message,
            }),
            { status: 500 }
        );
    }
}
