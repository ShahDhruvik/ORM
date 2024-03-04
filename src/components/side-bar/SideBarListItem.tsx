import { SideBarType } from '@/types/common.types'
import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

type Props = {
  sdItem: SideBarType[0]
  index: number
}

const SideBarListItem = ({ sdItem, index }: Props) => {
  return (
    <ListItem key={index} disablePadding divider>
      <ListItemButton>
        <ListItemText primary={sdItem.itemName} />
      </ListItemButton>
    </ListItem>
  )
}

export default SideBarListItem
