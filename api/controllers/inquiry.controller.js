import Inquiry from "../models/inquiry.model.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  console.log(req.body);
  if (!req.body.name) {
    return next(errorHandler(400, "Please provide all required fields"));
  }

  const newInquiry = new Inquiry({
    ...req.body,
  });
  try {
    const savedInquiry = await newInquiry.save();
    res.status(201).json(savedInquiry);
  } catch (error) {
    next(error);
  }
};
