import { useRef, useEffect, useState } from "react";

const HeatmapOverlay = () => {
  const imgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (imgRef.current) {
      const updateSize = () => {
        setDimensions({
          width: imgRef.current.clientWidth,
          height: imgRef.current.clientHeight,
        });
      };

      updateSize();
      window.addEventListener("resize", updateSize);

      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  // 🔥 tamaño base del modelo (ajústalo si usas otro)
  const BASE_SIZE = 224;

  return (
    <div className="relative inline-block">
      {/* Imagen */}
      <img
        ref={imgRef}
        src={image}
        alt="preview"
        className="rounded-xl shadow max-w-full"
      />

      {/* Overlay */}
      {heatmap &&
        heatmap.map((box, index) => {
          const scaleX = dimensions.width / BASE_SIZE;
          const scaleY = dimensions.height / BASE_SIZE;

          return (
            <div
              key={index}
              className="absolute border-2 border-red-500 bg-red-500/30 rounded"
              style={{
                left: box.x * scaleX,
                top: box.y * scaleY,
                width: box.width * scaleX,
                height: box.height * scaleY,
              }}
            />
          );
        })}
    </div>
  );
};

export default HeatmapOverlay;
