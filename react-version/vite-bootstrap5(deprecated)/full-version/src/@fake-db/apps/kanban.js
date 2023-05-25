// ** Mock Adapter
import mock from '../mock'

// Avatar Imports
import avatar1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import avatar4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import avatar5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'

// Icons Imports
import jsIcon from '@src/assets/images/icons/file-icons/js.png'
import docIcon from '@src/assets/images/icons/file-icons/doc.png'
import pdfIcon from '@src/assets/images/icons/file-icons/pdf.png'
import txtIcon from '@src/assets/images/icons/file-icons/txt.png'

// Cover Import
import coverImage from '@src/assets/images/slider/03.jpg'

const now = new Date()
const dayAfterTomorrow = now.setDate(now.getDate() + 2)

const changeIndex = (arr, fromIndex, toIndex) => {
  const element = arr[fromIndex]
  arr.splice(fromIndex, 1)
  arr.splice(toIndex, 0, element)
}

const data = {
  boards: [
    {
      id: 'todo',
      title: 'TODO'
    },
    {
      id: 'in-progress',
      title: 'In Progress'
    },
    {
      id: 'done',
      title: 'Done'
    }
  ],
  tasks: [
    {
      id: 1,
      labels: ['UX'],
      boardId: 'todo',
      description: 'lorem',
      dueDate: dayAfterTomorrow,
      title: 'Research FAQ page UX',
      attachments: [
        {
          name: 'documentation.doc',
          img: docIcon
        },
        {
          name: 'app.js',
          img: jsIcon
        }
      ],
      comments: [
        {
          name: 'Joey Tribbiani',
          img: avatar3,
          comment: 'Complete this on priority'
        },
        {
          name: 'Chandler Bing',
          img: avatar5,
          comment: 'Complete this on priority'
        },
        {
          name: 'Monica Geller',
          img: avatar6,
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          title: 'Ross Geller',
          img: avatar1
        },
        {
          title: 'Pheobe Buffay',
          img: avatar2
        }
      ]
    },
    {
      id: 2,
      labels: ['Images'],
      boardId: 'todo',
      coverImage,
      description: 'lorem',
      dueDate: dayAfterTomorrow,
      title: 'Find new images for the apps',
      comments: [],
      attachments: [
        {
          name: 'book.pdf',
          img: pdfIcon
        },
        {
          name: 'app.js',
          img: jsIcon
        }
      ],
      assignedTo: [
        {
          title: 'Rachel Green',
          img: avatar4
        }
      ]
    },
    {
      id: 3,
      labels: ['App'],
      attachments: [
        {
          name: 'list.txt',
          img: txtIcon
        },
        {
          name: 'pdf.png',
          img: pdfIcon
        }
      ],
      boardId: 'in-progress',
      description: '',
      dueDate: dayAfterTomorrow,
      title: 'Review completed Apps',
      comments: [
        {
          name: 'Chandler Bing',
          img: avatar5,
          comment: 'Complete this on priority'
        },
        {
          name: 'Monica Geller',
          img: avatar6,
          comment: 'Complete this on priority'
        },
        {
          name: 'Joey Tribbiani',
          img: avatar3,
          comment: 'Complete this on priority'
        },
        {
          name: 'Rachel Green',
          img: avatar4,
          comment: 'Complete this on priority'
        },
        {
          name: 'Ross Geller',
          img: avatar1,
          comment: 'Complete this on priority'
        },
        {
          name: 'Pheobe Buffay',
          img: avatar2,
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          title: 'Monica Geller',
          img: avatar3
        },
        {
          title: 'Chandler Bing',
          img: avatar4
        }
      ]
    },
    {
      id: 4,
      labels: ['Code Review'],
      attachments: [
        {
          name: 'list.txt',
          img: txtIcon
        },
        {
          name: 'pdf.png',
          img: pdfIcon
        },
        {
          name: 'documentation.doc',
          img: docIcon
        },
        {
          name: 'app.js',
          img: jsIcon
        }
      ],
      boardId: 'in-progress',
      description: '',
      dueDate: dayAfterTomorrow,
      title: 'Review Javascript Code',
      comments: [
        {
          name: 'Chandler Bing',
          img: avatar5,
          comment: 'Complete this on priority'
        },
        {
          name: 'Monica Geller',
          img: avatar6,
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          title: 'Joey Tribbiani',
          img: avatar3
        },
        {
          title: 'Jerry Seinfeld',
          img: avatar4
        }
      ]
    },
    {
      id: 5,
      labels: ['Forms'],
      attachments: [
        {
          name: 'list.txt',
          img: txtIcon
        }
      ],
      boardId: 'done',
      description: '',
      dueDate: dayAfterTomorrow,
      title: 'Forms & Tables Section',
      comments: [
        {
          name: 'Chandler Bing',
          img: avatar5,
          comment: 'Complete this on priority'
        },
        {
          name: 'Monica Geller',
          img: avatar6,
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          title: 'Astro Kramer',
          img: avatar1
        },
        {
          title: 'George Costanza',
          img: avatar2
        }
      ]
    },
    {
      id: 6,
      labels: ['Charts & Maps'],
      attachments: [
        {
          name: 'documentation.doc',
          img: docIcon
        },
        {
          name: 'app.js',
          img: jsIcon
        },
        {
          name: 'book.pdf',
          img: pdfIcon
        }
      ],
      boardId: 'done',
      description: '',
      dueDate: dayAfterTomorrow,
      title: 'Completed Charts & Maps',
      comments: [
        {
          name: 'Elaine Benes',
          img: avatar5,
          comment: 'Complete this on priority'
        },
        {
          name: 'Newman Knight',
          img: avatar6,
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          title: 'Charlie Kelly',
          img: avatar6
        },
        {
          title: 'Dennis Reynolds',
          img: avatar4
        }
      ]
    }
  ]
}

