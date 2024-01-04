const Footer = () => {
  return (
    <>
      <footer className="footer border-t border-solid border-gray-300 py-[12.8rem]">
        <div
          className="mx-auto grid max-w-[120rem] grid-cols-5 gap-x-[6.4rem]  gap-y-[9.6rem]  px-[3.2rem] "
          style={{
            gridTemplateColumns:
              "grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;",
          }}
        >
          <div className="logo-col flex flex-col">
            <a href="#" className="footer-logo">
              <img
                className="logo h-[2.2rem]"
                alt="Coldstorage logo"
                src="img/omnifood-logo.png"
              />
            </a>

            <ul className="social-links flex list-none gap-[2.4rem]">
              <li>
                <a
                  className="footer-link text-[1.6rem] text-foreground no-underline transition-all hover:text-[primary] active:text-[primary] "
                  href="#"
                  // ><ion-icon className="social-icon" name="logo-instagram"></ion-icon
                ></a>
              </li>
              <li>
                <a
                  className="footer-link text-[1.6rem] text-foreground no-underline transition-all hover:text-[primary] active:text-[primary]"
                  href="#"
                  // ><ion-icon className="social-icon" name="logo-facebook"></ion-icon
                ></a>
              </li>
              <li>
                <a
                  className="footer-link text-[1.6rem] text-foreground no-underline transition-all hover:text-[primary] active:text-[primary]"
                  href="#"
                  // ><ion-icon className="social-icon" name="logo-twitter"></ion-icon
                ></a>
              </li>
            </ul>

            <p className="copyright mt-auto text-[1.4rem] leading-[1.6] text-[#767676]">
              Copyright &copy; <span className="year">2027</span> by
              Coldstorage, Inc. All rights reserved.
            </p>
          </div>

          <div className="address-col">
            <p className="footer-heading mb-[4rem] text-[1.8rem] font-medium">
              Contact us
            </p>
            <address className="contacts font-serif text-[1.6rem] leading-[1.6] ">
              <p className="address mb-[2.4rem]">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]"
                  href="tel:415-201-6370"
                >
                  415-201-6370
                </a>
                <br />
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]"
                  href="mailto:hello@omnifood.com"
                >
                  hello@omnifood.com
                </a>
              </p>
            </address>
          </div>

          <nav className="nav-col">
            <p className="footer-heading mb-[4rem] text-[1.8rem] font-medium">
              Account
            </p>
            <ul className="footer-nav flex list-none flex-col gap-[2.4rem]">
              <li>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]
"
                  href="#"
                >
                  Create account
                </a>
              </li>
              <li>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]
"
                  href="#"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]
"
                  href="#"
                >
                  iOS app
                </a>
              </li>
              <li>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]
"
                  href="#"
                >
                  Android app
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading mb-[4rem] text-[1.8rem] font-medium">
              Company
            </p>
            <ul className="footer-nav flex list-none flex-col gap-[2.4rem]">
              <li>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]
"
                  href="#"
                >
                  About Cold-storage
                </a>
              </li>
              <li>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]
"
                  href="#"
                >
                  For Business
                </a>
              </li>
              <li>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]
"
                  href="#"
                >
                  Our partners
                </a>
              </li>
              <li>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]
"
                  href="#"
                >
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading mb-[4rem] text-[1.8rem] font-medium">
              Resources
            </p>
            <ul className="footer-nav flex list-none flex-col gap-[2.4rem]">
              <li>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]
"
                  href="#"
                >
                  Recipe directory{" "}
                </a>
              </li>
              <li>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]
"
                  href="#"
                >
                  Help center
                </a>
              </li>
              <li>
                <a
                  className="footer-link text-[1.6rem] text-[#767676] no-underline transition-all hover:text-[#555] active:text-[#555]
"
                  href="#"
                >
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
