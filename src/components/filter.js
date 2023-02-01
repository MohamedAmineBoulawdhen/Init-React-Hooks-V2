import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import MovieList from "./movielist";
const Filter = ({ movies, filteredMovies, setFilteredMovies }) => {
  const [title, setTitle] = useState("");
  const [minRating, setMinRating] = useState(0.0);
  const [showNoResults, setShowNoResults] = useState(false);
  useEffect(
    () => setFilteredMovies(onFilter(movies, title, minRating)),
    [movies]
  );
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setMinRating(parseFloat(e.target.value));
  };
  const onFilter = (movies, title, minRating) => {
    if (title === "" && minRating === 0.0) {
      return movies;
    } else if (title === "" && minRating >= 0.0) {
      return movies
        .filter((item) => item.rating >= minRating)
        .sort((a, b) => {
          return b.rating - a.rating;
        });
    } else {
      return movies
        .filter(
          (item) =>
            item.title.toLowerCase() === title.toLowerCase() &&
            item.rating >= minRating
        )
        .sort((a, b) => {
          return b.rating - a.rating;
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredMovies(onFilter(movies, title, minRating));
    setShowNoResults(false);
  };
  if (filteredMovies.length === 0 && showNoResults === false) {
    setShowNoResults(true);
  }

  return (
    <div
      style={{
        width: "100%",
        border: "2px solid purple",
        padding: "10px 15px",
        borderRadius: "10px",
      }}
    >
      {/**************Filter Movies****************/}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            as={Col}
          >
            <Form.Label
              as={Col}
              style={{
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Titel
            </Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            as={Col}
          >
            <Form.Label
              as={Col}
              style={{
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Rating:
            </Form.Label>
            <Form.Control
              type="number"
              value={minRating}
              onChange={handleRatingChange}
              min={0.0}
              max={10.0}
              step="0.1"
            />
          </Form.Group>
          <button
            type="submit"
            style={{
              width: "10%",
              padding: "0px",
              margin: "10px",
              border: "2px solid purple",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: "bold",
            }}
            className="mb-3"
          >
            Filter
          </button>
        </Row>
        <hr />
      </Form>

      {/**************Filter Movies****************/}
      {showNoResults && <h1>Nothing was found !</h1>}
      {!showNoResults && (
        <MovieList movies={movies} filteredMovies={filteredMovies} />
      )}
    </div>
  );
};

export default Filter;
