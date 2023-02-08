import { userType, exampleType } from './props.types';
import userList from './userList';

function Person(props: userType) {
  return (
    <div className='mb-4'>
      <div>
        <p>Name: {props.firstName} {props?.lastName}</p>
        <p>Age: {props.age}</p>
        <p>Email: {props.personalInfo.email}</p>
        <p>Phone: {props.personalInfo.phone}</p>
        <p>GithubId: {props.personalInfo?.githubId || "-"}</p>
      </div>

      <div>
        <p>Skills:</p>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Year of Experiance</td>
              <td>Level</td>
              <td>Can Work Independently</td>
            </tr>
          </thead>
          <tbody>
            {
              props.skills.map(s => (
                <tr key={s.name}>
                  <td>{s.name}</td>
                  <td>{s.yearOfExp}</td>
                  <td>{s.level}</td>
                  <td>{s.canWorkIndependently ? "Yes" : "No"}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Details({ userList, title }: exampleType) {
  return (
    <div>
      <h1 className='mb-4'>{title}</h1>

      <div>
        <h2 className='mb-2'>User list</h2>

        {
          userList.map(user => (
            <div key={user.id}>
              <Person
                personalInfo={user.personalInfo}
                firstName={user.firstName}
                lastName={user.lastName}
                skills={user.skills}
                age={user.age}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

function Example1() {
  return <Details title='Example 1' userList={userList} />
}

export default Example1