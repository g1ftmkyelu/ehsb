import {
  FaUserMd,
  FaUserNurse,
  FaFileMedical,
  FaCalendarWeek,
  FaUsers,
  FaStethoscope,
  FaUser,
  FaUserPlus,
  FaChartLine,
  FaCalendarDay,
  FaShoppingBag,
  FaGlasses,
  FaSearch,
  FaUserCog,
  FaCog,
  FaCogs,
} from "react-icons/fa";
import {
  BiArchive,
  BiChart,
  BiSolidGroup,
  BiUserCheck,
  BiUserPin,
} from "react-icons/bi";
import {
  IoMdMedkit,
  IoIosMedkit,
  IoIosBasket,
  IoMdEyeOff,
} from "react-icons/io";
import { RiShoppingBasket2Line, RiInputCursorMove, RiLockPasswordFill } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { BsBookmarkDash, BsBox, BsCalendar2Month, BsGrid } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import data from '../sales.json'

export const HospitalAdminResources = [
  {
    path: "dashboard",
    icon: BsGrid,
    metrics: [
      {
        name: "metrics",
        units: [
          {
            title: "administrator",
            path: "administrators",
            icon: BiSolidGroup,
            dataSource: "https://ehcs.onrender.com/users/count?role=administrator",
            dataType: "count",
            color: "orange",
            seeMore: true,
            onClick: () => {
              console.log("Clicked on Doctors");
            },
            redirectLink: "/doctors",
            show: true,
          },
          {
            title: "Doctors",
            path: "doctors",
            icon: FaUserMd,
            dataSource: "https://ehcs.onrender.com/users/count?role=doctor",
            dataType: "count",
            color: "blue",
            seeMore: true,
            onClick: () => {
              console.log("Clicked on Doctors");
            },
            redirectLink: "/doctors",
            show: true,
          },
          {
            title: "Patients",
            path: "patients",
            icon: BiUserPin,
            dataSource: "https://ehcs.onrender.com/users/count?role=patient",
            dataType: "count",
            color: "green",
            seeMore: true,
            onClick: () => {
              console.log("Clicked on Patients");
            },
            show: true,
          },
          {
            title: "Products",
            path: "products",
            icon: BiUserPin,
            dataSource: "https://ehcs.onrender.com/products/count",
            dataType: "count",
            color: "purple",
            seeMore: true,
            onClick: () => {
              console.log("Clicked on Patients");
            },
            show: true,
          },
        ],
      },
    ],
    widgetConfig: {
      tableResource: {
        path: "users",
        dataSource: "https://ehcs.onrender.com/users",
        type: "crud",
        addResource: true,
        view: true,
        icon: BsBookmarkDash,
        schema: [
          { name: "fullname", title: "User Name", type: "text" },
          { name: "role", title: "role", type: "text" },
        ],
      },
      chartData: {
        chartType: "doughnut",
        fieldName: "role",
        resource: "users",
      }
    }
  },

  {
    path: "all users",
    dataSource: "https://ehcs.onrender.com/users",
    icon: FaUserNurse,
    sidePanel: false,
    type: "crudGrid",
    add: true,
    view: true,
    update: true,
    delete: true,

    menu: { name: "User Management", icon: FaUsers },
    schema: [
      { name: "Image", title: "Image", type: "file" },
      { name: "email", title: "Email", type: "text" },
      { name: "fullname", title: "Full Name", type: "text" },
      { name: "dateOfBirth", title: "Date Of Birth", type: "date" },
    ],
  },
  {
    path: "administrators",
    dataSource: "https://ehcs.onrender.com/users?role=administrator",
    icon: FaUserPlus,
    sidePanel: false,
    type: "crudGrid",
    add: true,
    view: true,
    update: true,
    delete: true,
    menu: { name: "User Management", icon: FaUsers },
        schema: [
            { name: "Image", title: "Image", type: "profile picture", type: "file" },
            { name: "fullname", title: "User Name", type: "text" },
            { name: "email", title: "Email", type: "text" },
            { name: "dateOfBirth", title: "Date Of Birth", type: "date" },
        ],
  },
  {
    path: "patients",
    dataSource: "https://ehcs.onrender.com/users?role=patient",
    icon: FaFileMedical,
    sidePanel: false,
    type: "crudGrid",
    add: true,
    view: true,
    update: true,
    delete: true,
    menu: { name: "User Management", icon: FaUsers },
        schema: [
            { name: "Image", title: "Image", type: "profile picture", type: "file" },
            { name: "fullname", title: "User Name", type: "text" },
            { name: "email", title: "Email", type: "text" },
            { name: "dateOfBirth", title: "Date Of Birth", type: "date" },
        ],
  },

  {
    path: "doctors",
    dataSource: "https://ehcs.onrender.com/users?role=doctor",
    icon: FaStethoscope,
    sidePanel: false,
    type: "crudGrid",
    add: true,
    view: true,
    update: true,
    delete: true,
    menu: { name: "User Management", icon: FaUsers },

        schema: [
            { name: "Image", title: "Image", type: "profile picture", type: "file" },
            { name: "fullname", title: "User Name", type: "text" },
            { name: "email", title: "Email", type: "text" },
            { name: "dateOfBirth", title: "Date Of Birth", type: "date" },
        ],
  },


  {
    path: "All Products",
    dataSource: "https://ehcs.onrender.com/products",
    icon: FaShoppingBag,
    sidePanel: false,
    type: "crudGrid",
    add: true,
    view: true,
    edit: true,
    update: true,
    delete: true,
    menu: { name: "Stock Management", icon: FaShoppingBag },
    schema: [
      { name: "image", title: "Image", type: "file" },
      { name: "name", title: "Product Name", type: "text" },
      { name: "price", title: "Price", type: "number" },
      { name: "unitsAvailable", title: "Units Available", type: "number" },
      {
        name: "category",
        title: "category",
        type: "select",
        options: [
          { label: "Glasses", value: "Glasses" },
          { label: "Lenses", value: "Lenses" },
          { label: "Contact Lenses", value: "Contact Lenses" },
        ],
      },
    ],
  },
  {
    path: "Glasses",
    dataSource: "https://ehcs.onrender.com/products?category=Glasses",
    icon: FaGlasses,
    sidePanel: false,
    type: "crudGrid",
    // add: true,
    view: true,
    edit: true,
    update: true,
    delete: true,
    menu: { name: "Stock Management", icon: FaShoppingBag },
    schema: [
      { name: "image", title: "Image", type: "file" },
      { name: "name", title: "Product Name", type: "text" },
      { name: "price", title: "Price", type: "number" },
      { name: "unitsAvailable", title: "Units Available", type: "number" },
      {
        name: "category",
        title: "category",
        type: "select",
        options: [
          { label: "Glasses", value: "Glasses" },
          { label: "Lenses", value: "Lenses" },
          { label: "Contact Lenses", value: "Contact Lenses" },
        ],
      },
    ],
  },

  {
    path: "Lenses",
    dataSource: "https://ehcs.onrender.com/products?category=Lenses",
    icon: FaSearch,
    sidePanel: false,
    type: "crudGrid",
    //  add: true,
    view: true,
    edit: true,
    update: true,
    delete: true,
    menu: { name: "Stock Management", icon: FaShoppingBag },
    schema: [
      { name: "image", title: "Image", type: "file" },
      { name: "name", title: "Product Name", type: "text" },
      { name: "price", title: "Price", type: "number" },
      { name: "unitsAvailable", title: "Units Available", type: "number" },
      {
        name: "category",
        title: "category",
        type: "select",
        options: [
          { label: "Glasses", value: "Glasses" },
          { label: "Lenses", value: "Lenses" },
          { label: "Contact Lenses", value: "Contact Lenses" },
        ],
      },
    ],
  },

  {
    path: "Contact Lenses",
    dataSource: "https://ehcs.onrender.com/products?category=Contact Lenses",
    icon: IoMdEyeOff,
    sidePanel: false,
    type: "crudGrid",
    // add: true,
    view: true,
    edit: true,
    update: true,
    delete: true,
    menu: { name: "Stock Management", icon: FaShoppingBag },
    schema: [
      { name: "image", title: "Image", type: "file" },
      { name: "name", title: "Product Name", type: "text" },
      { name: "price", title: "Price", type: "number" },
      { name: "unitsAvailable", title: "Units Available", type: "number" },
      {
        name: "category",
        title: "category",
        type: "select",
        options: [
          { label: "Glasses", value: "Glasses" },
          { label: "Lenses", value: "Lenses" },
          { label: "Contact Lenses", value: "Contact Lenses" },
        ],
      },
    ],
  },
  {
    path: "medications",
    dataSource: "https://ehcs.onrender.com/medications",
    icon: IoMdMedkit,
    sidePanel: false,
    type: "crudGrid",
    add: true,
    view: true,
    edit: true,
    update: true,
    delete: true,
    menu: { name: "Stock Management", icon: FaShoppingBag },
    schema: [
      { name: "image", title: "Image", type: "file" },
      { name: "name", title: "Medication Name", type: "text" },
      { name: "dosage", title: "Dosage", type: "richtextarea" },
      { name: "quantityInStock", title: "Quantity In Stock", type: "number" },

    ],
  },

  {
    path: "weekly report",
    salesData:data,
    type:"report",
    icon: FaCalendarWeek,
    menu: { name: "Reports", icon: FaChartLine },
    period: "weekly"
  },
  {
    path: "monthly report",
    salesData:data,
    type:"report",
    icon: FaCalendarWeek,
    menu: { name: "Reports", icon: FaChartLine },
    period: "monthly"
  },

  {
    path: "annual report",
    salesData:data,
    type:"report",
    icon: FaCalendarWeek,
    menu: { name: "Reports", icon: FaChartLine },
    period: "annua;"
  },
  {
    path: "profile",
    dataSource: "https://ehcs.onrender.com/user",
    icon: FaUserCog,
    sidePanel: false,
    type: "singleton",
    menu: { name: "Settings", icon: FaCogs },
    schema: [
      { name: "Image", title: "Image", type: "file" },
      { name: "fullname", title: "fullname", type: "text" },
      { name: "email", title: "Email", type: "text" },
      { name: "dateOfBirth", title: "Date Of Birth", type: "date" },
    ],
  },
  {
    path: "change password",
    dataSource: "https://ehcs.onrender.com/user",
    icon: RiLockPasswordFill,
    sidePanel: false,
    type: "singleton",
    menu: { name: "Settings", icon: FaCogs },
    schema: [

      { name: "cpassword", title: "enter current password", type: "password" },
      { name: "newpassword", title: "new password", type: "password" },
      { name: "confirmnewpass", title: "confirm new password", type: "password" },
    ],
  },
];
