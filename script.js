let model;

let modelURL = './model/model.json';
let metadataURL = './model/metadata.json';

const loadModel = async () => {
  model = await tmImage.load(modelURL, metadataURL);

}

loadModel();

const classify = async () => {
  const predictions = await model.predict(predictionImage);
  displayResults(
    predictions.reduce((a, b) => a.probability > b.probability ? a: b)
  )
}


const onImageLoaded = async () => {
  await classify();
}