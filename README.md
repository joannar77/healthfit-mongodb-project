# HealthFit MongoDB Project

This project demonstrates the use of **MongoDB aggregation pipelines** to analyze health and demographic data.  
It includes pipelines exported from MongoDB Compass and driver code for both **Python (PyMongo)** and **Node.js**.

## Files
- `age_group_agg.js` – Aggregation pipeline (Mongo Shell / Node.js format)
- `pipeline_analysis.py` – Aggregation pipeline (Python driver format)
- `pipeline_analysis.js` – Aggregation pipeline (Node.js driver format)
- `healthfit_pipeline.json` – (Optional) Raw JSON export from Compass

## How to Run

### Using Mongo Shell / Node.js
```bash
node age_group_agg.js
