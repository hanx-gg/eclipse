export default function handler(req, res) {
  const version = "v1.0.1";
  return res.status(200).json({ version });
}
