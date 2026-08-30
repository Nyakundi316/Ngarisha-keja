import Script from "next/script";

export default function Analytics({ measurementId }) {
  if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return null;

  const id = JSON.stringify(measurementId);
  return (
    <>
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',${id},{send_page_view:true,anonymize_ip:true});`}
      </Script>
      <Script
        id="google-analytics-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
      />
    </>
  );
}
