/*
  Node build-time asset optimizer for Netlify
  - Converts images (png/jpg/jpeg) to WebP (q=80) if corresponding .webp does not exist
  - Converts selected MP4 videos to WebM (VP9 CRF=32) if corresponding .webm does not exist
  - Leaves originals intact
*/

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const sharp = require('sharp');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

async function ensureDirExists(dir) {
  await fs.promises.mkdir(dir, { recursive: true }).catch(() => {});
}

async function toWebp(inputPath, outputPath) {
  await ensureDirExists(path.dirname(outputPath));
  return sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
}

function fileExists(p) {
  try { return fs.existsSync(p); } catch { return false; }
}

async function convertImages() {
  const patterns = ['images/*.png', 'images/*.jpg', 'images/*.jpeg', 'images/*.PNG', 'images/*.JPG', 'images/*.JPEG'];
  const files = patterns.flatMap((p) => glob.sync(p));
  let created = 0;
  for (const file of files) {
    const out = file.replace(/\.[^.]+$/, '.webp');
    if (!fileExists(out)) {
      console.log(`Converting image -> ${out}`);
      try {
        await toWebp(file, out);
        created++;
      } catch (e) {
        console.warn('Image conversion failed for', file, e.message);
      }
    }
  }
  console.log(`Image conversion complete. New WebP files: ${created}`);
}

async function convertVideoToWebm(inPath, outPath) {
  if (!fileExists(inPath) || fileExists(outPath)) return false;
  await ensureDirExists(path.dirname(outPath));
  console.log(`Converting video -> ${outPath}`);
  return new Promise((resolve, reject) => {
    ffmpeg(inPath)
      .outputOptions([
        '-c:v libvpx-vp9',
        '-b:v 0',
        '-crf 32',
        '-an'
      ])
      .on('end', () => resolve(true))
      .on('error', (err) => { console.warn('Video conversion failed', inPath, err.message); resolve(false); })
      .save(outPath);
  });
}

async function convertVideos() {
  const tasks = [];
  // Footer brand video
  tasks.push(convertVideoToWebm('videos/prand.mp4', 'videos/prand.webp')); // temporary .webp to skip if mp4 missing
  tasks.push(convertVideoToWebm('videos/prand.mp4', 'videos/prand.webm'));
  // Optional: hero bg video
  tasks.push(convertVideoToWebm('videos/pixnova-raw_33056208d3a7ccde55ddbde4ad7a736a.mp4', 'videos/pixnova-raw_33056208d3a7ccde55ddbde4ad7a736a.webm'));
  await Promise.all(tasks);
}

(async function run() {
  await convertImages();
  await convertVideos();
  console.log('Asset optimization done.');
})();
