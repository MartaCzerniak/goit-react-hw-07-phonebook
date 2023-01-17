import { useDispatch } from "react-redux";
import { filterContacts } from "../redux/contactsSlice";
function Filter() {
  const dispatch = useDispatch();
  const handleFilter = (event) => {
    const filterValue = event.target.value;
    if (event.target.name === "filter") dispatch(filterContacts(filterValue));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleFilter}></input>
    </div>
  );
}

export default Filter;
