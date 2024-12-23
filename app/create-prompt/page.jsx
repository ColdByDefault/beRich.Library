'use client';

import React, { useState} from 'react'
import Form from '@components/Form'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Feed from '@components/Feed'


const CreatePrompt = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag,
                }),
            });

            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.error('An unexpected error happened:', error);
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <>
            <Feed />
            <Form type='Create' post={post} setPost={setPost} submitting={submitting}
            handleSubmit={createPrompt}></Form>
        </>
    )
}

export default CreatePrompt