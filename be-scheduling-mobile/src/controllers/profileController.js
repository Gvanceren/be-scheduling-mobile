export const getProfile = async (req, res) => {
  try {
    res.json({
      message: "Profile fetched successfully",
      user: req.user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    res.json({ message: "Profile updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
