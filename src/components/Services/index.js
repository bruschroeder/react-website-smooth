import React from 'react';
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Nossos serviços</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Redução de custos</ServicesH2>
            <ServicesP>Ajudamos a reduzir suas taxas e aumentar sua receita total.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Escritórios virtuais</ServicesH2>
            <ServicesP>Você pode acessar a nossa plataforma em qualquer lugar do mundo.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Benefícios Premium</ServicesH2>
            <ServicesP>Obtenha o nosso cartão especial de membro e receba 5% de cashback.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services