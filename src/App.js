import React, {
  useRef,
  createContext,
  useMemo,
  useEffect,
  useState
} from "react";
import Toggle from "./Toggle";
import { useTitleInput } from "./hooks/useTitleInput";
import Counter from "./Counter";

const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const [dishes, setDishes] = useState([]);
  const ref = useRef();

  const reverseWord = word => {
    console.log("Function run!");
    return word
      .split("")
      .reverse()
      .join("");
  };

  const fetchDishes = async () => {
    console.log("hi");
    await fetch(
      "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
    ).then(async data => await data.json().then(data => setDishes(data)));
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const title = "tseT skooH";

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
        {dishes.map(dish => (
          <article className="dish-card dish-card--withImage">
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className="ingredients">
              {dish.ingredients.map(ingredient => (
                <span>{ingredient}</span>
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
