import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Task } from '../TodoList';

type Props = {
	setShowAddTask: Dispatch<SetStateAction<boolean>>;
	setTasks: Dispatch<SetStateAction<Task[] | null>>;
};

const AddTask = ({ setShowAddTask, setTasks }: Props) => {
	const [newTask, setNewTask] = useState<Task | null>(null);

	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleInput = () => {
		const inputValue = inputRef.current?.value;

		if (inputValue) {
			const task: Task = {
				task: inputValue,
				status: 'incompleted',
			};
			setNewTask(task);
		}
	};

	const handleAddtask = () => {
		if (newTask) {
			setTasks(prevTasks => [...(prevTasks || []), newTask]);
		}
		setShowAddTask(false);
	};

	return (
		<div className='flex '>
			<input
				type='text'
				ref={inputRef}
				onChange={handleInput}
				placeholder='Add the new task'
			/>
			<button
				className='px-4 py-2  rounded bg-[#8338ec]'
				type='button'
				onClick={handleAddtask}
			>
				Add
			</button>
		</div>
	);
};

export default AddTask;
