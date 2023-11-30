import { Fa500Px, FaCalendar, FaCogs, FaGlasses, FaList, FaMedkit, FaRegEye, FaSearch, FaShoppingBag, FaTimes, FaUser, FaUserCog } from "react-icons/fa";
import { BiCheckCircle, BiCheckDouble, BiGrid, BiTimer } from "react-icons/bi";
import { IoMdMedkit, IoMdEyeOff } from 'react-icons/io';
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { BsBookmarkDash, BsEye } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";




export const PatientResources = [
  {
    path: "dashboard",
    icon: BiGrid,
    metrics: [
      {
        name: "Appointments",
        units: [
          {
            title: "All Appointments",
            path: "appointments",
            icon: FaCalendarAlt,
            dataSource: "https://ehcs.onrender.com/appointments/count",
            dataType: "count",
            color: "blue",

            onClick: () => {
              console.log("Clicked on Appointments");
            },
            redirectLink: "/appointments",
            show: true,
          },
          {
            title: "Scheduled Appointments",
            path: "scheduled-appointments",
            icon: BiTimer,
            dataSource:
              "https://ehcs.onrender.com/appointments/count?status=Scheduled",
            dataType: "fieldQuery",
            field: "status",
            value: "Scheduled",
            color: "lightBlue",

            onClick: () => {
              console.log("Clicked on Patients");
            },
            redirectLink: "/patients",
            show: true,
          },
          {
            title: "Confirmed Appointments",
            path: "confirmed-appointments",
            icon: FaCheckCircle,
            dataSource:
              "https://ehcs.onrender.com/appointments/count?status=Confirmed",
            dataType: "fieldQuery",
            field: "status",
            value: "Confirmed",
            color: "lime",

            onClick: () => {
              console.log("Clicked on Confirmed Appointments");
            },
            redirectLink: "/confirmed-appointments",
            show: true,
          },
          {
            title: "Completed Appointments",
            path: "completed-appointments",
            icon: FaCheckCircle,
            dataSource:
              "https://ehcs.onrender.com/appointments/count?status=Completed",
            dataType: "fieldQuery",
            field: "status",
            value: "Completed",
            color: "green",

            onClick: () => {
              console.log("Clicked on Completed Appointments");
            },
            redirectLink: "/completed-appointments",
            show: true,
          },
          {
            title: "Cancelled Appointments",
            path: "cancelled-appointments",
            icon: FaTimesCircle,
            dataSource:
              "https://ehcs.onrender.com/appointments/count?status=Cancelled",
            dataType: "fieldQuery",
            field: "status",
            value: "Cancelled",
            color: "red",

            onClick: () => {
              console.log("Clicked on Cancelled Appointments");
            },
            redirectLink: "/cancelled-appointments",
            show: true,
          },
        ],
      },
    ],
    widgetConfig: {
      tableResource: {
        path: "Your appointments",
        dataSource: "https://ehcs.onrender.com/appointments",
        type: "crud",
        addResource: true,
        view: true,
        icon: BsBookmarkDash,
        schema: [
          { name: "doctor", title: "Doctor", type: "text" },
          { name: "date", title: "Date", type: "date" },
          { name: "time", title: "Time", type: "time" },

        ],
      },
      chartData: {
        chartType: "doughnut",
        fieldName: "status",
        resource: "appointments",
      }
    }
  },

  {
    path: "Book-appointment",
    type: "wizard",
    dataSource: "https://ehcs.onrender.com/appointments",
    icon: FaCalendar,
    steps: [
      {
        title: "Enter Appointment Title (Could be anything as long as it describes the appointment)",
        fields: [
          {
            name: "title",
            type: "text",
            placeholder: "Enter Appointment Title",
          },
        ],
      },
      {
        title: "Choose your name",
        fields: [
          {
            name: "patient",
            type: "select",
            dataSource: "https://ehcs.onrender.com/users?role=patient",
            displayKey: "fullname"
          },
        ],
      },
      {
        title: "Choose a Doctor",
        fields: [
          {
            name: "doctor",
            type: "select",
            dataSource: "https://ehcs.onrender.com/users?role=doctor",
            displayKey: "fullname"
          },
        ],
      },
      {
        title: "Select Date and Time",
        fields: [
          { name: "date", type: "date", placeholder: "Date" },
          { name: "time", type: "time", placeholder: "Time" },
        ],
      },
      {
        title: "Provide Appointment Details",
        fields: [
          {
            name: "description",
            type: "textarea",
            placeholder: "Appointment Description",
          },
        ],
      },
    ],
    successMessage: "Your Appointment has been Booked successfully!",
    successPath: "dashboard",
  },

  {
    path: "our products",
    dataSource: "https://ehcs.onrender.com/products",
    icon: FaShoppingBag,
    sidePanel: false,
    type: "shop",
    add: true,
    view: true,
    edit: true,
    update: true,
    delete: true,
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
