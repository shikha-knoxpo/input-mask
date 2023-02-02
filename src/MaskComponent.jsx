import React from "react";

import InputMask from "../src/components/InputMask/InputMask";

export const MaskComponent = () => {
  return (
    <>
      <div>
        <InputMask
          placeholder="____-_______-_____"
          mask={[
            /[1-9]/,
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
        />
      </div>
    </>
  );
};

export default MaskComponent;
