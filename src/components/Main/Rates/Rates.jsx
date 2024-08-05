import RateCard from './RateCard/RateCard.jsx';
import '../../../styles/Rates.css';

import icon_lamp from "../../../images/icon_lamp.svg"
import icon_laptop from "../../../images/icon_laptop.svg"
import icon_target from "../../../images/icon_target.svg"

function Rates ({ isLoggedIn, userTariff }) {

  return (
    <div className="tariffs-block">
      <h2>Наши тарифы</h2>
      <div className="tariffs-cards">
      <RateCard
          name="Beginner"
          description="Для небольшого исследования"
          icon={icon_lamp}
          colorClass="tariff-beginner-yellow"
          activeColorClass="tariff-beginner-yellow-active"
          isActive={userTariff === 'beginner'}
          isLoggedIn={isLoggedIn}
          textColorClass="black"
          price="799 ₽"
          oldPrice="1200 ₽"
          installmentText="или 150 ₽/мес. при рассрочке на 24 мес."
          features={["Безлимитная история запросов", "Безопасная сделка", "Поддержка 24/7"]}
      />
      <RateCard
          name="Pro"
          description="Для HR и фрилансеров"
          icon={icon_target}
          colorClass="tariff-pro-light-blue"
          activeColorClass="tariff-pro-light-blue-active"
          isActive={userTariff === 'pro'}
          isLoggedIn={isLoggedIn}
          textColorClass="black"
          price="1 299 ₽"
          oldPrice="2 600 ₽"
          installmentText="или 279 ₽/мес. при рассрочке на 24 мес."
          features={["Все пункты тарифа Beginner", "Экспорт истории", "Рекомендации по приоритетам"]}
      />
      <RateCard
          name="Business"
          description="Для корпоративных клиентов"
          icon={icon_laptop}
          colorClass="tariff-business-black"
          activeColorClass="tariff-business-black-active"
          isActive={userTariff === 'business'}
          isLoggedIn={isLoggedIn}
          textColorClass="white"
          price="2 379 ₽"
          oldPrice="3 700 ₽"
          installmentText=""
          features={["Все пункты тарифа Pro", "Безлимитное количество запросов", "Приоритетная поддержка"]}
      />
      </div>
    </div>
  )
}

export default Rates;