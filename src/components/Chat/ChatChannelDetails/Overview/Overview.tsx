import React from "react";
const moment = require("moment-timezone");

interface OverviewProps {
  overviewDetails: any;
  img: string;
  name: string;
}
const Overview = ({ overviewDetails, img, name }: OverviewProps) => {
  let time = moment(overviewDetails?.createdAt).format("YYYY-MM-DD hh:mm A");
  console.log("time", time);
  return (
    <div className="px-5 py-8">
      <img
        className="object-cover h-20 w-20 rounded-full mb-5"
        src={img}
        alt="user"
      />
      <p className="font-bold text-md">{name}</p>
      {!overviewDetails?.group_type && (
        <div>
            <p className="mt-3">Email</p>
          <p className="text-slate">{overviewDetails?.email}</p>
          <div className="mt-10 flex items-center justify-between text-center gap-5 text-sm">
            <button style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} className="px-4 w-6/12 py-1 rounded-md">Block</button>
            <button style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} className="px-4 w-6/12 py-1 rounded-md text-red">Report contact</button>
          </div>
        </div>
      )}
      {overviewDetails?.group_type &&
        overviewDetails?.group_type !== "one-to-one" && (
          <div>
            <div>
              <p className="text-slate">Created</p>
              <p className="text-slate">{time}</p>
            </div>
            <div>
              <button>Exit group</button>
              <button>Report group</button>
            </div>
          </div>
        )}
    </div>
  );
};

export default Overview;
