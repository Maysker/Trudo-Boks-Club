---
title: "Formulaire d'inscription"
meta_title: "Inscription"
description: "Inscrivez-vous aux entraînements et activités du Trudo Sport Club."
draft: false
---

<div style={{ textAlign: 'center', marginBottom: '20px' }}>
  <h1>Trudo Sport Club</h1>
  <div style={{ fontSize: '16px', color: '#666' }}>
    Veuillez remplir le formulaire ci-dessous pour vous inscrire.
  </div>
</div>

<form id="registrationForm" className="registration-form" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nom</label>
    <input type="text" id="name" name="name" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
  </div>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label htmlFor="age" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Âge</label>
    <input type="number" id="age" name="age" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
  </div>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>E-mail</label>
    <input type="email" id="email" name="email" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
  </div>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label htmlFor="phone" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Numéro de téléphone</label>
    <input type="tel" id="phone" name="phone" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
  </div>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Message ou Informations supplémentaires</label>
    <textarea id="message" name="message" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '100px' }}></textarea>
  </div>
  <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#333', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Envoyer</button>
</form>
