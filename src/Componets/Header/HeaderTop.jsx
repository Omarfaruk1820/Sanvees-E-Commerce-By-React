import logo from '../../assets/logo/logo.webp'

const HeaderTop = () => {
    return (
        <div>
            <div className="navbar bg-base-100 ">
  <div className="flex-1">
   
    <div className='flex'>
    <img className='w-16 border rounded-full h-16' src={logo} alt="" />
    <h1 className='mt-2 ml-2  font-bold'>Sanvees<br></br>BY TONY</h1>
    </div>
  </div>
  <div className="flex gap-2">
    <div className="form-control w-96">
      <input type="text" placeholder="Search" className="input input-bordered  md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default HeaderTop;