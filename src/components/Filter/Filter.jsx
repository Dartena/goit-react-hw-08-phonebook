import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../store/contacts/actions";
import { getFilter } from "../../store/contacts/selectors";
import { FormLabel, Input, Text } from "../styles/styled";
import styled from "styled-components";

const FilterLabel = styled(FormLabel)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterId = nanoid();

  const onChange = (value) => dispatch(changeFilter(value));

  const onChangeHandler = (event) => {
    const { value } = event.target;
    onChange(value.toLowerCase());
  };

  return (
    <FilterLabel htmlFor={filterId}>
      <Text>Find contact by name</Text>
      <Input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={onChangeHandler}
        id={filterId}
      />
    </FilterLabel>
  );
}

export default Filter;
