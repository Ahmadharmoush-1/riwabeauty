import express from "express";
import cors from "cors";
import ordersRoutes from ".orders.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Orders route
app.use("/orders", ordersRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
