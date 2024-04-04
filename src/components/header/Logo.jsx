
import Icon from '../../assets/icons/logo.svg'

const Logo = () => {
    return (
        <div className="lg:flex hidden">
        <a aria-label="Home" href="#">
          <img
            src={Icon}
            alt="Logo"
            className="h-6 w-auto"
          />
        </a>
      </div>
    );
};

export default Logo;