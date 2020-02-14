import React, { useReducer } from 'react';
import uuidv4 from 'uuid/v4';
import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: uuidv4(), 
                    title: action.payload.title,
                    content: action.payload.Context 
                }
            ];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);    
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });
        callback();
    };
};

const deleteBlogpost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    }
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogpost },
    [{id: '1', title: 'Post 1', content: 'Post content'}]
);
