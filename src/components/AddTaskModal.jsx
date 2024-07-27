import { useContext, useState } from 'react';
import Modal from '../modal/Modal';
import FillButton from './FillButton';
import IconButton from './IconButton';
import InputField from './InputField';
import { ModalContext } from '../store/ModalProvider';
import { postTask } from '../utils/tasks';

const AddTaskModal = () => {
  const { closeModal } = useContext(ModalContext);
  const [task, setTask] = useState({
    taskname: '',
    taskItem: '',
    taskDateAdded: '',
  });

  const handleAddTask = () => {
    console.log(task);

    postTask(task);
    setTask({
      taskItem: '',
      taskname: '',
      taskDateAdded: '',
    });
    closeModal('addTask');
  };
  return (
    <Modal id="addTask">
      <div className="addTask_modal">
        <header className="header">
          <h3>Add Task</h3>
          <IconButton icon="close" hasText={false} onClick={() => closeModal('addTask')} />
        </header>

        <section className="body">
          <div className="inputGroup">
            <h6>Task Name</h6>
            <InputField
              inputType="text"
              name="taskName"
              placeholder="Enter a Task name if any"
              value={task.taskname}
              onChange={(e) => {
                setTask({ ...task, taskname: e.target.value });
              }}
            />
          </div>

          <div className="inputGroup">
            <h6>
              Task Item<span style={{ color: 'red' }}>*</span>
            </h6>
            <textarea
              className="textarea"
              placeholder="Enter Task item"
              onChange={(e) => {
                setTask({ ...task, taskItem: e.target.value });
              }}
            ></textarea>
            {/* <InputField inputType="text" name="task" placeholder="Enter a Signle Task" /> */}
          </div>

          <FillButton text="Commt to Task" onClick={handleAddTask} />
        </section>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
