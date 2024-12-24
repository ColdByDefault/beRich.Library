import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const GET = async (request, context) => {
    try {
        await connectToDatabase();

        const { params } = context; // Destructure params first
        const id = await Promise.resolve(params.id); // Ensure `params.id` is resolved asynchronously

        const prompts = await Prompt.find({ creator: id }).populate("creator");

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error("GET Error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};
