import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin: 10px 0 5px;

  &:hover {
    input {
      background-color: rgba(34, 34, 34, 0.05);
    }

    svg {
      display: block;
    }
  }

  svg {
    ${sizeMixin('25px', '20px')};
    display: none;
    position: absolute;
    right: 0;
    top: 5px;
    color: grey;
    cursor: pointer;
  }
`;

const CheckboxInput = styled.input`
  ${sizeMixin('20px', '20px')};
  position: absolute;
  top: 5px;
  cursor: pointer;
  margin-left: 0;
`;

const Input = styled.input`
  ${sizeMixin('100%', '32px')};
  display: flex;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;
  padding: 0 25px;
  color: #222222;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
    background-color: rgba(34, 34, 34, 0.05);
    cursor: text;
  }

  &:active {
    cursor: grab;
  }
`;

const Image = styled.img`
  ${sizeMixin('100%', '164px')};
  background-size: 100%;
  border-radius: 8px 8px 0 0;
`;

export { InputContainer, CheckboxInput, Input, Image };
