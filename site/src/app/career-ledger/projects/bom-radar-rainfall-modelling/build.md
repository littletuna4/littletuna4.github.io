# Technical Build: BOM Radar Rainfall Modelling

## Architecture Overview
- **Source:** BOM radar images (Brisbane region: 64km, 128km, 256km coverage)
- **Ingestion:** Python script fetches latest images every 5 minutes
- **Processing:**
  - Images are processed to extract rainfall intensity via pixel colour mapping (16-level BOM scale)
  - Images are cleaned (trimmed, downsampled)
  - Data is converted to a tidy pandas DataFrame
- **Storage:**
  - Raw images and processed CSVs are uploaded to a GCS bucket
  - Duplicate checks prevent redundant downloads
- **Deployment:**
  - Containerized with Docker
  - Deployed to GCP Cloud Run (serverless)
  - Scheduling handled by cron-job.org (external HTTP trigger)
- **Frontend:**
  - Minimal Flask app for status display (success, skip, error)

## Key Implementation Details
- **Image Processing:**
  - Switched from `cv2` to `Pillow` for compatibility and smaller containers
  - 16-pixel borders trimmed, 2x2 downsampling for manageable data size
  - Colour-to-rainfall mapping based on BOM's published scale
- **Scheduling:**
  - GCP Cloud Scheduler was considered but rejected due to cost
  - GitHub Actions was unreliable for 5-min intervals
  - cron-job.org proved reliable and free
- **Error Handling:**
  - Graceful handling of partial failures
  - Skips already-processed data

## Stack
- Python: `datetime`, `requests`, `pandas`, `Pillow`, `Flask`, `numpy`
- Cloud: GCP (Cloud Run, GCS)
- DevOps: Docker, GitHub Actions, cron-job.org

## Data Flow
BOM Radar Images → Download → Process → Downsample + Rainfall Mapping → CSV → Cloud Storage

## References
- [Blog post: BOM Scraping On GCP](https://tonycerqui.blogspot.com/2025/04/bom-scraping-on-gcp.html)

---

[Project Overview](index.md) | [Lessons Learned](reflections.md) 