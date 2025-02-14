## Testing the Webhook
Configure the webhook url in the mail_agent and webhook url should be publicly accessible over the interner (use ngrok or cloudflared tunneling to expose the localhost to internet and then add the webook url to the config of mail_agent)
Once your server is up and running:

Run the curl command from zeptomail to send mail to some test mail  and make sure email tracking is enabled and zeptomail verified the subdomain

### Expected Response:

The server will log the data to the console and store it in the `dataArr`. The response will look like this:


### Check Stored Data:

You can also view the stored data by visiting `http://localhost:3000` in your browser. The `GET` endpoint will show all the data that has been received.

---
