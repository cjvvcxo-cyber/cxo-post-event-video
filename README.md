# CxO Post-Event Video Generator

A LinkedIn-first, 4:5 Remotion video for the CxO Series Member Appreciation Dinner.

## Output

- 1080 x 1350 (4:5)
- 30 fps
- MP4 / H.264
- Barlow typography
- Variable hero, duo, trio, magazine and stacked layouts
- Navy, teal and charcoal CxO visual system

## Use

1. Add JPG/PNG event images to `public/images/`.
2. Edit the `images` array in `src/Video.tsx` so every uploaded filename is listed.
3. Optionally add licensed music in `public/music/` and set the `music` value.
4. Run `npm install` and `npm start` for the Remotion Studio preview.
5. Run `npm run render` for the MP4.

## Render on GitHub

Open **Actions**, choose **Render LinkedIn video**, click **Run workflow**, and download the `cxo-linkedin-video` artifact when complete.

## Note about 280 photos

GitHub's web uploader can upload the project, but large photo batches are more reliable through Git or Codespaces. Keep each image reasonably sized, preferably under 4 MB, and use JPG for event photos.
