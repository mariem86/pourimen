import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid className="p-3">
          <h1 className="display-3"></h1>
          </Container>
      </Jumbotron>
    </div>
  );
};
export default Home;