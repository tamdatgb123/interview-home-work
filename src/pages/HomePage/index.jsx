import React from "react";
import { Pagination, Skeleton } from "antd";
import Post from "../../components/PostComponent/Post";
import { getCurrentDay } from "../../utils/getCurrentDay";

const HomePage = () => {
    const [postList, setPostList] = React.useState([]);
    const [userList, setUserList] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const postsPerPage = 10;
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const toDay = getCurrentDay();
    
    const getUserName = userList.reduce((acc, user) => {
        acc[user.id] = user.name;
        return acc;
    }, {});

    React.useEffect(() => {
        const getPostList = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await response.json();
            setPostList(result);
        } catch (error) {
            console.error("Get post list failed", error);
        }
        };
        getPostList();
    }, []);

    React.useEffect(() => {
        const getUserList = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await response.json();
            setUserList(result);
        } catch (error) {
            console.error("Get user list failed", error);
        }
        };
        getUserList();
    }, []);

    return (
        <div style={{ padding: 32 }}>
            {postList ? postList.slice(startIndex,endIndex).map(post => (
                <Post 
                key={post.id}
                postId={post.id}
                title={post.title}
                author={getUserName[post.userId]}
                createdDate={toDay}
                content={post.body}
            />
            )) : <Skeleton active />}
            <Pagination 
                defaultCurrent={page} 
                total={postList.length} 
                onChange={(current) => setPage(current)} 
                
            />
        </div>
    )
}

export default HomePage;