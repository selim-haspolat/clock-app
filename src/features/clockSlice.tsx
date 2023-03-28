import { createSlice } from "@reduxjs/toolkit";

export interface Payload {
  title: string;
  id: number;
  date: string;
  time: string;
}

interface State {
  title: string;
  date: string;
  time: string;
  alarm: Payload[];
}

const defaultState: State = {
  title: "",
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString(),
  alarm: [{ title: "Alarm 1", date: "asa", time: "as", id: 0 }],
};

const clockSlice = createSlice({
  name: "clock",
  initialState: defaultState,
  reducers: {
    addAlarm: (state, { payload }) => {
      state.alarm.push(payload);
    },
    deleteAlarm: (state, { payload: { id } }) => {
      state.alarm = state.alarm.filter((a) => a.id !== id);
    },
    updateTime: (state) => {
      state.time = new Date().toLocaleTimeString();
    },
  },
});

export const { addAlarm, deleteAlarm, updateTime } = clockSlice.actions;
export default clockSlice.reducer;
