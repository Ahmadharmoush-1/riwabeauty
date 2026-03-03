// src/hooks/useOrders.ts
import axios from "axios";

// Define the type for each item in the order
export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

// Define the payload for creating an order
export interface CreateOrderPayload {
  name: string;
  email: string;
  items: OrderItem[];
}

// Function to create an order by calling the backend
export const createOrder = async (order: CreateOrderPayload) => {
  try {
    const response = await axios.post("http://localhost:5000/orders", order, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // Return backend response
  } catch (error: any) {
    console.error("Error creating order:", error.response || error.message);
    throw error;
  }
};
