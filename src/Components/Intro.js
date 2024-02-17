import React from "react";
import styled from "styled-components";
const Intro = () => {
  return (
    <Wrapper>
      <div className="details">
        <h1 className="heebo-bold">
          Hi,I am Zaid Shaikh,
          <br /> a full stack developer.
        </h1>
        <p>
          A versatile full-stack developer proficient in both front-end and
          back-end technologies. Excels in designing and implementing scalable
          web applications, utilizing a diverse skill set encompassing languages
          such as JavaScript, Python, and frameworks like React and Node.js.
        </p>
        <button className="btn">Download Resume</button>
      </div>
      <div className="image">
        <img
          className="img"
          src="https://franchisematch.com/wp-content/uploads/2015/02/john-doe.jpg"
          alt=""
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 70vh;
  margin: auto;
  .details {
    margin: auto 0px;
    gap: 20px;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      height: 250px;
      width: 250px;
      border-radius: 50%;
    }
  }
  @media only screen and (max-width: 700px) {
    margin-top: 30px;
    gap: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
    .details {
      margin: auto;
      text-align: center;
    }
  }
`;
export default Intro;
