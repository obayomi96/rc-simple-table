# Simple reusable table

Simple reusable table component created with React.

- Comes with search and pagination features - just add your table columns and data!

<img width="1134" alt="Screenshot 2023-09-22 at 18 15 16" src="https://github.com/obayomi96/rc-simple-table/assets/43539944/69e5ba11-958d-45d1-9a3d-e44bfc3b0ea7">

## Installation

`npm install rc-simple-table`

or

`yarn add rc-simple-table`

## Usage

### `IMPORTANT!`

Import the css styles to your JS file

`import 'rc-simple-table/dist/styles.css'`

or add to your CSS file

`@import "rc-simple-table/dist/styles.css";`

### Example use case (Typescript)

```
Import Column, { ReusableTable } from "rc-simple-table"
import 'rc-simple-table/dist/styles.css' // required

 <ReusableTable
  tableColumns={TEST_COLUMNS}
  tableData={TEST_DATA}
  onClick={data => {
   // ALLOWS FOR CLICK FUNCTIONALITY - IT RETURNS THE ROW DATA
  }}
  pageSizeCount={10}
  searchFieldPlaceholder="Search..."
  ...props...
/>
```

### Sample Columns and data for test

## COLUMN

You only need to import `Column` for Typescript projects.

- `column` is used to mirrow your table head, describe how each table column data would be transformed and returned, it connects the table column to it's data using the `accessor` field which MUST collerate with the `key` for that field data, table columns should have the following properties; `Header`, `accessor` which are required, and an optional `Cell` field.

* `Header: string;` - This is a string for a table head in a column.
* `accessor: string;` - This looks for the provided string that matches any field in your data array and pull the value for that field.
* `Cell?` is optional, it takes a callback function that returnes a `string`|`React.Component`|`React.JSX`. It can can be used to modify the output of the data for a column; the cell gives us two parameters, `value` and `row`. value returns the data for each column, row returns data for all columns by accessing it through the `row.original` field
  E.g for conditional rendering or custom component rendering like an action button. See examples below.

## Column interface

```
interface ColumnType {
  Header: string;
  accessor: string;
  Cell: (args...) => <></>; // See examples below for args usage.
}
```

### Examples (TS)

```
- import { useMemo } from "react";
- Import Column, { ReusableTable } from "rc-simple-table";
- import 'rc-simple-table/dist/styles.css';

interface TableColumnType {
  id: string;
  date: Date;
  firstname: string;
  lastname: string;
  total: string;
}

const TEST_COLUMNS = useMemo<Column<TableColumnType>[]>(
  () => [
    {
      Header: "ID",
      accessor: "id",
      // You can use any type here or specify your type field types
      Cell: ({ cell: { value } }) => {
        return <div className"id-style">{value}</div>;
      }
    },
    {
      Header: "Date",
      accessor: "date",
      Cell: ({ cell: { value }, row }) => {
        return (
          <React.Fragment>
            {value ? format(new Date(value), "dd/MM/yyyy") : "N/A"}
          </React.Fragment>
        );
      }
    },
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ cell: { value }, row }) => {
        return <div className="name-style">{`${row.original.firstname} ${row.original.lastname}`}</div>;
      }
    },
    {
      Header: "Total",
      accessor: "total"
    }
  ],
  []
);

const TEST_DATA = [
  {
    "id": 1,
    "date": "09/06/2022",
    "firstname": "John",
    "lastname": "Doe",
    "total": "$300"
  },
  {
    "id": 2,
    "date": "09/06/2022",
    "firstname": "Leslie",
    "lastname": "Winkle",
    "total": "$300"
  },
  {
    "id": 3,
    "date": "09/06/2022",
    "firstname": "Sam",
    "lastname": "Smith",
    "total": "$1400"
  },
  {
    "id": 4,
    "date": "09/06/2022",
    "firstname": "David",
    "lastname": "Mark",
    "total": "$120"
  },
  {
    "id": 5,
    "date": "09/06/2022",
    "firstname": "Mary",
    "lastname": "Trent",
    "total": "$200"
  }
];

 <ReusableTable
  tableColumns={TEST_COLUMNS}
  tableData={TEST_DATA}
  onClick={data => {
   // ALLOWS FOR CLICK FUNCTIONALITY - IT RETURNS THE ROW DATA
   <!-- setTableDataDetails(data); -->
   <!-- SetOpenDetailsModal(true); -->
  }}
  pageSizeCount={10}
  searchFieldPlaceholder="Search..."
/>

```

