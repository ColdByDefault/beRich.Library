import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";


export const POST = async (req, res) => {
    const { prompt, userId, tag, title } = await req.json();

    try{
        await connectToDatabase();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag,
            title,
        });
        //console.log('Payload received in API:', { prompt, userId, tag, title });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 });

    } catch(error){
        return new Response(JSON.stringify({ error: 'Failed to create a new prompt' }), { status: 500 });
    }
}