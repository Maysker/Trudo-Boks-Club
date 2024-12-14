"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import emailjs from "@emailjs/browser";
import translations from "@/i18n";

const Contact = ({ params }: { params: { lang: string } }) => {
  const lang = params.lang || "en";
  const t = translations[lang] || translations.en;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
          message: formData.message,
        },
        "fqHAWfA5_4ccWxzdm" // Public Key/EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus(t.message_sent_success);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus(t.message_sent_error);
        }
      );
  };

  return (
    <>
      <SeoMeta
        title={t.contact_title}
        meta_title={t.contact_meta_title}
        description={t.contact_description}
      />
      <PageHeader title={t.contact_title}>
        <Breadcrumbs lang={lang} />
      </PageHeader>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="form-label">
                    {t.full_name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-input w-full"
                    placeholder={t.full_name_placeholder}
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="form-label">
                    {t.mail} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="form-input w-full"
                    placeholder={t.mail_placeholder}
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">
                    {t.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input w-full"
                    placeholder={t.message_placeholder}
                    rows={8}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  {t.submit}
                </button>
              </form>
              {status && (
                <p
                  className={`mt-4 text-center ${
                    status === t.message_sent_success ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
