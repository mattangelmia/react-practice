import React from "react";

export default function DateFilter(props) {
  return (
    <div>
      <label>Filter by year</label>
      <select value={props.selected} onChange={(e) => props.changeDate(e)}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}
