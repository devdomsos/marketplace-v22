import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { getCssText } from '../stitches.config'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta tags */}
        <meta name="keywords" content="nft, ethereum, polygon, marketplace, openSea, 0xygen" />
        <meta name="keywords" content="Nft, Ethereum, Polygon, Marketplace, OpenSea, 0xygen" />

        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/svg"
          href="/favicon.png"
        />

        {/* Reservoir meta tags */}
        <meta property="oxygen:title" content="0xygen Market" />
        <meta property="oxygen:icon" content="/favicon.png" />
        <meta
          property="oxygen:token-url-mainnet"
          content="/collection/ethereum/${contract}/${tokenId}"
        />
        <meta
          property="oxygen:token-url-goerli"
          content="/collection/goerli/${contract}/${tokenId}"
        />
        <meta
          property="oxygen:token-url-polygon"
          content="/collection/polygon/${contract}/${tokenId}"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
