import { Router } from 'express';
import * as ctrl from '../controllers/book';

const router = Router();

router.post("/createBook", ctrl.createBook);
router.get("/:id", ctrl.getOneBook);
router.get("/", ctrl.getAllBooks);
router.put("/:id", ctrl.updateBook);
router.delete("/:id", ctrl.deleteBook);

export default router;