import CONFIG from '../globals/config';

const resizeImg = (src, id) => {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    // Start resizing

    // create an off-screen canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, CONFIG.IMG_WIDTH, CONFIG.IMG_HEIGHT);

    // encode image to data-uri with base64 version of compressed image
    document.getElementsByClassName(`img${id}`)[0].src = canvas.toDataURL();
  };

  img.src = src;
};

export default resizeImg;
