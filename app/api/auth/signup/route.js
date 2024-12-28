import bcrypt from "bcryptjs";
import User from "@models/user";
import { connectToDatabase } from "@utils/database";

export const POST = async (req) => {
  try {
    await connectToDatabase();
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "Email already exists" }),
        { status: 400 }
      );
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return new Response(
        JSON.stringify({ message: "Username already exists" }),
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user with hashed password
    try {
      await User.create({ username, email, password: hashedPassword });
    } catch (validationError) {
      if (validationError.name === "ValidationError") {
        const errors = Object.values(validationError.errors)
          .map((err) => err.message)
          .join(", ");
        return new Response(
          JSON.stringify({ message: `Validation error: ${errors}` }),
          { status: 400 }
        );
      }
      throw validationError; // Re-throw other errors
    }

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during user signup:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
