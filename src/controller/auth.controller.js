import { User } from "../models/user.model.js";

export const authCallback = async (req, res, next) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    // Check if `id` is provided
    if (!id) {
      return res.status(400).json({ success: false, msg: "User ID is required" });
    }

    const user = await User.findOne({
      clerkId: id,
    });

    if (!user) {
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }

    res.status(200).json({
      success: true,
      fullName: `${firstName} ${lastName}`,
      msg: "User created successfully",
    });
  } catch (error) {
    console.log("Error in auth callback", error);
    next(error);
  }
};
