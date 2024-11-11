import { Navigate } from 'react-router-dom'

const Authentication = ({children}) => {
   // const navigate = useNavigate()
   const token = localStorage.getItem('token')
   // console.log(token);
   if(token === null) {
      return children
   }
   if(token !== null) {
      // navigate('/admin/dashboard')
      return <Navigate to='/admin/dashboard' />
   }
}

export default Authentication