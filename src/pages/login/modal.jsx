import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { BiX } from "react-icons/bi";
import { IoIosHelpCircle } from "react-icons/io";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #ffffffc3;
  top: 0;
  display: flex;
`;

const Container = styled.div`
  margin: auto;
  max-width: 420px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 5px #a5a5a599;

  input {
    padding: 10px;
    font-size: 0.85rem;
    background-color: #f5f6f7;
  }
`;

const TopSide = styled.div`
  padding: 15px;
  border-bottom: 1px solid #d4d4d4;
  position: relative;
  h3 {
    font-size: 1.8rem;
  }
  p {
    font-size: 0.9rem;
    color: #949494;
  }
  svg {
    position: absolute;
    font-size: 35px;
    top: 15px;
    right: 15px;
    color: #707070;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-bottom: 15px;
`;

const NameArea = styled.div`
  display: flex;
  gap: 12px;
`;

const BottomSide = styled.div`
  padding: 15px 15px 27px;
  button {
    display: block;
    background-color: #00a400;
    font-size: 0.98rem;
    width: 50%;
    padding: 8.5px 8.5px 7px;
  }

  p {
    font-size: 0.75rem;
    color: #6d6d6d;
    margin-bottom: 25px;
  }
`;

const GenreContainer = styled.div`
  padding: 10px 5px;
  border: 1px solid #d1d0d0;
  border-radius: 5px;
  font-size: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  label {
    margin-right: 8px;
  }
`;

const TermsText = styled.p`
  font-size: 0.6rem !important;
`;

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px;
  margin-bottom: 10px;
  select {
    padding: 10px 5px;
    border: 1px solid #d1d0d0;
    border-radius: 5px;
    font-size: 0.88rem;
  }
`;

const TopicContainer = styled.div`
  display: flex;
  p {
    margin: auto 0;
    font-size: 0.67rem !important;
  }
  svg {
    color: #808080;
    font-size: 17px;
  }
`;

export default function Modal({ setModal }) {
  // Pegar dias
  const days = ["Dia"];
  let indexDays = 1;
  while (indexDays <= 31) {
    days.push(indexDays);
    indexDays++;
  }

  const newArrDays = days.map((el) => (
    <option key={el} value={el}>
      {el}
    </option>
  ));

  // Pegar os meses

  const months = [
    "Mês",
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const newArrMonths = months.map((el) => (
    <option key={el} value={el}>
      {el}
    </option>
  ));

  // Pegar os anos

  const years = [];
  const currentYear = new Date().getFullYear();
  let yearsInterval = currentYear - 120;

  while (yearsInterval <= currentYear) {
    yearsInterval === currentYear
      ? years.push("Ano")
      : years.push(yearsInterval);
    yearsInterval++;
  }

  const newArrYears = years.map((el) => (
    <option key={el} value={el}>
      {el}
    </option>
  ));

  return (
    <Wrapper>
      <Container>
        <TopSide>
          <h3>Cadastre-se</h3>
          <p>É rápido e fácil.</p>
          <BiX
            onClick={() => {
              setModal(false);
            }}
          />
        </TopSide>
        <BottomSide>
          <InfoContainer>
            <NameArea>
              <Input placeholder="Nome" />
              <Input placeholder="Sobrenome" />
            </NameArea>
            <Input placeholder="Celular ou email" />
            <Input placeholder="Nova senha" />
          </InfoContainer>

          <TopicContainer>
            <p>Data de nascimento</p>
            <IoIosHelpCircle />
          </TopicContainer>

          <DataContainer>
            <select name="birthday" id="birthday">
              {newArrDays}
            </select>
            <select name="birthmonth" id="birthmonth">
              {newArrMonths}
            </select>
            <select name="birthyear" id="birthyear">
              {newArrYears.reverse()}
            </select>
          </DataContainer>

          <TopicContainer>
            <p>Gênero</p>
            <IoIosHelpCircle />
          </TopicContainer>

          <DataContainer>
            <GenreContainer>
              <label htmlFor="man">Feminino</label>
              <input type="radio" name="genre" id="man" />
            </GenreContainer>
            <GenreContainer>
              <label htmlFor="woman">Masculino</label>
              <input type="radio" name="genre" id="woman" />
            </GenreContainer>
            <GenreContainer>
              <label htmlFor="other">Personalizado</label>
              <input type="radio" name="genre" id="other" />
            </GenreContainer>
          </DataContainer>
          <TermsText>
            Ao clicar em Cadastre-se, você concorda com nossos Termos, Política
            de Dados e Política de Cookies. Você poderá receber notificações por
            SMS e cancelar isso quando quiser.
          </TermsText>
          <Button>Cadastre-se</Button>
        </BottomSide>
      </Container>
    </Wrapper>
  );
}
