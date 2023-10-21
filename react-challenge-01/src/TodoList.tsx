import { useState } from 'react';

type Task = {
	task: string;
	status: 'complete' | 'incompleted';
};

/**
 *
 * Steps to solve.
 * 1 - Create add task
 * 2 - Render tasks
 */

export default function TodoList() {
	const [showAddTask, setShowAddTask] = useState<boolean>(false);
	const [newTask, setNewTask] = useState<Task | null>(null);
	const [tasks, setTasks] = useState<Task[] | null>(null);

	const handleNewTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};
	console.log(setNewTask, newTask);
	console.log(tasks, setTasks);

	const openAddTask = () => {
		setShowAddTask(true);
	};

	const handleAddtask = () => {
		console.log('añadida');
		setShowAddTask(false);
	};

	return (
		<div className='bg-red-500 h-screen'>
			<div className='p-4'>
				<h1 className='text-center text-xl'>
					REACT CHALLENGE 01: <br /> TODO-LIST
				</h1>
				<div className='bg-yellow-500 mt-4'>
					{showAddTask ? (
						<div>
							<button type='button' onChange={handleAddtask}>
								Add
							</button>
							<input
								type='text'
								onChange={handleNewTaskInput}
								placeholder='Add the new task'
							/>
						</div>
					) : (
						<div>
							<button type='button' onClick={openAddTask}>
								ADDTASK
							</button>
						</div>
					)}
				</div>
				<div></div>
			</div>
		</div>
	);
}
