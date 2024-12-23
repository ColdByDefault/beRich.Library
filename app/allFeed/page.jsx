'use client';
import React, { useEffect, useState } from "react";
import PromptCard from "@components/PromptCard";

const AllPromptsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("/api/prompt");
                if (res.ok) {
                    const data = await res.json();
                    setPosts(data);
                }
            } catch (error) {
                console.error("Error fetching prompts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <section className="flex flex-col gap-4 pt-4 h-screen">
            <h1 className="text-center text-3xl font-bold text-gray-700">
                All Prompts
            </h1>
            <div
                className="flex flex-wrap gap-4 p-4
                align-center justify-evenly">
                {posts.map((post) => (
                    <PromptCard key={post._id} post={post} />
                ))}
            </div>
        </section>
    );
};

export default AllPromptsPage;
