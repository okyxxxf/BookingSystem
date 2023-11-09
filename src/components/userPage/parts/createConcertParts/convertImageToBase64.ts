function convertImageToBase64(imgFile: File) {
  return new Promise((resolve, reject) => {
    const file = imgFile;
    const reader = new FileReader();

    reader.onloadend = function () {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}

export default convertImageToBase64;