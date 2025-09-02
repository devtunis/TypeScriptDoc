app.get("/summary", async (req, res) => {
  const [orders, payments, users] = await parallelCalls([
    "http://orders-service/api/orders",
    "http://payments-service/api/payments",
    "http://users-service/api/users"
  ]);

  res.json({ orders, payments, users });
});


async function parallelCalls(urls) {
  const results = await Promise.all(urls.map(url => fetch(url)));
  console.log(results);
}


