import React from "react";
import { Modal, Box, Typography, TextField, Button, Stack } from "@mui/material";

export const SubscribeModal = (props) => {
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "0.5em"
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom={"1em"}>
          Enter your e-mail address
        </Typography>
        <Stack gap={"1em"}>
        <TextField
          id="email"
          label="e-mail"
          variant="outlined"
          value={props.email}
          onChange={(event) => props.setEmail(event.target.value)}
        />
        <Button variant="contained" onClick={props.handleSubscribe}>
          Subscribe
        </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
