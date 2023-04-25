import React from "react";
import { Stack, Button } from "@mui/material";

export const ActionBar = (props) => {
  return (
    <Stack marginTop={"5em"} direction={"row"} spacing={2} justifyContent={"center"}>
      <Button variant="contained" href="/new">
        New Article
      </Button>
      <Button variant="contained" onClick={() => props.setSubscriptionFormOpen(true)}>
        Subscribe
      </Button>
    </Stack>
  );
};
