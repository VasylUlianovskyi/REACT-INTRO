"use strict";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);

function App() {
  const news = [
    {
      title: "Some news1",
      body: "Something hapenned1",
      isGood: false,
    },
    {
      title: "Some news2",
      body: "Something hapenned2",
      isGood: true,
    },
  ];
  return (
    <>
      <News newsItem={news[0]} />
      <News newsItem={news[1]} />
    </>
  );
}

function News(props) {
  const news = props.newsItem;
  const newsStyle = {
    border: `3px solid ${news.isGood ? "green" : "red"}`,
  };

  return (
    <article style={newsStyle}>
      <h2>{news.title}</h2>
      <p>{news.body}</p>
    </article>
  );
}
