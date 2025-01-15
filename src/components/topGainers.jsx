import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchWithRetry = async (url, options, retries = 3, delay = 10000) => {
  try {
    const response = await axios.get(url, options);
    return response;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying API call... Attempts left: ${retries}`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchWithRetry(url, options, retries - 1, delay);
    }
    throw error; // Exhausted retries, rethrow the error
  }
};

const TopGainers = () => {
  const [gainers, setGainers] = useState([]);
  const [latestCoins, setLatestCoins] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [error, setError] = useState(null);

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
        const response = await fetchWithRetry(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 100,
              page: 1,
              sparkline: false,
            },
          },
          3,
          1000
        );

        const topGainers = response.data
          .sort(
            (a, b) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h
          )
          .slice(0, 3);
        setGainers(topGainers);
      } catch (error) {
        console.error("Failed to fetch top gainers:", error);
        setError("Unable to load top gainers. Please try again later.");
      }
    };

    const fetchLatestCoins = async () => {
      try {
        const allCoinsResponse = await fetchWithRetry(
          "https://api.coingecko.com/api/v3/coins/list",
          {},
          3,
          1000
        );

        const latestCoinIDs = allCoinsResponse.data
          .slice(-3) // Select the last 3 coins
          .map((coin) => coin.id);

        const latestCoinsResponse = await fetchWithRetry(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: latestCoinIDs.join(","),
              sparkline: false,
            },
          },
          3,
          1000
        );

        setLatestCoins(latestCoinsResponse.data);
      } catch (error) {
        console.error("Failed to fetch latest coins:", error);
        setError(
          "Unable to load the latest coin listings. Please try again later."
        );
      }
    };

    fetchTopGainers();
    fetchLatestCoins();
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
      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2 style={{ textAlign: "left", color: "#121214", fontSize: "16px" }}>
        Top Gainers
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {gainers.length > 0 ? (
          gainers.map((coin) => (
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
          ))
        ) : (
          <p style={{ color: "#999" }}>No top gainers available.</p>
        )}
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
        {latestCoins.length > 0 ? (
          latestCoins.map((coin) => (
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
          ))
        ) : (
          <p style={{ color: "#999" }}>No new listings available.</p>
        )}
      </div>
    </div>
  );
};

export default TopGainers;
