import styled from "styled-components";
export const ContactStyle = styled.div`
  background-color: #d6d5a8;
  .p-contact {
    //text-align: left;
    padding-top: 3%;
    color: #1b2430;
  }
  h2:after {
    border-bottom: 2px solid #000;
    display: block;
    margin-left: 48%;
    content: " ";
    width: 55px;
  }
  p {
    text-align: center;
    font-family: "Lexend Deca", sans-serif;
    letter-spacing: 0.05rem;
  }
  .icons {
    text-align: center;
    padding-top: 0.5%;
    padding-bottom: 2%;
  }
  a:hover {
    opacity: 0.9;
  }
`;
