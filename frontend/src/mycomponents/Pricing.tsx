const Pricing = () => {
  return (
    <>
      <section className="section-pricing py-[9.6rem]" id="pricing">
        <div className="container mx-auto max-w-[120rem] px-[3.2rem] ">
          <span className="subheading mb-[1.6rem] block text-[1.6rem] font-medium uppercase tracking-[0.075rem] text-foreground">
            Pricing
          </span>
          <h2 className="heading-secondary mb-[3.2rem]  text-[3.6rem] font-bold tracking-tighter text-[#333] md:text-[4.4rem]">
            Smart crop storage that's easy on the wallet
          </h2>
        </div>
        {/* HERE IS THE PROBLEM */}
        <div className="mx-auto mb-[4.8rem] grid max-w-[120rem] grid-cols-2 items-center  justify-center gap-x-[6.4rem] gap-y-[9.6rem] px-[3.2rem]">
          <div className="w-[75%] justify-self-end rounded-[11px] border-2 border-solid border-[#fdf2e9] p-[4.6rem]">
            <header className="plan-header mb-[4.8rem] text-center">
              <p className="plan-name mb-[3.2rem] text-2xl font-semibold uppercase tracking-[0.75] text-primary">
                Starter
              </p>
              <p className="plan-price mb-[1.6rem] text-[6.2rem] font-semibold text-foreground">
                <span className="mr-[0.8rem] text-[3rem] font-medium">$</span>
                399
              </p>
              <p className="plan-text text-[1.6rem] leading-[1.6] text-[#6f6f6f] ">
                per month.
              </p>
            </header>
            <ul className="list flex list-none flex-col gap-[1.6rem]">
              <li className="flex  list-item items-center gap-[1.6rem] text-[1.8rem] leading-[1.2]">
                {/* <ion-icon
                  className="w-[3rem] h-[3rem] text-[#e67e22]"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>1 crop per day</span>
              </li>
              <li className="flex  list-item items-center gap-[1.6rem] text-[1.8rem] leading-[1.2]">
                {/* <ion-icon
                  className="w-[3rem] h-[3rem] text-[#e67e22]"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Order from 11am to 9pm</span>
              </li>
              <li className="flex list-item  list-item items-center gap-[1.6rem] text-[1.8rem] leading-[1.2]">
                {/* <ion-icon
                  className="w-[3rem] h-[3rem] text-[#e67e22]"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Recovery is free</span>
              </li>
              <li className="flex list-item  list-item items-center gap-[1.6rem] text-[1.8rem] leading-[1.2]">
                {/* <ion-icon className="w-[3rem] h-[3rem] text-[#e67e22]" name="close-outline"></ion-icon> */}
              </li>
            </ul>
            <div className=" mt-[4.8rem] text-center">
              <a
                href="#"
                className="mr-[1.6rem] inline-block rounded-[9px] bg-primary px-[3.2rem] py-[1.6rem] font-custom text-[2rem] font-semibold text-foreground no-underline shadow duration-100 hover:bg-primary/90 "
              >
                Start storing
              </a>
            </div>
          </div>

          <div className="     relative w-[75%] rounded-[11px] border-2 border-solid border-[#fdf2e9] p-[4.8rem]">
            <header className="plan-header mb-[4.8rem] text-center">
              <p className="plan-name mb-[3.2rem] bg-secondary text-2xl font-semibold uppercase tracking-[0.75] text-primary">
                Complete
              </p>
              <p className="plan-price mb-[1.6rem] text-[6.2rem] font-semibold text-foreground">
                <span className="mr-[0.8rem] text-[3rem] font-medium">$</span>
                649
              </p>
              <p className="plan-text text-[1.6rem] leading-[1.6] text-[#6f6f6f] ">
                per month.
              </p>
            </header>
            <ul className="list  flex list-none flex-col gap-[1.6rem]">
              <li className="leading-1.2 flex list-item items-center gap-[1.6rem] text-[1.8rem]">
                {/* <ion-icon
                  className="w-[3rem] h-[3rem] text-[#e67e22]"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>
                  <strong>2 crops</strong> per day
                </span>
              </li>
              <li className="leading-1.2 flex list-item items-center gap-[1.6rem] text-[1.8rem]">
                {/* <ion-icon
                  className="w-[3rem] h-[3rem] text-[#e67e22]"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>
                  Order <strong>24/7</strong>
                </span>
              </li>
              <li className="leading-1.2 flex list-item items-center gap-[1.6rem] text-[1.8rem]">
                {/* <ion-icon
                  className="w-[3rem] h-[3rem] text-[#e67e22]"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Recovery is free</span>
              </li>
              <li className="leading-1.2 flex list-item items-center gap-[1.6rem] text-[1.8rem]">
                {/* <ion-icon
                  className="w-[3rem] h-[3rem] text-[#e67e22]"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Get access to all storages</span>
              </li>
            </ul>
            <div className="mt-[4.8rem] text-center">
              <a
                href="#"
                className="mr-[1.6rem] inline-block rounded-[9px] bg-primary px-[3.2rem] py-[1.6rem] font-custom text-[2rem] font-semibold text-foreground no-underline shadow duration-100 hover:bg-primary/90 "
              >
                Start storing
              </a>
            </div>
          </div>
        </div>

        <div className="gapy-y-[9.6rem] container       mx-auto mb-[4.8rem] grid grid  max-w-[120rem] items-center gap-x-[6.4rem]  px-[3.2rem]">
          <aside className="plan-details  text-center  text-[1.6rem] leading-[1.6]">
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
        </div>

        <div className="grid--4-cols gapy-y-[9.6rem] container        mx-auto mb-[4.8rem] grid grid max-w-[120rem] grid-cols-4 items-center gap-x-[6.4rem]  px-[3.2rem]">
          <div className="feature">
            {/* <ion-icon
              className="text-[#e67e22] h-[3.2rem] w-[3.2rem] bg-[#fdf2e9] mb-[3.2rem] p-[1.6rem] rounded-full"
              name="infinite-outline"
            ></ion-icon> */}
            <p className="feature-title mb-[1.6rem] text-[2.4rem] font-bold text-foreground">
              Purity Pact
            </p>
            <p className="feature-text text-[1.8rem] leading-[1.8]">
              The crop cold-storage app, a steadfast commitment to crop
              freshness, minimizing waste, and ensuring unparalleled quality.
            </p>
          </div>
          <div className="feature">
            {/* <ion-icon
              className="feature-icon"
              name="nutrition-outline"
            ></ion-icon> */}
            <p className="feature-title mb-[1.6rem] text-[2.4rem] font-bold text-foreground">
              Extended Shelf Life
            </p>
            <p className="feature-text text-[1.8rem] leading-[1.8]">
              Optimal temperature control in the app helps extend the shelf life
              of stored crops, reducing economic losses.
            </p>
          </div>
          <div className="feature">
            {/* <ion-icon className="feature-icon" name="leaf-outline"></ion-icon> */}
            <p className="feature-title mb-[1.6rem] text-[2.4rem] font-bold text-foreground">
              Loss Prevention:
            </p>
            <p className="feature-text text-[1.8rem] leading-[1.8]">
              By maintaining ideal storage conditions, the app prevents
              deterioration, contributing to reduced economic loss for farmers.
            </p>
          </div>
          <div className="feature">
            {/* <ion-icon className="feature-icon" name="pause-outline"></ion-icon> */}
            <p className="feature-title mb-[1.6rem] text-[2.4rem] font-bold text-foreground">
              Efficient Inventory
            </p>
            <p className="feature-text text-[1.8rem] leading-[1.8]">
              The app facilitates smart inventory management, aiding farmers in
              tracking, planning, and optimizing supply chain logistics.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
