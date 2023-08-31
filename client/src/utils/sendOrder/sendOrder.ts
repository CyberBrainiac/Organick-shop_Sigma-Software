import axios from "axios";
import { FormProps } from "@/types/main-types";

async function sendOrder(data: FormProps) {
  const apiUrl = "http://localhost:3200/orders";

  try {
    const response = await axios.post(apiUrl, data);
    console.log('Server response:', response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
} 

export default sendOrder;