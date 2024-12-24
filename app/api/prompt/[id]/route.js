import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const { id } = params; // Ensure id is destructured synchronously
        const prompt = await Prompt.findById(id).populate("creator");
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        console.error("GET Error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDatabase();

        const { id } = params; // Destructure the id properly
        const existingPrompt = await Prompt.findById(id);

        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response("Successfully updated the Prompt", { status: 200 });
    } catch (error) {
        console.error("PATCH Error:", error);
        return new Response("Error Updating Prompt", { status: 500 });
    }
};

