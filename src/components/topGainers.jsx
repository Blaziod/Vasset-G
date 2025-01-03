import React, { useState, useEffect } from "react";
import axios from "axios";

const TopGainers = () => {
  const [gainers, setGainers] = useState([]);
  const [latestCoins, setLatestCoins] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchTopGainers = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 100,
              page: 1,
              sparkline: false,
            },
          }
        );
        // Sort by 24h percentage change in descending order and get top 5
        const topGainers = response.data
          .sort(
            (a, b) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h
          )
          .slice(0, 3);
        setGainers(topGainers);
      } catch (error) {
        console.error("Error fetching top gainers:", error);
      }
    };
    const fetchLatestCoins = async () => {
      try {
        const allCoinsResponse = await axios.get(
          "https://api.coingecko.com/api/v3/coins/list"
        );

        // Fetch market data for the latest coins
        const latestCoinIDs = allCoinsResponse.data
          .slice(-3) // Select the last 5 coins (latest ones added)
          .map((coin) => coin.id);

        const latestCoinsResponse = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: latestCoinIDs.join(","),
              sparkline: false,
            },
          }
        );

        setLatestCoins(latestCoinsResponse.data);
      } catch (error) {
        console.error("Error fetching latest coins:", error);
      }
    };
    fetchLatestCoins();
    fetchTopGainers();
  }, []);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        width: isSmallScreen ? "330px" : "600px",
        height: isSmallScreen ? "auto" : "380px",
        overflow: "hidden",
      }}
    >
      <h2 style={{ textAlign: "left", color: "#121214", fontSize: "16px" }}>
        Top Gainers
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {gainers.map((coin) => (
          <div
            key={coin.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={coin.image}
                alt={`${coin.name} logo`}
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontWeight: "bold",
                  color: "#121214",
                  fontSize: "14px",
                }}
              >
                {coin.symbol.toUpperCase()}
              </p>
            </div>
            <p
              style={{
                margin: 0,
                fontWeight: "bold",
                color: "#121214",
                textAlign: "left",
              }}
            >
              {coin.current_price.toFixed(2)}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color:
                    coin.price_change_percentage_24h > 0 ? "#20B26C" : "red",
                  fontWeight: "bold",
                }}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2
        style={{
          textAlign: "left",
          color: "#121214",
          fontSize: "16px",
          paddingTop: "20px",
        }}
      >
        New Listings
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {latestCoins.map((coin) => (
          <div
            key={coin.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={coin.image}
                alt={`${coin.name} logo`}
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontWeight: "bold",
                  color: "#121214",
                  fontSize: "14px",
                }}
              >
                {coin.symbol.toUpperCase()}
              </p>
            </div>
            <p
              style={{
                margin: 0,
                fontWeight: "bold",
                color: "#121214",
                textAlign: "left",
              }}
            >
              {coin.current_price.toFixed(2)}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color:
                    coin.price_change_percentage_24h > 0 ? "#20B26C" : "red",
                  fontWeight: "bold",
                }}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopGainers;
