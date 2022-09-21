import styled from "styled-components";
export const ProjectsStyling = styled.div`
  background-color: #1b2430;
  h2 {
    text-align: center;
    padding: 4%;
  }
  h2:after {
    border-bottom: 2px solid #fff;
    display: block;
    margin-left: 48%;
    margin-top: 0.5%;
    content: " ";
    width: 55px;
  }
  p {
    font-family: "Lexend Deca", sans-serif;
  }
  .projects:hover {
    transform: scale(1.05);
  }
`;
