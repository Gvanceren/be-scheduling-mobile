const authMiddleware = (req, res, next) => {
  try {
    // contoh
    next();
  } catch (err) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

export default authMiddleware;
