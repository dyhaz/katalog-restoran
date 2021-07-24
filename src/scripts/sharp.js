// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, '../../src/public/images');
const destination = path.resolve(__dirname, '../../dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

const processImage = (image) => {
  if (image.indexOf('.') > -1) {
    let file;

    if (image.indexOf('/') > -1) {
      file = `${destination}/${image.substr(0, image.lastIndexOf('/'))}/${image.substr(image.lastIndexOf('/') + 1).split('.').slice(0, -1).join('.')}`;
    } else {
      file = `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}`;
    }

    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(__dirname, `${file}-large.jpg`));

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(__dirname, `${file}-small.jpg`));
  } else {
    try {
      fs.readdirSync(`${target}/${image}`)
        .forEach((image2) => {
          processImage(`${image}/${image2}`);
        });
    } catch (e) {
      // Not a directory
    }
  }
};

fs.readdirSync(target)
  .forEach((image) => {
    processImage(image);
  });
