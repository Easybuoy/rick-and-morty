import React, { useState } from 'react';
import { withApollo } from 'react-apollo';
import { gql } from 'apollo-boost';

const LOGIN_MUTATION = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      username
      email
      id
      token
    }
  }
`;

export function MutationWithHOC({ client }) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = client;

  const onSubmit = async e => {

    try {
      e.preventDefault();
      const res = await mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          email,
          password
        }
      });

      setSuccess(res.data);
    } catch (err) {
      setError(err);
    }
  };

  if(error) {
    alert('Error Logging In User');
  }

  if (success) {
    alert('Successfully Logged In');
  }

  return (
    <form id="signinForm" className="text-center  p-4" onSubmit={onSubmit}>
      <p className="h4 mb-4 f-1">Sign In</p>

      <input
        title="Email"
        id="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        required
      />
      <input
        title="Password"
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      <div className="form-group my-4">
        <button className="btn btn-block" type="submit">
          Sign In
        </button>
      </div>
    </form>
  );
}

export default withApollo(MutationWithHOC);
