export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  // Add your email subscription logic here
  // For example, save to a database or send to an email service

  return res.status(200).json({ message: "Subscription successful" });
}