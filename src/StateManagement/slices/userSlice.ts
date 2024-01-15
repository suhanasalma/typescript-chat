import { createSlice } from "@reduxjs/toolkit";
import { GroupMemberInterface } from "../../Interfaces/Interfaces";



const initialState = {
    user: [] as GroupMemberInterface[],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUserToCreateGroup: (state, action) => {
            const member = action.payload as GroupMemberInterface;
            const addedMember = state.user;
            if (addedMember.includes(member)) {
                const updatedMembers = addedMember.filter(
                    (existingMember) => existingMember !== member
                );
                state.user = updatedMembers;
            } else {
                state.user = [...addedMember, member];
            }

        },
        removeUserFromGroupList: (state, action) => {
            const memberToRemove = action.payload as GroupMemberInterface;
            const updatedMembers = state.user.filter(
                (existingMember) => existingMember._id !== memberToRemove._id
            );
            state.user = updatedMembers;
        }
    },
});

export const { addUserToCreateGroup, removeUserFromGroupList } = userSlice.actions;
export default userSlice.reducer;
