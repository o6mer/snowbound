import React from "react";
import ResortDetails from "./ResortDetails";

const CompareTable = ({ DUMMY_RESORT }) => {
  return (
    <>
      <div className="flex p-5 gap-5 ">
        {DUMMY_RESORT.map((resort) => {
          return <ResortDetails key={resort.id} resortData={resort} />;
        })}
      </div>
      {/* <ResortDetails resortData={DUMMY_RESORT[0]} /> */}

      {/* <div className="p-0 overflow-x-auto shadow-md sm:rounded-lg w-full flex justify-center my-[10vh] ">
      <table className=" text-sm text-left text-gray-500 dark:text-gray-400 overflow-scroll w-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 text-left bg-gray-700  text-white">hi</th>
            {DUMMY_RESORT.map((resurt, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 bg-gray-700 text-white"
                >
                {resurt.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>*:nth-child(odd)]:bg-gray-50  [&>*:nth-child(odd)>th]:bg-gray-50 table-body">
          {Object.keys(DUMMY_RESORT[0]).map((key) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="capitalize border-r border-r-gray-800 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {key}
                </th>

                {DUMMY_RESORT.map((rs) => (
                  <>
                    {typeof rs[key] == "boolean" ? (
                      <td className="px-6 py-4 w-fit ">
                        {rs[key] ? "Yes" : "No"}
                      </td>
                    ) : (
                      <td className="px-6 py-4 w-fit ">{rs[key]}</td>
                    )}
                  </>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div> */}
    </>
  );
};
export default CompareTable;
