import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy & Quick"
              para="Obtain quick & easy access to the Book you purchased online."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="15,000+ Books"
              para="Library has books of your choice in all categories."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Affordable"
              para="Get your hands on popular books for as little as 69.99NOK."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
