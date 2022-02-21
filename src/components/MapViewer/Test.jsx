import React, { useState } from "react";

const Checkbox = ({ index = 0, label, value, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        id={`${label}-${index}`}
        name={label}
        value={value}
        checked={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

const Test = () => {
  const [options, setOptions] = useState([
    { option: "a", checked: false },
    { option: "b", checked: false },
    { option: "c", checked: false },
  ]);

  const handleChange = (indexSelected) => {
    const updatedOptions = options.map((item, index) => {
      if (index === indexSelected) item.checked = !item.checked;

      return item;
    });

    setOptions(updatedOptions);
  };

  return (
    <div className="mapboxgl-ctrl my-custom-control">
      {options.map(({ option, checked }, index) => (
        <Checkbox
          key={option}
          label={`My Value ${checked}`}
          value={checked}
          onChange={() => handleChange(index)}
        />
      ))}
    </div>
  );
};

export default Test;
