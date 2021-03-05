const express = require('express');
const os = require('os')
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

app.get('/fahrenheit/:value/celsius', (req, res) => {

    let valor = req.params.value;
    let celsius = (valor - 32) * 5 / 9;
    console.log(`${valor}F is ${celsius}C`);
    return res.json({ "celsius": celsius, "host": os.hostname() });
});

app.get('/celsius/:value/fahrenheit', (req, res) => {

    let valor = req.params.value;
    let fahrenheit = (valor * 9 / 5) + 32;
    console.log(`${valor}C is ${fahrenheit}F`);
    return res.json({ "fahrenheit": fahrenheit, "host": os.hostname() });
});

app.listen(8080, () => {
    console.log("Running at port 8080");
});