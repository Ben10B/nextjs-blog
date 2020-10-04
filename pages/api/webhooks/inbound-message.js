export default async (req, res) => {
  const { body } = req;
  try {
    console.log('INCOMING-MESSAGE:', body);
    res.status(200).end();
  } catch(e) {
    console.log(e);
    res.status(400).json({ success: false });
  }
}