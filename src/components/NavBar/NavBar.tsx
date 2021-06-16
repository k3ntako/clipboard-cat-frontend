import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav>
      <a href={process.env.REACT_APP_COPY_CAT_WEB_URL}>CopyCat</a>
    </nav>
  );
};
