import { Divider, Flex, Space, Tag, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import React from "react";
import Comment from "../CommentComponent/Comment";

const Post = ({ postId, title, author, createdDate, content}) => {
    const [isShowComment, setIsShowComment] = React.useState(false);
    const [commentList, setCommentList] = React.useState([]);
    React.useEffect(() => {
        const getCommentList = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            const result = await response.json();
            setCommentList(result);
        } catch (error) {
            console.error("Get comment list failed", error);
        }
        };
        getCommentList();
    }, []);

    const handleShowComment = () => {
        setIsShowComment(!isShowComment);
    }

    return (
        <>
            <Flex justify="center">
                <Typography.Title level={2} >{title}</Typography.Title>
            </Flex>
            <Flex justify="space-between">
                <Flex vertical>
                    <Typography>Author: {author}</Typography>
                    <Typography>Created at: {createdDate}</Typography>
                </Flex>
                <Space size={[0, 4]} wrap style={{ width: 300}}>
                    <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="geekblue">geekblue</Tag>
                    <Tag color="purple">purple</Tag>
                </Space>
            </Flex>
            <Paragraph
                ellipsis={{
                    rows: 4,
                    expandable: true
                }}
            >{content}</Paragraph>
            <Typography style={{cursor: "pointer"}} onClick={handleShowComment}>{commentList.length} replies</Typography>
            <Divider style={{margin: 4}}></Divider>
            <Flex vertical gap={4} style={{display: isShowComment ? "block" : "none"}}>
            {commentList ? commentList.map(comment => (
                <Comment 
                    key={comment.id}
                    avatar={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
                    userName={comment.name}
                    time={"01/03/2024"}
                    content={comment.body}
                />
            )) : null}
            </Flex>
        </>
    )
}

export default Post;