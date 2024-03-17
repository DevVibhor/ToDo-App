import { PropsWithChildren } from "react";
import { MdDelete } from "react-icons/md";

type TasksType = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

const Tasks = ({ id, title, children, onDelete }: TasksType) => {
  return (
    <div
      key={id}
      style={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <MdDelete
        onClick={() => onDelete(id)}
        color={"red"}
        size={30}
        style={{
          alignSelf: "flex-start",
          cursor: "pointer",
          userSelect: "none",
        }}
      />
    </div>
  );
};

export default Tasks;
