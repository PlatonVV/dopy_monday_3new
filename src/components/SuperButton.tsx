import React from "react";

type PropsType = {
  callBack: () => void;
  name: string;
};

export const SuperButton = (props: PropsType) => {
  const onClickButtonHandler = () => {
    props.callBack();
  };
  return <button onClick={onClickButtonHandler}>{props.name}</button>;
};
