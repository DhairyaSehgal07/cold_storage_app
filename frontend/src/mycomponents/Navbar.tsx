const Navbar = () => {
  return (
    <>
      <header className="relative flex h-[9.6rem] items-center justify-between bg-gray-200 px-[4.8rem]">
        <a href="#">
          <h1 className="text-5xl">Logo</h1>
        </a>

        <nav className="main-nav">
          <ul className="flex list-none items-center gap-[4.8rem]">
            <li>
              <a
                href="your-link-for-How-it-works"
                className="inline-block cursor-pointer font-custom  text-3xl font-medium no-underline duration-100 hover:text-primary active:underline"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="your-link-for-Testimonials"
                className="inline-block cursor-pointer font-custom   text-3xl font-medium no-underline duration-100 hover:text-primary active:underline"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="your-link-for-Pricing"
                className="inline-block cursor-pointer font-custom   text-3xl font-medium no-underline duration-100 hover:text-primary active:underline"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="your-link-for-Meals"
                className="inline-block cursor-pointer font-custom   text-3xl font-medium no-underline duration-100 hover:text-primary active:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="your-link-for-Sign-in"
                className="inline-block cursor-pointer  rounded-[9px]  bg-primary px-[2.4rem] py-[1.2rem] font-custom text-3xl font-bold no-underline duration-100  hover:bg-primary/90 hover:text-secondary"
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
