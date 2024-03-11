import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadingTitle from "../../shared/components/heading-title";
import "./contact.css";
import {
  faGithub,
  faLinkedin,
  faTelegram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCopy,
  faClipboard,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Contact = () => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);
  // This is the function we wrote earlier
  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };
  return (
    <div className="contacts" id="contacts">
      <HeadingTitle
        title="Get in touch"
        description="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
      />
      <div className="container">
        <div className="contact">
          <div className="mail">
            <FontAwesomeIcon className="mail-phone-icons" icon={faEnvelope} />
            <a className="heading-h2" href="mailto:nakqeeb@gmail.com">
              nakqeeb@gmail.com
            </a>
            {!isEmailCopied && (
              <FontAwesomeIcon
                className="mail-phone-icons"
                style={{ cursor: "pointer" }}
                icon={faCopy}
                onClick={async () => {
                  await copyTextToClipboard("nakqeeb@gmail.com");
                  setIsEmailCopied(true);
                  setIsPhoneCopied(false);
                }}
              />
            )}
            {isEmailCopied && (
              <FontAwesomeIcon
                className="mail-phone-icons"
                icon={faClipboard}
              />
            )}
          </div>
          <div className="phone">
            <FontAwesomeIcon className="mail-phone-icons" icon={faPhone} />
            <a className="heading-h2" href="tel:+967780004781">
              +967 780004781
            </a>
            {!isPhoneCopied && (
              <FontAwesomeIcon
                className="mail-phone-icons"
                style={{ cursor: "pointer" }}
                icon={faCopy}
                onClick={async () => {
                  await copyTextToClipboard("+967780004781");
                  setIsPhoneCopied(true);
                  setIsEmailCopied(false);
                }}
              />
            )}
            {isPhoneCopied && (
              <FontAwesomeIcon
                className="mail-phone-icons"
                icon={faClipboard}
              />
            )}
          </div>
        </div>
        <div className="social">
          <p className="body2">You may also find me on these platforms!</p>
          <div className="social-icons">
            {/* <a href="https://wa.me/967780004781" target="_blank">
              <FontAwesomeIcon className="icon" icon={faWhatsapp} />
            </a> */}
            <a href="https://telegram.me/nakqeeb" target="_blank">
              <FontAwesomeIcon className="icon" icon={faTelegram} />
            </a>
            <a href="https://github.com/nakqeeb" target="_blank">
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
            {/* <a href="https://x.com/nakqeeb" target="_blank">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a> */}
            <a href="https://www.linkedin.com/in/nakqeeb" target="_blank">
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
