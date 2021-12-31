import React from "react";

export const TableComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <table className="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@domain.com</td>
            <td>
              <img src="https://i.pravatar.cc/50?img=1" alt="thumb" />
            </td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Doe</td>
            <td>jane@domain.com</td>
            <td>
              <img src="https://i.pravatar.cc/50?img=2" alt="thumb" />
            </td>
          </tr>
          <tr>
            <td>Fu</td>
            <td>Bar</td>
            <td>fu@domain.com</td>
            <td>
              <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});

export default TableComponent;
