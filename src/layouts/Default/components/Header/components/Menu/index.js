import React, { useState, useEffect } from "react";

import { URLParser } from "~/common";

import { Nav, Title, Link } from "./styles";

function Menu(props) {
  const { location } = props;
  const [active, setActive] = useState(URLParser(props.location));

  useEffect(() => {
    setActive(URLParser(location));
  }, [location]);

  return (
    <Nav>
      <Title active={active === ""}>
        <Link to="/">Dashboard</Link>
      </Title>

      <Title active={active === "questionaries"}>
        <Link to="/questionaries">Questionarios</Link>
      </Title>

      <Title active={active === "pacients"}>
        <Link to="/pacients">Pacientes</Link>
      </Title>
    </Nav>
  );
}

export default Menu;
