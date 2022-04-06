import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { BackButton } from '../../components/BackButton';
import {useTheme} from 'styled-components'

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';

export function Schedulling(){
  const theme = useTheme();
  const navigation = useNavigation<any>();
  return (
    <Container>
      <Header>
        <StatusBar style='light' translucent/>
        <BackButton color={theme.colors.shape} onPress={() => navigation.goBack()}/>
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={() => navigation.navigate({name: 'SchedullingDetails'})}/>
      </Footer>

    </Container>
  );
}