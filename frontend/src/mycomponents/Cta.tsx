const Cta = () => {
  return (
    <>
      <section className="section-cta pb-[12.8rem] pt-[4.8rem] " id="cta">
        <div className="container mx-auto max-w-[120rem] px-[3.2rem] ">
          <div className="cta box-shadow-md grid grid-cols-[2fr,1fr] overflow-hidden  rounded-[11px]   bg-secondary focus:shadow-md focus:outline-none">
            <div className="cta-text-box  p-[4.8rem 6.4rem 6.4rem 6.4rem] text-[#45260a]">
              <h2 className="heading-secondary  mb-[3.2rem] text-[4.4rem] font-bold tracking-tighter text-foreground">
                Get your first meal for free!
              </h2>
              <p className="cta-text mb-[4.8rem] text-[1.8rem] leading-[1.8]">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>

              <form
                className="cta-form gap-y-[2.4rem grid grid-cols-1 gap-x-[3.2rem] md:grid-cols-2"
                name="sign-up"
              >
                <div>
                  <label className="mb-[1.2rem] block text-[1.6rem] font-semibold">
                    Full Name
                  </label>
                  <input
                    className="w-full rounded-[9px] border-none bg-[#fdf2e9] p-[1.2rem] font-sans text-[1.8rem] text-current placeholder-[#aaa] shadow-md"
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    name="full-name"
                    required
                  />
                </div>

                <div>
                  <label className="mb-[1.2rem] block text-[1.6rem] font-semibold">
                    Email address
                  </label>
                  <input
                    className="w-full rounded-[9px] border-none bg-[#fdf2e9] p-[1.2rem] font-sans text-[1.8rem] text-current placeholder-[#aaa] shadow-md"
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label className="mb-[1.2rem] block text-[1.6rem] font-semibold">
                    Where did you hear from us?
                  </label>
                  <select id="select-where" name="select-where" required>
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <button className="mr-[1.6rem] inline-block rounded-[9px] bg-primary px-[3.2rem] py-[1.6rem] font-custom text-[2rem] font-semibold text-foreground no-underline shadow duration-100 hover:bg-primary/90 ">
                  Sign up now
                </button>

                <input type="checkbox" />
                <input type="number" />
              </form>
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
