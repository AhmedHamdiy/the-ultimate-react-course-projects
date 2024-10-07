import { useEffect, useRef } from "react";

export default function useClickOutside(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(function () {}, [listenCapturing, handler]);
  return ref;
}
