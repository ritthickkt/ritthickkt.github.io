import Dock from './Dock.jsx'

import sourcercn from '/src/assets/products/sourcercn.svg'
import vouchpay from '/src/assets/products/vouchpay.png'
import scoutly from '/src/assets/products/scoutly.svg'
import mira from '/src/assets/products/mira.svg'

/*
 * Live products.
 *
 * A finished app icon — artwork that already carries its own tile and
 * background, like VouchPay's and Scoutly's — takes `appIcon: true` so it fills
 * the dock slot edge to edge. The remaining two are placeholder monograms on the
 * glass tile: `tone: 'light'` flattens white artwork for the light theme,
 * 'dark' does the reverse. Add `link` to make a tile clickable.
 */
const products = [
  { logo: sourcercn, name: 'SourcerCN', tone: 'light' },
  { logo: vouchpay, name: 'VouchPay', appIcon: true },
  { logo: scoutly, name: 'Scoutly', appIcon: true },
  { logo: mira, name: 'Mira', tone: 'light' },
]

function Products() {
  return <Dock items={products} size="lg" columns={2} ariaLabel="Products in market" />
}

export default Products
