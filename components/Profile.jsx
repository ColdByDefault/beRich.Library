import React, { useState } from 'react';
import PromptCard from '@/components/PromptCard';
import { FaLocationDot, FaLink  } from "react-icons/fa6";
import { TiStarHalfOutline } from "react-icons/ti";
import Link from 'next/link';
import Image from 'next/image';

const Profile = ({ name, desc, image, bio, location, website, data, handleEdit, handleDelete, onUpdate }) => {
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState({ bio, location, website });

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(form);
        setEditMode(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    return (
        <section className="w-full min-h-screen p-6  text-gray-100">
            <div className="max-w-4xl mx-auto">
                {/* User Profile Section */}
                <div className="flex items-center gap-6 mb-8">
                    <Image src={image || '/assets/images/profile.svg'}
                        alt={`${name} profile picture`}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full object-cover border border-blue-900"/>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-100">{name}</h1>
                        <p className="text-sm text-gray-700 pt-2">{desc}</p>
                    </div>
                </div>

                {editMode ? (
                    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                        <textarea
                            name="bio"
                            value={form.bio}
                            onChange={handleChange}
                            placeholder="Enter your bio"
                            className="w-full p-2 rounded bg-gray-800 text-gray-100 border border-gray-700"
                            rows="3"/>
                        <input
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            placeholder="Enter your location"
                            className="w-full p-2 rounded bg-gray-800 text-gray-100 border border-gray-700"/>
                        <input
                            type="text"
                            name="website"
                            value={form.website}
                            onChange={handleChange}
                            placeholder="Enter your website"
                            className="w-full p-2 rounded bg-gray-800 text-gray-100 border border-gray-700"/>
                        <div className="flex gap-2">
                            <button type="submit" className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700 transition">
                                Save
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 transition"
                                onClick={() => setEditMode(false)}>
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="mb-8 space-y-2">
                        <div className="text-gray-300 flex gap-2 items-center"><span className='text-blue-300'><TiStarHalfOutline  /></span>{bio || "No bio available."}</div>
                        <div className="text-sm text-gray-400 flex gap-2 items-center"><FaLocationDot />{location || "Location not set."}</div>
                        <div className="text-sm text-gray-400"><FaLink />
                            {website ? (
                                <Link href={website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                    {website}
                                </Link>
                            ) : (
                                "No website provided."
                            )}
                        </div>
                        <button className="px-4 py-2 submitt-btn submitt-btn2"
                            onClick={() => setEditMode(true)}>
                            Edit Profile
                        </button>
                    </div>
                )}

                {/* User Posts Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-100 mb-4">My Posts</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {data.map((post) => (
                            <PromptCard
                                key={post._id}
                                post={post}
                                handleEdit={() => handleEdit && handleEdit(post)}
                                handleDelete={() => handleDelete && handleDelete(post)}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

