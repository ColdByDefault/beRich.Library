import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (request) => {

    try {
        await connectToDatabase();
        const prompts = await Prompt.find({}).populate("creator");

        return new Response(JSON.stringify(prompts), {
            status: 200,
        });
    } catch (error) {
        console.error("Error fetching prompts:", error); // Log the actual error
        return new Response(
            JSON.stringify({ error: "Failed to fetch all prompts", details: error.message }),
            { status: 500 }
        );
    }
};
