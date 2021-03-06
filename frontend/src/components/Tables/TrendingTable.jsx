import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Pagination, Button, Panel } from 'rsuite';
import TrendingTableData from '../../data/TrendingTableData';

function TrendingTable() {
  const history = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const handleChangeLimit = dataKey => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = TrendingTableData.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  const ButtonCellStyle = {
    textAlign: "center",
    height: 50
  }

  const ButtonCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell {...props} style={{ padding: 5 }}>
      <div style={ButtonCellStyle}>
        <Button onClick={() => history('/mentors')} style={{color: "white", backgroundColor: "#2980b9"}} >View Mentors</Button>
      </div>
    </Table.Cell>
  );

  const trendingTablePanelStyle={
    backgroundColor:'#ecf0f1', 
    margin: "auto",
    width: '80%',
    // height: '600px'
  };

  return (
    <div style={{ padding: "20px"}}>
      <Panel header="#Trending Topics" bordered bodyFill style={trendingTablePanelStyle}>
        <Table height={350} data={data} loading={loading}>
          <Table.Column width={200} align="center" flexGrow={1} >
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.Cell dataKey="id" />
          </Table.Column>

          <Table.Column width={400} flexGrow={1}>
            <Table.HeaderCell>Topic</Table.HeaderCell>
            <Table.Cell dataKey="topic" />
          </Table.Column>

          <Table.Column width={200} flexGrow={1}>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.Cell dataKey="category" />
          </Table.Column>

          <Table.Column width={100} flexGrow={1}>
            <Table.HeaderCell>Mentors Online</Table.HeaderCell>
            <Table.Cell dataKey="numberOfMentorsOnline" />
          </Table.Column>
          <Table.Column width={200} flexGrow={1}>
            <Table.HeaderCell></Table.HeaderCell>
            <ButtonCell />
          </Table.Column>
        </Table>
        <div style={{ padding: 10 }}>
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            maxButtons={5}
            size="xs"
            layout={['total', '-', 'limit', '|', 'pager', 'skip']}
            total={TrendingTableData.length}
            limitOptions={[10, 20]}
            limit={limit}
            activePage={page}
            onChangePage={setPage}
            onChangeLimit={handleChangeLimit}
          />
        </div>
      </Panel>
    </div>
  );
};

export default TrendingTable;