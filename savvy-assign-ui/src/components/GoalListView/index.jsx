/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import moment from 'moment';

import DeleteGoalModal from './DeleteGoalModal';
import UpdateGoalModal from './UpdateGoalModal';
import './styles.scss';

/**
 * Goal List View Component
 * @constructor
 */
function GoalListView({goal, updateGoalHandler, deleteGoalHandler}) {
  const [deleteGoal, setDeleteGoal] = useState(false);
  const [updateGoal, setUpdateGoal] = useState(false);

  return (
    <div className="goal-list-view">
      <UpdateGoalModal 
        show={updateGoal}
        handleClose={() => setUpdateGoal(false)}
        goal={goal}
        updateGoal={updateGoalHandler}
      />

      <DeleteGoalModal 
        show={deleteGoal}
        handleClose={() => setDeleteGoal(false)}
        goalId={goal.id}
        deleteGoal={deleteGoalHandler}
      />

      <h3 className="flex2">{goal.name}</h3>
      <h3 className="flex3">{goal.description}</h3>
      <h3 className="flex2">{goal.amount}</h3>
      <h3 className="flex2">{moment(goal.goal_target_date).format('DD/MM/YYYY')}</h3>
      <div className="actions">
          <button onClick={() => setUpdateGoal(true)} className="update-btn">Update</button>
          <button onClick={() => setDeleteGoal(true)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default GoalListView;
