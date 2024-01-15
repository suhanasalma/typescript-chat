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
          
            const isMemberAlreadyAdded = addedMember.some(
              (existingMember) => existingMember._id === member._id
            );
          
            if (isMemberAlreadyAdded) {
              const updatedMembers = addedMember.filter(
                (existingMember) => existingMember._id !== member._id
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
        },
        resetUser: (state) => {
            state.user = initialState.user;
          },
    },
});

export const { addUserToCreateGroup, removeUserFromGroupList,resetUser } = userSlice.actions;
export default userSlice.reducer;
