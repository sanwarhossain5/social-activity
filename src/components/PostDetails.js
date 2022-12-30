import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { BsFillShareFill, BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const PostDetails = () => {
  const singlePost = useLoaderData();
  console.log(singlePost);
  const { user } = useContext(AuthContext);
  const { img, date, userName, time, userEmail, describe } = singlePost;
  console.log(singlePost);
  return (
    <div className="post-area mx-auto py-16">
      <div>
        <Card className="mx-auto" maxW="xl">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                {user?.photoURL ? (
                  <Avatar name="Segun Adebayo" src={user?.photoURL} />
                ) : (
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                )}

                <Box>
                  <Heading size="sm">{userName}</Heading>
                  <Text>{userEmail}</Text>
                </Box>
              </Flex>
              {/* <IconButton icon={<BsThreeDotsVertical />} /> */}
              <BsThreeDotsVertical
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
            </Flex>
          </CardHeader>

          <Image
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            className="h-[300px]"
            objectFit="cover"
            src={img}
            alt="Chakra UI"
          />
          <CardBody>
            <Box>
              <Heading size="sm">
                Time: {time} Date: {date}
              </Heading>
            </Box>
            <Text>{describe}</Text>
          </CardBody>

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button flex="1" variant="ghost">
              <FcLike
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
              Love
            </Button>
            <Button flex="1" variant="ghost">
              <AiOutlineComment
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
              Comment
            </Button>

            <Button flex="1" variant="ghost">
              <BsFillShareFill
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
              />
              Share
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PostDetails;
