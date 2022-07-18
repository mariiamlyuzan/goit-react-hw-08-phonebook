import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
const Title = styled.p`
  font-weight: 200px;
  text-align: center;
  color: #ff6b08;
  font-weight: 100px;
  font-size: 40px;
`;

export default function HomeView() {
  const { t } = useTranslation(['common']);
  return <Title>{t('Please register or log in !')}</Title>;
}
