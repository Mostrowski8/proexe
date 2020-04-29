import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import './add-user.css';

const AddUser = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data, props, props.postuser)
    if (!props.editing) {
      props.postUser(data);
      props.closeAdd();
    } else {
      let editing = props.editing;
      props.editUser({data, editing});
      props.closeAdd();
    }
  }
  
  useEffect(() => {
    const inputs = document.querySelectorAll('input');
    let toUpdate = [];

    inputs.forEach(input => {
     Object.keys(errors).forEach(key => {
      if (key === input.name) {
        toUpdate.push(input);
      } else {
        input.style.borderColor = "gray";
      }
     })
    })

    toUpdate.forEach(input => {
      input.style.borderColor = 'red';
    })
  }, [errors]);

  let currentUser = props.editing && props.users.find(user => user.id === props.editing);

  return (
    <div className="card table-container">
      <div><div><h4>Form</h4></div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row">
        <label class="col-sm-4 col-form-label text-center">Name</label>
        <div class="col-sm-8">
          <input className="form-control" defaultValue={currentUser? currentUser.name : ''} type="text" placeholder="name" name="name" ref={register({required: true})} />
          </div>
        </div>
        <div className="form-group row">
        <label class="col-sm-4 col-form-label text-center">Email</label>
        <div class="col-sm-8">
          <input className="form-control" defaultValue={currentUser? currentUser.email : ''} type="email" placeholder="email" name="email" ref={register({required: true})} />
        </div>
        </div> 
        <div className="btn-container">
          <button className="btn btn-outline-danger cancel-btn" onClick={props.closeAdd}>Cancel</button><input className="btn btn-success" value="Submit" type="submit" />
        </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser