import { useQuery } from "@tanstack/react-query";
import React from "react";
import AllPost from "../AllPost";
import Loading from "../Shared/Loading";

const TopPosts = () => {
  const { data: topPosts = [], isLoading } = useQuery({
    queryKey: ["topPosts"],
    queryFn: async () => {
      const res = await fetch(
        `https://social-activity-server.vercel.app/posts`
      );
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="media-area">
      <div className="container">
        <h2 className="font-bold text-center py-5 my-6  text-4xl">
          Special <span className="text-[#D53F8C]">Posts</span>
        </h2>
        <div className="mx-auto">
          {topPosts?.slice(0, 3)?.map((posts) => (
            <AllPost key={posts?._id} posts={posts} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPosts;
