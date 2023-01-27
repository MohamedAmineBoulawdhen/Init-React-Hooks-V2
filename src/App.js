import Filter from "./components/filter";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function App() {
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "Mr. Robot",
      description:
        "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2QyNDIzOGMtNThhNS00NmUwLWI0ZjUtZjdkN2I1OTRjZWQ3XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
      rating: 8.6,
    },
    {
      id: 1,
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: 9.2,
    },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const newMovie = {};
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const handleTitel = (e) => {
    setTitle(e.target.value);
  };
  const handledescription = (e) => {
    setDescription(e.target.value);
  };
  const handleposterURL = (e) => {
    setPosterURL(e.target.value);
  };
  const handlerating = (e) => {
    setRating(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    newMovie.id = movies.length;
    newMovie.title = title;
    newMovie.description = description;
    newMovie.posterURL = posterURL;
    newMovie.rating = rating;
    addMovie(newMovie);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };
  return (
    <div style={{ margin: "20px" }}>
      {/**************Filter Movies****************/}
      <div style={{ margin: "20px 0px" }}>
        <Filter movies={movies} />
      </div>
      {/**************Filter Movies****************/}
      {/**************Adding Movies****************/}
      <div
        style={{
          width: "100%",
          border: "2px solid purple",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <h1>Adding Movies</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label as="h2">Titel</Form.Label>
            <Form.Control type="text" value={title} onChange={handleTitel} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label as="h2">Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={handledescription}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label as="h2">Poster URL:</Form.Label>
            <Form.Control
              type="text"
              value={posterURL}
              onChange={handleposterURL}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label as="h2">Rating:</Form.Label>
            <Form.Control
              type="number"
              value={rating}
              onChange={handlerating}
              min={0}
              max={10}
              step="0.1"
            />
          </Form.Group>
          <button
            type="submit"
            style={{
              width: "100%",
              border: "2px solid purple",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Add
          </button>
        </Form>
      </div>
      {/**************Adding Movies****************/}
    </div>
  );
}

export default App;
