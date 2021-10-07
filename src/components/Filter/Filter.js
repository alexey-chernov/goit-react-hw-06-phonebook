import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/actions';
import { getFilter, getContacts } from '../../redux/contacts/selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  if (!contacts.length)
    return <p>Ваша телефонна книга порожня. Будь ласка, додайте контакт. </p>;
  return (
    <label className={styles.Label}>
      Знайдіть контакти за іменем
      <input
        type="text"
        name="filter"
        className={styles.Input}
        value={filter}
        onChange={event => dispatch(filterContact(event.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Ім'я може складатись лише із букв, апострофа, тире та пробілів. Наприклад Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan і т.д."
        required
      />
    </label>
  );
};

export default Filter;
