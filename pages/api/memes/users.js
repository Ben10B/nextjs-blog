import firebase from '../../../utils/firebaseConnect';

export default async (req, res) => {
  let users = await firebase.database().ref('users').once('value').then(snapshot => snapshot);
  return res.status(200).json({ users: '# of users: '+users.numChildren() })
}