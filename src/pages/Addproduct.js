import { React, useState, useRef } from "react";
import CustomInput from "../components/CustomInput.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Addproduct = () => {
  const [desc, setDesc] = useState("");
  const quillRef = useRef(null);

  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <div>
      <h3 className="mb-4">Add Product</h3>
      <div>
        <form>
          <CustomInput type="text" label="Enter Product Title" />
          <div className="mb-3">
            {" "}
            <ReactQuill
              ref={quillRef}
              theme="snow"
              value={desc}
              onChange={(evt) => {
                handleDesc(evt);
              }}
            />
          </div>
          <CustomInput type="number" label="Enter Product Price" />

          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
