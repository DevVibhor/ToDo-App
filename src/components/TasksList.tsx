import React, { ReactNode } from "react";
import Tasks from "./Tasks";
import { TasksType } from "../App";
import InfoBox from "./InfoBox";
import { MdOutlineWork } from "react-icons/md";
import { MdOutlineAddTask } from "react-icons/md";

type TasksListType = {
  tasks: Array<TasksType>;
  onDeleteTask: (id: number) => void;
};
const TasksList = ({ tasks, onDeleteTask }: TasksListType) => {
  if (tasks.length === 0) {
    return (
      <InfoBox mode="hint">
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MdOutlineAddTask size={25} style={{ marginRight: 10 }} />
          <p>You've no tasks! Let's get started</p>
        </div>
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (tasks.length >= 4) {
    warningBox = (
      <InfoBox mode="hint">
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MdOutlineWork size={25} style={{ marginRight: 10 }} />
          <p>Slow down champ! you are doing too much</p>
        </div>
      </InfoBox>
    );
  }

  if (tasks.length > 0) {
    return (
      <>
        {warningBox}
        <ul>
          {tasks?.map((task) => (
            <li key={task?.id}>
              <Tasks id={task?.id} title={task?.title} onDelete={onDeleteTask}>
                <p>{task?.description}</p>
              </Tasks>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default TasksList;
