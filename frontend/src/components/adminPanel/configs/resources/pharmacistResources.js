import { IoMdMedkit } from "react-icons/io";
import { BiGrid, BiTimer } from "react-icons/bi";
import {
  FaCalendarAlt,
  FaList,
  FaCheckCircle,
  FaTimesCircle,
  FaUser,
  FaPills,
} from "react-icons/fa";

export const pharmacistResources = [
  {
    path: "dashboard",
    icon: BiGrid,
    metrics: [
      {
        name: "Resources",
        units: [
          {
            title: "Medicines",
            path: "medications",
            icon: FaPills,
            dataSource: "https://ehcs.onrender.com/medications/count",
            dataType: "count",
            color: "blue",
            seeMore: true,
            onClick: () => {
              console.log("Clicked on Doctors");
            },
            show: true,
          },
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
      { name: "image", title: "Image", type: "file" },
      { name: "username", title: "Username", type: "text" },
      { name: "email", title: "Email", type: "text" },
      { name: "firstName", title: "First Name", type: "text" },
      { name: "lastName", title: "Last Name", type: "text" },
      { name: "dateOfBirth", title: "Date Of Birth", type: "date" },
    ],
  },
];
