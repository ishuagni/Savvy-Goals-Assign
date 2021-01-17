import React, {useState} from 'react';
import moment from 'moment';

import './styles.scss';
import Cross from '../../../assets/svg/cross.svg';
import TextInput from '../../../components/TextInput';

const UpdateGoalModal = ({ show, handleClose, goal, updateGoal }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [name, setName] = useState(goal.name);
  const [description, setDescription] = useState(goal.description);
  const [amount, setAmount] = useState(goal.amount);
  const [targetDate, setTargetDate] = useState(moment(goal.goal_target_date).format('YYYY-MM-DD'));

  const handleUpdateGoal = () => {
    handleClose()

    const updated_goal = {
      'id': goal.id,
      'name': name,
      'description': description,
      'amount': amount,
      'targetDate': targetDate
    }

    updateGoal(updated_goal)
  }

  return (
    <div className={showHideClassName}>
      
      <section className="modal-main-update-goal">
        <div className="modal-header">
          <h3>Update Goal</h3>
          <img src={Cross} alt="close modal" onClick={handleClose} />
        </div>
        
        <div className="modal-body">
          <div className="email-container">
            <div className="label">Name</div>
            <TextInput
              type="text"
              placeholder="Buy house"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="email-container">
            <div className="label">Description</div>
            <TextInput
              type="text"
              placeholder="Description of your goal .."
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <div className="flex-container">
            <div className="email-container">
              <div className="label">Taget Date</div>
              <TextInput
                type="date"
                placeholder="26-01-2051"
                value={targetDate}
                onChange={(event) => {
                  setTargetDate(event.target.value);
                }}
              />
            </div>
            <div className="email-container">
              <div className="label">Amount (in Rs.)</div>
              <TextInput
                type="number"
                placeholder="10000.50"
                value={amount}
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
              />
            </div>
          </div>
          <button disabled={name === '' || targetDate === '' || amount === ''} onClick={handleUpdateGoal}>
            UPDATE
          </button>
        </div>
      </section>
    </div>
  );
};

export default UpdateGoalModal;