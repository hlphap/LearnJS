class NewsController {
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("Phap");
  }
}

module.exports = new NewsController();
