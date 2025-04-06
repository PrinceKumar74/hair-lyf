const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

//register
const registerUser = async (req, res) => {
  const { userName, phoneNumber, email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.json({
        success: false,
        message: "User already exists with the same email",
      });

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      phoneNumber,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.json({
        success: false,
        message: "User doesn't exist! Please register first",
      });
    }

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkPasswordMatch) {
      return res.json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign(
      {
        id: checkUser._id,
        email: checkUser.email,
        role: checkUser.role,
      },
      "CLIENT_SECRET_KEY",
      {
        expiresIn: "60m",
      }
    );

    res
      .cookie("token", token, {
        httpOnly: true, //prevent js from accessing the cookie,prevent cross-site scripting(XSS) attack
        secure: false, //A secure flag added to cookies ensures they're only sent over HTTPS, protecting them from interception and is essential for securing cookies in production environments.
      })
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        user: {
          email: checkUser.email,
          role: checkUser.role,
          id: checkUser._id,
        },
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//logout
const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out and  successfully!",
  });
};

//auth middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ success: false, message: "Unauthorized" });

  try {
    const decoded =  jwt.verify(token, "CLIENT_SECRET_KEY");
    req.user = decoded;
    next()
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Unauthorized User!" });
  }
};

module.exports = { registerUser, loginUser, logoutUser ,authMiddleware };
