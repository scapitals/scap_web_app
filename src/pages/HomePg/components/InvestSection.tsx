import { InvestCard, PserverCard } from "../../ui";

const InvestSection = () => {
  return (
    <div>
      <div className="container py-16">
        <div className="py-10">
          <h2 className="text-5xl font-['Jost'] text-center">
            Investment Plan
          </h2>
          <p className="text-center">Our Trading Investment Plan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">
          <div>
            <p>
              Spectrum Capitals offers a variety of trading accounts to match
              every trading style across all levels of experience. <br />
              Whether you’re a scalper or day trader, use EAs or are a
              discretionary trader - we have you covered.
            </p>
          </div>
          <InvestCard />
          <InvestCard />
          <InvestCard />
          <InvestCard />
          <InvestCard />
        </div>
      </div>
      <div className="container">
        <h1 className="text-center py-8 text-5xl font-['Jost']">
          Forex Market Fundamental Data
        </h1>
        <div>
          <iframe
            src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22www.account.deepmargins.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22www.account.deepmargins.com%2Foverview%22%7D"
            //   frameborder="0"
            className="w-full h-96"
          ></iframe>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center py-8 text-5xl font-['Jost']">
          Cryptocurrency Prices
        </h1>
        <div>
          <iframe
            src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22www.account.deepmargins.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%7D"
            // frameborder="0"
            className="w-full h-96"
          ></iframe>
          ``
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
            <PserverCard />
            <PserverCard />
            <PserverCard />
        </div>
      </div>
    </div>
  );
};

export default InvestSection;
