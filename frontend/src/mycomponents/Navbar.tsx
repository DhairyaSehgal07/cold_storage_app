const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-gray-200 h-[9.6rem] px-[4.8rem] relative">
        <a href="#">
          <h1 className="text-5xl">Logo</h1>
        </a>

        <nav className="main-nav">
          <ul className="list-none flex items-center gap-[4.8rem]">
            <li>
              <a
                href="your-link-for-How-it-works"
                className="inline-block no-underline font-custom  font-medium text-3xl duration-100 cursor-pointer hover:text-primary active:underline"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="your-link-for-Meals"
                className="inline-block no-underline font-custom   font-medium text-3xl duration-100 cursor-pointer hover:text-primary active:underline"
              >
                Meals
              </a>
            </li>
            <li>
              <a
                href="your-link-for-Testimonials"
                className="inline-block no-underline font-custom   font-medium text-3xl duration-100 cursor-pointer hover:text-primary active:underline"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="your-link-for-Pricing"
                className="inline-block no-underline font-custom   font-medium text-3xl duration-100 cursor-pointer hover:text-primary active:underline"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="your-link-for-Sign-in"
                className="inline-block no-underline  font-custom  font-bold rounded-[9px] text-3xl duration-100 cursor-pointer bg-primary py-[1.2rem] px-[2.4rem]  hover:bg-primary/90 hover:text-secondary"
              >
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
