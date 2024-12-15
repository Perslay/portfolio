import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.home}>
      <Header />
      <div className={css.mainHome}>
        <h1 className={css.firstHeading}>Natalia Fedyk</h1>
        <div>image</div>
        <h2 className={css.secondHeading}>Web Developer</h2>
        <p>
          Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          impedit beatae ipsa placeat molestias eligendi excepturi ratione
          sapiente, explicabo blanditiis consequuntur asperiores atque culpa
          quidem maiores velit rem autem aspernatur?
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
