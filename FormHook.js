import { useState, useEffect } from "react";

export const useForm = (formObj, validateFn, submitFn) => {
  const [data, setData] = useState(formObj);
  const [errors, setErrors] = useState(formObj);

  useEffect(() => {
    setErrors(validateFn(data));
  }, [data, validateFn]);

  const handleChange = e => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitFn(data);
  };

  return {
    data,
    errors,
    handleChange,
    handleSubmit,
    isDisabled: Object.keys(errors).length !== 0
  };
};
