import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading, Text,
  Textarea
} from "@chakra-ui/react";
import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiOutlineComment } from "react-icons/ai";
import { BsCheckLg, BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import postImg from "../../images/plcmg.jpg";

const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const currentDate = new Date().getTime();
  const time = new Date(currentDate).toLocaleTimeString();
  const date = format(currentDate, "PP");
console.log(date, time)
  const { user } = useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_IMGBB_KEY;
  let [postDescription, setPostDescription] = React.useState("");
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setPostDescription(inputValue);
  };

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData?.success) {
          const postInfo = {
            date,
            time,
            userName: user?.displayName,
            userEmail: user?.email,
            img: imgData?.data.url,
            describe: postDescription,
          };
          console.log(postInfo);
          //save information to the database
          fetch("https://social-activity-server.vercel.app/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Post Successfully");
            });
        }
      });
  };

  return (
    <div className="post-area mx-auto py-12">
      <h2 className="font-bold text-center py-5 mb-6 text-4xl">
        Add a <span className="text-[#D53F8C]">Post</span>
      </h2>
      <div>
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <Card className="mx-auto" maxW="lg">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />

                  <Box>
                    <Heading size="sm">Segun Adebayo</Heading>
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
            {/* <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            /> */}
            <div className="demo-img" style={{}}>
              <input
                required
                style={{
                  border: "0px solid #444444",
                  height: "245px",
                  width: "100%",
                  background: `url(${postImg}) no-repeat left top`,
                  paddingLeft: "4px",
                  color: "transparent",
                  fontSize: "12px",
                  resize: "none",
                  cursor: "pointer",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                type="file"
                {...register("image", {
                  required: "Photo is required",
                })}
                className="input img-input input-bordered w-full"
              />
            </div>
            {errors.image && (
              <p className="text-red-600">{errors.image?.message}</p>
            )}
            <CardBody>
              <Text mb="8px">{postDescription}</Text>
              <Textarea
                value={postDescription}
                onChange={handleInputChange}
                required
                className="border border-[D53F8C] "
                placeholder="Here is a Post Description"
                size="sm"
              />
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
              <Button
                flex="1"
                variant="ghost"
                disabled
              >
                <FcLike
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
                Love
              </Button>
              <Button disabled flex="1" variant="ghost">
                <AiOutlineComment
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
                Comment
              </Button>

              {user?.uid ? (
                <Button
                  style={{ background: "#d53f8c", color: "white" }}
                  type="submit"
                  as={Button}
                  colorScheme="pink"
                  flex="1"
                  variant="ghost"
                >
                  <BsCheckLg
                    variant="ghost"
                    colorScheme="pink"
                    aria-label="See menu"
                    className="ml-2"
                  />
                  Post
                </Button>
              ) : (
                <Button
                  style={{ background: "#d53f8c", color: "white" }}
                  type="submit"
                  as={Button}
                  colorScheme="pink"
                  flex="1"
                  variant="ghost"
                  disabled
                >
                  Please Sign In
                </Button>
              )}
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
