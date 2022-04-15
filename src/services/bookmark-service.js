/**
 * @file Implement api services for operations related to bookmark
 */
 import axios from "axios";

 const BASE_URL = process.env.REACT_APP_BASE_URL;
 const TUITS_API = `${BASE_URL}/api/tuits`;
 const USERS_API = `${BASE_URL}/api/users`;
 
 const api = axios.create({
    withCredentials: true
  });

 /**
  * Update that the user bookmark the tuit
  * @param uid user id
  * @param tid tuit id
  * @returns bookmark object
  */
 export const userBookmarksToggle = (uid, tid) =>
     api.put(`${USERS_API}/${uid}/bookmarks/${tid}`)
         .then(response => response.data);
 
 /**
  * Update that the user unbookmark the tuit
  * @param uid user id
  * @param tid tuit id
  * @returns bookmark object
  */
 export const userUnbookmarksTuit = (uid, tid) =>
     api.delete(`${USERS_API}/${uid}/bookmarks/${tid}`)
         .then(response => response.data);
 