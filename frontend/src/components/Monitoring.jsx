import React from 'react'
import { Table } from './shared/Table'
import ButtonPagination from './shared/ButtonPagination'

export default function Monitoring() {
  return (
    <>
    <Table />
    <div className='flex justify-end'><ButtonPagination/></div>
    
    </>
    
  )
}
