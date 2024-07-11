import Modal from '../modal/Modal';
import FillButton from './FillButton';
import IconButton from './IconButton';
import InputField from './InputField';

const AddTaskModal = () => {
  return (
    <Modal id="addTask">
      <div className="addTask_modal">
        <header className="header">
          <h3>Add Task</h3>
          <IconButton icon="close" hasText={false} />
        </header>

        <section className="body">
          <div className="inputGroup">
            <h6>Date</h6>
            <InputField inputType="date" name="date" placeholder="Enter Date" />
          </div>
          <div className="inputGroup">
            <h6>Task Name</h6>
            <InputField inputType="text" name="taskName" placeholder="Enter a Task name if any" />
          </div>

          <div className="inputGroup">
            <h6>Task Item</h6>
            <InputField inputType="text" name="task" placeholder="Enter a Signle Task" />
          </div>

          <FillButton text="Commt to Task" />
        </section>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
