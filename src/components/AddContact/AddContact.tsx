import styles from "./AddContact.module.scss";
import { AddContactProps } from "./AddContact.types.ts";

const AddContact = ({}: AddContactProps) => {
  return (
    <div className={styles.FormContainer}>
      <h2>Add Contact</h2>
      <form className="form">
        <div className={styles.Field}>
          <label className={styles.Label}>Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className={styles.Field}>
          <label className={styles.Label}>Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <button className={styles.Button}>Add</button>
      </form>
    </div>
  );
};

export default AddContact;
