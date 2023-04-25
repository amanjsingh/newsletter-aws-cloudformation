import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NewsletterCard from "../components/NewsletterCard";
import { TitleBar } from "../components/TitleBar";
import { Paper, Box } from "@mui/material";
import { ActionBar } from "../components/ActionBar";
import { SubscribeModal } from "../components/SubscribeModal";
import { addSubscriber, getAllArticles } from "../service/NewsletterClient";

export const Dashboard = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [email, setEmail] = useState("");
  const [subscriptionFormOpen, setSubscriptionFormOpen] = useState(false);
  const handleSubscribe = () => {
    // TODO: Test API Call
    addSubscriber({ subscriber: email })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Subscribed by ", email);
    setSubscriptionFormOpen(false);
  };

  const handleSubscribptionModalClose = () => {
    setSubscriptionFormOpen(false);
  };

  useEffect(() => {
    // TODO: Test API Call
    getAllArticles()
      .then((res) => {
        setNewsletters(res?.data?.body)
        console.log(res?.data?.body);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Stack>
      <TitleBar />
      <Stack gap={2}>
        <ActionBar setSubscriptionFormOpen={setSubscriptionFormOpen} />
        <SubscribeModal
          open={subscriptionFormOpen}
          handleClose={handleSubscribptionModalClose}
          handleSubscribe={handleSubscribe}
          email={email}
          setEmail={setEmail}
        />
        {newsletters && newsletters.length > 0 ? (
          <Stack
            direction={"row"}
            gap={2}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            {newsletters.map((newsletter) => {
              console.log(newsletter)
              return <NewsletterCard newsletter={newsletter} />;
            })}
          </Stack>
        ) : (
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Typography
              variant="h3"
            >
              No articles found. Please start by creating one !
            </Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
