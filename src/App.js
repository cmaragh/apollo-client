import React, { useState } from "react";
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
  mutation createUser($url: String!, $slug: String!) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

export default function App() {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [linkArray, setLinkArray] = useState([]);

  const { data } = useQuery(LINK_DATA);
  const [createLink, { linkData }] = useMutation(CREATE_LINK);

  const urlChangeHandler = (e) => {
    setUrl(e.target.value);
  };

  const slugChangeHandler = (e) => {
    setSlug(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    createLink({ variables: { url, slug } });
  };

  return (
    <div className="App">
      <NavbarSmall />
      <MainContainer />
      <UrlContainer
        url={url}
        slug={slug}
        urlChangeHandler={urlChangeHandler}
        slugChangeHandler={slugChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />
      <TermsContainer />
      {typeof data === "undefined" ? (
        <h2>Loading links</h2>
      ) : (
        data.allLinks.map((link) => {
          return (
            <p>
              {link.url} -> {link.slug}
            </p>
          );
        })
      )}
    </div>
  );
}
