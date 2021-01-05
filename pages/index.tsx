//import { GetStaticProps } from 'next'

import 'bulma/css/bulma.css';
import Header from '../components/header';

// load props for this page
/*export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {}
  }
}*/

const Main = (): JSX.Element => {
  var headerProps={
    brawn: 3,
    agility: 3,
    intellect: 3,
    cunning: 3,
    willpower: 3,
    presence: 3
  }
  return (
    <Header {...headerProps}></Header>
  )
};


export default Main;