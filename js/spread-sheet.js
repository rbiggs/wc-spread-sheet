import {LitElement, html} from 'https://unpkg.com/lit-element?module'
import {spreadSheetStyles} from './spread-sheet-styles'

const fruitData = [
  {
    product: 'Apple',
    price: 1.50,
    quantity: 5
  },
  {
    product: 'Orange',
    price: 1.00,
    quantity: 7
  },
  {
    product: 'Banana',
    price: .90,
    quantity: 3
  },
  {
    product: 'Peach',
    price: 1.10,
    quantity: 0
  }
]

export class WCSpreadSheet extends LitElement {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      items: fruitData
    }
    this.product = ''
    this.price = 0
    this.quantity = 0
  }
  static get styles() {
    return [spreadSheetStyles()]
  }
  render() {
    return html`
      <ul class='list--spreadsheet'>
        <li class='list--spreadsheet__item'>
          <table id='spreadsheet'>
            <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
            ${
              this.state.items.map((row, idx) => html`
                <tr>
                  <td>${row.product}</td>
                  <td>
                    <input @input=${this.updateItemPrice} class='price' data-index=${idx} type='number' min='0' value=${row.price.toFixed(2)} />
                  </td>
                  <td>
                    <input @input=${this.updateItemQuantity} class='quantity' data-index=${idx} type='number' min='0' value=${row.quantity} />
                  </td>
                  <td>
                    <span class='total'>$${(row.price * row.quantity).toFixed(2)}</span>
                  </td>
                  <td>
                    <button @click=${e => {this.deleteItem(row.product)}} class='list-item__button--delete'>X</button>
                  </td>
                </tr>
              `)
            }
            <tfoot>
              <tr>
                <td colspan='3'>Sum:</td>
                <td colspan='2'>
                  <span class='total'>${this.sumUp().toFixed(2)}</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </li>
        <li class='list--spreadsheet__item'>
          <div id='newRowForm'>
            <p>
              <label for="product">Product: </label>
              <input .value=${this.state.inputValue} placeholder='product name' @input=${e => this.setProduct(e.target.value)} name='product' id='product' type="text" tabindex='1' />
            </p>
            <p>
              <label for="price">Price: </label>
              <input placeholder='0.00' @input=${e => {this.setPrice(e.target.value)}} name='price' id='price' type="text" tabindex='2' />
            </p>
            <p>
              <label for="quantity">Quantity: </label>
              <input placeholder='0.00' @input=${e => {this.setQuantity(e.target.value)}} name='quantity' id='quantity' type="text" tabindex='3' data-index={idx)} />
            </p>
            <p>
              <button @click=${() => {this.addItem()}}} id='addRow'>Add Row</button>
            </p>
          </div>
        </li>
      </ul>
    `
  }
  updateItemPrice(e) {
    this.state.items[e.target.dataset.index].price = parseInt(e.target.value)
    this.update()
  }
  updateItemQuantity(e) {
    this.state.items[e.target.dataset.index].quantity = parseInt(e.target.value)
    this.update()
  }
  sumUp() {
    let total = 0
    this.state.items.forEach((row) => {
      total += row.price * row.quantity
    })
    return total
  }
  setProduct(value) {
    this.product = value
  }
  setPrice(value) {
    this.price = value
  }
  setQuantity(value) {
    this.quantity = value
  }
  addItem() {
    if (!this.product) return
    this.state.items.push({
      product: this.product,
      price: parseInt(this.price) || 0,
      quantity: parseInt(this.quantity) || 0
    })
    this.product = ''
    this.price = 0
    this.quantity = 0
    this.state.inputValue = ''
    this.update()
  }
  deleteItem(product){
    this.state.items = this.state.items.filter(item => item.product != product)
    this.update()
  }
}

customElements.define('wc-spread-sheet', WCSpreadSheet)
