// import axios from "axios";
// import { updateStart, updateSuccess, updateFailure } from "./userSlice";

// export const updateUser = async (user, dispatch) => {
//   dispatch(updateStart());
//   try {
//     const res = await axios.post("http://localhost:8800/api/users/1/update", user);
//     dispatch(updateSuccess(res.data));
//   } catch (err) {
//     dispatch(updateFailure());
//   }
// };

import axios from "axios";
import { updateStart, updateSuccess, updateError } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("http://localhost:3000/user", user);
    dispatch(updateSuccess(res.data));
    console.log(res)
  } catch (error) {
    dispatch(updateError());
  }
}