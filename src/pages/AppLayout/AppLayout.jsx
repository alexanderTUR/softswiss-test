import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='app-main'>{children}</main>
      <Footer />
    </>
  );
};
