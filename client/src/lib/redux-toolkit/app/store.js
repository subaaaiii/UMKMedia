import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/user/userSlice";
import detailKelasSlice from "../feature/detail-kelas/detailKelasSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    detailKelasSlice,
  },
});
