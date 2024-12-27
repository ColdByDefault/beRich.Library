import User from "@models/user";
import { connectToDatabase } from "@utils/database";


export const GET = async (request, context) => {
    try {
        await connectToDatabase();

        // Await params from context before destructuring
        const params = await context.params;
        const id = params.id; // Access the ID

        console.log("Resolved ID:", id); // Debugging log

        if (!id) {
            return new Response("User ID not provided", { status: 400 });
        }

        const user = await User.findById(id);

        if (!user) {
            return new Response("User not found", { status: 404 });
        }

        // Return the user's details as JSON
        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error("Error fetching user details:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};



export const PATCH = async (request, context) => {
    try {
        await connectToDatabase();

        // Await params from context before destructuring
        const params = await context.params;
        const id = params.id; // Now access the ID after awaiting params

        console.log("Resolved ID:", id); // Debugging log

        if (!id) {
            return new Response("User ID not provided", { status: 400 });
        }

        const updatedData = await request.json();

        const user = await User.findByIdAndUpdate(
            id,
            { $set: updatedData },
            { new: true }
        );

        if (!user) {
            return new Response("User not found", { status: 404 });
        }

        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};
