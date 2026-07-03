import React from 'react'

function Assigned(props) {
  return (
    <div className={`${!props.open && "hidden"} h-screen overflow-auto flex flex-col bg-[#FAF9F8]`} >
      
      <div className='flex justify-between items-center my-4 mx-6 text-[20px] text-[#457E21]'>
        <div className='flex items-center'>
          <div className='py-1.5 px-2 flex items-center'>
            <svg class="fluentIcon listTitle-icon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.75 14C19 14 20 15 20 16.25v.57c0 .9-.32 1.76-.9 2.44C17.53 21.1 15.15 22 12 22c-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 01-.9-2.43v-.58C4 15 5.01 14 6.25 14h11.5zm0 1.5H6.25a.75.75 0 00-.75.75v.58c0 .53.2 1.05.54 1.46C7.3 19.76 9.26 20.5 12 20.5c2.74 0 4.7-.74 5.96-2.21.35-.41.54-.93.54-1.47v-.57a.75.75 0 00-.75-.75zM12 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="currentColor"></path></svg>
            <div className='ml-2'>Assigned to me</div>
          </div>
          <div className='p-1 ml-0.5 items-center text-center'>
            <button >...</button>
          </div>
          <div className='py-2 px-3 ml-1.5 flex items-center'>
            <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 012 16.5v-4c0-.83.67-1.5 1.5-1.5h4zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5h4zm-9-9C8.33 2 9 2.67 9 3.5v4C9 8.33 8.33 9 7.5 9h-4A1.5 1.5 0 012 7.5v-4C2 2.67 2.67 2 3.5 2h4zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0111 7.5v-4c0-.83.67-1.5 1.5-1.5h4z" fill="currentColor"></path></svg>
            <div className='ml-2'>Grid</div>
          </div>
          <div className='py-2 px-3 ml-1.5 flex items-center'>
            <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H12.5zm5-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-.98l.1-.01H17.5zm-4-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5z" fill="currentColor"></path></svg>
            <div className='ml-2 '>List</div>
          </div>
        </div>
        <div className='py-0.5 px-3 ml-1 right-0 flex items-center'>
          <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.35 7.35L5 4.71V16.5a.5.5 0 001 0V4.7l2.65 2.65a.5.5 0 00.7-.7l-3.49-3.5A.5.5 0 005.5 3a.5.5 0 00-.39.18L1.65 6.65a.5.5 0 10.7.7zm15.3 5.3L15 15.29V3.5a.5.5 0 00-1 0v11.8l-2.65-2.65a.5.5 0 00-.7.7l3.49 3.5a.5.5 0 00.36.15.5.5 0 00.39-.18l3.46-3.47a.5.5 0 10-.7-.7z" fill="currentColor"></path></svg>
          <div className='ml-1 '>Sort</div>
        </div>
      </div>

      <div className='flex flex-col grow justify-center items-center'>
        <div className='mb-4'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250" height="250" viewBox="0 0 165 163"><defs><path id="a" d="M.011.205H28.91v82.767H.01z"></path></defs><g fill="none" fill-rule="evenodd"><path fill="#F8F8F8" d="M26 69.539L34 61v30h-8z"></path><path fill="#C8C8C8" d="M33.898 122.489H8.761c-2.074 0-3.76-1.7-3.76-3.787V43.506c0-2.086 1.686-3.784 3.76-3.784h25.137v1.258H8.761a2.522 2.522 0 0 0-2.511 2.526v75.196a2.523 2.523 0 0 0 2.511 2.528h25.137v1.259z"></path><g transform="translate(131.263 39.516)"><mask id="b" fill="#fff"><use xlink:href="#a"></use></mask><path fill="#C8C8C8" d="M25.148 82.972H.011v-1.259h25.137a2.523 2.523 0 0 0 2.512-2.528V3.99a2.522 2.522 0 0 0-2.512-2.527H.011V.205h25.137c2.075 0 3.762 1.698 3.762 3.785v75.195c0 2.088-1.687 3.787-3.762 3.787" mask="url(https://to-do.live.com/tasks/assigned_to_me#b)"></path></g><path fill="#C8C8C8" d="M131.274 107.506h12.319v-1.258h-12.319zM26.672 107.506h7.227v-1.258h-7.227zM42.579 22.467c-1.994 0-3.616 1.634-3.616 3.642V136.1c0 2.01 1.622 3.643 3.616 3.643h80.014c1.995 0 3.617-1.634 3.617-3.642V26.11c0-2.009-1.622-3.643-3.617-3.643H42.58zM122.593 141H42.58c-2.683 0-4.865-2.198-4.865-4.9V26.11c0-2.703 2.182-4.9 4.865-4.9h80.014c2.684 0 4.866 2.197 4.866 4.9V136.1c0 2.702-2.182 4.9-4.866 4.9z"></path><path fill="#C8C8C8" d="M60.302 112.534c-2.247 0-4.075 1.84-4.075 4.1 0 2.263 1.828 4.103 4.075 4.103s4.075-1.84 4.075-4.102c0-2.261-1.828-4.1-4.075-4.1m0 9.46c-2.936 0-5.325-2.405-5.325-5.36 0-2.955 2.39-5.36 5.325-5.36 2.936 0 5.324 2.405 5.324 5.36 0 2.955-2.388 5.36-5.324 5.36M18.836 104.542a2.33 2.33 0 0 0-2.32 2.335 2.33 2.33 0 0 0 2.32 2.337 2.33 2.33 0 0 0 2.32-2.337 2.33 2.33 0 0 0-2.32-2.335m0 5.93c-1.968 0-3.57-1.612-3.57-3.595 0-1.982 1.602-3.593 3.57-3.593 1.968 0 3.57 1.611 3.57 3.593 0 1.983-1.602 3.594-3.57 3.594M72.21 117.264h33.518v-1.258H72.21zM60.302 96.534c-2.247 0-4.075 1.84-4.075 4.1 0 2.263 1.828 4.103 4.075 4.103s4.075-1.84 4.075-4.102c0-2.261-1.828-4.1-4.075-4.1m0 9.46c-2.936 0-5.325-2.405-5.325-5.36 0-2.955 2.39-5.36 5.325-5.36 2.936 0 5.324 2.405 5.324 5.36 0 2.955-2.388 5.36-5.324 5.36M72.21 101.264h33.518v-1.258H72.21zM60.302 80.534c-2.247 0-4.075 1.84-4.075 4.1 0 2.263 1.828 4.103 4.075 4.103s4.075-1.84 4.075-4.102c0-2.261-1.828-4.1-4.075-4.1m0 9.46c-2.936 0-5.325-2.405-5.325-5.36 0-2.955 2.39-5.36 5.325-5.36 2.936 0 5.324 2.405 5.324 5.36 0 2.955-2.388 5.36-5.324 5.36M72.21 85.264h33.518v-1.258H72.21zM20.193 75.878l-.884-.89 14.266-14.365.884.89zM33.881 91.726h-8.977V73.73h1.25v16.738h7.727z"></path><path fill="#F8F8F8" d="M131.274 66.19c5.11 0 9.25 4.17 9.25 9.312 0 5.145-4.14 9.316-9.25 9.316"></path><path fill="#C8C8C8" d="M131.274 85.446v-1.258c4.756 0 8.626-3.895 8.626-8.686 0-4.787-3.87-8.683-8.626-8.683v-1.258c5.445 0 9.876 4.46 9.876 9.941 0 5.484-4.43 9.944-9.876 9.944M143.963 76.132h5.585v-1.258h-5.585zM140.688 66.915l-.883-.89 3.95-3.977.884.89zM143.755 88.96l-3.95-3.978.883-.89 3.95 3.977zM131.274 93.902h1.25v-5.625h-1.25zM131.274 62.728h1.25v-5.625h-1.25z"></path><g stroke="#C8C8C8" stroke-width="1.5" transform="translate(74 42)"><circle cx="9" cy="6" r="6"></circle><path d="M18 24a9 9 0 0 0-18 0"></path></g></g></svg>
        </div>
        <div className='pr-4 text-[20px] text-center text-[#605E5C] font-medium'>Tasks assigned to you in To Do or <br /> Planner show up here</div>
      </div>

    </div>

  )
}

export default Assigned
