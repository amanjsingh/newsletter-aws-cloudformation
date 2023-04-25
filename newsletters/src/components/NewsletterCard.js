import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NewsletterCard(props) {
  const defaultNewsletter = {
    post: "How to upgrade Mac OS?",
    imageURL:
      "https://photos5.appleinsider.com/gallery/0-97358-macOS-Ventura-title-xl.jpg",
    body:
      "macOS Ventura makes the things you do most on Mac even better, with powerful new ways to get more done, share and collaborate in your favorite apps, immerse yourself in next‑level games, and take full advantage of your other devices.macOS Ventura makes the things you do most on Mac even better, with powerful new ways to get more done, share and collaborate in your favorite apps, immerse yourself in next‑level games, and take full advantage of your other devices.macOS Ventura makes the things you do most on Mac even better, with powerful new ways to get more done, share and collaborate in your favorite apps, immerse yourself in next‑level games, and take full advantage of your other devices.macOS Ventura makes the things you do most on Mac even better, with powerful new ways to get more done, share and collaborate in your favorite apps, immerse yourself in next‑level games, and take full advantage of your other devices.",
  };
  const newsletter = props.newsletter || defaultNewsletter;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        component="img"
        image={newsletter.imageURL || defaultNewsletter.imageURL}
        title={newsletter.post || defaultNewsletter.post}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {newsletter?.post}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {(newsletter?.body?.slice(0, 100) ||
            defaultNewsletter?.body.slice(0, 100)) + "..."}
        </Typography>
      </CardContent>
    </Card>
  );
}
