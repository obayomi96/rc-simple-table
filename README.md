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

- import { useMemo } from "react"; // optional
- Import Column, { ReusableTable } from "rc-simple-table" 
- import 'rc-simple-table/dist/styles.css' // required

// The `Column` type is needed only for Typescript projects in place of type `any`
```

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

### Sample columns and data for test

```
interface TableColumnType {
  id: string;
  date: Date;
  name: string;
  total: string;
}

const TEST_COLUMNS = useMemo<Column<TableColumnType>[]>(
  () => [
    {
      Header: "ID",
      accessor: "id",
      // You can use any type here or specify your type field types
      Cell: ({ cell: { value } }) => {
        return <React.Fragment>{value}</React.Fragment>;
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
        return <React.Fragment>{value}</React.Fragment>;
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
    "name": "John Doe",
    "total": "$300"
  },
  {
    "id": 2,
    "date": "09/06/2022",
    "name": "Leslie Winkle",
    "total": "$300"
  },
  {
    "id": 3,
    "date": "09/06/2022",
    "name": "Sam Smith",
    "total": "$1400"
  },
  {
    "id": 4,
    "date": "09/06/2022",
    "name": "David Mark",
    "total": "$120"
  },
  {
    "id": 5,
    "date": "09/06/2022",
    "name": "Mary Trent",
    "total": "$200"
  }
];
```

### Available Props

```
  searchFieldPlaceholder?: string; 
  // Your seach field placeholder
  tableColumns: any[];
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
- The `useMemo` hook is not compulsory, it is used in this example as an optimized way of memoizing (caching) our table columns to prevent component rerendering - YOU CAN DO WITHOUT IT

- The `Column` type imported from rc-simple-table can be used in place of `any` type if needed.

- Use the `props` `classNames` to style specific elements & parts of the Table component as you like, or inspect classNames and target them to style as needed.
