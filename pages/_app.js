import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect,useState } from 'react';
import {useRouter} from 'next/router'
import Layout from '../components/Layout';

function Loading (){
  const router = useRouter();
  const [loading,setloading] = useState(false);
  useEffect(() => {
    const handlestart = (url) => (url !==router.asPath) && setloading(true);
    const handlecomplete = (url) => (url === router.asPath) && setTimeout(() => {setloading(false)},200);
      router.events.on('routeChangeStart', handlestart)
      router.events.on('routeChangeComplete', handlecomplete)
      router.events.on('routeChangeError', handlecomplete)

      return () => {
        router.events.off('routeChangeStart', handlestart)
        router.events.off('routeChangeComplete', handlecomplete)
        router.events.off('routeChangeError', handlecomplete)
      }
  })
  return loading && (
    <div className='spinner-wrapper'>
      <div className='spinner'></div>
    </div>
  )
}
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
   <>
   <Loading />
    <Layout>
      
      <Component {...pageProps} />
    </Layout>
   </>
  )
}

export default MyApp