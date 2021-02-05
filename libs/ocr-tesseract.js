const { createWorker } = require('tesseract.js');
const jimp = require('jimp');

async function getTextInImage(sourceFile) {
  let stringRaw = '';
  let modifiedImage = "./output/temp/ocr/ocr-screenshot.png"

  // source from https://github.com/naptha/tesseract.js#tesseractjs
  const ocrworker = createWorker({
    //logger: m => console.log(m)
  });

  // source from https://github.com/oliver-moran/jimp
  const modifyImage = await jimp.read(sourceFile);
  modifyImage.resize(1080, 801);
  modifyImage.quality(100);
  modifyImage.crop(260, 20, 550, 110); // crop only the result screen part to improve OCR reading
  modifyImage.greyscale();
  modifyImage.contrast(+1);
  modifyImage.write(modifiedImage);
  
  // load OCR worker
  await ocrworker.load();
  await ocrworker.loadLanguage('eng');
  await ocrworker.initialize('eng');
  const { data: { text } } = await ocrworker.recognize(modifiedImage);
  await ocrworker.terminate();

  // modification text
  const result = text.split('\n')[0].replace('|', '').split(' ');
  result.forEach(async (item) => {
    if (stringRaw === '') {
      stringRaw = item;
    } else {
      stringRaw = `${stringRaw}${item}`;
    }
  });
  stringRaw = stringRaw.replace('|','').replace('[','').replace(']','');
  return stringRaw;
}

module.exports = {
  getTextInImage,
};