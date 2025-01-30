import { FC, ReactNode } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DialogFormProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const DialogForm: FC<DialogFormProps> = ({ open, onClose, title, children }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle sx={{backgroundColor:"#1e1e1e",color:"#fff"}}>
        {title}
        <IconButton onClick={onClose} >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{backgroundColor:"#1e1e1e"}}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
