import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = [
    {
        id: 1,
        title: 'Travel Adventures',
        content: 'Explore the world and discover new cultures. Share your experiences with fellow travelers.'
    },
    {
        id: 2,
        title: 'Recipe Book',
        content: 'A collection of delicious recipes from around the globe. Cook and enjoy a variety of cuisines.'
    },
    {
        id: 3,
        title: 'Fitness Journal',
        content: 'Track your workouts, set goals, and stay motivated on your fitness journey.'
    },
    {
        id: 4,
        title: 'Book Recommendations',
        content: 'Discover must-read books recommended by book enthusiasts. Share your favorites too!'
    },
    {
        id: 5,
        title: 'Code Snippets',
        content: 'A repository of useful code snippets and programming tips. Enhance your coding skills.'
    },
    {
        id: 6,
        title: 'Nature Photography',
        content: 'Capture the beauty of nature through your lens. Share breathtaking photos of landscapes and wildlife.'
    },
    {
        id: 7,
        title: 'Mindfulness Meditation',
        content: 'Practice mindfulness and meditation techniques to find inner peace and reduce stress.'
    },
    {
        id: 8,
        title: 'Gardening Tips',
        content: 'Grow your own garden with expert tips on planting, cultivating, and maintaining various plants.'
    },
    {
        id: 9,
        title: 'DIY Crafts',
        content: 'Get creative with do-it-yourself craft projects. Transform ordinary materials into works of art.'
    },
    {
        id: 10,
        title: 'Technology Reviews',
        content: 'Stay updated on the latest gadgets and technology trends. Read reviews and share your tech experiences.'
    }
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
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
    }
});

export const { addPost } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts
export default postsSlice.reducer;
