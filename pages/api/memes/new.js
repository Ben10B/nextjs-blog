import firebase from '../../../utils/firebaseConnect';

const USERS = [
  {
    id: '3146272855502486',
    name: 'BenJamIn'
  }
]

export default async (req, res) => {
  const { body } = req;
  try {
    if(body.message.content.type === 'image') {
      let user = USERS.find(x => x.id === body.from.id).name;
      firebase.database().ref('users/'+user).push({
        timestamp: body.timestamp,
        url: body.message.content.image.url
      });
    }
    console.log('INCOMING: ', body);
    res.status(200).end();
  } catch(e) {
    console.log(e);
    res.status(400).json({ success: false });
  }
}