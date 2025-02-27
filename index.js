const express = require('express')
const { createSeller, getSellers } = require('./controllers/seller.controller')
const { createProduct, getProducts } = require('./controllers/product.controller');
const { createOtp } = require('./controllers/otp.controller')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000

app.use(express.static('public'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false })) // express.urlencoded({extended: true/ false})

app.use(bodyParser.json()) // express.json()

app.get('/status', (req, res) => {
  res.send('Node server is running')
})

app.post('/seller', createSeller);
app.get('/sellers', getSellers);

app.post('/seller/:sellerId/product', createProduct);
app.get('/products', getProducts);

app.post('/otp', createOtp);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
