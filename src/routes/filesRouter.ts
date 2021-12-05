import express, { Router } from "express";

const router = Router();

router.get('/files', express.static('../../tmp/uploads'));

export { router as filesRouter };