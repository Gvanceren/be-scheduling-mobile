import {
  getProfileById,
  updateProfile,
} from "../models/profileModel.js";

export const getProfile = async (req, res) => {
  const profile = await getProfileById(req.user.id);
  res.json(profile);
};

export const editProfile = async (req, res) => {
  await updateProfile(req.user.id, req.body);
  res.json({ message: "Profile berhasil diperbarui" });
};
