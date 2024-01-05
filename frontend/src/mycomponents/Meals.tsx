const Meals = () => {
  return (
    <>
      <section className="py-[9.6rem]" id="meals">
        <div className="mx-auto max-w-[120rem] px-[3.2rem]  text-center">
          <span className="mb-[1.6rem] block text-[1.6rem] font-medium uppercase tracking-[0.075rem] text-foreground">
            Meals
          </span>
          <h2 className="mb-[3.2rem] text-[4.4rem] font-bold tracking-tighter text-[#333]">
            Omnifood AI chooses from 5,000+ recipes
          </h2>
        </div>

        <div className=" mx-auto mb-[4.8rem] grid  max-w-[120rem] grid-cols-3 px-[3.2rem]">
          <div className="duration-400  hover:box-shadow-lg mx-10 my-4 transform overflow-hidden rounded-3xl bg-white shadow-xl transition-transform hover:-translate-y-3">
            <img
              src="./meals/meal-1.jpg"
              className="w-[100%]"
              alt="Japanese Gyozas"
            />
            <div className="p-[4.8rem] pt-[3.2rem]">
              <div className="mb-[1.2rem] flex gap-[0.4rem]">
                <span className="inline-block rounded-[100px] bg-[#51cf86] px-[0.8rem] py-[0.4rem] text-[1.2rem] font-semibold uppercase text-foreground ">
                  Vegetarian
                </span>
              </div>
              <p className="mb-[3.2rem] text-[2.4rem] font-semibold text-foreground">
                Japanese Gyozas
              </p>
              <ul className="flex list-none flex-col gap-[2rem]">
                <li className="flex items-center gap-[1.6rem] text-[1.8rem]">
                  {/* <ion-icon
                    className="text-[2.4rem] text-primary"
                    name="flame-outline"
                  ></ion-icon> */}
                  <span>
                    <strong>650</strong> calories
                  </span>
                </li>
                <li className="flex items-center gap-[1.6rem] text-[1.8rem]">
                  {/* <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon> */}
                  <span>
                    NutriScore &reg; <strong>74</strong>
                  </span>
                </li>
                <li className="flex items-center gap-[1.6rem] text-[1.8rem]">
                  {/* <ion-icon
                    className="meal-icon"
                    name="star-outline"
                  ></ion-icon> */}
                  <span>
                    <strong>4.9</strong> rating (537)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="duration-400 hover:box-shadow-lg mx-10 my-4 transform overflow-hidden rounded-2xl bg-white shadow-xl transition-transform hover:-translate-y-3">
            <img
              src="./meals/meal-2.jpg"
              className="meal-img"
              alt="Avocado Salad"
            />
            <div className="p-[4.8rem] pt-[3.2rem]">
              <div className="mb-[1.2rem] flex gap-[0.4rem]">
                <span className="inline-block rounded-[100px] bg-[#94d82d] px-[0.8rem] py-[0.4rem] text-[1.2rem] font-semibold uppercase text-foreground ">
                  Vegan
                </span>
                <span className="inline-block rounded-[100px] bg-[#ffd43b] px-[0.8rem] py-[0.4rem] text-[1.2rem] font-semibold uppercase text-foreground ">
                  Paleo
                </span>
              </div>
              <p className="mb-[3.2rem] text-[2.4rem] font-semibold text-foreground">
                Avocado Salad
              </p>
              <ul className="flex list-none flex-col gap-[2rem]">
                <li className="flex items-center gap-[1.6rem] text-[1.8rem]">
                  {/* <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon> */}
                  <span>
                    <strong>400</strong> calories
                  </span>
                </li>
                <li className="flex items-center gap-[1.6rem] text-[1.8rem]">
                  {/* <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon> */}
                  <span>
                    NutriScore &reg; <strong>92</strong>
                  </span>
                </li>
                <li className="flex items-center gap-[1.6rem] text-[1.8rem]">
                  {/* <ion-icon
                    className="meal-icon"
                    name="star-outline"
                  ></ion-icon> */}
                  <span>
                    <strong>4.8</strong> rating (441)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="diets">
            <h3 className="mb-[3.2rem] text-[3rem] font-semibold leading-5 tracking-[-0.5px]">
              Works with any diet:
            </h3>
            <ul className="flex list-none flex-col gap-[1.6rem]">
              <li className="flex items-center gap-[1.6rem] text-[1.8rem] leading-[1.92rem]">
                {/* <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Vegetarian</span>
              </li>
              <li className="flex items-center gap-[1.6rem] text-[1.8rem] leading-[1.92rem]">
                {/* <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Vegan</span>
              </li>
              <li className="flex items-center gap-[1.6rem] text-[1.8rem] leading-[1.92rem]">
                {/* <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Pescatarian</span>
              </li>
              <li className="flex items-center gap-[1.6rem] text-[1.8rem] leading-[1.92rem]">
                {/* <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Gluten-free</span>
              </li>
              <li className="flex items-center gap-[1.6rem] text-[1.8rem] leading-[1.92rem]">
                {/* <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Lactose-free</span>
              </li>
              <li className="flex items-center gap-[1.6rem] text-[1.8rem] leading-[1.92rem]">
                {/* <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Keto</span>
              </li>
              <li className="flex items-center gap-[1.6rem] text-[1.8rem] leading-[1.92rem]">
                {/* <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Paleo</span>
              </li>
              <li className="flex items-center gap-[1.6rem] text-[1.8rem] leading-[1.92rem]">
                {/* <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Low FODMAP</span>
              </li>
              <li className="flex items-center gap-[1.6rem] text-[1.8rem] leading-[1.92rem]">
                {/* <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon> */}
                <span>Kid-friendly</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="all-recipes mx-auto max-w-[120rem] px-[3.2rem]">
          <a href="#" className="link">
            See all recipes &rarr;
          </a>
        </div>
      </section>
    </>
  );
};

export default Meals;
