import React from "react";

import PropsType from "prop-types";

const handleAdd = (event) => {
  console.log("+1", event);
};

export const CounterApp = ({ value }) => {

  return (
    <>
      <h1>Counter App</h1>
      <h2> {value} </h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropsType.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};
