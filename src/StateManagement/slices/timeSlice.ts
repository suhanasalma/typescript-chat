import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from 'moment';

interface TimeState {
    [id: string]: string; // Assuming the key is a string (could be number or any other type)
}

const initialState: TimeState = {};

// const timeSlice = createSlice({
//     name: "time",
//     initialState,
//     reducers: {
//         calculateDisplayTime: (state, action: PayloadAction<{ id: string; timestamp: string | undefined }>) => {
//             const { id, timestamp } = action.payload;
//             console.log(id, timestamp);
//             const messageTimeMillis = (timestamp ? parseInt(timestamp) : 0) * 1000;
//             const currentDate = moment();
//             const messageDate = moment(messageTimeMillis);
//             const minutesAgo = currentDate.diff(messageDate, 'minutes');
//             let displayTime;
//             if (minutesAgo < 1) {
//                 displayTime = 'Just now';
//             } else if (minutesAgo < 59) {
//                 displayTime = `${minutesAgo} min${minutesAgo !== 1 ? 's' : ''} ago`;
//             } else if (currentDate.isSame(messageDate, 'day')) {
//                 displayTime = messageDate.format('hh:mm a');
//             } else {
//                 displayTime = messageDate.format('MMM DD, YYYY');
//             }
//             // Update the state with display time for the specific list item
//             state[id] = displayTime;
//         }
//     },
// });


const timeSlice = createSlice({
    name: "time",
    initialState,
    reducers: {
        calculateDisplayTime: (state, action: PayloadAction<{ id: string; timestamp: string | undefined }>) => {
            const { id, timestamp } = action.payload;
            if (!timestamp) return; // If timestamp is undefined, return early
            const messageDate = moment(timestamp);
            const currentDate = moment();
            // console.log("messageDate", messageDate);
            // console.log("currentDate", currentDate);
            const minutesAgo = currentDate.diff(messageDate, 'minutes');
            // console.log("minutesAgo", minutesAgo);

            let displayTime;
            if (minutesAgo < 1) {
                displayTime = 'Just now';
            } else if (minutesAgo < 59) {
                displayTime = `${minutesAgo} min${minutesAgo !== 1 ? 's' : ''} ago`;
            } else if (currentDate.isSame(messageDate, 'day')) {
                displayTime = messageDate.format('hh:mm a');
            } else {
                displayTime = messageDate.format('MMM DD, YYYY');
            }
            // Update the state with display time for the specific list item
            state[id] = displayTime;
        }
    },
});
export const { calculateDisplayTime } = timeSlice.actions;
export default timeSlice.reducer;
