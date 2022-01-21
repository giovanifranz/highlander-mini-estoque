import { Container } from './styles'
import { useEffect, useState } from 'react'
import { getProductsFromDatabase } from '../../services/database'
import { useDashboard } from '../../hooks/useDashboard'

interface ProductsTable {
  products: Array<Products>
}

interface Products {
  id: number
  sku: string
  productName: string
  providerName: string
  value: number
  qtd: number
}

export function ProductsTable() {
  const [products, setProducts] = useState<Array<Products>>([])
  const { accountID, setUpdateTable, updateTable, setSummary } = useDashboard()

  useEffect(() => {
    ;(async () => {
      if (!updateTable) {
        if (typeof accountID === 'string') {
          const data = await getProductsFromDatabase(accountID)
          if (data === 'Products does not exists.') {
            setProducts(data)
          }
        } else {
          throw new Error('Account ID does not exist')
        }
      } else {
        setUpdateTable(false)
      }
    })()
  }, [accountID, updateTable, setUpdateTable])

  useEffect(() => {
    if (products !== undefined && products.length > 0) {
      const qtdProducts = products.reduce(
        (previousValue, currentValue) => previousValue + currentValue.qtd,
        0
      )
      const totalValueProducts = products.reduce(
        (previousValue, currentValue) => previousValue + currentValue.value,
        0
      )
      const ticketAverage = totalValueProducts / qtdProducts

      setSummary({
        qtdProducts,
        totalValueProducts,
        ticketAverage
      })
    }
  }, [products, setSummary])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Código do Produto</th>
            <th>Nome do Produto</th>
            <th>Nome do Fornecedor</th>
            <th>Valor do Produto</th>
            <th>Qtd</th>
          </tr>
        </thead>
        <tbody>
          {products !== undefined &&
            products.length > 0 &&
            products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.sku}</td>
                  <td>{product.productName}</td>
                  <td>{product.providerName}</td>
                  <td>{`R$${product.value.toFixed(2)}`}</td>
                  <td>{product.qtd}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </Container>
  )
}
