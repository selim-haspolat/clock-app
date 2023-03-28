import { useDispatch } from "react-redux";
import { deleteAlarm, Payload } from "../features/clockSlice";

const AlarmCard = ({ alarm }: { alarm: Payload }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <h1>{alarm.title}</h1>
        <button onClick={() => dispatch(deleteAlarm(alarm))} className="text-red-500 text-2xl">
          x
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          {alarm.date} {alarm.time}
        </div>
        <div>{alarm.id}</div>
      </div>
    </div>
  );
};

export default AlarmCard;
