import Cropper from "react-easy-crop";
import { useState, useCallback, useEffect } from "react";
import getCroppedImg from "./cropImageUtils";

const CropImageModal = ({
  open,
  imageSrc,
  onCancel,
  onCropComplete,
  title = "Crop Image",
  maxCropSize = { width: 300, height: 300 },
  cropstucture = false,
}) => {
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const onCropAreaComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  useEffect(() => {
    if (!imageSrc) return;
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setImageSize({ width: img.width, height: img.height });
    };
  }, [imageSrc]);

  const cropSize = {
    width: Math.min(maxCropSize.width, imageSize.width),
    height: Math.min(maxCropSize.height, imageSize.height),
  };

  const aspectRatio =
    cropSize.width && cropSize.height
      ? cropSize.width / cropSize.height
      : 4 / 5;

  const handleOk = async () => {
    const croppedImage = await getCroppedImg(
      imageSrc,
      croppedAreaPixels,
      cropSize,
      cropstucture
    );
    onCropComplete(croppedImage);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[90%] max-w-4xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onCancel}
            className="text-gray-600 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Cropper */}
        <div className="w-full h-[60vh] bg-black flex items-center justify-center relative">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={aspectRatio}
            cropSize={cropSize}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropAreaComplete}
            style={{
              containerStyle: {
                width: "100%",
                height: "100%",
              },
              mediaStyle: {
                objectFit: "contain",
              },
            }}
          />
        </div>

        {/* Zoom Slider */}
        <div className="px-6 py-4">
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleOk}
            className="px-4 py-2 rounded !bg-orange-600 hover:!bg-orange-700 !text-white cursor-pointer"
          >
            Crop Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropImageModal;
