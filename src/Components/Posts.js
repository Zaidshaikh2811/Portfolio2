import React from "react";
import Post_Info from "./Post_Info";
import { Post } from "../Utils/Links";
import styled from "styled-components";
const Posts = () => {
  return (
    <div className="blue-bg">
      <Wrapper>
        <p>Recent Posts</p>
        <Grid>
          {Post.map((info) => {
            return <Post_Info {...info}></Post_Info>;
          })}
        </Grid>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  margin: auto;

  p {
    font-size: large;
  }
`;
const Grid = styled.div`
  height: auto;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
  grid-gap: 60px;
`;
export default Posts;
