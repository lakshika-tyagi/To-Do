import React from 'react'
import Panel from '../Panel/Panel'
import { useContext } from 'react';
import { TaskContext } from '../TaskContext/TaskContext';
import { Star } from 'lucide-react';
import { Circle } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

function Important(props) {

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
    <div className={`${!props.open && "hidden"} overflow-auto flex flex-col bg-[#FAF9F8] `}
    >
      <div className='flex justify-between items-center my-4 mx-6 text-[20px] text-[#2564CF]'>
        <div className='flex items-center'>
          <div className='py-1.5 px-2 flex items-center'>
            <svg class="fluentIcon listTitle-icon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 01-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 01-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78zm1.2.94L9.75 8.6c-.2.4-.58.68-1.02.74l-5.05.74 3.66 3.56c.32.3.46.76.39 1.2l-.87 5.02 4.52-2.37c.4-.2.86-.2 1.26 0l4.51 2.37-.86-5.03c-.07-.43.07-.88.39-1.2l3.65-3.55-5.05-.74a1.35 1.35 0 01-1.01-.74L12 4.04z" fill="currentColor"></path></svg>
            <div className='ml-2'>Important</div>
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

      <div className='mt-0 mb-0 grow flex flex-col gap-4 px-5'>

        <div className='flex flex-col justify-center shadow-md rounded-lg'>
          <div className='px-4 flex bg-[#FFFFFF] items-center rounded-t-lg'>
            <svg className='ml-2.5 my-auto' class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z" fill="currentColor"></path></svg>
            <input type="text" placeholder='Add a task' value={task?.title} onChange={handleTaskInputImportant} name="" id="" className='outline-none w-full py-4 px-3.5' />
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
            <button onClick={() => { handleAddTask();  }} disabled={task?.title.length === 0} className={`ml-auto px-2 ${task?.title.length > 0 ? "text-blue-600 cursor-pointer" : "text-gray-400 cursor-not-allowed"}  bg-[#fbf9f6] border border-gray-200`}>Add</button>
          </div>
        </div>

        <div className='flex flex-col justify-center shadow-md rounded-lg'>
          <div className='flex bg-[#FFFFFF] rounded-t-lg '>
            <div className='py-2.5 px-1'>
              <ChevronDown /> </div>
            <div className='py-2.5 px-4'>Important</div>
          </div>

          {allTasks.map((task, index) => {
            if (!task?.isImportant || task?.isCompleted) {
              return;
            }
            return (
              <div>

                <div key={index} className='flex bg-[#FAF9F8] rounded-b-lg border border-transparent border-t-[#d2cec9]'>
                  <div className='px-1.5 py-2.5'>
                    <Circle onClick={() => handleMarkComplete(index)} color={task?.isCompleted ? "blue" : "black"} background-color={task?.isCompleted ? "blue" : "black"} />
                  </div>
                  <div className='py-2.5 px-4 w-150'>{task?.title}</div>
                  <div className='py-2.5 px-4 w-32'>{task?.dueDate}</div>
                  <div className='my-3 mx-9.5'>
                    <Star onClick={() => handleMarkImportant(index)} size={16} color={task?.isImportant ? "blue" : "black"} />
                  </div>
                </div>
              </div>

            )
          })}
        </div>

      </div>

    </div>
  )
}

export default Important
