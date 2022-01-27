import React, {useState} from 'react';
import { Table, Pagination, Panel, Button } from 'rsuite';
import TrendingTableData from '../../data/TrendingTableData';

function MentorTable() {
    const [loading, setLoading] = React.useState(false);
    const [limit, setLimit] = React.useState(50);
    const [page, setPage] = React.useState(1);
  
    const handleChangeLimit = dataKey => {
      setPage(1);
      setLimit(dataKey);
    };
    const handleClick = () => {

    };
    const data = TrendingTableData.filter((v, i) => {
      const start = limit * (page - 1);
      const end = start + limit;
      return i >= start && i < end;
    });

    const MentorTablePanelStyle={
      backgroundColor:'#ecf0f1', 
      margin: "auto",
      width: '80%'
    };
    const ButtonCellStyle = {
      textAlign: "center",
      height: 50,
    }
    const ButtonCell = ({ rowData, dataKey, ...props }) => (
      <Table.Cell {...props} style={{ padding: 5 }}>
        <div style={ButtonCellStyle}>
          <Button onClick={handleClick} style={{color: "white", backgroundColor: "#c0392b"}}>Request Session</Button>
        </div>
      </Table.Cell>
    );
  
    return (
      <div style={{ padding: "20px"}}>
        <Panel header="#Trending Topics" bordered bodyFill style={MentorTablePanelStyle}>
          <Table height={670} data={data} loading={loading}>
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
  
            <Table.Column width={110} >
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
              limitOptions={[50, 100]}
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
  
export default MentorTable;