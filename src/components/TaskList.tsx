import { TodoProps } from "../types/Todo";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export const TaskList = ({id, text, statusInProgress, onDelete, onEdit, onCheckDone}: TodoProps) => {
  return (
    <div className="flex align-baseline pt-1 pb-1 border-solid border-b-2 border-gray-300" key={id}>
      {statusInProgress ? (
        <>
          <input type="checkbox" className="bg-gray-300" onChange={onCheckDone} />
          <p className="w-11/12 text-sm ml-2 text-gray-500 text-left">{text}</p>
        </>
      ): (
        <>
          <input type="checkbox" checked={!statusInProgress} onChange={onCheckDone} />
          <p className="w-11/12 text-sm ml-2 text-gray-500 line-through">{text}</p>
        </>
      )}
      <div className="w-1/12 flex align-middle h-5">
        {statusInProgress! && ( 
          <button type="button" onClick={onEdit}>
            <MdEdit size={21} className="text-gray-500" />
          </button>
        )}
        <button type="button" onClick={onDelete}>
          <MdDelete size={21} className="text-gray-500" />
        </button>
      </div>
    </div>
  )

}