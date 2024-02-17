import React from "react";
import Post_Info from "./Post_Info";
import { Post } from "../Utils/Links";
import styled from "styled-components";
const Posts = () => {
  return (
    <Blue_bg>
      <Wrapper>
        <p>Recent Posts</p>
        <Grid>
          {Post.map((info) => {
            return <Post_Info {...info}></Post_Info>;
          })}
        </Grid>
      </Wrapper>
    </Blue_bg>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  margin: auto;

  p {
    font-size: large;
  }
`;
const Blue_bg = styled.div`
  padding: 10px;
  margin-top: 10px;
  background-color: #edf7fa;
`;
const Grid = styled.div`
  height: auto;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
  grid-gap: 60px;
  @media only screen and (max-width: 700px) {
    .blue-bg {
      margin-top: 10px;
    }
  }
`;
export default Posts;
