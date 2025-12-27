import ContactMessage from "../models/ContactMessage.js";

export const submitMessage = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const contact = new ContactMessage({ name, email, message });
  await contact.save();
  res.status(201).json(contact);
};
