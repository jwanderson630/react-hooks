import React, { useRef, createContext, useMemo } from "react";
import useAbortableFetch from "use-abortable-fetch";
import Toggle from "./Toggle";
import { useTitleInput } from "./hooks/useTitleInput";
import Counter from "./Counter";
import { useSpring, animated } from "react-spring";

const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  // const [dishes, setDishes] = useState([]);
  const ref = useRef();

  const { data = [] } = useAbortableFetch(
    "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
  );

  // const fetchDishes = async () => {
  //   console.log("hi");
  //   await fetch(
  //     "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
  //   ).then(async data => await data.json().then(data => setDishes(data)));
  // };

  // useEffect(() => {
  //   fetchDishes();
  // }, []);

  // console.log(data);

  const title = "tseT skooH";
  const reverseWord = word => {
    console.log("Function run!");
    return word
      .split("")
      .reverse()
      .join("");
  };
  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <animated.h1
          onClick={() =>
            console.log(ref.current.className) ||
            ref.current.classList.add("fake-classs")
          }
          style={props}
        >
          {TitleReversed}
        </animated.h1>
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
        {data &&
          data.map(dish => (
            <article key={dish.name} className="dish-card dish-card--withImage">
              <h3>{dish.name}</h3>
              <p>{dish.desc}</p>
              <div className="ingredients">
                {dish.ingredients.map(ingredient => (
                  <span key={ingredient}>{ingredient}</span>
                ))}
              </div>
            </article>
          ))}
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
