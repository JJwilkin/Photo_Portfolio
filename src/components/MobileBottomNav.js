import React from "react";
import { Link } from "react-router-dom";

export default function MobileBottomNav(props) {
  const { name, route } = props;
  return (
    <div>
      <p style={{ color: "grey", margin: 0 }}>Next</p>
      <h3 style={{ marginTop: 0, marginBottom: 13 }}>{name}</h3>
      <Link to={route}>
        <p style={{ color: "grey", textDecoration: "underline" }}>
          View Collection &nbsp;&#10230;
        </p>
      </Link>
      <Link to="/contact">
        <p style={{ textAlign: "left", marginTop: 50 }}>Contact Me +</p>
      </Link>
    </div>
  );
}
