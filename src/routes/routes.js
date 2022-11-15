import { Router } from "express";
import elementController from "../controllers/controller.js";

const router = Router();

router.get("/", elementController.getAll);

router.get("/:id", elementController.getOne)

router.post("/", elementController.store)

router.delete("/:id", elementController.delete)

router.put("/:id", elementController.update)

export default router;