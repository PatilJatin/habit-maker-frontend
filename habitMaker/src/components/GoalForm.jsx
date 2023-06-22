import { useState } from 'react';

const GoalForm = () => {
  const [title, setTitle] = useState('');
  const [days, setDays] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDaysChange = (e) => {
    const selectedDays = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setDays(selectedDays);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleTaskTitleChange = (index, e) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = e.target.value;
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    const newTask = {
      title: '',
      currentStatus: false,
      prevStatus: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log('Form submitted:', { title, days, startDate, endDate, tasks });
    // Reset form state
    setTitle('');
    setDays([]);
    setStartDate('');
    setEndDate('');
    setTasks([]);
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-white shadow-md rounded px-8 py-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter goal title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="days">
            Days
          </label>
          <select
  className="shadow flex appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  id="days"
  multiple
  value={days}
  onChange={handleDaysChange}
  required
>
  <option className=' rounded-full border-red-20'  value="Sunday" selected>Sunday</option>
  <option className=' rounded-full border-red-20'  value="Monday" selected>Monday</option>
  <option className=' rounded-full border-red-20'  value="Tuesday" selected>Tuesday</option>
  <option  className=' rounded-full border-red-20' value="Wednesday" selected>Wednesday</option>
  <option  className=' rounded-full border-red-20' value="Thursday" selected>Thursday</option>
  <option className=' rounded-full border-red-20'  value="Friday" selected>Friday</option>
  <option className=' rounded-full border-red-20'  value="Saturday" selected>Saturday</option>
</select>
 
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
            Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startDate"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
            End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="endDate"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tasks">
            Tasks
          </label>
          {tasks.map((task, index) => (
            <div className="flex mb-2" key={index}>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter task title"
                value={task.title}
                onChange={(e) => handleTaskTitleChange(index, e)}
                required
              />
              <button
                className="ml-2 py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => handleRemoveTask(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="py-2 px-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GoalForm;

