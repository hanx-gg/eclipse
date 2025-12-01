export default function handler(req, res) {
  const version = "v0.0.1";
  return res.status(200).json({ version });
}
