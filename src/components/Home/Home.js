import React from "react";
import HomeBanner from "../Banner/HomeBanner";
import AddPost from "./AddPost";
import TopPosts from "./TopPosts";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <AddPost />
      <TopPosts />
    </div>
  );
};

export default Home;
