import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";

const App: FC = () => {
  // const { users, isLoading,error } = useAppSelector(state => state.userReducer);
  // const dispatch = useAppDispatch()
  //
  // useEffect(()=> {
  //   dispatch((fetchUsers()))
  // }, [])

  return(
      <div className='App'>
          <PostContainer/>
        {/*{isLoading ? <h1>Загрузка пользователей</h1> : null }*/}
        {/*{error ? <h1>{error}</h1> : null }*/}
        {/*{JSON.stringify(users, null, 2)}*/}
      </div>
  )
}

export default App;
