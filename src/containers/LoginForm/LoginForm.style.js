import styled from 'styled-components';
import Colors from '../../constants/colors';
import sizeMixin from '../../utils/mixins';

const LoginFormContainer = styled.div`
  ${sizeMixin('inherit', 'inherit')}
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  ${sizeMixin('440px', '504px')}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  -webkit-box-shadow: 1px -1px 5px 2px rgba(212, 201, 212, 1);
  -moz-box-shadow: 1px -1px 5px 2px rgba(212, 201, 212, 1);
  box-shadow: 1px -1px 5px 2px rgba(212, 201, 212, 1);

  @media (max-width: 750px) {
    box-shadow: none;
  }
`;

const LoginLogo = styled.img`
  margin-bottom: 60px;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

const EyeIcon = styled.div`
  position: absolute;
  top: 13px;
  right: 10px;
  color: ${Colors.accent};
  cursor: pointer;

  svg {
    ${sizeMixin('20px', '20px')};
  }
`;

const Input = styled.input`
  ${sizeMixin('292px', '40px')}
  position: relative;
  padding-left: 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  border: 1px solid ${Colors.accent};
  letter-spacing: 1px;
  caret-color: ${Colors.primary};

  + span {
    position: absolute;
    top: ${props => (props.value.length > 0 ? '-10px' : '13px')};
    left: 25px;
    color: ${props => (props.value.length > 0 ? '#000' : `${Colors.accent}`)};
    letter-spacing: ${props => (props.value.length > 0 ? 0 : '1px')};
    transition: 0.5s;
    background-color: ${props => (props.value.length > 0 ? '#fff' : null)};
  }

  &:focus {
    outline-width: 4px;
    outline-offset: -2px;
  }

  &:focus + span {
    top: -10px;
    color: #000000;
    background-color: #ffffff;
    transition: 0.5s;
    letter-spacing: 0;
  }
`;

const CheckboxInput = styled.input`
  ${sizeMixin('24px', '24px')}
`;

const OptionsContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${Colors.accent};
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  input {
    ${sizeMixin('20px', '20px')}
  }

  span {
    color: ${Colors.primary};
    font-weight: 500;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
  }
`;

const Button = styled.button`
  ${sizeMixin('312px', '40px')}
  margin-top: 50px;
  color: #ffffff;
  background-color: ${Colors.primary};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`;

export {
  Form,
  LoginFormContainer,
  LoginLogo,
  EyeIcon,
  Input,
  InputContainer,
  CheckboxInput,
  OptionsContainer,
  Button
};
