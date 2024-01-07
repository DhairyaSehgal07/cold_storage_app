const HowItWorks = () => {
  const isMobile = window.innerWidth < 640;
  return (
    <>
      <section className=" mt-[6.4rem] px-[9.6px] ">
        <div className="mx-auto max-w-[120rem] px-[3.2rem] ">
          <span className="lg: mb-[1.6rem] block text-[1.6rem] font-medium uppercase tracking-[0.075rem] text-foreground ">
            How it works
          </span>
          <h2 className="mb-[3.2rem] text-[3.6rem] font-bold tracking-tighter text-[#333] lg:mb-0 lg:text-[4.4rem]  ">
            Your daily dose of 3 simple steps
          </h2>
        </div>

        {isMobile ? (
          <>
            <div className="mx-auto grid max-w-[120rem] grid-cols-1 items-center gap-y-[9.6rem] px-[3.2rem]">
              {/* Image comes first */}
              <div
                className=" align-center relative flex justify-center before:absolute before:top-[5%] before:z-[-1] before:block  before:w-[65%]
    before:rounded-full before:bg-secondary before:pb-[65%] before:content-[''] after:absolute after:top-[16%] after:z-[-1] after:block after:w-[50%]
    after:rounded-full after:bg-primary after:pb-[50%] after:content-[''] "
              >
                <img
                  src="./app-screen-1.png"
                  className="w-[40%] translate-y-[2.4rem] lg:translate-y-0"
                  alt="iPhone app preferences selection screen"
                />
              </div>

              {/* Text comes next */}
              <div className="step-text-box">
                <p className="mb-[1.2rem] text-[8.6rem] font-semibold text-gray-200">
                  01
                </p>
                <h3 className="mb-[3.2rem] text-[2.4rem] font-semibold leading-10 tracking-[-0.5px] lg:text-[3rem]">
                  Register with your store-Admin
                </h3>
                <p className="text-[1.84rem] leading-loose">
                  Start your farming journey by swiftly registering with a
                  dedicated store admin. This personalized connection unlocks
                  tailored features, ensuring efficient communication and
                  setting the stage for a productive farming experience.
                </p>
              </div>

              <div
                className=" align-center relative flex justify-center before:absolute before:top-[5%] before:z-[-1] before:block  before:w-[65%]
    before:rounded-full before:bg-secondary before:pb-[65%] before:content-[''] after:absolute after:top-[16%] after:z-[-1] after:block after:w-[50%]
    after:rounded-full after:bg-primary after:pb-[50%] after:content-[''] "
              >
                <img
                  src="./app-screen-2.png"
                  className="w-[40%] translate-y-[2.4rem] lg:translate-y-0"
                  alt="iPhone app preferences selection screen"
                />
              </div>

              {/* Text comes next */}
              <div className="step-text-box">
                <p className="mb-[1.2rem] text-[8.6rem] font-semibold text-gray-200">
                  02
                </p>
                <h3 className="mb-[3.2rem] text-[2.4rem] font-semibold leading-10 tracking-[-0.5px] lg:text-[3rem]">
                  fill in details about the crop
                </h3>
                <p className="text-[1.84rem] leading-loose">
                  Next, farmers input crucial details about themselves and the
                  stored crop. This ensures accurate records and personalized
                  assistance, contributing to efficient crop management tailored
                  to individual needs.
                </p>
              </div>

              <div
                className=" align-center relative flex justify-center before:absolute before:top-[5%] before:z-[-1] before:block  before:w-[65%]
    before:rounded-full before:bg-secondary before:pb-[65%] before:content-[''] after:absolute after:top-[16%] after:z-[-1] after:block after:w-[50%]
    after:rounded-full after:bg-primary after:pb-[50%] after:content-[''] "
              >
                <img
                  src="./app-screen-3.png"
                  className="w-[40%] translate-y-[2.4rem] lg:translate-y-0"
                  alt="iPhone app preferences selection screen"
                />
              </div>

              {/* Text comes next */}
              <div className="step-text-box">
                <p className="mb-[1.2rem] text-[8.6rem] font-semibold text-gray-200">
                  03
                </p>
                <h3 className="mb-[3.2rem] text-[2.4rem] font-semibold leading-10 tracking-[-0.5px] lg:text-[3rem]">
                  Receive confirmation on WhatsApp
                </h3>
                <p className="text-[1.84rem] leading-loose">
                  Upon successful storage of your crops, you'll instantly
                  receive a confirmation on WhatsApp. This ensures swift
                  acknowledgment and provides peace of mind, allowing you to
                  proceed confidently with the knowledge that your harvest is
                  securely stored and ready for future use.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mx-auto grid max-w-[120rem] grid-cols-2 items-center gap-x-[6.4rem] gap-y-[9.6rem] px-[3.2rem] ">
              <div className="step-text-box">
                <p className="mb-[1.2rem] text-[8.6rem] font-semibold text-gray-200 ">
                  <span className="cursor-pointer hover:text-primary/85">
                    01
                  </span>
                </p>
                <h3 className="mb-[3.2rem] text-[2.4rem] font-semibold leading-10 tracking-[-0.5px] lg:text-[3rem]">
                  Register with your store-Admin
                </h3>
                <p className="text-[1.84rem] leading-loose ">
                  Start your farming journey by swiftly registering with a
                  dedicated store admin. This personalized connection unlocks
                  tailored features, ensuring efficient communication and
                  setting the stage for a productive farming experience.
                </p>
              </div>
              {/*YOU CAN CHANGE THE BEFORE AND AFTER ELEMENT IF REQUIRED */}
              <div
                className=" align-center relative flex justify-center before:absolute before:top-[5%] before:z-[-1] before:block  before:w-[65%]
              before:rounded-full before:bg-secondary before:pb-[65%] before:content-[''] after:absolute after:top-[16%] after:z-[-1] after:block after:w-[50%]
              after:rounded-full after:bg-primary after:pb-[50%] after:content-[''] "
              >
                <img
                  src="./app-screen-1.png"
                  className="trasnlate-y-[2.4rem] w-[35%] lg:translate-y-0"
                  alt="iPhone app
            preferences selection screen"
                />
              </div>

              <div
                className=" align-center relative flex justify-center before:absolute before:top-[5%] before:z-[-1] before:block  before:w-[65%]
              before:rounded-full before:bg-secondary before:pb-[65%] before:content-[''] after:absolute after:top-[16%] after:z-[-1] after:block after:w-[50%]
              after:rounded-full after:bg-primary after:pb-[50%] after:content-[''] "
              >
                <img
                  src="./app-screen-2.png"
                  className="trasnlate-y-[2.4rem] w-[35%] lg:translate-y-0"
                  alt="iPhone app
            meal approving plan screen"
                />
              </div>
              <div className="step-text-box">
                <p className="  mb-[1.2rem] text-[8.6rem] font-semibold text-gray-200">
                  <span className="cursor-pointer hover:text-primary/85">
                    02
                  </span>
                </p>
                <h3 className="mb-[3.2rem] text-[2.4rem] font-semibold leading-10 tracking-[-0.5px] lg:text-[3rem]">
                  fill in details about the crop
                </h3>
                <p className="text-[1.84rem] leading-loose">
                  Next, farmers input crucial details about themselves and the
                  stored crop. This ensures accurate records and personalized
                  assistance, contributing to efficient crop management tailored
                  to individual needs.
                </p>
              </div>

              <div>
                <p className="mb-[1.2rem] text-[8.6rem] font-semibold text-gray-200">
                  <span className="cursor-pointer hover:text-primary/85">
                    03
                  </span>
                </p>
                <h3 className=" mb-[3.2rem] text-[2.4rem] font-semibold leading-10 tracking-[-0.5px] lg:text-[3rem] ">
                  Receive confirmation on WhatsApp
                </h3>
                <p className="text-[1.84rem] leading-loose">
                  Upon successful storage of your crops, you'll instantly
                  receive a confirmation on WhatsApp. This ensures swift
                  acknowledgment and provides peace of mind, allowing you to
                  proceed confidently with the knowledge that your harvest is
                  securely stored and ready for future use.
                </p>
              </div>
              <div
                className=" align-center relative flex justify-center before:absolute before:top-[5%] before:z-[-1] before:block  before:w-[65%]
              before:rounded-full before:bg-secondary before:pb-[65%] before:content-[''] after:absolute after:top-[16%] after:z-[-1] after:block after:w-[50%]
              after:rounded-full after:bg-primary after:pb-[50%] after:content-[''] "
              >
                <img
                  src="./app-screen-3.png"
                  className="trasnlate-y-[2.4rem] w-[35%] lg:translate-y-0"
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
          </>
        )}
      </section>
    </>
  );
};

export default HowItWorks;
