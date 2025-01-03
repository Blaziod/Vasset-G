import React, { useEffect, useRef } from "react";

const MiniChartWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (window.TradingView && widgetRef.current) {
      new window.TradingView.MiniWidget({
        container_id: widgetRef.current,
        symbol: "BINANCE:BTCUSDT",
        locale: "en",
        width: "100%",
        height: "100%",
        // Additional configuration options can be added here
      });
    }
  }, []);

  return (
    <div
      ref={widgetRef}
      style={{
        width: "300px", // Set your desired width
        height: "200px", // Set your desired height
        borderRadius: "10px", // Adjust the border radius as needed
        overflow: "hidden", // Ensures the content fits within the rounded corners
      }}
    />
  );
};

export default MiniChartWidget;
