import React, { useState, useContext } from "react";
import { UserContext } from "./App";
import DishForm from "./DishForm"

// export default class Refactor extends Component {
//   state = {
//     isToggled: false
//   };

//   toggle = () => {
//     this.setState(state => {
//       return { isToggled: !state.isToggled };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }

const Toggle = () => {
  const context = useContext(UserContext);
  const [isToggled, setToggle] = useState(context.user);
  return (
    <div>
      {isToggled ? <DishForm setToggle={() => setToggle(false)} /> : <button
        onClick={() => {
          setToggle(!isToggled);
        }}
      >
        Open
      </button>}
    </div>
  );
};

export default Toggle;
