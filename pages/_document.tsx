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
        <meta name="keywords" content="nft, ethereum, polygon, marketplace, openSea, prismat" />
        <meta name="keywords" content="Nft, Ethereum, Polygon, Marketplace, OpenSea, prismat" />

        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/svg"
          href="/favicon.png"
        />

        {/* Reservoir meta tags */}
        <meta property="prismat:title" content="Prismat Market" />
        <meta property="prismat:icon" content="/favicon.png" />
        <meta
          property="prismat:token-url-mainnet"
          content="/ethereum/asset/${contract}:${tokenId}"
        />
        <meta
          property="prismat:token-url-goerli"
          content="/goerli/asset/${contract}:${tokenId}"
        />
          <meta
              property="prismat:token-url-polygon"
              content="/polygon/asset/${contract}:${tokenId}"
          />
          <meta
              property="prismat:token-url-arbitrum"
              content="/arbitrum/asset/${contract}:${tokenId}"
          />
          <meta
              property="prismat:token-url-optimism"
              content="/optimism/asset/${contract}:${tokenId}"
          />
          <meta
              property="prismat:token-url-zora"
              content="/zora/asset/${contract}:${tokenId}"
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
