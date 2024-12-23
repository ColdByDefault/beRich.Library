import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    prompt: {
        type: String,
        required: [true, "Please provide a prompt"],
    },
    tag: {
        type: String,
    },
    title: {
        type: String,
    },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;