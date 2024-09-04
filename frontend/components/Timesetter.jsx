import { useState } from "react";
import TimePicker from "react-time-picker";
import "react-clock/dist/Clock.css";
import "react-time-picker/dist/TimePicker.css";
export function TImeSetter() {
  const [value, onChange] = useState("10:00");

  return (
    <div className="">
      <TimePicker clockAriaLabel="Toggle clock"
        className="bg-[#D1D5DB] rounded-lg"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
