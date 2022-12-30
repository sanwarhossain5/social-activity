import {
    Box, CardBody,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalHeader,
    ModalOverlay,
    Stack,
    StackDivider,
    Text
} from "@chakra-ui/react";
import React from "react";
import { toast } from "react-hot-toast";

const InfoCard = ({ info, isOpen, onClose }) => {

  const handleUpdateMe = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const university = form.university.value;
    const address = form.address.value;

    const profile = {
      name,
      email,
      university,
      address,
    };
    console.log(profile);

    fetch(`https://social-activity-server.vercel.app/about/${info?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Profile Update Success");
      });
  };

  return (
    <div>
      <CardBody key={info._id}>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Name
            </Heading>
            <Text pt="2" fontSize="sm">
              {info?.name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email
            </Heading>
            <Text pt="2" fontSize="sm">
              {info?.email}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              University
            </Heading>
            <Text pt="2" fontSize="sm">
              {info?.university}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Address
            </Heading>
            <Text pt="2" fontSize="sm">
              {info?.address}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      {/* modal */}
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update your profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleUpdateMe}>
              <div className="">
                <div className=" w-full text-sm mb-4">
                  <label htmlFor="name" className="block mb-2 text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={info?.name}
                    placeholder="Name"
                    className="w-full px-4 py-3 border"
                  />
                </div>
                <div className=" w-full text-sm mb-4">
                  <label htmlFor="name" className="block mb-2 text-gray-400">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    defaultValue={info?.email}
                    placeholder="Email"
                    className="w-full px-4 py-3 border"
                  />
                </div>
                <div className=" w-full text-sm mb-4">
                  <label htmlFor="name" className="block mb-2 text-gray-400">
                    University
                  </label>
                  <input
                    type="text"
                    name="university"
                    defaultValue={info?.university}
                    placeholder="University"
                    className="w-full px-4 py-3 border"
                  />
                </div>
                <div className=" w-full text-sm mb-4">
                  <label htmlFor="name" className="block mb-2 text-gray-400">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    defaultValue={info?.address}
                    placeholder="Address"
                    className="w-full px-4 py-3 border"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Update"
                onClick={onClose}
                className="border text-center mt-5 cursor-pointer border-[#D53F8C] bg-[#D53F8C] w-full h-[50px] rounded-[5px] text-white font-semibold hover:border-[#D53F8C] hover:bg-transparent hover:text-[#D53F8C] hover:duration-1650"
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default InfoCard;
