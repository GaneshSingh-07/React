import { useState } from "react";

export const Question = (props) => {
  const { id, title, info } = props;
  const [des, setDes] = useState(false);
  return (
    <div className="flex w-full items-center justify-evenly">
      <p className="w-1/2 my-2">{title}
        <span className="block">{des ? info:""}</span>
      </p>
      <button
      onClick={()=>{setDes(!des)}}
        type="button"
        className="rounded-md bg-cyan-500 hover:bg-cyan-200 transition-colors duration-700"
      >
        Expand
      </button>
    </div>
  );
};
