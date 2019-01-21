import * as React from "react";

export interface IMyClassProps {
  name?: string;
  isMarried: boolean;
}

export interface IMyclassState {
  age: number;
}

class MyClass extends React.Component<IMyClassProps, IMyclassState> {
  public static defaultProps: Partial<IMyClassProps> = {
    name: "techsith"
  };
  public state = {
    age: 21
  };
  public render() {
    return (
      <div>
        <h1>
          My name is {this.props.name} and I am {this.state.age} years old
        </h1>
      </div>
    );
  }
}

export default MyClass;
