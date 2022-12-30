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
  Input,
  Text
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { BsFillShareFill, BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const AllPost = ({ posts }) => {
  const { user } = useContext(AuthContext);
  const { img, userName, userEmail, time, date, _id, describe } = posts;


  // //comment fetch
  const { data: comments = [], refetch: reCommentFetch } = useQuery({
    queryKey: ["comments", _id],
    queryFn: async () => {
      const res = await fetch(`https://social-activity-server.vercel.app/comments/${_id}`);
      const data = res.json();
      return data;
    },
  });

  // comment fetch
  const { data: reactions = [], refetch: reactReFetch } = useQuery({
    queryKey: ["reactions", _id],
    queryFn: async () => {
      const res = await fetch(`https://social-activity-server.vercel.app/reaction/${_id}`);
      const data = res.json();
      return data;
    },
  });

  //handleReaction
  const handleReaction = () => {
    const reactInfo = {
      postId: _id,
      userName,
      userEmail,
    };

    fetch("https://social-activity-server.vercel.app/reaction/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reactInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        reactReFetch();
      });
  };

  // handle Comment
  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;

    const commentInfo = {
      postId: _id,
      comment,
      userName,
      userEmail,
    };

    fetch("https://social-activity-server.vercel.app/comment/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        reCommentFetch();
      });
  };

  return (
    <div className="post-area mx-auto pb-12">
      <div>
        <div>
          <Card className="mx-auto post-card" maxW="lg">
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
                    <Text>
                      {time} {date}
                    </Text>
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
              <Text>{describe.slice(0, 150) + " ..."}</Text>
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
              <Button onClick={handleReaction} flex="1" variant="ghost">
                <FcLike
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
                Love {reactions?.length}
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
                <Link to={`/post/${_id}`}>Details</Link>
              </Button>
            </CardFooter>
            {/* //comment */}
            <div
              // style={{ display: "none !important" }}
              justify="space-between"
              flexWrap="wrap"
              className="px-5 py-3"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <form onSubmit={handleComment}>
                <Input
                  className="mb-2"
                  name="comment"
                  pr=""
                  required
                  type="text"
                  placeholder="Comment"
                />
                {/* <br /> */}
                <Button
                  style={{ background: "#d53f8c", color: "white" }}
                  type="submit"
                  colorScheme="pink"
                  size="xs"
                >
                  Add Comment
                </Button>
              </form>
            </div>
            {/* comments here */}
            <div className="p-2 ">
              {comments?.map((c) => (
                <div key={c?._id} className="flex gap-2 p-3 bg-gray-100">
                  <p className="mr-1 font-bold">{c?.userName}: </p>
                  <p> {c?.comment}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AllPost;
