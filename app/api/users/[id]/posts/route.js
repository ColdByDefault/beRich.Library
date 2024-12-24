import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const GET = async (request, context) => {
    try {
        await connectToDatabase();

        // Await params before destructuring
        const { id } = await context.params;

        if (!id) {
            return new Response("User ID not provided", { status: 400 });
        }

        // Query the database for prompts created by the user
        const prompts = await Prompt.find({ creator: id }).populate("creator");

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error("GET Error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};
