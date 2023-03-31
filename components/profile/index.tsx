import { GET_PROFILE } from '@/gql/userQueries';
import { useAppDispatch } from '@/hooks';
import { RootState } from '@/store';
import { setUser } from '@/store/slices/user.slice';
import { get_cookie } from '@/utils/functions';
import { useQuery } from '@apollo/client';
import React from 'react'
import { useSelector } from 'react-redux';

function Profile(props: any) {
  const userInfo: any = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const { loading, data } = useQuery(GET_PROFILE, {
    skip: !!userInfo.user.id,
    onError: (error) => {
      console.log(error);
    },
    onCompleted: (data) => {
      dispatch(setUser(data?.getMe?.user)); // Update the Redux store with the user details
    },
    context: {
      headers: {
        authorization: `Bearer ${get_cookie('token') ?? ""}`,
      },
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {userInfo.user ? (
        <div>
          <p>Name: {userInfo?.user.name}</p>
          <p>Email: {userInfo?.user.email}</p>
          <p>Photo: {userInfo?.user.photo}</p>
          <p>Role: {userInfo?.user.role}</p>
        </div>
      ) : (
        <div>No userInfo.user details found</div>
      )}
    </div>
  );
}

export default Profile;