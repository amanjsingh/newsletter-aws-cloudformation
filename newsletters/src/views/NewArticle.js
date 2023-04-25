import React, { useState } from "react";
import { TitleBar } from "../components/TitleBar";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createNewArticle } from "../service/NewsletterClient";
import { useNavigate } from "react-router-dom";

export const NewArticle = () => {
  const [post, setPost] = useState("");
  const [body, setBody] = useState("");
  const [imageURL, setImageURL] = useState(
    "https://img.freepik.com/free-vector/background-wave-gradient-blue-modern-abstract_343694-3012.jpg"
  );
  const navigate = useNavigate();

  const handleSubmit = () => {
    // TODO: Test API call
    createNewArticle({post, body, imageURL}).then(res => {
      console.log(res)
      navigate("/")
    }).catch(err => console.log(err))
    console.log(post, body, imageURL);
  };

  return (
    <>
      <TitleBar />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 8,
          p: 4,
          borderRadius: "0.5em",
        }}
      >
        <Stack gap={"1em"} direction={"row"} alignItems={"center"} textAlign={"center"} marginBottom={"2em"}>
          <IconButton aria-label="back" href="/">
            <ArrowBackIcon />
          </IconButton>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h6"
          >
            Enter Newsletter Details
          </Typography>
        </Stack>
        <Stack gap={"1em"}>
          <TextField
            id="Title"
            label="Title"
            variant="outlined"
            value={post}
            onChange={(event) => setPost(event.target.value)}
          />
          <TextField
            id="body"
            label="Body"
            multiline
            minRows={5}
            variant="outlined"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
          <TextField
            id="image"
            label="Image URL"
            variant="outlined"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Stack>
      </Box>
    </>
  );
};
