const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: "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",
})

const openai = new OpenAIApi(config);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
    const { prompt } = req.body;
  
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 512,
      temperature: 0,
      prompt: prompt,
    });
    res.send(completion.data.choices[0].text);
  });

const PORT = 8080;
app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`));