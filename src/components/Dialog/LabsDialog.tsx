import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { FC } from "react";

interface IProp {
    dialogTitle: string;
    description?: string;
    open: boolean;
    onClose: () => void;
    // onSubmit: (data: unknown) => void
}
export const LabsDialog: FC<IProp> = ({ 
    dialogTitle,
    description,
    open,
    onClose,}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>{dialogTitle} Labs</DialogTitle>
            <DialogContent>
                <DialogContentText>{description || "About This Lab"}</DialogContentText>
                
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit">Run Lab</Button>
            </DialogActions>
        </Dialog>)
}