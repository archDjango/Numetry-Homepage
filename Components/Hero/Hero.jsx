import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to MyApp</h1>
      <p>Your gateway to amazing experiences.</p>
      <button className={styles.ctaButton}>Get Started</button>
    </section>
  );
};

export default Hero;
