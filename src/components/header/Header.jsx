import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
    return (
        <header className="fixed inset-y-0 left-0 z-50 contents border-r border-zinc-900/10 lg:block w-72 xl:w-80 overflow-y-auto px-6 pt-4 pb-8 ">
          {/* Logo start */}
            <Logo />
          {/* Logo end */}
          {/* Header  */}
          <div className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] backdrop-blur-sm transition px-4 sm:px-6 lg:left-72 xl:left-80">
            <div className="flex h-14 items-center justify-between gap-12">
              <div className=" absolute inset-x-0 top-full h-px bg-zinc-900/10 transition"></div>
              <div className="hidden lg:block max-w-md lg:flex-auto">
                <Search />
              </div>
              {/* Mobile responsive header start */}
              <div className="flex flex-grow items-center gap-5 lg:hidden">
                <button className="flex rounded-md justify-center items-center gap-2 hover:bg-zinc-900 transition">
                  <img
                    src="../src/assets/icons/hamburger.svg"
                    alt="search icon"
                    className=" h-6 w-6"
                  />
                </button>
                <a aria-label="Home" href="#">
                  <img
                    src="../src/assets/icons/logo.svg"
                    alt="Logo"
                    className="h-6 w-auto"
                  />
                </a>
              </div>
              {/* Mobile responsive header end */}
              <figure className="lg:hidden">
                <img
                  className="w-6 h-6"
                  src="../src/assets/icons/search.svg"
                  alt="search icon"
                />
              </figure>
              <figure>
                <img
                  src="../src/assets/icons/light-icon.svg"
                  alt="Light icon"
                  className=" w-6 h-6"
                />
              </figure>
            </div>
          </div>

          {/* Header end */}
          {/* Sidebar start */}
          <nav className=" hidden mt-10 lg:block">
            <ul className=" border-l border-transparent">
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Interduction</span>
                </a>
                <ul>
                  <li>
                    <a
                      className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                      href="#"
                    >
                      Guides
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                      href="#"
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                      href="#"
                    >
                      Test
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Quickstart</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>SDKs</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Authentication</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Pagination</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Errors</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Webhooks</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* Mobile responsive nav start */}
          <div className="relative hidden">
            <nav className="p-10 w-full h-screen bg-gray-100 fixed z-60">
              <img
                className=" absolute top-10 right-10 w-6 h-6"
                src="../src/assets/icons/close.svg"
                alt="close icon"
              />
              <ul>
                <li>
                  <a
                    className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                    href="#"
                  >
                    <span>Interduction</span>
                  </a>
                  <ul>
                    <li>
                      <a
                        className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                        href="#"
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                        href="#"
                      >
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                        href="#"
                      >
                        Test
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                    href="#"
                  >
                    <span>Quickstart</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                    href="#"
                  >
                    <span>SDKs</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                    href="#"
                  >
                    <span>Authentication</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                    href="#"
                  >
                    <span>Pagination</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                    href="#"
                  >
                    <span>Errors</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                    href="#"
                  >
                    <span>Webhooks</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile responsive nav end */}
          {/* Sidebar end */}
        </header>
    );
};

export default Header;