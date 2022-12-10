import express, { Router } from "express";

import { getHealth } from "../controllers/health.controller";

const router: express.Router = Router();
/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Health Checker
 *     description: Retrive our service status.
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: available
 */
router.get( '/', getHealth );

export default router;