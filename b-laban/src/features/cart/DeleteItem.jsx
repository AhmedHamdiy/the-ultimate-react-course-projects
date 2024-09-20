import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ itemId }) {
    const dispatch = useDispatch();
    return (
        <Button type="small" onClick={() => dispatch(deleteItem(itemId))}>
            حذف
        </Button>
    );
}

export default DeleteItem;
