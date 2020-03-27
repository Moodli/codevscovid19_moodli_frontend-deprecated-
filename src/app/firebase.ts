import 'firebase/analytics';
import * as firebase from 'firebase/app';

export default !firebase.apps.length
  ? firebase.initializeApp({})
  : firebase.app();
