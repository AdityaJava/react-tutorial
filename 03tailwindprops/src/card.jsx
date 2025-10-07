
function UserCard(){
  return(
    <div className="max-w-xs mx-auto">
    <div className="bg-white rounded-xl shadow-md overflow-hidden ring-1 ring-slate-200">
      <div className="h-32 bg-[url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80')] bg-cover"></div>
      <div className="p-4 flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80"
          alt="User avatar"
          className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow-sm"
          loading="lazy"
        />
        <div>
          <h2 className="text-sm font-semibold text-slate-900">Rahul Verma</h2>
          <p className="text-xs text-slate-500">Frontend Developer</p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default UserCard;