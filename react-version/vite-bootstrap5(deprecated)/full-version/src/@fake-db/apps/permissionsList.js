import mock from '../mock'

// ** Utils
import { paginateArray } from '../utils'

const data = {
  permissions: [
    {
      id: 1,
      name: 'Management',
      assignedTo: ['administrator'],
      createdDate: '14 Apr 2021, 8:43 PM'
    },
    {
      id: 2,
      assignedTo: ['administrator'],
      name: 'Manage Billing & Roles',
      createdDate: '16 Sep 2021, 5:20 PM'
    },
    {
      id: 3,
      name: 'Add & Remove Users',
      createdDate: '14 Oct 2021, 10:20 AM',
      assignedTo: ['administrator', 'manager']
    },
    {
      id: 4,
      name: 'Project Planning',
      createdDate: '14 Oct 2021, 10:20 AM',
      assignedTo: ['administrator', 'user', 'support']
    },
    {
      id: 5,
      name: 'Manage Email Sequences',
      createdDate: '23 Aug 2021, 2:00 PM',
      assignedTo: ['administrator', 'user', 'support']
    },
    {
      id: 6,
      name: 'Client Communication',
      createdDate: '15 Apr 2021, 11:30 AM',
      assignedTo: ['administrator', 'manager']
    },
    {
      id: 7,
      name: 'Only View',
      createdDate: '04 Dec 2021, 8:15 PM',
      assignedTo: ['administrator', 'restricted-user']
    },
    {
      id: 8,
      name: 'Financial Management',
      createdDate: '25 Feb 2021, 10:30 AM',
      assignedTo: ['administrator', 'manager']
    },
    {
      id: 9,
      name: 'Manage Others’ Tasks',
      createdDate: '04 Nov 2021, 11:45 AM',
      assignedTo: ['administrator', 'support']
    }
  ]
}

// ------------------------------------------------
// GET: Return Permissions List
// ------------------------------------------------
mock.onGet('/apps/permissions/data').reply(config => {
  const { q = '', perPage = 10, page = 1, assignedTo = '' } = config.params
  const queryLowered = q.toLowerCase()
  const filteredData = data.permissions.filter(permission => {
    if (assignedTo !== '') {
      return (
        (permission.name.toLowerCase().includes(queryLowered) ||
          permission.createdDate.toLowerCase().includes(queryLowered)) &&
        permission.assignedTo.includes(assignedTo)
      )
    } else {
      return (
        permission.name.toLowerCase().includes(queryLowered) ||
        permission.createdDate.toLowerCase().includes(queryLowered)
      )
    }
  })

  return [
    200,
    {
      params: config.params,
      allData: data.permissions,
      total: filteredData.length,
      permissions: paginateArray(filteredData, perPage, page)
    }
  ]
})

// POST: Add new permission
mock.onPost('/apps/permissions/add-permission').reply(config => {
  // Get permission from post data
  const permission = JSON.parse(config.data).permission

  const { length } = data.permissions
  let lastIndex = 0
  if (length) {
    lastIndex = data.permissions[length - 1].id
  }
  permission.id = lastIndex + 1

  permission.assignedTo = ['administrator']

  const now = new Date()
  const months = now
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
    .replace(',', '')
  const time = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  const monthsArr = months.split(' ')
  /*eslint-disable */
  const moveElement = (array, sourceIndex, destinationIndex) => {
    return array.map(a =>
      a === sourceIndex
        ? array.find(a => a === destinationIndex)
        : a === destinationIndex
        ? array.find(a => a === sourceIndex)
        : a
    )
  }

  const finalDate = moveElement(monthsArr, monthsArr[0], monthsArr[1]).join(' ')

  permission.createdDate = `${finalDate}, ${time}`

  data.permissions.unshift(permission)

  return [201, { permission }]
})

mock.onPost('/apps/permissions/update-permission').reply(config => {
  // Get permission from post data
  const { id, name } = JSON.parse(config.data)

  data.permissions.find(i => {
    if (i.id === id) {
      i.name = name
    }
  })

  return [201]
})

// DELETE: Deletes Permissions
mock.onDelete('/apps/permissions/delete').reply(config => {
  // Get  id from URL
  let permissionID = config.id

  // Convert Id to number
  permissionID = Number(permissionID)

  const permissionIndex = data.permissions.findIndex(t => t.id === permissionID)
  data.permissions.splice(permissionIndex, 1)

  return [200]
})
