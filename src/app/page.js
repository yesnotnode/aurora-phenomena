import styles from "./page.module.css";
import ProjectList from "@/components/projectsList";

export default function Home() {
  return (
    <div className={styles.page}>
      <ProjectList/>
    </div>
  );
}
