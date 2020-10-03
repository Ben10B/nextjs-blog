import Nexmo from 'nexmo';

const nexmo = new Nexmo({
  apiKey: 'a62cdc0c',
  apiSecret: '4mmVqSeicWTnEccs'
})

export default async (req, res) => {
  const { method, query } = req;
  console.log('INCOMING: ', query);
  res.status(200).end();
}