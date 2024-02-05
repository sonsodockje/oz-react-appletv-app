import instance from "../../api/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(`/movie/${movieId}`);
      setMovie(response.data);
      console.log(response);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return null;
  return (
    <Section>
      <Img
        className="modal_poster_img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      />
    </Section>
  );
};

const Section = styled.section`
  padding-top: 20px;
`;
const Img = styled.img`
  object-fit: cover;
  height: 100dvh;
  position: fi;
`;
export default DetailPage;
