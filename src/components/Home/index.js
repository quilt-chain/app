import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render () {
    return (
      <section>
       <h2>Teachers</h2>
       <table className="u-full-width">
        <colgroup span="4"></colgroup>
        <thead>
          <tr>
            <th>Id</th>
            <th>Rating</th>
            <th>Subjects</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
       {
         Object.values(this.props.teachers)
         .map((teacher, id) => (<tr key={teacher.id}>
          <td><Link to={`/teachers/${teacher.id}`}>{teacher.id}</Link></td>
          <td>{teacher.rating}</td>
          <td>{teacher.subjects.join(', ')}</td>
          <td>{teacher.price} EDU</td>
         </tr>))
       }
       </tbody>
       </table>
      </section>
    );
  }

}

export default Home;
