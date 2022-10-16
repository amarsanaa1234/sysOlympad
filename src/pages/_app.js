import { Modal } from "@redq/reuse-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "../containers/CryptoModern/CountDown/timer.css";
import "common/assets/css/icon-example-page.css";
// swiper bundle styles
import "swiper/css/bundle";
import "common/assets/css/react-slick.css";
import "common/assets/css/rc-collapse.css";
import "rc-collapse/assets/index.css";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        draggable
        style={{ zIndex: 999999, top: 50 }}
      />
      <Component {...pageProps} />
    </Modal>
  );
}
