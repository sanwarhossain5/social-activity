import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomeBanner.css";
// Import Swiper styles
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Image,
    Text
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const HomeBanner = () => {
  return (
    <div className="" maxW="lg">
      <div className="home-banner my-7" maxW="lg">
        <div className="">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide maxW="lg">
              <div className="single-banner border rounded-md border-[#cbd5e0]">
                <Card maxW="lg">
                  <CardHeader>
                    <Heading size="md" className="text-left">
                      {" "}
                      Main things of this website
                    </Heading>
                  </CardHeader>

                  <CardBody className="pb-2 pt-0">
                    <Image
                      style={{
                        border: "0px solid #444444",
                        height: "245px",
                        width: "100%",
                        // background: `url(${postImg}) no-repeat left top`,

                        color: "transparent",
                        cursor: "pointer",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      objectFit="cover"
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Chakra UI"
                    />
                    <Text className="text-left pt-2 text-sm">
                      With Chakra UI, I wanted to sync the speed of development
                      with the speed of design. I wanted the developer to be
                      just as excited as the designer to create a screen.
                    </Text>
                  </CardBody>

                  <CardFooter
                    justify="space-between"
                    flexWrap="wrap"
                    className="pt-1 pb-4"
                    sx={{
                      "& > button": {
                        maxW: "136px",
                      },
                    }}
                  >
                    <Link
                      className="card-btn"
                      flex="1"
                      variant="ghost"
                      to="/about"
                    >
                      Docs
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide maxW="lg">
              <div className="single-banner border rounded-md border-[#cbd5e0]">
                <Card maxW="lg">
                  <CardHeader>
                    <Heading size="md" className="text-left">
                      {" "}
                      Main things of this website
                    </Heading>
                  </CardHeader>

                  <CardBody className="pb-2 pt-0">
                    <Image
                      style={{
                        border: "0px solid #444444",
                        height: "245px",
                        width: "100%",
                        // background: `url(${postImg}) no-repeat left top`,

                        color: "transparent",
                        cursor: "pointer",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      objectFit="cover"
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Chakra UI"
                    />
                    <Text className="text-left pt-2 text-sm">
                      With Chakra UI, I wanted to sync the speed of development
                      with the speed of design. I wanted the developer to be
                      just as excited as the designer to create a screen.
                    </Text>
                  </CardBody>

                  <CardFooter
                    justify="space-between"
                    flexWrap="wrap"
                    className="pt-1 pb-4"
                    sx={{
                      "& > button": {
                        maxW: "136px",
                      },
                    }}
                  >
                    <Link
                      className="card-btn"
                      flex="1"
                      variant="ghost"
                      to="/about"
                    >
                      Docs
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
