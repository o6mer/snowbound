import React from "react";

const CompareTable = ({ DUMMY_RESORT }) => {
  return (
    <div className=" overflow-x-scroll shadow-md sm:rounded-lg w-fit">
      <table className=" text-sm text-left text-gray-500 dark:text-gray-400 overflow-scroll">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 text-left text-gray-500">hi</th>
            {DUMMY_RESORT.map((resurt, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {resurt.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(DUMMY_RESORT[0]).map((key) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {key}
                </th>

                {DUMMY_RESORT.map((rs) => (
                  <td className="px-6 py-4 w-fit ">{rs[key]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default CompareTable;
