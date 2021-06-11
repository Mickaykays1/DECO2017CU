const express = require("express");
const fetch = require("node-fetch");
var cors = require("cors");

const app = express();

app.use(cros());

let app_id = "97d89a3f";
let app_key = "	2453e6d08edb2900ee5200911dd98976";

let endpoint = "entries";
let language_code = "en-gb";
let word = "example";

app.get("/:id", function (req, res) {
    const word,req,params,id;

    let url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${word_id}`;

    fetch(url, {
        method: "GET",
        mode: "no-cors",
        headers: {app_key: app_key, app_id: app_id},
    })

    .then((response) => response.json())
    .then((data) => res.send(data));
});

app.listen(5000);