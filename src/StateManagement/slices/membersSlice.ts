import { createSlice } from "@reduxjs/toolkit";
import { GroupMemberInterface } from "../../Interfaces/Interfaces";



const initialState = {
    members: [] as GroupMemberInterface[],
};

const membersSlice = createSlice({
    name: "members",
    initialState,
    reducers: {
        addUserToCreateGroup: (state, action) => {
            const member = action.payload as GroupMemberInterface;
            const addedMember = state.members;
          
            const isMemberAlreadyAdded = addedMember.some(
              (existingMember) => existingMember._id === member._id
            );
          
            if (isMemberAlreadyAdded) {
              const updatedMembers = addedMember.filter(
                (existingMember) => existingMember._id !== member._id
              );
              state.members = updatedMembers;
            } else {
              state.members = [...addedMember, member];
            }
          },
        removeUserFromGroupList: (state, action) => {
            const memberToRemove = action.payload as GroupMemberInterface;
            const updatedMembers = state.members.filter(
                (existingMember) => existingMember._id !== memberToRemove._id
            );
            state.members = updatedMembers;
        },
        resetUser: (state) => {
            state.members = initialState.members;
          },
    },
});

export const { addUserToCreateGroup, removeUserFromGroupList,resetUser } = membersSlice.actions;
export default membersSlice.reducer;
