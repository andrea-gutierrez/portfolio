import style from '../professional-session.module.css';
import contactStyle from './contact.module.css';

export default function ContactPage() {
    return (
        <>
            <h1>Contact</h1>

            <div className={`${contactStyle["contact-section"]}`}>
                <h2>Get in Touch</h2>
                <p>Feel free to reach out to me via any of the following methods:</p>

                <div className={`${contactStyle["contact-item"]}`}>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:maribell426@hotmail.com">maribell426@hotmail.com</a>
                </div>

                <div className={`${contactStyle["contact-item"]}`}>
                    <i className="fa fa-phone"></i>
                    <a href="tel:+61435326510">+61435326510</a>
                </div>

                <div className={`${contactStyle["contact-item"]}`}>
                    <i className="fa fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/maribel-gutierrez/" target="_blank">LinkedIn Profile</a>
                </div>

                <div className={`${contactStyle["contact-item"]}`}>
                    <i className="fa fa-github"></i>
                    <a href="https://github.com/andrea-gutierrez" target="_blank">GitHub Profile</a>
                </div>

                <h2>Send a Message</h2>
                <form className={`${contactStyle["contact-form"]}`} action="https://formspree.io/f/{your-form-id}"
                      method="POST">
                    <input type="text" name="name" placeholder="Your Name" required/>
                    <input type="email" name="_replyto" placeholder="Your Email" required/>
                    <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}