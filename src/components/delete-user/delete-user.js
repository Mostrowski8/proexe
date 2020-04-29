import React from 'react';
import './delete-user.css';

const DeleteUser = (props) => {
    return (
        <div className="delete-popup">
            <div className="delete-container card">
                <div>
                    <h5>Delete</h5>
                </div>
                <div className="popup-btn-container">
                    <button className="btn btn-dark" onClick={props.closeDelete}>Cancel</button>
                    <button className="btn btn-danger" onClick={() => {props.deletetUser(props.deleting); props.closeDelete()}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteUser