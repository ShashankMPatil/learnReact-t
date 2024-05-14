import React, { useState } from "react";
import Task from "../Task/Task";
import "./taskManager.css";

const TaskManager = () => {
	const [title, settitle] = useState("");
	const [description, setdescription] = useState("");
	const [send, setSend] = useState(false);
	const submitHandler = (e) => {
		e.preventDefault();
		setSend(true);
	};
	return (
		<div className="mainContainer">
			<form action="" className="mainForm">
				<div>
					<label htmlFor="taskTitle" className="taskTitleLabel">
						Task Title
					</label>
					<input
						type="text"
						name=""
						id="taskTitle"
						value={title}
						onChange={(e) => settitle(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="taskDescription" className="taskDescriptionLabel">
						Task Description
					</label>
					<input
						type="text"
						name=""
						id="taskDescription"
						value={description}
						onChange={(e) => setdescription(e.target.value)}
					/>
				</div>
				<div>
					<button onClick={(e) => submitHandler(e)}>Submit</button>
				</div>
			</form>
			<Task title={title} description={description} />
		</div>
	);
};

export default TaskManager;
