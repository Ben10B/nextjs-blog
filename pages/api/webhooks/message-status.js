export default async (req, res) => {
  const { body } = req;
  console.log('STATUS:', body.status);
  res.status(200).end();
}