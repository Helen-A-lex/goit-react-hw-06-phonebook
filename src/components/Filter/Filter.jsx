import { Label, Input } from 'components/ContactForm/ContactForm.styled';
import { getFilterValue, setFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const changeFilter = evt => {
    return dispatch(setFilter(evt.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};
