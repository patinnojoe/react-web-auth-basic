import IonIcon from '@reacticons/ionicons';
import { AddTaskModal, Header } from '../components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function Home() {
  const handleDragEnd = (result) => {
    console.log(result);
  };
  return (
    <div>
      <AddTaskModal />
      <Header />
      <DragDropContext onDragEnd={handleDragEnd}>
        <main className="app-main">
          <section className="app_inner">
            {/* add to do */}
            <div className="task_add container">
              <h3> Tasks Added </h3>
              <ul>
                <div className="task_item">
                  <header className="header">
                    <p>04/06/07 (1dayago)</p>
                    <IonIcon name="arrow-down" />
                  </header>
                  <section className=" body">body text goin ooo</section>
                </div>
                <li>task 2</li>
                <li>task 3</li>
              </ul>
            </div>
            <Droppable droppableId="taskInProgress">
              {(provided) => (
                <div className="task_nProgresss container">
                  <h3>Task in Progress</h3>
                  <ul ref={provided.innerRef} {...provided.droppableProps}>
                    <Draggable draggableId="1" index={1} key={1}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          className="task_item"
                        >
                          <header className="header">
                            <p>04/06/07 (1dayago)</p>
                            <IonIcon name="arrow-down" />
                          </header>
                          <section className=" body">body text goin ooo</section>
                        </div>
                      )}
                    </Draggable>

                    <Draggable draggableId="2" index={2} key={2}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          className="task_item"
                        >
                          <header className="header">
                            <p>04/06/07 (2dayago)</p>
                            <IonIcon name="arrow-down" />
                          </header>
                          <section className=" body">body text goin ooo</section>
                        </div>
                      )}
                    </Draggable>

                    {provided.placeholder}
                  </ul>
                </div>
              )}
            </Droppable>
            <div className="task_completed container">
              <h3>Task Completed</h3>
              <ul>
                <li>task 1</li>
                <li>task 2</li>
                <li>task 3</li>
              </ul>
            </div>
          </section>
        </main>
      </DragDropContext>
    </div>
  );
}

export default Home;
