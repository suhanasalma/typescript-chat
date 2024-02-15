import React from 'react';
const moment = require('moment-timezone');


interface OverviewProps {
    overviewDetails: any
    img: string;
    name: string;
}
const Overview = ({ overviewDetails, img, name }: OverviewProps) => {
    let time = moment(overviewDetails.createdAt).format("YYYY-MM-DD hh:mm A");
    console.log("time", time);
    return (
        <div className='px-5 py-8'>

            <img className="object-cover h-20 w-20 rounded-full " src={img} alt="user" />
            <p className='font-bold text-md'>{name}</p>
            {
                !overviewDetails.group_type && <div>
                    <p className='text-slate'>{overviewDetails.email}</p>
                    <div>
                        <button>Block</button>
                        <button>Report contact</button>
                    </div>
                </div>
            }
            {
                overviewDetails.group_type && overviewDetails.group_type !== "one-to-one" && <div>
                    <div>
                        <p className='text-slate'>Created</p>
                        <p className='text-slate'>{time}</p>
                    </div>
                    <div>
                        <button>Exit group</button>
                        <button>Report group</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default Overview;