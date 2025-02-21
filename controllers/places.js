const router = require("express").Router();

// GET /places Index
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/Thai-Food.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/Coding-Cat.jpg",
    },
  ];
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/", (req, res) => {
  res.send("Gargantuan Boobies");
  console.log(req.body);
});

module.exports = router;
