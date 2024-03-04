import { AppBar, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SideBar from './side-bar/SideBar'
import { useState } from 'react'

type Props = {}

const Header = (props: Props) => {
  const [open, setOpen] = useState(false)
  const handleCloseDrawer = () => {
    setOpen(false)
  }
  const handleOpenDrawer = () => {
    setOpen(true)
  }
  return (
    <AppBar
      position='sticky'
      color='white'
      sx={{ px: 2, py: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}
    >
      <IconButton onClick={handleOpenDrawer}>
        <MenuIcon color='black' fontSize='inherit' />
      </IconButton>
      <p className='flex-1 text-lg font-extrabold'>The Order Management System</p>
      <Button
        variant='text'
        color='red'
        sx={{
          fontWeight: 700,
          fontSize: '16px',
        }}
      >
        Logout
      </Button>
      <SideBar open={open} closeDrawer={handleCloseDrawer} openDrawer={handleOpenDrawer} />
    </AppBar>
  )
}

export default Header
