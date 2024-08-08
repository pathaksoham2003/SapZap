import React from "react";

const Theme = () => {
  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.body.classList = [theme];
  };
  return (
    <div>
      <button onClick={() => changeTheme("dark")}>dark</button>
      <br />
      <button onClick={() => changeTheme("light")}>light</button>
      <br />
      <button onClick={() => changeTheme("hexa")}>hexa</button>
      <br />
      <button onClick={() => changeTheme("darcular")}>darcular</button>
      <br />
      <button onClick={() => changeTheme("jelly")}>jelly</button>
      <br />
      <button onClick={() => changeTheme("fusion")}>fusion</button>
    </div>
  );
};

export default Theme;
