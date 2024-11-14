---
title: "Aanmeldingsformulier"
meta_title: "Aanmelding"
description: "Meld je aan voor trainingen en activiteiten bij Trudo Sport Club."
draft: false
---

<div style={{ textAlign: 'center', marginBottom: '20px' }}>
  <h1>Trudo Sport Club</h1>
  <div style={{ fontSize: '16px', color: '#666' }}>
    Vul het onderstaande formulier in om je aan te melden.
  </div>
</div>

<form id="registrationForm" className="registration-form" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Naam</label>
    <input type="text" id="name" name="name" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
  </div>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label htmlFor="age" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Leeftijd</label>
    <input type="number" id="age" name="age" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
  </div>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>E-mail</label>
    <input type="email" id="email" name="email" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
  </div>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label htmlFor="phone" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Telefoonnummer</label>
    <input type="tel" id="phone" name="phone" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
  </div>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Bericht of Extra Informatie</label>
    <textarea id="message" name="message" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '100px' }}></textarea>
  </div>
  <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#333', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Verzenden</button>
</form>
