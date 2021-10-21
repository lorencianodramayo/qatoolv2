import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  {
    field: 'count',
    headerName: 'Creative count',
    flex: 1,
  },
  {
    field: 'modified',
    headerName: 'Date modified',
    flex: 1,
  }
];

const rows = [
  { id: 1, name: 'Snow', count: 35, modified: '11/11/11' },
  { id: 2, name: 'Lannister',  count: 42, modified: '11/11/11' },
  { id: 3, name: 'Lannister', count: 45, modified: '11/11/11' },
  { id: 4, name: 'Stark',  count: 16, modified: '11/11/11' },
  { id: 5, name: 'Targaryen',  count: 0, modified: '11/11/11' },
  { id: 6, name: 'Melisandre',  count: 150, modified: '11/11/11' },
  { id: 7, name: 'Clifford', count: 44, modified: '11/11/11' },
  { id: 8, name: 'Frances', count: 36, modified: '11/11/11' },
  { id: 9, name: 'Roxie', count: 65, modified: '11/11/11' },
];

export default function PreviewList() {
  return (
    <div style={{ height: "86vh", width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}