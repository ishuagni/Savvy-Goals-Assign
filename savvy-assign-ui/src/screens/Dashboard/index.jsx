/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import AddGoalModal from './AddGoalModal';
import GoalList from '../../components/GoalList';
import Loading from '../../components/Loading';
import TopBar from '../../components/TopBar';
import {createGoal, updateGoal, deleteGoal, getGoals} from '../../utils/service'
import {isAuthenticated} from '../../utils/service';

import './styles.scss';
import {setGoal} from '../../store/goal/actions';

/**
 * Dashboard Screen
 * @constructor
 */
function DashboardScreen() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [addGoal, setAddGoal] = useState(false);
  const [successAddGoal, setSuccessAddGoal] = useState('');
  const [successUpdateGoal, setSuccessUpdateGoal] = useState('');
  const [successDeleteGoal, setSuccessDeleteGoal] = useState('');

  const dispatch = useDispatch();

  // User Profile, goals imported from redux store
  const {
    profile,
    goals
  } = useSelector(
    (state) => ({
      profile: state.goal.goal.user,
      goals: state.goal.goal.goals
    }),
    shallowEqual,
  );

  useEffect(() => {
    setLoading(true);
    getGoals()
      .then((res) => {
        dispatch(setGoal(res.data));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

    // Redirect if not authenticated
    if (!isAuthenticated()) {
      history.push('/');
    }

  const addGoalHandler = (goal) => {
    if(goal) {
      setLoading(true);
      createGoal(goal)
        .then((res) => {
          setSuccessAddGoal('Goal created Successfully');
          console.log(successAddGoal);
        })
        .then(() => {
          return getGoals();
        })
        .then((res) => {
          dispatch(setGoal(res.data));
        })
        .then(() => {
          history.push('/dashboard')
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          setSuccessAddGoal(err.response.data.message);
          console.log(successAddGoal);
        });
    }
  }

  const updateGoalHandler = (goal) => {
    if(goal) {
      setLoading(true);
      updateGoal(goal)
        .then((res) => {
          setSuccessUpdateGoal('Goal updated Successfully');
          console.log(successUpdateGoal);
        })
        .then(() => {
          return getGoals();
        })
        .then((res) => {
          dispatch(setGoal(res.data));
        })
        .then(() => {
          history.push('/dashboard')
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          setSuccessUpdateGoal(err.response.data.message);
          console.log(successUpdateGoal);
        });
    }
  }

  const deleteGoalHandler = (goalId) => {
    if(goalId) {
      setLoading(true);
      deleteGoal(goalId)
        .then((res) => {
          setSuccessDeleteGoal('Goal deleted Successfully');
          console.log(successDeleteGoal);
        })
        .then(() => {
          return getGoals();
        })
        .then((res) => {
          dispatch(setGoal(res.data));
        })
        .then(() => {
          history.push('/dashboard')
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          setSuccessDeleteGoal(err.response.data.message);
          console.log(successDeleteGoal);
        });
    }
  }

  const openNewGoalModal = () => {
    setAddGoal(true);
  }

  if (loading) {
    return <Loading />;
  }

  console.log(localStorage);

  return (
    <div className="show-goals">

      <AddGoalModal 
        show={addGoal}
        handleClose={() => setAddGoal(false)}
        addGoal={addGoalHandler}
      />

      {!!profile && <TopBar 
        user_name={profile.name}
        current_page={'Dashboard'}
        current_path={'/dashboard'}
      />}
      

      <div className="goal-list-container">
        <div className="list-header">
            <h1>Your Goals</h1>
            {!!profile && (
              <button onClick={openNewGoalModal}>Add Goal</button>
            )}
        </div>

        <GoalList 
          goals={goals}
          updateGoal={updateGoalHandler}
          deleteGoal={deleteGoalHandler}
        />
      </div>

    </div>
  );
}

export default DashboardScreen;
