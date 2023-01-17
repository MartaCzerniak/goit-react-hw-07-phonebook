import { useSelector } from "react-redux";
import { selectFilter, selectItems } from "../redux/selectors";
import Button from "./Button";

function ContactList({ onClick }) {
  const filter = useSelector(selectFilter);
  const items = useSelector(selectItems);

  let contacts = items
    .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    .map((item) => (
      <li key={item.id}>
        {item.name}:{item.phone}
        <Button type="button" label="Delete" onClick={() => onClick(item.id)} />
      </li>
    ));

  return contacts;
}

export default ContactList;
