"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function ElementsPage({ params }: { params: { lang: string } }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [meta, setMeta] = useState({ title: "", description: "" });

  // Loading content from .md files
  useEffect(() => {
    const contentDir = path.join(process.cwd(), "src/content", params.lang, "pages");
    const filePath = path.join(contentDir, "elements.md");

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      setMeta({ title: data.title, description: data.description });
    }
  }, [params.lang]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_c6qpaiu",// Service-ID
        "template_65fa69w", // Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "fqHAWfA5_4ccWxzdm" // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div>
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Сообщение:
          <textarea name="message" value={formData.message} onChange={handleInputChange} />
        </label>
        <button type="submit">Отправить</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}
