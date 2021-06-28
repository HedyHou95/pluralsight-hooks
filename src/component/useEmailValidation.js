import React, { useState, useReducer } from "react";
import useInterval from "./useInterval";

export default function useEmailValidation(seconds) {
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const [emailValid, setEmailValid] = useState(false);

  const emailReducer = (state, action) => {
    state = action;
    setEmailValid(validateEmail(state));
    return action;
  };
  const [email, setEmail] = useReducer(emailReducer, "");
  
  const maxSeconds = 30;
  const [count, setCount] = useState(maxSeconds);

  useInterval(
    () => {
      setCount(count - 1);
    },
    count > 0 ? 1000 : null
  );

  const retObject = {setEmail, count, email, emailValid, setCount}
  return retObject;
}