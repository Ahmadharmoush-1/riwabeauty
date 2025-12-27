export const createOrder = (req, res) => {
  const { name, email, items } = req.body;

  if (!name || !email || !items) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const newOrder = { id: Date.now().toString(), name, email, items };
  console.log("Order created:", newOrder);

  res.status(201).json(newOrder);
};
