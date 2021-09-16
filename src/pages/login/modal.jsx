import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { BiX } from "react-icons/bi";

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
  margin-bottom: 5px;
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

const BottomSide = styled.div`
  padding: 15px;
  display: grid;
  grid-gap: 10px;
  button {
    background-color: #00a400;
    font-size: 0.98rem;
    width: 50%;
    padding: 8.5px 8.5px 7px;
  }

  p {
    font-size: 0.75rem;
    color: #6d6d6d;
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

  select {
    padding: 10px 5px;
    border: 1px solid #d1d0d0;
    border-radius: 5px;
    font-size: 0.88rem;
  }
`;

const NameArea = styled.div`
  display: flex;
  gap: 12px;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`;

export default function Modal({ setModal }) {
  const days = [];
  let index = 1;
  while (index <= 31) {
    days.push(index);
    index++;
  }

  const newArr = days.map((el) => <option key={el}>{el}</option>);

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

          <p>Data de nascimento</p>

          <DataContainer>
            <select name="" id="">
              {newArr}
            </select>
            <select name="" id=""></select>
            <select name="" id=""></select>
          </DataContainer>

          <p>Gênero</p>

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
