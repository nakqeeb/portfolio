import HeadingTitle from "../../shared/components/heading-title";
import "./about.css";
import my_about from "../../assets/images/about_pic.jpeg";

const About = () => {
  return (
    <div className="about" id="about">
      <HeadingTitle title="About me" />
      <div className="container">
        <div className="image">
          <img src={my_about} alt="Khaled" />
        </div>
        <div className="about-me">
          <h3 className="heading-h3">Curious about me? Here you have it:</h3>
          <p className="body2">
            I'm a passionate,{" "}
            <span className="body2-underline">self-proclaimed designer</span>{" "}
            who specializes in full stack development (React.js & Spring Boot). I am
            very enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel perfect design, and
            writing clear, readable, highly performant code matters to me.
          </p>
          {/* <p className="body2">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p> */}
          <p className="body2">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          {/* <p className="body2">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on{" "}
            <span className="body2-underline">Twitter</span> where I share
            tech-related bites and build in public, or you can follow me on{" "}
            <span className="body2-underline">GitHub</span>.
          </p> */}
          <p className="body2">Finally, some quick bits about me.</p>
          <div className="lists">
            <ul>
              <li>Highly motivated</li>
              <li>Optimistic</li>
            </ul>
            <ul>
              <li>Avid learner</li>
              <li>Passionate</li>
            </ul>
          </div>
          <p className="body2">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
