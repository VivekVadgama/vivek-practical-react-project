import { LinkdIn } from "../assets/icons/linkdin";
import { Mail } from "../assets/icons/mail";
import { Twitter } from "../assets/icons/twitter";

function SocialMedia() {
  return (
    <div className="social-block">
      <ul>
        <li>
          <a herf="#">
            <LinkdIn />
          </a>
        </li>
        <li>
          <a herf="#">
            <Twitter />
          </a>
        </li>
        <li>
          <a herf="#">
            <Mail />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
