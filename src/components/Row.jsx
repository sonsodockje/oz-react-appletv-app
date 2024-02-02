import instance from "../api/axios";
import MovieModal from "./MovieModal";
import "./styles/Row.css";
import { useCallback, useState, useEffect } from "react";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovie] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await instance.get(fetchUrl);
      // console.log("백드롭 주소", response.data.results[0].backdrop_path);
      // console.log("response.data.results : ", response.data.results);
      setMovie(response.data.results);
    };
    fetchMovieData();
    // console.log("무비스", movies);
  }, [fetchUrl]);

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div
          className="slider_arrow-left"
          onClick={(e) => {
            console.log(e.target);
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}
        >
          <span className="arrow">{"<"}</span>
        </div>
        <div id={id} className="row_posters">
          {movies.map((e) => (
            <img
              key={e.id}
              className="row_poster"
              src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}
              alt={e.name}
              onClick={() => handleClick(e)}
            />
          ))}
        </div>
        <div
          className="slider_arrow-right"
          onClick={(e) => {
            console.log(e.target);
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}
        >
          <span className="arrow">{">"}</span>
        </div>
      </div>

      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default Row;
