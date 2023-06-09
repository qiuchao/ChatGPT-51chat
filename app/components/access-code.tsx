import { Path } from "../constant";
import { IconButton } from "./button";
import styles from "./new-chat.module.scss";
import { useNavigate } from "react-router-dom";

import LeftIcon from "../icons/left.svg";
import QRCode from "../icons/qrcode.jpg";

import Locale from "../locales";
import NextImage from "next/image";

export function AccessCode() {
  const navigate = useNavigate();

  return (
    <div className={styles["new-chat"]}>
      <div className={styles["mask-header"]}>
        <IconButton
          icon={<LeftIcon />}
          text={Locale.NewChat.Return}
          onClick={() => navigate(Path.Home)}
        ></IconButton>
      </div>
      <NextImage src={QRCode} alt="logo" width={1074 / 3} height={1455 / 3} />
      <div className={styles["qrcode-title"]}>{"添加客服微信获取访问码"}</div>
      <div className={styles["sub-title"]}>{"(qc_hao)"}</div>

      <div className={styles["masks"]}></div>
    </div>
  );
}
