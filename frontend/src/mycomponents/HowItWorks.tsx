const HowItWorks = () => {
  return (
    <>
      <section className=" px-[9.6px] mt-[6.4rem] ">
        <div className="max-w-[120rem] px-[3.2rem] mx-auto ">
          <span className="block text-[1.6rem] font-medium text-foreground uppercase mb-[1.6rem] tracking-[0.075rem]">
            How it works
          </span>
          <h2 className="font-bold text-[#333] tracking-tighter text-[4.4rem] mb-[3.2rem] ">
            Your daily dose of 4 simple steps
          </h2>
        </div>

        <div className="max-w-[120rem] px-[3.2rem] mx-auto grid grid-cols-2 gap-x-[6.4rem] gapy-y-[9.6rem] items-center ">
          <div className="step-text-box">
            <p className="text-[8.6rem] font-semibold text-gray-200 mb-[1.2rem] ">
              01
            </p>
            <h3 className="text-[3rem] font-semibold leading-5 mb-[3.2rem]">
              Tell us what you like (and what not)
            </h3>
            <p className="text-[1.8rem] leading-10 ">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          {/*YOU CAN CHANGE THE BEFORE AND AFTER ELEMENT IF REQUIRED */}
          <div
            className=" after:absolute after:content-[''] after:w-[50%] after:pb-[50%] after:bg-primary after:block after:rounded-full after:top-[16%]  after:z-[-1]
              before:z-[-1] before:absolute before:top-[5%] before:content-[''] before:w-[65%] before:pb-[65%] before:bg-secondary before:block before:rounded-full
              relative flex align-center justify-center "
          >
            <img
              src="./app-screen-1.png"
              className="w-[35%]"
              alt="iPhone app
            preferences selection screen"
            />
          </div>

          <div
            className=" after:absolute after:content-[''] after:w-[50%] after:pb-[50%] after:bg-primary after:block after:rounded-full after:top-[16%]  after:z-[-1]
              before:z-[-1] before:absolute before:top-[5%] before:content-[''] before:w-[65%] before:pb-[65%] before:bg-secondary before:block before:rounded-full
              relative flex align-center justify-center "
          >
            <img
              src="./app-screen-2.png"
              className="w-[35%]"
              alt="iPhone app
            meal approving plan screen"
            />
          </div>
          <div className="step-text-box">
            <p className="text-[8.6rem] font-semibold text-gray-200 mb-[1.2rem]">
              02
            </p>
            <h3 className="text-[3rem] font-semibold leading-5 mb-[3.2rem]">
              Approve your weekly meal plan
            </h3>
            <p className="text-[1.8rem] leading-10">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>

          <div>
            <p className="text-[8.6rem] font-semibold text-gray-200 mb-[1.2rem]">
              03
            </p>
            <h3 className="text-[3rem] font-semibold leading-5 mb-[3.2rem]">
              Receive meals at convenient time
            </h3>
            <p className="text-[1.8rem] leading-10">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div
            className=" after:absolute after:content-[''] after:w-[50%] after:pb-[50%] after:bg-primary after:block after:rounded-full after:top-[16%]  after:z-[-1]
              before:z-[-1] before:absolute before:top-[5%] before:content-[''] before:w-[65%] before:pb-[65%] before:bg-secondary before:block before:rounded-full
              relative flex align-center justify-center "
          >
            <img
              src="./app-screen-3.png"
              className="w-[35%]"
              alt="iPhone app
            delivery screen"
            />
          </div>

          {/* <div
            className=" after:absolute after:content-[''] after:w-[50%] after:pb-[50%] after:bg-primary after:block after:rounded-full after:top-[16%]  after:z-[-1]
              before:z-[-1] before:absolute before:top-[5%] before:content-[''] before:w-[65%] before:pb-[65%] before:bg-secondary before:block before:rounded-full
              relative flex align-center justify-center "
          >
            <img
              src="./app-screen-2.png"
              className="w-[35%]"
              alt="iPhone app
            meal approving plan screen"
            />
          </div>

          <div className="step-text-box">
            <p className="text-[8.6rem] font-semibold text-gray-200 mb-[1.2rem]">
              04
            </p>
            <h3 className="text-[3rem] font-semibold leading-5 mb-[3.2rem]">
              Get WhatsApp confirmation
            </h3>
            <p className="text-[1.8rem] leading-10">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
