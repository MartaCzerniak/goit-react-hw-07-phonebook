import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/operations";
import { selectItems } from "../redux/selectors";
import Button from "./Button";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;
    const foundContant = contacts.find((contact) => contact.name === name);
    const alertMessage = name + "\xa0" + "is already in contacts.";
    if (foundContant) {
      return alert(alertMessage);
    } else {
      dispatch(addContact({ name: name, phone: phone }));
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button label={"Add contact"} type={"submit"} />
      </form>
    </div>
  );
};
export default ContactForm;
