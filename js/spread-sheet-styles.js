import {css} from 'https://unpkg.com/lit-element?module'

export function spreadSheetStyles() {
  return css`
    button {
      transition: all .25s ease-out;
      border: solid 2px #ccc;
    }
    .list--spreadsheet {
      display: inline-block;
      padding: 10px;
      border: solid 1px #ccc;
      list-style: none;
    }
    .list--spreadsheet__item {
      padding: 5px;
      border-bottom: solid 1px #ccc;
    }
    .list--spreadsheet__item:last-of-type {
      border: none;
    }
    .list-item__button--delete {
      background-color: red;
      color: #fff;
      border-color: red;
      transition: all .25s ease-out;
      cursor: pointer;
    }
    .list-item__button--delete:hover {
      background-color: #fff;
      color: red;
    }
    .list--spreadsheet__item label {
      display: inline-block;
      width: 90px;
    }
    #spreadsheet {
      border-collapse: collapse;
    }
    #spreadsheet td {
      border: 1px solid #999;
      padding: 0;
      text-align: right;
      padding: 0px 10px;
    }
    #spreadsheet td input {
      border: none !important;
      width: 90px;
      font-size: 16px !important;
      padding: 10px;
      margin-right: 5px;
    }
    #spreadsheet span.total {
      display: block;
      padding-right: 10px;
      text-align: left;
    }
    #sum-of-rows {
      text-align: left;
    }
    #spreadsheet th {
      width: 100px;
      text-align: center;
      background-color: #333;
      border: solid 1px #333;
      color: #fff;
    }
    #spreadsheet th:last-of-type {
      width: 20px;
    }
    #spreadsheet td:first-child, tfoot td {
      background-color: lightblue;
      color: #666;
      padding: 1px 3px;
      font-weight: bold;
      text-align: right;
    }
    #spreadsheet input:hover { 
      background-color: #eee
    }
    #spreadsheet input:focus { 
      background-color: #ccf;
    }
    #spreadsheet input:not(:focus) {
        text-align: right;
    }
    #newRowForm {
      flex: none;
      width: 220px;
    }
    #newRowForm label {
      display: inline-block;
      width: 80px;
      text-align: right;
      margin-right: 10px;
    }
    #newRowForm  input {
      width: 100px;
    }
    #addRow:hover {
      cursor: pointer;
      background-color: #333;
      color: #fff
    }
    .list-item__button--delete {
      background-color: red;
      color: #fff !important;
    }
    .list-item__button--delete:hover {
      background-color: #fff;
      color: red !important;
    }
    #hidden-input {
      height: 0px !important;
      width: 0px !important;
      padding: 0px !important;
      border: solid 1px transparent !important;
    }
  `
}