// ------------------------------------------------
// GET: Returns Boards
// ------------------------------------------------
mock.onGet('/apps/kanban/boards').reply(() => {
  return [200, data.boards]
})

// ------------------------------------------------
// GET: Returns Tasks
// ------------------------------------------------
mock.onGet('/apps/kanban/tasks').reply(() => {
  return [200, data.tasks]
})

// ------------------------------------------------
// POST: Reorder Tasks
// ------------------------------------------------
mock.onPost('/apps/kanban/reorder-tasks').reply(config => {
  const reOrderedTasks = JSON.parse(config.data).data

  const srcIndex = data.tasks.findIndex(i => Number(reOrderedTasks.taskId) === i.id)
  const targetIndex = data.tasks.findIndex(i => Number(reOrderedTasks.targetTaskId) === i.id)

  if (srcIndex !== -1 && targetIndex !== -1) {
    changeIndex(data.tasks, targetIndex, srcIndex)
  }

  return [200, data.tasks]
})

// ------------------------------------------------
// POST: Update Task Board
// ------------------------------------------------
mock.onPost('/apps/kanban/update-task-board').reply(config => {
  const updatedTask = JSON.parse(config.data).data

  const task = data.tasks.find(i => i.id === Number(updatedTask.taskId))

  task.boardId = updatedTask.newBoardId

  return [200, data.tasks]
})

// ------------------------------------------------
// POST: Adds Task
// ------------------------------------------------
mock.onPost('/apps/kanban/add-task').reply(config => {
  const task = JSON.parse(config.data).data

  const { length } = data.tasks

  let lastIndex = 0

  if (length) {
    lastIndex = data.tasks[length - 1].id
  }

  task.id = lastIndex + 1

  const newTask = {
    ...task,
    labels: [],
    attachments: [],
    dueDate: dayAfterTomorrow,
    comments: [],
    assignedTo: []
  }

  data.tasks.push(newTask)

  return [200, { newTask }]
})

// ------------------------------------------------
// POST: Adds Board
// ------------------------------------------------
mock.onPost('/apps/kanban/add-board').reply(config => {
  const board = JSON.parse(config.data).data
  data.boards.push(board)

  return [200, { board }]
})

// ------------------------------------------------
// POST: Update Task
// ------------------------------------------------
mock.onPost('/apps/kanban/update-task').reply(config => {
  const taskData = JSON.parse(config.data).data
  const task = data.tasks.find(task => task.id === taskData.id)
  Object.assign(task, taskData)

  return [200, { task }]
})

// ------------------------------------------------
// Delete: Deletes Boards
// ------------------------------------------------
mock.onDelete('/apps/kanban/delete-board').reply(config => {
  const Id = config.data

  const filteredBoards = data.boards.filter(b => b.id !== Id)
  const filteredTasks = data.tasks.filter(t => t.boardId !== Id)

  data.tasks = filteredTasks
  data.boards = filteredBoards

  return [200]
})

// ------------------------------------------------
// Delete: Clears Tasks
// ------------------------------------------------
mock.onDelete('/apps/kanban/clear-tasks').reply(config => {
  const Id = config.data
  const filteredTasks = data.tasks.filter(t => t.boardId !== Id)
  data.tasks = filteredTasks

  return [200]
})
