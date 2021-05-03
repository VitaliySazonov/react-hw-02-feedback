import React from "react";

let Section = ({title, children}) => {
  return (
    <section>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
};

export default Section;
