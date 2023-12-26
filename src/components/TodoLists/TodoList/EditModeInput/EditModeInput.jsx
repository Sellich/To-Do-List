import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeTodoListThunk, setEditMode } from "../../../../redux/todoReducer";

const EditModeInput = (props) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (title) => {
    dispatch(changeTodoListThunk(props.id, title.title));
    dispatch(setEditMode(null));
  };

  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input {...register('title', { onChange: () => onInputChange }, { value: title })} />
        <button>
          change
        </button>
      </form>
    </div>
  )
}

export default EditModeInput;
