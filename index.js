"use strict";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);

function App() {
  const isGreeting = false;
  const userName = "Nick";

  return <Greeting isGreeting={isGreeting} userName={userName} />;
}

function Greeting(props) {
  const { isGreeting, userName } = props;
  return (
    <div>
      {isGreeting ? "Hello" : "Goodbye"}, {userName}
    </div>
  );
}
