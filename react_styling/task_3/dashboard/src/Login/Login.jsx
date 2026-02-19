import WithLogging from '../HOC/WithLogging';

const Login = () => {
  return (
    <div className='h-full mt-5 ml-5 pt-5 border-t-2 border-main'>
      <p className='mb-4'>Login to access the full dashboard</p>
      <div className='flex flex-col md:flex-row md:items-center gap-4'>
        <div className='flex items-center gap-2'>
          <label htmlFor='email'>Email:</label>
          <input type="email" id='email' className='border border-gray-400 rounded px-2 py-1'/>
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='password'>Password:</label>
          <input type="password" id='password' className='border border-gray-400 rounded px-2 py-1'/>
        </div>
        <button className='border border-gray-400 px-4 py-1 rounded hover:bg-gray-100'>OK</button>
      </div>
    </div>
  )
};

export default WithLogging(Login);
