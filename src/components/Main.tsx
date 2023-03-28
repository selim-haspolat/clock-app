
import { useDispatch, useSelector } from "react-redux";
import { Payload, updateTime } from "../features/clockSlice";
import AddAlarm from "./AddAlarm";
import AlarmCard from "./AlarmCard";

const Main = () => {
  const { alarm, time, date } = useSelector((state: any) => state.clock);
  const dispatch = useDispatch()


  setInterval(() => dispatch(updateTime()), 1000)

  return (
    <div className="pt-10 flex flex-col gap-10">
      <div className="text-7xl text-center tracking-wide">
        {time}
      </div>
      <div className="w-80 sm:w-96 md:w-[500px] mx-auto">
        {alarm.map((alarm: Payload) => (
          <AlarmCard key={alarm.id} alarm={alarm}/>
        ))}
      </div>
      <AddAlarm />
    </div>
  );
};

export default Main;
