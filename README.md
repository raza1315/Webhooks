## Testing the Webhook

Once your server is up and running, you can use the `curl` command to send a POST request to the `/webhook` endpoint.

Run the following command in your terminal:

```bash
curl -X POST http://localhost:3000/webhook \
-H "Content-Type:application/json" \
-d '{"name":"raza"}'
```

### Expected Response:

The server will log the data to the console and store it in the `dataArr`. The response will look like this:

```json
{
  "message": "Successfully received data on the webhook!"
}
```

### Check Stored Data:

You can also view the stored data by visiting `http://localhost:3000` in your browser. The `GET` endpoint will show all the data that has been received.

---
