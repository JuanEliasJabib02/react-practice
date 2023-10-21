import { useState } from 'react';
import BtnShowNewTask from './components/BtnShowNewTask';
import AddTask from './components/AddTask';

export type Task = {
	task: string;
	status: 'complete' | 'incompleted';
};

export default function TodoList() {
	const [showAddTask, setShowAddTask] = useState<boolean>(false);
	const [tasks, setTasks] = useState<Task[] | null>(null);

	console.log(tasks);

	return (
		<div className='bg-white h-screen'>
			<div className='p-4'>
				<h1 className='text-center text-xl'>
					REACT CHALLENGE 01: <br /> TODO-LIST
				</h1>
				<div className=' mt-4 '>
					{showAddTask ? (
						<AddTask setShowAddTask={setShowAddTask} setTasks={setTasks} />
					) : (
						<BtnShowNewTask setShowAddTask={setShowAddTask} />
					)}
				</div>
				<div>
					{tasks?.map(task => (
						<p>{task.task}</p>
					))}
				</div>
			</div>
		</div>
	);
}
