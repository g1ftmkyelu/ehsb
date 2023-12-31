import { CiBoxList, CiHome, CiShoppingBasket, CiUser } from "react-icons/ci";
import {
  FaList,
  FaPiggyBank,
  FaReply,
  FaSalesforce,
  FaShoppingBag,
  FaTicketAlt,
  FaUser,
  FaUsers,
  FaUsersSlash,
  FaVrCardboard,
} from "react-icons/fa";



// Define resources for the administrator user
export const adminResources = [
  {
    path: "dashboard",
    icon: CiHome,
    metrics: [
      {
        title: "Products",
        path:"products",
        icon: FaVrCardboard,
        dataSource: "https://ehcs.onrender.com/products",
        dataType:"count",
        color: "purple",
        seeMore: true,
        onClick: () => {
          console.log("Clicked on Products");
        },
        redirectLink: "/products",
        show: true,
      },

      {
        title: "Orders",
        path:"orders",
        icon: FaShoppingBag,
        dataSource: "https://ehcs.onrender.com/orders",
        dataType:"count",
        color: "orange",
        seeMore: true,
        onClick: () => {
          console.log("Clicked on Orders");
        },
        redirectLink: "/orders",
        show: true,
      },
      {
        title: "Employees",
        path:"employees",
        icon: FaUsers,
        dataSource: "https://ehcs.onrender.com/employees",
        dataType:"count",
        color: "blue",
        seeMore: true,
        onClick: () => {
          console.log("Clicked on Users");
        },
        redirectLink: "/users",
        show: true,
      },
      {
        title:"Employees",
        path:"employees",
        icon:FaUsers,
        dataSource:"https://ehcs.onrender.com/employees",
        dataType:"pieChart",
        color:"indigo",
        seeMore:false,
        show:false
      },
      {
        title:"Sales Employees",
        path:"employees",
        icon:FaSalesforce,
        dataSource:"https://ehcs.onrender.com/employees",
        dataType:"fieldQuery",
        field:"",
        value:"",
        color:"violet",
        seeMore:true,
        show:true
      },
      {
        title: "Customers",
        path:"customers",
        icon: FaUsersSlash,
        dataSource: "https://ehcs.onrender.com/customers",
        dataType:"count",
        color: "green",
        seeMore: true,
        onClick: () => {
          console.log("Clicked on Users");
        },
        redirectLink: "/customers",
        show: true,
      },
      {
        title: "Customers this month",
        path:"customers",
        icon: FaUsersSlash,
        dataSource: "https://ehcs.onrender.com/customers",
        dataType:"timeframe",
        timeFrame:"this month",
        color: "red",
        seeMore: true,
        onClick: () => {
          console.log("Clicked on Users");
        },
        redirectLink: "/customers",
        show: true,
      },
      ,
      {
        title: "Customers last month",
        path:"customers",
        icon: FaUsersSlash,
        dataSource: "https://ehcs.onrender.com/customers",
        dataType:"timeframe",
        timeFrame:'last month',
        color: "cyan",
        seeMore: true,
        onClick: () => {
          console.log("Clicked on Users");
        },
        redirectLink: "/customers",
        show: true,
      },

      
    ],
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
    menu: { name: "resources", icon: FaList },
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
    type: "crud",
    add: true,
    view: true,
    edit: true,
    update: true,
    delete: true,
    menu: { name: "resources", icon: FaList },
    schema: [
      { name: "orderNumber", title: "Order Number", type: "text" },
      { name: "customerName", title: "Customer Name", type: "text" },
      { name: "totalAmount", title: "Total Amount", type: "number" },
    ],
  },
  {
    path: "customers",
    dataSource: "https://ehcs.onrender.com/customers",
    icon: CiUser,
    sidePanel: false,
    type: "crud",
    add: true,
    view: true,
    edit: true,
    update: true,
    delete: true,
    menu: { name: "users", icon: FaUser },
    schema: [
      { name: "name", title: "Name",  },
      { name: "email", title: "Email", type: "email" },
      { name: "phone", title: "Phone", type: "tel" },
      { name: "createdAt", title: "Created At", type: "date" },
      { name: "updatedAt", title: "Updated At", type: "date" },
    ],
  },
  {
    path: "employees",
    dataSource: "https://ehcs.onrender.com/employees",
    icon: CiUser,
    sidePanel: false,
    type: "crud",
    add: true,
    view: true,
    edit: true,
    update: true,
    delete: true,
    menu: { name: "users", icon: FaUser },
    schema: [
      { name: "name", title: "Name", type: "text" },
      { name: "email", title: "Email", type: "email" },
      {
        name: "role",
        title: "Role",
        sidePanel: false,
        type: "select",
        options: [
          { label: "Logistics", value: "logistics" },
          { label: "Administrator", value: "administrator" },
          { label: "Sales", value: "sales" },
          { label: "Marketing", value: "marketing" },
          { label: "Accounting", value: "accounting" },
        ],
      },
      { name: "salary", title: "Salary", type: "number" },
      { name: "hireDate", title: "Hire Date", type: "date" },
    ],
  },
];
