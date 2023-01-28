import React from "react";

function Footer() {
  // for dynamic change
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p> Made with ❤️ by Sujit </p>
    </footer>
  );
}

export default Footer;
