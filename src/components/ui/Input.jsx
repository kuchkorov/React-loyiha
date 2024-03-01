import { useState } from "react";

function Input({ label, state, setState, type = 'text' }) {
  const [value, setValue] = useState(state);
  return (
    <div className="form-floating mb-2">
      <input
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="form-control"
        id="floatingInput"
        placeholder={label}
      />
      <label for="floatingInput">{label}</label>
    </div>
  );
}

export default Input;
