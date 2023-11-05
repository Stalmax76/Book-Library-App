import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  title: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //-при використанні стандартного редюсера обовязково вернути об'єкт
      // return { ...state, title: action.payload };

      state.title = action.payload; // можем змінювати завдяки createSlice і пакету immer
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const { setTitleFilter, resetFilters } = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export default filterSlice.reducer;
