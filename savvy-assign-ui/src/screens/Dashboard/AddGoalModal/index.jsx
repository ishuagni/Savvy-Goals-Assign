import React, {useState} from 'react';

import './styles.scss';
import Cross from '../../../assets/svg/cross.svg';
import TextInput from '../../../components/TextInput';

const AddGoalModal = ({ handleClose, show, addGoal }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0.0);
  const [targetDate, setTargetDate] = useState('');

  const handleAddGoal = () => {
    handleClose()

    const goal = {
      'name': name,
      'description': description,
      'amount': amount,
      'targetDate': targetDate
    }

    addGoal(goal)
  }

  return (
    <div className={showHideClassName}>
      
      <section className="modal-main-add-goal">
        <div className="modal-header">
          <h3>Add Goal</h3>
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
          <button disabled={name === '' || targetDate === '' || amount === ''} onClick={handleAddGoal}>
            ADD
          </button>
        </div>
      </section>
    </div>
  );
};

export default AddGoalModal;