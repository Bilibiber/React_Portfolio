import { useState } from "react";

function useForm(formValues) {
  const [values, setValues] = useState(formValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
}

export default useForm;
