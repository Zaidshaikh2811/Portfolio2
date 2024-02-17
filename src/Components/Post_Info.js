import React from "react";
import styled from "styled-components";

const Post_Info = ({ heading, date, content }) => {
  return (
    <Grid>
      <h1>{heading}</h1>
      <p>{date}</p>
      <p>{content}</p>
    </Grid>
  );
};

const Grid = styled.p`
  display: grid;
  grid-template-rows: 120px 40px auto;
  background-color: white;
  padding: 0px 20px;
`;
export default Post_Info;
