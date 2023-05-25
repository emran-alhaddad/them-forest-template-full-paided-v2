// ** React Imports
import { useState, useEffect, Fragment } from 'react'

// ** Reactstrap Imports
import { Input, Button, FormText, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

// ** Third Party Imports
import { ReactSortable } from 'react-sortablejs'
import { useForm, Controller } from 'react-hook-form'
import { Plus, MoreVertical } from 'react-feather'

// ** Redux Imports
import { useDispatch } from 'react-redux'

// ** Actions
import { addTask, clearTasks, deleteBoard, reorderTasks, updateTaskBoard } from './store'

import KanbanTasks from './KanbanTasks'
// ** Kanban Component

const defaultValues = {
  taskTitle: ''
}

const KanbanBoard = props => {
  // ** Props
  const { board, index, store, labelColors, handleTaskSidebarToggle } = props

  // ** States
  const [title, setTitle] = useState('')
  const [showAddTask, setShowAddTask] = useState(null)

  // ** Hooks
  const dispatch = useDispatch()
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  useEffect(() => {
    setTitle(board.title)
  }, [board.title])

  const handleAddTaskReset = () => {
    reset()
    setShowAddTask(null)
  }

  const handleOpenAddTask = () => {
    reset()
    setShowAddTask(board.id)
  }

  const handleClearTasks = () => {
    dispatch(clearTasks(board.id))
  }

  const handleDeleteBoard = () => {
    dispatch(deleteBoard(board.id))
  }

  const handleAddTaskFormSubmit = data => {
    dispatch(addTask({ title: data.taskTitle, boardId: board.id }))
    handleAddTaskReset()
  }

  const renderAddTaskForm = () => {
    return board.id === showAddTask ? (
      <form onSubmit={handleSubmit(handleAddTaskFormSubmit)}>
        <div className='mb-1'>
          <Controller
            name='taskTitle'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                autoFocus
                rows='2'
                value={value}
                type='textarea'
                id='task-title'
                onChange={onChange}
                placeholder='Add Content'
                invalid={errors.taskTitle && true}
                aria-describedby='validation-add-task'
              />
            )}
          />
          {errors.taskTitle && (
            <FormText color='danger' id='validation-add-task'>
              Please enter a valid Task Title
            </FormText>
          )}
        </div>
        <div>
          <Button color='primary' size='sm' type='submit' className='me-75'>
            Add
          </Button>
          <Button outline size='sm' color='secondary' onClick={handleAddTaskReset}>
            Cancel
          </Button>
        </div>
      </form>
    ) : null
  }

  const sortTaskOnSameBoard = ev => {
    if (ev.from.classList[1] === ev.to.classList[1]) {
      dispatch(
        reorderTasks({
          taskId: ev.item.dataset.taskId,
          targetTaskId: ev.originalEvent.target.dataset.taskId
        })
      )
    }
  }

  const MoveTaskToAnotherBoard = ev => {
    dispatch(
      updateTaskBoard({
        taskId: ev.item.dataset.taskId,
        boardId: ev.item.dataset.boardId,
        newBoardId: ev.to.classList[1].replace('board-', '')
      })
    )
  }

  return (
    <Fragment key={index}>
      <div className='board-wrapper'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center board-header'>
            <Input className='board-title' value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <UncontrolledDropdown className='more-options-dropdown'>
            <DropdownToggle className='btn-icon' color='transparent' size='sm'>
              <MoreVertical size={20} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem
                href='/'
                onClick={e => {
                  e.preventDefault()
                  handleClearTasks()
                }}
              >
                Clear Tasks
              </DropdownItem>
              <DropdownItem
                href='/'
                onClick={e => {
                  e.preventDefault()
                  handleDeleteBoard()
                }}
              >
                Delete Board
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <div>
          <ReactSortable
            list={store.tasks}
            group='shared-group'
            setList={() => null}
            onChange={sortTaskOnSameBoard}
            onAdd={MoveTaskToAnotherBoard}
            className={`tasks-wrapper board-${board.id}`}
          >
            {store.tasks.map((task, index) => {
              if (task.boardId === board.id) {
                return (
                  <KanbanTasks
                    task={task}
                    index={index}
                    labelColors={labelColors}
                    key={`${task.boardId}-${index}`}
                    handleTaskSidebarToggle={handleTaskSidebarToggle}
                  />
                )
              } else {
                return <Fragment key={`${task.boardId}-${index}`}></Fragment>
              }
            })}
          </ReactSortable>

          {showAddTask === null || (showAddTask !== null && showAddTask !== board.id) ? (
            <Button size='sm' color='flat-secondary' onClick={handleOpenAddTask}>
              <Plus size={14} className='me-25' />
              <span className='align-middle'>Add New Task</span>
            </Button>
          ) : (
            renderAddTaskForm()
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default KanbanBoard
