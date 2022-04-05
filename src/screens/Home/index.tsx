import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {RFValue} from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';

import {Container, Header, HeaderContent, TotalCars} from './styles';
import { Car } from '../../components/car';

export function Home(){
  const CarData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: "ao dia",
      price: 120,
    },
    thumbnail: 
    'https://img1.gratispng.com/20180928/pka/kisspng-2-18-audi-s5-3-t-premium-plus-coupe-car-dealershi-audi-s5-2-18-view-specs-prices-photos-more-5bae7df7d53507.4261876315381621678733.jpg',
  }

  return (
    <Container>
      <StatusBar style='light' translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)}/>
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      <Car data={CarData}/>
    </Container>
  );
}