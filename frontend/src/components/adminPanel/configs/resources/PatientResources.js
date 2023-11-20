import { Fa500Px, FaCalendar, FaGlasses, FaList, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { BiCheckCircle, BiCheckDouble, BiGrid, BiTimer } from "react-icons/bi";
import { IoMdMedkit, IoMdEyeOff } from 'react-icons/io';
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";




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
            seeMore: true,
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
            seeMore: true,
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
            seeMore: true,
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
            seeMore: true,
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
            seeMore: true,
            onClick: () => {
              console.log("Clicked on Cancelled Appointments");
            },
            redirectLink: "/cancelled-appointments",
            show: true,
          },
        ],
      },
    ],
  },

  {
    path: "Book-appointment",
    type: "wizard",
    dataSource: "https://ehcs.onrender.com/appointments",
    icon: FaCalendar,
    menu: { name: "Appointments", icon: FaList },
    steps: [
      {
        title: "Enter Your full name",
        fields: [
          {
            name: "patient",
            placeholder: "patient's Name",
          },
        ],
      },
      {
        title: "Choose a Doctor",
        fields: [
          {
            name: "doctor",
            type: "select",
            placeholder: "Doctor's Name",
            dataSource:
              "https://ehcs.onrender.com/users?role=doctor&returnFields=firstName,lastName",
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
    successPath: "scheduled-appointments",
  },
  {
    path: "scheduled-appointments",
    dataSource: "https://ehcs.onrender.com/appointments",
    icon: BiTimer,
    sidePanel: false,
    type: "crud",
    // add: true,
    view: true,
    //edit: true,
    //update: true,
    delete: true,
    fetchDataByQuery: true,
    queryField: "status",
    queryValue: "Scheduled",
    menu: { name: "Appointments", icon: FaList },
    schema: [
      {
        name: "patient",
        title: "Patient",
        type: "text",
      },
      { name: "doctor", title: "Doctor", type: "text" },
      { name: "date", title: "Appointment Date", type: "date" },
      {
        name: "status",
        title: "Status",
        type: "select",
        options: [
          { label: "Scheduled", value: "Scheduled" },
          { label: "Confirmed", value: "Confirmed" },
          { label: "Completed", value: "Completed" },
          { label: "Cancelled", value: "Cancelled" },
        ],
      },
    ],
  },
  {
    path: "confirmed-appointments",
    dataSource: "https://ehcs.onrender.com/appointments",
    icon: BiCheckCircle,
    sidePanel: false,
    type: "crud",
    add: false,
    view: true,
    //edit: true,
    //update: true,
    delete: true,
    fetchDataByQuery: true,
    queryField: "status",
    queryValue: "Confirmed",
    menu: { name: "Appointments", icon: FaList },
    schema: [
      {
        name: "patient",
        title: "Patient",
        type: "text",
      },
      { name: "doctor", title: "Doctor", type: "text" },
      { name: "date", title: "Appointment Date", type: "date" },
      {
        name: "status",
        title: "Status",
        type: "select",
        options: [
          { label: "Scheduled", value: "Scheduled" },
          { label: "Confirmed", value: "Confirmed" },
          { label: "Completed", value: "Completed" },
          { label: "Cancelled", value: "Cancelled" },
        ],
      },
    ],
  },
  {
    path: "Completed-appointments",
    dataSource: "https://ehcs.onrender.com/appointments",
    icon: BiCheckDouble,
    sidePanel: false,
    type: "crud",
    add: false,
    view: true,
    //edit: true,
    //update: true,
    delete: true,
    fetchDataByQuery: true,
    queryField: "status",
    queryValue: "Completed",
    menu: { name: "Appointments", icon: FaList },
    schema: [
      {
        name: "patient",
        title: "Patient",
        type: "text",
      },
      { name: "doctor", title: "Doctor", type: "text" },
      { name: "date", title: "Appointment Date", type: "date" },
      {
        name: "status",
        title: "Status",
        type: "select",
        options: [
          { label: "Scheduled", value: "Scheduled" },
          { label: "Confirmed", value: "Confirmed" },
          { label: "Completed", value: "Completed" },
          { label: "Cancelled", value: "Cancelled" },
        ],
      },
    ],
  },
  {
    path: "Cancelled-appointments",
    dataSource: "https://ehcs.onrender.com/appointments",
    icon: FaTimes,
    sidePanel: false,
    type: "crud",
    add: false,
    view: true,
    //edit: true,
    //update: true,
    delete: true,
    fetchDataByQuery: true,
    queryField: "status",
    queryValue: "Cancelled",
    menu: { name: "Appointments", icon: FaList },
    schema: [
      {
        name: "patient",
        title: "Patient",
        type: "text",
      },
      { name: "doctor", title: "Doctor", type: "text" },
      { name: "date", title: "Appointment Date", type: "date" },
      {
        name: "status",
        title: "Status",
        type: "select",
        options: [
          { label: "Scheduled", value: "Scheduled" },
          { label: "Confirmed", value: "Confirmed" },
          { label: "Completed", value: "Completed" },
          { label: "Cancelled", value: "Cancelled" },
        ],
      },
    ],
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
    dataSource: "https://ehcs.onrender.com/users",
    icon: FaUser,
    sidePanel: false,
    type: "singleton",
    queryField: "_id",
    queryValue: localStorage.getItem("id"),

    schema: [
      { name: "Image", title: "Image", type: "file" },
      { name: "username", title: "Username", type: "text" },
      { name: "email", title: "Email", type: "text" },
      { name: "firstName", title: "First Name", type: "text" },
      { name: "lastName", title: "Last Name", type: "text" },
      { name: "dateOfBirth", title: "Date Of Birth", type: "date" },
    ],
  },
];
