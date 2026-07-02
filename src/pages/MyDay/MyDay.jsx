import { Star } from 'lucide-react';
import { Circle } from 'lucide-react';
import { getDate } from '../../../utils/utils';
import Panel from '../Panel/Panel';
import { useContext } from 'react';
import { TaskContext } from '../TaskContext/TaskContext';


function MyDay(props) {
  const todayDate = getDate();


  const {
    task,
    setTask,
    allTasks,
    setAllTasks,
    handleAddTask,
    handleTaskInputImportant,
    handleTaskInput,
    handleMarkComplete,
    handleMarkImportant
  } = useContext(TaskContext);



  return (
    <div className={`${!props.open && "hidden"} overflow-auto bg-[#FAF9F8] flex flex-col`}>
      <div className='my-4 mx-6 py-2.5'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center'>
              <div className='py-1.5 px-2 flex'>
                <svg class="fluentIcon listTitle-icon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0v-1.5c0-.41.34-.75.75-.75zm0 15a5 5 0 100-10 5 5 0 000 10zm0-1.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm9.25-2.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM12 19c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0v-1.5c0-.41.34-.75.75-.75zm-7.75-6.25a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zm-.03-8.53c.3-.3.77-.3 1.06 0l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zm1.06 15.56a.75.75 0 11-1.06-1.06l1.5-1.5a.75.75 0 111.06 1.06l-1.5 1.5zm14.5-15.56a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 001.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06zm-1.06 15.56a.75.75 0 101.06-1.06l-1.5-1.5a.75.75 0 10-1.06 1.06l1.5 1.5z" fill="currentColor"></path></svg>
                <div className='ml-2 text-[#292827] text-xl'>My Day</div>
              </div>
              <button className='ml-0.5 p-1 text-[#605E5C] text-xl flex items-center justify-center'>
                ...
              </button>
              <button className='ml-1 py-2.5 px-3 text-[#605E5C] flex'>
                <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 012 16.5v-4c0-.83.67-1.5 1.5-1.5h4zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5h4zm-9-9C8.33 2 9 2.67 9 3.5v4C9 8.33 8.33 9 7.5 9h-4A1.5 1.5 0 012 7.5v-4C2 2.67 2.67 2 3.5 2h4zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0111 7.5v-4c0-.83.67-1.5 1.5-1.5h4z" fill="currentColor"></path></svg>
                <div className='ml-2'>Grid</div>
              </button>
              <button className='ml-1 py-2.5 px-3 text-[#605E5C] flex'>
                <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H12.5zm5-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-.98l.1-.01H17.5zm-4-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5z" fill="currentColor"></path></svg>
                <div className='ml-2'>List</div>
              </button>
            </div>
            <div className='py-0 px-2.5 text-[#605E5C] text-xs'>{todayDate}</div>
          </div>
          <div className='flex justify-center  items-center'>
            <button className='ml-0.5 py-0.5 px-3 text-[#34373D] flex'>
              <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.35 7.35L5 4.71V16.5a.5.5 0 001 0V4.7l2.65 2.65a.5.5 0 00.7-.7l-3.49-3.5A.5.5 0 005.5 3a.5.5 0 00-.39.18L1.65 6.65a.5.5 0 10.7.7zm15.3 5.3L15 15.29V3.5a.5.5 0 00-1 0v11.8l-2.65-2.65a.5.5 0 00-.7.7l3.49 3.5a.5.5 0 00.36.15.5.5 0 00.39-.18l3.46-3.47a.5.5 0 10-.7-.7z" fill="currentColor"></path></svg>
              <div className='text-[#605E5C] ml-1'>Sort</div>
            </button>
            <button className='ml-0.5 py-0.5 px-3 text-[#34373D] flex'>
              <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zm-8 2a.5.5 0 01.5.41v7.09a.5.5 0 01-1 .09V6.5c0-.28.22-.5.5-.5z" fill="currentColor"></path></svg>
              <div className='text-[#605E5C] ml-1'>Group</div>
            </button>
            <button className='ml-0.5 py-0.5 px-3 text-[#34373D] flex'>
              <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2c3.31 0 6 2.6 6 5.8 0 1.68-.75 3.22-2.2 4.6a.6.6 0 00-.15.2l-.02.09-.94 3.92a1.84 1.84 0 01-1.67 1.38l-.15.01H9.13c-.82 0-1.54-.52-1.78-1.26l-.04-.14-.93-3.91a.6.6 0 00-.17-.3A6.32 6.32 0 014 8.04L4 7.8v-.2A5.91 5.91 0 0110 2zm2.04 13H7.96l.31 1.33.03.1c.1.3.38.52.71.56l.12.01h1.81a.86.86 0 00.75-.53l.03-.1.32-1.37zM10 3a4.92 4.92 0 00-4.98 4.41L5 7.63V8c.06 1.3.68 2.52 1.9 3.67.18.17.32.4.4.64l.05.15.37 1.54h4.57l.38-1.61.05-.16c.09-.21.22-.4.39-.56C14.38 10.47 15 9.18 15 7.8A4.9 4.9 0 0010 3z" fill="currentColor"></path></svg>
              <div className='text-[#605E5C] ml-1'>Suggestions</div>
            </button>
          </div>
        </div>
      </div>

      <div className='mt-0 mb-0 grow flex flex-col gap-4 px-5'>

        <div className='flex flex-col justify-center shadow-md rounded-lg'>
          <div className='px-4 flex bg-[#FFFFFF] items-center rounded-t-lg'>
            <svg className='ml-2.5 my-auto' class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z" fill="currentColor"></path></svg>
            <input type="text" placeholder='Add a task' value={task?.title} onChange={handleTaskInput} name="" id="" className='outline-none w-full py-4 px-3.5' />
          </div>
          <div className='rounded-b-lg px-4 bg-[#FAF9F8] flex py-2 border border-transparent border-t-[#d2cec9]'>
            <input className='p-1 mx-1.5' type='date' value={task?.dueDate} onChange={(e) => setTask({
              ...task,
              dueDate: e.target.value
            })} />
            <button className='p-1 mx-1.5'>
              <svg class="fluentIcon reminderButton-icon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.92 2.22a1 1 0 01.06.17l.01.08.01.13a1 1 0 01-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0110 2zm1.5 13h-3v.15a1.5 1.5 0 001.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15zM10 3a4.9 4.9 0 00-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0010 3z" fill="currentColor"></path></svg>
            </button>
            <button className='p-1 mx-1.5'>
              <svg class="fluentIcon recurringButton-icon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6.67a.5.5 0 01.3.1l.08.07.01.02A5 5 0 0113.22 15L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06-2.5-2.5a.5.5 0 01-.06-.63l.06-.07 2.5-2.5a.5.5 0 01.76.63l-.06.07L6.72 14h.14L7 14h6a4 4 0 003.11-6.52.5.5 0 01.39-.81zm-4.85-4.02a.5.5 0 01.63-.06l.07.06 2.5 2.5.06.07a.5.5 0 010 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 01-.56 0l-.07-.06-.06-.07a.5.5 0 010-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 00-3.1 6.52c.06.09.1.2.1.31a.5.5 0 01-.9.3A4.99 4.99 0 016.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 01.06-.63z" fill="currentColor"></path></svg>
            </button>
            <button onClick={handleAddTask} disabled={task?.title.length === 0} className={`ml-auto px-2 ${task?.title.length > 0 ? "text-blue-600 cursor-pointer" : "text-gray-400 cursor-not-allowed"}  bg-[#fbf9f6] border border-gray-200`}>Add</button>
          </div>
        </div>

        <div className='flex flex-col justify-center shadow-md rounded-lg'>
          <div className='flex bg-[#FFFFFF] rounded-t-lg'>
            <div className='py-2.5 px-4'> </div>
            <div className='py-2.5 px-4 w-150'>Title</div>
            <div className='py-2.5 px-4 w-28'>Due Date</div>
            <div className='py-2.5 px-4'>Important</div>
          </div>

          {allTasks.map((task, index) => {
            if (task?.today === new Date().toLocaleDateString() && task?.isCompleted === false) {
              return (
                <div>

                  <div key={index} className='flex items-center bg-[#FAF9F8] rounded-b-lg border border-transparent border-t-[#d2cec9]'>
                    <div className='px-1.5' >
                      <button onClick={() =>
                        handleMarkComplete(index)
                      } color={task?.isCompleted ? "blue" : "black"}>
                        <Circle />
                      </button>

                    </div>
                    <div className='py-2.5 px-4 w-150'> {task?.title} </div>
                    <div className='py-2.5 px-4 w-32'>{task?.dueDate} </div>
                    <div className='my-3 mx-9.5 '>
                      <Star onClick={() => handleMarkImportant(index)} size={16} color={task?.isImportant ? "blue" : "black"} />
                    </div>
                  </div>
                </div>
              );
            }
            else if (task?.today === new Date().toLocaleDateString() && task?.isCompleted === true) {
              return (
                <div>

                  <div key={index} className='flex bg-[#FAF9F8] rounded-b-lg border border-transparent border-t-[#d2cec9]'>
                    <div className='px-1.5 py-2.5'>
                      <Circle onClick={() => handleMarkComplete(index)} color={task?.isCompleted ? "blue" : "black"} background-color={task?.isCompleted ? "blue" : "black"} />
                    </div>
                    <div className='py-2.5 px-4 w-150 line-through decoration-1'>{task?.title}</div>
                    <div className='py-2.5 px-4 w-32'>{task?.dueDate}</div>
                    <div className='my-3 mx-9.5'>
                      <Star onClick={() => handleMarkImportant(index)} size={16} color={task?.isImportant ? "blue" : "black"} />
                    </div>
                  </div>
                </div>

              )
            }
            return;
          })}
        </div>

      </div>

    </div>
  )
}

export default MyDay
