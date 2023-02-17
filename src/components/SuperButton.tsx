import React from "react";

type PropsType = {
  callBack: () => void;
  name: string;
};

const onClickHandler = (props: PropsType) => {
  callback();
};

export const SuperButton = () => {
  return <button onClick={onClickHandler}>{props.name}</button>;
};
