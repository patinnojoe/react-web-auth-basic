import { useContext, useState } from 'react';
import Modal from '../modal/Modal';
import FillButton from './FillButton';
import IconButton from './IconButton';
import InputField from './InputField';
import { ModalContext } from '../store/ModalProvider';
import { postTask } from '../utils/tasks';
import { toast } from 'sonner';

const AddTaskModal = () => {
  const { closeModal } = useContext(ModalContext);
  // const {  } = useContext(AuthContext);

  let user = localStorage.getItem('pas-user');
  let userDetails = JSON.parse(user);

  const [task, setTask] = useState({
    task_name: '',
    task: '',
    taskDateAdded: '',
  });

  const handleAddTask = async () => {
    toast.info('😎 Adding task...');
    try {
      const res = await postTask(task, userDetails);
      setTask({
        task: '',
        task_name: '',
        taskDateAdded: '',
      });
      toast.success('⚒⚒ Task added! get to work!');
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error('😢😩 hate when this happens,try again');
    }

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
              name="task_name"
              placeholder="Enter a Task name if any"
              value={task.task_name}
              onChange={(e) => {
                setTask({ ...task, task_name: e.target.value });
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
                setTask({ ...task, task: e.target.value });
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
