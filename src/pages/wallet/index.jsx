/* eslint-disable react/no-unknown-property */ import React, {
  useEffect,
  useState,
} from "react";
import CircularCheckBox from "../../components/circularCheckBox";
import { SearchIcon } from "lucide-react";
import axios from "axios";

const Wallet = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  // List of exact coins you want to display
  const exactCoins = [
    "Bitcoin",
    "Ethereum",
    "Binance Coin",
    "Cardano",
    "Solana",
    "Polkadot",
    "Ripple",
    "Litecoin",
    "Avalanche",
    "Chainlink",
    "Tether",
    "USD Coin",
    "Dai",
    "Binance USD",
    "Dogecoin",
    "Shiba Inu",
    "Uniswap",
    "Aave",
    "Synthetix",
    "Curve DAO Token",
    "Axie Infinity",
    "The Sandbox",
    "Decentraland",
    "Gala",
    "Enjin Coin",
    "Monero",
    "Zcash",
    "Dash",
    "Polygon",
    "Arbitrum",
    "Optimism",
    "Flow",
    "Algorand",
    "Hedera",
    "VeChain",
    "Cosmos",
    "Tezos",
    "Stellar",
    "NEO",
    "Filecoin",
    "BNB",
    "TRON",
    "NEAR Protocol",
    "Axie Infinity",
  ];

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 250,
              page: 1,
            },
          }
        );

        // Filter to only include the exact coins
        const filteredCoins = response.data.filter((coin) =>
          exactCoins.includes(coin.name)
        );

        // Map the filtered coins to the desired structure
        let coinData = filteredCoins.map((coin) => ({
          name: coin.name,
          symbol: coin.symbol.toUpperCase(),
          image: coin.image,
        }));

        // Sort the coins alphabetically by name
        coinData = coinData.sort((a, b) => a.name.localeCompare(b.name));

        // Add the Naira manually at the top
        coinData.unshift({
          name: "Naira",
          symbol: "NGN",
          image: "/assets/5.png",
        });

        setCoins(coinData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching coins:", error);
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  if (loading) {
    return <div>Loading coins...</div>;
  }

  return (
    <div
      style={{
        backgroundColor: isSmallScreen ? "#fff" : "#F2F5EF",
        maxWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "70px",
        paddingLeft: isSmallScreen ? "0" : "20px",
        paddingRight: isSmallScreen ? "0" : "20px",
      }}
    >
      {loading && (
        <div
          style={{
            fontSize: "20px",
            textAlign: "center",
            marginTop: "20px",
            color: "#007A25",
          }}
        >
          Loading coins...
        </div>
      )}
      <div style={{ padding: isSmallScreen ? "0" : "50px" }}>
        {isSmallScreen && (
          <>
            <div
              style={{
                backgroundColor: "#0B5530",
                padding: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#007A25",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <h1
                  style={{
                    color: "#D7FFDF",
                    fontSize: "12px",
                    fontWeight: "normal",
                  }}
                >
                  Estimated assets value
                </h1>
                <h1
                  style={{
                    color: "#FFF",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  40,000 NGN
                </h1>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "8px",
                border: "1px solid #E5E5E5",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <CircularCheckBox />
                  <h1 style={{ fontSize: "14px", fontWeight: "normal" }}>
                    Hide 0 balances
                  </h1>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    borderRadius: "20px",
                    padding: "4px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div style={styles.iconContainer}>
                    <SearchIcon width={20} height={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    style={styles.input}
                  />
                </div>
              </div>

              {coins.map((coin, index) => (
                <div
                  key={index}
                  style={{
                    alignItems: "center",
                    border: "1px solid #EAEBED",
                    borderRadius: "8px",
                    padding: "20px",
                    backgroundColor: "#fff",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={coin.image}
                        alt={coin.name}
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      />
                      <div style={{ margin: "0px" }}>
                        <p
                          style={{
                            margin: "0px",
                            fontSize: "16px",
                            color: "#22242A",
                            fontWeight: "bold",
                          }}
                        >
                          {coin.name}
                        </p>
                        <p
                          style={{
                            margin: "0px",
                            fontSize: "12px",
                            color: "#22242A",
                          }}
                        >
                          {coin.symbol}
                        </p>
                      </div>
                    </div>
                    <div style={{ margin: "0px", textAlign: "right" }}>
                      <p
                        style={{
                          margin: "0px",
                          fontSize: "16px",
                          color: "#22242A",
                          fontWeight: "bold",
                        }}
                      >
                        0
                      </p>
                      <p
                        style={{
                          margin: "0px",
                          fontSize: "12px",
                          color: "#707A8A",
                        }}
                      >
                        0.00
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "10px",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "#007A25",
                        border: "none",
                        padding: "5px",
                        borderRadius: "8px",
                        height: "30px",
                        width: "110px",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "12px",
                      }}
                    >
                      Deposit
                    </button>
                    <button
                      style={{
                        backgroundColor: "#fff",
                        padding: "5px",
                        borderRadius: "8px",
                        height: "30px",
                        width: "110px",
                        color: "#22242A",
                        cursor: "pointer",
                        fontSize: "12px",
                        border: "1px solid #CBD0D6",
                      }}
                    >
                      Withdraw
                    </button>
                    <button
                      style={{
                        backgroundColor: "#fff",
                        padding: "5px",
                        borderRadius: "8px",
                        height: "30px",
                        width: "110px",
                        color: "#22242A",
                        cursor: "pointer",
                        fontSize: "12px",
                        border: "1px solid #CBD0D6",
                      }}
                    >
                      Swap
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {!isSmallScreen && (
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              boxShadow: isSmallScreen
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "25px",
                backgroundColor: "#F2F5EF",
                borderRadius: "12px",
              }}
            >
              <div> Wallet Balance</div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <button
                  style={{
                    backgroundColor: "#FFF",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    width: "120px",
                    height: "40px",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease-in-out",
                    gap: "5px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M8.61401 10.5762L10.7473 12.7095L12.8806 10.5762"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7473 4.17578V12.6508"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.514 10.9922C17.514 14.6755 15.014 17.6589 10.8473 17.6589C6.68066 17.6589 4.18066 14.6755 4.18066 10.9922"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>Deposit</p>
                </button>
                <button
                  style={{
                    backgroundColor: "#007A25",
                    borderRadius: "8px",
                    padding: "12px 19.873px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    width: "120px",
                    height: "40px",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease-in-out",
                    gap: "5px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M3.69324 5.14258H15.2266C16.6099 5.14258 17.7266 6.25924 17.7266 7.64258V10.4092"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.32657 2.50977L3.69324 5.14307L6.32657 7.77644"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.7266 16.5421H6.19324C4.8099 16.5421 3.69324 15.4254 3.69324 14.0421V11.2754"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.0933 19.1768L17.7266 16.5436L15.0933 13.9102"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p style={{ color: "white" }}>Swap</p>
                </button>
              </div>
            </div>
            <div
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <CircularCheckBox />
                <h1 style={{ fontSize: "14px", fontWeight: "normal" }}>
                  Hide 0 balances
                </h1>
              </div>
              <div style={styles.searchContainer}>
                <div style={styles.iconContainer}>
                  <SearchIcon width={20} height={20} />
                </div>
                <input type="text" placeholder="Search" style={styles.input} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  searchContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "20px",
    padding: "5px",
    width: "250px",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "12px",
    marginLeft: "5px",
    placeholderColor: "#CBD0D6",
  },
  iconContainer: {
    fontSize: "18px",
    color: "#888",
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
    selfAlign: "center",
  },
};

export default Wallet;
