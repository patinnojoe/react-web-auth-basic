import IonIcon from '@reacticons/ionicons';
import { AddTaskModal } from '../components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import { emptySVG } from '../../public';
import { toast } from 'sonner';
import { getAllTask, updateTask } from '../utils/tasks';

function Home() {
  // check if user is authenticated
  let user = localStorage.getItem('pas-user');
  let userDetails = JSON.parse(user);
  const [allTask, setAllTask] = useState([]);

  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  // let me fetch all task

  useEffect(() => {
    const fetchTasks = async () => {
      toast.info('😫 Fetching tasks...');
      try {
        const res = await getAllTask(userDetails);
        setAllTask(res.data.data); // Assuming `res.data` contains the list of tasks
        toast.success('😁 Mission accomplished,tasks fetched!');
      } catch (error) {
        console.log(error);
        toast.error('😢😩 Hate when this happens, try again.');
      }
    };

    if (userDetails && userDetails.token) {
      fetchTasks();
    }
    // find to do task
  }, []);

  useEffect(() => {
    // Now categorize the tasks based on their status
    let taskAdded = allTask.filter((task) => task.task_status === 'task_added');
    let taskInProgress = allTask.filter((task) => task.task_status === 'task_inProgress');
    let taskCompleted = allTask.filter((task) => task.task_status === 'task_completed');

    // Set the states for the respective task categories
    setTodo(taskAdded);
    setTask(taskInProgress);
    setCompletedTask(taskCompleted);

    // console.log(allTask, taskAdded, taskInProgress, taskCompleted);
  }, [allTask]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      toast.info('shuffler, unsure!!😵');
      return;
    }
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // create todo task
    let todoItems = [...todo];
    // create an updated task
    let updatedTasks = [...task];
    // updated completed Task
    let updatedCompletedTasks = [...completedTask];

    // check if todo task is dragged
    // console.log('item dragged', result);

    // MOVE ITEM FROM TODO TO IN PROGRESS
    if (result.destination.droppableId === 'taskInProgress' && result.source.droppableId === 'todoTasks') {
      toast.info('😎 smooth drop!');
      // remove  the item from source
      let [movedTask] = todoItems.splice(source.index, 1);
      updateTask(movedTask, userDetails, 'task_inProgress');

      setTodo(todoItems);
      //add the item to destination
      updatedTasks.splice(destination.index, 0, movedTask);
      setTask(updatedTasks);
    }

    // MOVE ITEM FROM IN PROGRESS BACK TO DO
    if (destination.droppableId === 'todoTasks' && source.droppableId === 'taskInProgress') {
      toast.info('backward leap! 🐸');
      let [movedTask] = updatedTasks.splice(source.index, 1);
      updateTask(movedTask, userDetails, 'task_added');
      setTask(updatedTasks);

      todoItems.splice(destination.index, 0, movedTask);
      setTodo(todoItems);
    }

    // MOVE ITEM TO COMPLETED TASK FROM IN PROGRESS
    if (destination.droppableId === 'completedTasks' && source.droppableId === 'taskInProgress') {
      toast.info('clean drop OG 💯!');
      let [movedTask] = updatedTasks.splice(source.index, 1);
      updateTask(movedTask, userDetails, 'task_completed');
      setTask(updatedTasks);

      updatedCompletedTasks.splice(destination.index, 0, movedTask);
      setCompletedTask(updatedCompletedTasks);
    } else if (source.droppableId === 'completedTasks' && destination.droppableId === 'taskInProgress') {
      toast.info('forgot your something, huh?🤔');

      let [movedTask] = updatedCompletedTasks.splice(source.index, 1);
      updateTask(movedTask, userDetails, 'task_inProgress');
      setCompletedTask(updatedCompletedTasks);

      updatedTasks.splice(destination.index, 0, movedTask);
      setTask(updatedTasks);
    } else if (source.droppableId === 'completedTasks' && destination.droppableId === 'todoTasks') {
      toast.info('cant let you commit suicide 🤷‍♀️');
      return;
    } else if (destination.droppableId === 'completedTasks' && source.droppableId === 'todoTasks') {
      toast.info('hmmm frog jump!!😂');
      let [movedTask] = todoItems.splice(source.index, 1);
      updateTask(movedTask, userDetails, 'task_completed');
      setTodo(todoItems);

      updatedCompletedTasks.splice(destination.index, 0, movedTask);
      setCompletedTask(updatedCompletedTasks);
    }
  };

  return (
    <div>
      <AddTaskModal />

      <DragDropContext onDragEnd={handleDragEnd}>
        <section className="app_inner">
          <div className="task_add container">
            <h3>Tasks Added</h3>
            <Droppable droppableId="todoTasks">
              {(provided) => (
                <ul ref={provided.innerRef} {...provided.droppableProps} className="item_containers">
                  {todo.length == 0 ? (
                    <div className="default_container">
                      <img src={emptySVG} />
                      <small>Tidy, clean, there&apos;s nothing here</small>
                    </div>
                  ) : (
                    todo.map((todoItem, index) => (
                      <Draggable key={'todoTasks' + todoItem.id} draggableId={'todoItem' + todoItem.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            className="task_item"
                          >
                            <header className="header">
                              <div>
                                {todoItem.task_name ? (
                                  <span className="fw-bold">Task Name: {todoItem.task_name}</span>
                                ) : (
                                  ''
                                )}
                                <p>{todoItem.created_at}</p>
                              </div>
                              <IonIcon name="hand-left" />
                            </header>
                            <section className="body">{todoItem.task}</section>
                          </div>
                        )}
                      </Draggable>
                    ))
                  )}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>

          <div className="task_inProgress container">
            <h3>Task in Progress</h3>
            {/* make the Task in Progress a drop zone */}
            <Droppable droppableId="taskInProgress">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef} className="item_containers">
                  {task.length == 0 ? (
                    <div className="default_container">
                      <img src={emptySVG} />
                      <small>Tidy, clean, there&apos;s nothing here</small>
                    </div>
                  ) : (
                    task.map((taskItem, index) => (
                      <Draggable key={'taskItem' + taskItem.id} draggableId={'taskItem' + taskItem.id} index={index}>
                        {(provided) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              className="task_item"
                            >
                              <header className="header">
                                <div>
                                  {taskItem.task_name ? (
                                    <span className="fw-bold">Task Name: {taskItem.task_name}</span>
                                  ) : (
                                    ''
                                  )}
                                  <p>{taskItem.created_at}</p>
                                </div>
                                <IonIcon name="hand-left" />
                              </header>
                              <section className="body">{taskItem.task}</section>
                            </div>
                          );
                        }}
                      </Draggable>
                    ))
                  )}

                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>

          <div className="task_completed container">
            <h3>Task Completed</h3>
            <Droppable droppableId="completedTasks">
              {(provided) => (
                <ul ref={provided.innerRef} className="item_containers">
                  {completedTask.length == 0 ? (
                    <div className="default_container">
                      <img src={emptySVG} />
                      <small>Tidy, clean, there&apos;s nothing here</small>
                    </div>
                  ) : (
                    completedTask.map((task, index) => (
                      <Draggable key={'completedTask' + task.id} draggableId={'completedTask' + task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            className="task_item"
                          >
                            <header className="header">
                              <div>
                                {task.task_name ? <span className="fw-bold">Task Name: {task.task_name}</span> : ''}
                                <p>{task.created_at}</p>
                              </div>
                              <IonIcon name="hand-left" />
                            </header>
                            <section className="body">{task.task}</section>
                          </div>
                        )}
                      </Draggable>
                    ))
                  )}

                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </section>
      </DragDropContext>
    </div>
  );
}

export default Home;
