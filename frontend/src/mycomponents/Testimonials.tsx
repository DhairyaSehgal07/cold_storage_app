const Testimonials = () => {
  return (
    <>
      <section
        style={{ gridTemplateColumns: "56fr 45fr" }}
        className="gapy-y-[9.6rem] mt-[10rem] grid grid-cols-2 items-center gap-x-[6.4rem] bg-secondary"
        id="testimonials"
      >
        <div className="testimonials-container p-[9.6rem]">
          <span className="subheading mb-[1.6rem] block text-[1.6rem] font-medium uppercase tracking-[0.075rem] text-foreground">
            Testimonials
          </span>
          <h2 className="heading-secondary mb-[3.2rem] text-[3.6rem] font-bold tracking-tighter text-[#333] md:text-[4.4rem]">
            Once you try it, you won't go back to the old ways.
          </h2>

          <div className="testimonials grid grid-cols-2 gap-x-[8rem] gap-y-[4.8rem] ">
            <figure className="testimonial">
              <img
                className="testimonial-img mb-[1.2rem] w-[6.4rem] rounded-full "
                alt="Photo of customer Dave Bryson"
                src="./customers/dave.jpg"
              />
              <blockquote className="testimonial-text mb-[1.6rem] text-[1.8rem] leading-[1.8] ">
                Affordable, nutritious, and deliciously preserved crops, without
                the need for manual handling! It's like experiencing a frosty
                enchantment for your harvest.
              </blockquote>
              <p className="testimonial-name text-[1.6rem] text-[#6f6f6f]">
                &mdash; Dave Bryson
              </p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img mb-[1.2rem] w-[6.4rem] rounded-full"
                alt="Photo of customer Ben Hadley"
                src="./customers/ben.jpg"
              />
              <blockquote className="testimonial-text mb-[1.6rem] text-[1.8rem] leading-[1.8]">
                The cold storage app is remarkably efficient, selecting the
                optimal crops every time. It's incredible to be free from
                concerns about crop preservation!
              </blockquote>
              <p className="testimonial-name text-[1.6rem] text-[#6f6f6f]">
                &mdash; Ben Hadley
              </p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img mb-[1.2rem] w-[6.4rem] rounded-full"
                alt="Photo of customer Steve Miller"
                src="./customers/steve.jpg"
              />
              <blockquote className="testimonial-text mb-[1.6rem] text-[1.8rem] leading-[1.8]">
                ChillHarbor, the cold storage app, is a game-changer! It
                streamlines my crop storage, making it effortless and ensuring
                my produce stays fresh. Truly a lifesaver!"
              </blockquote>
              <p className="testimonial-name text-[1.6rem] text-[#6f6f6f]">
                &mdash; Steve Miller
              </p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img mb-[1.2rem] w-[6.4rem] rounded-full"
                alt="Photo of customer Hannah Smith"
                src="./customers/hannah.jpg"
              />
              <blockquote className="testimonial-text mb-[1.6rem] text-[1.8rem] leading-[1.8]">
                ChillHarbor is a crop storage gem! Stress-free and efficient,
                it's the perfect companion for modern farmers, allowing focus on
                other farm aspects.
              </blockquote>
              <p className="testimonial-name text-[1.6rem] text-[#6f6f6f]">
                &mdash; Hannah Smith
              </p>
            </figure>
          </div>
        </div>

        <div className="gallery grid gap-[3.2rem] p-[1.6rem] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110 ">
            <img
              src="./gallery/gallery-1.jpg"
              alt="Photo of beautifully
            arranged food"
            />
            {/* <!-- <figcaption>Caption</figcaption> --> */}
          </figure>
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110 ">
            <img
              src="./gallery/gallery-2.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110">
            <img
              src="./gallery/gallery-3.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110">
            <img
              src="./gallery/gallery-4.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110">
            <img
              src="./gallery/gallery-5.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110">
            <img
              src="./gallery/gallery-6.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110">
            <img
              src="./gallery/gallery-7.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110">
            <img
              src="./gallery/gallery-8.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110">
            <img
              src="./gallery/gallery-9.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110">
            <img
              src="./gallery/gallery-10.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110">
            <img
              src="./gallery/gallery-11.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item duration-400 block w-full overflow-hidden transition-all hover:scale-110">
            <img
              src="./gallery/gallery-12.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
