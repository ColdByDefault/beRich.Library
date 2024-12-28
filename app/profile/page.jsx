'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

const MyProfile = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [myPosts, setPosts] = useState([]);
    const [userDetails, setUserDetails] = useState({
        _id: '',
        username: '',
        image: '',
        bio: '',
        location: '',
        website: '',
    });

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`/api/users/${session?.user.id}/posts`);
                if (!res.ok) {
                    throw new Error(`Failed to fetch posts: ${res.statusText}`);
                }
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        const fetchUserDetails = async () => {
            if (session?.user.id) {
                try {
                    const res = await fetch(`/api/users/${session.user.id}`, {
                        method: 'GET',
                    });
                    if (!res.ok) {
                        throw new Error(`Failed to fetch user details: ${res.statusText}`);
                    }
                    const data = await res.json();
                    setUserDetails(data || {});
                } catch (error) {
                    console.error('Error fetching user details:', error);
                }
            }
        };

        if (session?.user.id) {
            fetchPosts();
            fetchUserDetails();
        }
    }, [session?.user.id]);

    const handleUpdate = async (updatedData) => {
        try {
            const res = await fetch(`/api/users/${session.user.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (res.ok) {
                await fetchUserDetails();
                alert('Profile updated successfully!');
            } else {
                alert('Failed to update profile.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?");
        if (hasConfirmed) {
            try {
                const res = await fetch(`/api/prompt/${post._id}`, {
                    method: 'DELETE',
                });

                if (res.ok) {
                    setPosts((prevPosts) => prevPosts.filter((p) => p._id !== post._id));
                } else {
                    alert('Failed to delete prompt.');
                }
            } catch (error) {
                console.error('Error deleting prompt:', error);
            }
        }
    };

    return (
        <Profile
            name={userDetails.username || 'My'}
            desc={`ID: #${userDetails._id}`}
            image={userDetails.image}
            bio={userDetails.bio}
            location={userDetails.location}
            website={userDetails.website}
            data={myPosts}
            handleEdit={handleEdit}
            onUpdate={handleUpdate}
            handleDelete={handleDelete}
        />
    );
};

export default MyProfile;