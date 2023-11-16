import { CiBoxList, CiGrid2H, CiGrid42, CiHome, CiShoppingBasket, CiUser } from "react-icons/ci";
import { FaCogs } from "react-icons/fa";

// Define resources for the seller user
export const sellerResources = [
  {
    path: "dashboard",
    icon: CiGrid42
  },
  {
    path: "products",
    dataSource: "https://ehcs.onrender.com/products",
    icon: CiBoxList,
    sidePanel: false,
    type: "crud",
    add: true,
    view: true,
    edit: true,
    update: true,
    delete: true,
    menu: {name:"options", icon:CiBoxList},
    schema: [
      { name: "name", title: "Product Name", type: "text" },
      { name: "description", title: "Description", type: "textarea" },
      { name: "price", title: "Price", type: "number" },
      { name: "stock", title: "Stock Quantity", type: "number" },
    ],
  },
  {
    path: "orders",
    dataSource: "https://ehcs.onrender.com/orders",
    icon: CiShoppingBasket,
    sidePanel: false,
    type: "crudGrid",
    add: false,
    view: true,
    edit: false,
    update: false,
    delete: false,
    menu: {name:"options", icon:CiBoxList},
    schema: [
      { name: "orderNumber", title: "Order Number", type: "text" },
      { name: "customerName", title: "Customer Name", type: "text" },
      { name: "totalAmount", title: "Total Amount", type: "number" },
      { name: "orderDate", title: "Order Date", type: "date" },
    ],
  },
  {
    path: "profile",
    dataSource: "https://ehcs.onrender.com/profile",
    icon: CiUser,
    sidePanel: false,
    type: "singleton",
    add: false,
    view: true,
    edit: true,
    update: true,
    delete: false,
    menu: {name:"settings", icon:FaCogs},
    schema: [
      { name: "name", title: "Name", type: "text" },
      { name: "email", title: "Email", type: "email" },
      { name: "phone", title: "Phone", type: "tel" },
      { name: "address", title: "Address", type: "textarea" },
      { name: "postalCode", title: "Postal Code", type: "text" },
      { name: "zipCode", title: "Zip Code", type: "text" },
      {
        name: "country",
        title: "Country",
        sidePanel: false,
        type: "select",
        options: [
          { label: "Algeria", value: "Algeria" },
          { label: "Morocco", value: "Morocco" },
          // Add more country options as needed
        ],
      },
    ],
  },
  {
    path: "sales",
    dataSource: "https://ehcs.onrender.com/sales",
    icon: CiShoppingBasket,
    sidePanel: false,
    type: "crudGrid",
    add: false,
    view: true,
    edit: false,
    update: false,
    delete: false,
    menu: {name:"options", icon:CiBoxList},
    schema: [
      { name: "productSold", title: "Product Sold", type: "text" },
      { name: "quantitySold", title: "Quantity Sold", type: "number" },
      { name: "totalRevenue", title: "Total Revenue", type: "number" },
      { name: "saleDate", title: "Sale Date", type: "date" },
    ],
  },
];
