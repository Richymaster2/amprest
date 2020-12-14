import React from 'react';
import { Table, Button} from 'reactstrap';

const Tasks = (props) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Description</th>
          <th>Completed?</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>some description</td>
          <td>False</td>
          <td>
              <Button color="success" size="sm" className="mr-2" >Edit</Button>
              <Button color="danger" size="sm" className="mr-2" >Delete</Button>
          </td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default Tasks;