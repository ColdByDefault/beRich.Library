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
        username: '',
        image: '',
        bio: '',
        location: '',
        website: '',
    });

    useEffect(() => {
        // Fetch user posts
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await res.json();
            setPosts(data);
        };

        // Fetch user details
        const fetchUserDetails = async () => {
            if (session?.user.id) {
                try {
                    const res = await fetch(`/api/users/${session.user.id}`, {
                        method: 'GET',
                    });
                    if (!res.ok) {
                        console.error('Error fetching user details:', res.status, res.statusText);
                        return;
                    }
        
                    const data = await res.json();
                    setUserDetails(data || {}); // Ensure userDetails is always an object
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
                // Re-fetch user details after a successful update
                await fetchUserDetails(); // Call the function to refresh user details
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

    return (
        <Profile
            name={userDetails.username || 'My'}
            desc="Welcome to your personalized profile page"
            image={userDetails.image}
            bio={userDetails.bio} // Add this if bio is used in Profile
            location={userDetails.location} // Add this for location
            website={userDetails.website} // Add this for website
            data={myPosts}
            handleEdit={handleEdit}
            onUpdate={handleUpdate}
        />

    );
};

export default MyProfile;
