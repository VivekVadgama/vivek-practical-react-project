import { Logo } from "../../assets/icons/logo";
import { MenuIcon } from "../../assets/icons/menu-icon";
import { UserIcon } from "../../assets/icons/user";

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>;

function Header() {
  return (
    <header>
      <div className="header-wrap justify-space">
        <div className="left-block flex">
          <div className="logo-block">
            <a className="flex justify-center position-relative" href="/">
              <Logo />
            </a>
          </div>
          <div className="tagline-block flex align-center justify-center">
            <span>The Spotlight Experience</span>
          </div>
        </div>
        <div className="right-block flex align-center">
          <div className="user-block">
            <a className="button button-with-icon" href="">
              <UserIcon /> Lisa-Marie Carter
            </a>
          </div>
          <div className="menu-block">
            <span className="menu-icon flex pointer">
              <MenuIcon />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
