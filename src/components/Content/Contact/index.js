import './styles.scss';

function Contact() {
  return (
    <div id="contact" className="contact">
      <h2 className="contact__title">Me contacter</h2>
      <div className="contact__container">
        <h3 className="color_whitegrey" id="contact_title">A l'écoute d'opportunités</h3>
        <p className="color_darkgrey">Actuellement en fin formation, je suis dores et déjà à la recherche d'un poste dans le secteur. <br /> <br /> Discutons-en ! </p>
        <form>
          <input type="button" value="Envoyer un mail" onClick="window.location.href='mailto:contact.landrys@gmail.com'" />
        </form>
      </div>
    </div>

  );
}

// == Export
export default Contact;
