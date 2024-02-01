import styled from "styled-components";
import Nav from "./components/MovieModal/Nav";
import Banner from "./components/MovieModal/Banner";
import Row from "./components/MovieModal/Row";
import requests from "./api/requests";

function App() {
  return (
    <>
      <Container>
        <Nav />
        <Banner />
        <Row title="Tending Now" id="TN" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
        <Row
          title="Action Movie"
          id="AM"
          fetchUrl={requests.fetchActionMovies}
        />
        <Row
          title="Comedy Movie"
          id="CM"
          fetchUrl={requests.fetchComedyMovies}
        />
      </Container>
    </>
  );
}

const Container = styled.main`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`;

export default App;
