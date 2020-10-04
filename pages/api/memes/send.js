import firebase from '../../../utils/firebaseConnect';
import Nexmo from 'nexmo';
import fs from 'fs';
import { NEXMO } from '../../../utils/constants';

export default async (req, res) => {
  const { method, body } = req;
  let { message: { content } } = body;
  switch(method) {
    case 'GET': 
      res.status(200).json({ msg: "You're doing it wrong big fella..." });
    break;
    case 'POST': 
      try {
        let exists = await isInFirebase(body);
        if(!exists && content.type === 'image') sendSMS(NEXMO.ERRORS.NEW_USER+"\n\n"+NEXMO.HELP.TYPE, body);
        else if(!exists && content.type === 'text') createUser(body);
        else if(exists && content.type === 'text') editUser(body);
        else if(exists && content.type === 'image') addImage(body);

        res.status(200).end();
      } catch(e) {
        console.log(e);
        res.status(400).json({ success: false });
      }
    break;
    default: break;
  }
}

function addImage(body) {
  let { message: { content }, from, timestamp } = body;
  firebase.database().ref('users/'+from.id+"/images").push({
    timestamp: timestamp,
    url: content.image.url
  });
  sendSMS(NEXMO.SUCCESS.IMAGE_UPLOADED+"\n\n"+NEXMO.HELP.TYPE, body);
}

async function isInFirebase(body) {
  let user = await firebase.database().ref('users/'+body.from.id).once('value').then(snapshot => snapshot);
  return user.hasChild('id');
}

function createUser(body) {
  let { message: { content }, from } = body;
  let user = { id: from.id };

  if(content.text.toLowerCase().includes('name.')) user.name = content.text.substring(5).trim();
  else {
    sendSMS(NEXMO.HELP.HEADER+"\n\n"+NEXMO.HELP.NAME+"\n"+NEXMO.HELP.TYPE, body);
    return;
  };

  firebase.database().ref('users/'+from.id).set(user);
  sendSMS(NEXMO.SUCCESS.NEW_USER+"\n\n"+NEXMO.HELP.TYPE, body);
}

function editUser(body) {
  let { message: { content }, from } = body;
  let user = { id: from.id };
  
  if(content.text.toLowerCase().includes('name.')) user.name = content.text.substring(5).trim();
  else {
    sendSMS(
      NEXMO.HELP.HEADER+"\n\n"+NEXMO.HELP.NAME+"\n\n"+NEXMO.HELP.IMG+"\n\n"+NEXMO.HELP.TYPE, 
      body);
    return;
  };
  firebase.database().ref('users/'+from.id).update(user);
  sendSMS(NEXMO.SUCCESS.EDIT_USER+"\n\n"+NEXMO.HELP.TYPE, body);
}

async function sendSMS(text, body) {
  let privateKeyPath = await fs.realpathSync('utils/private.key', (error, resolvedPath) => { 
    if (error) console.log(error); 
    else return resolvedPath;
  });

  const nexmo = new Nexmo({
    apiKey: 'a62cdc0c',
    apiSecret: '4mmVqSeicWTnEccs',
    applicationId: '8207bea0-2ebc-4f4a-9ae3-84f5064cfbae',
    privateKey: privateKeyPath
  });
  nexmo.channel.send(
    { type: 'messenger', id: body.from.id },
    { type: 'messenger', id: body.to.id },
    {
      content: {
        type: 'text',
        text,
      },
    },
    (err, data) => {
      if (err) console.error(err);
      else console.log(data.message_uuid);
    }
  );
}