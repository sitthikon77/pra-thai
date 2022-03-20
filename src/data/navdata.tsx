import { VscHome } from "react-icons/vsc";
import { FiTriangle } from "react-icons/fi";
import { BiCertification } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { GrTextAlignFull } from "react-icons/gr";
import { BsChatLeftText } from "react-icons/bs";

const NavData = [
  {
    title: "หน้าแรก",
    path: "/",
    icon: <VscHome />,
  },
  {
    title: "รายการพระเครื่อง",
    path: "/list-pra-page",
    icon: <FiTriangle />,
  },
  {
    title: "ตรวจสอบใบรับรองพระเครื่อง",
    path: "/certificate-page",
    icon: <BiCertification />,
  },
  {
    title: "ข่าวสาร",
    path: "/news-page",
    icon: <IoNewspaperOutline />,
  },
  {
    title: "ติดต่อเรา",
    path: "/contract-page",
    icon: <BsChatLeftText />,
  },
  {
    title: "นโยบายและเงื่อนไข",
    path: "/policy-page",
    icon: <GrTextAlignFull />,
  },
];

export default NavData;
