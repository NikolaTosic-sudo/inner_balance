import Head from 'next/head';
import FacebookPixel from '../FacebookPixel';

const HeadComponent = ({ title, page }) => {
  return (
    <Head>
      <title>{title ?? 'Inner Balance'}</title>
      <meta
        name="description"
        content={
          page === 'bars'
            ? 'Doživite duboku relaksaciju i oslobodite se stresa uz Access Bars tretman! Resetujte um, oslobodite blokade i poboljšajte kvalitet života. Rezervišite svoj tretman već danas!'
            : page === 'belly'
              ? 'Oblikujte telo i oslobodite se napetosti uz Belly Revolution tehniku! Poboljšajte držanje, cirkulaciju i energiju kroz nežne, efikasne pokrete. Iskusite transformaciju – rezervišite tretman danas!'
              : page === 'contact'
                ? 'Kontaktirajte nas za više informacija ili rezervaciju tretmana! Tu smo da odgovorimo na vaša pitanja i pomognemo vam na putu ka boljem blagostanju. Javite se danas!'
                : 'Opustite um i telo uz Access Bars tretman i Belly Revolution tehniku! Otkrijte harmoniju, oslobodite stres i poboljšajte energiju uz holistički pristup vašem blagostanju. Rezervišite svoj tretman danas!'
        }
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/img/inner_balance_logo.png" />
      <FacebookPixel />

      <script
        dangerouslySetInnerHTML={{
          __html: `
                  !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1184405803101934');
        fbq('track', 'PageView');
          `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1184405803101934&ev=PageView&noscript=1"
        />
      </noscript>
    </Head>
  );
};

export default HeadComponent;
