/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import GoalListView from '../GoalListView';
import './styles.scss';

/**
 * Goal List Component
 * @constructor
 */
function GoalList({goals, updateGoal, deleteGoal}) {

  return (
    <div className="goal-list">
        <div className="list-table-header">
          <h3 className="flex2">Name</h3>
          <h3 className="flex3">Description</h3>
          <h3 className="flex2">Amount</h3>
          <h3 className="flex2">Target Date</h3>
          <h3 className="flex2 actions-header">Actions</h3>
        </div>

        <div className="goal-list-view-container">
          {!!goals && goals.map((goal, index) => (
            <GoalListView 
              key={index} 
              goal={goal} 
              updateGoalHandler={updateGoal}
              deleteGoalHandler={deleteGoal}
            />
          ))}
        </div>
    </div>
  );
}

export default GoalList;
