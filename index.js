const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const dataArr = [];

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json(dataArr);
});

app.post("/webhook", (req, res) => {
    let data = req.body;

    // Check if the payload contains a "data" field with a stringified JSON
    if (data.data && typeof data.data === "string") {
        try {
            data = JSON.parse(data.data); // Parse the stringified JSON
        } catch (error) {
            console.error("❌ Error parsing JSON from 'data' field:", error);
            return res.status(400).send("Invalid JSON format");
        }
    }

    console.log("📩 ZeptoMail Webhook Received:", JSON.stringify(data, null, 2));

    try {
        if (data.event_name && data.event_name[0] === "email_open") {
            const eventMessage = data.event_message?.[0]; // Get first item in event_message array
            if (eventMessage) {
                const recipient = eventMessage.event_data?.[0]?.details?.[0]?.recipient_info?.address;
                const timestamp = eventMessage.event_data?.[0]?.details?.[0]?.time;
                const subject = eventMessage.email_info?.subject;

                console.log(`📩 Email opened by: ${recipient}`);
                console.log(`📅 Opened at: ${timestamp}`);
                console.log(`📜 Subject: ${subject}`);

                // Store the recipient email in dataArr
                dataArr.push(recipient);
            }
        } else {
            console.log("⚠️ Event not recognized or missing data.");
        }
    } catch (error) {
        console.error("❌ Error processing webhook:", error);
    }

    res.status(200).send("OK");
});

app.listen(PORT, () => {
    console.log(`ZeptoMail Webhook listening on port ${PORT}`);
});

