import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import MovieList from "./movielist";
const Filter = ({ movies }) => {
  const [title, setTitle] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showNoResults, setShowNoResults] = useState(false);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setMinRating(e.target.value);
  };
  const onFilter = (movies, title, minRating) => {
    if (title === "" && minRating === 0) {
      return movies;
    } else if (title === "" && minRating >= 0) {
      return movies.filter((item) => item.rating >= minRating);
    } else if (title !== "" && minRating >= 0) {
      return movies.filter(
        (item) => item.title === title && item.rating >= minRating
      );
    } else {
      return movies.filter(
        (item) => item.titel === title && item.rating >= minRating
      );
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
              min={0}
              max={10}
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
      {!showNoResults && <MovieList movies={filteredMovies} />}
    </div>
  );
};

export default Filter;
