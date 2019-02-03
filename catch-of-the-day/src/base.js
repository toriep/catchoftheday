import Rebase from 're-base';
import firebase from 'firebase';
import { EFAULT } from 'constants';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB539Ulzh9GHuJsCjiz3JUuD0SK6r7euJI",
    authDomain: "catch-of-the-day-3c4e2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-3c4e2.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database())//database is a function that will return the database that we have

export { firebaseApp };

export default base;