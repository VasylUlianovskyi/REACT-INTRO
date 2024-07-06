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
      </main>
      <Footer />
    </>
  );
}

function UserCard() {
  const user = {
    name: "Ivo",
    age: 15,
    isMale: false,
    imgSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  };
  return (
    <article className="userCard">
      <h2 className="userName">{user.name}</h2>
      <img className="userImg" src={user.imgSrc} alt={user.name} />
      <p className="userAge">{user.age}</p>
    </article>
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

function Footer() {
  return (
    <footer className="Footer">
      <a href="#">Contacts</a>
      <a href="#">About</a>
      <a href="#">FAQ</a>
    </footer>
  );
}
