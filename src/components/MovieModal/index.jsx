import React from "react";
import { imgBasePath } from "../components";
import "./index.css";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  return (
    <div className="presentation" role="presentation">
      <div className="wrapper_modal">
        <div className="modal">
          <span onClick={() => setModalOpen(false)} className="modal_close">
            X
          </span>
          <img
            className="modal_poster_img"
            src={`${imgBasePath}${backdrop_path}`}
            alt="모달 포스터 이미지"
          />
          <div className="modal_content">
            <p className="modal_details">
              <span>100% for you</span>{" "}
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="modal_title">{title ? title : name}</h2>
            <p className="modal_overview">평점 : {vote_average}</p>
            <p className="modal_overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
