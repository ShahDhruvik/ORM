/* eslint-disable react/no-array-index-key */
import { sideBarData } from '@/utils/constants'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import SideBarListItem from './SideBarListItem'

type Props = {
  open: boolean
  closeDrawer: () => void
  openDrawer: () => void
}

const SideBar = ({ open, closeDrawer }: Props) => {
  return (
    <Drawer open={open} onClose={closeDrawer}>
      <Box sx={{ width: 300 }} role='presentation' onClick={closeDrawer}>
        <List>
          {sideBarData.map((sdItem, index) => {
            return <SideBarListItem sdItem={sdItem} key={index} index={index} />
          })}
        </List>
      </Box>
    </Drawer>
  )
}

export default SideBar
