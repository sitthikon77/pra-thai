import { useState } from "react";
import StoryComponent from "../../component/story/storycomponent";
import StoryData from "../../data/storydata";
import "./home-page.css";
import "../../component/story/story.css";
import AddStoryComponent from "../../component/story/add-story";
import PostComponent from "./post-component/post-component";

const HomePage = () => {
  const [storyData, setStoryData] = useState(StoryData);
  return (
    <div className=".container-fluid	">
      <div className="container" id="home-container">
        <AddStoryComponent />
        {/* STORY */}
        {storyData.map((data, index) => {
          return <StoryComponent key={index} {...data} />;
        })}
        {/* STORY */}
      </div>
      <PostComponent addPost={function (...args: any[]) {
          throw new Error("Function not implemented.");
        } } />
    </div>
  );
};

export default HomePage;
