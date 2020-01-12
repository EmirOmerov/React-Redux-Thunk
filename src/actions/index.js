import jsonPlaceholder from '../apis/jsonPlaceholder.js';
import _ from 'lodash';

//action creater for posts
//function returnin a function
export const fetchPosts = () => async dispatch =>{
    //making a get request
        const response = await jsonPlaceholder.get('/posts');

        dispatch({
            type:'FETCH_POSTS', 
            payload: response.data
        });
    };
//action creator for users
export const fetchUser = (id) => dispatch =>_fetchUser(id, dispatch);
    

    //memoize method
    const _fetchUser = _.memoize(async (id, dispatch)=>{
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({ type:'FETCH_USER', payload:response.data });

    });
    




    //returning action object but in this case we are not returning an object
    //we are returnin a function
    //thats why we use redux-thunk
     
   /* return {
        type :'FETCH_POSTS',
        payload: promise
        };*/
/*
export const selectPost =()=>{
    return{
        type:'SELECT-POST',
    }
};*/