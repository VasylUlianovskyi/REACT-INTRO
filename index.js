"use strict";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);

function App() {
  return <div>Hello React</div>;
}
