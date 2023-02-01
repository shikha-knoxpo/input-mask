import React from "react";
import MaskedInput from "react-text-mask";

export const MaskComponent = () => {
  return (
    <>
      <div>
        <MaskedInput
          guide={false}
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
