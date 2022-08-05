import React from "react";
import "./style.css";
import { setParas, setFormat } from "../../Redux/Text/textSlice";
import { useSelector, useDispatch } from "react-redux";

function Input() {
  const dispatch = useDispatch();
  const paras = useSelector((state) => state.text.paras);
  const format = useSelector((state) => state.text.format);

  return (
    <div className="input-container">
      <span className="paragraphs-span">
        Paragraphs Number
        <br />
        <input type="number" className="input-span" value={paras} onChange={(e) => dispatch(setParas(Number(e.target.value)))}/>       
      </span>

      <span className="include-span">
        Include HTML?
        <br />

        <select className="select" value={format} onChange={(e) => dispatch(setFormat(e.target.value))}>
          <option value="text">No</option>
          <option value="html">Yes</option>
        </select>
      </span>
    </div>
  );
}

export default Input;