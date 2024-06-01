import User from "../model/user_model.js";
import bcryptjs from "bcryptjs";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const saltRounds = 10;
  try {
    const { fullname, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashpassword = await bcrypt.hash(password, saltRounds);

    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashpassword,
    });
    await createdUser.save();
    res.status(200).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    } else {
      return res.status(200).json({
        message: "Login successfully",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal server error" });
  }
};
