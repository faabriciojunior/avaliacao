import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './style.css';

const options = [
  'Home',
  'Link',
  'Dropdown',
];

const ITEM_HEIGHT = 48;

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function Home () {

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorE2);
  const handleClick8 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose8 = () => {
    setAnchorE2(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const [open2, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };

  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = React.useState(false);

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const [open5, setOpen5] = React.useState(false);

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const [open6, setOpen6] = React.useState(false);

  const handleClickOpen6 = () => {
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };

  return (
    <div>
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="app" position="static">
          <Toolbar>
            <div>
                    <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick8}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorE2}
                open={open}
                onClose={handleClose8}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} selected={option === 'Link'} onClick={handleClose8}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            <div className="options"> 
              <div>
                <a href='/'>Home</a>
              </div>
              <div>
                <a href='link'>Link</a>
              </div>
              <div className="select">
                <Button
                  id="demo-customized-button"
                  aria-controls={open1 ? 'demo-customized-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? 'true' : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Dropdown
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open1}
                  onClose={handleClose1}
                >
                  <MenuItem onClick={handleClose1} disableRipple>
                    Action
                  </MenuItem>
                  <MenuItem onClick={handleClose1} disableRipple>
                    Another action
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose1} disableRipple>
                    Somenthing else here
                  </MenuItem>
                </StyledMenu>
              </div>
              <div>
                <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                >
                  <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </div>
            </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
      <div className="btn">
          <div className="btn-success">
              <Button variant="outlined" onClick={handleClickOpen}>
                Show success message
              </Button>
              <Dialog 
                open={open2}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <div className="all-modal">
                <Alert className="icon" variant="filled" severity="success"></Alert>
                <DialogTitle id="alert-dialog-title">
                  {"Good job!"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    You clicked the button!
                  </DialogContentText>
                </DialogContent>
                <DialogActions className="btn-edit">
                  <Button variant="outlined" onClick={handleClose2}>OK</Button>
                </DialogActions>
                </div>
            </Dialog>
          </div>
          <div className="btn-success">
              <Dialog 
                open={open5}
                onClose={handleClose5}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <div className="all-modal">
                <Alert className="icon" variant="filled" severity="success"></Alert>
                <DialogTitle id="alert-dialog-title">
                  {"Saved!"}
                </DialogTitle>
                <DialogActions className="btn-edit">
                  <Button variant="outlined" onClick={handleClose5}>OK</Button>
                </DialogActions>
                </div>
            </Dialog>
          </div>
        <div className="btn-error">
          <Button variant="outlined" onClick={handleClickOpen3}>
              Show error message
            </Button>
            <Dialog 
              open={open3}
              onClose={handleClose3}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <div className="all-modal">
              <Alert className="icon" variant="filled" severity="error"></Alert>
              <DialogTitle id="alert-dialog-title">
                {"Oops..."}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Something went wrong!
                </DialogContentText>
              </DialogContent>
              <DialogActions className="btn-edit">
                <Button variant="outlined" onClick={handleClose3}>OK</Button>
              </DialogActions>
            </div>
            </Dialog>
            </div>
            <div className="btn-error">
            <Dialog 
              open={open6}
              onClose={handleClose6}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <div className="all-modal">
              <Alert className="icon" variant="filled" severity="info"></Alert>
              <DialogTitle id="alert-dialog-title">
                {"Changes are not saved"}
              </DialogTitle>
              <DialogActions className="btn-edit">
                <Button variant="outlined" onClick={handleClose6}>OK</Button>
              </DialogActions>
            </div>
            </Dialog>
            </div>
            <div className="btn-changes">
              <Button variant="outlined" onClick={handleClickOpen4}>
                Show changes message
              </Button>
              <Dialog 
                open={open4}
                onClose={handleClose4}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <div className="all-modal">
                    <DialogTitle id="alert-dialog-title">
                      {"Do you want to save the changes?"}
                    </DialogTitle>
                <DialogActions className="btn-edit2">
                  <div className="save">
                    <Button variant="outlined" onClick={handleClickOpen5}>Save</Button>
                  </div>
                  <div className="dont-save">
                    <Button variant="outlined" onClick={handleClickOpen6}>Don´t save</Button>
                  </div>
                  <div className="cancel">
                    <Button variant="outlined" onClick={handleClose4}>Cancel</Button>
                  </div>
                </DialogActions>
              </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Home;