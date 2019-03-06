import React, { useRef } from 'react'
import { useBodyScrollLock } from "./hooks/bodyScrollLock";
import { useOnClickOutside } from "./hooks/useOnClickOutside";


function DishForm(props) {

    const ref = useRef();

    useOnClickOutside(ref, props.setToggle);

    useBodyScrollLock();

    return (
        <div ref={ref} className="dish-card">
            <form>
                <div className="form-row">
                    <label htmlFor="name">Dish Name:</label>
                    <input type="text" id="name" />
                </div>
            </form>
        </div>
    )
}

export default DishForm
