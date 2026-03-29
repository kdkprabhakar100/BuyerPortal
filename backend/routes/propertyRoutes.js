import { Router } from "express";

const router = Router();

const PROPERTIES = [
  {
    id: "prop-001",
    title: "Modern Loft in Downtown",
    address: "12 Main Street",
    price: 850000,
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
  },
  {
    id: "prop-002",
    title: "Spacious Family Home",
    address: "45 Oakwood Drive",
    price: 1250000,
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
  },
];

router.get("/", (req, res) => {
  res.json({ properties: PROPERTIES });
});

export default router;