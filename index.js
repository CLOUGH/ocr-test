const vision = require('@google-cloud/vision');
var fs = require('fs');

async function googleOCR(){
  // Creates a client
  const client = new vision.ImageAnnotatorClient();
  
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  const fileName = './IMG_20191022_230620.jpg';
  
  // Performs text detection on the local file
  const [result] = await client.receiptDetection(fileName);
  const detections = result.textAnnotations;
  console.log('Text:');
  const textDetected = [];
  detections.forEach(text => {
    console.log(text)
    textDetected.push(text);
  });
  fs.writeFile('parsed-image.json', JSON.stringify(textDetected), (error) => {
    if(error) throw error;

    console.log('saved');
  });
}
googleOCR();