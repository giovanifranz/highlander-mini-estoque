import axios from "axios";

interface Account {
  providerID: string;
  name: string;
  photoURL: string;
  inventory: string;
  email: string;
}

interface RegisterProduct {
  accountID: string;
  sku: string;
  productName: string;
  providerName: string;
  value: number;
}

export async function setAccountInDatabase(account: Account) {
  const response = await axios({
    method: "post",
    url: "/api/account",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ account }),
    responseType: "json",
  });

  return response.data;
}

export async function setProductsInDatabase({
  accountID,
  ...products
}: RegisterProduct) {
  await axios({
    method: "post",
    url: `/api/products/${accountID}`,
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ products }),
  });
}

export async function getAccountFromDatabase(id: string) {
  const response = await axios({
    method: "get",
    url: `/api/account/${id}`,
    responseType: "json",
  });
  return response.data;
}

export async function getProductsFromDatabase(id: string) {
  const response = await axios({
    method: "get",
    url: `/api/products/${id}`,
    responseType: "json",
  });
  
  return response.data;	
}
