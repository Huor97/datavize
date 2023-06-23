import React from "react";
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import requests from "../config/Requests";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Rows
        title="Programmes originaux Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isPoster={true}
      />
      <Rows title="Tendances actuelles" fetchUrl={requests.fetchTrending} />
      <Rows title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Rows title="Films d'action" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Films d'horreur" fetchUrl={requests.fetchTrending} />
      <Rows title="Comédies" fetchUrl={requests.fetchTopRated} />
      <Rows title="Documentaires" fetchUrl={requests.fetchActionMovies} />
    </>
  );
}

export default Home;
