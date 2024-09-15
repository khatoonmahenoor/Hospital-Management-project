import { useState } from "react";

const images = [
  "https://www.medanta.org/storage/opinion/October2023//DcLGko9o6RwE5oa50mZG15UX0JVRyF-metaaW5kaWFuLWRvY3Rvci5qcGc=-.jpg",
  "https://www.medanta.org/storage/banners/October2023//6zMYdqeIQflNpFRqbNXgFCqrtF90GB-metaSlVJYk82NHdDM0dpUDJaOEhzQ0pPMUp4dlZLSml1LW1ldGFiV0Z3TG5CdVp3PT0tLnBuZw==-.png"

];

export const ScrollingImage = () => {
  const [curr, setCurr] = useState(0);

  const nextSlide = () => {
    setCurr(curr === images.length - 1 ? 0 : curr + 1);
  };

  const prevSlide = () => {
    setCurr(curr === 0 ? images.length - 1 : curr - 1);
  };

  return (
    <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner0">
                {images.map((value, index) => (
                  <div key={index} className={`carousel-item ${curr === index ? "active" : ""}`}>
                    <img src={value} className="d-block w-100" alt={`Slide ${index}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={prevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={nextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
    </>
  );
};
