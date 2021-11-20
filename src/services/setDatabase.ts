import axios from "axios";

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

export async function setAccountInDatabase(account: Account) {
  await axios({
    method: "post",
    url: "/api/inventory/user",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ account }),
  });
}

export async function setProductsInDatabase(products: Products) {
  await axios({
    method: "post",
    url: "/api/inventory/products",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ products }),
  });
}
