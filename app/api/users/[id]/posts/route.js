import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const GET = async (request, context) => {
    try {
        await connectToDatabase();

        // Await the params object
        const { id } = await context.params;

        const prompts = await Prompt.find({
            creator: id,
        }).populate("creator");

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 