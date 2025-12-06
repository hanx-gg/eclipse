export default function handler(req, res) {
  const version = "v1.0.2";
  return res.status(200).json({ version });
}
