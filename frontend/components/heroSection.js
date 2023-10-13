import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import moment from "moment";
import styles from "@/styles/Home.module.css";
import {
  faCube,
  faGauge,
  faGlobe,
  faServer,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Chart from "../public/assets/chart.png";

