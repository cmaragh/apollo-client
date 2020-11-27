import React from "react";
import "./styles.css";

import NavbarSmall from "./Components/NavbarSmall";
import MainContainer from "./Components/MainContainer";
import UrlContainer from "./Components/UrlContainer";
import TermsContainer from "./Components/TermsContainer";

import { gql, useQuery, useMutation } from "@apollo/client";

const LINK_DATA = gql`
  query {
    allLinks {
      url
      slug
    }
  }
`;

const CREATE_LINK = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      name
      email
    }
  }
`;

export default function App() {
  const { data } = useQuery(LINK_DATA);

  return (
    <div className="App">
      <NavbarSmall />
      <MainContainer />
      <UrlContainer />
      <TermsContainer />
      {typeof data === "undefined" ? (
        <h2>Loading links</h2>
      ) : (
        data.map((link) => {
          return <h2>{link.url}</h2>;
        })
      )}
    </div>
  );
}
