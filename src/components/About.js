import {
  Box,
  Button,
  Card,
  CardHeader,
  Flex,
  Heading, useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import InfoCard from "./InfoCard";

const About = () => {
 
  const aboutInfo = useLoaderData();
  const { isOpen, onOpen, onClose } = useDisclosure();

 

  return (
    <div className="about-area mx-auto py-16">
      <div className="container">
        <div>
          <Card>
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="md">About Me__!</Heading>
                  </Box>
                </Flex>
                {/* <FaUserEdit
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                /> */}
                <Button
                  style={{ color: "#d53f8c" }}
                  variant="ghost"
                  onClick={onOpen}
                >
                  <FaUserEdit
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                  />
                  Edit
                </Button>
              </Flex>
            </CardHeader>
            {aboutInfo?.map((info) => (
              <InfoCard
                key={info._id}
                isOpen={isOpen}
                onClose={onClose}
                info={info}
              />
            ))}
          </Card>
        </div>
      </div>
      {/* Modal */}
    </div>
  );
};

export default About;
