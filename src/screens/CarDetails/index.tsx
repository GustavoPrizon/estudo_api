import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {getAccessoryIcons} from '../../utils/getAccessoryIcons';

import {Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from './styles';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { CarDTO } from '../../dtos/CarDTO';

interface Params {
  car: CarDTO,
}

export function CarDetails(){
  const navigation = useNavigation<any>();
  const route = useRoute();
  const {car} = route.params as Params;
  return (
    <Container>
      <StatusBar style='dark' translucent />
      <Header>
        <BackButton onPress={() => navigation.goBack()}/>
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos}/>
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(accessory =>(
              <Accessory 
                key={accessory.type} 
                name={accessory.name} 
                icon={getAccessoryIcons(accessory.type)}
              />
            ))
          }
        </Accessories>

        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button title='Escolher perriodo do aluguel' onPress={() => navigation.navigate('Schedulling', {car})}/>
      </Footer>
    </Container>
  );
}