import React, { useEffect, useState, useContext, useRef } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import Message from "../../../components/chat/Message";
import { io } from 'socket.io-client'
import Navlink from "../../../components/Dashboard/Chat/NavLink"
import { Outlet } from "react-router-dom";

const Adminchat = () => {
  return (
    <div className="w-full container h-full flex">
      <div className="p-5  h-full">
        <Navlink />
      </div>
      <div className="w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default Adminchat;
