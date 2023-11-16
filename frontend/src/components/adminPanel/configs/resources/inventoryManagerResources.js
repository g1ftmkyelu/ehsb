import { BsBox } from "react-icons/bs";
import { BiGrid, BiTimer } from "react-icons/bi";
import {
  FaCalendarAlt,
  FaList,
  FaCheckCircle,
  FaTimesCircle,
  FaUser,
  FaUserMd,
  FaBalanceScaleRight,
} from "react-icons/fa";
import { fetchUserData } from "../../../../Redux/slices/authThunk";


export const inventoryManagerResources = [
  {
    path: "dashboard",
    icon: BiGrid,
    metrics: [
      {
        name: "Resources",
        units: [
          {
            title: "Invetories",
            path: "inventories",
            icon: FaBalanceScaleRight,
            dataSource: "https://ehcs.onrender.com/inventories/count",
            dataType: "count",
            color: "black",
            seeMore: true,
            onClick: () => {
              console.log("Clicked on"+this.name);
            },
            show: true,
          },
        ]
 
      },
    ],
  },
  {
    path: "inventories",
    dataSource: "https://ehcs.onrender.com/inventories",
    icon: BsBox,
    sidePanel: false,
    type: "crud",
    add: true,
    view: true,
    edit: true,
    update: true,
    delete: true,
    menu: { name: "resources", icon: FaList },
    schema: [
      { name: "itemName", title: "Item Name", type: "text" },
      { name: "quantity", title: "Quantity", type: "number" },
      { name: "expirationDate", title: "Expiration Date", type: "date" },
    ],
  },
  {
    path: "profile",
    dataSource: "https://ehcs.onrender.com/users",
    icon: FaUser,
    sidePanel: false,
    type: "singleton",
    queryField: "username",
    queryValue: async () => {
      const userData =  await fetchUserData();
      return userData;
    },
    schema:[
      {name:"image", title:"Image", type:"file"},
      {name:"username", title:"Username", type:"text"},
      {name:"email", title:"Email", type:"text"},
      {name:"firstName", title:"First Name", type:"text"},
      {name:"lastName", title:"Last Name", type:"text"},
      {name:"dateOfBirth", title:"Date Of Birth", type:"date"}
    ]

  },
];
