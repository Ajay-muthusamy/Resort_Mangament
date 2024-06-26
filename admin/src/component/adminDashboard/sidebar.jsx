import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Admin Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            
            <NavLink exact to="/ResortBookingDetails" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Booking Detail</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/RoomBooker" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Rooms</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Count" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">
                Dashboard
                </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ResortUpdate" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Updates
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default sidebar;
