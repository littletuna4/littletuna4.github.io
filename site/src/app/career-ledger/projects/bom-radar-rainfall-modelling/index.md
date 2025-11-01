# BOM Radar Rainfall Modelling

## Summary
A cloud-native pipeline for scraping, processing, and storing spatial rainfall data from the Australian Bureau of Meteorology (BOM). This project leverages GCP Cloud Run, Python, and open-source tools to enable dynamic estimation of water levels and flood risk using spatial rainfall data.

## Context
This project was initiated to support water modelling and flood risk estimation, particularly for the Brisbane region. The original approach using high-resolution weather station data proved costly and complex, leading to a pivot towards radar image-based rainfall extraction. The solution was designed to be lightweight, scalable, and cost-effective, running autonomously in the cloud.

## Responsibilities
- Designed and implemented the end-to-end data pipeline
- Developed image processing logic to convert radar images to rainfall rates
- Containerized the application and deployed to GCP Cloud Run
- Automated scheduling and CI/CD with GitHub Actions and cron-job.org
- Built a minimal Flask frontend for monitoring

## Outcomes
- Reliable, low-cost, and scalable rainfall data collection
- Automated, serverless operation with robust error handling and duplicate detection
- Data stored in GCS for downstream modelling and analysis
- Used by a flood engineer for water model development

## Tools & Skills
- Python: `requests`, `pandas`, `Pillow`, `Flask`, `numpy`
- Cloud: GCP (Cloud Run, GCS)
- DevOps: Docker, GitHub Actions, cron-job.org

## Reflections
- Pivoting from station data to radar images dramatically reduced cost and complexity
- Serverless/cloud-native design minimized operational overhead
- Open-source tools (Pillow over cv2) improved portability and reduced container size
- Scheduling with cron-job.org proved more reliable and cost-effective than GCP Cloud Scheduler or GitHub Actions

## Further Reading
- [Blog post: BOM Scraping On GCP](https://tonycerqui.blogspot.com/2025/04/bom-scraping-on-gcp.html)

---

[Technical Build Details](build.md) | [Lessons Learned](reflections.md)
