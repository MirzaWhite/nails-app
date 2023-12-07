import Document, {Head, Html, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"/>

                    <link rel="icon" href='https://cdn.deepsense.space/nails/assets/images/favicon.png' type="favicon/png" sizes="520*520"/>

                    {/*Google tag (gtag.js) */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QR9…"></script>
                    <script>
                        {
                            `  window.dataLayer = window.dataLayer || [];
                        function gtag(){window.dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-QR943Z69N0');
                            
                            `
                        }

                    </script>


                    {/*Google Tag Manager */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: ` (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KL5L8VJ');`,
                        }}
                    />
                    {/* End Google Tag Manager*/}
                </Head>
                <body>
                {/*Google Tag Manager (noscript)*/}
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K…"
                    height="0" width="0" style="display:none;visibility:hidden" ></iframe>`,
                    }}
                />
                {/* End for Google Tag Manager (noscript)*/}
                <Main/>
                <NextScript/>


                </body>
            </Html>
        );
    }
}
