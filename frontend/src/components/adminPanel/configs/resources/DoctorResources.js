import {
  BiCheckCircle,
  BiCheckDouble,
  BiGrid,
  BiTimer,
  BiUserPin,
} from "react-icons/bi";
import { BsBookmarkDash, BsGraphUp } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaList,
  FaFileMedicalAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaTimes,
  FaUser,
  FaUserCog,
  FaCogs,
} from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export const DoctorResources = [
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
    widgetConfig: {
      tableResource: {
        path: "Your appointments",
        dataSource: "https://ehcs.onrender.com/appointments",
        type: "crud",
        addResource: true,
        view: true,
        edit: true,
        delete:true,
        icon: BsBookmarkDash,
        schema: [
          { name: "patient", title: "Patient", type: "text" },
          { name: "date", title: "Date", type: "date" },
          {
            name: "status", title: "status", type: "select", options: [
              { label: "Scheduled", value: "Scheduled" },
              { label: "Confirmed", value: "Confirmed" },
              { label: "Completed", value: "Completed" },
              { label: "Cancelled", value: "Cancelled" },


            ],
          },

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
    path: "scheduled-appointments",
    dataSource: "https://ehcs.onrender.com/appointments",
    icon: BiTimer,
    sidePanel: false,
    type: "crud",
    // add: true,
    view: true,
    edit: true,
    //update: true,
    //delete: true,
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
    edit: true,
    //update: true,
    //delete: true,
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
    edit: true,
    //update: true,
    //delete: true,
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
    edit: true,
    //update: true,
    // delete: true,
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
