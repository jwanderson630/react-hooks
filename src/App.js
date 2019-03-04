import React, { useRef } from "react";
import Toggle from "./Toggle";
import { useTitleInput } from "./hooks/useTitleInput";

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  console.log("ref:", ref.current);

  return (
    <div className="main-wrapper" ref={ref}>
      <h1
        onClick={() =>
          console.log(ref.current.className) ||
          ref.current.classList.add("fake-classs")
        }
      >
        Joe's tasty dishes
      </h1>
      <Toggle />
      <form
        onSubmit={e => {
          e.preventDefault();
          formSubmit(name, setName);
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <div>
          <button type="submit">Submit!</button>
        </div>
      </form>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log("Wow! Form submitted!", `Value: ${value}`);
  setValue("");
};

export default App;