### Examples (JS)

```
- import { useMemo } from "react";
- Import { ReusableTable } from "rc-simple-table";
- import 'rc-simple-table/dist/styles.css';

const TEST_COLUMNS = useMemo(
  () => [
    {
      Header: "ID",
      accessor: "id",
      // You can use any type here or specify your type field types
      Cell: ({ cell: { value } }) => {
        return <div className"id-style">{value}</div>;
      }
    },
    {
      Header: "Date",
      accessor: "date",
      Cell: ({ cell: { value }, row }) => {
        return (
          <React.Fragment>
            {value ? format(new Date(value), "dd/MM/yyyy") : "N/A"}
          </React.Fragment>
        );
      }
    },
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ cell: { value }, row }) => {
        return <div className="name-style">{`${row.original.firstname} ${row.original.lastname}`}</div>;
      }
    },
    {
      Header: "Total",
      accessor: "total"
    }
  ],
  []
);

const TEST_DATA = [
  {
    "id": 1,
    "date": "09/06/2022",
    "firstname": "John",
    "lastname": "Doe",
    "total": "$300"
  },
  {
    "id": 2,
    "date": "09/06/2022",
    "firstname": "Leslie",
    "lastname": "Winkle",
    "total": "$300"
  },
  {
    "id": 3,
    "date": "09/06/2022",
    "firstname": "Sam",
    "lastname": "Smith",
    "total": "$1400"
  },
  {
    "id": 4,
    "date": "09/06/2022",
    "firstname": "David",
    "lastname": "Mark",
    "total": "$120"
  },
  {
    "id": 5,
    "date": "09/06/2022",
    "firstname": "Mary",
    "lastname": "Trent",
    "total": "$200"
  }
];

 <ReusableTable
  tableColumns={TEST_COLUMNS}
  tableData={TEST_DATA}
  onClick={data => {
   // ALLOWS FOR CLICK FUNCTIONALITY - IT RETURNS THE ROW DATA
   // Exmaples of actions you can take below
   <!-- setTableDataDetails(data); -->
   <!-- SetOpenDetailsModal(true); -->
  }}
  pageSizeCount={10}
  searchFieldPlaceholder="Search..."
/>

```

### Available Props

```
  searchFieldPlaceholder?: string;
  // Your seach field placeholder
  tableColumns: ColumnType[];
  // Your table columns
  tableData: any[];
  // Your table data
  onClick: (arg: any) => void;
  // Click functionality to be executed on each row click
  pageSizeCount?: number;
  // Page size count - default is 5
  showTitleHideSearch?: boolean;
  // Boolean to hide the search field
    title?: string;
  // Your table title text
  simpleTableContainerClassName?: string;
  // Styles the table container
  simpleShadowTableClassName?: string;
  // Styles the table shadow
  simpleTableTopclassName?: string;
  // Styles the table top container
  simpleSearchDivClassName?: string;
  // Styles the search container
  simpleSearchFieldClassName?: string;
  // Styles the table search field
  simpleTableTitleClassName?: string;
  // Styles the table title
  simpleTableTheadThClassName?: string;
  // Styles the table head
  simpleTableTbodyTrClassName?: string;
  // Styles the table body row
  simpleTablePageContainerClassName?: string;
  // Styles the pagination container
    simpleTablePagBtnClassName?: string;
  // Styles the pagination button
    simpleTablePageSpan1ClassName?: string;
  // Styles the left pagination count
  simpleTablePageSpan2ClassName?: string;
  // Styles the right pagination count
```

### Note:

- Copying & pasting the example code block into your component should work outright as a sample table component.

- The `useMemo` hook is not compulsory, it is used in this example as an optimized way of memoizing (caching) our table columns to prevent component rerendering - YOU CAN DO WITHOUT IT

- The `Column` type imported from rc-simple-table can be used in place of `any` type if needed.

- Use the props prefixed with `classNames` to style specific elements & parts of the Table component as you like, or inspect classNames and target them to style as needed.
