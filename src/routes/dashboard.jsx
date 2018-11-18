// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/recents",
    sidebarName: "What's New",
    navbarName: "What's New",
    icon: Dashboard,
    component: DashboardPage
  },
  // {
  //   path: "/blogs",
  //   sidebarName: "Blogs",
  //   navbarName: "Blogs",
  //   icon: Person,
  //   component: UserProfile
  // },
  // {
  //   path: "/images",
  //   sidebarName: "Images",
  //   navbarName: "Images",
  //   icon: "content_paste",
  //   component: TableList
  // },
  // {
  //   path: "/vlogs",
  //   sidebarName: "Vlogs",
  //   navbarName: "Vlogs",
  //   icon: LibraryBooks,
  //   component: Typography
  // },
  // {
  //   path: "/me",
  //   sidebarName: "Me",
  //   navbarName: "Me",
  //   icon: BubbleChart,
  //   component: UserProfile
  // },
  // {
  //   path: "/maps",
  //   sidebarName: "Maps",
  //   navbarName: "Map",
  //   icon: LocationOn,
  //   component: Maps
  // },
  // {
  //   path: "/notifications",
  //   sidebarName: "Notifications",
  //   navbarName: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage
  // },
  { redirect: true, path: "/", to: "/recents", navbarName: "Redirect" }
];

export default dashboardRoutes;
