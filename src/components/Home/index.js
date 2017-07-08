import React, { Component } from 'react';

class Home extends Component {

  render () {
    return (
      <section>
       <h2>Teachers</h2>
       <table>
        <colgroup span="4"></colgroup>
        <thead>
          <tr>
            <th>Id</th>
            <th>Subjects</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
       {
         Object.values(this.props.teachers)
         .map((teacher, id) => (<tr key={teacher.id}>
          <td><a href={`/teachers/${teacher.id}`}>{teacher.id}</a></td>
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
