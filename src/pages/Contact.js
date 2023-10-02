import React from "react";
import { Loader } from "../components/Loader";
import validationsForm from "../helpers/helperValidations";
import { useForm } from "../Hooks/useForm";
import "../styles/Form.css";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

export const Contact = ({ data }) => {
  const {
    errors,
    form,
    handleBlur,
    handleChange,
    handleSubmit,
    loading,
    response,
  } = useForm(initialForm, validationsForm);
  return (
    <div className="contact">
      <h3 className={data}>PONTE EN CONTACTO CONMIGO</h3>
      <div className="contact-form-container">
        {loading ? (
          <Loader />
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Escribe tu nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={form.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Escribe tu email"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={form.email}
            />
            <input
              type="text"
              name="subject"
              placeholder="Asunto a tratar"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={form.subject}
            />
            <textarea
              name="comments"
              cols="50"
              rows="5"
              placeholder="Escribe tus comentarios"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={form.comments}
            ></textarea>
            <input type="submit" value="ENVIAR" />
          </form>
        )}
      </div>
      {/* {loading && <Loader />} */}
    </div>
  );
};
