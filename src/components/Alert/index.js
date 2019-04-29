import styled from 'styled-components';

const Alert = styled.div`
  box-sizing: border-box;
  border-radius: ${theme('tokens.borders.borderRadius')};

  background-color: rgba(228, 126, 26, 0.12);
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  p {
    margin: 0;
    color: #e47e1a;
    font-weight: 600;
    font-size: 1rem;
  }
`;

const Warning = styled(Alert)`
  background-color: rgba(228, 126, 26, 0.12);
  p {
    color: #e47e1a;
  }
`;

const msgError = styled(Alert)`
  background-color: rgba(176, 0, 32, 0.12);
  p {
    color: #b00020;
  }
`;

const Success = styled(Alert)`
  background-color: rgba(90, 153, 48, 0.12);
  p {
    color: #5a9930;
  }
`;

Alert.Warning = Warning;
Alert.Error = msgError;
Alert.Success = Success;

export default Alert;
