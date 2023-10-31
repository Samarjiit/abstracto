import Nav from './Nav';
//import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <Nav />
      <h1 className="head_text">
        <span className="blue_gradient">Abstracto</span>. Simplify the internet,
        one link at a time
      </h1>
      <h2 className="desc">
        <span className="blue_gradient">
          Uncover the essence of the web, one link at a time.
        </span>
        <br />
        Harness the power of AI to transform complex content into concise
        summaries. Just input a URL, and witness how Abstracto effortlessly
        distills intricate articles, lengthy blogs, or comprehensive reports
        into clear and concise summaries. No more sifting through excessive
        details or irrelevant data – Abstracto provides instant clarity and
        understanding.
      </h2>
    </header>
  );
};

export default Hero;
