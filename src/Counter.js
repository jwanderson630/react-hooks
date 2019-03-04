import React, { useReducer } from 'react'

function Counter() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            case "reset":
                return { count: 0 }
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div style={{ display: "flex", flexWrap: "wrap", margin: "10px 0", width: "150px", justifyContent: "space-between" }}>
            <button style={{ width: "25px", marginBottom: "10px", display: "grid", alignContent: "center", justifyContent: "center", padding: 0 }} onClick={() => {
                dispatch({ type: "increment" })
            }}>+</button>
            <div style={{ width: "50px", backgroundColor: "white", margin: "0 5px 10px", display: "grid", alignContent: "center", justifyContent: "center", borderRadius: "4px" }}>{state.count}</div>
            <button style={{ width: "25px", marginBottom: "10px", padding: 0 }} onClick={() => {
                dispatch({ type: "decrement" })
            }}>-</button>
            <button style={{ width: "100%", flex: "2 0 100%", display: "grid", alignContent: "center", justifyContent: "center" }} onClick={() => {
                dispatch({ type: "reset" })
            }}>Reset</button>
        </div>

    )
}

export default Counter
