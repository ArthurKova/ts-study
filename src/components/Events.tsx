import React, { useRef, useState } from "react";

export const Events = () => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="УПР"
      />
      <input type="text" ref={inputRef} placeholder="НЕУПР" />
      <button type="button" onClick={clickHandler}>
        button
      </button>
    </div>
  );
};
