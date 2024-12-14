"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import translations from "@/i18n";
import { useParams } from "next/navigation";

export default function RegistrationForm() {
  const { lang } = useParams(); 
  const currentLang = Array.isArray(lang) ? lang[0] : lang || "en"; 
  const t = translations[currentLang]; 

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_c6qpaiu", // Service ID
        "template_65fa69w", // Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          age: formData.age,
          phone: formData.phone,
          message: formData.message,
        },
        "fqHAWfA5_4ccWxzdm" // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus(t.message_sent_success); 
          setFormData({ name: "", age: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus(t.message_sent_error); 
        }
      );
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h1 style={{ textAlign: "center" }}>{t.form_title}</h1>
      <p style={{ textAlign: "center", fontSize: "16px", color: "#666" }}>{t.form_description}</p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
              textAlign: "left", 
            }}
          >
            {t.name_label}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
              textAlign: "left",
            }}
          >
            {t.age_label}
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
              textAlign: "left",
            }}
          >
            {t.email_label}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
              textAlign: "left",
            }}
          >
            {t.phone_label}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
              textAlign: "left",
            }}
          >
            {t.message_label}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              minHeight: "100px",
            }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#333",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {t.submit}
        </button>
      </form>
      <p style={{ color: "green", marginTop: "20px", textAlign: "center" }}>
    {status}
  </p>
    </div>
  );
}
