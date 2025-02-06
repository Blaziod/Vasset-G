/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import CircularCheckBox from "../../components/circularCheckBox";
import { SearchIcon } from "lucide-react";
import axios from "axios";

const Wallet = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [activeCoin, setActiveCoin] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 9;
  const handleSelectCoin = (coin) => {
    setActiveCoin(coin.name);
  };
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

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const ServiceCard = ({ title, description, icon }) => {
    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "21px",
            border: "1px solid #E5E5E5",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: "13px", fontWeight: "bold" }}>{title}</p>
            <p style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.87)" }}>
              {description}
            </p>
          </div>
          <div>{icon}</div>
        </div>
      </div>
    );
  };

  const services = [
    {
      title: "Buy Airtime",
      description: "Tap to top-up airtime",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <g clip-path="url(#clip0_1152_9539)">
            <path
              d="M31.7008 63.802C49.2044 63.802 63.3938 49.6126 63.3938 32.109C63.3938 14.6054 49.2044 0.416016 31.7008 0.416016C14.1973 0.416016 0.0078125 14.6054 0.0078125 32.109C0.0078125 49.6126 14.1973 63.802 31.7008 63.802Z"
              fill="#D4EFEF"
              fill-opacity="0.5"
            />
            <path
              d="M42.3103 36.8919L38.5834 36.4665C37.6884 36.3637 36.808 36.6719 36.1771 37.3028L33.4773 40.0026C29.325 37.8898 25.9209 34.5004 23.808 30.3333L26.5224 27.6188C27.1534 26.9879 27.4615 26.1075 27.3588 25.2126L26.9333 21.515C26.7572 20.033 25.51 18.918 24.0134 18.918H21.4751C19.8171 18.918 18.4378 20.2971 18.5405 21.9552C19.3182 34.4857 29.3396 44.4925 41.8554 45.2701C43.5134 45.3728 44.8927 43.9936 44.8927 42.3356V39.7971C44.9074 38.3152 43.7922 37.068 42.3103 36.8919Z"
              fill="#0088A3"
            />
          </g>
          <defs>
            <clipPath id="clip0_1152_9539">
              <rect
                width="63.386"
                height="63.386"
                fill="white"
                transform="translate(0.0078125 0.416016)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Buy Data",
      description: "Tap to buy data",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <g clip-path="url(#clip0_1152_9558)">
            <path
              d="M31.7008 63.4036C49.2044 63.4036 63.3938 49.2142 63.3938 31.7106C63.3938 14.207 49.2044 0.0175781 31.7008 0.0175781C14.1973 0.0175781 0.0078125 14.207 0.0078125 31.7106C0.0078125 49.2142 14.1973 63.4036 31.7008 63.4036Z"
              fill="#F0EBFD"
            />
            <path
              d="M30.2345 34.6443V30.2425H33.169V34.6443H40.5054C40.8945 34.6443 41.2677 34.7989 41.5429 35.0741C41.818 35.3492 41.9726 35.7225 41.9726 36.1116V44.9152C41.9726 45.3044 41.818 45.6775 41.5429 45.9527C41.2677 46.2279 40.8945 46.3825 40.5054 46.3825H22.8981C22.5089 46.3825 22.1357 46.2279 21.8605 45.9527C21.5854 45.6775 21.4308 45.3044 21.4308 44.9152V36.1116C21.4308 35.7225 21.5854 35.3492 21.8605 35.0741C22.1357 34.7989 22.5089 34.6443 22.8981 34.6443H30.2345ZM17.7773 27.0688C19.7214 21.2393 25.2223 17.0371 31.7018 17.0371C38.1812 17.0371 43.6835 21.2393 45.6261 27.0688L42.8412 27.9961C42.0617 25.6584 40.5664 23.6251 38.5672 22.1844C36.5679 20.7436 34.1661 19.9683 31.7018 19.9683C29.2374 19.9683 26.8356 20.7436 24.8363 22.1844C22.837 23.6251 21.3418 25.6584 20.5622 27.9961L17.7788 27.0688H17.7773ZM23.3471 28.9249C23.9323 27.1722 25.054 25.6478 26.5534 24.5677C28.0527 23.4876 29.8538 22.9064 31.7018 22.9064C33.5496 22.9064 35.3507 23.4876 36.8501 24.5677C38.3494 25.6478 39.4711 27.1722 40.0564 28.9249L37.2714 29.8537C36.8814 28.6852 36.1335 27.669 35.1339 26.9489C34.1344 26.2288 32.9336 25.8413 31.7018 25.8413C30.4698 25.8413 29.2691 26.2288 28.2695 26.9489C27.2699 27.669 26.5221 28.6852 26.132 29.8537L23.3471 28.9249Z"
              fill="#372AA4"
            />
          </g>
          <defs>
            <clipPath id="clip0_1152_9558">
              <rect
                width="63.386"
                height="63.386"
                fill="white"
                transform="translate(0.0078125 0.0175781)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "TV Subscription",
      description: "Tap to pay for TV subscription",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="65"
          viewBox="0 0 64 65"
          fill="none"
        >
          <g clip-path="url(#clip0_1152_9577)">
            <path
              d="M31.7008 64.0149C49.2044 64.0149 63.3938 49.8255 63.3938 32.3219C63.3938 14.8183 49.2044 0.628906 31.7008 0.628906C14.1972 0.628906 0.0078125 14.8183 0.0078125 32.3219C0.0078125 49.8255 14.1972 64.0149 31.7008 64.0149Z"
              fill="#FFF8E8"
            />
            <path
              d="M30.0394 24.8247C29.783 24.5853 29.5213 24.3545 29.2734 24.1066C28.3655 23.2054 27.4627 22.2993 26.5599 21.393C25.9545 20.786 25.8896 20.0901 26.3924 19.5994C26.895 19.1069 27.5756 19.177 28.1893 19.7908C29.3453 20.9467 30.4977 22.1043 31.6912 23.3012C31.8245 23.1747 31.9459 23.0653 32.0622 22.9506C34.2526 20.7603 33.2232 21.7932 35.4118 19.5995C35.6923 19.3174 35.9967 19.1122 36.4155 19.1173C36.8721 19.1241 37.214 19.3242 37.4158 19.7226C37.6261 20.1364 37.5902 20.5502 37.3029 20.9247C37.1987 21.0597 37.0721 21.176 36.9525 21.2956C34.7997 23.4466 35.8718 22.3744 33.7191 24.5238C33.6114 24.6315 33.4797 24.717 33.3583 24.811C33.3788 24.8452 33.3976 24.8794 33.4182 24.9136C33.5652 24.9204 33.714 24.9324 33.861 24.9324C36.8311 24.9341 39.801 24.9324 42.7711 24.9341C44.9495 24.9359 46.3704 26.355 46.3721 28.5402C46.3755 32.9038 46.3755 37.2673 46.3721 41.6327C46.3704 43.8111 44.9409 45.2438 42.7694 45.2438C35.3931 45.2456 28.0167 45.2456 20.642 45.2438C18.4671 45.2438 17.0342 43.8144 17.0325 41.6395C17.0291 37.2606 17.0274 32.8833 17.0325 28.5043C17.0342 26.3533 18.4688 24.9341 20.6267 24.9341C23.583 24.9324 26.5394 24.9341 29.494 24.9341C29.6496 24.9341 29.8052 24.9341 29.9608 24.9341C29.9882 24.8982 30.0138 24.8623 30.0394 24.8247ZM28.9297 43.0758C30.826 42.9732 32.7479 42.9424 34.6527 42.7475C36.7986 42.5269 37.862 41.5181 38.1716 39.3876C38.3853 37.9171 38.4264 36.4176 38.4588 34.9283C38.4913 33.3672 38.4674 31.8009 38.0963 30.2638C37.7475 28.8155 36.8857 27.8802 35.4118 27.557C34.9827 27.463 34.5467 27.3502 34.1123 27.3382C31.6416 27.2715 29.1691 27.2031 26.6984 27.1997C25.5083 27.1979 24.3097 27.2783 23.1281 27.4254C20.9601 27.6938 19.9359 28.6257 19.5922 30.7733C19.3733 32.1412 19.2947 33.545 19.3032 34.9317C19.3118 36.4757 19.4143 38.0282 19.6161 39.5586C19.8145 41.0684 20.6574 42.1508 22.2032 42.5577C22.5314 42.6449 22.8666 42.7441 23.2017 42.7646C25.1031 42.8809 27.0045 42.9732 28.9297 43.0758ZM44.1817 32.2626C44.18 31.2828 43.4055 30.5014 42.4325 30.4963C41.4442 30.4912 40.6509 31.2914 40.6612 32.2865C40.6697 33.2595 41.4648 34.0408 42.4343 34.0323C43.414 34.0221 44.1835 33.2423 44.1817 32.2626ZM44.1817 36.763C44.1732 35.7832 43.3952 35.012 42.4171 35.0138C41.4272 35.0155 40.6441 35.8191 40.6594 36.816C40.6748 37.7906 41.4682 38.5566 42.4463 38.5412C43.4311 38.5241 44.1903 37.7478 44.1817 36.763Z"
              fill="#FFB61B"
            />
          </g>
          <defs>
            <clipPath id="clip0_1152_9577">
              <rect
                width="63.386"
                height="63.386"
                fill="white"
                transform="translate(0.0078125 0.628906)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Internet Subscription",
      description: "Tap to purchase internet subscription",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <g clip-path="url(#clip0_1152_9598)">
            <path
              d="M31.7008 63.6048C49.2044 63.6048 63.3938 49.4154 63.3938 31.9118C63.3938 14.4081 49.2044 0.21875 31.7008 0.21875C14.1972 0.21875 0.0078125 14.4081 0.0078125 31.9118C0.0078125 49.4154 14.1972 63.6048 31.7008 63.6048Z"
              fill="#FFC0C8"
              fill-opacity="0.2"
            />
            <path
              d="M31.7002 30.4451C30.0863 30.4451 28.7657 31.7656 28.7657 33.3796C28.7657 34.9936 30.0863 36.3141 31.7002 36.3141C33.3142 36.3141 34.6347 34.9936 34.6347 33.3796C34.6347 31.7656 33.3142 30.4451 31.7002 30.4451ZM40.5038 33.3796C40.5038 28.1562 35.9407 23.9891 30.5998 24.6493C26.7555 25.1189 23.5862 28.1855 22.9993 32.015C22.5151 35.1696 23.7183 38.0455 25.8311 39.9383C26.5354 40.5693 27.6359 40.4225 28.1201 39.6009L28.1348 39.5862C28.4869 38.9699 28.3401 38.2216 27.8119 37.7374C26.3007 36.3728 25.479 34.26 26.0219 31.9563C26.5061 29.8729 28.1935 28.1855 30.2769 27.6866C34.1212 26.7622 37.5693 29.6674 37.5693 33.3796C37.5693 35.111 36.8063 36.6516 35.6178 37.7227C35.0896 38.1923 34.9282 38.9552 35.2804 39.5715L35.295 39.5862C35.7499 40.3638 36.8063 40.5986 37.4959 39.997C39.33 38.383 40.5038 36.0207 40.5038 33.3796ZM29.9835 18.8096C23.2047 19.5726 17.7318 25.1629 17.1009 31.9563C16.5873 37.3853 19.0377 42.2566 22.9993 45.1765C23.7036 45.69 24.7014 45.4699 25.1415 44.7216C25.5084 44.0907 25.3469 43.269 24.7601 42.8288C21.4147 40.3492 19.4045 36.1527 20.1235 31.5309C20.9158 26.3954 25.2002 22.3018 30.365 21.7295C37.4373 20.9225 43.4383 26.4541 43.4383 33.3796C43.4383 37.2679 41.5456 40.6866 38.6404 42.8288C38.0535 43.269 37.8921 44.076 38.2589 44.7216C38.6991 45.4846 39.6968 45.69 40.4011 45.1765C44.0253 42.5061 46.3729 38.2216 46.3729 33.3796C46.3729 24.7081 38.8458 17.7972 29.9835 18.8096Z"
              fill="#EF233C"
            />
          </g>
          <defs>
            <clipPath id="clip0_1152_9598">
              <rect
                width="63.386"
                height="63.386"
                fill="white"
                transform="translate(0.0078125 0.21875)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Electricity",
      description: "Tap to pay electricity bills",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="65"
          viewBox="0 0 64 65"
          fill="none"
        >
          <g clip-path="url(#clip0_1152_9619)">
            <path
              d="M31.7008 64.2063C49.2044 64.2063 63.3938 50.0169 63.3938 32.5133C63.3938 15.0097 49.2044 0.820312 31.7008 0.820312C14.1972 0.820312 0.0078125 15.0097 0.0078125 32.5133C0.0078125 50.0169 14.1972 64.2063 31.7008 64.2063Z"
              fill="#D4EFEF"
              fill-opacity="0.5"
            />
            <path
              d="M39.6814 26.9379H32.9084L34.9402 19.0808C35.1785 18.1592 34.5039 17.2539 33.5792 17.2539H25.5972C24.8912 17.2539 24.2943 17.793 24.201 18.5146L22.3231 33.0405C22.2105 33.9114 22.8683 34.6851 23.7193 34.6851H30.686L27.9827 46.4551C27.7717 47.3741 28.453 48.2426 29.353 48.2426C29.843 48.2426 30.3141 47.9779 30.5725 47.5177L40.9004 29.1184C41.443 28.1519 40.7662 26.9379 39.6814 26.9379Z"
              fill="#0088A3"
            />
          </g>
          <defs>
            <clipPath id="clip0_1152_9619">
              <rect
                width="63.386"
                height="63.386"
                fill="white"
                transform="translate(0.0078125 0.820312)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Loan",
      description: "Take Naira loans and use your Crypto as collateral",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="65"
          viewBox="0 0 64 65"
          fill="none"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M31.7008 64.2063C49.2044 64.2063 63.3938 50.0169 63.3938 32.5133C63.3938 15.0097 49.2044 0.820312 31.7008 0.820312C14.1972 0.820312 0.0078125 15.0097 0.0078125 32.5133C0.0078125 50.0169 14.1972 64.2063 31.7008 64.2063Z"
              fill="#D4EFEF"
              fill-opacity="0.5"
            />
            <g transform="translate(16, 18)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.84628 7.54517C2.88328 7.54517 2.10228 8.32617 2.10228 9.28917V16.3932C2.10228 17.3562 2.88228 18.1372 3.84628 18.1372H9.93528C10.2072 18.1456 10.4652 18.2595 10.6546 18.4549C10.844 18.6502 10.9499 18.9116 10.9499 19.1837C10.9499 19.4558 10.844 19.7171 10.6546 19.9125C10.4652 20.1078 10.2072 20.2218 9.93528 20.2302H3.84628C2.82864 20.2302 1.85269 19.8259 1.13311 19.1063C0.413532 18.3868 0.00927734 17.4108 0.00927734 16.3932V9.28817C0.00927734 8.27054 0.413532 7.29458 1.13311 6.575C1.85269 5.85543 2.82864 5.45117 3.84628 5.45117H26.1723C26.6762 5.45117 27.1753 5.55045 27.6409 5.74334C28.1065 5.93623 28.5295 6.21895 28.8858 6.57536C29.2421 6.93176 29.5247 7.35487 29.7175 7.82051C29.9103 8.28615 30.0094 8.78521 30.0093 9.28917V19.1842C30.0136 19.3243 29.9897 19.4639 29.9391 19.5947C29.8885 19.7254 29.8121 19.8447 29.7145 19.9453C29.6169 20.046 29.5 20.126 29.3709 20.1807C29.2418 20.2354 29.103 20.2635 28.9628 20.2635C28.8226 20.2635 28.6838 20.2354 28.5546 20.1807C28.4255 20.126 28.3087 20.046 28.2111 19.9453C28.1135 19.8447 28.0371 19.7254 27.9864 19.5947C27.9358 19.4639 27.9119 19.3243 27.9163 19.1842V9.28817C27.9163 8.32517 27.1363 7.54417 26.1723 7.54417L3.84628 7.54517Z"
                fill="#007A25"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.9975 10.3919C25.7515 11.0249 26.2045 12.0409 26.2045 13.0959V19.8189C26.2045 25.6509 21.4765 30.3789 15.6445 30.3789C9.81147 30.3789 5.08447 25.6509 5.08447 19.8189V19.1849C5.08447 18.9075 5.19468 18.6414 5.39084 18.4452C5.587 18.2491 5.85306 18.1389 6.13047 18.1389C6.40789 18.1389 6.67394 18.2491 6.87011 18.4452C7.06627 18.6414 7.17647 18.9075 7.17647 19.1849V19.8189C7.17647 22.0646 8.06858 24.2183 9.65655 25.8063C11.2445 27.3943 13.3983 28.2864 15.644 28.2864C17.8897 28.2864 20.0434 27.3943 21.6314 25.8063C23.2194 24.2183 24.1115 22.0646 24.1115 19.8189V13.0959C24.1115 12.6089 23.8945 12.1999 23.6515 11.9959C23.5709 11.9213 23.4699 11.8726 23.3615 11.8559C23.2975 11.8479 23.1975 11.8559 23.0535 11.9439C22.4654 12.3037 21.9796 12.8085 21.6427 13.41C21.3058 14.0115 21.1291 14.6894 21.1295 15.3789C21.1295 16.3979 20.6885 17.2519 20.1215 17.9119C19.5595 18.5669 18.8385 19.0789 18.1525 19.4539C17.5176 19.8006 16.9878 20.3119 16.6188 20.9341C16.2498 21.5563 16.0552 22.2665 16.0555 22.9899C16.0471 23.2618 15.9331 23.5198 15.7378 23.7092C15.5424 23.8986 15.2811 24.0045 15.009 24.0045C14.7369 24.0045 14.4755 23.8986 14.2802 23.7092C14.0848 23.5198 13.9709 23.2618 13.9625 22.9899C13.9622 21.891 14.2577 20.8123 14.8182 19.867C15.3786 18.9218 16.1832 18.1449 17.1475 17.6179C17.6905 17.3209 18.1855 16.9549 18.5325 16.5499C18.8755 16.1499 19.0365 15.7609 19.0365 15.3799C19.0358 14.3328 19.3039 13.303 19.8152 12.3892C20.3265 11.4754 21.0638 10.7081 21.9565 10.1609C23.0445 9.49287 24.1965 9.72087 24.9965 10.3919H24.9975Z"
                fill="#007A25"
              />
              <path
                d="M15.0094 15.43C15.6961 15.43 16.3546 15.1572 16.8401 14.6717C17.3256 14.1861 17.5984 13.5276 17.5984 12.841C17.5984 12.1543 17.3256 11.4958 16.8401 11.0103C16.3546 10.5247 15.6961 10.252 15.0094 10.252C14.3228 10.252 13.6642 10.5247 13.1787 11.0103C12.6932 11.4958 12.4204 12.1543 12.4204 12.841C12.4204 13.5276 12.6932 14.1861 13.1787 14.6717C13.6642 15.1572 14.3228 15.43 15.0094 15.43Z"
                fill="#007A25"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.0835 5.23091C5.0835 3.94408 5.59469 2.70995 6.50461 1.80002C7.41454 0.890098 8.64867 0.378906 9.9355 0.378906L20.0835 0.378906C21.3703 0.378906 22.6045 0.890098 23.5144 1.80002C24.4243 2.70995 24.9355 3.94408 24.9355 5.23091V6.49991C24.9355 6.77746 24.8252 7.04364 24.629 7.23989C24.4327 7.43615 24.1665 7.54641 23.889 7.54641C23.6114 7.54641 23.3453 7.43615 23.149 7.23989C22.9528 7.04364 22.8425 6.77746 22.8425 6.49991V5.23091C22.8425 4.86859 22.7711 4.50982 22.6325 4.17508C22.4938 3.84035 22.2906 3.5362 22.0344 3.28C21.7782 3.0238 21.4741 2.82058 21.1393 2.68192C20.8046 2.54327 20.4458 2.47191 20.0835 2.47191H9.9355C9.20376 2.47191 8.502 2.76259 7.98459 3.28C7.46718 3.79741 7.1765 4.49917 7.1765 5.23091V6.49991C7.16809 6.77186 7.05415 7.02985 6.85881 7.21925C6.66347 7.40864 6.40208 7.51455 6.13 7.51455C5.85792 7.51455 5.59652 7.40864 5.40118 7.21925C5.20584 7.02985 5.0919 6.77186 5.0835 6.49991V5.23091Z"
                fill="#007A25"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="63.386"
                height="63.386"
                fill="white"
                transform="translate(0.0078125 0.820312)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];
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
              {activeCoin && (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={`/assets/6b.png`}
                    alt={`QR Code for ${activeCoin}`}
                  />
                </div>
              )}
              {!activeCoin && (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <img src={`/assets/6a.png`} />
                </div>
              )}
              <div style={{ paddingBottom: "20px" }}>
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
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#22242A",
                }}
              >
                Your Assets
              </p>
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
              {currentCoins.map((coin, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectCoin(coin)}
                  style={{
                    border: "1px solid #EAEBED",
                    borderRadius: "8px",
                    padding: "20px",
                    backgroundColor:
                      activeCoin === coin.name ? "#007A25" : "#fff",
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
                      <div>
                        <p
                          style={{
                            fontSize: "16px",
                            color:
                              activeCoin === coin.name ? "#fff" : "#22242A",
                            fontWeight: "bold",
                          }}
                        >
                          {coin.name}
                        </p>
                        <p
                          style={{
                            fontSize: "12px",
                            color:
                              activeCoin === coin.name ? "#D7FFDF" : "#22242A",
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
                          color: activeCoin === coin.name ? "#fff" : "#22242A",
                          fontWeight: "bold",
                        }}
                      >
                        0
                      </p>
                      <p
                        style={{
                          margin: "0px",
                          fontSize: "12px",
                          color: activeCoin === coin.name ? "#fff" : "#707A8A",
                        }}
                      >
                        0.00
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                {[...Array(Math.ceil(coins.length / coinsPerPage)).keys()].map(
                  (number) => (
                    <button
                      key={number + 1}
                      onClick={() => paginate(number + 1)}
                      style={{
                        margin: "5px",
                        padding: "8px",
                        borderRadius: "5px",
                        border: "none",
                        backgroundColor:
                          currentPage === number + 1 ? "#007A25" : "#ccc",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      {number + 1}
                    </button>
                  )
                )}
              </div>
            </div>
            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#22242A",
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              Services
            </p>

            <div style={{ paddingBottom: "40px" }}>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
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
