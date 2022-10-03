module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getFaqs: (req, res) => {
    res.render("faqs.ejs")
  }
};
