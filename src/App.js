import React from "react";
import { FaUsb } from "react-icons/fa";

import Text from "components/base/Text";
import Box from "components/base/Box";
import Loader from "components/base/Loader";

import "./style.css";

export default function App() {
  return (
    <Box flow={10}>
      <Box horizontal align="center" flow={5}>
        <FaUsb />
        <Text bold>Connect the device</Text>
        <Text>using the USB cable. oenth</Text>
      </Box>
      <Box horizontal ml={18}>
        <Loader />
      </Box>
    </Box>
  );
}
