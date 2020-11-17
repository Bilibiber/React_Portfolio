import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  space: {
    margin: theme.spacing(1),
  },
}))

const Resume = () => {}

export default function MuiDialogs({ open, setOpenDialog, children, ...restProps }) {
  return (
    <Dialog onClose={() => setOpenDialog(!open)} open={open} {...restProps}>
      {children}
    </Dialog>
  )
}

MuiDialogs.Title = function MuiDialogsTitle({ children }) {
  return <MuiDialogTitle>{children}</MuiDialogTitle>
}

MuiDialogs.Content = function MuiDialogsContent({ children, ...restProps }) {
  return <MuiDialogContent {...restProps}>{children}</MuiDialogContent>
}

MuiDialogs.Actions = function MuiDialogsActions({ children }) {
  return <MuiDialogActions>{children}</MuiDialogActions>
}

MuiDialogs.IconButton = function MuiDialogsIconButton({ children, ...restProps }) {
  return <IconButton {...restProps}>{children}</IconButton>
}

MuiDialogs.CloseIcon = function MuiDialogsCloseIcon() {
  return <CloseIcon />
}

MuiDialogs.Button = function MuiDialogsButton({ children, href, variant, color, ...restProps }) {
  const classes = useStyles()
  return (
    <Button className={classes.space} color={color} variant={variant} {...restProps} href={href}>
      {children}
    </Button>
  )
}

MuiDialogs.CloseButton = function MuiDialogsCloseButton({ open, setOpenDialog, children, variant, color, ...restProps }) {
  return (
    <Button color={color} onClick={() => setOpenDialog(!open)} variant={variant} {...restProps}>
      {children}
    </Button>
  )
}

MuiDialogs.Typography = function MuiDialogsTypography({ children, variant, ...restProps }) {
  return (
    <Typography variant={variant} {...restProps}>
      {children}
    </Typography>
  )
}
