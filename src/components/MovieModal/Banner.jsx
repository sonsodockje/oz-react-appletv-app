import React, { useState, useEffect } from "react";
import "./styles/Banner.css";
import requests from "../../api/requests";
import styled from "styled-components";
import instance from "../../api/axios";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await instance.get(requests.fetchNowPlaying);
    console.log("리퀘스트", request);
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;
    console.log("아이디", movieId);

    const { data: movieDetail } = await instance.get(`movie/${movieId}`, {
      params: { append_tp_response: "videos" },
    });
    setMovie(movieDetail);
    console.log("디테일", movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };

  if (!movie) {
    return <div>로딩중</div>;
  }

  if (!isClicked) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie.title || movie.original_title}
          </h1>
          <div className="banner_buttons">
            {movie.videos?.results[0]?.key ? (
              <button
                className="banner_button play"
                onClick={() => setIsClicked(true)}
              >
                PLAY
              </button>
            ) : null}
          </div>
          <p className="banner_description">{truncate(movie.overview, 150)}</p>
        </div>
        <div className="banner_fadeBottom"></div>
      </header>
    );
  } else {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1`}
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>X</button>
      </>
    );
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Banner;
