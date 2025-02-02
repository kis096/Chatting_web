// import React from "react";
// import Herosection from "./Herosection"; // Ensure this file exists and is correctly implemented.
// import { useProductContext } from "./Contex/ContextProduct"; // Adjust the import path if necessary.

// function About() {
//   // Consume the Context using the custom hook
//   const myName = useProductContext();

//   // Example data to pass as props
//   const data = {
//     name: myName, // This will be "kishan"
//   };

//   return <Herosection myData={data} />;
// }

// export default About;

import React from "react";
import Herosection from "./Herosection";
import { useProductContext } from "./Contex/ContextProduct";

function About() {
  const { products, isLoading } = useProductContext();

  const data = {
    name: "kishan", // Replace with meaningful information as needed
    totalProducts: products.length,
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Herosection myData={data} />
      )}
    </div>
  );
}

export default About;
