import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid.id,
    title: "Random Title 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam sint, voluptatibus quam atque, sit cumque eaque expedita vero itaque dolorum corporis ex modi quo reiciendis nihil soluta autem consequatur?",
  },
  {
    id: nanoid.id,
    title: "Random Title 2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quae asperiores facere blanditiis. Voluptas consequatur natus voluptatibus possimus alias aut suscipit consequuntur cum accusantium a.",
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid.id,
            title,
            content,
          },
        };
      },
    },
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
