import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
    return (
        <div>
<Table striped bordered hover variant="dark">
    <tr>
      <th>상품명</th>
      <th>수량</th>
      <th>변경</th>
    </tr>
    {
        props.state.map((a,i)=>{
            return (
                <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td><button onClick={()=>{props.dispatch({type: '수량증가'})}}>+</button>
                <button onClick={()=>{props.dispatch({type: '수량감소'})}}>-</button>
                </td>
              </tr>
            )
        })
    }
  </Table>
</div>
    )
}

// redux store의 데이터를 가져와서 props로 변환
function stateProps(state) {
    return {
        state: state
    }
}

export default connect(stateProps)(Cart)