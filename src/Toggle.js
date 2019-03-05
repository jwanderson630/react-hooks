import React, { useState, useContext } from "react";
import { UserContext } from "./App";

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
      <button
        onClick={() => {
          setToggle(!isToggled);
        }}
      >
        Toggle
      </button>
      {isToggled && <h2>Hello!</h2>}
    </div>
  );
};

export default Toggle;
