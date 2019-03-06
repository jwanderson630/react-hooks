import { useEffect } from "react";

export function useOnClickOutside(ref, handler) {
    useEffect(() => {

        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handler();
        };

        window.addEventListener("mousedown", listener);
        window.addEventListener("touchstart", listener);

        return function cleanUp() {
            window.removeEventListener("mousedown", listener);
            window.removeEventListener("touchstart", listener);
        };
    }, [])
};