# Reflections: BOM Radar Rainfall Modelling

## Lessons Learned
- **Simplicity wins:** Pivoting from direct station data to radar images reduced both cost and operational complexity.
- **Cloud-native/serverless is powerful:** Cloud Run enabled a robust, low-maintenance deployment with minimal cost.
- **Open-source tools matter:** Switching from `cv2` to `Pillow` improved compatibility and reduced container size.
- **Scheduling is non-trivial:** GCP Cloud Scheduler was too expensive, and GitHub Actions was unreliable for tight intervals; cron-job.org was a surprisingly effective solution.
- **Graceful failure handling:** Skipping duplicates and handling partial failures made the pipeline robust and autonomous.

## Challenges
- Managing dependencies for image processing in a serverless environment
- Ensuring reliable, precise scheduling without incurring high costs
- Balancing minimalism with extensibility for future enhancements

## Future Directions
- Explore more granular rainfall data sources (paid APIs)
- Integrate topography and other environmental data for richer modelling
- Enhance the frontend for better monitoring and analytics
- Experiment with advanced rainfall interpolation techniques

## Acknowledgements
- Built for a flood engineer friend to support water model development
- Inspired by the need for affordable, scalable, and accurate environmental data pipelines

## References
- [Blog post: BOM Scraping On GCP](https://tonycerqui.blogspot.com/2025/04/bom-scraping-on-gcp.html)

---

[Project Overview](index.md) | [Technical Build](build.md) 