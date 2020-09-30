import axios from "axios";
import {
      ADD_ANNONCE,
      GET_ANNONCE,
      DELETE_ANNONCE,
      EDIT_ANNONCE,
      AUTH_ERROR,
      SET_LOADING,
  } from "../const/actionType";
  //Add Annoces
  
export const addAnnoces = (newAnnonce) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.post("/api/auth/addannonce", newAnnonce,options);
     dispatch({
        type:  ADD_ANNONCE,
        payload: res.data, 
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
  //get annonce
  export const getAnnoces = () => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const res = await axios.get("/api/auth/allannonce",options);
     dispatch({
        type: GET_ANNONCE,
        payload: res.data, 
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
 
  //delete annonces
  export const deleteAnnonce = id => dispatch => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    const res =axios.delete(`/api/auth/deleteannonceartisan/${id}`,options);
      dispatch({
          type: DELETE_ANNONCE,
          payload: id
        });
    } catch (error) {
        dispatch({
          type: AUTH_ERROR,
        });
      }
    };
    //editannonce
    export const editAnnonce=(id,updateAnnonce)=>dispatch=>{
        dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
        const res =axios.put(`/api/auth/editannonce/${id}`,updateAnnonce,options)
        dispatch({
            type: EDIT_ANNONCE,
            payload:res.data
          });
      } catch (error) {
          dispatch({
            type: AUTH_ERROR,
          });
        }
      };
      const setLoading = () => (dispatch) => {
        dispatch({
          type: SET_LOADING,
        });
      };

