import styles from "./Services.module.css";

const services = [
  { title: "Web Development", description: "Modern and responsive web apps." },
  { title: "SEO Optimization", description: "Rank higher on search engines." },
  { title: "Digital Marketing", description: "Grow your brand online." },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
