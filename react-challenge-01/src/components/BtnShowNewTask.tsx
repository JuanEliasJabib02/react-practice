import { Dispatch, SetStateAction } from 'react';

type Props = {
	setShowAddTask: Dispatch<SetStateAction<boolean>>;
};

const BtnShowNewTask = ({ setShowAddTask }: Props) => {
	const openAddTask = () => {
		setShowAddTask(true);
	};
	return (
		<div className='flex justify-center'>
			<button
				className='px-4 py-2 rounded bg-[#8338ec]'
				type='button'
				onClick={openAddTask}
			>
				add new task
			</button>
		</div>
	);
};

export default BtnShowNewTask;
