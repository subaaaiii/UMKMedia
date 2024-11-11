import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  star: 0,
  image: null,
  nama: null,
  level: null,
  pendaftar: null,
  harga: 0,
  value: [],
  indexRating: 0,
};

export const detailKelasSlice = createSlice({
  name: "detailKelas",
  initialState,
  reducers: {
    detailKelas: (state, action) => {
      //   state.star = action.payload[0].kelas_bisni.total_nilai;
      //   state.image = action.payload[0].kelas_bisni.image;
      //   state.nama = action.payload[0].kelas_bisni.nama;
      //   state.level = action.payload[0].kelas_bisni.kelas_level.nama;
      //   state.pendaftar = action.payload[0].kelas_bisni.jumlah_pendaftar;
      //   state.harga = action.payload[0].value.kelas_bisni.harga;
      state.value = action.payload;
      console.log({ action });
    },
    setIndexRating: (state, action) => {
      state.indexRating = action.payload;
    },
  },
});

export const { detailKelas, setIndexRating } = detailKelasSlice.actions;
export default detailKelasSlice.reducer;
