Express server is created with endpoint /webhook (post req handling) run the following command in the terminal after runnning the server:
curl -X POST http://localhost:3000/webhook \
 -H "Content-Type:application/json" \
 -d '{"name":"raza"}'

usually the webhook url is given to some external servicess that can send some data to the webhook.
