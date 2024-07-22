import IonIcon from '@reacticons/ionicons';
import { AddTaskModal, Header } from '../components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';

function Home() {
  const [todo, setTodo] = useState([
    {
      id: 0,
      content: 'TOdo item 1',
    },
    {
      id: 1,
      content: 'TOdo item 2',
    },
  ]);
  const [task, setTask] = useState([
    {
      id: 0,
      content: 'Task 1',
    },
    {
      id: 1,
      content: 'Task 2',
    },
  ]);

  const [completedTask, setCompletedTask] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      alert('shuffler, unsure!!');
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
    console.log('item dragged', result);

    // MOVE ITEM FROM TODO TO IN PROGRESS
    if (result.destination.droppableId === 'taskInProgress' && result.source.droppableId === 'todoTasks') {
      alert('task is being added to in progress');
      // remove  the item from source
      let [movedTask] = todoItems.splice(source.index, 1);
      setTodo(todoItems);
      //add the item to destination
      updatedTasks.splice(destination.index, 0, movedTask);
      setTask(updatedTasks);
    }

    // MOVE ITEM FROM IN PROGRESS BACK TO DO
    if (destination.droppableId === 'todoTasks' && source.droppableId === 'taskInProgress') {
      alert('backward leap!');
      let [movedTask] = updatedTasks.splice(source.index, 1);
      setTask(updatedTasks);

      todoItems.splice(destination.index, 0, movedTask);
      setTodo(todoItems);
    }

    // MOVE ITEM TO COMPLETED TASK FROM IN PROGRESS
    if (destination.droppableId === 'completedTasks' && source.droppableId === 'taskInProgress') {
      alert('clean drop !');
      let [movedTask] = updatedTasks.splice(source.index, 1);
      setTask(updatedTasks);

      updatedCompletedTasks.splice(destination.index, 0, movedTask);
      setCompletedTask(updatedCompletedTasks);
    } else if (source.droppableId === 'completedTasks' && destination.droppableId === 'taskInProgress') {
      alert('forgot your keys, huh?');

      let [movedTask] = updatedCompletedTasks.splice(source.index, 1);
      setCompletedTask(updatedCompletedTasks);

      updatedTasks.splice(destination.index, 0, movedTask);
      setTask(updatedTasks);
    } else if (source.droppableId === 'completedTasks' && destination.droppableId === 'todoTasks') {
      alert('cant let you commit suicide');
      return;
    } else if (destination.droppableId === 'completedTasks' && source.droppableId === 'todoTasks') {
      alert('hmmm frog jump!!');
      let [movedTask] = todoItems.splice(source.index, 1);
      setTodo(todoItems);

      updatedCompletedTasks.splice(destination.index, 0, movedTask);
      setCompletedTask(updatedCompletedTasks);
    }
  };

  return (
    <div>
      <AddTaskModal />
      <Header />
      <DragDropContext onDragEnd={handleDragEnd}>
        <main className="app-main">
          <section className="app_inner">
            <div className="task_add container">
              <h3>Tasks Added</h3>
              <Droppable droppableId="todoTasks">
                {(provided) => (
                  <ul ref={provided.innerRef} {...provided.droppableProps} className="item_containers">
                    {todo.map((todoItem, index) => (
                      <Draggable key={'todoTasks' + index} draggableId={'todoItem' + index} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            className="task_item"
                          >
                            <header className="header">
                              <p>04/06/07 (1 day ago)</p>
                              <IonIcon name="arrow-down" />
                            </header>
                            <section className="body">{todoItem.content}</section>
                          </div>
                        )}
                      </Draggable>
                    ))}
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
                    {task.map((taskItem, index) => (
                      <Draggable key={'taskItem' + index} draggableId={'taskItem' + index} index={index}>
                        {(provided) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              className="task_item"
                            >
                              <header className="header">
                                <p>04/06/07 (1 day ago)</p>
                                <IonIcon name="arrow-down" />
                              </header>
                              <section className="body">{taskItem.content}</section>
                            </div>
                          );
                        }}
                      </Draggable>
                    ))}

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
                    {completedTask.map((task, index) => (
                      <Draggable key={'completedTask' + index} draggableId={'completedTask' + index} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            className="task_item"
                          >
                            <header className="header">
                              <p>04/06/07 (1 day ago)</p>
                              <IonIcon name="arrow-down" />
                            </header>
                            <section className="body">{task.content}</section>
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
          </section>
        </main>
      </DragDropContext>
    </div>
  );
}

export default Home;
