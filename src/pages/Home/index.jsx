import React from "react";

const Home = () => {
  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.body.classList = [theme];
  };

  return (
    <div>
      <div className="h-[1000px] bg-red pt-40">
        <h2 className="bg-primary">Hello</h2>
        <h2>Helo</h2>
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
    </div>
  );
};

export default Home;
