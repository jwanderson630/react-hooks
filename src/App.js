import React, { useRef, createContext, useMemo } from "react";
import Toggle from "./Toggle";
import { useTitleInput } from "./hooks/useTitleInput";
import Counter from "./Counter";

const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  const reverseWord = word => {
    console.log("Function run!")
    return word.split("").reverse().join("");
  }

  const title = "Hooks Test";

  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1
          onClick={() =>
            console.log(ref.current.className) ||
            ref.current.classList.add("fake-classs")
          }
        >
          {TitleReversed}
        </h1>
        <Counter />
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
    </UserContext.Provider>
  );
};

const formSubmit = (value, setValue) => {
  console.log("Wow! Form submitted!", `Value: ${value}`);
  setValue("");
};


export { UserContext };
export default App;
