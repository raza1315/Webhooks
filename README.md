## Testing the Webhook

Once your server is up and running, you can use the `curl` command to send a POST request to the `/webhook` endpoint.

Run the curl command from zeptomail to send mail to some test mail  and make sure email tracking is enabled and zeptomail verified the subdomain

### Expected Response:

The server will log the data to the console and store it in the `dataArr`. The response will look like this:


### Check Stored Data:

You can also view the stored data by visiting `http://localhost:3000` in your browser. The `GET` endpoint will show all the data that has been received.

---
