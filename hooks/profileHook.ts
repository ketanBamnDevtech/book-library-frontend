import { GET_PROFILE } from '@/gql/userQueries';
import { useAppDispatch } from '@/hooks';
import { RootState } from '@/store';
import { setUser } from '@/store/slices/user.slice';
import { get_cookie } from '@/utils/functions';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';

function UseProfile() {
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


  return ({
    data: userInfo
  });
}

export default UseProfile;