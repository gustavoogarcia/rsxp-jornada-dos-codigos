import React, { useState } from 'react';

export default function Field({ label, name, value, emptymessage, errormessage, fields, setFields, type = 'text', required }) {
  const [inputInFocus, setInputInFocus] = useState(false);
  const labelOut = inputInFocus || (!!value && !!value.length);

  const inputChange = ({ target }) => {
    let newFields = Object.assign({}, fields);
    newFields[name] = { ...fields[name], error: false, errormessage: '', value: target.value };
    setFields(newFields);
  };

  const inputBlur = () => {
    let newFields = Object.assign({}, fields);
    let hasError = false;

    setInputInFocus(false);
    if (required && !value) {
      newFields[name] = { ...fields[name], error: true, errormessage: emptymessage };
      setFields(newFields);
      hasError = true;
    }
    if (hasError) { return }
  };

  return (
    <div className={`field ${type}Field ${name}Field ${labelOut ? 'inputInFocus' : ''}`}>
      <label className={`${value ? 'checked' : ''}`} htmlFor={name}>
        {label && label}
      </label>
      {!!errormessage && <p className="message">{errormessage}</p>}
      <input
        name={name}
        id={name}
        value={value}
        onFocus={() => setInputInFocus(true)}
        onBlur={() => inputBlur()}
        onChange={e => inputChange(e)}
        type={type}
      />
    </div>
  );
}
