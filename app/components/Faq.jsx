import styles from "./Faq.module.css";

export default function Faq() {
  const faqItems = [
    { title: "What is Frontend Mentor, and how will it help me?", text: "text1" },
    { title: "Is Frontend Mentor free?", text: "text2" },
    { title: "Can I use Frontend Mentor projects in my portfolio?", text: "text3" },
    { title: "How can I get help if I'm stuck on a challange?", text: "text4" },
  ];
  return (
    <>
      <div className={styles.wholePage}>
        <div className={styles.partTop}>
          <img src="/background-pattern-desktop.svg" alt="Background Pattern" />
        </div>
        <div className={styles.faqCard}>
          <div className={styles.title}>
            <img src="/icon-star.svg" alt="Star Icon" />
            <h1>FAQs</h1>
          </div>
          <div className={styles.faqItems}>
            {faqItems.map((item) => (
              <div className={styles.faqItemContainer}> {item.title} </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
