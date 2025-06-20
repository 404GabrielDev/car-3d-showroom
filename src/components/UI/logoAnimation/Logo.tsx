import "./Logo.scss";

const Logo = () => {
  return (
    <h1 className="home-title">
      <section className="section-titles">
        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">
          Performance in every line
        </p>
        <span
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="1500"
        >
          Power in every detail
        </span>
      </section>
    </h1>
  );
};

export default Logo;
