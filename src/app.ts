import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const apiUrl = `https://api.spoonacular.com/`;

app.get("/recipes/complexSearch", async (req, res) => {
  try {
    if (req.query.query) {
      const response = await axios.get(
        `${apiUrl}recipes/complexSearch?query=${req.query.query}&number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${process.env.API_KEY}`
      );
      res.json(response.data);
    } else {
      const response = await axios.get(
        `${apiUrl}recipes/complexSearch?number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${process.env.API_KEY}`
      );
      res.json(response.data);
    }
  } catch (error) {
    console.error("Error fetching data from external API", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

app.get("/food/ingredients/search", async (req, res) => {
  try {
    const response = await axios.get(
      `${apiUrl}food/ingredients/search?query=${req.query.query}&apiKey=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from external API", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

app.listen(port, () => {
  console.log(`Running port ${port}`);
});
