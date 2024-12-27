import React, { useState } from 'react';
import PromptCard from '@components/PromptCard';

const Profile = ({ name, desc, image, bio, location, website, data, handleEdit, handleDelete, onUpdate }) => {
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState({ bio: '', location: '', website: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(form); // Call the update function
        setEditMode(false); // Exit edit mode
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <section className="w-full h-screen flex flex-col items-center justify-start gap-8">
            {/* User Profile Section */}
            <div className="flex items-center gap-4">
                <img
                    src={image || '/assets/images/profile.svg'} // Fallback image
                    alt={`${name} profile picture`}
                    className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                    <h1 className="text-3xl font-bold text-gray-300">{name}</h1>
                    <p className="text-sm text-gray-400">{desc}</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-gray-400">{bio || "No bio available."}</p>
                <p className="text-sm text-gray-400">{location || "Location not set."}</p>
                <p className="text-sm text-gray-400">
                    {website ? (
                        <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            {website}
                        </a>
                    ) : (
                        "No website provided."
                    )}
                </p>
            </div>

            {editMode ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                    <input
                        type="text"
                        name="bio"
                        value={form.bio}
                        onChange={handleChange}
                        placeholder="Enter your bio"
                        className="p-2 rounded bg-gray-700 text-gray-300"
                    />
                    <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Enter your location"
                        className="p-2 rounded bg-gray-700 text-gray-300"
                    />
                    <input
                        type="text"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        placeholder="Enter your website"
                        className="p-2 rounded bg-gray-700 text-gray-300"
                    />
                    <button type="submit" className="p-2 bg-blue-600 rounded text-white">
                        Save
                    </button>
                    <button
                        type="button"
                        className="p-2 bg-red-600 rounded text-white"
                        onClick={() => setEditMode(false)}
                    >
                        Cancel
                    </button>
                </form>
            ) : (
                <button
                    className="p-2 bg-blue-600 rounded text-white"
                    onClick={() => setEditMode(true)}
                >
                    Edit Profile
                </button>
            )}

            {/* User Posts Section */}
            <div className="flex flex-col flex-wrap gap-4 p-4 align-center justify-evenly">
                <h1 className="text-gray-300">My Posts</h1>
                {data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Profile;
