import * as React from "react";

export interface IMyCompProps {
  name: string;
}

const MyComp = (props: IMyCompProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default MyComp;
