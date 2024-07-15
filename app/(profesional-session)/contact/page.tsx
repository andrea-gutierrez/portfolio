import contactStyle from './contact.module.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


export default function ContactPage() {
    return (
        <>
            <h1>Contact</h1>

            <div className={`${contactStyle["contact-section"]}`}>
                <h2>Get in Touch</h2>
                <p>Feel free to reach out to me via any of the following methods:</p>

                <div className={`${contactStyle["contact-item"]} mt-2`}>
                    <FontAwesomeIcon icon={faEnvelope} width={15} height={15}/>
                    <a href="mailto:maribell426@hotmail.com">maribell426@hotmail.com</a>
                </div>

                <div className={`${contactStyle["contact-item"]}`}>
                    <FontAwesomeIcon icon={faPhone} width={15} height={15}/>
                    <a href="tel:+61435326510">+61435326510</a>
                </div>

                <div className={`${contactStyle["contact-item"]}`}>
                    <FontAwesomeIcon icon={faLinkedin} width={15} height={15}/>
                    <a href="https://www.linkedin.com/in/maribel-gutierrez/" target="_blank">LinkedIn Profile</a>
                </div>

                <div className={`${contactStyle["contact-item"]}`}>
                    <FontAwesomeIcon icon={faGithub} width={15} height={15}/>
                    <a href="https://github.com/andrea-gutierrez" target="_blank">GitHub Profile</a>
                </div>
            </div>
        </>
    )
}