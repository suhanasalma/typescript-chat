import React from 'react';


interface OverviewProps {
    overviewDetails: any
    img: string;
    name: string;
}
const Overview = ({ overviewDetails, img, name }: OverviewProps) => {
    return (
        <div className='px-5 py-8'>
            
            <img className="object-cover h-20 w-20 rounded-full " src={img} alt="user" />
            <p className='font-bold text-md'>{name}</p>
            {
                !overviewDetails.group_type &&  <p className='text-slate'>{overviewDetails.email}</p>
            }
            {
                overviewDetails.group_type!=="one-to-one" &&  <div>
                    <p className='text-slate'>Created</p>
                    <p className='text-slate'>{overviewDetails.created_at}</p>
                </div>
            }
           
        </div>
    );
};

export default Overview;