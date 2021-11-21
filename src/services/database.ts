import axios from "axios";

interface Account {
  providerID: string;
  name: string;
  photoURL: string;
  inventory: string;
  email: string;
}

interface Products {
  sku: string;
  category: string;
  productName: string;
  providerName: string;
  value: number;
  uid: string;
}

export async function setAccountInDatabase(account: Account) {
  const response = await axios({
    method: "post",
    url: "/api/account",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ account }),
  });

  return response.data;
}

export async function setProductsInDatabase(products: Products) {
  await axios({
    method: "post",
    url: "/api/inventory/products",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ products }),
  });
}

export async function getInventoryFromDatabase(id: string) {
  const response = await axios({
    method: "get",
    url: `/api/inventory/${id}`,
    responseType: "json",
  });
  return response.data;
}
