# Simple reusable table

Simple searchable & reusable table component created with React & react-table

<img width="1134" alt="Screenshot 2023-09-22 at 18 15 16" src="https://github.com/obayomi96/rc-simple-table/assets/43539944/69e5ba11-958d-45d1-9a3d-e44bfc3b0ea7">

## Installation

`npm install rc-simple-table`

or

`yarn add rc-simple-table`

### `IMPORTANT!:`

Import the css style, either by adding it to the js file

`import 'rc-simple-table/dist/styles.css'`

or to your css file

`@import "rc-simple-table/dist/styles.css";`

## Usage

- Import { ReusableTable } from "rc-simple-table"

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

### Available Props

```
  searchFieldPlaceholder?: string;
  tableColumns: any[];
  tableData: any[];
  onClick: (arg: any) => void;
  pageSizeCount?: number;
  showTitleHideSearch?: boolean;
  title?: string;
  simpleTableContainerClassName?: string;
  simpleShadowTableClassName?: string;
  simpleTableTopclassName?: string;
  simpleSearchDivClassName?: string;
  simpleSearchFieldClassName?: string;
  simpleTableTitleClassName?: string;
  simpleTableTheadThClassName?: string;
  simpleTableTbodyTrClassName?: string;
  simpleTablePageContainerClassName?: string;
  simpleTablePagBtnClassName?: string;
  simpleTablePageSpan1ClassName?: string;
  simpleTablePageSpan2ClassName?: string;
```

- Use the props classes to style specific elements & parts of the Table component as you like, or inspect classNames and target them to style as needed.

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
