// src/scenes/global/Sidebar.jsx
import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  PersonOutlined,
  RecordVoiceOverOutlined,
  ChatOutlined,
  LocalHospitalOutlined,
  SettingsOutlined,
  ExitToAppOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  AssessmentOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
} from '@mui/icons-material';
import { tokens } from '../../theme';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: theme.zIndex.drawer + 1,
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Collapsible Icon */}
          <Box
            display="flex"
            justifyContent={isCollapsed ? 'center' : 'space-between'}
            alignItems="center"
            p={2}
            sx={{
              cursor: 'pointer',
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.common.white
                  : theme.palette.primary[900],
            }}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {!isCollapsed && (
              <Typography variant="h6" color={colors.grey[100]}>
                MENU
              </Typography>
            )}
            <IconButton
              sx={{
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.primary[900],
              }}
            >
              {isCollapsed ? <ChevronRightOutlined /> : <ChevronLeftOutlined />}
            </IconButton>
          </Box>

          <Box sx={{ height: 'calc(100vh - 140px)', overflowY: 'auto' }}>
            <Box paddingLeft={isCollapsed ? undefined : '10%'}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlined />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: '15px 0 5px 20px' }}
              >
                Pages
              </Typography>
              <Item
                title="Patient Profile"
                to="/patientprofile"
                icon={<PersonOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Patient Record"
                to="/patientrecord"
                icon={<RecordVoiceOverOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Chat AI"
                to="/interactivechat"
                icon={<ChatOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Hospitals"
                to="/hospitals"
                icon={<LocalHospitalOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Specialist"
                to="/specialist"
                icon={<AssessmentOutlined />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: '15px 0 5px 20px' }}
              >
                Data Analysis
              </Typography>
              <Item
                title="Predictive Health Analysis"
                to="/predictivehealthanalysis"
                icon={<TimelineOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Genetic Information Analysis"
                to="/geneticinfoanalysis"
                icon={<PieChartOutlineOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Lifestyle Analysis"
                to="/lifestyle"
                icon={<TimelineOutlined />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: '15px 0 5px 20px' }}
              >
                Others
              </Typography>
              <Item
                title="Settings"
                to="/settings"
                icon={<SettingsOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Subscription"
                to="/subscription"
                icon={<ExitToAppOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Logout"
                to="/logout"
                icon={<ExitToAppOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;