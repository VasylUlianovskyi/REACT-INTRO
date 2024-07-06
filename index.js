"use strict";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);

function App() {
  return (
    <>
      <Header />
      <main>
        <UserCard />
        <News />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="pageHeader">
      <img
        className="logoImg"
        src="https://cdn-icons-png.flaticon.com/512/5332/5332306.png"
        alt="logo"
      ></img>
      <h1 className="pageTitle">Page Title</h1>
    </header>
  );
}

function UserCard() {
  const user = {
    name: "Ivo",
    age: 19,
    isMale: false,
    imgSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    favoriteColor: "orange",
  };

  const nameStyle = {
    color: "red",
    backgroundColor: "green",
    border: "3px solid yellow",
  };

  const imgBorderStyle = {
    border: `2px solid ${user.favoriteColor}`,
  };

  const ageStyle = {
    color: user.age >= 18 ? "blue" : "green",
  };

  return (
    <article className="userCard">
      <h2 className="userName" style={nameStyle}>
        {user.name}
      </h2>
      <img
        className="userImg"
        style={imgBorderStyle}
        src={user.imgSrc}
        alt={user.name}
      />
      <p className="userAge" style={ageStyle}>
        {user.age}
      </p>
    </article>
  );
}

function News() {
  const news = { title: "Some news", body: "Something hapenned", isGood: true };

  const newsStyle = {
    color: news.isGood ? "green" : "red ",
  };

  return (
    <article style={newsStyle}>
      <h3>{news.title}</h3>
      <p>{news.body}</p>
    </article>
  );
}

function Footer() {
  return (
    <footer className="Footer">
      <a href="#">Contacts</a>
      <a href="#">About</a>
      <a href="#">FAQ</a>
    </footer>
  );
}
