const express = require("express");
const {
  getAllMember,
  addMember,
  getMemberById,
  editMemberById,
  deleteMemberById,
} = require("../controllers/member");

const router = express.Router();

router.post("/", addMember);

router.get("/", getAllMember);

router.patch("/:id", editMemberById);

router.get("/:id", getMemberById);

router.delete("/:id", deleteMemberById);

module.exports = router;
