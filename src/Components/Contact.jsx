import React from "react";
import "../styles.css";

function Contact() {
    return (
        <section className="contact">
            <h2>Contactos</h2>
            <p>Espero tu contacto para discutir tu proximo proyecto</p>

            <form>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" required />

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Contact;
