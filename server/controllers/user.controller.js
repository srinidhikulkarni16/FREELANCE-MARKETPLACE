import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
   
    const sanitizedUsers = users.map(({ _doc }) => ({
      ..._doc,
      img: _doc.img || "", 
    }));
    res.status(200).send(sanitizedUsers);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(createError(404, "User not found"));

    const { password, ...info } = user._doc;
    
    res.status(200).send({
      ...info,
      img: info.img || "",
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return next(createError(404, "User not found"));

    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted");
  } catch (err) {
    next(err);
  }
};
