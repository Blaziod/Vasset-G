import React, { useState, useEffect } from "react";
import { MarketOverview } from "react-ts-tradingview-widgets";

const MarketOverviewWidget = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: isSmallScreen ? "350px" : "600px",
        height: isSmallScreen ? "500px" : "400px",
        overflow: "hidden",
      }}
    >
      <MarketOverview
        colorTheme="light"
        width="100%"
        height="100%"
        tabs={[
          {
            title: "Crypto",
            symbols: [
              { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
              { s: "BINANCE:ETHUSDT", d: "Ethereum" },
              { s: "BINANCE:BNBUSDT", d: "Binance Coin" },
              { s: "BINANCE:XRPUSDT", d: "Ripple" },
              { s: "BINANCE:SOLUSDT", d: "Solana" },
            ],
          },
          {
            title: "Forex",
            symbols: [
              { s: "FX:EURUSD", d: "EUR/USD" },
              { s: "FX:GBPUSD", d: "GBP/USD" },
              { s: "FX:USDJPY", d: "USD/JPY" },
            ],
          },
        ]}
      />
    </div>
  );
};

export default MarketOverviewWidget;
