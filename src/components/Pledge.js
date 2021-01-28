import styled from 'styled-components';
import Money from '../components/Money';
import { THEME_COLOR_3 } from '../config';
import Card from './Card';

const PledgeWrapper = styled(Card)`
  min-width: 17em;
  max-width: 17em;
  height: 100%;
  margin-right: 2em;

  & h2 {
    color: ${THEME_COLOR_3};
  }

  & ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 0.3em;

    & li {
      margin: 0.6em 0;
    }
  }
`;

const Pledge = ({ username, perLapDonation, flatDonation }) => {
  return (
    <PledgeWrapper>
      <h2>{username}</h2>
      <ul>
        <li>
          <Money>
            Per Lap Donation: NT<span>{perLapDonation}</span>
          </Money>
        </li>
        <li>
          <Money>
            Flat Donation: NT<span>{flatDonation}</span>
          </Money>
        </li>
      </ul>
    </PledgeWrapper>
  );
};

export default Pledge;
