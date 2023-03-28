import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAlarm } from "../features/clockSlice";

const AddAlarm = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const dispatch = useDispatch();

  const handleAddAlarm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(time);
    dispatch(
      addAlarm({
        title,
        id: new Date().getTime(),
        date: new Date(time).toLocaleDateString(),
        time: new Date(time).toLocaleTimeString(),
      })
    );
  };

  return (
    <form
      onSubmit={handleAddAlarm}
      className="w-80 sm:w-96 md:w-[500px] mx-auto flex flex-col gap-5"
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        className="outline-none border border-gray-200 rounded px-2 py-1 focus:border-gray-400"
        type="text"
        placeholder="Title"
        required
      />
      <input
        onChange={(e) => setTime(e.target.value)}
        className="outline-none border border-gray-200 rounded px-2 py-1 focus:border-gray-400"
        type="datetime-local"
        required
      />
      <button className="border border-gray-200 rounded px-2 py-1">
        Add Alarm
      </button>
    </form>
  );
};

export default AddAlarm;
