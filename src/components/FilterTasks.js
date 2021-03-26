// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { tasks } from "../states";

// const FilterTasks = () => {
//   let stateTasks = useSelector((state) => state);
//   const [filterTasks, setfilterTasks] = useState("");
//   const [filterResult, setfilterResult] = useState([]);

//   console.log(stateTasks);

//   useEffect(() => {
//     // console.log(stateTasks);
//     const myFilterResult = stateTasks.filter((filteredTask) =>
//       filteredTask.taskName.toLowerCase().includes(filterTasks)
//     );
//     setfilterResult(myFilterResult);
//   }, [filterTasks]);

//   return (
//     <div>
//       <span>
//         <input
//           type="text"
//           className="filter"
//           value={filterTasks}
//           onChange={(e) => setfilterTasks(console.log(e.target.value))}
//           placeholder="Filter Tasks"
//         />
//       </span>
//       <span className="no">Number of Tasks: {tasks.length} </span>
//     </div>
//   );
// };

// export default FilterTasks;
