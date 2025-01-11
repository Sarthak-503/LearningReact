import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "./CoreConcept.jsx";
import React from "react";

const CoreConcepts = () => {
  return (
    <>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
            // <CoreConcept
            //   title={conceptItem.title}
            //   description={conceptItem.description} // same
            //   image={conceptItem.image}
            // />
          ))}
        </ul>
      </section>
    </>
  );
};

export default CoreConcepts;
