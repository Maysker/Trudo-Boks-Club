// Define the Translation type directly in index.ts
interface Translation {
  full_name: string;
  full_name_placeholder: string;
  mail: string;
  mail_placeholder: string;
  message: string;
  message_placeholder: string;
  submit: string;
  read_more: string;
  categories: string;
  tags: string;
  share: string;
  related_post: string;
  page_not_found: string;
  page_not_found_content: string;
  back_to_home: string;
  message_sent_success: string;
  message_sent_error: string;
  contact_title: string;
  contact_meta_title: string;
  contact_description: string;
  form_title: string;
  form_description: string;
  age_label: string; 
  age_placeholder: string;
  phone_label: string; 
  phone_placeholder: string;
  name_label: string;
  email_label: string;
  message_label: string;
}

// Save the translations object with typing
const translations: Record<string, Translation> = {
  en: {
    full_name: "Volledige naam",
    full_name_placeholder: "Vul je volledige naam in",
    mail: "Werkend e-mailadres",
    mail_placeholder: "john.doe@email.com",
    message: "Nog iets anders?",
    message_placeholder: "Bericht hier invoeren...",
    submit: "Verzenden",
    read_more: "Lees meer",
    categories: "Categorieën",
    tags: "Tags",
    share: "Delen",
    related_post: "Gerelateerd bericht",
    page_not_found: "Pagina niet gevonden",
    page_not_found_content:
      "De pagina die u zoekt, is mogelijk verwijderd, de naam is gewijzigd of is tijdelijk niet beschikbaar.",
    back_to_home: "Terug naar de startpagina",
    message_sent_success: "Bericht succesvol verzonden!",
    message_sent_error: "Er is een fout opgetreden. Probeer het opnieuw.",
    contact_title: "Contact",
    contact_meta_title: "Neem contact met ons op",
    contact_description: "Neem gerust contact met ons op via het onderstaande formulier.",
    form_title: "Aanmeldingsformulier",
    form_description: "Vul het onderstaande formulier in om je aan te melden.",
    age_label: "Leeftijd", 
    age_placeholder: "Vul je leeftijd in",
    phone_label: "Telefoonnummer",
    phone_placeholder: "Vul je telefoonnummer in",
    name_label: "Naam",
    email_label: "E-mail",
    message_label: "Bericht of extra informatie",
  },
  fr: {
    full_name: "Nom complet",
    full_name_placeholder: "Entrez votre nom complet",
    mail: "Courriel",
    mail_placeholder: "Entrez votre adresse email",
    message: "Quelque chose d'autre ?",
    message_placeholder: "Écrivez votre message ici...",
    submit: "Soumettre",
    read_more: "Lire la suite",
    categories: "Catégories",
    tags: "Étiquettes",
    share: "Partager",
    related_post: "Article connexe",
    page_not_found: "Page introuvable",
    page_not_found_content:
      "La page que vous cherchez a peut-être été supprimée, renommée ou est temporairement indisponible.",
    back_to_home: "Retour à l'accueil",
    message_sent_success: "Message envoyé avec succès!",
    message_sent_error: "Une erreur s'est produite. Veuillez réessayer.",
    contact_title: "Contact",
    contact_meta_title: "Contactez-nous",
    contact_description: "N'hésitez pas à nous contacter via le formulaire ci-dessous.",
    form_title: "Formulaire d'inscription",
    form_description: "Veuillez remplir le formulaire ci-dessous pour vous inscrire.",
    age_label: "Âge",
    age_placeholder: "Entrez votre âge",
    phone_label: "Numéro de téléphone",
    phone_placeholder: "Entrez votre numéro de téléphone",
    name_label: "Nom",
    email_label: "E-mail",
    message_label: "Message ou informations supplémentaires",
  },
};

export default translations;
