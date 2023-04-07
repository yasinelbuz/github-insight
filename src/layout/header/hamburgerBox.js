//icons
import { HamburgerIcon } from "@/icons";

//styles
import styles from './styles.module.scss';

//redux
import { useDispatch, useSelector } from "react-redux";
import { setOpenMobileMenu } from "@/redux/theme";

export default function HamburgerBox() {

   const dispatch = useDispatch();
   const { isOpenMobileMenu } = useSelector((state) => state.theme)

   const handleOpen = () => {
      dispatch(setOpenMobileMenu(!isOpenMobileMenu))
   }

   return <div className={styles.hamburger__icon} onClick={handleOpen}>
      <HamburgerIcon />
   </div>;
}
