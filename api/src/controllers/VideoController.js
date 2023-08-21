const Video = require("../models/Video");
const { res } = require("express");
const { v4: uuid } = require("uuid");

module.exports = {
  // get all videos
  async index(req, res) {
    try {
      const videos = await Video.find();
      return res.status(200).json({ videos });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // store videos
  async store(req, res) {
    const { title, link } = req.body;

    // verifies if title or link is not in the request
    if (!title || !link) {
      return res.status(400).json({ error: "Missing title or link." });
    }

    const video = new Video({
      _id: uuid(),
      title,
      link,
      liked: false, // default is false in Models anyways
    });

    try {
      await video.save();

      return res.status(201).json({ message: "Video added successfully!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
