import { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../services/firebase";
import { ref, set, child, push } from "firebase/database";

interface Account {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  password: string;
  inventoryName: string;
  inventoryId: string;
}

interface Products {
  sku: string;
  category: string;
  productName: string;
  providerName: string;
  value: number;
  uid: string;
}

export default async function databaseAPI(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const param = request.query.param;
  const error = {
    error: {
      code: "not_found",
      messgae:
        "The requested endpoint was not found or doesn't support this method.",
    },
  };

  if (request.method === "GET") {
    if (param === "user") {
      const hello = [
        { id: 1, name: "John" },
        { id: 2, name: "John" },
        { id: 3, name: "John" },
      ];
      return response.json(hello);
    }
  }
  if (request.method === "POST") {
    if (param === "user") {
      const { account } = request.body;
      const { uid } = account as Account;
      const userRef = ref(database, "user/" + uid);
      await set(userRef, account);
      return response.status(200).end();
    } else if (param === "products") {
      const { products } = request.body;
      const { uid } = products as Products;
      const userRef = ref(database, "user/" + uid);
      const newProduct = push(child(userRef, 'inventory')).key;
    } else {
      return response.status(404).json(error);
    }
  }
  return response.status(404).json(error);
}
