import * as AiIcons from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <section className="header" id="home">
      <p>Hi,</p>
      <h1>Mohammad Vino Arystio</h1>
      <h2>Web Developer</h2>
      <div>
        <Link
          href="https://github.com/movinoary"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <AiIcons.AiFillGithub className="github" />
          </button>
        </Link>
        <Link
          href="mailto:mohvinoary@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <AiIcons.AiOutlineGoogle className="google" />
          </button>
        </Link>
        <Link
          href="https://api.whatsapp.com/send/?phone=6285156611224&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <AiIcons.AiOutlineWhatsApp className="whatsapp" />
          </button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/moh-vino-arystio/"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <AiIcons.AiFillLinkedin className="linkedin" />
          </button>
        </Link>
        <Link
          href="https://vinoarystio.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <AiIcons.AiFillMediumCircle className="github" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Header;
