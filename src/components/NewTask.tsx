import React, { FormEvent, useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

type NewTaskType = {
  createTask: (titleData: string, descriptionData: string) => void;
};

const NewTask = ({ createTask }: NewTaskType) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const onSubmitTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredTitle = titleRef.current!.value;
    const enteredDescription = descriptionRef.current!.value;
    if (enteredTitle != "" && enteredDescription != "") {
      createTask(enteredTitle, enteredDescription);
      // To clear the input fields
      event.currentTarget.reset();
    }
  };

  return (
    <form
      onSubmit={onSubmitTask}
      style={{
        width: "90%",
      }}
    >
      <p>
        <label htmlFor="title">Title*</label>
        <input ref={titleRef} type="text" id="title"></input>
      </p>

      <p>
        <label htmlFor="description">Description*</label>
        <input ref={descriptionRef} type="text" id="description"></input>
      </p>

      <button
        style={{
          height: 45,
          display: "block",
          width: "100%",
          alignSelf: "center",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        Add
        <AiOutlinePlusCircle
          size={20}
          style={{
            padding: 0,
            margin: 0,
            position: "absolute",
            paddingLeft: 10,
          }}
        />
      </button>
    </form>
  );
};

export default NewTask;
