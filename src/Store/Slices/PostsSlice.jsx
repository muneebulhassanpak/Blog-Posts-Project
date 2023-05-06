import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: nanoid(),
    title: "Random Title 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam sint, voluptatibus quam atque, sit cumque eaque expedita vero itaque dolorum corporis ex modi quo reiciendis nihil soluta autem consequatur?",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: nanoid(),
    title: "Random Title 2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quae asperiores facere blanditiis. Voluptas consequatur natus voluptatibus possimus alias aut suscipit consequuntur cum accusantium a.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
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
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
