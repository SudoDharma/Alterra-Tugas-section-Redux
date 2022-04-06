import styles from "./style.module.css"

import Form from "../../components/Form"
import List from "../../components/List"

const Home = () => {
    return (
        <div className={styles.container}>
          <h1>todos</h1>
          <Form />
          <List />
        </div>
    );
}

export default Home