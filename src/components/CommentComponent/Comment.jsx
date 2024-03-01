import { Avatar, Flex, Typography } from "antd";
import React from "react";

const Comment = ({ avatar, userName, time, content }) => {
    return (
        <Flex justify="flex-start" gap={"small"}>
            <Avatar src={avatar} />
            <Flex vertical gap={"middle"}>
                <Flex justify="flex-start" gap={"small"}>
                    <Typography>{userName}</Typography>
                    <Typography>{time}</Typography>
                </Flex>
                <Typography>{content}</Typography>
                <Typography style={{cursor: "pointer"}}>Reply to</Typography>
            </Flex>
        </Flex>
    )
}

export default Comment;