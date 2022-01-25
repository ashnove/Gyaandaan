import React, {useState} from 'react';
import { Table, Pagination, Panel } from 'rsuite';
import TrendingTableData from '../../data/TrendingTableData';

function MentorTable() {
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

    const MentorTablePanelStyle={
      backgroundColor:'#ecf0f1', 
      margin: "auto",
      width: '80%'
    };
  
    return (
      <div style={{padding: "20px", height: "auto" }}>
        <Panel header="#Mentors - [Topic]" bordered bodyFill style={MentorTablePanelStyle}>
          <Table height={420} data={data} loading={loading}>
            <Table.Column width={200} align="center" fixed>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.Cell dataKey="id" />
            </Table.Column>
    
            <Table.Column width={600} fixed>
              <Table.HeaderCell>Topic</Table.HeaderCell>
              <Table.Cell dataKey="firstName" />
            </Table.Column>
    
            <Table.Column width={200}>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.Cell dataKey="lastName" />
            </Table.Column>
    
            <Table.Column width={200}>
              <Table.HeaderCell>Mentors Online</Table.HeaderCell>
              <Table.Cell dataKey="city" />
            </Table.Column>
            <Table.Column width={200} flexGrow={1}>
              <Table.HeaderCell>View Mentor Button</Table.HeaderCell>
              <Table.Cell dataKey="companyName" />
            </Table.Column>
          </Table>
          {/* <div style={{ padding: 20 }} className='text-white'>
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
              limitOptions={[1, 2]}
              limit={limit}
              activePage={page}
              onChangePage={setPage}
              onChangeLimit={handleChangeLimit}
            />
          </div> */}
        </Panel>
      </div>
    );
  };
  
export default MentorTable;