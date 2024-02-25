import { useSelector } from "react-redux";
import { RootState } from "../StateManagement/store/store";

export default function useAuth() {
    const auth = useSelector((state: RootState) => state?.auth);

    if (auth?.user) {
        return true;
    } else {
        return false;
    }
}
