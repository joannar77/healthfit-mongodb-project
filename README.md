# HealthFit Data Analysis - MongoDB Aggregations

This project demonstrates how MongoDB aggregation pipelines can be used to generate actionable health and business insights.  
It includes both baseline queries and optimized versions (for performance improvements), exported in JavaScript (Node.js) and Python formats.  

### My Design Process Video: 

In this video I explain my design process and decisions behind this project:
[Watch on Vimeo](https://vimeo.com/1101080044/6d02eeb9ff)

### Project Goals
- **Age Group Segmentation** → Merge siloed demographic and tracker data for better segmentation and targeted health insights.  
- **Popular Models** → Identify the most trusted brands among users with health conditions, supporting data-driven clinical recommendations and partnerships.  
- **Average Price Analysis** → Provide insights into device pricing vs. brand popularity to guide affordability and accessibility decisions.

### Repository Structure
Each pipeline folder contains:
- **Unoptimized queries:** Python (`.py`) and JavaScript (`.js`)  
- **Optimized queries:** Python (`.py`) and JavaScript (`.js`)  

```
pipelines/
├─ age_group/
│ ├─ age_group.py
│ ├─ age_group.js
│ ├─ age_group_optimized.py
│ └─ age_group_optimized.js
├─ avg_price/
│ ├─ avg_price.py
│ ├─ avg_price.js
│ ├─ avg_price_optimized.py
│ └─ avg_price_optimized.js
└─ popular_models/
├─ popular_models.py
├─ popular_models.js
├─ popular_models_optimized.py
└─ popular_models_optimized.js
```

### How to Run

Clone this repository:
   ```bash
   git clone https://github.com/joannar77/healthfit-mongodb-project.git
   cd healthfit-mongodb-project
   ```

For Node.js (Mongo Shell format):
   ```
   mongo < pipelines/age_group/age_group.js
   ```
For Python (PyMongo Driver)
   ```
   python pipelines/age_group/age_group.py
   ```

### Key Takeaways

Shows ability to design and optimize MongoDB aggregation pipelines for real-world business problems.

Demonstrates proficiency in both JavaScript (Node.js) and Python (PyMongo driver).

Highlights data integration, segmentation, and pricing analysis skills relevant to healthcare and business analytics.

Provides a foundation for scaling to larger datasets and building dashboards for visualization.
