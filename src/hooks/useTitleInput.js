import { useState, useEffect, useDebugValue } from "react";

export function useTitleInput(initialValue) {
  const [value, setValue] = useState("");
  useDebugValue(value);
  useEffect(() => {
    document.title = value;
  });
  return [value, setValue];
}
