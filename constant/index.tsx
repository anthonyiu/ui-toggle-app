import {
  FaWifi,
  FaBluetoothB,
  FaMoon,
  FaBan,
  FaBath,
  FaBoltLightning,
  FaBomb,
  FaDownload,
  FaAmilia,
  FaAppleWhole,
  FaArrowRightLong,
  FaLemon,
  FaBowlRice,
  FaRegSnowflake,
} from "react-icons/fa6";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { SiNfc, SiProtonvpn } from "react-icons/si";
import {
  MdDownloadDone,
  MdOutlineScreenRotation,
  MdRamenDining,
  MdStar,
} from "react-icons/md";
import { MdOutlineScreenLockPortrait } from "react-icons/md";
import { MdOutlineFlight } from "react-icons/md";
import { IoMdFlashlight } from "react-icons/io";
import {
  TbCloudSnow,
  TbDeviceDesktopSearch,
  TbGlobeOff,
  TbMobiledata,
  TbMusicShare,
} from "react-icons/tb";
import { RiHotspotFill } from "react-icons/ri";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaMapMarkerAlt, FaClosedCaptioning, FaPenAlt } from "react-icons/fa";
import { SiDolby } from "react-icons/si";
import { FiTarget } from "react-icons/fi";
import { FaWindows } from "react-icons/fa6";
import { RiShareCircleFill } from "react-icons/ri";

import { FaVideo } from "react-icons/fa6";
import { MdOutlinePlayCircle } from "react-icons/md";
import { BiSolidSun } from "react-icons/bi";
import { MdSync } from "react-icons/md";
import { MdDoNotDisturbOn } from "react-icons/md";
import { GrImage } from "react-icons/gr";
import { HiOutlineQrcode } from "react-icons/hi";
import { IoMdBed } from "react-icons/io";
import { SiDuckduckgo } from "react-icons/si";
import { TbMoodKidFilled } from "react-icons/tb";
import { PiNumberCircleFourFill, PiPhoneCallFill } from "react-icons/pi";

import { FaBanSmoking } from "react-icons/fa6";

import { iconType } from "@/type";
import { IoWatch } from "react-icons/io5";
import { GiGrapes, GiStrawberry } from "react-icons/gi";

export const iconList: iconType[] = [
  {
    iconOn: <FaWifi />,
    textOn: "WiFi",
  },
  {
    iconOn: <HiMiniSpeakerWave />,
    textOn: "Sound",
    iconOff: <HiMiniSpeakerXMark />,
    textOff: "Mute",
  },
  {
    iconOn: <FaBluetoothB />,
    textOn: "Bluetooth",
  },
  {
    iconOn: <SiNfc />,
    textOn: "NFC",
  },
  {
    iconOn: <MdOutlineScreenRotation />,
    textOn: "Auto rotate",
    iconOff: <MdOutlineScreenLockPortrait />,
    textOff: "Portrait",
  },
  {
    iconOn: <MdOutlineFlight />,
    textOn: "Flight mode",
  },
  {
    iconOn: <IoMdFlashlight />,
    textOn: "Torch",
  },
  {
    iconOn: <TbMobiledata />,
    textOn: "Mobile data",
  },
  {
    iconOn: <RiHotspotFill />,
    textOn: "Mobile Hotspot",
  },
  {
    iconOn: <MdEnergySavingsLeaf />,
    textOn: "Power saving",
  },
  {
    iconOn: <FaMapMarkerAlt />,
    textOn: "Location",
  },
  {
    iconOn: <SiDolby />,
    textOn: "Dolby Atmos",
  },
  {
    iconOn: <FiTarget />,
    textOn: "Focus Mode",
  },
  {
    iconOn: <FaWindows />,
    textOn: "Link to Windows",
  },
  {
    iconOn: <FaVideo />,
    textOn: "Screen recorder",
  },
  {
    iconOn: <RiShareCircleFill />,
    textOn: "Quick share",
  },
  {
    iconOn: <MdOutlinePlayCircle />,
    textOn: "Smart View",
  },
  {
    iconOn: <BiSolidSun />,
    textOn: "Eye comfort shield",
  },
  {
    iconOn: <FaMoon />,
    textOn: "Dark mode",
  },
  {
    iconOn: <MdSync />,
    textOn: "Sync",
  },
  {
    iconOn: <FaClosedCaptioning />,
    textOn: "Live Caption",
  },
  {
    iconOn: <MdDoNotDisturbOn />,
    textOn: "Do not disturb",
  },
  {
    iconOn: <GrImage />,
    textOn: "Capture screen",
  },
  {
    iconOn: <HiOutlineQrcode />,
    textOn: "Scan QR code",
  },
  {
    iconOn: <IoMdBed />,
    textOn: "Bedtime mode",
  },
  // {
  //   iconOn: <SiDuckduckgo />,
  //   textOn: "App Tracking Protection",
  // },
  {
    iconOn: <TbMoodKidFilled />,
    textOn: "Kids",
  },
  {
    iconOn: <SiProtonvpn />,
    textOn: "VPN",
  },
  {
    iconOn: <PiPhoneCallFill />,
    textOn: "Wi-Fi Calling",
  },
  {
    iconOn: <TbMusicShare />,
    textOn: "Music Share",
  },
  {
    iconOn: <FaBanSmoking />,
    textOn: "No smoking",
  },
  {
    iconOn: <FaBan />,
    textOn: "No not",
  },
  {
    iconOn: <FaBath />,
    textOn: "Bath",
  },
  {
    iconOn: <FaBoltLightning />,
    textOn: "Lightning",
  },
  {
    iconOn: <FaBomb />,
    textOn: "Bomb",
  },
  {
    iconOn: <MdStar />,
    textOn: "Star",
  },
  {
    iconOn: <TbDeviceDesktopSearch />,
    textOn: "Search",
  },
  {
    iconOn: <IoWatch />,
    textOn: "Apple Watch",
  },
  {
    iconOn: <FaDownload />,
    textOn: "Download",
  },
  {
    iconOn: <MdDownloadDone />,
    textOn: "Tick done",
  },
  // {
  //   iconOn: <FaAmilia />,
  //   textOn: "Amilia",
  // },
  {
    iconOn: <FaAppleWhole />,
    textOn: "Pinllady Apple",
  },
  {
    iconOn: <FaArrowRightLong />,
    textOn: "Arrow Right",
  },
  {
    iconOn: <PiNumberCircleFourFill />,
    textOn: "Four",
  },
  {
    iconOn: <GiStrawberry />,
    textOn: "Strawberry",
  },
  {
    iconOn: <GiGrapes />,
    textOn: "Grapes",
  },
  {
    iconOn: <FaLemon />,
    textOn: "Lemon",
  },
  {
    iconOn: <span>10</span>,
    textOn: "Ten",
  },
  {
    iconOn: <FaPenAlt />,
    textOn: "Pen",
  },
  {
    iconOn: <MdRamenDining />,
    textOn: "Ramen",
  },
  {
    iconOn: <TbGlobeOff />,
    textOn: "Globe Off",
  },
  {
    iconOn: <FaBowlRice />,
    textOn: "Rice",
  },
  {
    iconOn: <FaRegSnowflake />,
    textOn: "Snowflake",
  },
  {
    iconOn: <TbCloudSnow />,
    textOn: "Cloud Snow",
  },
];
