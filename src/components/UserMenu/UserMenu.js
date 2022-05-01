import { authSelectors, authOperations } from '../../redux/auth';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
  height: 35px;
  width: 80px;
  border-radius: 5px;
  border: 1px solid #ff6b08;
  background-color: transparent;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    color: white;
    background-color: #ff6b08;
    border: 0px;
  }
`;

const Title = styled.span`
  font-size: 20px;
  color: #ff6b08;
  margin-right: 10px;
`;

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <Title>Hello,{name} </Title>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </Button>
    </div>
  );
}
