import { useEffect, useState, type ReactNode } from 'react'
import './App.css'
import get from './util/http.ts'
import BlogPosts, { type BlogPost } from './components/BlogPosts.tsx';
import fetchingImage from './assets/loading.svg';
import ErrorMessage from './components/ErrorMessage.tsx';

type RawDataBlogPost = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

function App() {
    const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    useEffect(() => {
        const fetchPosts = async () => {
            setIsFetching(true);
            try {
                const data = (await get(
                    'https://jsonplaceholder.typicode.com/pos1ts'
                )) as RawDataBlogPost[];

                const blogPosts: BlogPost[] = data.map(rawPost => {
                    return {
                        id: rawPost.id,
                        title: rawPost.title,
                        text: rawPost.body
                    }
                });

                setFetchedPosts(blogPosts);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                    setError(error.message);
                }
            }
            setIsFetching(false);
        }
        fetchPosts();
    }, []);

    let content: ReactNode
    if (error) {
        content = <ErrorMessage text={error} />
    }
    if (fetchedPosts) {
        content = <BlogPosts posts={fetchedPosts} />
    }
    if (isFetching) {
        content = <>
            <img src={fetchingImage} alt="Loading..." />
            <p>Fetching posts...</p>
        </>
    }
    
    return (
        <main>
            {content}
        </main>
    )
}

export default App
