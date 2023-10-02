import { useState } from "react";
import { helperHttp } from "../helpers/helperHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Enviando Formulario");
      setLoading(true);
      helperHttp()
        .post("https://formsubmit.co/ajax/ae905e011ccf6fa0f060fc0483d9e39a", {
          body: form,
          Headers: {
            "Content-Type": "application-json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 5000);
        });
    } else {
      return;
    }
  };

  return {
    errors,
    form,
    handleBlur,
    handleChange,
    handleSubmit,
    loading,
    response,
  };
};
